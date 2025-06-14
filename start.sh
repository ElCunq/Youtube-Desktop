#!/bin/bash

# === START.SH ===
# Linux için başlatıcı

APP_PATH=$(dirname "$(realpath "$0")")
PROFILE_PATH="$APP_PATH/profile"
REDIRECTOR="file://$APP_PATH/redirector.html"

"$APP_PATH/cromite/chrome" \
  --user-data-dir="$PROFILE_PATH" \
  --no-first-run \
  --no-default-browser-check \
  --disable-popup-blocking \
  --app=$REDIRECTOR \
  --window-size=1280,720 \
  --enable-features=OverlayScrollbar \
  --force-device-scale-factor=1 \
  --enable-gpu-rasterization \
  --enable-zero-copy \
  --disable-renderer-backgrounding \
  --disable-background-networking \
  --disable-translate
