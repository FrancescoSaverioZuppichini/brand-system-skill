# [Agent] One source of truth for colour: OKLCH in → hex, WCAG contrast, the colour block of tokens.css and a markdown
# table out. Every generator (logo, mocks, site, page) reads the output instead of hard-coding hex, so a palette change
# is one edit plus a re-run.
#
# usage: python3 palette.py colors-in.json src/colors.json [--css src/colors.css] [--md src/colors.md] [--fit]
#
# colors-in.json:
# {
#   "tokens":  {"carta": [0.975, 0.007, 85, "page background, warm paper"], ...},      # pigments: L C H + role text
#   "roles":   {"light": {"bg": "carta", "text": "nerofumo", ...},                     # optional: role → pigment
#               "dark":  {"bg": "notte",  "text": "biacca", ...}},
#   "default": "light",                                                                 # optional, theme of :root
#   "pairs":   [["nerofumo", "carta", "body text"],                                     # fg, bg, what it is used for,
#               ["sanguigna", "carta", "accent button label", "large"],                 # optional kind: text (4.5:1,
#               ["linea", "carta", "hairline", "decorative"]]                           # default), large or ui (3:1),
# }                                                                                     # decorative (never fails)
# Exits 1 when a pair fails, a colour is outside sRGB (unless --fit) or a role points at itself.
import json, math, sys, pathlib

NEED = {"text": 4.5, "large": 3.0, "ui": 3.0, "decorative": 0.0}

def to_linear(L, C, H):
    a, b = C * math.cos(math.radians(H)), C * math.sin(math.radians(H))
    l_, m_, s_ = L + 0.3963377774 * a + 0.2158037573 * b, L - 0.1055613458 * a - 0.0638541728 * b, L - 0.0894841775 * a - 1.2914855480 * b
    l, m, s = l_ ** 3, m_ ** 3, s_ ** 3
    return (4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
            -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
            -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s)

def in_gamut(L, C, H):
    return all(-1e-4 <= v <= 1 + 1e-4 for v in to_linear(L, C, H))

def max_chroma(L, H):
    # [Agent] Bisection: the largest chroma that still fits sRGB at this lightness and hue.
    lo, hi = 0.0, 0.4
    for _ in range(30):
        mid = (lo + hi) / 2
        lo, hi = (mid, hi) if in_gamut(L, mid, H) else (lo, mid)
    return lo

def srgb(L, C, H):
    enc = lambda x: 12.92 * x if x <= 0.0031308 else 1.055 * x ** (1 / 2.4) - 0.055
    return tuple(round(enc(min(max(v, 0), 1)) * 255) for v in to_linear(L, C, H))

def luminance(rgb):
    ch = lambda c: c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = (ch(c / 255) for c in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def contrast(a, b):
    hi, lo = sorted((luminance(a), luminance(b)), reverse=True)
    return (hi + 0.05) / (lo + 0.05)

def passing_L(fg, bg_rgb, need):
    # [Agent] Walk the foreground's lightness away from the background (keeping hue, fitting chroma) until it passes,
    # so a failure tells you the number to type instead of "try again".
    L, C, H = fg
    step = -0.005 if luminance(srgb(L, C, H)) <= luminance(bg_rgb) else 0.005
    while 0 <= L <= 1:
        c = min(C, max_chroma(L, H))
        if contrast(srgb(L, c, H), bg_rgb) >= need:
            return round(L, 3)
        L += step
    return None

def main(argv):
    args = [a for a in argv if not a.startswith("--")]
    opt = lambda name: argv[argv.index(name) + 1] if name in argv else None
    if len(args) < 2:
        sys.exit("usage: palette.py colors-in.json colors.json [--css colors.css] [--md colors.md] [--fit]")
    spec = json.loads(pathlib.Path(args[0]).read_text())
    problems, tokens = [], {}
    for k, (L, C, H, role) in spec["tokens"].items():
        if not in_gamut(L, C, H):
            mc = max_chroma(L, H)
            if "--fit" in argv:
                print(f"fit   {k}: chroma {C} → {mc:.3f} (sRGB limit at L {L}, H {H})")
                C = round(mc - 0.001, 3)
            else:
                problems.append(f"{k}: outside sRGB; max chroma at L {L} H {H} is {mc:.3f} (or run with --fit)")
        tokens[k] = (L, C, H, role)
    rgb = {k: srgb(*v[:3]) for k, v in tokens.items()}
    hexes = {k: "#%02X%02X%02X" % v for k, v in rgb.items()}

    rows = []
    for p in spec.get("pairs", []):
        fg, bg, use = p[:3]
        kind = p[3] if len(p) > 3 else "text"
        r = round(contrast(rgb[fg], rgb[bg]), 2)
        ok = r >= NEED[kind]
        grade = "AAA" if r >= 7 else "AA" if r >= 4.5 else "AA-large" if r >= 3 else "<3"
        rows.append({"fg": fg, "bg": bg, "use": use, "kind": kind, "ratio": r, "grade": grade, "ok": ok})
        if not ok:
            fix = passing_L(tokens[fg][:3], rgb[bg], NEED[kind])
            hint = f"; {fg} passes at L {fix}" if fix is not None else ""
            problems.append(f"{fg} on {bg} = {r} < {NEED[kind]} ({use}){hint}")

    roles = spec.get("roles", {})
    for theme, m in roles.items():
        for role, pig in m.items():
            if role == pig:
                problems.append(f"role --{role} in {theme} points at a pigment with the same name: rename the pigment")
            elif pig not in tokens:
                problems.append(f"role --{role} in {theme} points at unknown pigment {pig}")

    out = {"tokens": {k: {"oklch": f"oklch({v[0]:.3f} {v[1]:.3f} {v[2]:g})", "hex": hexes[k], "role": v[3]} for k, v in tokens.items()},
           "roles": roles, "default": spec.get("default", "light"), "contrast": rows}
    pathlib.Path(args[1]).write_text(json.dumps(out, indent=1))

    if opt("--css"):
        # [Agent] Theme selectors work on any element ([data-theme=dark] on a card makes a dark plate on a light page),
        # and the media query only applies when nothing pinned a theme, so screenshots and mocks stay deterministic.
        default = out["default"]
        other = [t for t in roles if t != default]
        css = ["/* generated by palette.py: edit colors-in.json, not this file */", ":root {"]
        css += [f"  --{k}: {t['oklch']}; /* {t['hex']} · {t['role']} */" for k, t in out["tokens"].items()]
        css += [f"  --{r}: var(--{p});" for r, p in roles.get(default, {}).items()] + ["}"]
        for t in other:
            body = "\n".join(f"  --{r}: var(--{p});" for r, p in roles[t].items())
            css += [f"[data-theme=\"{t}\"] {{\n{body}\n}}",
                    f"@media (prefers-color-scheme: {t}) {{ :root:not([data-theme]) {{\n{body}\n}} }}"]
        if default in roles and other:
            body = "\n".join(f"  --{r}: var(--{p});" for r, p in roles[default].items())
            css.append(f"[data-theme=\"{default}\"] {{\n{body}\n}}")
        pathlib.Path(opt("--css")).write_text("\n".join(css) + "\n")

    if opt("--md"):
        md = ["| Token | OKLCH | Hex | Role |", "|---|---|---|---|"]
        md += [f"| {k} | {t['oklch'][6:-1]} | {t['hex']} | {t['role']} |" for k, t in out["tokens"].items()]
        md += ["", "| Pair | Use | Ratio | Grade |", "|---|---|---|---|"]
        md += [f"| {r['fg']} on {r['bg']} | {r['use']} ({r['kind']}) | {r['ratio']} | {r['grade'] if r['kind'] != 'decorative' else 'decorative'} |" for r in rows]
        pathlib.Path(opt("--md")).write_text("\n".join(md) + "\n")

    for k, t in out["tokens"].items():
        print(f"{k:20} {t['hex']}  {t['oklch']}")
    for r in rows:
        verdict = "decor" if r["kind"] == "decorative" else "ok" if r["ok"] else "FAIL"
        print(f"{r['fg']:18} on {r['bg']:18} {r['ratio']:5.2f}  {r['grade']:8} {verdict:5} {r['use']}")
    if problems:
        print("\nPROBLEMS:\n" + "\n".join(problems))
        sys.exit(1)

if __name__ == "__main__":
    main(sys.argv[1:])
