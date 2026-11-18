# /// script
# requires-python = ">=3.10"
# dependencies = []
# ///
# [Agent] Public-domain art from Wikimedia Commons with the licence checked and the credit line written. Only public
# domain, PDM and CC0 pass: a brand kit can't carry share-alike or attribution strings on every use.
# usage: uv run commons.py search "Luini portrait woman" [n]  |  uv run commons.py fetch "File:…" out.jpg [width=1600] [--credits CREDITS.md]
import argparse, json, re, subprocess, sys, time, urllib.parse
from pathlib import Path
from typing import Any, NamedTuple

UA = "brand-system-skill/1.0 (design mockups; https://github.com/FrancescoSaverioZuppichini/brand-system-skill)"
IMAGE_STARTS = (b"\xff\xd8\xff", b"\x89PNG\r\n\x1a\n", b"RIFF", b"GIF8")
Art = NamedTuple("Art", [("title", str), ("page", str), ("url", str), ("size", str), ("licence", str), ("free", bool), ("credit", str)])

def download(url: str) -> bytes:
    # [Agent] curl, not urllib, and 4 s before every request: Commons answers bursts and Python's HTTP client with 429 or
    # an HTML error page.
    for attempt in range(1, 5):
        time.sleep(4)
        done = subprocess.run(["curl", "-s", "-L", "-A", UA, "-w", "\n%{http_code}", url], capture_output=True)
        body, _, code = done.stdout.rpartition(b"\n")
        if code == b"200":
            return body
        print(f"  http {code.decode()} (retry in {15 * attempt} s)", file=sys.stderr)
        time.sleep(15 * attempt)
    raise SystemExit(f"failed: {url}")

def clean(html: str | None) -> str:
    # [Agent] Commons pads titles and dates with Wikidata "QS:" statements; keep only the readable part before them.
    text = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", html or ""))
    return re.split(r"(?:title|label|date)?\s*QS:", text)[0].strip()

def to_art(page: dict[str, Any]) -> Art:
    info = page["imageinfo"][0]
    meta = {k: clean(v.get("value")) for k, v in info.get("extmetadata", {}).items() if k in ("Artist", "DateTimeOriginal", "ObjectName", "LicenseShortName")}
    credit = f"{meta.get('ObjectName', '')[:160] or page['title'][5:]}, {meta.get('Artist', '')[:120]}, {meta.get('DateTimeOriginal', '')[:60]}"
    licence = meta.get("LicenseShortName", "")
    free = bool(re.search(r"public domain|^pdm|^cc0", licence, re.I))
    return Art(page["title"], info["descriptionurl"], info.get("thumburl") or info["url"], f"{info['width']}x{info['height']:<5}", licence, free, credit)

def list_art(query: dict[str, str | int]) -> list[Art]:
    # [Agent] One MediaWiki call gives licence, author, date and a thumbnail URL at the width asked for, for one title or a
    # whole search (generator=search), so a search costs one request instead of one per hit.
    params = {"action": "query", "format": "json", "prop": "imageinfo", "iiprop": "url|extmetadata|size", **query}
    pages = json.loads(download("https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params))).get("query", {}).get("pages", {})
    return [to_art(p) for p in sorted(pages.values(), key=lambda p: p.get("index", 0)) if "imageinfo" in p]

def main() -> None:
    ap = argparse.ArgumentParser()
    commands = ap.add_subparsers(dest="command", required=True)
    search = commands.add_parser("search")
    search.add_argument("query")
    search.add_argument("n", type=int, nargs="?", default=10)
    fetch = commands.add_parser("fetch")
    fetch.add_argument("title")
    fetch.add_argument("out")
    fetch.add_argument("width", type=int, nargs="?", default=1600)
    fetch.add_argument("--credits", help="also append the credit line to this file")
    a = ap.parse_args()
    if a.command == "search":
        found = list_art({"generator": "search", "gsrnamespace": 6, "gsrlimit": a.n, "gsrsearch": a.query + " filetype:bitmap", "iiurlwidth": 400})
        print("\n".join(f"{'ok  ' if art.free else 'NO  '} {art.licence[:22]:22} {art.size} {art.title}" for art in found))
        return
    art = next(iter(list_art({"titles": a.title, "iiurlwidth": a.width})), None)
    if art is None:
        raise SystemExit(f"not found: {a.title}")
    if not art.free:
        raise SystemExit(f"refused: licence is '{art.licence}', not public domain / CC0 ({art.page})")
    data = download(art.url)
    if not data.startswith(IMAGE_STARTS):
        raise SystemExit("got an HTML error page instead of an image; wait a minute and retry")
    Path(a.out).write_bytes(data)
    line = f"- {art.credit}. {art.licence}. {art.page} → `{a.out}`"
    if a.credits:
        with open(a.credits, "a") as f:
            f.write(line + "\n")
    print(line)

if __name__ == "__main__": main()
