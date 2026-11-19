---
name: brand-system
description: Builds a brand identity and design system the way a senior brand designer would. It proposes three cheap directions from three angles (from 141 styles and 193 layouts), lets the user pick, then builds the chosen one - a logo that survives 16 px, OKLCH tokens with checked contrast that paste into Tailwind + shadcn/ui, OFL type, and the real surfaces (landing, product screen, app, packaging, signage, social). Use it whenever someone asks for a brand, identity, rebrand, design system, style guide, logo, or the "style" or "look" of a landing page, app or packaging, even for one piece.
---

# Brand system

Work as a senior brand and UX designer at the level of the best identity studio for this category. Hand over a system people can use: a written rationale, a style chosen on purpose, a logo that works at every size, tokens a developer can paste, and the real surfaces that prove it holds.

Phases run in order and every later choice cites an earlier one. By default you propose three directions from three angles, stop, and the user picks one (§ The pick); then you build that one. A narrow request ("just a logo") still gets a short strategy and direction (phases 1 and 3), then only the phases it needs; say which you skipped.

**Reading.** Read this file fully. In phase 0 also read `references/review-page.md` and § Surfaces of `references/product.md`. Read each other file when its phase starts. For `references/styles.md`, read its table of contents and the families `references/style-picking.md` points you to.

## Habits

1. **Strategy before pixels.** Know who buys, what they fear, what the category looks like and where the gap is, then write a vibe you can derive decisions from (`direction.md`).
2. **Pick the style on purpose.** Name the category's cliché, choose a base style from `styles.md` that stands apart from it while keeping the category's trust cues, add one signature device from a second family, and write it as a one-line recipe (method in `style-picking.md`). The client's dislikes go into the NOT list first, verbatim. A stated taste narrows the candidate styles; you still justify the pick against the cliché, and when the taste *is* the cliché, subvert it within that family.
3. **One idea drives everything.** One device, born from what the business does plus the name, shapes the logo, the signature component, the motion and the copy.
4. **A reference is a quality bar, never a template.** From a brand the user admires take its *form* (exact values for every rule, role tables, never-lists, explicit states, a closing checklist), never its logo style, palette, fonts or layout.
5. **A logo is a tool, not a picture.** It works as a 16 px favicon, in a nav bar, as an app icon and a round avatar, in one colour, and on every physical surface in the brief. Illustrations and textures can be motifs, not logos.
6. **Take a stance.** Average is invisible. Commit to a direction and say why it wins for this buyer.
7. **Look at everything yourself.** View every PNG and the frame strip of every motion with the Read tool (never `open`), and crit it as a designer would, including your moodboard against your NOT list and the review page as rendered. Redo what fails before anyone sees it.
8. **Pictures early.** The review page exists from phase 0 with every section, and a real image lands in each as soon as it exists. A page of ⏳ reads as no work.
9. **Honest placeholders.** Each designed screen carries one "sample data" chip and a footer line for the ordinary numbers. Each hard claim (a stat, price, testimonial, customer logo, domain, address, opening hours, founding year, allergen or label text) carries its own placeholder label. On print mocks the "sample" tag sits in the board's margin, never on the artwork. Personas get a name, age, role and context; never invent physical or private details about people.
10. **Image rights.** Only your own renders, OFL fonts, Lucide (ISC), Phosphor or Tabler (MIT) icons, and public-domain or CC0 art from `commons.py`, each credited in `CREDITS.md`. No AI-generated people unless the user asks. One source image appears at most once per designed surface; the same source shown at stages of the brand's own treatment (noise → resolved) counts as one use. Photography you can't render: `system.md` § Imagery.
11. **One source of truth.** `src/colors-in.json` → `palette.py` → `src/colors.{json,css,md}`. SVG and PNG generators read hex from colors.json, HTML uses `var(--role)`, nothing hard-codes a hex. Page swatches are a PNG made from colors.json, or the `colors.md` table.

## Folder and paths

Bash state doesn't persist between calls and the working directory can reset. Find the folder this SKILL.md was read from, start every call with `S=<that folder>/scripts B=<absolute brand folder>`, and write every path as `$B/…`.

The brand folder is `<root>/<slug>`: `<root>` is the place the user names, else `~/Documents/local-artifacts` (the same home the local-artifacts skill uses; never a code repo or a scratch folder). With the local-artifacts app the page opens at `http://127.0.0.1:8800/?path=$B/page.mdx`. With no name yet it is `<root>/<category>-wip`: rename it once, after the phase 2 ★, and tell the user the new URL. Files inside use the brand slug (`<slug>-mark.svg`), also in parallel folders (`<slug>-a`).

```
$B/
  brief.md               inputs, assumptions, the client's tastes, themes, surfaces (phase 0)
  branding.md            the text source, written from phase 1 on, in the section order below
  page.mdx               the review page: pictures, captions, ❓ (review-page.md)
  tokens.css  CREDITS.md  crit.md
  research/              competitor screenshots and notes (internal; never in brand assets)
  src/                   colors-in.json, colors.{json,css,md}, your generator scripts
  src/html/              specimens, mocks, boards, application pages: the HTML you shoot
  fonts/                 OFL files + OFL.txt
  logo/  logo/sketches/  finals and exploration
  img/                   moodboard, size tests, boards, motion strips, the page shot
  site/                  landing (index.html), product and app screens (<name>.html), assets/, shots/
  apps/                  exports at real size, named after the surface (og-1200x630.png, packaging-bag-front.png)
```

## Sections

The page and `branding.md` share one list of sections, in this order (page ids in brackets):

1. Overview (`overview`)
2. Strategy, plus Naming when it ran (`strategy`)
3. Direction (`direction`)
4. Logo (`logo`)
5. System: colour, type, space, components, imagery, motion, voice, print (`system`)
6. Surfaces (`surfaces`)
7. Assets and crit (`assets`)

`branding.md` holds the text; each section opens with one line tying it to the vibe, the idea or the recipe, and a heading that doesn't apply says `n/a: <reason>`. The page holds pictures, short captions and links to `branding.md`, never a second copy of the text.

## Phase 0 · Setup

1. Create the tree and the stubs `brief.md`, `branding.md`, `tokens.css`, `CREDITS.md`, `crit.md`.
2. Fill `brief.md`. Assume what's missing and list it under assumptions. `surfaces:` is ranked and comma-separated, in the vocabulary of `product.md` § Surfaces:
   ```
   inputs: company, offer, buyer vs user, markets, languages, name (or none), constraints, existing assets, domain
   assumptions: every fact you guessed
   client likes: "verbatim"    client dislikes: "verbatim"
   themes: light, dark or both for each surface, and the default
   surfaces: product, landing, social
   ```
3. Write `page.mdx` with the seven sections, open and empty (`review-page.md`), and check it.

## Phases

| # | Phase | Read | Output | Gate |
|---|---|---|---|---|
| 0 | Setup | `review-page.md`, `product.md` § Surfaces | tree, stubs, `brief.md`, page | `/api/check` ok; `brief.md` has a `surfaces:` line |
| 1 | Strategy | `strategy.md` | before the pick, lean: the cliché, 2–3 buyer types, the gap, 4–6 competitors. After it: personas, buyer voice, positioning, personality | the line on why this brand wins for this buyer heads branding.md § Strategy |
| 2 | Naming (no name only) | `strategy.md` § Naming | candidates, domains, handles, shortlist, ★, folder renamed | the ★ is pronounceable and spellable, its domain status known; collisions listed, none exact in the category, near ones ❓ |
| 3 | Direction | `direction.md`, `style-picking.md`, `styles.md`, `system.md` § Colour | three directions (vibe, recipe, the same piece of the #1 surface each), then **stop for the user's pick** (§ The pick); after it: NOT list, palette and fonts, moodboard | before the pick: three directions on the page and the question asked. After it: the recipe justified against the cliché in writing, and each NOT item marked seen / not seen on the moodboard |
| 4 | Logo | `logo.md` | sketches, ★, mark, wordmark, lockups, favicon, app icon, avatar, usage rules, boards | reads at 16 px and in one colour, tells the idea in one sentence, look-alike sheet done |
| 5 | System | `system.md` | colour, type, space, components, imagery, motion, voice, print; `tokens.css` | `palette.py` exits 0 with the required pairs; every rule says why |
| 6 | Primary surfaces | `product.md`, `layouts.md` | the top two surfaces in `surfaces:`, shot | no tell from the general or the type's slop list, no OVERFLOW, every placeholder labelled |
| 7 | Secondary surfaces / applications | `product.md` § Applications | the other surfaces and the channel assets | each still reads as the brand in a copy with the logo covered |
| 8 | Review + crit | `review-page.md` | page complete, `crit.md`, page screenshot | `audit.py` exits 0, `/api/check` ok, every `crit.md` line ✓ or a reason |

## The pick (phase 3): three directions, then the user decides

Taste is the user's call, and a wrong direction is the most expensive mistake in this skill, so fail fast: show three cheap directions before anything gets polished.

1. **Three angles.** Each direction comes from a different angle: a different buyer lens or cultural root from the brief, *and* a different style family (`style-picking.md` § 7), never three shades of one idea. For developer tools, AI and other tech products one of the three is `styles.md#devtool-dark` (Vercel / Linear-like), that category's quality bar.
2. **Cheap.** Per direction: the vibe in one line, the style recipe in one line, a one-line logo idea, and the same small piece of the #1 surface rendered (`src/html/direction-{a,b,c}.html`, colours inline, fonts from the Google Fonts CSS link, shot to `img/`). Minutes each; no logo work, no palette.py, no moodboard yet.
3. **Stop and ask.** Put the three side by side in the Direction section, ★ on your recommendation with one line on why. Then end your turn with a short message: the page link, the three one-liners, your ★, and the question "A, B, C, or a mix?". Plain text works in every harness; a native multiple-choice tool is fine where one exists. As a subagent, that message is your final report to the orchestrator, which asks the user.
4. **Continue only on an answer.** Build the chosen direction (a mix like "A's type with C's colour" is a recipe too); the others stay small on the page with the user's reason. If nobody can answer (a non-interactive run, or the user said "you decide"), take the ★ and say so.

## Tools

The only place with exact commands; phase files name the tool. Python scripts carry their dependencies (PEP 723) and run with `uv run`. Write your own generators in `$B/src/` the same way (a `# /// script` header, `uv run $B/src/<name>.py`), never pip, and never name one after a stdlib module (`site.py`, `json.py`).

- **Screenshots** (light theme and reduced motion by default; `THEME=dark` and `MOTION=1` override):
  - `$S/shoot.sh view <file or URL> $B/research/<name>.png 1440 900`: the first screen
  - `$S/shoot.sh full $B/site/index.html $B/site/shots/index-1440.png 1440`: the whole page
  - `$S/shoot.sh mobile $B/site/index.html $B/site/shots/index-390.png 390 2`: a real 390 layout; prints `OVERFLOW` if it scrolls sideways
  - `uv run $S/tile.py $B/site/shots/index-390.png $B/img/index-390-sheet.png`: cuts a tall shot into readable columns
  - `MP4=1 $S/shoot.sh strip $B/src/html/motion.html $B/img/motion-strip.png 800 450 "0 150 300 600 1200"`: one frame per time in ms (animations on, each set to that time), side by side, plus `motion-strip.mp4`
  - `$S/shoot.sh pdf $B/src/html/boards.html $B/boards.pdf`: print to PDF (also the review page's fallback: `$B/review.html`)
- **Domains:** `curl -sL -o /dev/null -w "%{http_code}\n" https://rdap.org/domain/<name>.<tld>`: 200 registered, 404 probably free; reliable for .com, .net, .ai, .dev. Where a known-registered domain also gives 404 (.io, .sh, .ch): `dig +short NS <name>.<tld>`, empty means probably free.
- **Handles:** `curl -s -o /dev/null -w "%{http_code}\n" https://github.com/<name>` (404 = free); for dev tools also `https://registry.npmjs.org/<name>` and `https://pypi.org/pypi/<name>/json`.
- **Fonts:** list a family's files with `curl -s https://api.github.com/repos/google/fonts/contents/ofl/<family> | python3 -c "import json,sys; print(*[f['name'] for f in json.load(sys.stdin)], sep='\n')"` (`<family>` lowercase, no spaces), then fetch each TTF and `OFL.txt` with `curl -sLo "$B/fonts/<file>" "https://raw.githubusercontent.com/google/fonts/main/ofl/<family>/<file>"`. Variable fonts have bracketed names: URL-encode `[` `,` `]` as `%5B` `%2C` `%5D` in the URL only (`Fraunces%5BSOFT%2CWONK%2Copsz%2Cwght%5D.ttf`).
- **Colour:** `uv run $S/palette.py $B/src/colors-in.json $B/src/colors.json --css $B/src/colors.css --md $B/src/colors.md [--fit]` (input in `system.md` § Colour).
- **Wordmark or letter:** `uv run $S/wordmark.py $B/fonts/<file>.ttf "<text>" $B/logo/sketches/<name>.svg [--axis wght=600] [--track -0.03] [--fill "#1A1614"] [--split]`; writes a `.json` sidecar with baseline, x-height and cap height.
- **Size test:** `uv run $S/sizetest.py $B/img/sizetest.png $B/logo/<slug>-mark.svg $B/logo/<slug>-lockup.svg $B/logo/favicon-light.svg:$B/logo/favicon-dark.svg`; for sketches, `uv run $S/sizetest.py $B/img/sizetest-sketches.png $B/logo/sketches/*.svg`.
- **PNG export:** `uv run $S/svg2png.py $B/logo/favicon-light.svg $B/logo/favicon-16.png 16 [HEIGHT]`.
- **Trace a hand-drawn mark** (optional, needs potrace): `potrace -s <sketch>.bmp -o <mark>.svg` (input BMP or PBM).
- **Public-domain art:** `uv run $S/commons.py search "<query>"`, then `uv run $S/commons.py fetch "File:<name>" $B/img/<name>.jpg 1600 --credits $B/CREDITS.md`.
- **Icons:** `curl -sLo $B/src/icons/<name>.svg https://unpkg.com/lucide-static/icons/<name>.svg` (or Phosphor, Tabler).
- **Review page:** `curl -s "127.0.0.1:8800/api/check?path=$B/page.mdx"`; shoot it with `$S/shoot.sh view "http://127.0.0.1:8800/?path=$B/page.mdx" $B/img/page.png 1440 900` (URL-encode spaces as `%20`).
- **Audit:** `uv run $S/audit.py $B`: the files for each surface in `brief.md`, contrast pairs, lorem, alt text, reduced motion, the page check.
- **Mac traps:** BSD `sed -i ''`; `grep` may be ugrep and choke on long HTML regexes, so use Python for regex on HTML.

## Several directions at once

Only when the user asks for several complete brands to compare; for choosing a direction, § The pick is enough. You are the orchestrator:

1. Run phases 0 and 1 once in `<root>/<slug>`: research, buyer voice, competitors, personas, assumptions and surfaces go into one `brief.md`. Copy it and `research/` into each designer folder (`<slug>-a`, `-b`, `-c`).
2. Spawn one senior-designer agent per direction (Opus unless told otherwise) with this skill's absolute path, its own folder, and its lens. Each runs phase 0 around the copied brief, starts branding.md § Strategy from it plus one line on its lens, then works from phase 2 (no name) or 3, skipping § The pick because its lens fixes the direction. None reads another's folder.
3. Derive the lenses from the buyer types in the brief, each with a different style family (`style-picking.md` § 7, which has the lens line for the spawn prompt). Don't reuse an example lens blindly; one that leads into the client's dislikes is wrong.
4. When all are done, view every PNG yourself and build the index page in `<root>/<slug>`: the #1 surface of each direction side by side, a table (vibe, target, recipe, logo, key line, theme), and your recommendation in two lines.

## Crit (phase 8)

Write `crit.md`, one line per item with ✓ or the reason it misses, and show it in the Assets section:

- each phase gate above
- type: OFL files present; the scale covers display → label on desktop and mobile; data uses tabular figures
- shots: every one viewed (tall ones tiled); no OVERFLOW, text collision, stretched image, or desktop merely shrunk
- accessibility: reduced motion shows a designed static state; focus is visible; every image has alt text

## Report

- The page URL and each section link (`http://127.0.0.1:8800/?path=<abs path>/page.mdx#<id>`).
- The vibe, the target and the style recipe in three lines; the logo in one.
- The ❓ questions for the user.
- Anything you couldn't do.
