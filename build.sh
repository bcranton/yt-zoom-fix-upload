#!/bin/bash
# Packages the extension into a ZIP with manifest.json at the root,
# as required by Chrome Web Store and Firefox Add-ons (AMO).
set -e

OUT="yt-zoom-fix-upload.zip"
rm -f "$OUT"

zip "$OUT" manifest.json content.js icon16.png icon48.png icon128.png

echo "Created $OUT"
