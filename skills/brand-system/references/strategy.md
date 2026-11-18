# Phase 1 · Strategy, Phase 2 · Naming, Phase 3 · Direction (vibe, idea, moodboard)

The goal is one page a stranger could read and then predict your logo, palette and headline from. If it doesn't constrain the visuals, it isn't strategy yet.

## 1. Research the market

"Enough" here is measurable: 6–10 competitors read and screenshotted, ≥5 buyer-voice phrases, the category cliché written down, and the gap written down. When those four exist, stop.

- **Competitors.** Use WebSearch to find them and WebFetch to read their sites (promise, audience, price, tone). WebFetch returns text only, so get the look by screenshotting each homepage with `$S/shoot.sh view <url> research/<name>.png 1440 900` and looking at it. Note colour, type, imagery and density.
  - The screenshots are internal research. They may appear small on the review page's strategy section, but never in brand assets.
  - Don't download competitors' images.
- **Adjacent leaders** (optional, 1–2): tools the buyer already loves in other categories. They set the quality bar the buyer expects. Skip them if they don't feed a decision.
- **Buyer voice.** Reddit and HN are often unreachable for the tools. Fall back to:
  - app-store reviews
  - Trustpilot, G2, Capterra
  - community forums and guides
  - comments on competitor launch posts

  Quote short phrases only. Label each as *buyer's words* or *seller's view*; vendor blogs are the seller's view.
- **The category cliché.** Write what almost everyone looks like, e.g. "neon, purple gradients, sparkles, countdowns, glossy faces" or "bank navy, stock smiles, shield icons". Map it to a style in `styles.md`; that is the style you'll avoid or subvert.
- **Collision check, always (even with a given name).** Search the name plus the category, the app stores, and `<name> app`. A near-collision is a ❓ for the user, not a blocker. (A given name "Franco" turned out to sit next to "frankly", a competitor's 3a app.)

Output: a table with competitor · who they talk to · promise · look (link the screenshot) · tone · link.

## 2. Buyer versus user, as personas

2–3 personas. Each has a name, age, role, context (size of operation, tools), what they need, what they fear, and what would make them trust a new vendor.

| persona | needs | fears |
|---|---|---|
| Marco, 31, agency owner (buyer). 12 accounts, 6 staff | volume per account per week, one overview, output staff can run alone | quality drift customers notice, a tool that leaks or dies |

The buyer and the daily user are often different people. The brand earns the buyer's trust and survives the user's eight hours a day.

## 3. The gap

The gap is the intersection nobody owns: *who you talk to* × *how you sound* × *what you promise*. For example: "Generators sell to the creator's dopamine. Agency software sells to the owner but only chat and CRM. Nobody sells *production* to the owner."

## 4. Positioning (one sentence)

`For [target] who [need], [Brand] is the [frame of reference] that [benefit], unlike [alternative], because [proof].`

Then a tagline candidate of 6 words or fewer ("Same face. Every set." / "Swiss money, said plainly.").

## 5. Personality

3–5 adjectives. Each gets a "means / doesn't mean" line, for example "Discreet: means private by default and a quiet UI; doesn't mean hidden pricing".

## Phase 2 · Naming (only when there is no name)

Naming sits between personality and vibe: the vibe and the brand idea grow from the name, and the name grows from the positioning.

1. Pick 3–4 **territories** from the strategy: the craft or technique, the outcome, a metaphor, an invented word.
2. Generate 15–30 candidates. Prefer 2–3 syllables, easy to say in the buyer's languages, and spelled as it sounds. Kill any with a negative meaning in a main market language.
3. **Domains** (record the method next to each result):
   - Run `curl -s -o /dev/null -w "%{http_code}" https://rdap.org/domain/<name>.<tld>`: 200 = registered, 404 = probably free. This is reliable for .com, .net and .ai.
   - First calibrate with a known-registered domain on the same TLD. If that also returns 404 (as with .io, .studio and .ch), RDAP is useless there. Use `dig +short NS <name>.<tld>` instead: an empty answer means probably free.
   - The user confirms at a registrar.
4. **Handles:** GitHub via `curl -s -o /dev/null -w "%{http_code}" https://github.com/<name>` (404 = free). Other socials need a login: list them as ❓, unchecked.
5. **Collisions:** web search plus app stores in the same category. Add a rough trademark note (say it is not legal advice).
6. Shortlist 3, each with its story in one line, domain status and risks. **Pick a ★ and build everything on it**, and leave the choice as ❓. If the user picks another, re-run the wordmark and lockup scripts; everything else holds.

## 6. Phase 3 · Direction: the vibe, the idea, the style recipe

- **Vibe:** one metaphor sentence, plus its senses: materials, light, era, pace (and sound only if the brand has one). Examples:
  - "A production house in Milan that runs on a terminal"
  - "A friend at the post-office counter with a pen"
  - "Smoke & Signal: soft pictures, hard interface"
- **The vibe test:** derive one colour, one typeface, one motion behaviour and one word choice from it. If you can't, rewrite it.
- **Brand idea / motif:** the single device only this brand can own, built from what the product does, the name and the vibe. It becomes the logo's story, the signature component and the signature motion. Write it in one line. Examples: "the first crack" (a roaster); "the gloss: every Swiss money word shown twice" (a finance app).
- **Style recipe:** follow `style-picking.md`. Map the cliché, choose a base style from `styles.md` that contrasts with it while keeping the category's trust cues, then add one signature device from a second family. Render the same tiny hero in 3 candidate recipes (HTML → `shoot.sh view`), put them side by side on the page, and pick with the strategy.
- **Provisional palette and type:** pick them now, from the recipe and the vibe. Run `palette.py` once, so the moodboard and the logo use real colours. Phase 5 finalises them; changes then are expected and cheap, because everything reads colors.json.
- **The cultural root** is optional. It is the world the brand borrows its imagery and vocabulary from: Leonardo for "Sfumato", paperwork and stamps for a tax app, Lake Lugano paintings for a Ticino roaster. When a product has no natural root, your own renders are fine.

## 7. What the brand is NOT

List concrete clichés to ban, both visual and verbal. Examples:
- hype, neon, purple AI gradients, ✨, countdowns, income claims
- sexualised imagery
- "fake Renaissance" (gilt, swashes, meme versions of famous paintings)
- cold blue SaaS, bank navy with shields
- hacker green-on-black
- boho arches and rainbow fills

Every item should be something a lazy competitor actually does, or something your own first draft did.

## 8. Moodboard from your own renders

Make 4–6 tiles yourself with PIL, SVG or HTML screenshots:
- a type specimen (provisional fonts)
- colour fields in context (provisional palette)
- a texture or material study
- a composition study
- the motif in motion, as a frame strip

Public-domain artworks from the cultural root may appear, credited. Then **check the contact sheet against your own NOT list**: a first moodboard drifting into the very cliché it bans is a common failure. If it does, redo it before the logo.
