import type { Style } from "@/theme"
import Decor from "./decor/web3"

const glass = "background: oklch(0.96 0.01 280 / .07); border: 1px solid oklch(0.96 0.01 280 / .16);"

export default {
	name: "Crypto / web3",
	family: "Industry-coded languages",
	fonts: { heading: "Sora", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Sora:wght@400;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@500",
	radius: "12px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.03em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Glass is a 7% white fill with a 16% edge over the blurred orbs; the accent and the button share one
	// violet-to-cyan gradient (text clipped to it on the accent), and the number carries a green gain arrow.
	css: `
		[data-part=nav] header { padding: 26px 48px 0; max-width: none; }
		[data-part=nav] header > span { font-weight: 600; letter-spacing: -0.02em; }
		[data-part=nav] [data-slot=button] { ${glass} color: var(--frost); border-radius: 999px; padding: 0 16px; }
		[data-part=body] { align-items: flex-start; padding: 18px 48px 0; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { display: inline-flex; align-items: center; gap: 8px; width: fit-content; padding: 7px 14px; border-radius: 999px; ${glass} color: var(--frost); font-size: 13px; letter-spacing: 0; text-transform: none; }
		[data-part=kicker]::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--gain); box-shadow: 0 0 10px var(--gain); }
		[data-part=headline] { font-size: 56px; line-height: 1.05; margin: 22px 0 18px; white-space: nowrap; }
		[data-part=accent] { display: block; background: linear-gradient(100deg, oklch(0.62 0.24 295), var(--cyan)); background-clip: text; color: transparent; }
		[data-part=sub] { font-size: 15px; line-height: 1.6; color: var(--haze); max-width: 400px; }
		[data-part=button] { margin-top: 30px; height: auto; padding: 15px 30px; border-radius: 999px; font-family: var(--font-heading); font-weight: 600; font-size: 15px; background: linear-gradient(100deg, oklch(0.58 0.24 295), oklch(0.74 0.15 220)); box-shadow: 0 0 32px oklch(0.58 0.24 295 / .6), inset 0 1px 0 oklch(1 0 0 / .35); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 556px; top: 330px; width: 204px; padding: 16px 0; gap: 0; ${glass} backdrop-filter: blur(18px); border-radius: 16px; }
		[data-part=card] > div { padding: 0 18px; gap: 0; }
		[data-part=label] { font-family: var(--font-code); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: var(--haze); }
		[data-part=number] { display: flex; align-items: center; gap: 10px; font-weight: 600; font-size: 40px; letter-spacing: -0.02em; margin: 6px 0 4px; }
		[data-part=number]::after { content: ""; width: 14px; height: 12px; margin-top: 4px; background: var(--gain); clip-path: polygon(50% 0, 100% 100%, 0 100%); }
		[data-part=caption] { font-size: 13px; color: var(--haze); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
