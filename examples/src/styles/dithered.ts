import type { Style } from "@/theme"
import Decor from "./decor/dithered"

export default {
	name: "Dithered / 1-bit",
	family: "Digital UI eras",
	fonts: { heading: "Space Grotesk", body: "IBM Plex Mono", mono: "Silkscreen" },
	google: "family=Space+Grotesk:wght@600&family=Silkscreen&family=IBM+Plex+Mono:wght@400",
	radius: "0px",
	border: "2px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.035em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Two colours only. Silkscreen sets every label (the "mono" slot), the copy is Plex Mono, and the button and
	// the card sit on the decor's dithered drop shadows.
	css: `
		[data-part=nav] { position: absolute; left: 48px; bottom: 28px; z-index: 1; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font-family: var(--font-code); font-size: 16px; text-transform: uppercase; }
		[data-part=nav] header > span svg { shape-rendering: crispEdges; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] > *, [data-part=card] { position: absolute; margin: 0; }
		[data-part=kicker] { left: 48px; top: 64px; font: 16px/1 var(--font-code); letter-spacing: 0; color: var(--ink); }
		[data-part=kicker]::before { content: ""; display: inline-block; width: 10px; height: 10px; margin-right: 10px; background: var(--ink); }
		[data-part=headline] { left: 46px; top: 96px; width: 360px; font-size: 52px; line-height: .98; }
		[data-part=sub] { left: 48px; top: 276px; width: 380px; max-width: none; font-size: 11.5px; line-height: 1.75; color: var(--ink); }
		[data-part=button] { left: 48px; top: 350px; height: auto; padding: 13px 20px; border-radius: 0; font: 16px/1 var(--font-code); }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 398px; top: 362px; width: 200px; padding: 12px 16px; gap: 0; border-color: var(--ink); }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font: 16px/1 var(--font-code); text-transform: uppercase; color: var(--ink); }
		[data-part=number] { margin: 6px 0 2px; font-size: 34px; font-weight: 600; line-height: 1; letter-spacing: -0.03em; font-variant-numeric: normal; }
		[data-part=caption] { font-size: 11px; line-height: 1.3; color: var(--ink); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
