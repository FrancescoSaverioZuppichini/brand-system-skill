import type { Style } from "@/theme"
import { typeSheet } from "./type-grotesk"

export default {
	name: "Condensed / compressed",
	family: "Typographic voices",
	fonts: { heading: "Big Shoulders Display", body: "Barlow", mono: "Oswald" },
	google: "family=Big+Shoulders+Display:wght@800..900&family=Oswald:wght@500&family=Barlow:wght@500",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 900, case: "uppercase" },
	specimen: "start",
	// [Agent] Poster type: the compressed display face in caps fills the width, Oswald (the "mono" slot) sets the
	// wide-tracked labels, and the number sits on a flat yellow block.
	css: `${typeSheet}
		[data-part=nav] header::after { font-family: var(--font-heading); font-weight: 900; font-size: 28px; }
		[data-part=nav]::after { content: "Big Shoulders Display · Oswald · Barlow"; font-family: var(--font-code); font-size: 10px; letter-spacing: .16em; text-transform: uppercase; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 14px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; }
		[data-part=headline] { font-size: 102px; line-height: .84; }
		[data-part=sub] { width: 420px; font-size: 17px; line-height: 1.45; }
		[data-part=button] { padding: 0 26px; font-family: var(--font-code); font-size: 15px; letter-spacing: .18em; text-transform: uppercase; }
		[data-part=card] { border: 0; }
		[data-part=label] { font-family: var(--font-code); font-size: 12px; font-weight: 500; line-height: 1; letter-spacing: .2em; text-transform: uppercase; color: var(--ink); }
		[data-part=number] { font-weight: 900; font-size: 60px; line-height: .9; }
		[data-part=caption] { font-size: 14px; line-height: 1.3; color: var(--ink); }
	`,
} satisfies Style
