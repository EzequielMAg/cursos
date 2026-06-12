// --- SETUP ---
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const bestValEl = document.getElementById('best-val');
const finalScoreEl = document.getElementById('final-score');
const finalBestEl = document.getElementById('final-best');
const menuEl = document.getElementById('menu');
const overEl = document.getElementById('over');
const playBtn = document.getElementById('play-btn');
const restartBtn = document.getElementById('restart-btn');
const soundBtn = document.getElementById('sound');

let W, H, groundY;

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  groundY = H * 0.78;
}
resize();
window.addEventListener('resize', resize);

// --- STATE ---
const STATE = { MENU: 0, PLAYING: 1, OVER: 2 };
let state = STATE.MENU;
let score = 0;
let best = parseInt(localStorage.getItem('neon-dash-best')) || 0;
let speed = 0;
let distance = 0;
let soundOn = true;
let flashTimer = 0;
let dangerFlash = 0;
let scorePulse = 0;

bestValEl.textContent = best;

// --- PLAYER ---
const player = {
  x: 110,
  y: 0,
  size: 28,
  vy: 0,
  grounded: true,
  jumpForce: -11.5,
  gravity: 0.55,
  trail: [],

  reset() {
    this.y = groundY - this.size;
    this.vy = 0;
    this.grounded = true;
    this.trail = [];
  },

  jump() {
    if (!this.grounded) return;
    this.vy = this.jumpForce;
    this.grounded = false;
    spawnParticles(this.x + this.size / 2, groundY, 10, '#00ffff', 3);
    playJump();
  },

  update() {
    this.trail.push({ x: this.x + this.size / 2, y: this.y + this.size / 2 });
    if (this.trail.length > 10) this.trail.shift();

    this.vy += this.gravity;
    this.y += this.vy;

    if (this.y >= groundY - this.size) {
      this.y = groundY - this.size;
      this.vy = 0;
      this.grounded = true;
    }
  },

  draw() {
    for (let i = 0; i < this.trail.length; i++) {
      const p = this.trail[i];
      const t = i / this.trail.length;
      const s = this.size * (0.3 + t * 0.3);
      ctx.globalAlpha = t * 0.35;
      ctx.shadowColor = '#00ffff';
      ctx.shadowBlur = 8;
      ctx.fillStyle = '#00ffff';
      ctx.fillRect(p.x - s / 2, p.y - s / 2, s, s);
    }
    ctx.globalAlpha = 1;

    ctx.shadowColor = '#00ffff';
    ctx.shadowBlur = 25;
    ctx.fillStyle = '#00ffff';
    ctx.fillRect(this.x, this.y, this.size, this.size);

    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.fillRect(this.x + 5, this.y + 5, this.size - 10, this.size - 10);

    ctx.shadowBlur = 0;
  },

  getBounds() {
    return { x: this.x, y: this.y, w: this.size, h: this.size };
  }
};

// --- OBSTACLES ---
let obstacles = [];
let nextSpawnAt = 0;
const OBSTACLE_MIN_H = 25;
const OBSTACLE_MAX_H = 80;

function makeObstacle(x, h) {
  const hue = 280 + Math.random() * 60;
  return {
    x,
    y: groundY - h,
    w: 16 + Math.random() * 10,
    h,
    color: `hsl(${hue}, 100%, 60%)`,
    passed: false
  };
}

function spawnObstacleGroup() {
  const roll = Math.random();
  let rightEdge = W;

  if (roll < 0.58 || distance < 900) {
    const h = OBSTACLE_MIN_H + Math.random() * (OBSTACLE_MAX_H - OBSTACLE_MIN_H);
    const obstacle = makeObstacle(W, h);
    obstacles.push(obstacle);
    rightEdge = obstacle.x + obstacle.w;
  } else {
    const count = 2 + Math.floor(Math.random() * 2);
    const h = OBSTACLE_MIN_H + Math.random() * 20;
    for (let i = 0; i < count; i++) {
      const obstacle = makeObstacle(W + i * (30 + Math.random() * 14), h);
      obstacles.push(obstacle);
      rightEdge = Math.max(rightEdge, obstacle.x + obstacle.w);
    }
  }

  return rightEdge - W;
}

function resetObstacles() {
  obstacles = [];
  nextSpawnAt = 260;
}

function getFairGap() {
  const landingTime = 48;
  const reactionBuffer = Math.max(90, Math.min(170, W * 0.08));
  const randomBreath = 80 + Math.random() * Math.max(110, W * 0.08);
  return speed * landingTime + reactionBuffer + randomBreath;
}

function updateObstacles() {
  if (state !== STATE.PLAYING) return;

  if (distance >= nextSpawnAt) {
    const groupWidth = spawnObstacleGroup();
    nextSpawnAt = distance + groupWidth + getFairGap();
  }

  for (let i = obstacles.length - 1; i >= 0; i--) {
    const o = obstacles[i];
    o.x -= speed;

    if (!o.passed && o.x + o.w < player.x) {
      o.passed = true;
      score += 15;
      scorePulse = 10;
      playScore();
      spawnParticles(o.x + o.w / 2, o.y + o.h / 2, 9, '#ffff00', 3);
      flashTimer = 6;
    }

    if (o.x + o.w < -20) {
      obstacles.splice(i, 1);
    }
  }
}

function drawObstacles() {
  for (const o of obstacles) {
    ctx.shadowColor = o.color;
    ctx.shadowBlur = 15;
    ctx.fillStyle = o.color;
    ctx.fillRect(o.x, o.y, o.w, o.h);

    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.fillRect(o.x, o.y, o.w, 3);

    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.fillRect(o.x + 3, o.y + 8, Math.max(2, o.w - 6), Math.max(6, o.h - 16));
  }
  ctx.shadowBlur = 0;
}

// --- PARTICLES ---
let particles = [];

function spawnParticles(x, y, count, color, spread) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const spd = Math.random() * spread + 0.5;
    particles.push({
      x, y,
      vx: Math.cos(angle) * spd,
      vy: Math.sin(angle) * spd - 1,
      life: 1,
      decay: 0.015 + Math.random() * 0.025,
      size: 2 + Math.random() * 4,
      color
    });
  }
}

function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.04;
    p.life -= p.decay;
    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  }
}

function drawParticles() {
  for (const p of particles) {
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 6;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
  }
  ctx.globalAlpha = 1;
  ctx.shadowBlur = 0;
}

// --- BACKGROUND ---
const stars = [];
for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * 2000,
    y: Math.random() * 1000,
    size: 0.5 + Math.random() * 1.5,
    brightness: 0.3 + Math.random() * 0.7,
    phase: Math.random() * Math.PI * 2
  });
}

function drawBackground() {
  ctx.fillStyle = '#0a0a1a';
  ctx.fillRect(0, 0, W, H);

  const gridOffset = -(distance * 0.35) % 42;
  ctx.strokeStyle = 'rgba(0, 255, 255, 0.045)';
  ctx.lineWidth = 1;
  for (let x = gridOffset; x < W; x += 42) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }

  const now = Date.now() * 0.002;
  for (const star of stars) {
    const flicker = 0.7 + 0.3 * Math.sin(now + star.phase);
    ctx.globalAlpha = star.brightness * flicker;
    ctx.fillStyle = '#fff';
    ctx.fillRect(star.x % W, star.y % H, star.size, star.size);
  }
  ctx.globalAlpha = 1;

  ctx.shadowColor = '#00ffff';
  ctx.shadowBlur = 10;
  ctx.strokeStyle = '#00ffff';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.lineTo(W, groundY);
  ctx.stroke();

  const grad = ctx.createLinearGradient(0, groundY, 0, groundY + 30);
  grad.addColorStop(0, 'rgba(0, 255, 255, 0.08)');
  grad.addColorStop(1, 'rgba(0, 255, 255, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, groundY, W, 30);

  ctx.shadowBlur = 0;
}

// --- SCREEN SHAKE ---
let shakeX = 0, shakeY = 0, shakeIntensity = 0;

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

// --- COLLISION ---
function collides(a, b) {
  return a.x < b.x + b.w &&
         a.x + a.w > b.x &&
         a.y < b.y + b.h &&
         a.y + a.h > b.y;
}

// --- SOUND ---
let audioCtx;

function getAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playJump() {
  if (!soundOn) return;
  try {
    const ac = getAudio();
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = 'sine';
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.frequency.setValueAtTime(350, ac.currentTime);
    osc.frequency.exponentialRampToValueAtTime(900, ac.currentTime + 0.1);
    gain.gain.setValueAtTime(0.12, ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.12);
    osc.start(ac.currentTime);
    osc.stop(ac.currentTime + 0.12);
  } catch (_) {}
}

function playScore() {
  if (!soundOn) return;
  try {
    const ac = getAudio();
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = 'sine';
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.frequency.setValueAtTime(800, ac.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1300, ac.currentTime + 0.05);
    gain.gain.setValueAtTime(0.06, ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.07);
    osc.start(ac.currentTime);
    osc.stop(ac.currentTime + 0.07);
  } catch (_) {}
}

function playCombo() {
  if (!soundOn) return;
  try {
    const ac = getAudio();
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = 'triangle';
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.frequency.setValueAtTime(1100, ac.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1700, ac.currentTime + 0.08);
    gain.gain.setValueAtTime(0.08, ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.12);
    osc.start(ac.currentTime);
    osc.stop(ac.currentTime + 0.12);
  } catch (_) {}
}

function playDeath() {
  if (!soundOn) return;
  try {
    const ac = getAudio();
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = 'sawtooth';
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.frequency.setValueAtTime(300, ac.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ac.currentTime + 0.35);
    gain.gain.setValueAtTime(0.15, ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.35);
    osc.start(ac.currentTime);
    osc.stop(ac.currentTime + 0.35);
  } catch (_) {}
}

// --- INPUT ---
function handleJump() {
  if (state === STATE.MENU) {
    startGame();
    return;
  }
  if (state === STATE.OVER) {
    restartGame();
    return;
  }
  player.jump();
}

document.addEventListener('keydown', e => {
  if (e.code === 'Space' || e.code === 'ArrowUp') {
    e.preventDefault();
    handleJump();
  }
});

document.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') return;
  handleJump();
});

document.addEventListener('touchstart', e => {
  if (e.target.tagName === 'BUTTON') return;
  e.preventDefault();
  handleJump();
}, { passive: false });

// --- GAME FLOW ---
function startGame() {
  menuEl.classList.add('hidden');
  overEl.classList.add('hidden');
  state = STATE.PLAYING;
  player.reset();
  resetObstacles();
  particles = [];
  score = 0;
  speed = 6;
  distance = 0;
  flashTimer = 0;
  dangerFlash = 0;
  scorePulse = 0;
  scoreEl.textContent = '0';
  scoreEl.style.transform = 'scale(1)';
}

function gameOver() {
  state = STATE.OVER;
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
    localStorage.setItem('neon-dash-best', best);
    bestValEl.textContent = best;
  }

  finalScoreEl.textContent = finalScore;
  finalBestEl.textContent = best;
  overEl.classList.remove('hidden');
}

function restartGame() {
  startGame();
}

playBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);
soundBtn.addEventListener('click', () => {
  soundOn = !soundOn;
  soundBtn.textContent = soundOn ? '\u{1F50A}' : '\u{1F507}';
});

// --- GAME LOOP ---
function update() {
  if (state === STATE.PLAYING) {
    speed = Math.min(13.5, 6 + Math.sqrt(distance / 700) * 0.75);
    distance += speed;
    score += speed * 0.025;

    player.update();
    updateObstacles();
    scoreEl.textContent = Math.floor(score);

    const pb = player.getBounds();
    for (const o of obstacles) {
      if (collides(pb, o)) {
        gameOver();
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

  updateParticles();
  updateShake();
}

function draw() {
  ctx.save();
  ctx.translate(shakeX, shakeY);

  drawBackground();
  drawObstacles();
  player.draw();
  drawParticles();

  if (flashTimer > 0) {
    ctx.fillStyle = `rgba(255, 255, 255, ${flashTimer * 0.03})`;
    ctx.fillRect(0, 0, W, H);
  }

  if (dangerFlash > 0) {
    ctx.fillStyle = `rgba(255, 0, 90, ${dangerFlash * 0.018})`;
    ctx.fillRect(0, 0, W, H);
  }

  ctx.restore();
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

// --- INIT ---
player.reset();
loop();
