# [Agent] Public-domain artwork from Wikimedia Commons, with the licence checked and the credit written for you.
#   python3 commons.py search "Luini portrait woman" [n]        → File: titles with their licence
#   python3 commons.py fetch "File:Some_painting.jpg" out.jpg [width=1600] [--credits CREDITS.md]
# One metadata call (MediaWiki imageinfo + extmetadata) gives the licence, author, date and a thumbnail URL at the width
# asked for. Only public domain, PDM and CC0 pass; anything else (CC BY-SA, …) is refused, because a brand kit can't
# carry share-alike or attribution strings on every use. Downloads go through curl, one request every 4 s: Commons
# answers bursts and Python's HTTP client with 429 or an HTML error page, so the bytes are checked to be an image.
import json, re, subprocess, sys, time, urllib.parse, pathlib

UA = "brand-system-skill/1.0 (design mockups; https://github.com/FrancescoSaverioZuppichini/brand-system-skill)"
API = "https://commons.wikimedia.org/w/api.php?"
_last = [0.0]

def get(url, tries=4):
    for k in range(tries):
        time.sleep(max(0, _last[0] + 4 - time.time())); _last[0] = time.time()
        r = subprocess.run(["curl", "-s", "-L", "-A", UA, "-w", "\n%{http_code}", url], capture_output=True)
        body, _, code = r.stdout.rpartition(b"\n")
        if code == b"200":
            return body
        print(f"  http {code.decode()} (retry in {15 * (k + 1)} s)", file=sys.stderr)
        time.sleep(15 * (k + 1))
    raise SystemExit(f"failed: {url}")

def plain(s):
    # [Agent] Commons pads titles and dates with Wikidata "QS:" statements; keep only the readable part before them.
    s = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", s or ""))
    return re.split(r"(?:title|label|date)?\s*QS:", s)[0].strip()

def info(title, width=1600):
    q = {"action": "query", "format": "json", "prop": "imageinfo", "titles": title,
         "iiprop": "url|extmetadata|size", "iiurlwidth": width}
    page = next(iter(json.loads(get(API + urllib.parse.urlencode(q)))["query"]["pages"].values()))
    if "imageinfo" not in page:
        raise SystemExit(f"not found: {title}")
    ii = page["imageinfo"][0]; m = ii.get("extmetadata", {})
    lic = plain(m.get("LicenseShortName", {}).get("value"))
    return {"title": title, "page": ii["descriptionurl"], "url": ii.get("thumburl") or ii["url"], "size": (ii["width"], ii["height"]),
            "licence": lic, "free": bool(re.search(r"public domain|^pdm|^cc0", lic, re.I)),
            "artist": plain(m.get("Artist", {}).get("value"))[:120], "date": plain(m.get("DateTimeOriginal", {}).get("value"))[:60],
            "work": plain(m.get("ObjectName", {}).get("value"))[:160]}

if __name__ == "__main__":
    a = sys.argv[1:]
    if a[:1] == ["search"]:
        q = {"action": "query", "format": "json", "list": "search", "srnamespace": 6, "srlimit": int(a[2]) if len(a) > 2 else 10,
             "srsearch": a[1] + " filetype:bitmap"}
        for hit in json.loads(get(API + urllib.parse.urlencode(q)))["query"]["search"]:
            i = info(hit["title"], 400)
            print(f"{'ok  ' if i['free'] else 'NO  '} {i['licence'][:22]:22} {i['size'][0]}x{i['size'][1]:<5} {hit['title']}")
    elif a[:1] == ["fetch"] and len(a) >= 3:
        credits = a[a.index("--credits") + 1] if "--credits" in a else None
        rest = [x for x in a[3:] if x != "--credits" and x != credits]
        i = info(a[1], int(rest[0]) if rest else 1600)
        if not i["free"]:
            raise SystemExit(f"refused: licence is '{i['licence']}', not public domain / CC0 ({i['page']})")
        data = get(i["url"])
        if not (data[:3] == b"\xff\xd8\xff" or data[:8] == b"\x89PNG\r\n\x1a\n" or data[:4] in (b"RIFF", b"GIF8")):
            raise SystemExit("got an HTML error page instead of an image; wait a minute and retry")
        pathlib.Path(a[2]).write_bytes(data)
        line = f"- {i['work'] or i['title'][5:]}, {i['artist']}, {i['date']}. {i['licence']}. {i['page']} → `{a[2]}`"
        if credits:
            with open(credits, "a") as f: f.write(line + "\n")
        print(line)
    else:
        sys.exit(__doc__ if __doc__ else "usage: commons.py search QUERY [n] | fetch 'File:…' out.jpg [width] [--credits CREDITS.md]")
