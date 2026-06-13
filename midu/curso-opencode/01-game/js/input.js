import { handleJump } from './game.js';

export function setupInput() {
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
}
