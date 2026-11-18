#!/bin/zsh
# [Agent] Headless Chrome screenshots of a local HTML file (or, in view mode, any URL such as a review page).
#   shoot.sh view   page.html|URL out.png WIDTH HEIGHT [scale]   the first screen (e.g. the hero)
#   shoot.sh full   page.html out.png WIDTH [scale]              the whole page: measure the height first, then shoot at it
#   shoot.sh mobile page.html out.png [WIDTH=390] [scale=2]      real narrow layout: Chrome won't lay out below ~500 px,
#                                                                 so the page runs in an iframe of WIDTH and the shot is cropped
# Env: THEME=light|dark (default light; otherwise shots follow the Mac's dark mode).
#      MOTION=1 keeps animations; by default Chrome reports prefers-reduced-motion, so shots show the designed static
#      state (and prove the fallback exists). Shoot motion separately as a frame strip.
# Mobile also prints OVERFLOW when the page is wider than WIDTH (horizontal scroll on phones).
set -e
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mode=$1 page=$2 out=${3:A}
flags=(--headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files --virtual-time-budget=8000)
[[ ${THEME:-light} == dark ]] && flags+=(--force-dark-mode --blink-settings=preferredColorScheme=0) || flags+=(--blink-settings=preferredColorScheme=1)
[[ -z $MOTION ]] && flags+=(--force-prefers-reduced-motion)
prof=$(mktemp -d); flags+=(--user-data-dir=$prof)
if [[ $page == http* ]]; then url=$page; [[ $mode == view ]] || { echo "full/mobile need a local file" >&2; exit 2; }
else page=${page:A}; [[ -f $page ]] || { echo "no such file: $page" >&2; exit 2; }; url="file://$page"; d=${page:h}; fi
trap 'rm -rf "$prof" "$d/.shoot-m.html" "$d/.shoot-w.html"' EXIT
# [Agent] Inject a probe script before </body>, or at the end when the file has none (a silent failure otherwise).
probe() { if grep -q '</body>' "$page"; then sed "s#</body>#<script>$1</script></body>#" "$page"; else cat "$page"; print -r -- "<script>$1</script>"; fi > "$d/.shoot-m.html"; }
title_of() { "$CH" $flags --window-size=$2,900 --dump-dom "file://$1" 2>/dev/null | grep -o '<title>[A-Z]=[0-9x]*' | head -1 | sed 's/<title>[A-Z]=//'; }
case $mode in
  view)
    "$CH" $flags --force-device-scale-factor=${6:-1} --window-size=$4,$5 --screenshot="$out" "$url" >/dev/null 2>&1
    echo "$out $4x$5";;
  full)
    probe 'addEventListener("load",()=>setTimeout(()=>{document.title="H="+document.documentElement.scrollHeight},300))'
    H=$(title_of "$d/.shoot-m.html" $4); [[ -n $H ]] || { echo "could not measure the page height" >&2; exit 1; }
    "$CH" $flags --force-device-scale-factor=${5:-1} --window-size=$4,$H --screenshot="$out" "$url" >/dev/null 2>&1
    echo "$out $4x$H";;
  mobile)
    W=${4:-390}; S=${5:-2}
    probe 'addEventListener("load",()=>setTimeout(()=>parent.postMessage([document.documentElement.scrollHeight,document.documentElement.scrollWidth],"*"),300))'
    print -r -- "<html><body style=\"margin:0\"><iframe id=f src=\".shoot-m.html\" style=\"width:${W}px;height:900px;border:0;display:block\"></iframe><script>addEventListener('message',e=>{f.style.height=e.data[0]+'px';document.title='H='+e.data[0]+'x'+e.data[1]})</script></body></html>" > "$d/.shoot-w.html"
    HW=$(title_of "$d/.shoot-w.html" 600); [[ -n $HW ]] || { echo "could not measure the page height" >&2; exit 1; }
    H=${HW%x*}; SW=${HW#*x}
    sed -i '' "s/height:900px/height:${H}px/" "$d/.shoot-w.html"
    "$CH" $flags --force-device-scale-factor=$S --window-size=600,$H --screenshot="$out" "file://$d/.shoot-w.html" >/dev/null 2>&1
    uv run -q --with pillow python -c "from PIL import Image; im=Image.open('$out'); im.crop((0,0,$W*$S,$H*$S)).save('$out')"
    echo "$out ${W}x$H @${S}x"; (( SW > W )) && echo "OVERFLOW: content is ${SW}px wide in a ${W}px viewport" || true;;
  *) echo "usage: shoot.sh view|full|mobile page.html out.png ..." >&2; exit 2;;
esac
