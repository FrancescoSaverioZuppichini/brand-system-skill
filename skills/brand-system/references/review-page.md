# Phase 8 · The review page

The brand book on screen is where the user judges the work, so it is part of the deliverable. It exists from phase 0, with real pictures arriving section by section.

## The artifacts app (default when installed)

[artifacts](https://github.com/FrancescoSaverioZuppichini/artifacts) is a local app that serves folders of MDX + media as live review pages, with 👍/👎, notes and comments saved to `feedback.json`.
- **If the `local-artifacts` skill is installed, follow it.** Otherwise reading the app's `AGENTS.md` (read-only) is fine.
- **The page:** any folder up to 3 levels under `~/Documents` that holds `page.mdx`, served at `http://127.0.0.1:8800/<folder-name>`. Folder names must be unique.
- **Components:**
  - `<Section id title badges open>`
  - `<Gallery>`, `<Media src caption>`
  - `<Code src|text>`
  - `<Note>` for the ❓ questions
  - `<Badge>`
  - prose
- **Escaping:** in prose, backslash-escape `{ } < >` outside backticks. Lowercase JSX with inline styles renders, which makes live swatches possible.
- **Check after every edit:** `curl -s 127.0.0.1:8800/api/check/<folder>` must report ok, 0 errors and nothing missing. `/api/check` proves the page compiles, not that it looks right. Also screenshot it with `$S/shoot.sh view http://127.0.0.1:8800/<folder> img/page.png 1440 900` and look.
- **Hand-written only:** the app re-renders on file change, so edit `page.mdx` by hand; never use generator scripts or watchers for the page.
- **Feedback:** read `feedback.json` at the start of every round and say what you changed in response.
- **No server?** Still write `page.mdx`, and also export a static `brand-book.html`.

## Order (all sections `open`)

1. **Overview:** the logo in a nav bar, the landing hero, and one line each on the vibe, the target and the style recipe.
2. **Strategy:** the research table with competitor screenshots (small), personas, gap, positioning, personality.
3. **Direction:** the vibe, the idea, the NOT list, the 3 style-recipe specimens with the ★ one, and the moodboard.
4. **Logo:** the sketch sheet (size test), the ★ pick with reasons, the look-alike sheet, construction, lockups, favicon/app icon/avatar, in-context boards, usage rules.
5. **System:** colour (swatches + `colors.md` tables), type (specimen + scale), space/radii/icons, signature components, imagery, motion (frame strip + mp4), the voice table.
6. **Product:** the product screen and the landing at 1440, plus the 390 shots (tiled sheet).
7. **Applications.**
8. **Assets:** the file list, `tokens.css`, `branding.md`, `CREDITS.md`.

## Conventions

- **Badges:** `★` = your recommendation; `❓ your call` = a decision handed to the user. Put the question itself in a `<Note>` in that section.
- **Pictures first.** Every section shows an image in its first screen; short prose goes under it.
- **Captions** say what to look at ("16 px magnified: the seed stays a whole pixel"), not what the file is.
- **Wide, short images** letterbox in cards, so compose them into boards.
- **Never hide a rejected direction.** Show it small and say why it lost.
