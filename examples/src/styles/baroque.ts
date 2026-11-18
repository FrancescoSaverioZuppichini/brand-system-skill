import type { Style } from "@/theme"
import Decor from "./decor/baroque"

export default {
	name: "Baroque",
	family: "Art and historical movements",
	fonts: { heading: "Playfair Display", body: "Cormorant", mono: "Cinzel" },
	google:
		"family=Playfair+Display:ital,wght@0,500;1,500&family=Cormorant:ital,wght@0,500;1,500&family=Cinzel:wght@600",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 500 },
	specimen: "center",
	decor: Decor,
	// [Agent] The copy sits inside the gilt frame and the number in the cartouche; Cinzel (the "mono" slot) sets the caps.
	css: `
		[data-part=nav] { position: absolute; inset: 0 0 auto; z-index: 1; }
		[data-part=nav] header { justify-content: center; padding-top: 40px; }
		[data-part=nav] header > span, [data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { justify-content: flex-start; padding: 70px 0 0; }
		[data-part=copy] { width: 400px; gap: 0; }
		[data-part=kicker] { font-size: 15px; font-variant: small-caps; text-transform: none; letter-spacing: .3em; color: var(--gold); }
		[data-part=headline] { font-size: 50px; line-height: 1.04; margin-top: 10px; }
		[data-part=accent] { display: block; font-style: italic; color: var(--gold); font-size: 56px; }
		[data-part=sub] { max-width: 370px; font-size: 17px; line-height: 1.4; color: oklch(0.93 0.03 85 / .82); margin-top: 22px; font-weight: 500; }
		[data-part=button] { margin-top: 20px; height: auto; padding: 10px 26px 11px; font-family: var(--font-code); font-size: 12px; letter-spacing: .22em; text-transform: uppercase; border: 1px solid var(--gold); outline: 1px solid oklch(0.75 0.12 85 / .45); outline-offset: 3px; }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 290px; right: auto; bottom: 30px; width: 220px; background: none; border: 0; padding: 0; text-align: center; gap: 0; }
		[data-part=card] > div { gap: 0; align-items: center; }
		[data-part=label] { font-size: 13px; font-variant: small-caps; letter-spacing: .24em; color: var(--gold); }
		[data-part=number] { font-size: 30px; margin: 2px 0 1px; }
		[data-part=caption] { font-style: italic; font-size: 14px; color: oklch(0.93 0.03 85 / .8); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
