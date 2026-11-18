import type { Style } from "@/theme"
import Decor from "./decor/terminal"

export default {
	name: "Terminal / CLI",
	family: "Digital UI eras",
	fonts: { heading: "VT323", body: "JetBrains Mono", mono: "JetBrains Mono" },
	google: "family=VT323&family=JetBrains+Mono:wght@400;700",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, case: "uppercase", tracking: "0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Everything is one monospace grid: the kicker is a comment, the subline is prompt output, the card is a box
	// drawn in the panel's rule colour, and the phosphor glow is a text-shadow.
	css: `
		[data-part=frame] { text-shadow: 0 0 6px oklch(0.85 0.17 145 / .35); }
		[data-part=nav] header { padding: 26px 40px 0; max-width: none; }
		[data-part=nav] header > span { font-family: var(--font-code); font-weight: 700; font-size: 15px; color: var(--phosphor); }
		[data-part=nav] header > span svg { display: none; }
		[data-part=nav] header > span::before { content: "$ "; color: var(--dim); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { margin: 18px 26px 64px; border: 1.5px solid var(--trace); padding: 30px 24px; align-items: center; }
		[data-part=copy] { gap: 14px; }
		[data-part=kicker] { color: var(--amber); text-transform: none; letter-spacing: 0; font-size: 14px; }
		[data-part=kicker]::before { content: "# "; }
		[data-part=headline] { font-size: 62px; line-height: .9; color: var(--phosphor); white-space: nowrap; }
		[data-part=sub] { color: var(--glow); font-size: 13px; max-width: 400px; padding-left: 16px; text-indent: -16px; }
		[data-part=sub]::before { content: "> "; color: var(--dim); }
		[data-part=button] { height: auto; padding: 1px 8px; font-weight: 700; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; right: 70px; bottom: 118px; width: 244px; background: var(--crt); border-color: var(--trace); padding: 12px 0 8px; gap: 0; }
		[data-part=card] > div { padding: 0 12px; }
		[data-part=label] { position: absolute; top: -10px; left: 10px; background: var(--crt); padding: 0 6px; color: var(--amber); font-size: 13px; }
		[data-part=number] { font-family: var(--font-code); font-size: 14px; color: var(--amber); }
		[data-part=caption] { color: var(--glow); font-size: 13px; }
		[data-part=chart] { position: absolute; top: 12px; left: 72px; width: 140px; height: 16px; margin: 0; gap: 0; }
		[data-part=chart] span { background: var(--phosphor) !important; height: 100% !important; }
		[data-part=chart] span:nth-child(n+7) { opacity: .25; }
	`,
} satisfies Style
