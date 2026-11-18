import type { Style } from "@/theme"
import Decor from "./decor/hud"

export default {
	name: "Sci-fi HUD / FUI",
	family: "Digital UI eras",
	fonts: { heading: "Rajdhani", body: "Chakra Petch", mono: "JetBrains Mono" },
	google:
		"family=Rajdhani:wght@500;600&family=Chakra+Petch:wght@400&family=Orbitron:wght@500&family=JetBrains+Mono:wght@400;500",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, case: "uppercase", tracking: "0.07em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Corner brackets instead of boxes: eight 1 px gradients (an L per corner) sized by --l and coloured by --c, so
	// the copy block, the button and the readout each get their own bracket size and colour from one rule.
	css: `
		[data-part=copy], [data-part=button], [data-part=card] { --c: var(--cyan); --l: 18px; background:
			linear-gradient(var(--c), var(--c)) 0 0 / var(--l) 1px no-repeat, linear-gradient(var(--c), var(--c)) 0 0 / 1px var(--l) no-repeat,
			linear-gradient(var(--c), var(--c)) 100% 0 / var(--l) 1px no-repeat, linear-gradient(var(--c), var(--c)) 100% 0 / 1px var(--l) no-repeat,
			linear-gradient(var(--c), var(--c)) 0 100% / var(--l) 1px no-repeat, linear-gradient(var(--c), var(--c)) 0 100% / 1px var(--l) no-repeat,
			linear-gradient(var(--c), var(--c)) 100% 100% / var(--l) 1px no-repeat, linear-gradient(var(--c), var(--c)) 100% 100% / 1px var(--l) no-repeat; }
		[data-part=nav] { position: absolute; top: 28px; left: 40px; z-index: 1; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font-family: var(--font-code); font-size: 13px; font-weight: 500; letter-spacing: .3em; text-transform: uppercase; color: var(--cyan); }
		[data-part=nav] header > span svg { width: 16px; height: 16px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] { position: absolute; left: 34px; top: 74px; width: 380px; padding: 22px 22px 24px; gap: 0; align-items: flex-start; }
		[data-part=kicker] { font: 500 11px/1 var(--font-code); letter-spacing: .24em; color: var(--cyan); }
		[data-part=kicker]::before { content: "01 // "; background: linear-gradient(90deg, var(--cyan) 0 19px, var(--dim) 19px); background-clip: text; color: transparent; }
		[data-part=headline] { margin-top: 16px; font-size: 44px; line-height: 1.02; text-shadow: 0 0 14px oklch(0.84 0.13 205 / .55); }
		[data-part=sub] { margin-top: 16px; padding-left: 12px; border-left: 1px solid var(--dim); font-size: 13px; line-height: 1.6; color: var(--haze); }
		[data-part=button] { --l: 8px; margin-top: 24px; height: auto; padding: 11px 22px; background-color: oklch(0.84 0.13 205 / .1); color: var(--cyan); font: 600 14px/1 var(--font-display); letter-spacing: .22em; text-transform: uppercase; }
		[data-part=button] svg { display: none; }
		[data-part=button]::after { content: ""; margin-left: 4px; border: 5px solid transparent; border-left-color: var(--cyan); border-right: 0; }
		[data-part=card] { --c: var(--amber); --l: 10px; position: absolute; left: 574px; top: 392px; width: 196px; padding: 10px 14px 12px; gap: 0; border: 0; background-color: oklch(0.17 0.035 245 / .92); box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font: 500 10px/1 var(--font-code); letter-spacing: .22em; text-transform: uppercase; color: var(--amber); }
		[data-part=number] { margin: 6px 0 4px; font: 500 28px/1 Orbitron; color: var(--amber); text-shadow: 0 0 12px oklch(0.80 0.15 75 / .6); }
		[data-part=caption] { font: 400 10.5px/1 var(--font-code); color: var(--haze); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
