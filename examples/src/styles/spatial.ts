import type { Style } from "@/theme"
import Decor from "./decor/spatial"

export default {
	name: "Spatial / 3D",
	family: "Digital UI eras",
	fonts: { heading: "Inter Tight", body: "Inter Tight", mono: "Geist Mono" },
	google: "family=Inter+Tight:wght@400;600&family=Geist+Mono",
	radius: "28px",
	border: "0px",
	shadow:
		"inset 0 1px 0 oklch(1 0 0 / .75), 0 3px 0 oklch(0.85 0.01 250 / .55), 0 28px 50px -12px oklch(0.08 0.02 250 / .6), 0 8px 16px oklch(0.08 0.02 250 / .25)",
	heading: { weight: 600, tracking: "-0.035em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The hero copy is the front glass panel and the number card a second panel turned 30° toward it and pushed
	// back in depth; each blurs the room behind it, and the shadow stack (rim light, thickness step, two drop shadows)
	// is the style's shadow token.
	css: `
		[data-part=nav] { position: absolute; top: 18px; left: 24px; z-index: 1; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { color: var(--chalk); font-size: 17px; font-weight: 600; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] { position: absolute; left: 186px; top: 58px; width: 428px; height: 292px; padding: 34px 38px; gap: 0; align-items: flex-start; border-radius: 28px; background: oklch(0.97 0.005 250 / .6); backdrop-filter: blur(22px) saturate(1.3); box-shadow: var(--shadow); }
		[data-part=kicker] { padding: 5px 12px; border-radius: 999px; background: oklch(0.66 0.16 250 / .16); color: oklch(0.45 0.16 252); font-size: 12px; font-weight: 600; letter-spacing: 0; text-transform: none; }
		[data-part=headline] { margin-top: 16px; font-size: 40px; line-height: 1.04; }
		[data-part=accent] { display: block; }
		[data-part=sub] { margin-top: 14px; font-size: 13.5px; line-height: 1.55; max-width: 330px; }
		[data-part=button] { margin-top: 22px; height: auto; padding: 11px 22px; border-radius: 999px; font-size: 14px; font-weight: 600; box-shadow: 0 6px 16px -4px oklch(0.66 0.16 250 / .7); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 34px; top: 124px; width: 168px; height: 176px; padding: 22px; gap: 0; background: oklch(0.97 0.005 250 / .6); backdrop-filter: blur(22px) saturate(1.3); transform: perspective(900px) rotateY(30deg) translateZ(-90px); transform-origin: 100% 50%; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-size: 12px; font-weight: 600; }
		[data-part=number] { margin: 10px 0 6px; font-size: 42px; font-weight: 600; letter-spacing: -0.04em; font-variant-numeric: normal; }
		[data-part=caption] { font-size: 12.5px; line-height: 1.35; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
