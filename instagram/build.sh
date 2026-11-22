#!/usr/bin/env bash
# Genera el mosaico de Instagram a partir de los HTML de _design/.
# Requiere Google Chrome y Python 3 con Pillow.
set -euo pipefail

cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [ ! -x "$CHROME" ]; then
  echo "No encontré Google Chrome en $CHROME" >&2
  exit 1
fi

PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

render() {
  local html="$1"
  local output="$2"
  local width="${3:-3240}"
  local height="${4:-2700}"
  "$CHROME" \
    --headless=new \
    --disable-gpu \
    --hide-scrollbars \
    --force-device-scale-factor=1 \
    --window-size="$width,$height" \
    --virtual-time-budget=6000 \
    --allow-file-access-from-files \
    --no-first-run \
    --no-default-browser-check \
    --user-data-dir="$PROFILE" \
    --screenshot="$output" \
    "file://$(pwd)/$html" >/dev/null 2>&1
}

echo "Renderizando piezas…"
render "_design/poster.html" "_design/.poster-render.png"
render "_design/poster-alt-tercera-edad.html" "_design/.poster-alt-render.png" 1080 1350
render "_design/poster-he.html" "_design/.poster-he-render.png"
render "_design/poster-he-alt-tercera-edad.html" "_design/.poster-he-alt-render.png" 1080 1350

python3 "_design/slice.py"

rm -f "_design/.poster-render.png" "_design/.poster-alt-render.png" "_design/.poster-he-render.png" "_design/.poster-he-alt-render.png"

echo "Listo. Las piezas están en instagram/posts/, instagram/posts-he/ y instagram/alternativas/."
