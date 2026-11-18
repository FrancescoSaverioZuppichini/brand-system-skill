# Phases 6 and 7 · Surfaces

## Surfaces (read in phase 0)

The ranked `surfaces:` line in brief.md says where the buyer meets the brand. It drives phases 6–7 and what `audit.py` checks. Vocabulary: `landing`, `product`, `app`, `packaging`, `signage`, `social`, `print`.

- **Software:** `product, landing`, plus `app` and `social` as needed.
- **Physical or local:** `packaging`, `signage` (facade, window, shop interior), `social`, `app`, `print` as needed; a `landing` only when the brief wants a site.

Phase 6 builds the top two in full; phase 7 builds the rest plus the channel assets in § Applications. HTML lives in `site/` (landing, product and app screens) or `src/html/` (mocks, boards); exports land where the audit looks:

| Surface | Files |
|---|---|
| landing | `site/index.html`, `site/shots/index-1440.png`, `site/shots/index-390.png` |
| product, app | `site/<name>.html`, `site/shots/<name>-1440.png`, `site/shots/<name>-390.png` |
| packaging, signage, print | `apps/<surface>-<what>.png`, e.g. `apps/packaging-bag-front.png` |
| social | `apps/og-1200x630.png`, `apps/social-*.png`, `apps/story-*.png` |

Extras by type, on the landing or whichever surface carries them:
- **Dev tool:** the primary CTA is the install command or the repo; docs in the nav; pricing in two tiers, open source self-hosted and paid cloud.
- **Local business:** locations with opening hours and a map, the offer or menu, the story, ordering or the app download, a wholesale enquiry.

## Product and app screens

A brand is proven inside the product, not on a poster. Design the screen where the buyer's core loop happens. Software surfaces are built with **Tailwind 4 + shadcn/ui** by default: `colors.css` already uses shadcn's variable names and Tailwind's `@theme`, and the 193 layouts exist as shadcn blocks in the repo's [`examples/`](https://github.com/FrancescoSaverioZuppichini/brand-system-skill/tree/main/examples) (clone it when you need them). Everything else (packaging, signage, print boards) is plain HTML with `tokens.css`.

- Real data shapes (names, ids, counts, dates) and one "sample data" chip.
- The main object's lifecycle, every state shown; the signature components live here. E.g. an order: placed · baking · on its way · delivered · failed (with the reason).
- Layout by type: operator tools get sidebar + work area + inspector; consumer apps an overview with one primary list; mobile-first products start at 390.
- The landing reuses this screen as its product shot, with its own crop or layout at 390.

## The landing (when `landing` is a surface)

Eleven parts, each with a layout variant from `layouts.md` ("Composing a landing"). Neighbours differ in rhythm and density; never three equal card grids in a row. Cut a part, or replace it with an extra by type, only with a one-line reason on the page.

1. **Nav:** the lockup, 3–5 links, a secondary and a primary CTA.
2. **Hero:** a headline of 8 words or fewer from the positioning, one subline (what it is, for whom), two CTAs, the signature visual.
3. **Proof:** customer logos, numbers or quotes, each labelled placeholder.
4. **How it works:** 3 steps in the buyer's words.
5. **The product:** the product screen or the offer, annotated.
6. **Features:** each answers a persona's need or fear, not a feature list.
7. **Trust:** privacy, security, ownership; folded into the FAQ for low-risk products.
8. **Pricing:** placeholder, with a clear unit.
9. **FAQ:** questions buyers actually ask, from the research.
10. **Closing CTA:** a line that echoes the brand idea.
11. **Footer:** links, the placeholder-domain note, the credits line.

Copy comes from the voice table, never lorem ipsum. Software: Tailwind 4 + shadcn/ui themed by `colors.css` (a Vite + React page, or the Tailwind CDN for a single static mock); otherwise plain HTML + `tokens.css`; no other third-party scripts. Designed at 1440 and at 390 (16 px side gutter), not the desktop shrunk. Semantic landmarks, a visible `:focus-visible`, alt text on every image.

## Physical surfaces

- **Packaging:** flat SVG artwork on the pack shape or its dieline (front, back, gusset), in the print inks on the stock colour (`system.md` § Print). One board shows the flat dieline, one the front.
- **Signage:** a facade elevation at a stated scale (e.g. 1:20: sign band, window, door), plus the lockup at reading distance (`logo.md`).
- Flat and honest: no fake photo composites; the "sample" tag sits in the board's margin.

## Checking the shots (the phase 6 gate)

Shoot every surface with shoot.sh (screens at 1440 and 390, everything else at real size) and view each, tall ones tiled with tile.py. Look for text collisions and orphans in headlines, stretched or missing images, lines too long, OVERFLOW, an accent with two meanings, an empty reduced-motion state.

The gate is the general list plus the list for the surface's type below, judged by you on the shots. Software surfaces also run the `web-unslop` skill.

**Slop tells:**
- **General:** stock imagery, cliché icons (lightbulbs, rockets, handshakes), lorem ipsum, fake customer logos, emoji used as icons, rainbow or one-note palettes.
- **Software:** gradient circles with initials instead of avatars; the same KPI strip on several pages; cards that don't inform, navigate, compare, configure or act; rows of repeated buttons (use an overflow menu); a decorative icon grid instead of real product UI; nested card stacks; hero-size type inside dashboards, sidebars or modals.
- **Food and craft:** stock baguettes, faux-rustic wood, script fonts on kraft, wheat clip-art, chalkboard fonts, "since 19xx" on a new business.
- **Local services:** stock smiling staff, a map pin or roof swoosh as the logo, "quality you can trust", a van with clip-art tools.

## Applications (phase 7)

Make each as HTML in `src/html/` shot at its exact size (shoot.sh view), or with PIL, into `apps/`. Next to each, a copy with the logo covered: it must still read as the brand.

| Asset | Size | Notes |
|---|---|---|
| OG image | 1200×630 | headline, signature visual, lockup; readable as a 600 px thumbnail |
| X header | 1500×500 | keep the centre 1000 px safe; the avatar overlaps bottom-left |
| LinkedIn banner | 1584×396 | the avatar overlaps bottom-left |
| GitHub social preview | 1280×640 | dev tools; keep 40 px clear on every edge |
| README banner | 1280×320, shown about 830 px wide | dev tools; reads on GitHub's light and dark themes |
| Instagram grid | 3×3 mock on one sheet (the grid shows 3:4 tiles) | a rhythm of image, type card and product; single 1080×1440 tiles only if asked |
| Instagram story | 1080×1920 | the top and bottom 250 px free of text |
| Story highlight cover | 1080×1920, seen as a small circle | one centred glyph |
| Business card | 85×55 mm at 12 px/mm (1020×660), front and back | the data style, clear space |
| Price tag, delivery note, apron, van | real size in mm | only when the brief needs them |
| Email signature, slide master, invoice header | real size | only when the buyer's world needs them |
