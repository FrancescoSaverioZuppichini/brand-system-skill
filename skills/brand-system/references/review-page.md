# Phase 7 · The review page

The brand book on screen is where the user judges the work, so it is part of the deliverable.

## The artifacts app (default when installed)

[artifacts](https://github.com/FrancescoSaverioZuppichini/artifacts) is a local Bun app that serves folders of MDX + media as live review pages with feedback. If its `local-artifacts` skill is installed, follow it; the short version:

- **The page.** A page is any folder up to 3 levels under `~/Documents` that holds `page.mdx`; its URL is `http://127.0.0.1:8800/<folder-name>`. Folder names must be unique.
- **The format.** Read `~/Documents/artifacts/AGENTS.md` once for the format. The components are `<Section id title badges open>`, `<Gallery>`, `<Media src caption>` and `<Code src|text>`, plus prose.
- **Escaping.** In prose, backslash-escape `{ } < >` outside backticks. Lowercase JSX with inline styles may render (useful for live swatches); check it.
- **Check after every edit.** Run `curl -s 127.0.0.1:8800/api/check/<folder>` and expect ok, 0 errors and nothing missing. The app re-renders on file change, so never write generator scripts or watchers for the page; edit `page.mdx` by hand.
- **No server?** Still write `page.mdx`, and also export a static `brand-book.html`.

## Order

1. **Overview:** the logo in a nav bar, the landing hero, and one line on the vibe and one on the target.
2. **Strategy:** the research table, personas, gap, positioning, personality, vibe, NOT list, brand idea, moodboard.
3. **Logo:** the sketches sheet, the size test, the ★ pick with reasons, construction, lockups, favicon/app icon/avatar, in-context mocks, usage rules.
4. **System:** colour (swatches, roles, the contrast table), type (specimen and scale table), space/radii/icons, signature components, imagery, motion (frame strip and mp4), voice table.
5. **Product:** the product screen and the landing at 1440, plus the 390 shots.
6. **Applications.**
7. **Assets:** file list, `tokens.css`, `branding.md`, `CREDITS.md`.

## Conventions

- **Badges:** `★` marks your recommendation. `❓ your call` marks decisions you're handing to the user; put the actual question in the section text.
- **Pictures first.** Each section shows an image within the first screen of it. Put the prose under the pictures, and keep it short.
- **Captions** say what to look at ("16 px magnified: the seed stays a whole pixel"), not what the file is.
- **Never hide a rejected direction.** Show it small and say why it lost; that's how the user learns to trust the pick.
