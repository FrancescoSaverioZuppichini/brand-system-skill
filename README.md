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
| 1 | Strategy | research with links, personas (needs, fears), the gap, positioning, personality, the vibe sentence, a NOT list, the brand idea, a moodboard of its own renders |
| 2 | Naming (only if there is no name) | candidates by territory, domain and handle checks, a shortlist of 3 |
| 3 | Logo | ≥3 directions, a size-test sheet, the refined mark + wordmark + lockups, favicon, app icon, avatar, usage rules |
| 4 | System | OKLCH colour with roles and a WCAG table, OFL type and scale, space, radii, icons, signature components, motion, imagery, voice; `branding.md` + `tokens.css` |
| 5 | Product | one product screen with real states, the landing page, screenshots at 1440 and 390 |
| 6 | Applications | OG image, X header, profile grid, business card |
| 7 | Review + crit | a review page, an automated audit, and a crit checklist |

It can also run several directions in parallel: N designer agents with different starting lenses, then a comparison page.

## Scripts

| Script | Does |
|---|---|
| `palette.py` | OKLCH → hex, WCAG contrast per pair, sRGB gamut check, pigment CSS; exits 1 on a failing pair |
| `sizetest.py` | logo sheet at 16–128 px on light and dark, plus 16/32 px magnified pixel by pixel |
| `wordmark.py` | outlined wordmark from any OFL font, with HarfBuzz kerning and tracking |
| `svg2png.py` | exact-size PNG exports with resvg |
| `shoot.sh` | headless-Chrome screenshots: first screen, full page, and a real 390 px mobile layout |
| `audit.py` | checks a brand folder for missing deliverables, failed contrast, alt text, reduced motion, repeated images |

## Requirements

- [uv](https://docs.astral.sh/uv/) (the scripts run with `uv run --with …`)
- Google Chrome (for screenshots)
- `potrace` (optional, for turning raster sketches into vectors)
- Optional: [artifacts](https://github.com/FrancescoSaverioZuppichini/artifacts) for live review pages with feedback

Fonts must be OFL (Google Fonts). Third-party images must be public-domain or licensed, and credited in `CREDITS.md`.
