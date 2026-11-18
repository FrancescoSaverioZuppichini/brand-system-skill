import type { Style } from "@/theme"
import { typeSheet } from "./type-grotesk"

export default {
	name: "Display expressive",
	family: "Typographic voices",
	fonts: { heading: "Shrikhand", body: "Inter", mono: "Inter" },
	google: "family=Shrikhand&family=Inter:wght@400;600",
	radius: "999px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, tracking: "-0.01em" },
	specimen: "start",
	// [Agent] One loud display face in a loud colour for the headline and the number only; everything around it is a
	// plain sans in ink, so the voice reads as chosen, not as noise.
	css: `${typeSheet}
		[data-part=nav] header::after { font-family: var(--font-heading); font-size: 26px; color: var(--tangerine); }
		[data-part=nav]::after { content: "Shrikhand · Inter"; font-size: 11px; }
		[data-part=kicker] { font-size: 15px; font-weight: 600; color: var(--ink); }
		[data-part=headline] { font-size: 78px; line-height: 1.04; color: var(--tangerine); }
		[data-part=sub] { font-size: 17px; line-height: 1.5; }
		[data-part=button] { padding: 0 26px; font-size: 15px; font-weight: 600; }
		[data-part=card] { border: 0; border-radius: 28px; background: var(--bubblegum); }
		[data-part=label] { font-size: 13px; font-weight: 600; line-height: 1; color: var(--ink); }
		[data-part=number] { font-size: 48px; line-height: 1.05; }
		[data-part=caption] { font-size: 13px; line-height: 1.3; color: var(--ink); }
	`,
} satisfies Style
