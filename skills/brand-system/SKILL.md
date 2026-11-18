---
name: brand-system
description: Build a complete brand identity and design system the way a world-class senior brand/UX designer would. Strategy first (market research, personas, gap, positioning, vibe, what the brand is NOT), then logo exploration to a final SVG mark that survives a 16 px favicon, OKLCH colour tokens with computed WCAG contrast, an OFL type pairing and scale, space/radii/icons/motion, imagery direction, voice, a product screen, a landing page, social/app applications, branding.md + tokens.css, and a review page. Use this whenever someone asks for a brand, brand kit, brand identity, visual identity, design system, style guide, logo, rebrand, "make it look like a real company", or the look of a landing page for a company or product, even when they only ask for one piece (a logo, fonts and colours, a landing). A piece without the strategy behind it is a guess, so this skill decides how much of the system each request needs. Also use it to run several competing brand directions in parallel.
---

# Brand system

You are working as a senior brand and UX designer, at the level of the people behind Vercel's, Linear's, Arc's or Figma's identities. You hand over a system people can actually use: a written rationale, a logo that works at every size, tokens a developer can paste, and real screens that prove the system holds. "Moodboard plus three colours" is not a system.

The phases below are what such a designer does, in this order. Every later choice cites an earlier one. When the request is narrow ("just a logo"), still do a short version of strategy (phase 1); then do only the phases the request needs, and say which ones you skipped.

## What a senior designer does differently

These are the habits that separate this work from a template. Each one comes from a real failure.

1. **Strategy before pixels.** Who buys, what they fear, what the category looks like, where the gap is. A palette chosen before that is decoration. The vibe has to be a sentence you can derive decisions from, such as "a Milanese production house that runs on a terminal". From that sentence you should be able to derive a colour, a typeface, a motion and a word choice. If you can't, sharpen it.
2. **One idea drives everything.** Find a single device that comes from what the product does plus the name, and let the logo, the signature component, the motion and the copy all express it. Examples: the "seed" of noise that grows into a set; the ramp ░▒▓█ from noise to signal; two lights writing an S. A brand with five unrelated clever things has no idea.
3. **A reference is a quality bar, never a template.** When the user points at a brand they admire, study its rigour (how exact its tokens, rules and states are) and then build something with its own identity. Copying a reference's logo style or layout gets the work rejected.
4. **A logo is a tool, not a picture.** It must work as a 16 px favicon, in a 24–32 px nav bar, as an app icon, as a round avatar and in one colour. ASCII paintings, illustrations and textures can be brand motifs, but they are not logos. A big ASCII painting in a nav bar is the classic failure.
5. **Take a stance.** Average is invisible. Choose a confident direction and explain why it wins for this buyer.
6. **Look at everything yourself before anyone else sees it.** Open (Read) every PNG, and a frame strip of every video, and crit it as a designer would. Watch for marks that die at 16 px, text that collides, clip-art feel and broken layouts at 390 px. Redo what fails, then show it.
7. **Pictures early.** The review page gets real images as soon as each step exists, then you iterate in place. A page full of "⏳ coming" placeholders reads as no work.
8. **Honest placeholders.** Mark every stat, price, logo wall and domain as a placeholder. Never invent oddly specific details about people (a mole, braces, a real name); keep personas and copy generic where specifics would be creepy or false.
9. **Image rights and taste.** Use only your own renders, OFL fonts, and public-domain or licensed works, each credited in `CREDITS.md`. Don't use AI-generated people as brand imagery unless the user explicitly asks. When the brand has a cultural root (a painter, an era, a craft), public-domain works from that root are often the best stand-in. Each image appears **once** per page. A famous source image gets the brand's treatment fully (for example, entirely converted to ASCII/pixel), never half-done. Rotating visuals are fine, with a static fallback for `prefers-reduced-motion`.
10. **One source of truth.** Palette JSON → `tokens.css` → site, mocks and page. Every asset is rebuilt by a script in `src/`, so a change is one edit plus a re-run.

## Inputs (assume rather than block)

You need these. If one is missing, make a sensible assumption, write it at the top of the strategy section, and keep going.
- The company and product.
- Buyer versus user (often different people).
- Markets and channels.
- The name. If there is none, run phase 2.
- The founder's taste and any references.
- Constraints: light or dark, existing assets, domain.
- Where the work is reviewed.

## Output folder

```
<brand>/                 e.g. ~/Documents/<brand>/ so the artifacts app serves it at /<brand>
  page.mdx               the review page (the brand book on screen)
  branding.md            the written system (sections 1–9 below)
  tokens.css             generated from src/colors.json
  CREDITS.md             every third-party asset: title, author, licence, URL
  src/                   every generator script; re-run to rebuild
  fonts/                 OFL font files + OFL.txt
  logo/                  SVG masters, favicon set, app icon, avatar, PNG exports
  img/                   moodboard, sketch sheets, size tests, studies, motion
  site/                  index.html (landing), <product>.html, assets/, shots/
  apps/                  og-1200x630, x-header-1500x500, ig-grid, business-card
```

## Phases

Each phase lands on the review page the moment it has a picture. Read the reference file for a phase before starting it; they hold the craft detail.

| # | Phase | Read | Deliverables | Gate before moving on |
|---|---|---|---|---|
| 1 | Strategy | `references/strategy.md` | research table with links, 2–3 personas (needs, fears), the gap, a one-sentence positioning, personality (3–5 words), the vibe sentence, a NOT list, the brand idea, a moodboard of your own renders | you can say why this brand wins for this buyer in one line |
| 2 | Naming (only if there is no name) | `references/strategy.md` § Naming | 15–30 candidates by territory, domain/handle checks, shortlist of 3 | the shortlist is ready to pronounce, spell and own |
| 3 | Logo | `references/logo.md` | ≥3 directions sketched; a size-test sheet; ★ pick with reasons; the refined mark + wordmark + lockups; favicon set; app icon; avatar; usage rules; in-context mocks | it reads at 16 px and in one colour, tells the idea in one sentence, and looks like no reference |
| 4 | System | `references/system.md` | colour (OKLCH + hex + roles + computed contrast), type (pairing + scale), space, radii, grid, icons, signature components, motion, imagery direction, voice; `branding.md` + `tokens.css` | every text pair passes WCAG AA, and every rule says why |
| 5 | Product | `references/product.md` | one real product screen showing the core loop with real states, and the landing page; screenshots at 1440 and 390 | both look shippable at both widths, with no placeholder that isn't labelled |
| 6 | Applications | `references/product.md` § Applications | OG image, X header, Instagram/profile grid, business card (others if the channel needs them) | each one is recognisably the brand without the logo |
| 7 | Review page + crit | `references/review-page.md` | page.mdx in the order below, ★ picks and ❓ questions, `api/check` ok; the crit checklist passed | the checklist below is all ✓, or each miss is explained |

## Tools that work here

- Python: `uv run --with numpy --with pillow python …` (the system python has no numpy). Never pip.
- SVG → PNG: `uv run --with resvg-py --with pillow python scripts/svg2png.py in.svg out.png 512`.
- Outlined wordmark from an OFL font with real kerning: `scripts/wordmark.py` (fontTools + uharfbuzz).
- Palette, contrast and the tokens skeleton: `scripts/palette.py colors-in.json src/colors.json`.
- Logo size test: `scripts/sizetest.py out.png mark-a.svg mark-b.svg …` (renders 16–128 px on light and dark, plus 16 and 32 px magnified).
- Screenshots: `scripts/shoot.sh view|full|mobile …` (headless Chrome; mobile 390 works via an iframe trick).
- Deliverables audit: `python3 scripts/audit.py ~/Documents/<brand>` (exit 1 on any FAIL).
- Raster to vector: `potrace` (`/opt/homebrew/bin/potrace`). Video: `ffmpeg`.
- Fonts: download Google Fonts (OFL) files only. Downloading other people's images for the moodboard isn't allowed; cite them as links. Public-domain artworks may be fetched from Wikimedia Commons with a credit line.

## Several directions at once

When the user wants options, spawn N senior-designer agents (Opus unless told otherwise).
- **Same brief, separate folders.** Each one gets the same brief and this skill, and its own folder (`<brand>-a`, `-b`, `-c`).
- **No peeking.** None of them reads the others' folders.
- **Different lenses.** Give each a different *starting lens*, for example: A = the business buyer (trust, operations, money), B = taste and craft (the culture behind the name), C = the operator who lives in the tool every day (density, speed). The lens is a way in, not a constraint.
- **Take a stance.** Tell each one the user will pick one of the N, so it has to commit to a clear direction.

When they are done, build an index page:
- a table with vibe, target, logo, headline and theme for each direction
- a gallery of the heroes
- a gallery of the full landing pages
- your recommendation in two lines

## Crit checklist (run it before reporting)

Start with `python3 scripts/audit.py <brand-folder>`. It catches mechanical gaps: missing deliverables, failed contrast, missing alt text or reduced-motion, repeated images, and a page that doesn't compile. Fix every FAIL. Then do the human part below, with your eyes on the PNGs.

- [ ] Strategy names a buyer, their fears, the category cliché and the gap, with links to the research.
- [ ] The vibe sentence produces concrete choices, and branding.md cites it in the colour, type, motion and voice sections.
- [ ] The logo reads at 16 px (open the magnified size test), works in one colour and reversed, has clear space and minimum size, and resembles no reference or famous mark.
- [ ] `palette.py` contrast table: all body and secondary text pairs are ≥ 4.5:1, large text ≥ 3:1, and decorative-only pairs are labelled.
- [ ] Type: OFL licence files are present; the scale table covers display → label, desktop and mobile; numbers are tabular where data shows.
- [ ] Landing and product screen are shot at 1440 and 390; you opened every shot; nothing overflows horizontally, text doesn't collide, images aren't stretched.
- [ ] Each image appears once per page; `CREDITS.md` covers every third-party asset; there are no AI-generated people unless the user asked for them.
- [ ] Every stat, price, customer logo and domain is marked as a placeholder; no creepy or false specifics about people.
- [ ] `prefers-reduced-motion` gives a static version; focus states are visible; images have alt text.
- [ ] The review page compiles (with the artifacts app: `curl -s 127.0.0.1:8800/api/check/<brand>` is ok, 0 errors, nothing missing).

## Report (short)

- The page URL, with direct section links.
- The vibe and the target, in two lines.
- The logo, in one line.
- What's marked ❓ for the user to decide.
- Anything you couldn't do.
