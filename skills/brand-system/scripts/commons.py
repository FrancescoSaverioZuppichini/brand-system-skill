# /// script
# requires-python = ">=3.10"
# dependencies = []
# ///
# [Agent] Public-domain art from Wikimedia Commons, licence checked and credit written. Only public
# domain, PDM and CC0 pass: a brand kit can't carry share-alike or attribution strings everywhere.
# usage: uv run commons.py search "query" [n]  |  fetch "File:…" out.jpg [width] [--credits FILE]
import argparse, json, os, re, subprocess, sys, time, urllib.parse
from pathlib import Path

API = "https://commons.wikimedia.org/w/api.php?format=json&action=query&"
UA = "brand-system-skill/1.0 (https://github.com/FrancescoSaverioZuppichini/brand-system-skill)"
IMAGES = (b"\xff\xd8\xff", b"\x89PNG\r\n\x1a\n", b"RIFF", b"GIF8")
FIELDS = ("LicenseShortName", "Artist", "DateTimeOriginal", "ObjectName")

def download(url: str) -> bytes:
    # [Agent] curl, not urllib, and 4 s before every request: Commons answers bursts and Python's
    # HTTP client with 429 or an HTML error page.
    for attempt in range(1, 5):
        time.sleep(4)
        curl = ["curl", "-sL", "-A", UA, "-w", "\n%{http_code}", url]
        body, _, code = subprocess.run(curl, capture_output=True).stdout.rpartition(b"\n")
        if code == b"200":
            return body
        print(f"  http {code.decode()} (retry in {15 * attempt} s)", file=sys.stderr)
        time.sleep(15 * attempt)
    raise SystemExit(f"failed: {url}")

def clean(html: str) -> str:
    # [Agent] Commons pads titles and dates with Wikidata "QS:" statements; keep the readable part.
    text = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", html))
    return re.split(r"(?:title|label|date)?\s*QS:", text)[0].strip()

def get_info(title: str, width: int) -> dict[str, str]:
    query = {"titles": title, "prop": "imageinfo", "iiprop": "url|extmetadata", "iiurlwidth": width}
    pages = json.loads(download(API + urllib.parse.urlencode(query)))["query"]["pages"]
    page = next(iter(pages.values()))
    if "imageinfo" not in page:
        raise SystemExit(f"not found: {title}")
    info = page["imageinfo"][0]
    fields = {k: clean(info.get("extmetadata", {}).get(k, {}).get("value", "")) for k in FIELDS}
    return {"page": info["descriptionurl"], "url": info.get("thumburl") or info["url"], **fields}

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
    fetch.add_argument("--credits", help="append the credit line to this file")
    a = ap.parse_args()
    if a.command == "search":
        words = a.query + " filetype:bitmap"
        query = {"list": "search", "srnamespace": 6, "srlimit": a.n, "srsearch": words}
        for hit in json.loads(download(API + urllib.parse.urlencode(query)))["query"]["search"]:
            print(hit["title"])
        return
    info = get_info(a.title, a.width)
    licence, page = info["LicenseShortName"], info["page"]
    if not re.search(r"public domain|^pdm|^cc0", licence, re.I):
        raise SystemExit(f"refused: licence is '{licence}', not public domain / CC0 ({page})")
    data = download(info["url"])
    if not data.startswith(IMAGES):
        raise SystemExit("got an HTML error page instead of an image; wait a minute and retry")
    Path(a.out).write_bytes(data)
    work = info["ObjectName"][:160] or a.title[5:]
    by = f"{info['Artist'][:120]}, {info['DateTimeOriginal'][:60]}"
    # [Agent] Credit the file relative to CREDITS.md, so the line stays true when the folder moves.
    where = Path(os.path.relpath(a.out, Path(a.credits).parent)) if a.credits else Path(a.out).name
    line = f"- {work}, {by}. {licence}. {page} → `{where}`"
    if a.credits:
        with open(a.credits, "a") as f:
            f.write(line + "\n")
    print(line)

if __name__ == "__main__":
    main()
