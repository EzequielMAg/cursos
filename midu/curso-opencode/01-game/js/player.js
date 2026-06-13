import { PLAYER } from './constants.js';
import { spawnParticles } from './particles.js';
import { playJump, playJump2 } from './audio.js';

export const player = {
  x: PLAYER.X,
  y: 0,
  size: PLAYER.SIZE,
  vy: 0,
  grounded: true,
  jumpsLeft: PLAYER.MAX_JUMPS,
  trail: [],

  reset(groundY) {
    this.y = groundY - this.size;
    this.vy = 0;
    this.grounded = true;
    this.jumpsLeft = PLAYER.MAX_JUMPS;
    this.trail = [];
  },

  jump(groundY) {
    if (this.jumpsLeft <= 0) return;
    const isSecond = this.jumpsLeft < PLAYER.MAX_JUMPS;
    this.vy = PLAYER.JUMP_FORCE;
    this.grounded = false;
    this.jumpsLeft--;

    const color = isSecond ? '#ff66ff' : '#00ffff';
    spawnParticles(this.x + this.size / 2, isSecond ? this.y + this.size / 2 : groundY, 10, color, 3);
    if (isSecond) playJump2(); else playJump();
  },

  update(groundY) {
    this.trail.push({ x: this.x + this.size / 2, y: this.y + this.size / 2 });
    if (this.trail.length > PLAYER.TRAIL_LENGTH) this.trail.shift();

    this.vy += PLAYER.GRAVITY;
    this.y += this.vy;

    if (this.y >= groundY - this.size) {
      this.y = groundY - this.size;
      this.vy = 0;
      this.grounded = true;
      this.jumpsLeft = PLAYER.MAX_JUMPS;
    }
  },

  draw(ctx) {
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
