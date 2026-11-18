#!/bin/zsh
# [Agent] Headless Chrome screenshots of a local HTML file.
#   shoot.sh view   page.html out.png WIDTH HEIGHT [scale]   the first screen (e.g. the hero)
#   shoot.sh full   page.html out.png WIDTH [scale]          the whole page: measure the height first, then shoot at it
#   shoot.sh mobile page.html out.png [WIDTH=390] [scale=2]  real narrow layout: Chrome won't lay out below ~500 px,
#                                                             so the page runs in an iframe of WIDTH and the shot is cropped
set -e
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mode=$1 page=${2:A} out=${3:A}; d=${page:h}; prof=$(mktemp -d); trap 'rm -rf "$prof" "$d/.shoot-m.html" "$d/.shoot-w.html"' EXIT
run() { "$CH" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files --virtual-time-budget=6000 --user-data-dir="$prof" "$@" 2>/dev/null; }
height_of() { run --window-size=$2,900 --dump-dom "file://$1" | grep -o '<title>H=[0-9]*' | grep -o '[0-9]*$'; }
case $mode in
  view)
    run --force-device-scale-factor=${6:-1} --window-size=$4,$5 --screenshot="$out" "file://$page" >/dev/null
    echo "$out $4x$5";;
  full)
    sed 's#</body>#<script>addEventListener("load",()=>setTimeout(()=>{document.title="H="+document.documentElement.scrollHeight},300))</script></body>#' "$page" > "$d/.shoot-m.html"
    H=$(height_of "$d/.shoot-m.html" $4)
    run --force-device-scale-factor=${5:-1} --window-size=$4,$H --screenshot="$out" "file://$page" >/dev/null
    echo "$out $4x$H";;
  mobile)
    W=${4:-390}; S=${5:-2}
    sed 's#</body>#<script>addEventListener("load",()=>setTimeout(()=>parent.postMessage(document.documentElement.scrollHeight,"*"),300))</script></body>#' "$page" > "$d/.shoot-m.html"
    print -r -- "<html><body style=\"margin:0\"><iframe id=f src=\".shoot-m.html\" style=\"width:${W}px;height:900px;border:0;display:block\"></iframe><script>addEventListener('message',e=>{f.style.height=e.data+'px';document.title='H='+e.data})</script></body></html>" > "$d/.shoot-w.html"
    H=$(height_of "$d/.shoot-w.html" 600)
    sed -i '' "s/height:900px/height:${H}px/" "$d/.shoot-w.html"
    run --force-device-scale-factor=$S --window-size=600,$H --screenshot="$out" "file://$d/.shoot-w.html" >/dev/null
    uv run -q --with pillow python -c "from PIL import Image; im=Image.open('$out'); im.crop((0,0,$W*$S,$H*$S)).save('$out')"
    echo "$out ${W}x$H @${S}x";;
  *) echo "usage: shoot.sh view|full|mobile page.html out.png ..." >&2; exit 2;;
esac
