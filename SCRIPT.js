// ==UserScript==
// @name         Disable YT Player Pinch Zoom
// @namespace    http://tampermonkey.net/
// @version      2026-05-08
// @description  Disables The Annoying "Video Pinch Zoom" in YouTube-Web's New Update[8-May-2026]
// @author       bcranton
// @match        *://*.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    (() => {
        const blockPinch = (e) => {
            if (e.ctrlKey) e.stopImmediatePropagation();
        };
        window.addEventListener('wheel', blockPinch, { capture: true, passive: false });

    // Belt-and-suspenders: also stop gesture events if Chrome surfaces them.
        ['gesturestart', 'gesturechange', 'gestureend'].forEach((type) => {
            window.addEventListener(type, (e) => e.stopImmediatePropagation(),
                { capture: true, passive: false });
        });
    })();
})();
