import type { Style } from "@/theme"
import { typeSheet } from "./type-grotesk"

export default {
	name: "Rounded sans",
	family: "Typographic voices",
	fonts: { heading: "Fredoka", body: "Nunito", mono: "Nunito" },
	google: "family=Fredoka:wght@500..700&family=Nunito:wght@500..900",
	radius: "24px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.01em" },
	specimen: "start",
	// [Agent] Round terminals at display size (Fredoka), a rounded text face that stays readable (Nunito), and a pill
	// button with a pressed edge under it, like a toy key.
	css: `${typeSheet}
		[data-part=nav] header::after { font-family: var(--font-heading); font-weight: 600; font-size: 24px; }
		[data-part=nav]::after { content: "Fredoka · Nunito"; font-weight: 700; font-size: 11px; }
		[data-part=kicker] { font-size: 15px; font-weight: 800; }
		[data-part=headline] { font-size: 96px; line-height: 1; }
		[data-part=sub] { font-size: 17px; font-weight: 600; line-height: 1.5; }
		[data-part=button] { padding: 0 28px; border-radius: 999px; font-size: 16px; font-weight: 800; box-shadow: 0 4px 0 var(--deep-sky); }
		[data-part=card] { border-color: transparent; }
		[data-part=label] { font-size: 14px; font-weight: 800; line-height: 1.2; color: var(--tan); }
		[data-part=number] { font-weight: 600; font-size: 46px; line-height: 1.1; }
		[data-part=caption] { font-size: 14px; font-weight: 600; line-height: 1.3; }
	`,
} satisfies Style
