import type { Style } from "@/theme"
import Decor from "./decor/flat"

export default {
	name: "Flat",
	family: "Digital UI eras",
	fonts: { heading: "Lato", body: "Lato", mono: "Fira Mono" },
	google: "family=Lato:wght@300;400;700;900&family=Fira+Mono",
	radius: "4px",
	border: "0px",
	shadow: "none",
	heading: { weight: 300, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Solid colour and weight do all the work: a midnight app bar with a hamburger, a light headline whose accent
	// turns black-weight, and a flat blue tile for the number. No shadows, no borders, no gradients.
	css: `
		[data-part=nav] header { max-width: none; height: 64px; padding: 0 40px; background: var(--midnight); }
		[data-part=nav] header > span { gap: 12px; color: var(--white); font-size: 20px; font-weight: 700; }
		[data-part=nav] header > span svg { width: 30px; height: 30px; padding: 5px; border-radius: 4px; background: var(--turquoise); }
		[data-part=nav] header > span svg .fill-primary { fill: var(--white); }
		[data-part=nav] header > span svg .fill-primary-foreground { fill: var(--turquoise); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=nav] header::after { content: ""; width: 22px; height: 16px; background: linear-gradient(var(--white) 0 3px, transparent 3px 6.5px, var(--white) 6.5px 9.5px, transparent 9.5px 13px, var(--white) 13px); }
		[data-part=copy] { position: absolute; left: 40px; top: 118px; width: 380px; gap: 0; }
		[data-part=kicker] { color: var(--coral); font-size: 13px; font-weight: 900; letter-spacing: .16em; }
		[data-part=headline] { margin: 16px 0 18px; font-size: 48px; line-height: 1.08; }
		[data-part=accent] { display: block; font-weight: 900; }
		[data-part=sub] { color: var(--slate); font-size: 16px; line-height: 1.6; }
		[data-part=button] { margin-top: 28px; height: auto; padding: 16px 28px; font-size: 16px; font-weight: 700; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 430px; top: 308px; width: 210px; padding: 22px 24px; gap: 0; background: var(--flat-blue); color: var(--white); }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { color: var(--white); font-size: 12px; font-weight: 900; letter-spacing: .16em; text-transform: uppercase; opacity: .85; }
		[data-part=number] { margin: 10px 0 6px; font-size: 46px; font-weight: 900; }
		[data-part=caption] { color: var(--white); font-size: 14px; line-height: 1.3; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
