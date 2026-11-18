# Brand System Skill

An agent skill that builds a complete brand identity and design system the way a senior brand/UX designer would. It starts with strategy, explores logos that survive a 16 px favicon, and ends with OKLCH tokens with computed contrast, a real product screen, a landing page and the applications, all shown on a review page.

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
| 1 | Strategy | competitor research with screenshots, buyer voice, personas (needs, fears), the gap, positioning, personality, a name collision check |
| 2 | Naming (only if there is no name) | candidates by territory, RDAP/DNS domain checks, a shortlist of 3 and a ★ to build on |
| 3 | Direction | the vibe sentence, the brand idea, the NOT list, a **style recipe** picked from a catalogue of ~100 design styles, 3 specimens, a moodboard |
| 4 | Logo | ≥3 directions, a size test, a look-alike check, the refined mark + wordmark + lockups, a pixel favicon, app icon, avatar, usage rules |
| 5 | System | OKLCH colour with roles, themes and a WCAG table, OFL type and scale, space, radii, icons, signature components, motion, imagery, voice; `branding.md` + `tokens.css` |
| 6 | Product | one product screen with the product's own states, an 11-part landing page, screenshots at 1440 and 390 |
| 7 | Applications | OG image, X header, profile grid, business card, packaging if any |
| 8 | Review + crit | a review page, an automated audit, and a crit checklist |

It can also run several directions in parallel: N designer agents with different starting lenses, then a comparison page.

## Scripts

| Script | Does |
|---|---|
| `palette.py` | OKLCH → hex, WCAG contrast per pair (with the lightness that would pass), sRGB fitting, roles + light/dark CSS, a markdown table; exits 1 on a failing pair |
| `sizetest.py` | logo sheet at 16–128 px on light and dark (non-square lockups too), plus 16/32 px magnified pixel by pixel |
| `wordmark.py` | outlined wordmark from any OFL font: HarfBuzz kerning, any variable axis, per-glyph paths, a baseline sidecar |
| `svg2png.py` | exact-size PNG exports with resvg |
| `shoot.sh` | headless-Chrome screenshots: first screen (file or URL), full page, a real 390 px mobile layout with an overflow check; light theme and reduced motion by default |
| `tile.py` | cuts a tall screenshot into readable columns |
| `commons.py` | public-domain art from Wikimedia Commons, with a licence check and a credit line |
| `audit.py` | checks a brand folder for missing deliverables, failed contrast, alt text, reduced motion, repeated images |

## Requirements

- [uv](https://docs.astral.sh/uv/) (the scripts run with `uv run --with …`)
- Google Chrome (for screenshots)
- `potrace` (optional, for turning raster sketches into vectors)
- Optional: [artifacts](https://github.com/FrancescoSaverioZuppichini/artifacts) for live review pages with feedback

Fonts must be OFL (Google Fonts). Third-party images must be public-domain or licensed, and credited in `CREDITS.md`.
