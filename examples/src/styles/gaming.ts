import type { Style } from "@/theme"
import Decor from "./decor/gaming"

const chamfer = "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)"

export default {
	name: "Gaming",
	family: "Industry-coded languages",
	fonts: { heading: "Saira Condensed", body: "Rajdhani", mono: "Chakra Petch" },
	google:
		"family=Saira+Condensed:wght@600;800;900&family=Rajdhani:wght@500;600&family=Chakra+Petch:wght@500;700",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 900, case: "uppercase", tracking: "-0.005em", italic: true },
	specimen: "start",
	decor: Decor,
	// [Agent] Speed is italic caps plus slants: the button is a parallelogram, the card a chamfered HUD panel whose
	// hairline is a clipped ::before (a border would be cut off at the corners), and the chart turns into a skewed
	// segment meter. Chakra Petch (the "mono" slot) sets the HUD labels.
	css: `
		[data-part=nav] header { padding: 30px 44px 0; max-width: none; }
		[data-part=nav] header > span { font-weight: 800; font-style: italic; text-transform: uppercase; font-size: 24px; letter-spacing: .02em; }
		[data-part=nav] [data-slot=button] { background: transparent; color: var(--neon); border: 1px solid var(--neon); border-radius: 0; font-family: var(--font-code); font-weight: 700; text-transform: uppercase; letter-spacing: .16em; font-size: 11px; transform: skewX(-14deg); margin-right: 14px; }
		[data-part=body] { align-items: flex-start; padding: 30px 230px 0 44px; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { display: flex; align-items: center; gap: 10px; font-family: var(--font-code); font-weight: 700; font-size: 13px; letter-spacing: .24em; color: var(--neon); }
		[data-part=kicker]::before { content: ""; width: 26px; height: 8px; background: var(--neon); transform: skewX(-30deg); }
		[data-part=headline] { font-size: 76px; line-height: .86; margin: 14px 0 18px; white-space: nowrap; }
		[data-part=accent] { display: block; color: var(--neon); text-shadow: 0 0 24px oklch(0.88 0.22 135 / .55); }
		[data-part=sub] { font-size: 17px; font-weight: 500; line-height: 1.35; color: var(--steel); max-width: 400px; }
		[data-part=button] { margin-top: 26px; height: auto; padding: 15px 34px 15px 28px; gap: 12px; border-radius: 0; font-family: var(--font-code); font-weight: 700; font-size: 16px; letter-spacing: .14em; text-transform: uppercase; clip-path: polygon(16px 0, 100% 0, calc(100% - 16px) 100%, 0 100%); }
		[data-part=button] svg { display: none; }
		[data-part=button]::after { content: ""; width: 10px; height: 12px; background: currentColor; clip-path: polygon(0 0, 100% 50%, 0 100%); }
		[data-part=card] { position: absolute; right: 40px; bottom: 40px; width: 224px; padding: 16px 0; gap: 0; border: 0; border-radius: 0; background: oklch(0.2 0.015 270 / .88); clip-path: ${chamfer}; }
		[data-part=card]::before { content: ""; position: absolute; inset: 0; border: 1px solid oklch(0.88 0.22 135 / .4); clip-path: ${chamfer}; }
		[data-part=card] > div { padding: 0 18px; gap: 0; }
		[data-part=label] { font-family: var(--font-code); font-weight: 700; font-size: 11px; letter-spacing: .22em; text-transform: uppercase; color: var(--neon); }
		[data-part=number] { font-weight: 800; font-style: italic; font-size: 56px; line-height: 1; margin-top: 4px; }
		[data-part=caption] { font-size: 15px; font-weight: 600; color: var(--steel); }
		[data-part=chart] { height: 6px; margin-top: 12px; gap: 3px; }
		[data-part=chart] span { height: 100% !important; background: var(--neon) !important; transform: skewX(-30deg); }
		[data-part=chart] span:nth-child(n+7) { background: var(--plate) !important; }
	`,
} satisfies Style
