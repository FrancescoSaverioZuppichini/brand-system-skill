import type { Style } from "@/theme"
import Decor from "./decor/glitch"

export default {
	name: "Glitch",
	family: "Illustration and imagery",
	fonts: { heading: "Archivo", body: "Space Mono", mono: "Space Mono" },
	google: "family=Archivo:wght@500;800&family=Rubik+Glitch&family=Space+Mono:wght@400;700",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 800, case: "uppercase", tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Every edge is split into red and cyan (text-shadow on type, box-shadow on the button). Only "keep" breaks
	// into Rubik Glitch: the accent is a block that wraps after "people", and ::first-line puts that word back in Archivo.
	// The headline's ::after is a copy of its first lines clipped to a thin band and shoved sideways: one torn scan line.
	css: `
		[data-part=nav] header { padding: 18px 44px 0; }
		[data-part=nav] header > span { text-shadow: -2px 0 var(--red), 2px 0 var(--cyan); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 16px 0 0 44px; }
		[data-part=copy] { flex: none; width: 330px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-weight: 700; font-size: 12px; letter-spacing: .08em; color: var(--cyan); }
		[data-part=headline] { position: relative; font-size: 52px; line-height: .98; margin: 16px 0 18px; text-shadow: -3px 0 var(--red), 3px 0 var(--cyan); }
		[data-part=headline]::after { content: "Make something"; position: absolute; top: 0; left: 14px; color: var(--white); clip-path: inset(30% 0 58% 0); text-shadow: -3px 0 var(--cyan); }
		[data-part=accent] { display: block; font-family: "Rubik Glitch"; font-weight: 400; text-shadow: -2px 0 var(--red); }
		[data-part=accent]::first-line { font-family: var(--font-heading); font-weight: 800; text-shadow: -3px 0 var(--red), 3px 0 var(--cyan); }
		[data-part=sub] { font-size: 13px; line-height: 1.6; margin-bottom: 24px; }
		[data-part=button] { height: auto; padding: 13px 18px; font-weight: 700; font-size: 13px; text-transform: uppercase; box-shadow: -4px 0 0 var(--red), 4px 0 0 var(--cyan); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; right: 24px; bottom: 24px; z-index: 1; width: auto; padding: 10px 14px; border: 1px solid oklch(0.98 0 0 / .4); }
		[data-part=card] > div { display: grid; grid-template-columns: auto auto; column-gap: 14px; row-gap: 4px; align-items: center; padding: 0; }
		[data-part=number] { grid-area: 1 / 1 / 3 / 2; font-weight: 800; font-size: 30px; text-shadow: -2px 0 var(--red), 2px 0 var(--cyan); }
		[data-part=label] { align-self: end; font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: var(--red); }
		[data-part=caption] { align-self: start; font-size: 11px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
