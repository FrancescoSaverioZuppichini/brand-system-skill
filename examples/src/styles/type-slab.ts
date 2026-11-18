import type { Style } from "@/theme"
import { typeSheet } from "./type-grotesk"

export default {
	name: "Slab serif",
	family: "Typographic voices",
	fonts: { heading: "Zilla Slab", body: "Zilla Slab", mono: "Courier Prime" },
	google: "family=Zilla+Slab:wght@400;500;700&family=Courier+Prime",
	radius: "3px",
	border: "2px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.02em" },
	specimen: "start",
	// [Agent] A sturdy workwear voice: bold slabs, typewritten labels in olive (Courier Prime), and a card with a heavy
	// 2 px rule like a stamped tag.
	css: `${typeSheet}
		[data-part=nav] header::after { font-weight: 700; font-size: 28px; }
		[data-part=nav]::after { content: "Zilla Slab · Courier Prime"; font-family: var(--font-code); font-size: 12px; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 15px; color: var(--olive); }
		[data-part=headline] { font-size: 94px; line-height: .94; }
		[data-part=sub] { font-size: 18px; line-height: 1.45; }
		[data-part=button] { font-size: 17px; font-weight: 700; }
		[data-part=card] { border-color: var(--ink); }
		[data-part=label] { font-family: var(--font-code); font-size: 13px; line-height: 1; text-transform: uppercase; color: var(--olive); }
		[data-part=number] { font-weight: 700; font-size: 50px; line-height: 1; }
		[data-part=caption] { font-size: 15px; font-weight: 500; line-height: 1.3; }
	`,
} satisfies Style
