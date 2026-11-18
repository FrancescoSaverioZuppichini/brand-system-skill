import type { Style } from "@/theme"
import Decor from "./decor/mesh-gradient"

export default {
	name: "Mesh gradient",
	family: "Digital UI eras",
	fonts: { heading: "Schibsted Grotesk", body: "Schibsted Grotesk", mono: "JetBrains Mono" },
	google: "family=Schibsted+Grotesk:wght@400;500;600;700&family=JetBrains+Mono",
	radius: "8px",
	border: "1px",
	shadow: "0 30px 60px -12px oklch(0.30 0.06 265 / .25), 0 18px 36px -18px oklch(0 0 0 / .3)",
	heading: { weight: 700, tracking: "-0.045em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Colour-burn lets the ink headline pick up the hues of the field it overlaps, and the number card floats
	// across the diagonal cut with its bars sampling one fixed gradient, so they read as a single field-coloured series.
	css: `
		[data-part=nav] { position: absolute; top: 22px; right: 40px; z-index: 1; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { color: var(--white); font-weight: 700; font-size: 19px; }
		[data-part=nav] header > span svg rect:first-child { fill: var(--white); }
		[data-part=nav] header > span svg rect:last-child { fill: var(--magenta); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] > *, [data-part=card] { position: absolute; margin: 0; }
		[data-part=kicker] { left: 44px; top: 40px; font-size: 14px; font-weight: 600; letter-spacing: 0; text-transform: none; color: var(--white); }
		[data-part=headline] { left: 40px; top: 66px; font-size: 80px; line-height: .96; mix-blend-mode: color-burn; }
		[data-part=accent] { display: block; }
		[data-part=sub] { left: 44px; top: 344px; max-width: 450px; font-size: 17px; line-height: 1.55; color: var(--slate); }
		[data-part=button] { left: 44px; top: 422px; height: auto; padding: 10px 18px; border-radius: 999px; font-size: 15px; font-weight: 600; }
		[data-part=card] { left: 548px; top: 222px; width: 250px; padding: 18px 20px; gap: 0; border: 0; border-radius: 8px; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label], [data-part=caption] { font-size: 13px; color: var(--slate); }
		[data-part=label] { font-weight: 600; }
		[data-part=number] { font-family: var(--font-body); font-size: 34px; font-weight: 700; letter-spacing: -0.03em; font-variant-numeric: normal; margin: 4px 0 2px; }
		[data-part=chart] { height: 40px; margin-top: 14px; gap: 4px; }
		[data-part=chart] span { border-radius: 2px 2px 0 0; background: linear-gradient(90deg, var(--orange) 560px, var(--magenta) 660px, var(--purple) 770px) fixed !important; }
	`,
} satisfies Style
