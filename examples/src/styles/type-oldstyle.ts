import type { Style } from "@/theme"
import { typeSheet } from "./type-grotesk"

export default {
	name: "Old-style / Garalde",
	family: "Typographic voices",
	fonts: { heading: "EB Garamond", body: "EB Garamond", mono: "Cormorant SC" },
	google:
		"family=EB+Garamond:ital,wght@0,400..500;1,400..500&family=Cormorant+Garamond:ital,wght@0,500..600;1,500..600&family=Cormorant+SC:wght@600",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, tracking: "-0.01em" },
	specimen: "start",
	// [Agent] Google's EB Garamond ships without old-style figures or small caps, so the figures come from Cormorant
	// Garamond (old-style by default) and the small caps from Cormorant SC (the "mono" slot), in the rubricator's red.
	css: `${typeSheet}
		[data-part=nav] header::after { font-family: "Cormorant Garamond"; font-weight: 500; font-size: 30px; }
		[data-part=nav]::after { content: "EB Garamond · Cormorant"; font-family: var(--font-code); font-weight: 600; font-size: 14px; letter-spacing: .08em; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 17px; font-weight: 600; letter-spacing: .1em; color: var(--rubric); }
		[data-part=headline] { font-size: 100px; line-height: 1; }
		[data-part=accent] { font-style: italic; }
		[data-part=sub] { width: 440px; font-size: 20px; line-height: 1.42; }
		[data-part=button] { padding: 0 26px; font-family: var(--font-code); font-size: 17px; font-weight: 600; letter-spacing: .1em; }
		[data-part=card] { padding: 14px 0 16px; border-width: 1px 0; border-color: var(--ink); background: none; }
		[data-part=label] { font-family: var(--font-code); font-size: 16px; font-weight: 600; line-height: 1; letter-spacing: .1em; color: var(--rubric); }
		[data-part=number] { font-family: "Cormorant Garamond"; font-weight: 500; font-size: 62px; line-height: 1; font-variant-numeric: normal; }
		[data-part=caption] { font-family: "Cormorant Garamond"; font-size: 18px; font-weight: 500; font-style: italic; line-height: 1.3; }
	`,
} satisfies Style
