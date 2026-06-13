let audioCtx;
let soundOn = true;
let musicTimer = null;
let musicIndex = 0;
let musicNextTime = 0;

const MELODY = [
  262, 330, 392, 523, 392, 330, 294, 0,
  262, 330, 392, 659, 523, 392, 330, 0
];
const NOTE_LEN = 0.18;

export function toggleSound() {
  soundOn = !soundOn;
  if (!soundOn) stopMusic();
  if (soundOn) startMusic();
  return soundOn;
}

export function isSoundOn() {
  return soundOn;
}

function getAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playTone(freq1, freq2, dur, type, vol) {
  if (!soundOn) return;
  try {
    const ac = getAudio();
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = type || 'sine';
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.frequency.setValueAtTime(freq1, ac.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq2, ac.currentTime + dur);
    gain.gain.setValueAtTime(vol || 0.15, ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
    osc.start(ac.currentTime);
    osc.stop(ac.currentTime + dur);
  } catch (_) {}
}

export function playJump() { playTone(350, 900, 0.12, 'sine', 0.15); }
export function playJump2() { playTone(500, 1400, 0.10, 'sine', 0.12); }
export function playScore() { playTone(800, 1300, 0.07, 'sine', 0.08); }
export function playCombo() { playTone(1100, 1700, 0.12, 'triangle', 0.10); }
export function playDeath() { playTone(300, 40, 0.35, 'sawtooth', 0.18); }
export function playPowerup() { playTone(660, 1800, 0.15, 'square', 0.12); }

function scheduleNote(ac, freq, time) {
  if (freq <= 0) return;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = 'square';
  osc.frequency.setValueAtTime(freq, time);
  gain.gain.setValueAtTime(0.07, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + NOTE_LEN * 0.7);
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.start(time);
  osc.stop(time + NOTE_LEN);
}

export function startMusic() {
  if (musicTimer || !soundOn) return;
  musicNextTime = 0;
  musicIndex = 0;

  function scheduleLoop() {
    if (!soundOn) { musicTimer = null; return; }
    try {
      const ac = getAudio();
      const now = ac.currentTime;

      if (musicNextTime < 0.001) musicNextTime = now + 0.05;

      while (musicNextTime < now + 0.5) {
        scheduleNote(ac, MELODY[musicIndex % MELODY.length], musicNextTime);
        musicNextTime += NOTE_LEN;
        musicIndex++;
      }
    } catch (_) {}

    musicTimer = setTimeout(scheduleLoop, 120);
  }

  scheduleLoop();
}

export function stopMusic() {
  if (musicTimer) {
    clearTimeout(musicTimer);
    musicTimer = null;
  }
  musicNextTime = 0;
}
