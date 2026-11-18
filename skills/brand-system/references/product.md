# Phase 6 · Product and landing, Phase 7 · Applications

## The product screen first

A brand is proven inside the product, not on a poster. Design the one screen where the buyer's core loop happens as static HTML with `tokens.css`.

- **Use real data shapes:** names, ids, counts, dates, a log. One "sample data" chip marks the screen as placeholder.
- **Show the product's own object states.** List the lifecycle of the main object, then show every state. That's where the signature components appear. Examples:
  - **Operator tool (sets, jobs, leads):** done · picked · in progress · queued · failed (with the reason) · needs review.
  - **Consumer subscription:** delivered · on its way · resting / preparing · coming up · payment declined (with the reason) · card expiring.
  - **Finance or admin app:** done · needs you · needs review · waiting on someone else · failed (with the reason).
- **Layout by product type:**
  - Operator tools: sidebar + work area + inspector.
  - Consumer apps: an account or overview page with one primary list.
  - Mobile-first products: design the 390 screen first.
- **The landing reuses this screen** as its product shot, either embedded live or as a screenshot. At 390 a desktop console is unreadable, so give mobile its own crop or a mobile layout, with `<picture>` or a separate block.

## The landing page: 11 parts

Cut a part only with a one-line reason on the page. For each part, pick a layout variant from `layouts.md` ("Composing a landing"). Neighbouring sections should differ in rhythm and density; never stack three equal card grids.

1. **Nav:** the lockup, 3–5 links, a secondary CTA and a primary CTA.
2. **Hero:** a headline of 8 words or fewer (from the positioning), one subline saying what it is and for whom, two CTAs, and the signature visual (the brand idea, still or in motion).
3. **Proof strip:** customer logos, numbers or quotes, each one labelled placeholder.
4. **How it works:** 3 steps in the buyer's words.
5. **The product:** the product screen, annotated.
6. **Features:** each answers a persona's need or fear from the strategy, not a feature list.
7. **Trust:** privacy, security, ownership. For many buyers this sells more than features; for low-risk products fold it into the FAQ.
8. **Pricing:** placeholder, with a clear unit (per set, per seat, per bag).
9. **FAQ:** questions buyers actually ask, taken from the research.
10. **Closing CTA:** a line that echoes the brand idea.
11. **Footer:** links, the placeholder-domain note, and the credits line.

Craft rules:
- Copy comes from the voice table. No lorem ipsum.
- Plain HTML + `tokens.css`. Tailwind from a CDN is OK for a mock if its config maps to the tokens. No other third-party scripts; fonts are local or from Google Fonts.
- Responsive at 1440 and 390, with a 16 px side gutter on mobile. The mobile layout is designed, not just the desktop shrunk.
- Semantic landmarks, visible `:focus-visible`, alt text on every image.
- `prefers-reduced-motion` gives a designed static state for every animation and rotation.
- Images follow habit 10. Rotating heroes and grids are welcome if they stay light (vanilla JS/CSS).

### Screenshots (look at every one)

```
$S/shoot.sh view   site/index.html site/shots/landing-1440-hero.png 1440 900
$S/shoot.sh full   site/index.html site/shots/landing-1440.png 1440
$S/shoot.sh mobile site/index.html site/shots/landing-390.png 390 2      # prints OVERFLOW if it scrolls sideways
uv run --with pillow python $S/tile.py site/shots/landing-390.png img/landing-390-sheet.png
MOTION=1 $S/shoot.sh view site/index.html img/hero-motion.png 1440 900   # mid-animation, for the motion section
```

Shots are light and reduced-motion by default. Use `THEME=dark` for dark variants.

Open each one, and the tiled sheet for tall shots. Check for:
- text colliding or wrapping badly, and orphans in headlines
- images stretched or not loaded
- line length too wide
- OVERFLOW
- an accent used for more than one meaning
- an empty or half-drawn reduced-motion state

**Slop tells (instant fails, from the `web-unslop` gate; run that skill too if installed):**
- emoji used as icons
- gradient circles with initials instead of avatars
- rainbow or one-note palettes
- the same KPI strip on several pages
- cards that don't inform, navigate, compare, configure or act
- rows of repeated buttons (use an overflow menu)
- a decorative icon grid instead of real product UI
- nested card stacks
- hero-size type inside dashboards, sidebars or modals

## Phase 7 · Applications

| Asset | Size | Notes |
|---|---|---|
| OG image | 1200×630 | headline + signature visual + lockup; readable as a 600 px thumbnail |
| X / LinkedIn header | 1500×500 | keep the centre 1000 px safe; the avatar overlaps bottom-left |
| Profile grid | 3×3 mock (one sheet) | the brand's own feed: a rhythm of image, type card and product. Export single 1080 px tiles only if asked |
| Business card | 85×55 mm, front and back, at 12 px/mm (1020×660) | the data style, clear-space rules |
| Packaging / label | only if the product has one (a bag, a box) | the logo at its print minimum, the data style, a regulatory placeholder |
| App icon + avatar | already in `logo/` | show them in context |
| Optional | email signature, slide master, invoice header | only if the buyer's world needs them |

Render these as HTML pages shot at their exact pixel sizes with `shoot.sh view`, or with PIL. Each one must be recognisable as the brand with the logo covered.
