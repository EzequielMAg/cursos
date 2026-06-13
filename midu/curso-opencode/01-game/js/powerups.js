import { POWERUP } from './constants.js';

const COLORS = {
  shield: { fill: '#4488ff', glow: '#4488ff', label: 'SHIELD' },
  '2x': { fill: '#ffd700', glow: '#ffaa00', label: '2X' },
  slow: { fill: '#44ff44', glow: '#00ff88', label: 'SLOW' }
};

export const powerups = [];
let nextSpawnAt = POWERUP.INITIAL_SPAWN;

export function resetPowerups() {
  powerups.length = 0;
  nextSpawnAt = POWERUP.INITIAL_SPAWN;
}

function spawn(W, groundY, distance) {
  const types = Object.keys(COLORS);
  const type = types[Math.floor(Math.random() * types.length)];
  const y = groundY * (0.25 + Math.random() * 0.45);
  powerups.push({ type, x: W, y, size: POWERUP.SIZE });
  nextSpawnAt = distance + POWERUP.SPAWN_INTERVAL_MIN + Math.random() * (POWERUP.SPAWN_INTERVAL_MAX - POWERUP.SPAWN_INTERVAL_MIN);
}

export function updatePowerups(speed, playerX, distance, W, groundY) {
  if (distance >= nextSpawnAt && Math.random() < POWERUP.SPAWN_CHANCE) {
    spawn(W, groundY, distance);
  }
  for (let i = powerups.length - 1; i >= 0; i--) {
    powerups[i].x -= speed;
    if (powerups[i].x + powerups[i].size < -10) {
      powerups.splice(i, 1);
    }
  }
}

export function checkCollection(playerBounds) {
  for (let i = powerups.length - 1; i >= 0; i--) {
    const p = powerups[i];
    if (p.x < playerBounds.x + playerBounds.w &&
        p.x + p.size > playerBounds.x &&
        p.y < playerBounds.y + playerBounds.h &&
        p.y + p.size > playerBounds.y) {
      powerups.splice(i, 1);
      return p.type;
    }
  }
  return null;
}

export function drawPowerups(ctx) {
  for (const p of powerups) {
    const c = COLORS[p.type];
    const cx = p.x + p.size / 2;
    const cy = p.y + p.size / 2;
    const r = p.size / 2;

    ctx.shadowColor = c.glow;
    ctx.shadowBlur = 20;
    ctx.fillStyle = c.fill;

    if (p.type === 'shield') {
      ctx.beginPath();
      ctx.moveTo(cx, p.y);
      ctx.lineTo(p.x + p.size, cy);
      ctx.lineTo(cx, p.y + p.size);
      ctx.lineTo(p.x, cy);
      ctx.closePath();
      ctx.fill();
    } else if (p.type === '2x') {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('x2', cx, cy + 1);
    } else {
      ctx.beginPath();
      ctx.moveTo(cx, p.y + p.size);
      ctx.lineTo(p.x, p.y);
      ctx.lineTo(p.x + p.size, p.y);
      ctx.closePath();
      ctx.fill();
    }

    ctx.shadowBlur = 0;
  }
}
