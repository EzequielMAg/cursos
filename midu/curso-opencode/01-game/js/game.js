import { STATE, SPEED_INITIAL, SPEED_MAX, DIFFICULTY_DISTANCE, DIFFICULTY_FACTOR, SCORE_DISTANCE_MULTIPLIER, GROUND_RATIO, POWERUP } from './constants.js';
import { player } from './player.js';
import { obstacles, resetObstacles, updateObstacles, drawObstacles } from './obstacles.js';
import { spawnParticles, updateParticles, drawParticles, clearParticles } from './particles.js';
import { powerups, resetPowerups, updatePowerups, checkCollection, drawPowerups } from './powerups.js';
import { drawBackground } from './background.js';
import { playDeath, playPowerup, toggleSound, startMusic, stopMusic } from './audio.js';

const STATE_KEY = 'neon-dash-best';

let W = 0;
let H = 0;
let groundY = 0;

let scoreEl;
let bestValEl;
let finalScoreEl;
let finalBestEl;
let menuEl;
let overEl;
let soundBtn;

let state = STATE.MENU;
let score = 0;
let best = 0;
let speed = 0;
let distance = 0;
let flashTimer = 0;
let dangerFlash = 0;
let scorePulse = 0;

let shakeX = 0;
let shakeY = 0;
let shakeIntensity = 0;

let activePowerup = null;
let powerupTimer = 0;

const POWERUP_UI = {
  shield: { color: '#4488ff', label: 'SHIELD' },
  '2x': { color: '#ffd700', label: '2X' },
  slow: { color: '#44ff44', label: 'SLOW' }
};

export function getState() { return state; }
export function getGroundY() { return groundY; }

function triggerShake(intensity) {
  shakeIntensity = intensity;
}

function updateShake() {
  if (shakeIntensity > 0) {
    shakeX = (Math.random() - 0.5) * shakeIntensity * 2;
    shakeY = (Math.random() - 0.5) * shakeIntensity * 2;
    shakeIntensity *= 0.9;
    if (shakeIntensity < 0.5) {
      shakeIntensity = 0;
      shakeX = 0;
      shakeY = 0;
    }
  }
}

function collides(a, b) {
  return a.x < b.x + b.w &&
         a.x + a.w > b.x &&
         a.y < b.y + b.h &&
         a.y + a.h > b.y;
}

export function init() {
  scoreEl = document.getElementById('score');
  bestValEl = document.getElementById('best-val');
  finalScoreEl = document.getElementById('final-score');
  finalBestEl = document.getElementById('final-best');
  menuEl = document.getElementById('menu');
  overEl = document.getElementById('over');
  const playBtn = document.getElementById('play-btn');
  const restartBtn = document.getElementById('restart-btn');
  soundBtn = document.getElementById('sound');

  best = parseInt(localStorage.getItem(STATE_KEY)) || 0;
  bestValEl.textContent = best;
  player.reset(groundY);

  playBtn.addEventListener('click', startGame);
  restartBtn.addEventListener('click', restartGame);
  soundBtn.addEventListener('click', () => {
    const on = toggleSound();
    soundBtn.textContent = on ? '\u{1F50A}' : '\u{1F507}';
  });
}

export function resize(canvas) {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  groundY = H * GROUND_RATIO;
  if (player.y + player.size > groundY) {
    player.y = groundY - player.size;
    player.grounded = true;
  }
}

// --- Input dispatch ---

export function handleJump() {
  if (state === STATE.MENU) {
    startGame();
    return;
  }
  if (state === STATE.OVER) {
    restartGame();
    return;
  }
  player.jump(groundY);
}

// --- Powerup ---

function activatePowerup(type) {
  activePowerup = type;
  powerupTimer = POWERUP.DURATION;
  playPowerup();
  spawnParticles(player.x + player.size / 2, player.y + player.size / 2, 20, POWERUP_UI[type].color, 5);

  if (type === 'shield') {
    flashTimer = 10;
  }
}

function updatePowerupTimer() {
  if (!activePowerup) return;
  powerupTimer -= 16.67;
  if (powerupTimer <= 0) {
    activePowerup = null;
    powerupTimer = 0;
    scoreEl.style.color = '';
  }
}

// --- Game flow ---

export function startGame() {
  menuEl.classList.add('hidden');
  overEl.classList.add('hidden');
  state = STATE.PLAYING;
  player.reset(groundY);
  resetObstacles();
  resetPowerups();
  clearParticles();
  score = 0;
  speed = SPEED_INITIAL;
  distance = 0;
  flashTimer = 0;
  dangerFlash = 0;
  scorePulse = 0;
  activePowerup = null;
  powerupTimer = 0;
  scoreEl.textContent = '0';
  scoreEl.style.transform = 'scale(1)';
  scoreEl.style.color = '';
  startMusic();
}

function gameOver() {
  state = STATE.OVER;
  stopMusic();
  playDeath();
  triggerShake(14);
  dangerFlash = 14;

  spawnParticles(
    player.x + player.size / 2,
    player.y + player.size / 2,
    40,
    '#ff0066',
    7
  );

  const finalScore = Math.floor(score);
  if (finalScore > best) {
    best = finalScore;
    localStorage.setItem(STATE_KEY, best);
    bestValEl.textContent = best;
  }

  finalScoreEl.textContent = finalScore;
  finalBestEl.textContent = best;
  overEl.classList.remove('hidden');
}

export function restartGame() {
  startGame();
}

// --- Update ---

export function update() {
  if (state === STATE.PLAYING) {
    let currentSpeed = Math.min(SPEED_MAX, SPEED_INITIAL + Math.sqrt(distance / DIFFICULTY_DISTANCE) * DIFFICULTY_FACTOR);
    if (activePowerup === 'slow') currentSpeed *= POWERUP.SLOW_FACTOR;
    speed = currentSpeed;

    distance += speed;
    const scoreMultiplier = activePowerup === '2x' ? 2 : 1;
    score += speed * SCORE_DISTANCE_MULTIPLIER * scoreMultiplier;

    player.update(groundY);

    const bonus = updateObstacles(speed, player.x, distance, W, groundY);
    if (bonus > 0) {
      score += bonus * scoreMultiplier;
      scorePulse = 10;
      flashTimer = 6;
    }

    updatePowerups(speed, player.x, distance, W, groundY);

    const collected = checkCollection(player.getBounds());
    if (collected) {
      activatePowerup(collected);
    }

    scoreEl.textContent = Math.floor(score);
    if (activePowerup === '2x') {
      scoreEl.style.color = '#ffd700';
    }

    const pb = player.getBounds();
    for (let i = 0; i < obstacles.length; i++) {
      if (collides(pb, obstacles[i])) {
        if (activePowerup === 'shield') {
          activePowerup = null;
          powerupTimer = 0;
          flashTimer = 12;
          dangerFlash = 6;
          spawnParticles(player.x + player.size / 2, player.y + player.size / 2, 30, '#4488ff', 5);
          obstacles.splice(i, 1);
          triggerShake(8);
        } else {
          gameOver();
        }
        break;
      }
    }
  }

  if (flashTimer > 0) flashTimer--;
  if (dangerFlash > 0) dangerFlash--;
  if (scorePulse > 0) {
    scorePulse--;
    scoreEl.style.transform = `scale(${1 + scorePulse * 0.018})`;
  } else {
    scoreEl.style.transform = 'scale(1)';
  }

  updatePowerupTimer();
  updateParticles();
  updateShake();
}

// --- Draw ---

function drawPowerupHUD(ctx) {
  if (!activePowerup) return;
  const ui = POWERUP_UI[activePowerup];
  const barW = 160;
  const barH = 8;
  const bx = (W - barW) / 2;
  const by = 50;
  const pct = powerupTimer / POWERUP.DURATION;

  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  ctx.fillRect(bx - 2, by - 14, barW + 4, barH + 18);

  ctx.fillStyle = ui.color;
  ctx.font = 'bold 13px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText(ui.label, W / 2, by - 3);

  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.fillRect(bx, by, barW, barH);
  ctx.fillStyle = ui.color;
  ctx.fillRect(bx, by, barW * pct, barH);
}

export function draw(ctx) {
  ctx.save();
  ctx.translate(shakeX, shakeY);

  drawBackground(ctx, W, H, groundY, distance);
  drawObstacles(ctx);
  drawPowerups(ctx);
  player.draw(ctx);

  if (activePowerup === 'shield') {
    ctx.shadowColor = '#4488ff';
    ctx.shadowBlur = 30;
    ctx.strokeStyle = 'rgba(68, 136, 255, 0.5)';
    ctx.lineWidth = 3;
    ctx.strokeRect(player.x - 4, player.y - 4, player.size + 8, player.size + 8);
    ctx.shadowBlur = 0;
  }

  drawParticles(ctx);

  if (flashTimer > 0) {
    ctx.fillStyle = `rgba(255, 255, 255, ${flashTimer * 0.03})`;
    ctx.fillRect(0, 0, W, H);
  }
  if (dangerFlash > 0) {
    ctx.fillStyle = `rgba(255, 0, 90, ${dangerFlash * 0.018})`;
    ctx.fillRect(0, 0, W, H);
  }

  ctx.restore();

  drawPowerupHUD(ctx);
}
