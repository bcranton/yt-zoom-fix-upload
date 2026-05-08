# YouTube Restore Page Zoom

A tiny Chrome extension that restores the original pinch-to-zoom behavior on YouTube. After a 2026 YouTube update, pinching on a macOS trackpad zooms only the video player. This extension brings back full-page zoom.

## How it works

YouTube listens for `wheel` events with `ctrlKey: true` (which is how macOS trackpad pinches are delivered) and runs its own zoom logic. This extension registers a capture-phase listener on `window` at `document_start` that calls `stopImmediatePropagation()` on those events before YouTube can see them. Because `preventDefault()` is never called, the browser's native page-zoom default kicks in.

## Install (unpacked)

1. Download or clone this folder.
2. Open `chrome://extensions`.
3. Toggle **Developer mode** on (top right).
4. Click **Load unpacked** and select this folder.
5. Reload any open YouTube tabs.

## Permissions

None. The extension only injects a content script on `*.youtube.com` and uses no `permissions` entries, no remote code, and collects no data.

## Files

- `manifest.json` — extension manifest (MV3)
- `content.js` — the 5-line wheel-event blocker
- `icon16.png`, `icon48.png`, `icon128.png` — icons

## License

MIT
