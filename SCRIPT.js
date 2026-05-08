// ==UserScript==
// @name         YouTube Restore Page Zoom
// @namespace    http://tampermonkey.net/
// @version      2026-05-08
// @description  Restores full-page pinch-to-zoom on YouTube, overriding the player's zoom hijack.
// @author       bcranton
// @match        *://*.youtube.com/*
// @icon         https://raw.githubusercontent.com/bcranton/yt-zoom-fix-upload/main/icon48.png
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
    'use strict';

    window.addEventListener('wheel', (e) => {
        if (e.ctrlKey) e.stopImmediatePropagation();
    }, { capture: true, passive: false });

    // Belt-and-suspenders: also stop gesture events (WebKit/Safari surfaces these).
    ['gesturestart', 'gesturechange', 'gestureend'].forEach((type) => {
        window.addEventListener(type, (e) => e.stopImmediatePropagation(),
            { capture: true, passive: false });
    });
})();
