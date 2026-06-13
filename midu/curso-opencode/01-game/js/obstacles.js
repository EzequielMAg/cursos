import { OBSTACLE_MIN_H, OBSTACLE_MAX_H, INITIAL_SPAWN_DISTANCE, BONUS_PER_HEIGHT } from './constants.js';
import { spawnParticles } from './particles.js';
import { playScore } from './audio.js';

export const obstacles = [];
let nextSpawnAt = 0;

export function resetObstacles() {
  obstacles.length = 0;
  nextSpawnAt = INITIAL_SPAWN_DISTANCE;
}

function makeObstacle(x, h, groundY) {
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

function getFairGap(speed, W) {
  const landingTime = 48;
  const reactionBuffer = Math.max(90, Math.min(170, W * 0.08));
  const randomBreath = 80 + Math.random() * Math.max(110, W * 0.08);
  return speed * landingTime + reactionBuffer + randomBreath;
}

function spawnGroup(distance, W, groundY, speed) {
  const roll = Math.random();
  let rightEdge = W;

  if (roll < 0.58 || distance < 900) {
    const obs = makeObstacle(W, OBSTACLE_MIN_H + Math.random() * (OBSTACLE_MAX_H - OBSTACLE_MIN_H), groundY);
    obstacles.push(obs);
    rightEdge = obs.x + obs.w;
  } else {
    const count = 2 + Math.floor(Math.random() * 2);
    const h = OBSTACLE_MIN_H + Math.random() * 20;
    for (let i = 0; i < count; i++) {
      const obs = makeObstacle(W + i * (30 + Math.random() * 14), h, groundY);
      obstacles.push(obs);
      rightEdge = Math.max(rightEdge, obs.x + obs.w);
    }
  }

  nextSpawnAt = distance + (rightEdge - W) + getFairGap(speed, W);
}

export function updateObstacles(speed, playerX, distance, W, groundY) {
  let bonus = 0;

  if (distance >= nextSpawnAt) {
    spawnGroup(distance, W, groundY, speed);
  }

  for (let i = obstacles.length - 1; i >= 0; i--) {
    const o = obstacles[i];
    o.x -= speed;

    if (!o.passed && o.x + o.w < playerX) {
      o.passed = true;
      playScore();
      spawnParticles(o.x + o.w / 2, o.y + o.h / 2, 9, '#ffff00', 3);
      bonus += o.h * BONUS_PER_HEIGHT;
    }

    if (o.x + o.w < -20) {
      obstacles.splice(i, 1);
    }
  }

  return bonus;
}

export function drawObstacles(ctx) {
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
