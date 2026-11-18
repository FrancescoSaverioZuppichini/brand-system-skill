import type { Style } from "@/theme"
import { typeSheet } from "./type-grotesk"

export default {
	name: "Didone (luxury)",
	family: "Typographic voices",
	fonts: { heading: "Bodoni Moda", body: "Bodoni Moda", mono: "Jost" },
	google: "family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..700&family=Jost:wght@400;500",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, tracking: "-0.02em" },
	specimen: "start",
	// [Agent] Optical sizing picks Bodoni Moda's 96 pt master at display sizes, which is where the hairlines get thin;
	// every small label is a wide-tracked geometric cap (Jost in the "mono" slot), the fashion-masthead pairing.
	css: `${typeSheet}
		[data-part=frame] { font-optical-sizing: auto; }
		[data-part=nav] header::after { font-size: 30px; }
		[data-part=nav]::after { content: "Bodoni Moda · Jost"; font-family: var(--font-code); font-size: 10px; letter-spacing: .24em; text-transform: uppercase; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 11px; font-weight: 500; letter-spacing: .34em; text-transform: uppercase; color: var(--ink); }
		[data-part=headline] { font-size: 92px; line-height: .96; }
		[data-part=accent] { font-style: italic; }
		[data-part=sub] { font-size: 17px; line-height: 1.5; }
		[data-part=button] { padding: 0 32px; font-family: var(--font-code); font-size: 11px; font-weight: 500; letter-spacing: .3em; text-transform: uppercase; }
		[data-part=card] { border: 0; border-top: 1px solid var(--gold); }
		[data-part=label] { font-family: var(--font-code); font-size: 10px; font-weight: 500; line-height: 1; letter-spacing: .3em; text-transform: uppercase; color: var(--ink); }
		[data-part=number] { font-size: 58px; line-height: 1; }
		[data-part=caption] { font-size: 15px; font-style: italic; line-height: 1.3; }
	`,
} satisfies Style
