import type { Style } from "@/theme"
import Decor from "./decor/anti-design"

export default {
	name: "Anti-design / ugly",
	family: "Digital UI eras",
	fonts: { heading: "Archivo", body: "Archivo", mono: "VT323" },
	google:
		"family=Archivo:wdth,wght@62..125,400..900&family=Instrument+Serif:ital@0;1&family=Rubik+Glitch&family=VT323",
	radius: "2px",
	border: "1px",
	shadow: "8px 8px 0 var(--magenta)",
	heading: { weight: 900, tracking: "-0.03em" },
	specimen: "start",
	decor: Decor,
	// [Agent] "Make something" is the Arial stand-in stretched 2.2× tall; the accent undoes that scale so "people" and
	// "keep" can be two different faces: a 500 px text-indent throws "people" to the right on the first line (styled
	// through ::first-line) and "keep" wraps under it in Rubik Glitch. The button is the browser default, scaled up.
	css: `
		[data-part=nav] { position: absolute; left: 22px; bottom: 14px; z-index: 1; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font-family: "Instrument Serif"; font-size: 24px; color: var(--white); text-decoration: underline; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] > *, [data-part=card] { position: absolute; margin: 0; }
		[data-part=kicker] { left: 26px; top: 20px; font-family: "Instrument Serif"; font-size: 26px; font-weight: 400; line-height: 1; letter-spacing: 0; text-transform: none; color: var(--blue); text-decoration: underline; }
		[data-part=headline] { left: 20px; top: 52px; font-size: 62px; line-height: 1; font-stretch: 62%; white-space: nowrap; transform: scale(1.05, 2.2); transform-origin: 0 0; text-shadow: 5px 4px 0 var(--green); }
		[data-part=accent] { position: absolute; left: 9.5px; top: 21px; width: 720px; white-space: normal; transform: scale(.952, .4545) rotate(-3deg); transform-origin: 0 0; text-indent: 500px; font: 400 156px/1.49 "Rubik Glitch"; letter-spacing: 0; color: var(--yellow); text-shadow: 9px 9px 0 var(--magenta); }
		[data-part=accent]::first-line { font-family: "Instrument Serif"; font-style: italic; font-size: 84px; color: var(--magenta); text-shadow: none; }
		[data-part=sub] { left: 452px; top: 198px; width: 344px; font-size: 14px; line-height: 1.3; color: var(--black); }
		[data-part=sub]::first-line { background: var(--yellow); }
		[data-part=button] { left: 540px; top: 282px; height: auto; padding: 3px 9px; font-size: 13.3px; font-weight: 400; color: var(--black); background: var(--face); border: 1px solid var(--edge); border-radius: 2px; transform: scale(1.7) rotate(-8deg); transform-origin: 0 0; }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 566px; top: 356px; width: 224px; padding: 10px 14px 12px; gap: 0; rotate: 7deg; border: 0; border-radius: 0; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-family: "Instrument Serif"; font-size: 20px; line-height: 1; color: var(--black); text-decoration: underline; }
		[data-part=number] { font-family: var(--font-code); font-size: 76px; line-height: .8; color: var(--blue); }
		[data-part=caption] { font-size: 12px; font-weight: 700; font-stretch: 125%; letter-spacing: .02em; white-space: nowrap; color: var(--black); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
