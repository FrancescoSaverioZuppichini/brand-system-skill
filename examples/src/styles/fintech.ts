import type { Style } from "@/theme"
import Decor from "./decor/fintech"

export default {
	name: "Fintech trust",
	family: "Industry-coded languages",
	fonts: { heading: "Manrope", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Manrope:wght@800&family=Inter:wght@400;500;600&family=JetBrains+Mono",
	radius: "16px",
	border: "1px",
	shadow: "0 1px 2px oklch(0.25 0.06 260 / .08), 0 12px 32px oklch(0.25 0.06 260 / .14)",
	heading: { weight: 800, tracking: "-0.035em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The number card is the balance card on the phone's screen: same position and the phone's 6° tilt, rotated
	// about the phone's centre (its transform-origin) so it sits flush in the screen. Its bars become the green area of a
	// growth chart.
	css: `
		[data-part=nav] { position: absolute; left: 52px; top: 22px; z-index: 1; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font-size: 19px; font-weight: 800; letter-spacing: -0.02em; }
		[data-part=nav] header > span svg rect:first-child { fill: var(--navy); }
		[data-part=nav] header > span svg rect:last-child { fill: var(--lime); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] { position: absolute; left: 52px; top: 66px; width: 390px; gap: 0; align-items: flex-start; }
		[data-part=kicker] { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px 6px 8px; border: 1px solid var(--line); border-radius: 999px; background: var(--surface); color: var(--navy); font-size: 13px; font-weight: 600; letter-spacing: 0; text-transform: none; }
		[data-part=kicker]::before { content: ""; width: 16px; height: 16px; border-radius: 50%; background: var(--lime); box-shadow: inset 0 0 0 4px var(--navy); }
		[data-part=headline] { margin: 20px 0 16px; max-width: 340px; font-size: 50px; line-height: 1; }
		[data-part=sub] { max-width: 390px; font-size: 14.5px; line-height: 1.55; }
		[data-part=button] { margin-top: 24px; height: auto; padding: 15px 24px; border-radius: 999px; font-size: 16px; font-weight: 600; gap: 10px; }
		[data-part=card] { position: absolute; left: 554px; top: 104px; width: 170px; padding: 14px 14px 12px; gap: 0; border-color: var(--line); box-shadow: 0 1px 2px oklch(0.25 0.06 260 / .06); transform-origin: 85px 182px; rotate: 6deg; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-size: 11px; font-weight: 500; }
		[data-part=number] { font-size: 36px; font-weight: 800; letter-spacing: -0.03em; line-height: 1.15; }
		[data-part=caption] { font-size: 10.5px; }
		[data-part=chart] { height: 50px; margin-top: 10px; gap: 3px; }
		[data-part=chart] span { border-radius: 3px 3px 0 0; background: oklch(0.60 0.15 150 / .28) !important; }
		[data-part=chart] span:last-child { background: var(--green) !important; }
	`,
} satisfies Style
