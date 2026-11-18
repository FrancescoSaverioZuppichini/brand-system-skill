import type { Style } from "@/theme"
import Decor from "./decor/ascii-art"

export default {
	name: "ASCII art",
	family: "Illustration and imagery",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;700",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.035em" },
	specimen: "start",
	decor: Decor,
	// [Agent] A clean sans base with the ASCII sphere as the one signature device; everything small (kicker, button,
	// number, the bar under it) is set in the mono and drawn with glyphs, so the page and the picture share one grid.
	// The logo moves to the top right so the copy keeps the old specimen's top line.
	css: `
		[data-part=nav] { position: absolute; inset: 0 0 auto; }
		[data-part=nav] header { justify-content: flex-end; padding: 20px 32px; }
		[data-part=nav] header > span { font-family: var(--font-code); font-weight: 700; font-size: 15px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 48px 0 0 48px; }
		[data-part=copy] { flex: none; width: 300px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-weight: 700; font-size: 12px; letter-spacing: 0; text-transform: none; color: var(--rust); }
		[data-part=kicker]::before { content: "> "; color: var(--dim); }
		[data-part=headline] { font-size: 44px; line-height: 1.04; margin: 16px 0; }
		[data-part=sub] { font-size: 14px; line-height: 1.55; margin-bottom: 26px; }
		[data-part=button] { height: auto; padding: 13px 18px; font-family: var(--font-code); font-weight: 700; font-size: 13px; line-height: 1; }
		[data-part=button] svg { display: none; }
		[data-part=button]::after { content: "→"; }
		[data-part=card] { position: absolute; left: 48px; bottom: 34px; width: auto; padding: 0; border: 0; background: none; font-family: var(--font-code); }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-size: 12px; color: var(--rust); }
		[data-part=label]::before { content: "[ "; }
		[data-part=label]::after { content: " ]"; }
		[data-part=number] { font-family: var(--font-code); font-size: 30px; line-height: 1.1; margin: 4px 0 2px; }
		[data-part=caption] { font-size: 12px; }
		[data-part=chart] { height: auto; margin-top: 6px; color: var(--dim); font-size: 12px; line-height: 1.2; }
		[data-part=chart]::before { content: "▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒░░░░"; }
		[data-part=chart] span { display: none; }
	`,
} satisfies Style
