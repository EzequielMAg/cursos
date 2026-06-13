# Neon Dash Spec

## Overview

Neon Dash is a small one-button browser arcade game built with HTML, CSS, and vanilla JavaScript. The player controls a glowing square that jumps to avoid incoming neon obstacles. The game should be understandable in seconds, restart quickly, and become progressively harder while staying fair.

## Goals

- Be playable immediately with no tutorial friction.
- Feel responsive and satisfying with particles, screen shake, sound, flashes, and score feedback.
- Keep obstacle spacing fair so the player always has enough time to land and jump again.
- Use no external dependencies and no build step.
- Keep the code readable and split into focused ES modules under `js/`.

## Files

- `index.html`: Canvas, score UI, sound toggle, start screen, and game-over screen.
- `style.css`: Dark neon visual style, overlay layout, buttons, score styling, and small UI transitions.
- `package.json`: Local dev command using `serve` through `npx`.

### JS Module Architecture (`js/`)

All game logic is split into ES modules with no build step, loaded via `<script type="module">`:

| File | Responsibility | Key Exports |
|---|---|---|
| `main.js` | Canvas setup, game loop, resize listener, boot sequence | — (entry point) |
| `constants.js` | Shared numeric constants (physics, difficulty, layout) | `STATE`, `PLAYER`, `SPEED_*`, `GROUND_RATIO`, etc. |
| `game.js` | State machine, scoring, collision, shake/flash effects, UI orchestration | `init`, `resize`, `handleJump`, `update`, `draw`, `getState` |
| `player.js` | Player physics, trail rendering, jump with particles/audio | `player` object |
| `obstacles.js` | Obstacle spawning (fair gap logic), movement, passing detection | `obstacles[]`, `resetObstacles`, `updateObstacles`, `drawObstacles` |
| `input.js` | Keyboard (`Space`/`ArrowUp`), click, and touch dispatch | `setupInput` |
| `background.js` | Starfield, neon grid, ground line and glow | `drawBackground` |
| `particles.js` | Particle pool, spawn, physics, and render | `particles[]`, `spawnParticles`, `updateParticles`, `drawParticles` |
| `audio.js` | Web Audio synth tones, mute toggle | `playJump`, `playScore`, `playCombo`, `playDeath`, `toggleSound` |

### Architecture Rules

- **No circular imports**: `constants.js` has zero imports; leaf modules (`audio.js`, `particles.js`) import only `constants.js`; `game.js` is the sole orchestrator that imports from all feature modules.
- **Module-scoped state**: Each module owns its mutable state (arrays, counters). `game.js` calls reset functions (`resetObstacles()`, `clearParticles()`) rather than manipulating their internals directly.
- **Explicit parameters**: Functions like `player.update(groundY)` and `updateObstacles(speed, playerX, distance, W, groundY)` receive needed values as arguments instead of capturing globals, making dependencies clear.
- **Event dispatch in `game.js`**: The `handleJump` function lives in `game.js` because it needs `groundY` and game state; `input.js` merely forwards DOM events to `handleJump`.

## Controls

- `SPACE`: Start, jump, or restart.
- `ArrowUp`: Jump.
- Mouse click / tap: Start, jump, or restart.
- Sound button: Toggle simple Web Audio effects on/off.

## Game States

- `MENU`: Shows instructions and waits for player input.
- `PLAYING`: Runs physics, scoring, obstacle movement, collision, and difficulty scaling.
- `OVER`: Shows final score, best score, and allows fast restart.

## Core Mechanics

- The player is a glowing square positioned near the left side of the screen.
- The player can only jump when grounded.
- Gravity pulls the player back to the neon ground line.
- Obstacles move from right to left.
- Collision with any obstacle ends the run.
- Passing obstacles gives sound, particles, score feedback, and a small screen flash.

## Difficulty Curve

- Speed starts at a manageable value.
- Speed increases gradually using a smooth square-root curve.
- Speed has a cap to prevent impossible gameplay.
- Obstacle groups start simple and become more varied after the player has survived long enough.

## Fair Obstacle Spacing

Obstacle spawning is based on distance traveled instead of frame timers. After each obstacle group spawns, the next spawn distance is calculated from:

- Width of the current obstacle group.
- Current game speed.
- Estimated landing time after a jump.
- A reaction buffer.
- A small random breathing space.

This ensures obstacles never appear so close together that a normal jump cycle becomes impossible.

## Scoring

- Score increases continuously based on distance and speed.
- Passing obstacles adds bonus points.
- The score display pulses when points are earned.
- Best score is stored in `localStorage` using the key `neon-dash-best`.

## Game Feel

- Jump creates cyan particles and a short rising sound.
- Passing obstacles creates yellow particles, a bright flash, and a score ping.
- Death creates magenta particles, red screen flash, screen shake, and a descending sound.
- The background includes stars and a subtle moving neon grid.
- Obstacles and player use canvas shadow glow for a neon arcade look.

## Local Development

Run with npm:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Constraints

- No frameworks.
- No bundled build step.
- No external runtime dependencies required by the game itself.
- Keep the game small, readable, and easy to modify.
