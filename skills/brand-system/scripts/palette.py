# /// script
# requires-python = ">=3.10"
# dependencies = []
# ///
# [Agent] OKLCH pigments in → hex, WCAG contrast, the colour block of tokens.css and a markdown table out (input format in
# references/system.md). Exits 1 on any PROBLEM: a failing or missing pair, an unknown pigment, a colour outside sRGB.
# usage: uv run palette.py colors-in.json src/colors.json [--css src/colors.css] [--md src/colors.md] [--fit]
import argparse, json, math, sys
from pathlib import Path
from typing import NamedTuple, TypedDict

NEED = {"text": 4.5, "large": 3.0, "ui": 3.0, "decorative": 0.0}
ROLES = ["bg", "surface", "border", "text", "text-2", "primary", "on-primary", "accent", "on-accent", "focus"]
RGB = tuple[int, int, int]
Pair = tuple[str, str, str, str]  # fg, bg, use, kind
Table = dict[str, dict[str, str]]  # pigment → {"oklch", "hex", "role"}, as written to colors.json
Token = NamedTuple("Token", [("L", float), ("C", float), ("H", float), ("role", str)])
Row = TypedDict("Row", {"fg": str, "bg": str, "use": str, "kind": str, "ratio": float, "grade": str, "ok": bool})

def to_linear(L: float, C: float, H: float) -> tuple[float, float, float]:
    a, b = C * math.cos(math.radians(H)), C * math.sin(math.radians(H))
    l_, m_, s_ = L + 0.3963377774 * a + 0.2158037573 * b, L - 0.1055613458 * a - 0.0638541728 * b, L - 0.0894841775 * a - 1.2914855480 * b
    l, m, s = l_ ** 3, m_ ** 3, s_ ** 3
    return (4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s, -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
            -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s)

def in_gamut(L: float, C: float, H: float) -> bool:
    return all(-1e-4 <= v <= 1 + 1e-4 for v in to_linear(L, C, H))

def max_chroma(L: float, H: float) -> float:
    # [Agent] Bisection: the largest chroma that still fits sRGB at this lightness and hue.
    lo, hi = 0.0, 0.4
    for _ in range(30):
        mid = (lo + hi) / 2
        lo, hi = (mid, hi) if in_gamut(L, mid, H) else (lo, mid)
    return lo

def fit_gamut(tokens: dict[str, Token], fit: bool) -> tuple[dict[str, Token], list[str]]:
    outside = {k: (t, max_chroma(t.L, t.H)) for k, t in tokens.items() if not in_gamut(t.L, t.C, t.H)}
    if not fit:
        return tokens, [f"{k}: outside sRGB; max chroma at L {t.L} H {t.H} is {mc:.3f} (or run with --fit)" for k, (t, mc) in outside.items()]
    fitted = {k: t._replace(C=round(mc - 0.001, 3)) for k, (t, mc) in outside.items()}
    return {**tokens, **fitted}, [f"fit   {k}: chroma {t.C} → {mc:.3f} (sRGB limit at L {t.L}, H {t.H})" for k, (t, mc) in outside.items()]

def check_names(tokens: dict[str, Token], pairs: list[Pair], roles: dict[str, dict[str, str]]) -> tuple[list[str], list[str]]:
    # [Agent] Every text role needs a declared pair against its theme's bg, or a palette with no pairs would pass.
    declared = {(fg, bg) for fg, bg, _, kind in pairs if kind != "decorative"}
    problems = [f"pair {fg} on {bg} ({use}) names an unknown pigment" for fg, bg, use, _ in pairs if not {fg, bg} <= tokens.keys()]
    if not roles and not any(kind == "text" for *_, kind in pairs):
        problems.append("no text pair: add at least one [fg, bg, use] pair for body text")
    warnings = [f"{theme} has no role {', '.join(r for r in ROLES if r not in m)}" for theme, m in roles.items() if not set(ROLES) <= m.keys()]
    for theme, m in roles.items():
        problems += [f"role --{r} in {theme} points at a pigment with the same name: rename the pigment" for r, p in m.items() if r == p]
        problems += [f"role --{r} in {theme} points at unknown pigment {p}" for r, p in m.items() if r != p and p not in tokens]
        problems += [f"{theme}: no pair for --{r} ({m[r]}) on --bg ({m['bg']})" for r in ("text", "text-2", "text-3")
                     if r in m and "bg" in m and (m[r], m["bg"]) not in declared]
    return problems, warnings

def to_srgb(L: float, C: float, H: float) -> RGB:
    clipped = (min(max(v, 0), 1) for v in to_linear(L, C, H))
    r, g, b = (round((12.92 * v if v <= 0.0031308 else 1.055 * v ** (1 / 2.4) - 0.055) * 255) for v in clipped)
    return r, g, b

def luminance(rgb: RGB) -> float:
    r, g, b = (c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4 for c in (v / 255 for v in rgb))
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def contrast(a: RGB, b: RGB) -> float:
    hi, lo = sorted((luminance(a), luminance(b)), reverse=True)
    return (hi + 0.05) / (lo + 0.05)

def rate_pair(pair: Pair, rgb: dict[str, RGB]) -> Row:
    fg, bg, use, kind = pair
    ratio = round(contrast(rgb[fg], rgb[bg]), 2)
    grade = "AAA" if ratio >= 7 else "AA" if ratio >= 4.5 else "AA-large" if ratio >= 3 else "<3"
    return {"fg": fg, "bg": bg, "use": use, "kind": kind, "ratio": ratio, "grade": grade, "ok": ratio >= NEED[kind]}

def explain_fail(row: Row, tokens: dict[str, Token], rgb: dict[str, RGB]) -> str:
    # [Agent] Walk the fg lightness away from the bg (same hue, chroma kept in sRGB) until the pair passes: a number to type.
    fg, bg, need = tokens[row["fg"]], rgb[row["bg"]], NEED[row["kind"]]
    L, step = fg.L, -0.005 if luminance(to_srgb(fg.L, fg.C, fg.H)) <= luminance(bg) else 0.005
    while 0 <= L <= 1 and contrast(to_srgb(L, min(fg.C, max_chroma(L, fg.H)), fg.H), bg) < need:
        L += step
    hint = f"; {row['fg']} passes at L {round(L, 3)}" if 0 <= L <= 1 else ""
    return f"{row['fg']} on {row['bg']} = {row['ratio']} < {need} ({row['use']}){hint}"

def role_vars(roles: dict[str, str]) -> str:
    return "\n".join(f"  --{role}: var(--{pigment});" for role, pigment in roles.items())

def render_css(table: Table, roles: dict[str, dict[str, str]], default: str) -> str:
    # [Agent] [data-theme] works on any element (a dark card on a light page); the media query only applies when nothing
    # pinned a theme, so screenshots and mocks stay deterministic.
    css = ["/* generated by palette.py: edit colors-in.json, not this file */", ":root {"]
    css += [f"  --{k}: {t['oklch']}; /* {t['hex']} · {t['role']} */" for k, t in table.items()]
    css += [role_vars(roles[default])] if roles.get(default) else []
    css.append("}")
    for theme in [t for t in roles if t != default]:
        css += [f'[data-theme="{theme}"] {{\n{role_vars(roles[theme])}\n}}',
                f"@media (prefers-color-scheme: {theme}) {{ :root:not([data-theme]) {{\n{role_vars(roles[theme])}\n}} }}"]
    if default in roles and len(roles) > 1:
        css.append(f'[data-theme="{default}"] {{\n{role_vars(roles[default])}\n}}')
    return "\n".join(css) + "\n"

def render_md(table: Table, rows: list[Row]) -> str:
    md = ["| Token | OKLCH | Hex | Role |", "|---|---|---|---|"]
    md += [f"| {k} | {t['oklch'].removeprefix('oklch(').removesuffix(')')} | {t['hex']} | {t['role']} |" for k, t in table.items()]
    md += ["", "| Pair | Use | Ratio | Grade |", "|---|---|---|---|"]
    md += [f"| {r['fg']} on {r['bg']} | {r['use']} ({r['kind']}) | {r['ratio']} | {'decorative' if r['kind'] == 'decorative' else r['grade']} |" for r in rows]
    return "\n".join(md) + "\n"

def main() -> None:
    ap = argparse.ArgumentParser()
    for name in ("spec", "out", "--css", "--md"):
        ap.add_argument(name)
    ap.add_argument("--fit", action="store_true", help="clamp chroma into sRGB instead of failing")
    a = ap.parse_args()
    spec = json.loads(Path(a.spec).read_text())
    roles, default = spec.get("roles", {}), spec.get("default", "light")
    pairs = [(fg, bg, use, kind) for fg, bg, use, kind in ([*p, "text"][:4] for p in spec.get("pairs", []))]
    tokens, gamut = fit_gamut({k: Token(*v) for k, v in spec["tokens"].items()}, a.fit)
    names, warnings = check_names(tokens, pairs, roles)
    rgb = {k: to_srgb(t.L, t.C, t.H) for k, t in tokens.items()}
    rows = [rate_pair(p, rgb) for p in pairs if p[0] in tokens and p[1] in tokens]
    table = {k: {"oklch": f"oklch({t.L:.3f} {t.C:.3f} {t.H:g})", "hex": "#%02X%02X%02X" % rgb[k], "role": t.role} for k, t in tokens.items()}
    Path(a.out).write_text(json.dumps({"tokens": table, "roles": roles, "default": default, "contrast": rows}, indent=1))
    if a.css:
        Path(a.css).write_text(render_css(table, roles, default))
    if a.md:
        Path(a.md).write_text(render_md(table, rows))
    problems = ([] if a.fit else gamut) + [explain_fail(r, tokens, rgb) for r in rows if not r["ok"]] + names
    report = (gamut if a.fit else []) + [f"{k:20} {t['hex']}  {t['oklch']}" for k, t in table.items()]
    for r in rows:
        verdict = "decor" if r["kind"] == "decorative" else "ok" if r["ok"] else "FAIL"
        report.append(f"{r['fg']:18} on {r['bg']:18} {r['ratio']:5.2f}  {r['grade']:8} {verdict:5} {r['use']}")
    report += [f"warn  {w}" for w in warnings] + (["", "PROBLEMS:", *problems] if problems else [])
    print("\n".join(report))
    sys.exit(1 if problems else 0)

if __name__ == "__main__": main()
