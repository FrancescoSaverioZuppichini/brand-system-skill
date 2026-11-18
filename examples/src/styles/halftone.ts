import type { Style } from "@/theme"
import Decor from "./decor/halftone"

export default {
	name: "Halftone",
	family: "Illustration and imagery",
	fonts: { heading: "Oswald", body: "Archivo Narrow", mono: "Space Mono" },
	google: "family=Oswald:wght@500;700&family=Archivo+Narrow:wght@400;600&family=Space+Mono:wght@400;700",
	radius: "0px",
	border: "2px",
	shadow: "none",
	heading: { weight: 700, case: "uppercase", tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] One ink plus the spot red. Only "keep" prints red: the accent is a two-line block, so a hard stop halfway
	// down a text-clipped gradient lands exactly between "people" and "keep".
	css: `
		[data-part=nav] header { padding: 20px 44px 0; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 22px 0 0 44px; }
		[data-part=copy] { flex: none; width: 306px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-weight: 700; font-size: 12px; letter-spacing: .08em; color: var(--red); }
		[data-part=headline] { font-size: 64px; line-height: .92; margin: 14px 0 18px; }
		[data-part=accent] { display: block; background: linear-gradient(var(--ink) 50%, var(--red) 50%); background-clip: text; color: transparent; }
		[data-part=sub] { width: 300px; font-size: 16px; line-height: 1.4; margin-bottom: 22px; }
		[data-part=button] { height: auto; padding: 13px 22px; font-family: var(--font-heading); font-weight: 500; font-size: 16px; letter-spacing: .06em; text-transform: uppercase; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; right: 28px; bottom: 28px; width: auto; padding: 10px 14px; border: 2px solid var(--ink); }
		[data-part=card] > div { display: grid; grid-template-columns: auto auto; column-gap: 12px; row-gap: 2px; align-items: center; padding: 0; }
		[data-part=number] { grid-area: 1 / 1 / 3 / 2; font-weight: 700; font-size: 36px; }
		[data-part=label], [data-part=caption] { font-family: var(--font-code); font-size: 10px; color: var(--ink); }
		[data-part=label] { font-weight: 700; letter-spacing: .06em; text-transform: uppercase; align-self: end; }
		[data-part=caption] { align-self: start; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
