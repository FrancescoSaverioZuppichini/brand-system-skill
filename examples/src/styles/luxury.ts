import type { Style } from "@/theme"
import Decor from "./decor/luxury"

export default {
	name: "Luxury / fashion",
	family: "Industry-coded languages",
	fonts: { heading: "Bodoni Moda", body: "Jost", mono: "Jost" },
	google: "family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400&family=Jost:wght@300;400",
	radius: "0px",
	border: "0px",
	shadow: "none",
	heading: { weight: 400, tracking: "-0.01em", italic: true },
	specimen: "center",
	decor: Decor,
	// [Agent] The campaign image carries the page: a widely tracked Bodoni wordmark centred in a tiny nav, small tracked
	// caps, an italic didone headline low over the image, the button reduced to an underlined word, and the number as a
	// caption in the corner rather than a card.
	css: `
		[data-part=frame] { -webkit-font-smoothing: subpixel-antialiased; }
		[data-part=nav] header { justify-content: center; max-width: none; padding: 26px 36px 0; }
		[data-part=nav] header > span { font-size: 30px; font-weight: 500; letter-spacing: .42em; margin-right: -.42em; text-transform: uppercase; }
		[data-part=nav] header > span svg, [data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { justify-content: flex-end; padding-bottom: 74px; }
		[data-part=copy] { gap: 0; max-width: 760px; }
		[data-part=kicker] { font-size: 10px; font-weight: 400; letter-spacing: .32em; color: var(--white); }
		[data-part=headline] { margin: 16px 0; font-size: 54px; line-height: 1; font-variation-settings: "opsz" 30; }
		[data-part=sub] { max-width: 300px; font-size: 11.5px; font-weight: 300; letter-spacing: .04em; line-height: 1.7; color: oklch(1 0 0 / .78); }
		[data-part=button] { margin-top: 22px; height: auto; padding: 0 0 6px; border-radius: 0; border-bottom: 1px solid var(--white); background: none; color: var(--white); font-size: 10px; font-weight: 400; letter-spacing: .32em; text-transform: uppercase; }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 36px; right: auto; bottom: 30px; width: auto; padding: 0; gap: 0; background: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label], [data-part=caption] { font-size: 9px; line-height: 1.9; letter-spacing: .28em; text-transform: uppercase; color: var(--white); }
		[data-part=caption] { letter-spacing: .18em; color: oklch(1 0 0 / .7); }
		[data-part=number] { font-size: 20px; font-style: normal; letter-spacing: .06em; line-height: 1.9; font-variant-numeric: normal; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
