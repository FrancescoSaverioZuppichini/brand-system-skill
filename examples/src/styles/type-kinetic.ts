import type { Style } from "@/theme"
import Decor from "./decor/type-kinetic"

export default {
	name: "Kinetic / variable",
	family: "Typographic voices",
	fonts: { heading: "Anybody", body: "Anybody", mono: "Anybody" },
	google: "family=Anybody:wdth,wght@50..150,100..900",
	radius: "0px",
	border: "2px",
	shadow: "none",
	heading: { weight: 800, case: "uppercase", tracking: "0" },
	specimen: "start",
	decor: Decor,
	// [Agent] One variable face does every job by moving along its axes: the first line compressed and light, the accent
	// line expanded and black, labels stretched wide, the number crushed narrow. The width contrast is the identity.
	css: `
		[data-part=nav] header { max-width: none; padding: 34px 56px 0; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { padding: 0 56px 56px; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { font-size: 13px; font-weight: 700; font-stretch: 150%; letter-spacing: .08em; color: var(--ink); }
		[data-part=headline] { width: 688px; white-space: nowrap; font-size: 104px; line-height: .9; font-weight: 200; font-stretch: 50%; margin-top: 16px; }
		[data-part=accent] { display: block; font-size: 62px; line-height: 1.1; font-weight: 900; font-stretch: 150%; }
		[data-part=sub] { font-size: 16px; line-height: 1.55; max-width: 430px; margin-top: 26px; }
		[data-part=button] { margin-top: 26px; height: 48px; padding: 0 24px; font-size: 14px; font-weight: 800; font-stretch: 140%; letter-spacing: .04em; text-transform: uppercase; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; right: 56px; bottom: 56px; width: 224px; border: 2px solid var(--ink); background: none; padding: 16px 0 18px; gap: 0; }
		[data-part=card] > div { padding: 0 20px; }
		[data-part=label] { font-size: 11px; font-weight: 700; font-stretch: 150%; letter-spacing: .08em; text-transform: uppercase; color: var(--ink); }
		[data-part=number] { font-size: 60px; font-weight: 900; font-stretch: 50%; margin: 6px 0 4px; }
		[data-part=caption] { font-size: 13px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
