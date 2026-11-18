# Layouts · how sections are arranged

This file is about layout: where the blocks go in a section, independent of style. A layout can be drawn in any style, but some styles suit it better, so every entry names the styles it pairs with, linked into `styles.md`.

Each variant has a wireframe at 1440 with its 390 mobile frame next to it. The wireframes live in the repo, not in the installed skill: `atlas/layouts/<section>/<id>.svg` (and `.png`) at github.com/FrancescoSaverioZuppichini/brand-system-skill. `atlas/layouts/make.py` draws all of them from one script; `atlas/layouts/sheets/<section>.png` shows every variant of a section on one sheet.

**Wireframe key:** dark bars are headings, light bars are body text, a filled pill is the primary button, an outlined pill is a secondary button, a window with a sidebar is a product screenshot, a grey block with a mountain is a photo, a dark block is code, ▢ is an icon, a dashed pill is a note about behaviour (sticky, auto-advance).

**Default mobile rules** (each entry only lists what differs):
- 16 px side gutters; rows stack in reading order; two buttons become full-width and stacked.
- Card grids stack, or scroll sideways when the cards are peers (testimonials, case studies), with the next card peeking.
- Tables become lists: name and status on one line, the metadata under it.
- Sidebars collapse behind ≡; a desktop screenshot gets its own taller crop or a phone screen, never the shrunk desktop.

The `web-unslop` gate applies to every entry. Its instant-fail tells, which the "Avoid when" lines refer to: emoji as icons, rainbow accents, gradient circles with initials, repeated KPI strips, dead cards, button clutter, a decorative icon grid on a product landing, a one-note palette, nested card stacks, and hero-size type inside compact UI.

## Contents

- [Composing a landing](#composing-a-landing)
- Marketing sections: [Nav](#nav--header) · [Hero](#hero) · [Logo wall / social proof](#logo-wall--social-proof) · [Stats band](#stats-band) · [Features](#features) · [Product showcase](#product-showcase) · [How it works](#how-it-works) · [Testimonials](#testimonials) · [Pricing](#pricing) · [FAQ](#faq) · [Trust / security](#trust--security) · [CTA band](#cta-band) · [Newsletter](#newsletter) · [Team](#team) · [Blog](#blog-index--article) · [Portfolio / gallery](#portfolio--gallery) · [Event schedule](#event-schedule) · [Contact](#contact) · [Footer](#footer)
- Other pages: [Changelog](#changelog) · [Docs landing](#docs-landing) · [Careers](#careers) · [404](#404) · [Legal / privacy](#legal--privacy) · [Waitlist](#waitlist) · ["vs" page](#comparison-vs-page)
- Application screens: [Login](#login) · [Register](#register) · [Onboarding](#onboarding) · [App shell](#app-shell) · [Dashboard](#dashboard) · [List / table](#list--table) · [Detail / inspector](#detail--inspector) · [Creation flow / form](#creation-flow--form) · [Settings](#settings) · [Billing / usage](#billing--usage) · [Empty states](#empty-states) · [Modals / drawers](#modals--drawers) · [Notifications / inbox](#notifications--inbox) · [Search / results](#search--results) · [Mobile tab-bar app](#mobile-tab-bar-app) · [Shop](#shop)

## Composing a landing

Pick one variant for each part of the 11-part landing in `product.md`. Order the parts by the buyer's questions: what is it, who else uses it, how does it work, show me, does it do my job, is it safe, what does it cost, what about my doubts, how do I start.

1. **Lead with the product.** The hero, or the section right under it, shows the product's own UI or output. Never only copy, icons or abstract shapes in the first viewport.
2. **Alternate density.** Follow a dense section (table, bento, grid) with a sparse one (one quote, one number, a CTA line). Never stack three equal card grids: feature cards, then testimonial cards, then pricing cards read as one long grid.
3. **Alternate the axis.** Centred → split → full width → split. Two centred stacks in a row flatten the page.
4. **Change the background only to mark a change of topic** (a tint for proof, dark for the closing CTA), at most every two or three sections.
5. **Give the brand device one section** with room (usually the hero or the showcase) and keep the others quiet.
6. **Design mobile per section:** decide what stacks, what scrolls sideways and what is cut.
7. **Cut a part with a one-line reason;** never pad with sections the buyer did not ask about.

### Dev tool (CLI, API, SDK)

| Part | Variant | Why |
|---|---|---|
| Nav | [nav/search](#nav--header) | developers look for the docs first |
| Hero | [hero/terminal](#hero) | the install command is the CTA; the code is the product |
| Proof | [logos/row](#logo-wall--social-proof) | quiet; developers distrust loud proof |
| How it works | [steps/code](#how-it-works) | each step is a real command |
| Product | [showcase/annotated](#product-showcase) | the dashboard or output, with numbered notes |
| Features | [features/tabs](#features) | one screenshot, one tab per job |
| Trust | [trust/data-flow](#trust--security) | where the code and data go |
| Pricing | [pricing/table](#pricing) | usage tiers compared line by line |
| FAQ | [faq/two-col](#faq) | |
| CTA | [cta/inline-form](#cta-band) | one field, one button |
| Footer | [footer/mega](#footer) | docs, status, changelog, GitHub |

Rhythm: dense hero → thin logo row → stepped code → one big screenshot → tabs → a sparse diagram → a dense table → text. Wireframe: [landings/dev-tool.png](../../../atlas/layouts/landings/dev-tool.png).

### Consumer subscription (meal kit, coffee, a paid app)

| Part | Variant | Why |
|---|---|---|
| Nav + Hero | [hero/full-bleed](#hero) | the product photo sells; the nav sits on it |
| Proof | [logos/ratings](#logo-wall--social-proof) | app-store and review-site stars, not company logos |
| How it works | [steps/three](#how-it-works) | choose → receive → enjoy |
| Product | [showcase/devices](#product-showcase) | managing the subscription on the phone |
| Features | [features/old-new](#features) | the chore before vs with the product |
| Proof again | [testimonials/photo-split](#testimonials) | a person, not a grid of cards |
| Pricing | [pricing/toggle](#pricing) | plans by size, monthly vs yearly |
| FAQ (+ trust) | [faq/accordion](#faq) | cancel anytime, delivery, allergies; trust folds in here |
| CTA | [cta/big-type](#cta-band) | the brand line, large |
| Footer | [footer/centered](#footer) | few links |

Wireframe: [landings/consumer-subscription.png](../../../atlas/layouts/landings/consumer-subscription.png).

### SaaS sold to agencies

| Part | Variant | Why |
|---|---|---|
| Nav | [nav/announcement](#nav--header) | the latest release or webinar |
| Hero | [hero/shot-below](#hero) | the dashboard is the promise |
| Proof | [logos/marquee](#logo-wall--social-proof) | many small agency logos |
| How it works | [steps/stepper](#how-it-works) | onboard a client → run → report |
| Product | [showcase/annotated](#product-showcase) | the client report, annotated |
| Features | [features/bento](#features) | several jobs, each with its own UI crop |
| Trust | [trust/badges](#trust--security) | clients ask about GDPR and access |
| Proof again | [testimonials/case-studies](#testimonials) | agencies buy on results |
| Pricing | [pricing/four](#pricing) | per seat, with Enterprise for networks |
| FAQ | [faq/categories](#faq) | billing, clients, data, setup |
| CTA | [cta/card-visual](#cta-band) | one more look at the product |
| Footer | [footer/mega](#footer) | |

Wireframe: [landings/agency-saas.png](../../../atlas/layouts/landings/agency-saas.png).

### Marketplace

| Part | Variant | Why |
|---|---|---|
| Nav | [nav/search](#nav--header) | search is the core action |
| Hero | [hero/search](#hero) | the search field with category chips |
| Proof | [logos/ratings](#logo-wall--social-proof) | review counts on both sides |
| Product | [portfolio/grid](#portfolio--gallery) | real listings are the product |
| How it works | [steps/numbers](#how-it-works) | how buying and paying work |
| Proof again | [testimonials/carousel](#testimonials) | buyers and sellers |
| Trust | [trust/claims](#trust--security) | buyer protection, refunds, verified sellers |
| CTA | [cta/split](#cta-band) | the second audience: sell on it |
| FAQ | [faq/grid](#faq) | |
| Footer | [footer/mega](#footer) | |

Pricing is cut: free for buyers; the seller fee goes in the FAQ. Wireframe: [landings/marketplace.png](../../../atlas/layouts/landings/marketplace.png).

### Local business (clinic, restaurant, studio)

| Part | Variant | Why |
|---|---|---|
| Nav + Hero | [hero/full-bleed](#hero) | the place, photographed |
| Proof | [logos/ratings](#logo-wall--social-proof) | map and review-site ratings |
| Services | [portfolio/case-rows](#portfolio--gallery) | each service as a photo row |
| Proof again | [testimonials/single](#testimonials) | one named client |
| Pricing | [pricing/rows](#pricing) | a price list, not plan cards |
| Gallery | [portfolio/masonry](#portfolio--gallery) | the space and the work |
| FAQ | [faq/grid](#faq) | parking, booking, insurance |
| Contact (= CTA) | [contact/map](#contact) | call, book, directions |
| Footer | [footer/local](#footer) | address, hours, map |

How it works and Trust fold into the services and the FAQ; the contact section is the closing CTA. Wireframe: [landings/local-business.png](../../../atlas/layouts/landings/local-business.png).

---

## Nav / header

#### Standard bar
- **What:** logo left, 3–5 links in the middle, a secondary and a primary action right.
- **Wireframe:** [nav/standard](../../../atlas/layouts/nav/standard.svg)
- **Use when:** the default for any product site with up to five top-level pages.
- **Avoid when:** you have more than six links (use the mega menu). Tell: two filled buttons of equal weight.
- **Mobile (390):** logo + ≡; the menu opens full screen with the primary action at the bottom.
- **Pairs with:** [every family](styles.md#contents); it is the neutral choice.

#### Centred logo
- **What:** links split on both sides of a centred logo.
- **Wireframe:** [nav/centered-logo](../../../atlas/layouts/nav/centered-logo.svg)
- **Use when:** the brand mark carries the page: fashion, hospitality, editorial, a boutique shop.
- **Avoid when:** it is a software product; buyers look top-left for the logo and top-right for the action.
- **Mobile (390):** ≡ left, logo centred, bag or account icon right.
- **Pairs with:** [luxury](styles.md#luxury), [minimalism](styles.md#minimalism), [editorial](styles.md#editorial), [editorial photography](styles.md#editorial-photo).

#### Logo + one action
- **What:** only the logo and one primary button.
- **Wireframe:** [nav/minimal](../../../atlas/layouts/nav/minimal.svg)
- **Use when:** a one-page site, a waitlist, a campaign page, a checkout funnel.
- **Avoid when:** the visitor needs to compare pages (pricing, docs).
- **Mobile (390):** the same; the button shrinks to fit.
- **Pairs with:** [every family](styles.md#contents).

#### With search
- **What:** a search field with ⌘K next to the logo, then links and actions.
- **Wireframe:** [nav/search](../../../atlas/layouts/nav/search.svg)
- **Use when:** docs-heavy products, dev tools, marketplaces, knowledge bases; search is a main task.
- **Avoid when:** the site has five pages; a search box with nothing behind it is a dead control.
- **Mobile (390):** logo + a search icon + ≡; search opens full screen.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [Swiss](styles.md#swiss), [enterprise-dense](styles.md#enterprise-dense).

#### Mega menu, open
- **What:** a panel under the bar with product columns (icon, name, one line) and one featured card.
- **Wireframe:** [nav/mega](../../../atlas/layouts/nav/mega.svg)
- **Use when:** several products or audiences (platforms, enterprise suites, big shops).
- **Avoid when:** you have fewer than six destinations. Tell: decorative icons on every item; use them only when they name the product.
- **Mobile (390):** a full-screen list with accordions per group and both actions at the bottom.
- **Pairs with:** [corporate modernism](styles.md#corporate-modernism), [Swiss](styles.md#swiss).

#### Announcement bar + bar
- **What:** a thin strip above the nav with one short message and a link.
- **Wireframe:** [nav/announcement](../../../atlas/layouts/nav/announcement.svg)
- **Use when:** a launch, a funding round, a webinar, an outage notice; something time-bound.
- **Avoid when:** it is permanent filler ("We're hiring!" for a year). Make it dismissible.
- **Mobile (390):** one line, cut to 40 characters.
- **Pairs with:** [every family](styles.md#contents).

#### Utility bar + bar
- **What:** a tinted strip with phone, address and hours (or shipping and language), then the main bar.
- **Wireframe:** [nav/utility](../../../atlas/layouts/nav/utility.svg)
- **Use when:** local businesses and shops, where phone, hours or free shipping decide the visit.
- **Avoid when:** software; it reads as an online shop.
- **Mobile (390):** only the most important item (the phone number, tap to call).
- **Pairs with:** [food craft](styles.md#food-craft), [wellness](styles.md#wellness), [risograph](styles.md#riso), [letterpress](styles.md#letterpress), [editorial photography](styles.md#editorial-photo), [corporate modernism](styles.md#corporate-modernism).

## Hero

Every hero must pass the web-unslop landing check: the first viewport shows the product (or its output), not only copy and shapes. The headline is 8 words or fewer.

#### Centred stack
- **What:** badge, headline, subline, two buttons and a proof line, centred, with nothing else.
- **Wireframe:** [hero/centered](../../../atlas/layouts/hero/centered.svg)
- **Use when:** there is nothing to show yet (a waitlist, a manifesto) or the product is the words (a writing tool shown in the next section).
- **Avoid when:** you have a product screen. Tell: it fails "the first viewport shows the product".
- **Mobile (390):** the same stack; the headline wraps to 3–4 lines.
- **Pairs with:** [web brutalism](styles.md#web-brutalism), [editorial](styles.md#editorial), [luxury](styles.md#luxury), [minimalism](styles.md#minimalism).

#### Product screenshot below
- **What:** centred copy, then a large product screenshot that runs past the fold.
- **Wireframe:** [hero/shot-below](../../../atlas/layouts/hero/shot-below.svg)
- **Use when:** a SaaS with one strong screen; only with a real screenshot of the product's own states.
- **Avoid when:** the screenshot is a generic dashboard with fake KPIs. Tell: placeholder stats.
- **Mobile (390):** the copy, then a taller crop of the screen (one panel), never the whole desktop shrunk.
- **Pairs with:** [Swiss](styles.md#swiss), [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [enterprise-dense](styles.md#enterprise-dense).

#### Split: text + product
- **What:** copy and buttons left, the product right, a proof line under the buttons.
- **Wireframe:** [hero/split](../../../atlas/layouts/hero/split.svg)
- **Use when:** the most flexible hero; works with a screenshot, a photo or the signature visual.
- **Avoid when:** the visual is an abstract blob or a 3D shape with no product in it.
- **Mobile (390):** copy first, then the visual (cropped to one panel).
- **Pairs with:** [every family](styles.md#contents).

#### Split + floating detail cards
- **What:** the split hero with two small cards over the screenshot's edges (a metric, a status, a notification).
- **Wireframe:** [hero/split-floating](../../../atlas/layouts/hero/split-floating.svg)
- **Use when:** one screenshot cannot show the key moment; the cards pull out the result (a sent invoice, a passed check).
- **Avoid when:** the cards repeat what is in the screenshot or show invented numbers. Tell: dead cards.
- **Mobile (390):** drop the floating cards; keep one as a row under the screenshot if it matters.
- **Pairs with:** [Swiss](styles.md#swiss), [Scandinavian](styles.md#scandinavian), [glassmorphism](styles.md#glassmorphism), [mesh gradient](styles.md#mesh-gradient).

#### Full-bleed photo
- **What:** a photograph fills the viewport, a scrim darkens the bottom, the copy sits bottom-left, the nav is transparent on top.
- **Wireframe:** [hero/full-bleed](../../../atlas/layouts/hero/full-bleed.svg)
- **Use when:** the product is physical or a place (food, hotels, clinics, gear) and you have a strong photo you own.
- **Avoid when:** you only have stock photos, or the product is software.
- **Mobile (390):** a portrait crop chosen by hand; the copy stays on the scrim.
- **Pairs with:** [editorial photography](styles.md#editorial-photo), [luxury](styles.md#luxury), [minimalism](styles.md#minimalism), [editorial](styles.md#editorial), [food craft](styles.md#food-craft), [wellness](styles.md#wellness).

#### Video background
- **What:** a muted looping video behind centred copy, with a visible pause button.
- **Wireframe:** [hero/video](../../../atlas/layouts/hero/video.svg)
- **Use when:** motion is the product (a camera, a sport, an event, a venue), with a short loop under 3 MB.
- **Avoid when:** the video is decoration. It must have a pause button and a still frame for reduced motion.
- **Mobile (390):** the poster frame by default; play on tap.
- **Pairs with:** [editorial photography](styles.md#editorial-photo), [editorial](styles.md#editorial), [sci-fi HUD](styles.md#hud), [spatial](styles.md#spatial).

#### Editorial big type
- **What:** a headline set across the full width at huge size, the subline and buttons under it, then a wide image strip.
- **Wireframe:** [hero/editorial](../../../atlas/layouts/hero/editorial.svg)
- **Use when:** the voice is the differentiator (studios, magazines, opinionated tools) and the headline is genuinely good.
- **Avoid when:** the headline is generic; huge type magnifies weak copy.
- **Mobile (390):** the headline at about 44 px over 3–5 lines; the image strip becomes a 4:3 crop.
- **Pairs with:** [editorial](styles.md#editorial), [web brutalism](styles.md#web-brutalism), [Swiss](styles.md#swiss), [risograph](styles.md#riso), [letterpress](styles.md#letterpress).

#### Bento hero
- **What:** centred copy over a grid of 4–6 tiles, each a different real view (screen, metric, photo, map, list).
- **Wireframe:** [hero/bento](../../../atlas/layouts/hero/bento.svg)
- **Use when:** the product does several connected jobs and each tile shows one of them.
- **Avoid when:** you have to invent tiles to fill the grid. Tells: dead cards, nested card stacks.
- **Mobile (390):** the main tile first, the small tiles in a sideways scroller.
- **Pairs with:** [Swiss](styles.md#swiss), [Scandinavian](styles.md#scandinavian), [glassmorphism](styles.md#glassmorphism), [mesh gradient](styles.md#mesh-gradient).

#### Rotating slides
- **What:** a centred heading over a slide track; neighbours peek at the sides; dots and a pause control.
- **Wireframe:** [hero/carousel](../../../atlas/layouts/hero/carousel.svg)
- **Use when:** several equal products or collections (a shop's seasons, a portfolio).
- **Avoid when:** the slides carry different messages; visitors read only the first. Auto-advance needs a pause button and a static first slide for reduced motion.
- **Mobile (390):** swipeable slides with the next one peeking.
- **Pairs with:** [editorial photography](styles.md#editorial-photo), [editorial](styles.md#editorial), [neobrutalism](styles.md#neobrutalism).

#### Terminal / code
- **What:** copy left with the install command as a copy field next to the primary button; a code or terminal block right.
- **Wireframe:** [hero/terminal](../../../atlas/layouts/hero/terminal.svg)
- **Use when:** developer products where the first action is a command or an API call; the code must actually run.
- **Avoid when:** the buyer is not technical; fake code with lorem tokens.
- **Mobile (390):** the install field full width; the code block cut to 6–8 lines.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [web brutalism](styles.md#web-brutalism), [Swiss](styles.md#swiss).

#### Form in the hero
- **What:** copy and 3 checks left; a short form card right (3–4 fields, one button, one reassurance line).
- **Wireframe:** [hero/form](../../../atlas/layouts/hero/form.svg)
- **Use when:** the conversion is a quote, a demo request or a booking, and the form is genuinely short.
- **Avoid when:** the form needs more than 4 fields; it then belongs on its own page.
- **Mobile (390):** the copy, then the form without its card.
- **Pairs with:** [corporate modernism](styles.md#corporate-modernism), [Swiss](styles.md#swiss), [food craft](styles.md#food-craft), [wellness](styles.md#wellness).

#### App: phone screens
- **What:** copy, app-store buttons and a rating left; two phone screens right.
- **Wireframe:** [hero/phone](../../../atlas/layouts/hero/phone.svg)
- **Use when:** a mobile-first product; the screens are real states of the app.
- **Avoid when:** the phones show the same screen twice, or the app is desktop-first.
- **Mobile (390):** both phones side by side at a small size, or one phone, then the store buttons.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [neobrutalism](styles.md#neobrutalism), [glassmorphism](styles.md#glassmorphism), [mesh gradient](styles.md#mesh-gradient).

#### Search-first (marketplace)
- **What:** a headline, a large search field with its button, category chips, then a row of real listings.
- **Wireframe:** [hero/search](../../../atlas/layouts/hero/search.svg)
- **Use when:** marketplaces, directories, job boards, travel; search is the product.
- **Avoid when:** the catalogue is small; an empty result is worse than a list.
- **Mobile (390):** the search field full width, the chips wrap to two lines, the listings scroll sideways.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [editorial photography](styles.md#editorial-photo), [Swiss](styles.md#swiss).

## Logo wall / social proof

Every logo, number and rating is real or carries a placeholder label (habit 9 in `SKILL.md`).

#### Single row
- **What:** one kicker line and 5–6 logos in a row.
- **Wireframe:** [logos/row](../../../atlas/layouts/logos/row.svg)
- **Use when:** right under the hero; you have 5–6 recognisable logos.
- **Avoid when:** the logos are unknown; numbers or a quote prove more.
- **Mobile (390):** 3 × 2 grid.
- **Pairs with:** [every family](styles.md#contents).

#### Bordered grid
- **What:** heading and a link left; 8 logos in ruled cells right.
- **Wireframe:** [logos/grid](../../../atlas/layouts/logos/grid.svg)
- **Use when:** a dedicated customers or partners section; integrations.
- **Avoid when:** you have fewer than 8 logos (empty cells look like failure).
- **Mobile (390):** 2 columns.
- **Pairs with:** [Swiss](styles.md#swiss), [corporate modernism](styles.md#corporate-modernism), [web brutalism](styles.md#web-brutalism).

#### Moving marquee
- **What:** two rows of logos sliding in opposite directions.
- **Wireframe:** [logos/marquee](../../../atlas/layouts/logos/marquee.svg)
- **Use when:** many small logos (agencies, schools, communities) where volume is the message.
- **Avoid when:** you have 6 logos repeated to fill the track. It stops on hover and is static for reduced motion.
- **Mobile (390):** one row, still moving.
- **Pairs with:** [neobrutalism](styles.md#neobrutalism), [glassmorphism](styles.md#glassmorphism), [mesh gradient](styles.md#mesh-gradient), [Scandinavian](styles.md#scandinavian).

#### Logos + one quote
- **What:** a large quote and its author left, 6 logos right.
- **Wireframe:** [logos/quote](../../../atlas/layouts/logos/quote.svg)
- **Use when:** one customer's words carry more than the logo count.
- **Avoid when:** the quote is generic praise ("Great tool!").
- **Mobile (390):** the quote, then the logos 2 per row.
- **Pairs with:** [editorial](styles.md#editorial), [Swiss](styles.md#swiss).

#### Ratings strip
- **What:** 3 review-site ratings (stars + count) and an avatar cluster with a count.
- **Wireframe:** [logos/ratings](../../../atlas/layouts/logos/ratings.svg)
- **Use when:** consumer products, apps and local businesses, whose buyers trust reviews more than company logos.
- **Avoid when:** you have no reviews yet; don't show 5 stars from nowhere.
- **Mobile (390):** 2 × 2.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [neobrutalism](styles.md#neobrutalism), [food craft](styles.md#food-craft), [wellness](styles.md#wellness).

#### Logo + result cards
- **What:** cards with a customer logo, one result number, one line and a link to the case study.
- **Wireframe:** [logos/result-cards](../../../atlas/layouts/logos/result-cards.svg)
- **Use when:** B2B with measurable outcomes and real case studies to link to.
- **Avoid when:** the numbers are invented. Tell: placeholder stats.
- **Mobile (390):** a sideways scroller.
- **Pairs with:** [corporate modernism](styles.md#corporate-modernism), [Swiss](styles.md#swiss), [enterprise-dense](styles.md#enterprise-dense).

## Stats band

A number without context is a dead card. Each one says what it counts, over what period, and where it comes from.

#### Inline row
- **What:** 4 numbers with labels in one row.
- **Wireframe:** [stats/row](../../../atlas/layouts/stats/row.svg)
- **Use when:** a quick pause between two dense sections.
- **Avoid when:** the numbers repeat the logo wall or the hero. Tell: repeated KPI strips.
- **Mobile (390):** 2 × 2.
- **Pairs with:** [every family](styles.md#contents).

#### Ruled, left-aligned
- **What:** a heading, then 4 numbers each under a rule with a one-line explanation.
- **Wireframe:** [stats/ruled](../../../atlas/layouts/stats/ruled.svg)
- **Use when:** the numbers need a sentence each (what was measured).
- **Avoid when:** the sentences are filler.
- **Mobile (390):** 2 × 2 with the rules kept.
- **Pairs with:** [Swiss](styles.md#swiss), [editorial](styles.md#editorial), [corporate modernism](styles.md#corporate-modernism).

#### Story + 2×2 numbers
- **What:** a short paragraph left, 4 numbers in tinted tiles right.
- **Wireframe:** [stats/split](../../../atlas/layouts/stats/split.svg)
- **Use when:** an about or impact section where the story explains the numbers.
- **Avoid when:** the tiles carry icons or decoration.
- **Mobile (390):** the story, then the 2 × 2.
- **Pairs with:** [editorial](styles.md#editorial), [food craft](styles.md#food-craft), [wellness](styles.md#wellness), [corporate modernism](styles.md#corporate-modernism).

#### One big number
- **What:** one huge number on a dark band, one sentence of context and a source line.
- **Wireframe:** [stats/big](../../../atlas/layouts/stats/big.svg)
- **Use when:** one number tells the story (hours saved, money returned) and it is real.
- **Avoid when:** the number is small or soft; huge type magnifies it.
- **Mobile (390):** the same, number at about 44 px.
- **Pairs with:** [web brutalism](styles.md#web-brutalism), [editorial](styles.md#editorial), [Swiss](styles.md#swiss).

#### Numbers with trend
- **What:** cards with a label, a number and a small chart of its trend.
- **Wireframe:** [stats/trend](../../../atlas/layouts/stats/trend.svg)
- **Use when:** growth over time is the point (public metrics, an open-startup page).
- **Avoid when:** the charts are decorative or have no axis.
- **Mobile (390):** the cards stack.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [Swiss](styles.md#swiss).

## Features

Each feature answers a buyer need or fear from the strategy. Show the product doing it; web-unslop: "replace generic feature icons with concrete product visuals".

#### Alternating rows
- **What:** a screenshot and a text block side by side; the next row flips the sides.
- **Wireframe:** [features/alternating](../../../atlas/layouts/features/alternating.svg)
- **Use when:** 2–4 features, each with its own real screen.
- **Avoid when:** more than 4 rows (it becomes a slog); the screens are the same one cropped.
- **Mobile (390):** the image always first, then the text, so the order stays the same in every row.
- **Pairs with:** [every family](styles.md#contents).

#### Bento grid
- **What:** a heading over tiles of different sizes; each tile is a title, a line and a real UI crop.
- **Wireframe:** [features/bento](../../../atlas/layouts/features/bento.svg)
- **Use when:** 4–6 features of different weight; the biggest tile is the main job.
- **Avoid when:** the tiles hold icons or text only. Tells: dead cards, nested cards.
- **Mobile (390):** tiles stack, biggest first.
- **Pairs with:** [Swiss](styles.md#swiss), [Scandinavian](styles.md#scandinavian), [glassmorphism](styles.md#glassmorphism), [mesh gradient](styles.md#mesh-gradient).

#### Tabs + one big screenshot
- **What:** a row of tabs over one large screenshot that changes per tab.
- **Wireframe:** [features/tabs](../../../atlas/layouts/features/tabs.svg)
- **Use when:** 3–5 jobs done in the same screen; saves page length.
- **Avoid when:** the tabs hide the main message; put the most important one first.
- **Mobile (390):** tabs scroll sideways; the screenshot becomes a tall crop.
- **Pairs with:** [Swiss](styles.md#swiss), [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [enterprise-dense](styles.md#enterprise-dense).

#### Sticky scroll-telling
- **What:** steps scroll on the left while one screenshot stays pinned on the right and changes per step.
- **Wireframe:** [features/sticky](../../../atlas/layouts/features/sticky.svg)
- **Use when:** a sequence (import → clean → publish) on one screen.
- **Avoid when:** the screen doesn't change between steps. Needs a static fallback for reduced motion.
- **Mobile (390):** no pinning; each step is followed by its own image.
- **Pairs with:** [editorial](styles.md#editorial), [Swiss](styles.md#swiss), [sci-fi HUD](styles.md#hud), [spatial](styles.md#spatial).

#### Icon grid (slop tell)
- **What:** 6 cards, each an icon, a title and a line.
- **Wireframe:** [features/icon-grid](../../../atlas/layouts/features/icon-grid.svg)
- **Use when:** only for a secondary list of small facts (what is included, specs), never as the main features section.
- **Avoid when:** on a product landing. Tell: "no decorative feature icon grid on product landing pages". Replace it with features/ui-cards or features/alternating.
- **Mobile (390):** one column; long.
- **Pairs with:** none by preference.

#### Cards with real UI crops
- **What:** 3 cards, each a cropped piece of the product's UI, a title and a line.
- **Wireframe:** [features/ui-cards](../../../atlas/layouts/features/ui-cards.svg)
- **Use when:** the replacement for the icon grid: each feature shown by its own UI.
- **Avoid when:** the crops are illegible at card size; zoom in on one detail.
- **Mobile (390):** a sideways scroller.
- **Pairs with:** [Swiss](styles.md#swiss), [Scandinavian](styles.md#scandinavian), [enterprise-dense](styles.md#enterprise-dense).

#### Screenshot + numbered points
- **What:** one large screenshot with numbered pins, and the same numbers explained in 3 columns below.
- **Wireframe:** [features/numbered-shot](../../../atlas/layouts/features/numbered-shot.svg)
- **Use when:** the features live in one screen and the reader should find them there.
- **Avoid when:** more than 5 pins.
- **Mobile (390):** the screenshot crop with pins, then the numbered list.
- **Pairs with:** [Swiss](styles.md#swiss), [enterprise-dense](styles.md#enterprise-dense), [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal).

#### Accordion + changing visual
- **What:** an accordion of features left; the open one's screenshot right.
- **Wireframe:** [features/accordion](../../../atlas/layouts/features/accordion.svg)
- **Use when:** 4–6 features with a sentence each and one visual each.
- **Avoid when:** the visual doesn't change per item.
- **Mobile (390):** the visual above the accordion, changing with the open item.
- **Pairs with:** [Swiss](styles.md#swiss), [Scandinavian](styles.md#scandinavian), [corporate modernism](styles.md#corporate-modernism).

#### Old way vs new way
- **What:** two columns: the chore today (crosses) and with the product (checks), the second one darker.
- **Wireframe:** [features/old-new](../../../atlas/layouts/features/old-new.svg)
- **Use when:** the buyer's pain is concrete and you can name it in their words (from the research).
- **Avoid when:** it attacks a named competitor (use a "vs" page) or the old way is a straw man.
- **Mobile (390):** old way first, then new way.
- **Pairs with:** [web brutalism](styles.md#web-brutalism), [neobrutalism](styles.md#neobrutalism), [Swiss](styles.md#swiss).

## Product showcase

#### Annotated screenshot
- **What:** the product screen with 3–5 numbered pins and a numbered legend beside it.
- **Wireframe:** [showcase/annotated](../../../atlas/layouts/showcase/annotated.svg)
- **Use when:** the default for part 5 of the landing; it reuses the product screen.
- **Avoid when:** the screen shows fake data without a "sample data" chip.
- **Mobile (390):** a crop with the pins, then the legend.
- **Pairs with:** [every family](styles.md#contents).

#### Notes on both sides
- **What:** the screenshot centred with two notes left and two right.
- **Wireframe:** [showcase/side-notes](../../../atlas/layouts/showcase/side-notes.svg)
- **Use when:** a wide screen whose interesting parts sit at both edges.
- **Avoid when:** the notes are longer than two lines.
- **Mobile (390):** the screenshot, then all four notes in order.
- **Pairs with:** [Swiss](styles.md#swiss), [editorial](styles.md#editorial).

#### Before / after slider
- **What:** one image with a draggable divider between the input and the output.
- **Wireframe:** [showcase/before-after](../../../atlas/layouts/showcase/before-after.svg)
- **Use when:** the product transforms something visible (photos, audio waves, documents, rooms).
- **Avoid when:** the change is invisible at a glance. The handle must work with arrow keys.
- **Mobile (390):** the same, taller crop.
- **Pairs with:** [editorial photography](styles.md#editorial-photo), [sci-fi HUD](styles.md#hud), [spatial](styles.md#spatial), [Scandinavian](styles.md#scandinavian).

#### Desktop + phone
- **What:** the desktop screen with the phone app overlapping its corner.
- **Wireframe:** [showcase/devices](../../../atlas/layouts/showcase/devices.svg)
- **Use when:** the product really has both, and buyers care (field work, consumers on the go).
- **Avoid when:** the phone screen is the desktop squeezed.
- **Mobile (390):** only the phone screen.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [Swiss](styles.md#swiss).

#### Live demo embed
- **What:** an input and a button over a live result frame, in a tinted panel; no signup.
- **Wireframe:** [showcase/live-demo](../../../atlas/layouts/showcase/live-demo.svg)
- **Use when:** the product returns a result from one input (a URL audit, a name check, a converter).
- **Avoid when:** it needs an account or takes more than a few seconds; show a recorded result instead.
- **Mobile (390):** the input and button stacked, then the result.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [Swiss](styles.md#swiss), [neobrutalism](styles.md#neobrutalism).

#### Full shot + zoomed crops
- **What:** the whole screen, then three close-ups of details with a caption each.
- **Wireframe:** [showcase/crops](../../../atlas/layouts/showcase/crops.svg)
- **Use when:** the craft is in the details (a data table, an editor, a type tool).
- **Avoid when:** the details are not distinctive.
- **Mobile (390):** a crop of the screen, then the close-ups in a sideways scroller.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [editorial](styles.md#editorial), [Swiss](styles.md#swiss).

## How it works

Three steps in the buyer's words, not the system's.

#### Three steps in a row
- **What:** 3 columns, each a small screenshot, a number, a title and a line.
- **Wireframe:** [steps/three](../../../atlas/layouts/steps/three.svg)
- **Use when:** the default; each step has its own screen.
- **Avoid when:** it sits next to a features card grid (three equal grids in a row).
- **Mobile (390):** one column.
- **Pairs with:** [every family](styles.md#contents).

#### Vertical timeline
- **What:** heading left; numbered steps on a vertical line right.
- **Wireframe:** [steps/timeline](../../../atlas/layouts/steps/timeline.svg)
- **Use when:** 4–6 steps, or steps with a time (day 1, week 2).
- **Avoid when:** the steps are not in sequence.
- **Mobile (390):** the heading, then the timeline.
- **Pairs with:** [editorial](styles.md#editorial), [corporate modernism](styles.md#corporate-modernism), [food craft](styles.md#food-craft), [wellness](styles.md#wellness).

#### Steps with code
- **What:** each step is a row: number and text left, a code block right.
- **Wireframe:** [steps/code](../../../atlas/layouts/steps/code.svg)
- **Use when:** developer onboarding (install → configure → deploy).
- **Avoid when:** the code is fake.
- **Mobile (390):** text then code per step; code cut to 6 lines with horizontal scroll.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [web brutalism](styles.md#web-brutalism).

#### Stepper + one panel
- **What:** a 3-step stepper; the active step's text and screenshot below.
- **Wireframe:** [steps/stepper](../../../atlas/layouts/steps/stepper.svg)
- **Use when:** each step has a lot to show and you want a short section.
- **Avoid when:** the reader must see all steps at once to understand.
- **Mobile (390):** the stepper stays; the panel stacks.
- **Pairs with:** [Swiss](styles.md#swiss), [Scandinavian](styles.md#scandinavian).

#### Big numerals, no images
- **What:** 01 / 02 / 03 set large, a rule, a title and a paragraph each.
- **Wireframe:** [steps/numbers](../../../atlas/layouts/steps/numbers.svg)
- **Use when:** the steps are a service, not a screen (consulting, a clinic visit, a delivery), or to rest the eye between two image-heavy sections.
- **Avoid when:** the steps happen in the product; show them.
- **Mobile (390):** one column.
- **Pairs with:** [editorial](styles.md#editorial), [Swiss](styles.md#swiss), [luxury](styles.md#luxury), [minimalism](styles.md#minimalism).

## Testimonials

Real quotes with a name, a role and a company, or a placeholder label. No gradient circles with initials (web-unslop); use a photo or nothing.

#### One big quote
- **What:** one quote set large, centred, with the author.
- **Wireframe:** [testimonials/single](../../../atlas/layouts/testimonials/single.svg)
- **Use when:** one quote that names a result; a pause after a dense section.
- **Avoid when:** the quote is vague.
- **Mobile (390):** the same at about 22 px.
- **Pairs with:** [editorial](styles.md#editorial), [luxury](styles.md#luxury), [minimalism](styles.md#minimalism), [Swiss](styles.md#swiss).

#### Wall of quotes
- **What:** a masonry of 9+ short quote cards with stars and authors.
- **Wireframe:** [testimonials/wall](../../../atlas/layouts/testimonials/wall.svg)
- **Use when:** volume is the proof (consumer apps, communities, courses).
- **Avoid when:** you have fewer than 9 real quotes.
- **Mobile (390):** 3 cards and a "show more" button.
- **Pairs with:** [neobrutalism](styles.md#neobrutalism), [Scandinavian](styles.md#scandinavian).

#### Card carousel
- **What:** a heading with arrows, 3 quote cards visible, dots below.
- **Wireframe:** [testimonials/carousel](../../../atlas/layouts/testimonials/carousel.svg)
- **Use when:** 5–10 quotes of similar length.
- **Avoid when:** it is the third card row on the page.
- **Mobile (390):** swipe, one card with the next peeking.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [corporate modernism](styles.md#corporate-modernism).

#### Case-study cards
- **What:** cards with a photo, a logo, one result number, a line and a "read" link.
- **Wireframe:** [testimonials/case-studies](../../../atlas/layouts/testimonials/case-studies.svg)
- **Use when:** B2B buyers who want proof from a company like theirs; the case studies exist.
- **Avoid when:** the links go nowhere.
- **Mobile (390):** a sideways scroller.
- **Pairs with:** [corporate modernism](styles.md#corporate-modernism), [Swiss](styles.md#swiss).

#### Video + quote
- **What:** a video thumbnail left, the pull quote and the author right.
- **Wireframe:** [testimonials/video](../../../atlas/layouts/testimonials/video.svg)
- **Use when:** you have a real customer video with captions.
- **Avoid when:** the video is a stock montage.
- **Mobile (390):** the video, then the quote.
- **Pairs with:** [editorial photography](styles.md#editorial-photo), [corporate modernism](styles.md#corporate-modernism).

#### Photo + quote split
- **What:** a portrait of the customer left; stars, quote, author and two result numbers right.
- **Wireframe:** [testimonials/photo-split](../../../atlas/layouts/testimonials/photo-split.svg)
- **Use when:** consumer and local brands where the person is the proof; you have the photo with permission.
- **Avoid when:** the photo is stock or AI-generated.
- **Mobile (390):** the photo cropped 4:3, then the quote.
- **Pairs with:** [editorial photography](styles.md#editorial-photo), [food craft](styles.md#food-craft), [wellness](styles.md#wellness), [Scandinavian](styles.md#scandinavian).

## Pricing

web-unslop: three or four plans, price first, value second, name third; discounts explicit; Enterprise shaped like enterprise; no decorative badges or filler bullets. Every price carries its unit (per seat, per month, per bag).

#### Three cards, middle featured
- **What:** 3 plan cards; the middle one is darker with a badge.
- **Wireframe:** [pricing/three](../../../atlas/layouts/pricing/three.svg)
- **Use when:** the default for SaaS with three real tiers.
- **Avoid when:** a plan exists only to make the middle look cheap. Tell: filler bullets.
- **Mobile (390):** stacked, featured plan first.
- **Pairs with:** [every family](styles.md#contents).

#### Monthly / yearly toggle
- **What:** a segmented toggle above the cards; the yearly saving written on the toggle.
- **Wireframe:** [pricing/toggle](../../../atlas/layouts/pricing/toggle.svg)
- **Use when:** there is a real yearly discount.
- **Avoid when:** yearly is the default without saying so; the discount must be explicit.
- **Mobile (390):** the toggle stays above the stacked cards.
- **Pairs with:** [every family](styles.md#contents).

#### Two cards
- **What:** two plans side by side (free and paid, or self-serve and team).
- **Wireframe:** [pricing/two](../../../atlas/layouts/pricing/two.svg)
- **Use when:** simple products; the choice is binary.
- **Avoid when:** the second plan hides a third (call us) without saying so.
- **Mobile (390):** stacked, paid plan first.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [neobrutalism](styles.md#neobrutalism), [Swiss](styles.md#swiss).

#### Four with Enterprise
- **What:** three priced plans and an Enterprise card with "Talk to us" and its own list (SSO, SLA, invoicing).
- **Wireframe:** [pricing/four](../../../atlas/layouts/pricing/four.svg)
- **Use when:** limits imply enterprise use (seats, volume, compliance).
- **Avoid when:** Enterprise has no features of its own.
- **Mobile (390):** stacked; Enterprise last.
- **Pairs with:** [corporate modernism](styles.md#corporate-modernism), [Swiss](styles.md#swiss), [enterprise-dense](styles.md#enterprise-dense).

#### Usage calculator
- **What:** sliders for the usage (seats, volume) left; the computed price and plan right.
- **Wireframe:** [pricing/calculator](../../../atlas/layouts/pricing/calculator.svg)
- **Use when:** usage-based pricing (API calls, GB, minutes) that buyers can't estimate from a table.
- **Avoid when:** pricing is flat; a slider for three prices is a toy.
- **Mobile (390):** sliders, then the result card.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [enterprise-dense](styles.md#enterprise-dense), [Swiss](styles.md#swiss).

#### Comparison table
- **What:** plan names, prices and buttons as column heads; feature rows with checks; the featured column tinted.
- **Wireframe:** [pricing/table](../../../atlas/layouts/pricing/table.svg)
- **Use when:** the plans differ in many details; usually under the cards, or alone for dev tools.
- **Avoid when:** fewer than 6 rows differ.
- **Mobile (390):** a plan switcher (segmented control) over one column of checks.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [Swiss](styles.md#swiss), [corporate modernism](styles.md#corporate-modernism).

#### Enterprise band
- **What:** a dark band: the enterprise pitch left, 4 checks and "Talk to sales" right.
- **Wireframe:** [pricing/enterprise](../../../atlas/layouts/pricing/enterprise.svg)
- **Use when:** under the self-serve cards, when Enterprise is a separate sale.
- **Avoid when:** there is no sales team to answer.
- **Mobile (390):** stacked.
- **Pairs with:** [corporate modernism](styles.md#corporate-modernism), [Swiss](styles.md#swiss).

#### One plan
- **What:** one centred card with the price, everything included in two columns, one button.
- **Wireframe:** [pricing/single](../../../atlas/layouts/pricing/single.svg)
- **Use when:** one price for everyone (a tool, a course, a membership).
- **Avoid when:** you plan tiers soon; say "early price" instead.
- **Mobile (390):** the card full width; checks in one column.
- **Pairs with:** [web brutalism](styles.md#web-brutalism), [editorial](styles.md#editorial), [luxury](styles.md#luxury), [minimalism](styles.md#minimalism).

#### Stacked plan rows
- **What:** plans as horizontal rows: name, price, 3 checks, button, separated by rules.
- **Wireframe:** [pricing/rows](../../../atlas/layouts/pricing/rows.svg)
- **Use when:** price lists (services, a clinic, a menu, sizes) or more than 4 options.
- **Avoid when:** the plans need a feature comparison.
- **Mobile (390):** each row stacks.
- **Pairs with:** [editorial](styles.md#editorial), [food craft](styles.md#food-craft), [wellness](styles.md#wellness), [Swiss](styles.md#swiss).

## FAQ

Questions buyers actually ask, from the research. Answers in two or three sentences.

#### Centred accordion
- **What:** a centred heading and one column of 6–8 questions, the first one open.
- **Wireframe:** [faq/accordion](../../../atlas/layouts/faq/accordion.svg)
- **Use when:** the default.
- **Avoid when:** more than 10 questions (use categories).
- **Mobile (390):** the same.
- **Pairs with:** [every family](styles.md#contents).

#### Heading left, accordion right
- **What:** heading, a line and a contact link left; the accordion right.
- **Wireframe:** [faq/two-col](../../../atlas/layouts/faq/two-col.svg)
- **Use when:** after a centred section, to change the axis.
- **Avoid when:** —
- **Mobile (390):** heading, then the accordion.
- **Pairs with:** [Swiss](styles.md#swiss), [editorial](styles.md#editorial), [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal).

#### Categorised
- **What:** a search field, categories as a side list, the accordion for the chosen category.
- **Wireframe:** [faq/categories](../../../atlas/layouts/faq/categories.svg)
- **Use when:** 15+ questions (billing, data, setup, accounts).
- **Avoid when:** the categories hold one question each.
- **Mobile (390):** categories become chips above the accordion.
- **Pairs with:** [corporate modernism](styles.md#corporate-modernism), [Swiss](styles.md#swiss).

#### Answers in a grid
- **What:** 6 questions with their answers visible in two columns, no accordion.
- **Wireframe:** [faq/grid](../../../atlas/layouts/faq/grid.svg)
- **Use when:** few, short, important answers (refunds, delivery) that nobody should have to click for.
- **Avoid when:** answers are longer than 3 lines.
- **Mobile (390):** one column.
- **Pairs with:** [editorial](styles.md#editorial), [food craft](styles.md#food-craft), [wellness](styles.md#wellness), [Swiss](styles.md#swiss).

#### Accordion + contact card
- **What:** the accordion with a card beside it: who answers, a line, a contact button.
- **Wireframe:** [faq/with-contact](../../../atlas/layouts/faq/with-contact.svg)
- **Use when:** a human answers fast and that is part of the offer.
- **Avoid when:** the card is a dead "Contact us" with no person or time.
- **Mobile (390):** the card after the accordion.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [corporate modernism](styles.md#corporate-modernism).

## Trust / security

Part 7 of the landing. For low-risk products, fold it into the FAQ.

#### Certifications + claims
- **What:** the trust statement and a link to the security page left; 4 certification cards right.
- **Wireframe:** [trust/badges](../../../atlas/layouts/trust/badges.svg)
- **Use when:** you hold real certifications (SOC 2, ISO 27001, GDPR DPA, HIPAA).
- **Avoid when:** the badges are invented or only "bank-grade security". Placeholder label if pending.
- **Mobile (390):** 2 × 2 cards.
- **Pairs with:** [corporate modernism](styles.md#corporate-modernism), [Swiss](styles.md#swiss).

#### Plain claims list
- **What:** one statement left; 4 ruled claims right, each a title and two lines.
- **Wireframe:** [trust/claims](../../../atlas/layouts/trust/claims.svg)
- **Use when:** the guarantees are policies (refunds, ownership, deletion, buyer protection).
- **Avoid when:** the claims are vague.
- **Mobile (390):** stacked.
- **Pairs with:** [editorial](styles.md#editorial), [Swiss](styles.md#swiss), [food craft](styles.md#food-craft), [wellness](styles.md#wellness).

#### Where your data goes
- **What:** a 3-box diagram (your device → our servers in X → deleted after N days) with one line of fine print.
- **Wireframe:** [trust/data-flow](../../../atlas/layouts/trust/data-flow.svg)
- **Use when:** the buyer's fear is about data (health, finance, code, AI training).
- **Avoid when:** the flow is more complex than 4 boxes; link to a page.
- **Mobile (390):** the boxes stack with down arrows.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [Swiss](styles.md#swiss), [enterprise-dense](styles.md#enterprise-dense).

## CTA band

Part 10: one line that echoes the brand idea, and one action.

#### Centred
- **What:** a centred headline, a line, two buttons, on a tint.
- **Wireframe:** [cta/centered](../../../atlas/layouts/cta/centered.svg)
- **Use when:** the default.
- **Avoid when:** the headline is "Ready to get started?".
- **Mobile (390):** buttons stack full width.
- **Pairs with:** [every family](styles.md#contents).

#### Line left, buttons right
- **What:** a dark band: headline and line left, buttons right.
- **Wireframe:** [cta/split](../../../atlas/layouts/cta/split.svg)
- **Use when:** a compact close, or a second audience (sell on X, partner with us).
- **Avoid when:** it is the third dark band on the page.
- **Mobile (390):** stacked.
- **Pairs with:** [Swiss](styles.md#swiss), [corporate modernism](styles.md#corporate-modernism), [web brutalism](styles.md#web-brutalism).

#### Inline email form
- **What:** headline, line, one email field and a button in one row, a reassurance line.
- **Wireframe:** [cta/inline-form](../../../atlas/layouts/cta/inline-form.svg)
- **Use when:** the first step is just an email (a trial, a waitlist, a download).
- **Avoid when:** you then ask for 8 more fields.
- **Mobile (390):** the field and button stack.
- **Pairs with:** [every family](styles.md#contents).

#### Card with product crop
- **What:** a rounded tinted card: copy and buttons left, a crop of the product right.
- **Wireframe:** [cta/card-visual](../../../atlas/layouts/cta/card-visual.svg)
- **Use when:** one last look at the product before the footer.
- **Avoid when:** the crop is the same image as the hero.
- **Mobile (390):** copy, buttons, then the crop.
- **Pairs with:** [Swiss](styles.md#swiss), [Scandinavian](styles.md#scandinavian), [glassmorphism](styles.md#glassmorphism), [mesh gradient](styles.md#mesh-gradient).

#### Big closing line
- **What:** the brand line set huge on a dark band, one button.
- **Wireframe:** [cta/big-type](../../../atlas/layouts/cta/big-type.svg)
- **Use when:** the brand line is strong and short (6 words or fewer).
- **Avoid when:** the line needs explaining.
- **Mobile (390):** the line over 3–4 lines at about 44 px.
- **Pairs with:** [web brutalism](styles.md#web-brutalism), [editorial](styles.md#editorial), [risograph](styles.md#riso), [letterpress](styles.md#letterpress).

## Newsletter

#### One-line strip
- **What:** a title and line left, the field and button right, between two rules.
- **Wireframe:** [newsletter/inline](../../../atlas/layouts/newsletter/inline.svg)
- **Use when:** above the footer on blogs and docs.
- **Avoid when:** it competes with the main CTA on a product landing.
- **Mobile (390):** stacked.
- **Pairs with:** [every family](styles.md#contents).

#### Centred card
- **What:** a card on a tint: title, line, field + button, "no spam" line.
- **Wireframe:** [newsletter/card](../../../atlas/layouts/newsletter/card.svg)
- **Use when:** the newsletter is a product in itself.
- **Avoid when:** it is also a popup; pick one.
- **Mobile (390):** the card loses its border.
- **Pairs with:** [editorial](styles.md#editorial), [Scandinavian](styles.md#scandinavian).

#### Split with image
- **What:** an image left; the pitch, field and button right.
- **Wireframe:** [newsletter/split-image](../../../atlas/layouts/newsletter/split-image.svg)
- **Use when:** a photo-led brand (food, travel, craft).
- **Avoid when:** the image is generic.
- **Mobile (390):** the image cropped, then the form.
- **Pairs with:** [editorial photography](styles.md#editorial-photo), [food craft](styles.md#food-craft), [wellness](styles.md#wellness).

#### Form + past issue
- **What:** the pitch with 4 checks and the form left; a thumbnail of a real past issue right.
- **Wireframe:** [newsletter/issue](../../../atlas/layouts/newsletter/issue.svg)
- **Use when:** you can show what subscribers get.
- **Avoid when:** there is no past issue yet.
- **Mobile (390):** the form, then the issue.
- **Pairs with:** [editorial](styles.md#editorial), [Swiss](styles.md#swiss).

## Team

#### Photo grid
- **What:** 4 per row: photo, name, role.
- **Wireframe:** [team/grid](../../../atlas/layouts/team/grid.svg)
- **Use when:** you have consistent real photos.
- **Avoid when:** some photos are missing (gradient initials are a tell) or AI-made.
- **Mobile (390):** 2 per row.
- **Pairs with:** [every family](styles.md#contents).

#### Compact list, no photos
- **What:** names and roles in 3 ruled columns.
- **Wireframe:** [team/list](../../../atlas/layouts/team/list.svg)
- **Use when:** no photos, a large team, or a studio that credits people per project.
- **Avoid when:** —
- **Mobile (390):** one column.
- **Pairs with:** [Swiss](styles.md#swiss), [editorial](styles.md#editorial), [web brutalism](styles.md#web-brutalism).

#### Founder letter
- **What:** a portrait left; a letter with a signature right.
- **Wireframe:** [team/founder](../../../atlas/layouts/team/founder.svg)
- **Use when:** an about page where the founder's reason is the brand.
- **Avoid when:** the letter is corporate filler.
- **Mobile (390):** the portrait, then the letter.
- **Pairs with:** [editorial](styles.md#editorial), [food craft](styles.md#food-craft), [wellness](styles.md#wellness), [luxury](styles.md#luxury), [minimalism](styles.md#minimalism).

#### Avatar cluster + hiring
- **What:** a row of small faces, a line about the team and an "open roles" button.
- **Wireframe:** [team/hiring](../../../atlas/layouts/team/hiring.svg)
- **Use when:** a short team mention on the landing that leads to careers.
- **Avoid when:** the avatars are not real people.
- **Mobile (390):** the same, avatars smaller.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [neobrutalism](styles.md#neobrutalism).

#### Filterable grid
- **What:** department chips over the photo grid.
- **Wireframe:** [team/filter](../../../atlas/layouts/team/filter.svg)
- **Use when:** 20+ people.
- **Avoid when:** a filter returns 1 person.
- **Mobile (390):** chips wrap; 2 per row.
- **Pairs with:** [corporate modernism](styles.md#corporate-modernism), [Swiss](styles.md#swiss).

## Blog index / article

#### Featured post + grid
- **What:** the latest post large (image + title + excerpt + author), then 3 cards.
- **Wireframe:** [blog/featured](../../../atlas/layouts/blog/featured.svg)
- **Use when:** posts have good images and one post deserves the top.
- **Avoid when:** every post uses the same stock cover.
- **Mobile (390):** the featured post, then a sideways scroller.
- **Pairs with:** [editorial](styles.md#editorial), [Scandinavian](styles.md#scandinavian).

#### Dated list
- **What:** date column left, title and excerpt right, ruled rows, no images.
- **Wireframe:** [blog/list](../../../atlas/layouts/blog/list.svg)
- **Use when:** text-first blogs, changelogs, engineering notes.
- **Avoid when:** —
- **Mobile (390):** the date above each title.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [Swiss](styles.md#swiss), [web brutalism](styles.md#web-brutalism).

#### Grid + sidebar
- **What:** a 2-column post grid with a sidebar: search, categories, newsletter.
- **Wireframe:** [blog/sidebar](../../../atlas/layouts/blog/sidebar.svg)
- **Use when:** large blogs where readers browse by topic.
- **Avoid when:** fewer than 10 posts.
- **Mobile (390):** categories become chips on top; the sidebar is dropped.
- **Pairs with:** [corporate modernism](styles.md#corporate-modernism), [editorial](styles.md#editorial).

#### Magazine front
- **What:** a lead story left, 4 small headlines with thumbnails right, then a row of 4.
- **Wireframe:** [blog/magazine](../../../atlas/layouts/blog/magazine.svg)
- **Use when:** publishing is the business (a magazine, a media brand).
- **Avoid when:** you publish once a month.
- **Mobile (390):** lead story, then the small list, then a scroller.
- **Pairs with:** [editorial](styles.md#editorial), [risograph](styles.md#riso), [letterpress](styles.md#letterpress).

#### Article
- **What:** one reading column of 640–720 px: category, title, author, image, text with headings and a pull quote.
- **Wireframe:** [blog/article](../../../atlas/layouts/blog/article.svg)
- **Use when:** every article; line length 60–75 characters.
- **Avoid when:** —
- **Mobile (390):** the same column, 17–18 px body.
- **Pairs with:** [every family](styles.md#contents).

#### Article + sticky contents
- **What:** a sticky table of contents left, the article centre, a small sticky card right.
- **Wireframe:** [blog/article-toc](../../../atlas/layouts/blog/article-toc.svg)
- **Use when:** long guides and docs-style posts.
- **Avoid when:** the article has 3 headings.
- **Mobile (390):** the contents become a select at the top; the card is dropped.
- **Pairs with:** [Swiss](styles.md#swiss), [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [editorial](styles.md#editorial).

## Portfolio / gallery

#### Uniform grid
- **What:** 3 per row: image, title, a small line.
- **Wireframe:** [portfolio/grid](../../../atlas/layouts/portfolio/grid.svg)
- **Use when:** the default for listings, products and projects with consistent images.
- **Avoid when:** the images have different shapes (use masonry).
- **Mobile (390):** one column, or 2 for products.
- **Pairs with:** [every family](styles.md#contents).

#### Masonry
- **What:** columns of images at their own heights.
- **Wireframe:** [portfolio/masonry](../../../atlas/layouts/portfolio/masonry.svg)
- **Use when:** photography, interiors, mixed formats.
- **Avoid when:** the reading order matters.
- **Mobile (390):** one column (or 2 for small images).
- **Pairs with:** [editorial photography](styles.md#editorial-photo), [editorial](styles.md#editorial), [food craft](styles.md#food-craft), [wellness](styles.md#wellness).

#### Asymmetric, one featured
- **What:** one large image and two stacked beside it, then a row of three.
- **Wireframe:** [portfolio/featured](../../../atlas/layouts/portfolio/featured.svg)
- **Use when:** one project leads.
- **Avoid when:** —
- **Mobile (390):** the featured image, then the rest stacked or in a scroller.
- **Pairs with:** [editorial](styles.md#editorial), [luxury](styles.md#luxury), [minimalism](styles.md#minimalism), [Swiss](styles.md#swiss).

#### Alternating case studies
- **What:** rows of image + title, story, two result numbers and a link, alternating sides.
- **Wireframe:** [portfolio/case-rows](../../../atlas/layouts/portfolio/case-rows.svg)
- **Use when:** agencies and studios that sell results; services of a local business.
- **Avoid when:** more than 4 rows on one page.
- **Mobile (390):** image first in every row.
- **Pairs with:** [editorial](styles.md#editorial), [corporate modernism](styles.md#corporate-modernism), [food craft](styles.md#food-craft), [wellness](styles.md#wellness).

#### One project per screen
- **What:** each project is a full-bleed image with its title on a scrim.
- **Wireframe:** [portfolio/full-bleed](../../../atlas/layouts/portfolio/full-bleed.svg)
- **Use when:** few, strong projects; the images carry it.
- **Avoid when:** the images are weak or similar.
- **Mobile (390):** portrait crops chosen by hand.
- **Pairs with:** [editorial photography](styles.md#editorial-photo), [luxury](styles.md#luxury), [minimalism](styles.md#minimalism), [editorial](styles.md#editorial).

#### Horizontal scroller
- **What:** a heading with arrows; a track of cards with the last one cut at the edge.
- **Wireframe:** [portfolio/scroller](../../../atlas/layouts/portfolio/scroller.svg)
- **Use when:** a secondary set (more projects, related products).
- **Avoid when:** it holds the main content; cards off to the side are easy to miss. Arrows and keys must work.
- **Mobile (390):** swipe, the next card peeking.
- **Pairs with:** [neobrutalism](styles.md#neobrutalism), [editorial photography](styles.md#editorial-photo), [Scandinavian](styles.md#scandinavian).

## Event schedule

#### Ruled timetable
- **What:** rows of time, talk title and speaker, track badge, separated by rules.
- **Wireframe:** [events/ruled](../../../atlas/layouts/events/ruled.svg)
- **Use when:** one day, one track.
- **Avoid when:** —
- **Mobile (390):** time above each title.
- **Pairs with:** [Swiss](styles.md#swiss), [editorial](styles.md#editorial), [web brutalism](styles.md#web-brutalism).

#### Day tabs
- **What:** a day switcher over the ruled list.
- **Wireframe:** [events/day-tabs](../../../atlas/layouts/events/day-tabs.svg)
- **Use when:** 2–4 days.
- **Avoid when:** people need to compare days.
- **Mobile (390):** the switcher stays at the top.
- **Pairs with:** [every family](styles.md#contents).

#### Multi-track grid
- **What:** times down the left, tracks as columns, sessions as blocks spanning their length.
- **Wireframe:** [events/tracks](../../../atlas/layouts/events/tracks.svg)
- **Use when:** parallel tracks where clashes matter.
- **Avoid when:** one track.
- **Mobile (390):** a track switcher and one list; never the grid.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [Swiss](styles.md#swiss).

#### Days as panels
- **What:** one card per day with its sessions.
- **Wireframe:** [events/day-cards](../../../atlas/layouts/events/day-cards.svg)
- **Use when:** a short overview (3 days, 4 highlights each) linking to the full schedule.
- **Avoid when:** it is the full schedule.
- **Mobile (390):** a sideways scroller.
- **Pairs with:** [neobrutalism](styles.md#neobrutalism), [Scandinavian](styles.md#scandinavian).

## Contact

#### Centred form
- **What:** heading, name, email, message, one button, a response-time line.
- **Wireframe:** [contact/centered](../../../atlas/layouts/contact/centered.svg)
- **Use when:** one kind of request.
- **Avoid when:** you ask for phone, company size and budget without a reason.
- **Mobile (390):** the same.
- **Pairs with:** [every family](styles.md#contents).

#### Details left, form right
- **What:** heading and email / phone / address rows left; the form in a card right.
- **Wireframe:** [contact/split](../../../atlas/layouts/contact/split.svg)
- **Use when:** B2B and services, where some people prefer to call.
- **Avoid when:** the details are generic (info@).
- **Mobile (390):** details, then the form without its card.
- **Pairs with:** [corporate modernism](styles.md#corporate-modernism), [Swiss](styles.md#swiss).

#### Map + address and hours
- **What:** a map left; address, hours table and "call" / "directions" buttons right.
- **Wireframe:** [contact/map](../../../atlas/layouts/contact/map.svg)
- **Use when:** a place people visit; it is the closing CTA of a local landing.
- **Avoid when:** the business is online only.
- **Mobile (390):** the map, then tap-to-call and directions as full-width buttons.
- **Pairs with:** [food craft](styles.md#food-craft), [wellness](styles.md#wellness), [editorial photography](styles.md#editorial-photo), [risograph](styles.md#riso), [letterpress](styles.md#letterpress).

#### Routes by need
- **What:** 3 cards: sales, support, press, each with who answers and a link.
- **Wireframe:** [contact/routes](../../../atlas/layouts/contact/routes.svg)
- **Use when:** different teams answer different requests.
- **Avoid when:** one person answers everything.
- **Mobile (390):** stacked.
- **Pairs with:** [corporate modernism](styles.md#corporate-modernism), [Swiss](styles.md#swiss).

#### Help hub
- **What:** a search field, popular topics as chips, 3 route cards.
- **Wireframe:** [contact/help-hub](../../../atlas/layouts/contact/help-hub.svg)
- **Use when:** most questions already have answers in docs.
- **Avoid when:** there is no help content behind the search.
- **Mobile (390):** search full width; cards stack.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [corporate modernism](styles.md#corporate-modernism).

## Footer

Links, the placeholder-domain note and the credits line (part 11).

#### Mega footer
- **What:** logo, a line and the newsletter left; 4 link columns right; legal and social icons under a rule.
- **Wireframe:** [footer/mega](../../../atlas/layouts/footer/mega.svg)
- **Use when:** products with docs, company and legal pages.
- **Avoid when:** half the links are "Coming soon".
- **Mobile (390):** columns 2 per row (or accordions).
- **Pairs with:** [every family](styles.md#contents).

#### One line
- **What:** logo, 4 links and icons on one line.
- **Wireframe:** [footer/minimal](../../../atlas/layouts/footer/minimal.svg)
- **Use when:** small sites and one-page products.
- **Avoid when:** legal pages are missing; they still need a link.
- **Mobile (390):** two lines.
- **Pairs with:** [web brutalism](styles.md#web-brutalism), [luxury](styles.md#luxury), [minimalism](styles.md#minimalism), [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal).

#### Centred stack
- **What:** logo, links, icons and the legal line, centred.
- **Wireframe:** [footer/centered](../../../atlas/layouts/footer/centered.svg)
- **Use when:** consumer brands with few pages.
- **Avoid when:** more than 6 links.
- **Mobile (390):** links wrap to two lines.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [neobrutalism](styles.md#neobrutalism), [luxury](styles.md#luxury), [minimalism](styles.md#minimalism).

#### Giant wordmark
- **What:** link columns, then the wordmark across the full width, then the legal line.
- **Wireframe:** [footer/wordmark](../../../atlas/layouts/footer/wordmark.svg)
- **Use when:** the wordmark is strong and you want a confident end.
- **Avoid when:** the logo is a symbol only.
- **Mobile (390):** the wordmark scales to the width.
- **Pairs with:** [web brutalism](styles.md#web-brutalism), [editorial](styles.md#editorial), [Swiss](styles.md#swiss).

#### Address, hours, map
- **What:** logo and address, an hours table, a small map, the legal line.
- **Wireframe:** [footer/local](../../../atlas/layouts/footer/local.svg)
- **Use when:** local businesses.
- **Avoid when:** —
- **Mobile (390):** stacked, map last.
- **Pairs with:** [food craft](styles.md#food-craft), [wellness](styles.md#wellness), [risograph](styles.md#riso), [letterpress](styles.md#letterpress), [editorial photography](styles.md#editorial-photo).

---

## Changelog

#### Dated entries
- **What:** date and version left; title, screenshot, text and checks right.
- **Wireframe:** [changelog/dated](../../../atlas/layouts/changelog/dated.svg)
- **Use when:** releases with visible changes.
- **Avoid when:** —
- **Mobile (390):** date above each entry.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [Swiss](styles.md#swiss).

#### Entry cards
- **What:** each release as a row: screenshot left, badge, title, line and link right.
- **Wireframe:** [changelog/cards](../../../atlas/layouts/changelog/cards.svg)
- **Use when:** a feature-announcement feed that links to full posts.
- **Avoid when:** the releases are small fixes.
- **Mobile (390):** image, then text.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [Swiss](styles.md#swiss).

#### Compact typed list
- **What:** one ruled line per change: date, a type badge (new / improved / fixed), the change.
- **Wireframe:** [changelog/compact](../../../atlas/layouts/changelog/compact.svg)
- **Use when:** frequent small releases; developers scanning for a fix.
- **Avoid when:** —
- **Mobile (390):** date and badge above the line.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [web brutalism](styles.md#web-brutalism), [enterprise-dense](styles.md#enterprise-dense).

## Docs landing

#### Search-first docs home
- **What:** a title, a search field and popular topics on a tint; 6 section cards below.
- **Wireframe:** [docs/search-first](../../../atlas/layouts/docs/search-first.svg)
- **Use when:** the docs home.
- **Avoid when:** the cards carry decorative icons only; name the section, list 3 links.
- **Mobile (390):** search full width; cards stack.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [Swiss](styles.md#swiss).

#### Three-pane docs page
- **What:** a grouped navigation left, the page centre (with code), "on this page" right.
- **Wireframe:** [docs/three-pane](../../../atlas/layouts/docs/three-pane.svg)
- **Use when:** every docs page.
- **Avoid when:** —
- **Mobile (390):** navigation behind ≡; "on this page" becomes a select.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [Swiss](styles.md#swiss), [enterprise-dense](styles.md#enterprise-dense).

#### Quickstart by stack
- **What:** a stack switcher (tabs) over one code block, then 3 next-step cards.
- **Wireframe:** [docs/quickstart](../../../atlas/layouts/docs/quickstart.svg)
- **Use when:** SDKs in several languages.
- **Avoid when:** one language.
- **Mobile (390):** tabs scroll sideways; code scrolls sideways.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal).

## Careers

#### Values + open roles
- **What:** a pitch with a team photo, 3 values as text, then open roles grouped by team.
- **Wireframe:** [careers/roles](../../../atlas/layouts/careers/roles.svg)
- **Use when:** under 20 open roles.
- **Avoid when:** the values are generic ("We care").
- **Mobile (390):** stacked; roles as rows.
- **Pairs with:** [every family](styles.md#contents).

#### Searchable roles table
- **What:** search and two filters over a table of roles (title, team, location, type).
- **Wireframe:** [careers/table](../../../atlas/layouts/careers/table.svg)
- **Use when:** 20+ roles.
- **Avoid when:** —
- **Mobile (390):** filters stack; the table becomes a list.
- **Pairs with:** [corporate modernism](styles.md#corporate-modernism), [enterprise-dense](styles.md#enterprise-dense).

#### Role page + apply card
- **What:** the job text left (chips for location and type, what you'll do, what you bring); a sticky apply card right.
- **Wireframe:** [careers/role](../../../atlas/layouts/careers/role.svg)
- **Use when:** every role page.
- **Avoid when:** —
- **Mobile (390):** the apply button sticks to the bottom of the screen.
- **Pairs with:** [every family](styles.md#contents).

## 404

#### Centred message
- **What:** "404" large, one line, two buttons (home, search).
- **Wireframe:** [not-found/centered](../../../atlas/layouts/not-found/centered.svg)
- **Use when:** the default.
- **Avoid when:** a joke takes the place of a way out.
- **Mobile (390):** the same.
- **Pairs with:** [every family](styles.md#contents).

#### Search + popular pages
- **What:** a heading, a search field, a list of popular pages.
- **Wireframe:** [not-found/search](../../../atlas/layouts/not-found/search.svg)
- **Use when:** docs and large sites.
- **Avoid when:** —
- **Mobile (390):** the same.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [Swiss](styles.md#swiss).

#### Split with useful links
- **What:** the message left, 4 link cards right.
- **Wireframe:** [not-found/links](../../../atlas/layouts/not-found/links.svg)
- **Use when:** a product site with clear main destinations.
- **Avoid when:** —
- **Mobile (390):** message, then the cards.
- **Pairs with:** [every family](styles.md#contents).

## Legal / privacy

#### Sticky contents + text
- **What:** a sticky table of contents left, the legal text right with numbered headings.
- **Wireframe:** [legal/toc](../../../atlas/layouts/legal/toc.svg)
- **Use when:** terms, privacy, DPA.
- **Avoid when:** —
- **Mobile (390):** contents as a select at the top.
- **Pairs with:** [every family](styles.md#contents).

#### Plain-words summary first
- **What:** a tinted box "in plain words" with 5 checks, then the full text.
- **Wireframe:** [legal/summary](../../../atlas/layouts/legal/summary.svg)
- **Use when:** privacy is part of the pitch (health, finance, children, AI).
- **Avoid when:** the summary says something the full text does not.
- **Mobile (390):** the same column.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [editorial](styles.md#editorial), [Swiss](styles.md#swiss).

## Waitlist

#### Centred email capture
- **What:** logo, headline, line, one email field + button, a count of people waiting.
- **Wireframe:** [waitlist/centered](../../../atlas/layouts/waitlist/centered.svg)
- **Use when:** before launch, with nothing to show yet.
- **Avoid when:** the count is invented.
- **Mobile (390):** field and button stack.
- **Pairs with:** [web brutalism](styles.md#web-brutalism), [editorial](styles.md#editorial), [glassmorphism](styles.md#glassmorphism), [mesh gradient](styles.md#mesh-gradient).

#### Form + product preview
- **What:** the form left, a preview of the product right.
- **Wireframe:** [waitlist/split](../../../atlas/layouts/waitlist/split.svg)
- **Use when:** you have a working screen to show.
- **Avoid when:** the preview is a mock you can't ship.
- **Mobile (390):** form first, then the preview crop.
- **Pairs with:** [Swiss](styles.md#swiss), [Scandinavian](styles.md#scandinavian).

#### After signup: your place
- **What:** "you're in", the position number large, the referral link with copy, 3 share buttons, a progress bar.
- **Wireframe:** [waitlist/position](../../../atlas/layouts/waitlist/position.svg)
- **Use when:** a referral waitlist.
- **Avoid when:** referrals don't actually move people up.
- **Mobile (390):** the same card full width.
- **Pairs with:** [neobrutalism](styles.md#neobrutalism), [Scandinavian](styles.md#scandinavian).

## Comparison "vs" page

Fair claims only, with dates and sources; competitors' names and logos used as references, never as your own branding.

#### Us vs them table
- **What:** a centred "X vs Y" headline, then a two-column table with your column tinted.
- **Wireframe:** [vs/table](../../../atlas/layouts/vs/table.svg)
- **Use when:** buyers search "X vs Y" and the differences are factual.
- **Avoid when:** you win every row; nobody believes it.
- **Mobile (390):** a switcher between the two columns.
- **Pairs with:** [Swiss](styles.md#swiss), [enterprise-dense](styles.md#enterprise-dense), [corporate modernism](styles.md#corporate-modernism).

#### Switching guide
- **What:** the reason to switch left, migration steps on a timeline right, then a quote from someone who switched.
- **Wireframe:** [vs/switch](../../../atlas/layouts/vs/switch.svg)
- **Use when:** the fear is the migration, not the product.
- **Avoid when:** there is no import tool.
- **Mobile (390):** stacked.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [corporate modernism](styles.md#corporate-modernism).

#### Side-by-side columns
- **What:** two cards: theirs (crosses, tinted) and yours (checks, dark), a fairness note under them.
- **Wireframe:** [vs/columns](../../../atlas/layouts/vs/columns.svg)
- **Use when:** a short comparison on the landing or a vs page.
- **Avoid when:** —
- **Mobile (390):** theirs, then yours.
- **Pairs with:** [web brutalism](styles.md#web-brutalism), [neobrutalism](styles.md#neobrutalism), [Swiss](styles.md#swiss).

---

## Login

#### Centred card
- **What:** logo, title, email, password, primary button, "or", SSO button, a link to sign up, on a tint.
- **Wireframe:** [login/card](../../../atlas/layouts/login/card.svg)
- **Use when:** the default.
- **Avoid when:** —
- **Mobile (390):** no card; fields full width on the page.
- **Pairs with:** [every family](styles.md#contents).

#### Form + brand panel
- **What:** the form left; a full-height brand image or product panel right.
- **Wireframe:** [login/split](../../../atlas/layouts/login/split.svg)
- **Use when:** consumer and brand-led products; the panel can carry news or a quote.
- **Avoid when:** the panel is a gradient blob.
- **Mobile (390):** the panel is dropped.
- **Pairs with:** [editorial photography](styles.md#editorial-photo), [Scandinavian](styles.md#scandinavian), [editorial](styles.md#editorial).

#### SSO first
- **What:** 3 provider buttons on top, "or", one email field with "email me a link".
- **Wireframe:** [login/sso](../../../atlas/layouts/login/sso.svg)
- **Use when:** B2B tools where most users come through Google, Microsoft or SAML.
- **Avoid when:** consumers who don't use those providers.
- **Mobile (390):** the same.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [corporate modernism](styles.md#corporate-modernism), [Swiss](styles.md#swiss).

#### One-time code
- **What:** a title, the address the code went to, 6 code boxes, one button, "resend".
- **Wireframe:** [login/code](../../../atlas/layouts/login/code.svg)
- **Use when:** passwordless login and two-factor steps.
- **Avoid when:** —
- **Mobile (390):** the boxes fill the width; the OS can autofill the code.
- **Pairs with:** [every family](styles.md#contents).

## Register

#### Centred card
- **What:** name, email, password, a terms checkbox, one button.
- **Wireframe:** [register/card](../../../atlas/layouts/register/card.svg)
- **Use when:** the default; 3 fields at most.
- **Avoid when:** you ask for company size and role before the product is used; ask in onboarding.
- **Mobile (390):** no card.
- **Pairs with:** [every family](styles.md#contents).

#### Form + proof panel
- **What:** the form left; a tinted panel right with a quote, 3 checks and a few logos.
- **Wireframe:** [register/split-proof](../../../atlas/layouts/register/split-proof.svg)
- **Use when:** B2B trials where doubt peaks at signup.
- **Avoid when:** the proof is invented.
- **Mobile (390):** the panel is dropped; one line of proof under the button.
- **Pairs with:** [corporate modernism](styles.md#corporate-modernism), [Swiss](styles.md#swiss).

#### Multi-step signup
- **What:** a stepper, then 2–3 fields per step, back and next.
- **Wireframe:** [register/steps](../../../atlas/layouts/register/steps.svg)
- **Use when:** signup genuinely needs more (a business account, a medical profile).
- **Avoid when:** it is 4 fields split into steps to look easy.
- **Mobile (390):** the same; buttons full width.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [corporate modernism](styles.md#corporate-modernism).

## Onboarding

#### Setup checklist
- **What:** inside the app: a progress bar and 5 tasks (done ones checked, the next one with a button), a short video card beside it.
- **Wireframe:** [onboarding/checklist](../../../atlas/layouts/onboarding/checklist.svg)
- **Use when:** setup has 3–6 independent steps (import, invite, connect).
- **Avoid when:** the checklist never goes away; hide it when done.
- **Mobile (390):** the list, then the video.
- **Pairs with:** [every family](styles.md#contents).

#### One question per screen
- **What:** a stepper at the top, one question as large text, 4 option cards, back and next.
- **Wireframe:** [onboarding/wizard](../../../atlas/layouts/onboarding/wizard.svg)
- **Use when:** the answers change what the product shows (role, use case, goal).
- **Avoid when:** the answers are only for your marketing.
- **Mobile (390):** options stack; buttons at the bottom.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [neobrutalism](styles.md#neobrutalism), [Swiss](styles.md#swiss).

#### Start from a template
- **What:** a title, category chips and a grid of template previews; "start blank" as a secondary button.
- **Wireframe:** [onboarding/templates](../../../atlas/layouts/onboarding/templates.svg)
- **Use when:** a blank canvas is the main reason people quit (editors, builders, trackers).
- **Avoid when:** the templates are empty shells.
- **Mobile (390):** one column of previews.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [Swiss](styles.md#swiss).

## App shell

web-unslop: the sidebar is compact and task-based; no metrics or counters in it; the account sits at the bottom of the sidebar or top-right; settings, billing and team are grouped.

#### Sidebar
- **What:** a left sidebar (logo, 5–8 tasks, a group label, account card at the bottom); a top bar with breadcrumb, search and one primary action.
- **Wireframe:** [shell/sidebar](../../../atlas/layouts/shell/sidebar.svg)
- **Use when:** the default for tools with 5+ areas.
- **Avoid when:** the sidebar holds dashboard numbers. Tell: hero-size type in the sidebar.
- **Mobile (390):** ≡ opens the sidebar as a drawer; the title and the account in the top bar.
- **Pairs with:** [every family](styles.md#contents).

#### Top bar
- **What:** logo, 5 links with the active one underlined, search and account right; content centred.
- **Wireframe:** [shell/topbar](../../../atlas/layouts/shell/topbar.svg)
- **Use when:** apps with 3–5 areas and content that wants full width (consumer, analytics).
- **Avoid when:** areas will grow past 6.
- **Mobile (390):** ≡, or a bottom tab bar for 3–5 areas.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [Swiss](styles.md#swiss).

#### Icon rail + list
- **What:** a dark icon rail for areas, a secondary list for the area's items, then the work area.
- **Wireframe:** [shell/rail](../../../atlas/layouts/shell/rail.svg)
- **Use when:** many objects per area (mail, chat, projects, files).
- **Avoid when:** icons without tooltips; or only 3 areas.
- **Mobile (390):** the rail becomes a bottom tab bar; the list is the first screen.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal).

#### List + inspector
- **What:** sidebar, a list in the middle with the selected row, an inspector panel right.
- **Wireframe:** [shell/three-pane](../../../atlas/layouts/shell/three-pane.svg)
- **Use when:** operator tools (the `product.md` default): triage, review, CRM.
- **Avoid when:** the inspector repeats the row.
- **Mobile (390):** the list; a tap opens the item as a new screen.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [Swiss](styles.md#swiss), [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal).

#### Command palette (⌘K)
- **What:** a centred search panel over the dimmed app: grouped results (pages, actions, recent).
- **Wireframe:** [shell/palette](../../../atlas/layouts/shell/palette.svg)
- **Use when:** power users and keyboard workflows; add it to any shell.
- **Avoid when:** it is the only way to reach something.
- **Mobile (390):** full screen.
- **Pairs with:** [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal), [Swiss](styles.md#swiss), [enterprise-dense](styles.md#enterprise-dense).

## Dashboard

web-unslop: the dashboard answers "what changed and what needs attention?"; fewer, better KPIs with trend or limit; colour only in charts, statuses and deltas.

#### KPIs + trend + attention
- **What:** a title with a date range; 3 KPI cards with delta and sparkline; a main chart beside a "needs attention" list with actions.
- **Wireframe:** [dashboard/kpis](../../../atlas/layouts/dashboard/kpis.svg)
- **Use when:** the default overview.
- **Avoid when:** the same KPIs appear on other pages. Tell: repeated KPI strips, naked numbers.
- **Mobile (390):** KPIs in a sideways scroller, chart, then the list.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [Swiss](styles.md#swiss).

#### Needs-you first
- **What:** a tinted list of the 3 things that need the user (with a button each) above two charts.
- **Wireframe:** [dashboard/attention](../../../atlas/layouts/dashboard/attention.svg)
- **Use when:** the user's job is to act, not to watch (approvals, reviews, failures).
- **Avoid when:** nothing needs action most days; then show an "all clear" state.
- **Mobile (390):** the list, then charts stacked.
- **Pairs with:** [every family](styles.md#contents).

#### Metric tabs + breakdown
- **What:** KPI tabs (each a label and number) switch one big chart; a ranked table under it.
- **Wireframe:** [dashboard/breakdown](../../../atlas/layouts/dashboard/breakdown.svg)
- **Use when:** analytics: trend plus breakdown of one metric at a time.
- **Avoid when:** the table repeats the chart.
- **Mobile (390):** 4 tabs in one row, chart, then a list.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [Swiss](styles.md#swiss).

#### Activity feed + side stats
- **What:** a timeline of recent events; a column of 3 small stats with sparklines.
- **Wireframe:** [dashboard/feed](../../../atlas/layouts/dashboard/feed.svg)
- **Use when:** collaborative tools where "what happened" is the main question.
- **Avoid when:** the feed is noise (every view logged).
- **Mobile (390):** the feed; stats after.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [Swiss](styles.md#swiss).

## List / table

web-unslop: name left, the important number or status right, metadata between; repeated row actions in a ⋯ menu; dates only prominent when recency decides.

#### Data table
- **What:** title and primary action, a toolbar (search, filter chips, export), the table, pagination.
- **Wireframe:** [list/table](../../../atlas/layouts/list/table.svg)
- **Use when:** the default for many objects with several attributes.
- **Avoid when:** 3 buttons per row. Tell: button clutter.
- **Mobile (390):** search and filters stack; rows become a list.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [Swiss](styles.md#swiss), [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal).

#### Selection + bulk bar
- **What:** a table with checkboxes; a floating bar appears with the count and bulk actions.
- **Wireframe:** [list/bulk](../../../atlas/layouts/list/bulk.svg)
- **Use when:** users act on many rows at once (archive, assign, export).
- **Avoid when:** nothing can be done in bulk.
- **Mobile (390):** long-press to select; the bar docks at the bottom.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense).

#### Card grid
- **What:** cards with a preview image, title, meta, a status badge and an owner avatar.
- **Wireframe:** [list/cards](../../../atlas/layouts/list/cards.svg)
- **Use when:** the objects are visual (designs, files, listings, projects).
- **Avoid when:** the objects have no preview; a list scans faster.
- **Mobile (390):** one column.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [Swiss](styles.md#swiss).

#### Board (kanban)
- **What:** columns per status, cards with title, line, tag and owner.
- **Wireframe:** [list/kanban](../../../atlas/layouts/list/kanban.svg)
- **Use when:** work moves through stages and people drag it.
- **Avoid when:** more than 6 columns, or the status rarely changes.
- **Mobile (390):** one column at a time, swipe between them.
- **Pairs with:** [neobrutalism](styles.md#neobrutalism), [Scandinavian](styles.md#scandinavian), [Swiss](styles.md#swiss).

#### Grouped list
- **What:** a list with group labels (today, yesterday; or by project).
- **Wireframe:** [list/grouped](../../../atlas/layouts/list/grouped.svg)
- **Use when:** time or category is the main way people scan.
- **Avoid when:** groups hold one row each.
- **Mobile (390):** sticky group labels.
- **Pairs with:** [every family](styles.md#contents).

## Detail / inspector

#### List + detail
- **What:** a narrow list left with the selected row; the record right with a title, actions, tabs and content.
- **Wireframe:** [detail/master-detail](../../../atlas/layouts/detail/master-detail.svg)
- **Use when:** users go through records one by one (mail, tickets, leads).
- **Avoid when:** records are rarely opened.
- **Mobile (390):** the list; the record opens as its own screen with a back arrow.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [Swiss](styles.md#swiss).

#### Table + inspector panel
- **What:** the table stays; a right panel edits the selected row (fields, metadata, one action).
- **Wireframe:** [detail/inspector](../../../atlas/layouts/detail/inspector.svg)
- **Use when:** quick edits without losing the list (the `product.md` operator layout).
- **Avoid when:** the record needs more than one panel of fields.
- **Mobile (390):** the panel becomes a bottom sheet.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal).

#### Full record page
- **What:** breadcrumb, title with status badges and actions, tabs, main content left, a key-value card right.
- **Wireframe:** [detail/page](../../../atlas/layouts/detail/page.svg)
- **Use when:** rich objects (a customer, a project, an order).
- **Avoid when:** the key-value card repeats the header.
- **Mobile (390):** header, tabs, then the key-values before the content.
- **Pairs with:** [every family](styles.md#contents).

#### Record + activity log
- **What:** the record's fields left; its activity timeline and a comment box right.
- **Wireframe:** [detail/activity](../../../atlas/layouts/detail/activity.svg)
- **Use when:** audit and collaboration matter (who changed what).
- **Avoid when:** —
- **Mobile (390):** fields, then the log.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [corporate modernism](styles.md#corporate-modernism).

## Creation flow / form

web-unslop: required fields visible, advanced options collapsed, one obvious primary action, and designed success, error, loading and empty states.

#### Modal form
- **What:** a dialog over the dimmed app: title, 3 fields, "advanced options" collapsed, cancel and create.
- **Wireframe:** [form/modal](../../../atlas/layouts/form/modal.svg)
- **Use when:** creating a simple object without leaving the list.
- **Avoid when:** the form scrolls inside the modal; use a page.
- **Mobile (390):** full screen with the action at the top or bottom.
- **Pairs with:** [every family](styles.md#contents).

#### Sectioned page form
- **What:** each section has its label and a line left and its fields in a card right; save at the end.
- **Wireframe:** [form/page](../../../atlas/layouts/form/page.svg)
- **Use when:** long forms and settings-like creation.
- **Avoid when:** —
- **Mobile (390):** labels above their fields.
- **Pairs with:** [Swiss](styles.md#swiss), [corporate modernism](styles.md#corporate-modernism).

#### Multi-step form
- **What:** a stepper, one card of fields, back and next.
- **Wireframe:** [form/stepper](../../../atlas/layouts/form/stepper.svg)
- **Use when:** the later steps depend on earlier answers.
- **Avoid when:** it's one form split for no reason.
- **Mobile (390):** compact stepper; buttons at the bottom.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [corporate modernism](styles.md#corporate-modernism).

#### Form + live preview
- **What:** the fields left; a live preview of the result right (card, link preview, email).
- **Wireframe:** [form/preview](../../../atlas/layouts/form/preview.svg)
- **Use when:** the output is visible (a link card, an invoice, a page); for link tools include slug, domain, title, description, UTM and expiry.
- **Avoid when:** the preview is static.
- **Mobile (390):** fields, then a "preview" button or tab.
- **Pairs with:** [Swiss](styles.md#swiss), [Scandinavian](styles.md#scandinavian).

## Settings

#### Settings nav + sections
- **What:** a grouped settings menu left (account, workspace, billing, team), sections in cards right.
- **Wireframe:** [settings/side-nav](../../../atlas/layouts/settings/side-nav.svg)
- **Use when:** the default for apps with several settings areas.
- **Avoid when:** settings are scattered across the app instead.
- **Mobile (390):** the menu becomes a select or its own screen.
- **Pairs with:** [every family](styles.md#contents).

#### Tabbed settings
- **What:** tabs over rows of label + field; a danger zone card with a strong border at the end.
- **Wireframe:** [settings/tabs](../../../atlas/layouts/settings/tabs.svg)
- **Use when:** 3–5 settings groups.
- **Avoid when:** more than 6 tabs.
- **Mobile (390):** tabs scroll sideways; labels above fields.
- **Pairs with:** [every family](styles.md#contents).

#### Preference rows
- **What:** ruled rows: a title and a line left, a switch right.
- **Wireframe:** [settings/toggles](../../../atlas/layouts/settings/toggles.svg)
- **Use when:** notification and privacy preferences.
- **Avoid when:** a switch needs explaining in a modal.
- **Mobile (390):** the same.
- **Pairs with:** [every family](styles.md#contents).

## Billing / usage

web-unslop: plan, usage and invoices separated; usage against limits; the current plan shows what the next one unlocks; billing email, payment method and invoices visible.

#### Plan · usage · invoices
- **What:** tabs; the plan card and the payment card side by side; the invoices table below.
- **Wireframe:** [billing/tabs](../../../atlas/layouts/billing/tabs.svg)
- **Use when:** the default billing page.
- **Avoid when:** cards that do no billing task. Tell: dead cards.
- **Mobile (390):** cards stack; invoices as a list.
- **Pairs with:** [every family](styles.md#contents).

#### Usage against limits
- **What:** progress bars per metered item (used / limit), a usage chart, the reset date.
- **Wireframe:** [billing/usage](../../../atlas/layouts/billing/usage.svg)
- **Use when:** usage-based or capped plans.
- **Avoid when:** bars without the limit number.
- **Mobile (390):** the same; chart shorter.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [Swiss](styles.md#swiss).

#### Current plan → next plan
- **What:** the current plan card beside a dark card of what the next plan unlocks, with the upgrade button.
- **Wireframe:** [billing/upgrade](../../../atlas/layouts/billing/upgrade.svg)
- **Use when:** the upgrade path is the main billing action.
- **Avoid when:** the next plan's gain is unclear.
- **Mobile (390):** current, then next.
- **Pairs with:** [every family](styles.md#contents).

## Empty states

web-unslop: empty states explain what must happen before data appears.

#### First run: preview + one action
- **What:** a faded preview of what will appear, a title, a line, the create action and an import action.
- **Wireframe:** [empty/first-run](../../../atlas/layouts/empty/first-run.svg)
- **Use when:** the first visit to any list or dashboard.
- **Avoid when:** a cartoon illustration takes the place of the explanation.
- **Mobile (390):** the same, centred.
- **Pairs with:** [every family](styles.md#contents).

#### No results
- **What:** the search and active filters stay visible; an icon, why nothing matched, "clear filters".
- **Wireframe:** [empty/no-results](../../../atlas/layouts/empty/no-results.svg)
- **Use when:** search and filtered views.
- **Avoid when:** —
- **Mobile (390):** the same.
- **Pairs with:** [every family](styles.md#contents).

#### Sample data + import
- **What:** a strong-bordered banner "this is sample data" with "import yours", the table faded below.
- **Wireframe:** [empty/sample](../../../atlas/layouts/empty/sample.svg)
- **Use when:** the product only makes sense with data (analytics, CRM).
- **Avoid when:** the sample data can be mistaken for real data.
- **Mobile (390):** banner, then the list.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [Swiss](styles.md#swiss).

## Modals / drawers

#### Confirm dialog
- **What:** a small dialog: what will happen, cancel, and the action named by its verb ("Delete 3 files").
- **Wireframe:** [overlays/confirm](../../../atlas/layouts/overlays/confirm.svg)
- **Use when:** destructive or costly actions.
- **Avoid when:** the action is undoable; use a toast with "undo".
- **Mobile (390):** the dialog stays small; buttons full width.
- **Pairs with:** [every family](styles.md#contents).

#### Side drawer
- **What:** a full-height panel from the right over the dimmed app; fields; actions at the bottom.
- **Wireframe:** [overlays/drawer](../../../atlas/layouts/overlays/drawer.svg)
- **Use when:** editing while keeping the list in context.
- **Avoid when:** the form is short (use a modal) or wide (use a page).
- **Mobile (390):** full screen.
- **Pairs with:** [every family](styles.md#contents).

#### Menu → bottom sheet
- **What:** a popover menu at the ⋯ button on desktop; the same items in a bottom sheet with a handle on mobile.
- **Wireframe:** [overlays/sheet](../../../atlas/layouts/overlays/sheet.svg)
- **Use when:** row and object actions.
- **Avoid when:** —
- **Mobile (390):** the sheet, background dimmed.
- **Pairs with:** [every family](styles.md#contents).

#### Full-screen task
- **What:** a full-screen layer with its own bar (title, stepper, primary action) for a focused job.
- **Wireframe:** [overlays/fullscreen](../../../atlas/layouts/overlays/fullscreen.svg)
- **Use when:** composing, editing a document, a multi-step import.
- **Avoid when:** the task is short.
- **Mobile (390):** the same; side panel dropped.
- **Pairs with:** [every family](styles.md#contents).

## Notifications / inbox

#### Bell popover
- **What:** a panel under the bell: title, "mark all read", tabs (all / mentions), rows with avatar and unread dot.
- **Wireframe:** [notifications/popover](../../../atlas/layouts/notifications/popover.svg)
- **Use when:** occasional notifications.
- **Avoid when:** notifications are the work (use an inbox).
- **Mobile (390):** full screen.
- **Pairs with:** [every family](styles.md#contents).

#### Inbox: list + message
- **What:** tabs and a list left, the selected item right with sender and actions.
- **Wireframe:** [notifications/inbox](../../../atlas/layouts/notifications/inbox.svg)
- **Use when:** requests, approvals and messages are a main task.
- **Avoid when:** —
- **Mobile (390):** the list; items open as their own screen.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [Swiss](styles.md#swiss).

#### Toasts
- **What:** small stacked messages bottom-right with an icon, a line and one action (undo, view).
- **Wireframe:** [notifications/toasts](../../../atlas/layouts/notifications/toasts.svg)
- **Use when:** feedback on an action the user just took.
- **Avoid when:** the message must be read (use a banner) or needs a decision (use a dialog).
- **Mobile (390):** full width at the bottom, above the tab bar.
- **Pairs with:** [every family](styles.md#contents).

## Search / results

#### Instant results under the field
- **What:** a dropdown under the search field with grouped results (with thumbnails) as you type.
- **Wireframe:** [search/instant](../../../atlas/layouts/search/instant.svg)
- **Use when:** finding a known item fast.
- **Avoid when:** results need filters to make sense.
- **Mobile (390):** search opens full screen.
- **Pairs with:** [every family](styles.md#contents).

#### Results + facets
- **What:** facet groups with checkboxes left; count, sort and results right.
- **Wireframe:** [search/facets](../../../atlas/layouts/search/facets.svg)
- **Use when:** large catalogues (shops, jobs, docs).
- **Avoid when:** facets with one value.
- **Mobile (390):** a "filters" button opens the facets as a sheet.
- **Pairs with:** [enterprise-dense](styles.md#enterprise-dense), [Scandinavian](styles.md#scandinavian).

#### Grouped results page
- **What:** the search field, type tabs (all, docs, people, files), results with their source and highlighted terms.
- **Wireframe:** [search/page](../../../atlas/layouts/search/page.svg)
- **Use when:** workspace or site-wide search.
- **Avoid when:** —
- **Mobile (390):** tabs scroll sideways.
- **Pairs with:** [Swiss](styles.md#swiss), [dev-tool dark](styles.md#devtool-dark), [terminal](styles.md#terminal).

## Mobile tab-bar app

These are designed at 390 first (`product.md`: mobile-first products).

#### Home with tab bar
- **What:** a greeting, one key card, a list, and a 4-item tab bar.
- **Wireframe:** [mobile/home](../../../atlas/layouts/mobile/home.svg)
- **Use when:** the default home of a consumer app.
- **Avoid when:** more than 5 tabs; the 5th becomes "more".
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [neobrutalism](styles.md#neobrutalism), [glassmorphism](styles.md#glassmorphism), [mesh gradient](styles.md#mesh-gradient).

#### Feed
- **What:** filter chips over a vertical feed of image cards; tab bar.
- **Wireframe:** [mobile/feed](../../../atlas/layouts/mobile/feed.svg)
- **Use when:** content and discovery apps.
- **Avoid when:** —
- **Pairs with:** [editorial photography](styles.md#editorial-photo), [neobrutalism](styles.md#neobrutalism).

#### Detail + sticky action
- **What:** a back arrow, an image, title, rating, options, text, details, and the primary action fixed at the bottom.
- **Wireframe:** [mobile/detail](../../../atlas/layouts/mobile/detail.svg)
- **Use when:** any item page that ends in one action (book, buy, join).
- **Avoid when:** —
- **Pairs with:** [every family](styles.md#contents).

## Shop

For a marketplace or a brand shop, next to the landing.

#### Category grid + filters
- **What:** breadcrumb and title, facets left, count and sort, a 3-column product grid.
- **Wireframe:** [commerce/category](../../../atlas/layouts/commerce/category.svg)
- **Use when:** a catalogue of 20+ products.
- **Avoid when:** —
- **Mobile (390):** 2-column grid; filters behind a button.
- **Pairs with:** [editorial photography](styles.md#editorial-photo), [Scandinavian](styles.md#scandinavian), [Swiss](styles.md#swiss).

#### Product page
- **What:** a gallery with thumbnails left; title, rating, price, options, add to cart, delivery checks and detail accordions right.
- **Wireframe:** [commerce/product](../../../atlas/layouts/commerce/product.svg)
- **Use when:** every product.
- **Avoid when:** —
- **Mobile (390):** gallery as a swipe, then the details; "add to cart" sticks to the bottom.
- **Pairs with:** [every family](styles.md#contents).

#### Cart + summary
- **What:** cart rows (image, name, quantity, price) left; a summary card with totals and checkout right.
- **Wireframe:** [commerce/cart](../../../atlas/layouts/commerce/cart.svg)
- **Use when:** every shop.
- **Avoid when:** —
- **Mobile (390):** rows, then the summary; checkout button sticks to the bottom.
- **Pairs with:** [every family](styles.md#contents).

#### One-page checkout
- **What:** contact, shipping and payment sections in one column; the order summary right.
- **Wireframe:** [commerce/checkout](../../../atlas/layouts/commerce/checkout.svg)
- **Use when:** the default checkout.
- **Avoid when:** —
- **Mobile (390):** a collapsed "order summary · total" bar on top, then the sections.
- **Pairs with:** [every family](styles.md#contents).

#### Order tracking
- **What:** order number, a 4-step progress, a map beside the delivery timeline, the items.
- **Wireframe:** [commerce/tracking](../../../atlas/layouts/commerce/tracking.svg)
- **Use when:** physical deliveries.
- **Avoid when:** —
- **Mobile (390):** progress, map, timeline, items.
- **Pairs with:** [Scandinavian](styles.md#scandinavian), [Swiss](styles.md#swiss).

---

Starting list: the section categories of TypeUI (typeui.sh, 52 categories, 449 named layouts; its repo ships one wireframe per section). This file adds the use / avoid / mobile / style rules, the web-unslop tells, the trust, showcase, how-it-works, changelog, docs, waitlist, vs and application screens, and the compositions.
