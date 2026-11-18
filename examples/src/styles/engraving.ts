import type { Style } from "@/theme"
import Decor from "./decor/engraving"

export default {
	name: "Engraving",
	family: "Illustration and imagery",
	fonts: { heading: "IM Fell English", body: "EB Garamond", mono: "DM Mono" },
	google: "family=IM+Fell+English:ital@0;1&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400 },
	specimen: "start",
	decor: Decor,
	// [Agent] A book plate beside a page of letterpress: small caps for every label, the accent in Fell italic on its own
	// line, and the button framed twice (border plus offset outline) like the plate's own double rule.
	css: `
		[data-part=nav] header { padding: 20px 52px 0; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 22px 0 0 52px; }
		[data-part=copy] { flex: none; width: 320px; gap: 0; }
		[data-part=kicker] { font-size: 15px; font-weight: 400; font-variant: all-small-caps; text-transform: none; color: var(--ink); }
		[data-part=kicker]::after { content: ""; display: block; width: 44px; height: 1px; margin-top: 10px; background: var(--ink); }
		[data-part=headline] { font-size: 48px; line-height: 1.02; margin: 16px 0; }
		[data-part=accent] { display: block; font-style: italic; }
		[data-part=sub] { font-size: 16px; line-height: 1.45; margin-bottom: 24px; }
		[data-part=button] { height: auto; margin-left: 4px; padding: 8px 18px 10px; background: none; color: var(--ink); border: 1px solid var(--ink); outline: 1px solid var(--ink); outline-offset: 3px; font-size: 15px; font-weight: 400; font-variant: all-small-caps; letter-spacing: .14em; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 52px; bottom: 38px; width: auto; padding: 0; border: 0; background: none; }
		[data-part=card] > div { display: grid; grid-template-columns: auto auto; column-gap: 12px; padding: 0; gap: 0 12px; }
		[data-part=number] { grid-area: 1 / 1 / 3 / 2; align-self: end; font-size: 40px; line-height: .9; }
		[data-part=label] { align-self: end; font-size: 14px; font-variant: all-small-caps; letter-spacing: .12em; color: var(--ink); }
		[data-part=caption] { font-size: 14px; font-style: italic; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
