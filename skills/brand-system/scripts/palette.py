# [Agent] One source of truth for a palette: OKLCH in, hex + WCAG contrast + a CSS pigment block out.
# Input JSON: {"tokens": {"name": [L, C, H, "role"]}, "pairs": [["fg", "bg", "use"]]}.
# A pair whose use mentions "large" or "ui" needs 3:1; "decorative" is reported but never fails; everything else needs 4.5:1.
# Exits 1 when a pair fails or a colour had to be clipped into sRGB, so a broken palette can't slip through silently.
import json, math, sys, pathlib

def oklch_to_srgb(L, C, H):
    a, b = C * math.cos(math.radians(H)), C * math.sin(math.radians(H))
    l_, m_, s_ = L + 0.3963377774 * a + 0.2158037573 * b, L - 0.1055613458 * a - 0.0638541728 * b, L - 0.0894841775 * a - 1.2914855480 * b
    l, m, s = l_ ** 3, m_ ** 3, s_ ** 3
    lin = (4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
           -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
           -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s)
    clipped = any(v < -1e-4 or v > 1 + 1e-4 for v in lin)
    enc = lambda x: 12.92 * x if x <= 0.0031308 else 1.055 * x ** (1 / 2.4) - 0.055
    return tuple(round(enc(min(max(v, 0), 1)) * 255) for v in lin), clipped

def luminance(rgb):
    ch = lambda c: c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = (ch(c / 255) for c in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def contrast(a, b):
    hi, lo = sorted((luminance(a), luminance(b)), reverse=True)
    return (hi + 0.05) / (lo + 0.05)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit("usage: palette.py colors-in.json colors-out.json [pigments.css]")
    spec = json.loads(pathlib.Path(sys.argv[1]).read_text())
    rgb, bad = {}, []
    for k, (L, C, H, _) in spec["tokens"].items():
        rgb[k], clipped = oklch_to_srgb(L, C, H)
        if clipped:
            bad.append(f"{k}: outside sRGB, lower the chroma")
    hexes = {k: "#%02X%02X%02X" % v for k, v in rgb.items()}
    rows = []
    for fg, bg, use in spec.get("pairs", []):
        r = round(contrast(rgb[fg], rgb[bg]), 2)
        need = 0 if "decorative" in use else 3 if ("large" in use or "ui" in use) else 4.5
        grade = "AAA" if r >= 7 else "AA" if r >= 4.5 else "AA-large" if r >= 3 else "below 3"
        ok = r >= need
        rows.append({"fg": fg, "bg": bg, "use": use, "ratio": r, "grade": grade, "ok": ok})
        if not ok:
            bad.append(f"{fg} on {bg} = {r} < {need} ({use})")
    out = {"tokens": {k: {"oklch": f"oklch({v[0]:.3f} {v[1]:.3f} {v[2]:g})", "hex": hexes[k], "role": v[3]} for k, v in spec["tokens"].items()},
           "contrast": rows}
    pathlib.Path(sys.argv[2]).write_text(json.dumps(out, indent=1))
    css = ":root {\n" + "\n".join(f"  --{k}: {t['oklch']}; /* {t['hex']} · {t['role']} */" for k, t in out["tokens"].items()) + "\n}\n"
    if len(sys.argv) > 3:
        pathlib.Path(sys.argv[3]).write_text(css)
    for k, t in out["tokens"].items():
        print(f"{k:20} {t['hex']}  {t['oklch']}")
    for r in rows:
        print(f"{r['fg']:18} on {r['bg']:18} {r['ratio']:5.2f}  {r['grade']:8} {'ok ' if r['ok'] else 'FAIL'} {r['use']}")
    if bad:
        print("\n".join(["", "PROBLEMS:"] + bad))
        sys.exit(1)
