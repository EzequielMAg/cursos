export const STATE = { MENU: 0, PLAYING: 1, OVER: 2 };

export const PLAYER = {
  X: 110,
  SIZE: 28,
  JUMP_FORCE: -11.5,
  GRAVITY: 0.55,
  TRAIL_LENGTH: 10,
  MAX_JUMPS: 2
};

export const OBSTACLE_MIN_H = 25;
export const OBSTACLE_MAX_H = 80;
export const SPEED_INITIAL = 6;
export const SPEED_MAX = 13.5;
export const DIFFICULTY_DISTANCE = 700;
export const DIFFICULTY_FACTOR = 0.75;
export const SCORE_DISTANCE_MULTIPLIER = 0.025;
export const BONUS_PER_HEIGHT = 0.3;
export const GROUND_RATIO = 0.78;
export const INITIAL_SPAWN_DISTANCE = 260;

export const POWERUP = {
  SIZE: 24,
  INITIAL_SPAWN: 800,
  SPAWN_INTERVAL_MIN: 500,
  SPAWN_INTERVAL_MAX: 1000,
  SPAWN_CHANCE: 0.35,
  DURATION: 5000,
  SLOW_FACTOR: 0.55
};
