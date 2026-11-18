# Brand System Skill

An agent skill that builds a brand identity and design system the way a senior brand/UX designer would. It starts with strategy, picks a style on purpose, draws a logo that survives a 16 px favicon, and ends with OKLCH tokens with computed contrast and the real surfaces the brand lives on (a landing and product screen, or packaging, signage and social), all shown on a review page.

It uses the standard Agent Skills layout supported by [Vercel's skills CLI](https://github.com/vercel-labs/skills) and [skills.sh](https://skills.sh).

## Install

```bash
npx skills add FrancescoSaverioZuppichini/brand-system-skill --skill brand-system
```

To install it globally, across projects:

```bash
npx skills add FrancescoSaverioZuppichini/brand-system-skill --skill brand-system --global
```

## What it does

| # | Phase | Output |
|---|---|---|
| 0 | Setup | the brand folder, `brief.md` (inputs, assumptions, the client's tastes, themes, a ranked `surfaces:` line), the review page |
| 1 | Strategy | competitor research with screenshots, buyer voice, personas, the gap, positioning, personality |
| 2 | Naming (only if there is no name) | candidates by territory, RDAP/DNS domain and handle checks, a shortlist of 3 and a ★ to build on |
| 3 | Direction | the vibe, the brand idea, the NOT list, a **style recipe** from a catalogue of design styles, 3 specimens of the #1 surface, a moodboard |
| 4 | Logo | ≥3 directions, size and look-alike tests, the mark, wordmark and lockups, a pixel favicon, app icon, avatar, usage rules, signs and print |
| 5 | System | OKLCH colour with roles, themes and a WCAG table, OFL type and scale, space, radii, icons, signature components, imagery, motion, voice, print inks; `tokens.css` |
| 6 | Primary surfaces | the top two surfaces from the brief: a product screen and landing for software, packaging and signage for a shop |
| 7 | Secondary surfaces / applications | the other surfaces, plus OG, social headers, Instagram, business card and print pieces as the channels need |
| 8 | Review + crit | a complete review page, an automated audit, `crit.md`, and printable boards for a non-technical client |

It can also run several directions in parallel: one shared brief and research, N designer agents with different lenses and style families, then a comparison page.

## Catalogues

| Reference | What | See it |
|---|---|---|
| `styles.md` + `style-picking.md` | 141 design styles in 8 families (modernist and print, art movements, digital UI eras, industry languages, illustration, type voices, layouts, motion), each with traits, OFL fonts, an OKLCH palette, when to pick it and when not; plus the method to pick one against the category cliché. | [`atlas/`](atlas): one specimen per style, the same mini page in each |
| `layouts.md` | 42 section and screen types, 193 layout variants (hero, features, pricing, FAQ, footer, docs, changelog, login, dashboard, table, settings, billing…), each with when to use, the slop tell to avoid, mobile reflow and the styles it pairs with; plus composed landings for five kinds of business | [`atlas/layouts/sheets/`](atlas/layouts/sheets): one wireframe sheet per section |

## Scripts

Every Python script declares its dependencies inline (PEP 723) and runs with `uv run <name>.py …`, with no install step.

| Script | Does |
|---|---|
| `palette.py` | OKLCH → hex, WCAG contrast per pair (with the lightness that would pass), sRGB fitting, roles + light/dark CSS, a markdown table; exits 1 on a failing or missing pair |
| `sizetest.py` | logo sheet at 16–128 px on light and dark (non-square lockups too), plus 16/32 px magnified pixel by pixel |
| `wordmark.py` | outlined wordmark from any OFL font: HarfBuzz kerning, any variable axis, per-glyph paths, a baseline sidecar |
| `svg2png.py` | exact-size PNG exports with resvg |
| `shoot.sh` | headless-Chrome shots: first screen (file or URL), full page, a real 390 px mobile layout with an overflow check, a motion frame strip (+ mp4), print to PDF; light theme and reduced motion by default |
| `tile.py` | cuts a tall screenshot into readable columns |
| `commons.py` | public-domain art from Wikimedia Commons, with a licence check and a credit line |
| `audit.py` | checks a brand folder for the deliverables of each surface in `brief.md`, failed contrast, alt text, reduced motion, repeated images |

## Requirements

- [uv](https://docs.astral.sh/uv/)
- Google Chrome (shots and PDF)
- Optional: `ffmpeg` (motion mp4), `potrace` (tracing a hand-drawn mark), `jq` (listing font files)
- Optional: [artifacts](https://github.com/FrancescoSaverioZuppichini/artifacts) for live review pages with feedback

Fonts must be OFL (Google Fonts). Third-party images must be public-domain or CC0, and credited in `CREDITS.md`.
