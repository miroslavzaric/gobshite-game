# GOBSHITE! — Prototype 0.1

A mobile-first, single-player pixel-art arcade runner prototype. The art is currently rendered from original canvas-drawn shapes; emoji are temporary placeholders for some title/failure accents. This is a mechanics prototype, not the final sprite-art pass.

## Run locally

Requires Node.js 20+.

```bash
npm start
```

Open http://localhost:3000

## Deploy to Railway

1. Create a GitHub repository and upload the contents of this folder (the `package.json`, `server.js`, and `public/` directory should be at the repository root).
2. In Railway, create a new project and deploy from that GitHub repository.
3. Railway detects Node.js and uses `npm start`.
4. In the service's Settings / Networking, generate a public domain.
5. Open the domain on your phone and test touch gestures.

The server listens on `process.env.PORT` and `0.0.0.0`, as required by Railway. No database or environment secrets are needed.

## Controls

- Swipe left/right: change lane
- Swipe up: jump
- Swipe down: duck
- Keyboard arrows/WASD also work for desktop testing
- Pause button: pause/resume

## Notes

- Best distance and sound preference are stored in browser local storage.
- The prototype is single-player; scores are local to each browser/device.
- Replace temporary emoji and canvas primitives with original pixel-art sprites before a polished public launch.
