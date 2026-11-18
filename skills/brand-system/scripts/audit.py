# [Agent] Mechanical half of the crit checklist: are the promised deliverables there, does the palette pass, does the page
# compile? Taste is not checked here (open the PNGs for that); this only catches what a script can catch, so the human
# crit time goes to design, not to missing files.
# usage: python3 audit.py ~/Documents/<brand>      (exit 1 when anything fails)
import json, re, sys, pathlib, urllib.request

root = pathlib.Path(sys.argv[1]).expanduser().resolve()
fails, warns = [], []
def need(ok, msg): ok or fails.append(msg)
def want(ok, msg): ok or warns.append(msg)
def any_file(pattern): return sorted(root.glob(pattern))

for f in ["page.mdx", "branding.md", "tokens.css", "CREDITS.md"]:
    need((root / f).exists(), f"missing {f}")
need(any_file("fonts/*.[ot]tf"), "no font files in fonts/")
need(any_file("fonts/OFL*"), "no OFL licence file in fonts/")
for pat, what in [("logo/**/*lockup*.svg", "lockup SVG"), ("logo/**/*mark*.svg", "mark SVG"), ("logo/**/favicon*.svg", "favicon SVG"),
                  ("logo/**/favicon*16*.png", "16 px favicon PNG"), ("logo/**/*app-icon*", "app icon"), ("logo/**/*avatar*", "avatar")]:
    need(any_file(pat), f"missing {what} ({pat})")
need(any_file("site/index.html"), "missing site/index.html (landing)")
need(len(any_file("site/*.html")) >= 2, "no product screen next to the landing in site/")
need(any_file("site/shots/*1440*"), "no 1440 screenshot in site/shots/")
need(any_file("site/shots/*390*"), "no 390 mobile screenshot in site/shots/")
need(any_file("apps/*og*") or any_file("apps/*1200x630*"), "no OG image in apps/")
want(any_file("img/*size*"), "no logo size-test sheet in img/")
want(any_file("img/*sketch*") or any_file("logo/*sketch*"), "no logo sketches kept (show the rejected directions)")

colors = root / "src/colors.json"
if colors.exists():
    rows = json.loads(colors.read_text()).get("contrast", [])
    need(rows, "src/colors.json has no contrast pairs")
    for r in rows:
        if not isinstance(r, dict):
            warns.append("src/colors.json contrast rows are not from scripts/palette.py; re-run it"); break
        need(r.get("ok", True), f"contrast fail: {r['fg']} on {r['bg']} = {r['ratio']} ({r['use']})")
else:
    fails.append("missing src/colors.json (run scripts/palette.py)")

if (root / "branding.md").exists():
    b = (root / "branding.md").read_text().lower()
    for sec in ["strategy", "logo", "colour|color", "type|typography", "space|spacing", "imagery", "motion", "voice"]:
        need(re.search(rf"^#+ .*({sec})", b, re.M), f"branding.md has no section heading for {sec}")
    want("say" in b and "don" in b, "branding.md voice has no say / don't-say table")

# [Agent] Reduced-motion rules may live in tokens.css or any stylesheet/script next to the pages, not only inline.
side = " ".join(p.read_text(errors="ignore") for p in [root / "tokens.css", *any_file("site/**/*.css"), *any_file("site/**/*.js")] if p.exists())
for html in any_file("site/*.html"):
    s = html.read_text(errors="ignore")
    need("lorem ipsum" not in s.lower(), f"{html.name}: lorem ipsum left in")
    imgs = re.findall(r"<img\b[^>]*>", s, re.I)
    need(all("alt=" in i for i in imgs), f"{html.name}: <img> without alt")
    if re.search(r"@keyframes|animation:|requestAnimationFrame|setInterval", s):
        need("prefers-reduced-motion" in s + side,
             f"{html.name}: animates but has no prefers-reduced-motion fallback")
    srcs = re.findall(r'<img[^>]+src="([^"]+)"', s)
    dup = {x for x in srcs if srcs.count(x) > 1 and "logo" not in x}
    want(not dup, f"{html.name}: same image used more than once: {sorted(dup)[:4]}")

try:
    r = json.loads(urllib.request.urlopen(f"http://127.0.0.1:8800/api/check/{root.name}", timeout=10).read())
    need(r.get("ok"), f"api/check not ok: {json.dumps(r)[:300]}")
    need(not r.get("missing"), f"api/check missing files: {r.get('missing')}")
except Exception as e:
    warns.append(f"artifacts app not reachable ({e}); check page.mdx by hand")

for w in warns: print("warn ", w)
for f in fails: print("FAIL ", f)
print(f"{root.name}: {len(fails)} fail, {len(warns)} warn")
sys.exit(1 if fails else 0)
