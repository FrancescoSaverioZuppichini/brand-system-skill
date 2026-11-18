# Phase 1 · Strategy and Phase 2 · Naming

Output: branding.md §1 and the page's strategy section. It must be specific enough to constrain the visuals: who buys, what they fear, what the category looks like, where the gap is.

## Research the market

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

## Buyer versus user, as personas

2–3 personas. Each has a name, age, role, context (size of operation, tools), what they need, what they fear, and what would make them trust a new vendor.

| persona | needs | fears |
|---|---|---|
| Marco, 31, agency owner (buyer). 12 accounts, 6 staff | volume per account per week, one overview, output staff can run alone | quality drift customers notice, a tool that leaks or dies |

The buyer and the daily user are often different people. The brand earns the buyer's trust and survives the user's eight hours a day.

## The gap

The gap is the intersection nobody owns: *who you talk to* × *how you sound* × *what you promise*. For example: "Generators sell to the creator's dopamine. Agency software sells to the owner but only chat and CRM. Nobody sells *production* to the owner."

## Positioning (one sentence)

`For [target] who [need], [Brand] is the [frame of reference] that [benefit], unlike [alternative], because [proof].`

Then a tagline candidate of 6 words or fewer ("Same face. Every set." / "Swiss money, said plainly.").

## Personality

3–5 adjectives. Each gets a "means / doesn't mean" line, for example "Discreet: means private by default and a quiet UI; doesn't mean hidden pricing".

## Phase 2 · Naming (only when there is no name)

Naming sits between strategy and direction: the name grows from the positioning, and the vibe and brand idea (phase 3) grow from the name.

1. Pick 3–4 **territories** from the strategy: the craft or technique, the outcome, a metaphor, an invented word.
2. Generate 15–30 candidates. Prefer 2–3 syllables, easy to say in the buyer's languages, and spelled as it sounds. Kill any with a negative meaning in a main market language.
3. **Domains** (record the method next to each result):
   - Run `curl -s -o /dev/null -w "%{http_code}" https://rdap.org/domain/<name>.<tld>`: 200 = registered, 404 = probably free. This is reliable for .com, .net and .ai.
   - First calibrate with a known-registered domain on the same TLD. If that also returns 404 (as with .io, .studio and .ch), RDAP is useless there. Use `dig +short NS <name>.<tld>` instead: an empty answer means probably free.
   - The user confirms at a registrar.
4. **Handles:** GitHub via `curl -s -o /dev/null -w "%{http_code}" https://github.com/<name>` (404 = free). Other socials need a login: list them as ❓, unchecked.
5. **Collisions:** web search plus app stores in the same category. Add a rough trademark note (say it is not legal advice).
6. Shortlist 3, each with its story in one line, domain status and risks. **Pick a ★ and build everything on it**, and leave the choice as ❓. If the user picks another, re-run the wordmark and lockup scripts; everything else holds.
