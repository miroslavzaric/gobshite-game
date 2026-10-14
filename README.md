# GOBSHITE! — Prototype 0.4
This version introduces actual transparent PNG sprite assets rather than drawing the hero and obstacles entirely from rectangles.
## Files
- `public/index.html` — game, controls, HUD, scoring, collisions and asset loading
- `public/assets/leprechaun-sheet.png` — 8-frame sprite sheet (run frames, jump, duck, slide, crash)
- `public/assets/*.png` — transparent pixel-art obstacles and coin
- `server.js`, `package.json` — Node server for Railway
## Run locally
Node.js 20+, then `npm start` and open `http://localhost:3000`.
## Railway
Keep the existing Railway service/domain. Replace project files in GitHub and commit. Railway runs `npm start` using its assigned `PORT`.
