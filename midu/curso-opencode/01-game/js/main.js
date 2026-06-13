import { init, resize, update, draw } from './game.js';
import { setupInput } from './input.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

function loop() {
  update();
  draw(ctx);
  requestAnimationFrame(loop);
}

init();
setupInput();

resize(canvas);
window.addEventListener('resize', () => resize(canvas));

loop();
