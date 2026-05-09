# YouTube Restore Page Zoom

A tiny Chrome extension that restores the original pinch-to-zoom behavior on YouTube. After a 2026 YouTube update, pinching on a trackpad (or using `Ctrl`/`Cmd` + scroll) zooms only the video player. This extension brings back full-page zoom.

## How it works

YouTube listens for `wheel` events with `ctrlKey: true` (which is how trackpad pinches and `Ctrl`/`Cmd` + scroll are delivered) and runs its own zoom logic. This extension registers a capture-phase listener on `window` at `document_start` that calls `stopImmediatePropagation()` on those events before YouTube can see them. Because `preventDefault()` is never called, the browser's native page-zoom default kicks in.

## Install

### Chrome

Install from the [Chrome Web Store](https://chromewebstore.google.com/detail/youtube-restore-page-zoom/ckemlpiiiilommkpcbnkmgbgbhpnakmk).

### Firefox

Install from [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/youtube-restore-page-zoom/).

### TamperMonkey / GreaseMonkey (any browser)

1. Install [TamperMonkey](https://www.tampermonkey.net/) (Chrome/Edge/Safari) or [GreaseMonkey](https://www.greasespot.net/) (Firefox).
2. Create a new userscript and replace all contents with the contents of `SCRIPT.js` from this repo.
3. Save and reload any open YouTube tabs.

### Manual — Chrome (unpacked extension)

1. Download or clone this folder.
2. Open `chrome://extensions`.
3. Toggle **Developer mode** on (top right).
4. Click **Load unpacked** and select this folder.
5. Reload any open YouTube tabs.

### Manual — Firefox (temporary add-on)

Firefox only allows unsigned extensions to be loaded temporarily (they are removed on browser restart). For a permanent install use the [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/youtube-restore-page-zoom/) link above.

1. Download or clone this folder.
2. Open `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on…**.
4. Select the `manifest.json` file inside this folder.
5. Reload any open YouTube tabs.

## Permissions

None. The extension only injects a content script on `*.youtube.com` and uses no `permissions` entries, no remote code, and collects no data.

## Files

- `manifest.json` — extension manifest (MV3)
- `content.js` — the 5-line wheel-event blocker
- `icon16.png`, `icon48.png`, `icon128.png` — icons

## License

MIT
