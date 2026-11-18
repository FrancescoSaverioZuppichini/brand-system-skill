#!/bin/zsh
# [Agent] Headless Chrome screenshots of a local HTML file (or, in view mode, any URL such as a review page).
#   shoot.sh view   page.html|URL out.png WIDTH HEIGHT [scale]   the first screen (e.g. the hero)
#   shoot.sh full   page.html out.png WIDTH [scale]              the whole page: measure the height first, then shoot at it
#   shoot.sh mobile page.html out.png [WIDTH=390] [scale=2]      real narrow layout: Chrome won't lay out below ~500 px,
#                                                                 so the page runs in an iframe of WIDTH and the shot is cropped
#   shoot.sh strip  page.html out.png WIDTH HEIGHT ["0 150 300 600 1200"]   one frame per time in ms, side by side;
#                                                                 MP4=1 also writes out.mp4, each frame held until the next time
#   shoot.sh pdf    page.html|URL out.pdf                        print to PDF (boards for a client who won't open the app)
# Env: THEME=light|dark (default light; otherwise shots follow the Mac's dark mode).
#      MOTION=1 keeps animations; by default Chrome reports prefers-reduced-motion, so shots show the designed static
#      state (and prove the fallback exists). strip always keeps them.
# Mobile also prints OVERFLOW when the page is wider than WIDTH (horizontal scroll on phones).
# Local files get a font check first: a web font that didn't load (a dropped Google Fonts request) is retried once,
# then the shot fails with FONTS MISSING instead of silently saving a Helvetica fallback.
set -e
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mode=$1 page=$2 out=${3:A}
flags=(--headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files --virtual-time-budget=8000)
[[ ${THEME:-light} == dark ]] && flags+=(--force-dark-mode --blink-settings=preferredColorScheme=0) || flags+=(--blink-settings=preferredColorScheme=1)
[[ -z $MOTION && $mode != strip ]] && flags+=(--force-prefers-reduced-motion)
prof=$(mktemp -d); flags+=(--user-data-dir=$prof)
if [[ $page == http* ]]; then url=$page; [[ $mode == (view|pdf) ]] || { echo "full/mobile/strip need a local file" >&2; exit 2; }
else page=${page:A}; [[ -f $page ]] || { echo "no such file: $page" >&2; exit 2; }; url="file://$page"; d=${page:h}; fi
trap 'rm -rf "$prof" "$d/.shoot-m.html" "$d/.shoot-w.html"' EXIT
# [Agent] Inject a probe script before </body>, or at the end when the file has none (a silent failure otherwise).
# [Agent] Python, not sed: sed reads "&" in the script as "the matched text", and zsh's ${x/a/b} splits on the "/" of
# </body>. The probe goes before </body>, or at the end when the file has none.
probe() { python3 -c 'import sys; p, js, o = sys.argv[1:]; h = open(p).read(); t = f"<script>{js}</script>"
open(o, "w").write(h.replace("</body>", t + "</body>", 1) if "</body>" in h else h + t)' "$page" "$1" "$d/.shoot-m.html"; }
title_of() { "$CH" $flags --window-size=$2,900 --dump-dom "file://$1" 2>/dev/null | grep -o '<title>[A-Z]=[0-9x]*' | head -1 | sed 's/<title>[A-Z]=//'; }
# [Agent] Every family in use is loaded first (fonts load lazily, so an unused @font-face isn't a failure), then a
# family counts as missing when text set in it measures exactly like both generic fallbacks, which catches a
# failed @font-face and a Google Fonts stylesheet that never arrived (document.fonts.check can't see the latter).
fonts_js='addEventListener("load",()=>document.fonts.ready.then(async()=>{const c=document.createElement("canvas").getContext("2d");const w=f=>{c.font="40px "+f;return c.measureText("mmmmlli 0123 Wg").width};const fams=new Set([...document.querySelectorAll("body *")].map(e=>getComputedStyle(e).fontFamily.split(",")[0].trim().replace(/["\x27]/g,"")));await Promise.all([...fams].map(f=>document.fonts.load("40px "+JSON.stringify(f)).catch(()=>[])));const bad=[...fams].filter(f=>!/^(serif|sans-serif|monospace|system-ui|ui-.*|-apple-system|BlinkMacSystemFont|Helvetica|Arial|Times|Georgia|Menlo|Courier)/i.test(f)&&["monospace","serif"].every(g=>w(JSON.stringify(f)+","+g)===w(g)));document.title="F="+(bad.join("|")||"ok")}))'
missing_fonts() { probe "$fonts_js"; "$CH" $flags --window-size=1200,900 --dump-dom "file://$d/.shoot-m.html" 2>/dev/null | grep -o '<title>F=[^<]*' | head -1 | sed 's/<title>F=//'; }
if [[ -n $d ]]; then
  m=$(missing_fonts); [[ $m == ok || -z $m ]] || { sleep 2; m=$(missing_fonts); }
  [[ $m == ok || -z $m ]] || { echo "FONTS MISSING: ${m//|/, } (not loaded; check the @font-face/Google Fonts URL)" >&2; exit 3; }
fi
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
  strip)
    # [Agent] --virtual-time-budget does not move CSS animations to a chosen time (tested: 150 and 300 ms gave the same
    # frame, 0 hangs Chrome), so each frame pauses every animation on the page and seeks it to t ms instead.
    times=(${=6:-0 150 300 600 1200})
    for i in {1..$#times}; do
      probe "addEventListener('load',()=>setTimeout(()=>document.getAnimations().forEach(a=>{a.pause();a.currentTime=$times[i]}),50))"
      "$CH" $flags --window-size=$4,$5 --screenshot="$prof/f$(printf %03d $i).png" "file://$d/.shoot-m.html" >/dev/null 2>&1
    done
    uv run -q --with pillow python -c "
import sys; from PIL import Image, ImageDraw
fs, ts = [Image.open(f).convert('RGB') for f in sys.argv[3:]], sys.argv[2].split()
w, h = fs[0].size; px = max(18, w // 50); sheet = Image.new('RGB', (len(fs) * (w + 16) - 16, h + px + 18), (128, 128, 128)); d = ImageDraw.Draw(sheet)
for i, (f, t) in enumerate(zip(fs, ts)): sheet.paste(f, (i * (w + 16), 0)); d.text((i * (w + 16) + 8, h + 8), t + ' ms', fill='white', font_size=px)
sheet.save(sys.argv[1])" "$out" "$times" $prof/f*.png
    echo "$out ${#times} frames at $times ms"
    if [[ -n $MP4 ]]; then
      for i in {1..$#times}; do print -r -- "file '$prof/f$(printf %03d $i).png'"; print -r -- "duration $(( (${times[i+1]:-$(( times[i] + 500 ))} - times[i]) / 1000.0 ))"; done > "$prof/list.txt"
      /opt/homebrew/bin/ffmpeg -y -loglevel error -f concat -safe 0 -i "$prof/list.txt" -vf "fps=30,scale=trunc(iw/2)*2:trunc(ih/2)*2,format=yuv420p" -movflags +faststart "${out:r}.mp4"
      echo "${out:r}.mp4"
    fi;;
  pdf)
    "$CH" $flags --no-pdf-header-footer --print-to-pdf="$out" "$url" >/dev/null 2>&1
    echo "$out";;
  *) echo "usage: shoot.sh view|full|mobile|strip|pdf page.html out.png ..." >&2; exit 2;;
esac
