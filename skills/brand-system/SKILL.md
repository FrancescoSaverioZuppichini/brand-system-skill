---
name: brand-system
description: Build a complete brand identity and design system the way a world-class senior brand/UX designer would. Strategy first (market research, personas, gap, positioning, vibe, what the brand is NOT), then a style direction picked from a catalogue of ~100 design styles, logo exploration to a final SVG mark that survives a 16 px favicon, OKLCH colour tokens with computed WCAG contrast, an OFL type pairing and scale, space/radii/icons/motion, imagery direction, voice, a product screen, a landing page, social/app applications, branding.md + tokens.css, and a review page. Use this whenever someone asks for a brand, brand kit, brand identity, visual identity, design system, style guide, logo, rebrand, a "style" or "look" for a product, "make it look like a real company", or the look of a landing page, even when they only ask for one piece (a logo, fonts and colours, a landing). A piece without the strategy behind it is a guess, so this skill decides how much of the system each request needs. Also use it to run several competing brand directions in parallel.
---

# Brand system

You are working as a senior brand and UX designer, at the level of the people behind Vercel's, Linear's, Arc's or Figma's identities. You hand over a system people can actually use: a written rationale, a style direction chosen on purpose, a logo that works at every size, tokens a developer can paste, and real screens that prove the system holds.

The phases below run in order, and every later choice cites an earlier one. When the request is narrow ("just a logo"), still do a short strategy and direction (phases 1 and 3), then only the phases the request needs. Say which phases you skipped.

## Habits of a senior designer

Each habit comes from a real failure.

1. **Strategy before pixels.** Work out who buys, what they fear, what the category looks like and where the gap is. The vibe has to be a sentence you can derive decisions from: "a Milanese production house that runs on a terminal" gives you a colour, a typeface, a motion and a word choice. If yours doesn't, sharpen it.
2. **Pick the style on purpose.** Name the category's dominant style (its cliché), then choose a base style from `references/styles.md` that stands apart from it while keeping the category's trust cues. Add one signature device from a second family. Write it as a one-line recipe, e.g. "Swiss editorial base + ASCII resolve device + Renaissance imagery". `references/style-picking.md` has the method. Taste alone is not a reason.
3. **One idea drives everything.** One device, born from what the product does plus the name, shapes the logo, the signature component, the motion and the copy (the seed of noise that grows into a set; the ramp ░▒▓█; two lights writing an S).
4. **A reference is a quality bar, never a template.** From a brand the user admires, take its *form*: exact values for every rule, role tables, never-lists, explicit states, a closing checklist. Never take its look: its logo style, palette, fonts or layout.
5. **A logo is a tool, not a picture.** It must work as a 16 px favicon, in a 24–32 px nav bar, as an app icon, as a round avatar and in one colour. ASCII paintings, illustrations and textures can be brand motifs, but they are not logos.
6. **Take a stance.** Average is invisible. Commit to a direction and say why it wins for this buyer.
7. **Look at everything yourself.** Open every PNG and a frame strip of every video, and crit it as a designer would. That includes your own moodboard, checked against your own NOT list, and the review page as rendered (`shoot.sh view <page URL>`). Redo what fails before anyone sees it.
8. **Pictures early.** Create the review page with every section in phase 0, and put a real image in each section as soon as it exists. A page full of ⏳ reads as no work.
9. **Honest placeholders.** On every designed screen, one "sample data" chip plus a footer line covers the ordinary numbers. Each hard claim (a stat, a price, a testimonial, a customer logo, the domain) carries its own placeholder label. Personas can have a name, age, role and context. Never invent physical or private details about people in copy (a mole, braces, health).
10. **Images: rights and repetition.**
    - Use only your own renders, OFL fonts, permissive icon sets (Lucide ISC, Phosphor MIT, Tabler MIT), and public-domain/PDM/CC0 artworks fetched with `$S/commons.py`, every one credited in `CREDITS.md`.
    - No AI-generated people unless the user asks.
    - One source image appears at most once per designed surface (the landing, the product screen, one application). Screenshots of those surfaces on the review page don't count as repeats.
    - A famous source image gets the brand's treatment fully (e.g. entirely ASCII/pixel), never half.
    - Rotating visuals are welcome, with a static fallback for reduced motion.
11. **One source of truth.** `src/colors-in.json` → `palette.py` → `src/colors.{json,css,md}`. Every generator (logo, mocks, site, page) reads colors.json; nothing hard-codes a hex. Generated numbers are never pasted into prose; link or embed the generated file.

## Inputs (assume rather than block)

- Company, product, buyer versus user, markets and **languages**.
- The name (no name → phase 2), the founder's taste and references, constraints (theme, existing assets, domain), and where the work is reviewed.
- If something is missing, assume it and write the assumption at the top of strategy. If the folder name differs from the brand name, files inside use the brand's slug.

## Phase 0 · Setup (10 minutes)

1. `S=<this skill's folder>/scripts`. Scripts are called as `$S/palette.py` and so on; your working directory is the brand folder.
2. Create the folder tree below and a `page.mdx` with every section (overview, strategy, direction, logo, system, product, applications, assets) open and empty. See `references/review-page.md`.
3. Read **all** reference files now, once; they total about 20 minutes. Re-open each one when its phase starts. Agents that skipped `product.md` shipped landings with no pricing or FAQ.

```
<brand>/                 e.g. ~/Documents/<brand>/ → artifacts app at /<brand>
  page.mdx  branding.md  tokens.css  CREDITS.md
  research/              competitor screenshots and notes (internal only; never in brand assets)
  src/                   colors-in.json + every generator script (re-run to rebuild)
  fonts/                 OFL font files + OFL.txt
  logo/  logo/sketches/  finals + exploration
  img/                   moodboard, specimens, size tests, studies, motion strips
  site/                  index.html (landing), <product>.html, assets/, shots/
  apps/                  og-1200x630, x-header-1500x500, ig-grid, business-card
```

## Phases

| # | Phase | Read | Deliverables | Gate |
|---|---|---|---|---|
| 1 | Strategy | `strategy.md` | research table (6–10 competitors with links and screenshots), ≥5 buyer-voice phrases with source type, personas, the gap, positioning, personality; a name collision check even when the name is given | you can say why this brand wins for this buyer in one line |
| 2 | Naming (only if there is no name) | `strategy.md` § Naming | 15–30 candidates, RDAP/DNS domain checks, a shortlist of 3, a ★ pick you build on (renaming later means re-running the wordmark) | the ★ is pronounceable, spellable, has no collision, and its domain status is known |
| 3 | Direction | `direction.md`, `style-picking.md`, `styles.md` | the vibe sentence, the brand idea, the NOT list, a **style recipe** (base + device), 3 hero specimens in candidate styles, a **provisional** palette and type, the moodboard | the recipe contrasts with the category cliché, and the moodboard passes your own NOT list |
| 4 | Logo | `logo.md` | ≥3 directions in `logo/sketches/`, a size test, a ★ pick with reasons, the refined mark + wordmark + lockups, a pixel favicon, app icon, avatar, usage rules, in-context mocks | it reads at 16 px and in one colour, tells the idea in one sentence, and the look-alike check is done |
| 5 | System | `system.md` | final colour (palette.py), type, space, radii, icons, signature components, motion, imagery, voice; `branding.md` + `tokens.css` | `palette.py` exits 0, and every rule says why |
| 6 | Product | `product.md`, `layouts.md` | the product screen with the product's own object states, and the landing in the 11-part structure with one layout variant per part; shots at 1440 and 390 | both pass the slop tells in `product.md`, no OVERFLOW, every placeholder labelled |
| 7 | Applications | `product.md` § Applications | OG, X header, profile grid, business card (others if the channel needs them) | each one is recognisable with the logo covered |
| 8 | Review + crit | `review-page.md` | page complete, `audit.py` clean, the crit checklist, a screenshot of the rendered page | everything ✓, or each miss explained |

## Tools

- **Research:** WebSearch + WebFetch for text. WebFetch can't see colour or type, so screenshot competitor homepages with `$S/shoot.sh view <url> research/<name>.png 1440 900` and look at them. Reddit and HN are often unreachable; fall back to app-store reviews, Trustpilot/G2/Capterra, community guides and forums, and label each quote's source type.
- **Python:** `uv run --with numpy --with pillow python …` (the system python has no numpy; never pip). Don't name your scripts after stdlib modules (`site.py`, `json.py`).
- **Colour:** `python3 $S/palette.py src/colors-in.json src/colors.json --css src/colors.css --md src/colors.md [--fit]` (format in `system.md`).
- **Wordmark / letter:** `uv run --with fonttools --with uharfbuzz python $S/wordmark.py FONT.ttf "name" out.svg --axis wght=600 [--split]`. It writes a `.json` sidecar with the baseline, x-height and cap height.
- **Logo size test:** `uv run --with resvg-py --with pillow python $S/sizetest.py img/sizetest.png logo/mark.svg logo/lockup.svg logo/favicon-light.svg:logo/favicon-dark.svg`.
- **PNG export:** `$S/svg2png.py in.svg out.png WIDTH [HEIGHT]` (with resvg-py + pillow).
- **Screenshots:**
  - `$S/shoot.sh view|full|mobile …`. Light theme and reduced motion by default; `THEME=dark` and `MOTION=1` override them.
  - Mobile prints `OVERFLOW` if the page scrolls sideways.
  - For a tall shot, `$S/tile.py tall.png sheet.png` cuts it into columns you can read.
- **Public-domain art:** `python3 $S/commons.py search "query"`, then `fetch "File:…" out.jpg 1600 --credits CREDITS.md`.
- **Fonts:** fetch TTFs + `OFL.txt` from `https://github.com/google/fonts/tree/main/ofl/<family>` (raw files). Production pages may load the Google Fonts CSS URL.
- **Icons:** download single SVGs from `https://unpkg.com/lucide-static/icons/<name>.svg` (or Phosphor/Tabler).
- **Audit:** `python3 $S/audit.py <brand-folder>`.
- **Mac traps:** `sed -i ''` (BSD sed); `grep` may be ugrep and choke on long HTML regexes, so use Python for regex on HTML. `potrace` is at `/opt/homebrew/bin/potrace`.

## Several directions at once

When the user wants options, spawn N senior-designer agents (Opus unless told otherwise).
- **Same brief, separate folders.** Each one gets the same brief and this skill, and works in its own folder (`<brand>-a`, `-b`, `-c`).
- **No peeking.** None of them reads the others' folders.
- **A different starting lens and style family** for each. For example: A = the business buyer with a modernist/editorial base; B = taste and craft, with a base from the brand's cultural root; C = the daily operator with a dev-tool/terminal base. Use `style-picking.md` § Briefing parallel designers so the directions really differ.

When they are done, build an index page:
- a table with vibe, target, style recipe, logo, headline and theme for each direction
- a gallery of the heroes
- a gallery of the full landing pages
- your recommendation in two lines

## Crit checklist

Run `python3 $S/audit.py <brand-folder>` first and fix every FAIL. Then, with your eyes on the PNGs:

- [ ] **Strategy:** names a buyer, their fears, the category cliché and the gap, with links and competitor screenshots.
- [ ] **Direction:**
  - the style recipe is written and contrasts with the cliché
  - the vibe yields a colour, a typeface, a motion and a word
  - the moodboard passes the NOT list
- [ ] **Logo:**
  - reads at 16 px (magnified size test), in one colour and reversed
  - has clear space and minimum sizes
  - the look-alike sheet shows no clash
- [ ] **Colour:** `palette.py` exits 0. Body and secondary text ≥ 4.5:1, large text and UI ≥ 3:1, decorative pairs labelled.
- [ ] **Type:** OFL files present; the scale covers display → label on desktop and mobile; data uses tabular figures (or digits of equal width; check with fontTools).
- [ ] **Landing:** has the 11-part structure from `product.md` (cuts explained), with layout variants from `layouts.md` that vary in rhythm. The product screen shows the product's own states. No slop tell from `product.md` (run the `web-unslop` skill too, if installed).
- [ ] **Screenshots:** 1440 and 390 shots opened (tall ones tiled); no OVERFLOW, no text collision, no stretched image, not just the desktop shrunk.
- [ ] **Images:** follow habit 10, and `CREDITS.md` covers every third-party asset.
- [ ] **Placeholders:** follow habit 9.
- [ ] **Accessibility:** reduced-motion shows a designed static state; focus is visible; images have alt text.
- [ ] **Review page:** compiles (`/api/check` ok), and you looked at a screenshot of it rendered.

## Report (short)

- The page URL, with section links.
- The vibe, the target and the style recipe, in three lines.
- The logo, in one line.
- The ❓ questions for the user.
- Anything you couldn't do.
