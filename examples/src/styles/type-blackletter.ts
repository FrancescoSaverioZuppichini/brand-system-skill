import type { Style } from "@/theme"
import Decor from "./decor/type-blackletter"

export default {
	name: "Blackletter",
	family: "Typographic voices",
	fonts: { heading: "UnifrakturMaguntia", body: "EB Garamond", mono: "EB Garamond" },
	google: "family=UnifrakturMaguntia&family=EB+Garamond:ital,wght@0,400..600;1,400",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, tracking: "0" },
	specimen: "start",
	decor: Decor,
	// [Agent] Textura only for the masthead line; every label is Garamond small caps, tracked, in the rubric red, the way
	// a printed book marks its headings. The number card is a ruled box like a newspaper's index.
	css: `
		[data-part=nav] header { max-width: none; padding: 32px 56px 0; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { padding: 0 56px 56px; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { font-size: 18px; font-weight: 500; letter-spacing: .16em; text-transform: none; font-variant-caps: all-small-caps; color: var(--rubric); }
		[data-part=headline] { font-size: 88px; line-height: 1; margin-top: 10px; }
		[data-part=sub] { font-size: 20px; line-height: 1.42; max-width: 440px; color: var(--lead); margin-top: 22px; }
		[data-part=button] { margin-top: 24px; height: 48px; padding: 0 26px; font-size: 17px; font-weight: 500; letter-spacing: .16em; font-variant-caps: all-small-caps; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; right: 56px; bottom: 56px; width: 224px; border: 0; border-top: 3px solid var(--ink); border-bottom: 1px solid var(--ink); background: none; padding: 14px 0 16px; gap: 0; }
		[data-part=card] > div { padding: 0; }
		[data-part=label] { font-size: 16px; font-weight: 500; letter-spacing: .16em; font-variant-caps: all-small-caps; color: var(--rubric); }
		[data-part=number] { font-family: var(--font-body); font-size: 48px; font-weight: 500; margin: 6px 0 2px; }
		[data-part=caption] { font-style: italic; font-size: 16px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
