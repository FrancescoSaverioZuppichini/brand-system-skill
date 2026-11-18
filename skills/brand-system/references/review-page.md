# Review page (phases 0 to 8)

The brand book on screen is where the user judges the work, so it is part of the deliverable. It exists from phase 0 and fills section by section.

## The artifacts app

[artifacts](https://github.com/FrancescoSaverioZuppichini/artifacts) serves any folder up to 3 levels under `~/Documents` that holds a `page.mdx`, at `http://127.0.0.1:8800/<folder>`, and saves 👍/👎, notes and comments to `feedback.json`. Folder names must be unique. If the `local-artifacts` skill is installed, use it; otherwise this is enough.

- **Is it up?** Run the page check (Tools § Review page). No answer: if the app is installed but down, keep writing `page.mdx` and tell the orchestrator or the user; if it isn't installed at all, write the same seven sections as a static `$B/review.html` (images, captions, the ❓ questions as a list) and give the user its file path or the PDF from shoot.sh pdf.
- **Write it by hand.** The app re-renders when the file changes; no generator scripts or watchers. A section looks like:

  ```mdx
  <Section id="logo" title="Logo" badges={["★ the cracked T", "❓ case"]} open>
  <Gallery title="Five directions at real size">
    <Media id="logo-sketches" src="img/sizetest-sketches.png" caption="16 px magnified: only the cracked T keeps its idea" badges={["★"]} />
  </Gallery>
  <Note id="q-logo" placeholder="Lowercase or caps for the wordmark?" />
  </Section>
  ```
- **Components:** `Section` (`id`, `title`, `badges`, `open`), `Gallery` (`title`), `Media` (`src`, `id`, `title`, `caption`, `badges`, `compare`), `Code` (`src` or `text`, `title`; re-read when the file changes), `Note` (`id`, `placeholder`), `Badge`. `badges` is always a list of strings. In prose, backslash-escape `{ } < >` outside backticks.
- **Ids and links:** section ids are the ones in SKILL.md § Sections. Ids are feedback keys: unique and stable. Link a section or a card as `http://127.0.0.1:8800/<folder>#<id>`.
- **Check after every edit.** The check answers:

  ```json
  {"ok":true,"sections":7,"media":12,"missing":[],"errors":[],"warnings":[],"url":"http://127.0.0.1:8800/<folder>","links":{"logo":"http://127.0.0.1:8800/<folder>#logo"}}
  ```
  `ok:false` is an MDX error or a duplicate id (the page keeps showing the last good version). `missing` lists files not there yet, shown as ⏳: fine mid-phase, empty at the end. `warnings` are videos Chrome can't play. It proves the page compiles, not that it looks right, so shoot the page and view the shot with the Read tool.
- **Feedback:** read `feedback.json` at the start of every round and say what you changed in response.

## Conventions

- Each section opens with pictures. Captions say what to look at ("16 px magnified: the counter stays open"), not what the file is.
- Prose is two or three lines. The text lives in `branding.md`, embedded once in Assets as `<Code src="branding.md" title="branding.md" />` and linked from other sections as `[branding.md](#assets)`.
- **Overview:** the logo in context, the #1 surface, and one line each on the vibe, the target and the recipe.
- **Assets:** the file list, `branding.md`, `tokens.css`, `CREDITS.md` and `crit.md`.
- **Badges:** `★` is your recommendation; `❓ your call` is a decision for the user, with the question in a `<Note>` in that section.
- **Never hide a rejected direction:** show it small and say why it lost.

## A client who won't open the app

For a non-technical client also write `src/html/boards.html`: a static page of the key boards (logo, palette, the #1 surface, applications), each with a one-line caption, one board per printed page (`@page { size: A4 landscape }`, `break-after: page`). Export it with shoot.sh pdf to `boards.pdf`.
