# /// script
# requires-python = ">=3.10"
# dependencies = []
# ///
# [Agent] Mechanical half of the crit: missing deliverables for the surfaces brief.md lists, failing contrast, broken
# pages. Taste is judged by eye on the PNGs.
# usage: uv run audit.py ~/Documents/<brand>      (exit 1 when anything fails)
import json, re, sys, urllib.request
from pathlib import Path
from typing import Any

Check = tuple[Any, str]  # (passed, what to print when it did not)
LOGO = {"*lockup*.svg": "lockup SVG", "*mark*.svg": "mark SVG", "favicon*.svg": "favicon SVG",
        "favicon*16*.png": "16 px favicon PNG", "*app-icon*": "app icon", "*avatar*": "avatar"}
SOCIAL = ["apps/*og*", "apps/*1200x630*", "apps/*social*", "apps/*post*", "apps/*story*"]
SECTIONS = ["strategy", "direction", "logo", "colour|color", "type|typography", "imagery", "motion", "voice"]

def has(root: Path, *globs: str) -> bool:
    return any(next(root.glob(g), None) for g in globs)

def get_surfaces(root: Path) -> list[str] | None:
    brief = root / "brief.md"
    found = re.search(r"^\W*surfaces\W+(.+)$", brief.read_text(), re.I | re.M) if brief.exists() else None
    return [s.strip().lower() for s in found[1].split(",")] if found else None

def check_files(root: Path) -> tuple[list[Check], list[Check]]:
    surfaces = get_surfaces(root) or ["landing", "product", "social"]
    screens = [p for p in root.glob("site/*.html") if p.name != "index.html"]
    need = [(has(root, f), f"missing {f}") for f in ("page.mdx", "branding.md", "tokens.css", "CREDITS.md")]
    need += [(has(root, "fonts/*.[ot]tf"), "no font files in fonts/"), (has(root, "fonts/OFL*"), "no OFL licence file in fonts/")]
    need += [(has(root, f"logo/**/{g}"), f"missing {what} (logo/**/{g})") for g, what in LOGO.items()]
    if "landing" in surfaces:
        need += [(has(root, "site/index.html"), "missing site/index.html (landing)"),
                 (has(root, "site/shots/*1440*"), "no 1440 screenshot in site/shots/"),
                 (has(root, "site/shots/*390*"), "no 390 mobile screenshot in site/shots/")]
    if "product" in surfaces or "app" in surfaces:
        need += [(screens, "no product screen next to the landing in site/"),
                 (any(has(root, f"site/shots/{p.stem}*") for p in screens), "no screenshot of the product screen in site/shots/")]
    need += [(has(root, *SOCIAL), "no OG image or social asset in apps/")] if "social" in surfaces else []
    need += [(has(root, f"apps/*{s}*"), f"no {s} file in apps/ (a name containing '{s}')") for s in ("packaging", "signage", "print") if s in surfaces]
    return need, [(get_surfaces(root), "brief.md is missing or has no 'surfaces:' line; checked landing, product and social"),
                  (has(root, "img/*size*"), "no logo size-test sheet in img/"),
                  (has(root, "img/*sketch*", "logo/*sketch*"), "no logo sketches kept (show the rejected directions)")]

def check_colors(root: Path) -> tuple[list[Check], list[Check]]:
    path = root / "src/colors.json"
    if not path.exists():
        return [(False, "missing src/colors.json (run scripts/palette.py)")], []
    rows = json.loads(path.read_text()).get("contrast", [])
    if not all(isinstance(r, dict) for r in rows):
        return [], [(False, "src/colors.json contrast rows are not from scripts/palette.py; re-run it")]
    return [(any(r.get("kind") != "decorative" for r in rows), "src/colors.json has no text or UI contrast pairs")] + [
        (r["ok"], f"contrast fail: {r['fg']} on {r['bg']} = {r['ratio']} ({r['use']})") for r in rows], []

def check_branding(root: Path) -> tuple[list[Check], list[Check]]:
    path = root / "branding.md"
    if not path.exists():
        return [], []
    text = path.read_text().lower()
    return ([(re.search(rf"^#+ .*({s})", text, re.M), f"branding.md has no section heading for {s}") for s in SECTIONS],
            [(re.search(r"^#+ .*(space|spacing)", text, re.M), "branding.md has no section heading for space|spacing"),
             ("say" in text and "don" in text, "branding.md voice has no say / don't-say table")])

def check_pages(root: Path) -> tuple[list[Check], list[Check]]:
    # [Agent] Reduced-motion rules may live in tokens.css or any stylesheet/script next to the pages, not only inline.
    scripts = [root / "tokens.css", *root.glob("site/**/*.css"), *root.glob("site/**/*.js")]
    shared = " ".join(p.read_text(errors="ignore") for p in scripts if p.exists())
    need: list[Check] = []
    want: list[Check] = []
    for page in sorted(root.glob("site/*.html")):
        html = page.read_text(errors="ignore")
        animates = re.search(r"@keyframes|animation:|requestAnimationFrame|setInterval", html)
        need += [("lorem ipsum" not in html.lower(), f"{page.name}: lorem ipsum left in"),
                 (all("alt=" in img for img in re.findall(r"<img\b[^>]*>", html, re.I)), f"{page.name}: <img> without alt"),
                 (not animates or "prefers-reduced-motion" in html + shared, f"{page.name}: animates but has no prefers-reduced-motion fallback")]
        srcs = re.findall(r'<img[^>]+src="([^"]+)"', html)
        repeated = sorted({src for src in srcs if srcs.count(src) > 1 and "logo" not in src})
        want.append((not repeated, f"{page.name}: same image used more than once: {repeated[:4]}"))
    try:
        result = json.loads(urllib.request.urlopen(f"http://127.0.0.1:8800/api/check/{root.name}", timeout=10).read())
    except Exception as e:
        return need, want + [(False, f"artifacts app not reachable ({e}); check page.mdx by hand")]
    return need + [(result.get("ok"), f"api/check not ok: {json.dumps(result)[:300]}"),
                   (not result.get("missing"), f"api/check missing files: {result.get('missing')}")], want

def main() -> None:
    root = Path(sys.argv[1]).expanduser().resolve()
    results = [check(root) for check in (check_files, check_colors, check_branding, check_pages)]
    fails = [message for need, _ in results for ok, message in need if not ok]
    warns = [message for _, want in results for ok, message in want if not ok]
    print(*[f"warn  {m}" for m in warns], *[f"FAIL  {m}" for m in fails], f"{root.name}: {len(fails)} fail, {len(warns)} warn", sep="\n")
    sys.exit(1 if fails else 0)

if __name__ == "__main__": main()
