// YouTube Restore Page Zoom
// ---------------------------
// YouTube intercepts pinch-zoom (wheel events with ctrlKey) on the video
// player and applies its own scale. We register a capture-phase listener
// on `window` at document_start so it runs before YouTube's listeners,
// then call stopImmediatePropagation() to prevent YouTube's handler from
// firing. We deliberately do NOT call preventDefault() — that lets the
// browser's native page-zoom behavior fire as it used to.

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
