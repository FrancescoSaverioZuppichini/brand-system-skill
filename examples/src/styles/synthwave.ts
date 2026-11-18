import type { Style } from "@/theme"
import Decor from "./decor/synthwave"

export default {
	name: "Synthwave / outrun",
	family: "Digital UI eras",
	fonts: { heading: "Orbitron", body: "Michroma", mono: "VT323" },
	google: "family=Orbitron:wght@900&family=Michroma&family=VT323&family=Monoton",
	radius: "0px",
	border: "2px",
	shadow: "0 0 12px var(--cyan)",
	heading: { weight: 900, case: "uppercase", tracking: "0.02em" },
	specimen: "center",
	decor: Decor,
	// [Agent] Orbitron has no italic, so the chrome headline is sheared; the gradient's hard stop fakes a chrome horizon.
	css: `
		[data-part=nav] header { padding-top: 14px; }
		[data-part=nav] header > span { color: var(--cyan); text-shadow: 0 0 8px var(--cyan); }
		[data-part=nav] [data-slot=button] { background: transparent; border: 2px solid var(--magenta); color: var(--frost); box-shadow: 0 0 10px var(--magenta); }
		[data-part=body] { justify-content: flex-start; padding-top: 0; gap: 0; }
		[data-part=copy] { gap: 10px; max-width: 760px; }
		[data-part=kicker] { font-family: Monoton; font-size: 26px; font-weight: 400; letter-spacing: 0; text-transform: none; color: oklch(0.85 0.12 340); text-shadow: 0 0 6px var(--magenta), 0 0 18px var(--magenta); margin-top: -18px; }
		[data-part=headline] { font-size: 54px; line-height: 1.08; transform: skewX(-10deg); filter: drop-shadow(0 3px 0 var(--night)) drop-shadow(0 0 14px oklch(0.65 0.28 340 / .8)); }
		[data-part=headline], [data-part=accent] { background: linear-gradient(oklch(0.97 0.03 220) 0%, oklch(0.80 0.10 230) 44%, oklch(0.99 0 0) 49%, oklch(0.28 0.08 300) 52%, oklch(0.60 0.20 340) 74%, oklch(0.93 0.10 80) 100%); background-clip: text; color: transparent; -webkit-text-stroke: 1px oklch(0.97 0.03 220 / .6); }
		[data-part=accent] { display: block; }
		[data-part=sub] { margin-top: 110px; font-size: 11.5px; line-height: 1.9; letter-spacing: .05em; color: var(--cyan); text-shadow: 0 0 8px oklch(0.85 0.14 205 / .7), 0 1px 2px var(--night); max-width: 440px; }
		[data-part=button] { background: oklch(0.18 0.08 295 / .7); border: 2px solid var(--cyan); color: oklch(0.97 0.04 205); text-transform: uppercase; letter-spacing: .14em; font-size: 12px; box-shadow: 0 0 12px var(--cyan), inset 0 0 12px oklch(0.85 0.14 205 / .5); text-shadow: 0 0 8px var(--cyan); }
		[data-part=button] svg { display: none; }
		[data-part=card] { right: 16px; bottom: 16px; width: 214px; background: oklch(0.18 0.08 295 / .85); border: 2px solid var(--magenta); box-shadow: 0 0 14px var(--magenta), inset 0 0 10px oklch(0.65 0.28 340 / .5); padding: 8px 0; text-align: center; gap: 0; }
		[data-part=card] > div { gap: 0; }
		[data-part=label] { font-family: var(--font-code); font-size: 18px; letter-spacing: .12em; text-transform: uppercase; color: oklch(0.85 0.12 340); }
		[data-part=number] { font-family: var(--font-code); font-size: 46px; line-height: .9; color: var(--yellow); text-shadow: 0 0 10px var(--sun); }
		[data-part=caption] { font-family: var(--font-code); font-size: 17px; white-space: nowrap; color: var(--cyan); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
