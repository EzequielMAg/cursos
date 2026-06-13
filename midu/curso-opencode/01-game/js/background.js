import { GROUND_RATIO } from './constants.js';

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

export function drawBackground(ctx, W, H, groundY, distance) {
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
