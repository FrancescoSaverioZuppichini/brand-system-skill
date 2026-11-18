# /// script
# requires-python = ">=3.10"
# dependencies = []
# ///
# [Agent] Mechanical half of the crit: deliverables for the surfaces in brief.md, contrast, broken
# pages. Taste is judged by eye on the PNGs.
# usage: uv run audit.py <brand-folder>      (exit 1 when anything fails)
import json, re, sys, urllib.request
from pathlib import Path

Checks = tuple[dict[str, bool], dict[str, bool]]  # (FAIL, warn) checks: message → passed
FILES = ("page.mdx", "branding.md", "tokens.css", "CREDITS.md")
LOGO = {"*lockup*.svg": "lockup SVG", "*mark*.svg": "mark SVG", "favicon*.svg": "favicon SVG",
        "favicon*16*.png": "16 px favicon PNG", "*app-icon*": "app icon", "*avatar*": "avatar"}
SOCIAL = ("apps/*og*", "apps/*1200x630*", "apps/*social*", "apps/*post*", "apps/*story*")
SECTIONS = ("strategy", "direction", "logo", "colour|color", "type|typography", "imagery", "motion",
            "voice")

def has(root: Path, *globs: str) -> bool:
    return any(next(root.glob(g), None) for g in globs)

def check_files(root: Path) -> Checks:
    brief = root / "brief.md"
    text = brief.read_text() if brief.exists() else ""
    found = re.search(r"^\W*surfaces\W+(.+)$", text, re.I | re.M)
    surfaces = re.findall(r"\w+", found[1].lower()) if found else ["landing", "product", "social"]
    screens = [p.stem for p in root.glob("site/*.html") if p.name != "index.html"]
    need = {f"missing {f}": has(root, f) for f in FILES}
    need["no font files in fonts/"] = has(root, "fonts/*.[ot]tf")
    need["no OFL licence file in fonts/"] = has(root, "fonts/OFL*")
    need |= {f"missing {what} (logo/**/{g})": has(root, f"logo/**/{g}") for g, what in LOGO.items()}
    if "landing" in surfaces:
        need["missing site/index.html (landing)"] = has(root, "site/index.html")
        need["no 1440 screenshot in site/shots/"] = has(root, "site/shots/*1440*")
        need["no 390 mobile screenshot in site/shots/"] = has(root, "site/shots/*390*")
    if "product" in surfaces or "app" in surfaces:
        need["no product screen next to the landing in site/"] = bool(screens)
        shots = [f"site/shots/{s}*" for s in screens]
        need["no screenshot of the product screen in site/shots/"] = has(root, *shots)
    if "social" in surfaces:
        need["no OG image or social asset in apps/"] = has(root, *SOCIAL)
    for word in ("packaging", "signage", "print"):
        if word in surfaces:
            need[f"no {word} file in apps/ (a name with '{word}')"] = has(root, f"apps/*{word}*")
    brief_line = "brief.md missing or has no 'surfaces:' line; checked landing, product, social"
    return need, {brief_line: bool(found),
                  "no logo size-test sheet in img/": has(root, "img/*size*")}

def check_colors(root: Path) -> Checks:
    path = root / "src/colors.json"
    if not path.exists():
        return {"missing src/colors.json (run scripts/palette.py)": False}, {}
    rows = [r for r in json.loads(path.read_text()).get("contrast", []) if isinstance(r, dict)]
    need = {"src/colors.json has no text or UI pair (re-run scripts/palette.py)":
            any(r.get("kind") != "decorative" for r in rows)}
    for r in rows:
        need[f"contrast fail: {r['fg']} on {r['bg']} = {r['ratio']} ({r['use']})"] = bool(r["ok"])
    return need, {}

def check_branding(root: Path) -> Checks:
    path = root / "branding.md"
    if not path.exists():
        return {}, {}
    headings = " ".join(re.findall(r"^#+ (.*)", path.read_text().lower(), re.M))
    need = {f"branding.md has no section heading for {s}": bool(re.search(s, headings))
            for s in SECTIONS}
    return need, {"branding.md has no section heading for space": "space" in headings}

def check_pages(root: Path) -> Checks:
    # [Agent] Reduced-motion rules may live in tokens.css or any stylesheet or script of the site.
    sheets = [root / "tokens.css", *root.glob("site/**/*.css"), *root.glob("site/**/*.js")]
    shared = " ".join(p.read_text(errors="ignore") for p in sheets if p.exists())
    need: dict[str, bool] = {}
    for page in sorted(root.glob("site/*.html")):
        html = page.read_text(errors="ignore")
        moves = re.search(r"@keyframes|animation:|requestAnimationFrame|setInterval", html)
        imgs = re.findall(r"<img\b[^>]*>", html, re.I)
        need[f"{page.name}: lorem ipsum left in"] = "lorem ipsum" not in html.lower()
        need[f"{page.name}: <img> without alt"] = all("alt=" in img for img in imgs)
        reduced = not moves or "prefers-reduced-motion" in html + shared
        need[f"{page.name}: animates but has no prefers-reduced-motion fallback"] = reduced
    try:
        url = f"http://127.0.0.1:8800/api/check/{root.name}"
        result = json.loads(urllib.request.urlopen(url, timeout=10).read())
    except (OSError, ValueError) as e:
        return need, {f"artifacts app not reachable ({e}); check page.mdx by hand": False}
    need[f"api/check not ok: {json.dumps(result)[:300]}"] = bool(result.get("ok"))
    need[f"api/check missing files: {result.get('missing')}"] = not result.get("missing")
    return need, {}

def main() -> None:
    root = Path(sys.argv[1]).expanduser().resolve()
    results = [check(root) for check in (check_files, check_colors, check_branding, check_pages)]
    fails = [m for need, _ in results for m, ok in need.items() if not ok]
    warns = [m for _, want in results for m, ok in want.items() if not ok]
    lines = [f"warn  {m}" for m in warns] + [f"FAIL  {m}" for m in fails]
    print("\n".join(lines + [f"{root.name}: {len(fails)} fail, {len(warns)} warn"]))
    sys.exit(1 if fails else 0)

if __name__ == "__main__":
    main()
