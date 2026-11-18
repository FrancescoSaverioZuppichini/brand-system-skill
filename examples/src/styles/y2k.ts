import type { Style } from "@/theme"
import Decor from "./decor/y2k"

export default {
	name: "Y2K",
	family: "Digital UI eras",
	fonts: { heading: "Unbounded", body: "Inter", mono: "Michroma" },
	google: "family=Michroma&family=Unbounded:wght@700;900&family=Inter:wght@500",
	radius: "999px",
	border: "1px",
	shadow: "0 8px 18px oklch(0.6 0.14 220 / .35)",
	heading: { weight: 900, case: "lowercase", tracking: "-0.02em" },
	specimen: "center",
	decor: Decor,
	// [Agent] Chrome type is a background clipped to the letters: sky above a hard horizon, dark ground just below,
	// then a bright reflection, repeated once per 60 px line. The button and the grape iMac card get their gloss from a
	// highlight pseudo-element sent behind their own text (isolation keeps it above their background).
	css: `
		[data-part=nav] { position: absolute; top: 18px; left: 24px; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font: 400 14px var(--font-code); letter-spacing: .08em; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { justify-content: flex-start; padding-top: 70px; }
		[data-part=copy] { gap: 0; max-width: 700px; }
		[data-part=kicker] { display: inline-flex; align-items: center; gap: 8px; padding: 7px 16px 7px 10px; border-radius: 999px; color: var(--navy); font: 400 11px/1 var(--font-code); letter-spacing: .2em;
			background: linear-gradient(180deg, oklch(1 0 0 / .9), oklch(0.92 0.02 240 / .7));
			box-shadow: inset 0 0 0 1px oklch(1 0 0), 0 0 0 1px var(--chrome), 0 4px 10px oklch(0.5 0.05 250 / .15); }
		[data-part=kicker]::before { content: ""; width: 12px; height: 12px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, white, var(--lime) 45%, oklch(0.65 0.18 130)); }
		[data-part=headline] { margin: 20px 0 16px; max-width: 640px; font-size: 56px; line-height: 60px; color: transparent; -webkit-text-stroke: 1.2px var(--navy);
			background: linear-gradient(180deg, oklch(1 0 0) 0%, oklch(0.88 0.03 235) 38%, oklch(0.42 0.06 255) 50%, oklch(0.62 0.08 230) 56%, oklch(0.97 0.02 220) 100%) 0 4px / 100% 60px repeat-y;
			background-clip: text; filter: drop-shadow(0 3px 0 oklch(0.55 0.06 255 / .5)) drop-shadow(0 0 14px oklch(1 0 0)); }
		[data-part=sub] { max-width: 420px; color: var(--navy); font-size: 15px; font-weight: 500; line-height: 1.6; }
		[data-part=button] { position: relative; isolation: isolate; overflow: hidden; margin-top: 24px; height: auto; padding: 15px 30px; color: white; font: 400 12px/1 var(--font-code); letter-spacing: .14em; text-transform: uppercase; text-shadow: 0 1px 1px oklch(0.35 0.12 230);
			background: linear-gradient(180deg, oklch(0.88 0.1 210), var(--cyber-cyan) 48%, oklch(0.62 0.15 225) 50%, oklch(0.78 0.14 210));
			box-shadow: 0 0 0 1px oklch(0.5 0.12 235), inset 0 -3px 6px oklch(0.95 0.08 200 / .8), 0 8px 18px oklch(0.6 0.14 220 / .45); }
		[data-part=button]::before { content: ""; position: absolute; z-index: -1; left: 10px; right: 10px; top: 2px; height: 46%; border-radius: 999px; background: linear-gradient(180deg, oklch(1 0 0 / .95), oklch(1 0 0 / .15)); }
		[data-part=button] svg { display: none; }
		[data-part=card] { right: 44px; bottom: 34px; width: 188px; padding: 18px; isolation: isolate; overflow: hidden; border: 0; border-radius: 34px; transform: rotate(-7deg); color: white;
			background: linear-gradient(150deg, oklch(0.8 0.12 310 / .65), oklch(0.58 0.21 300 / .82)); backdrop-filter: blur(6px);
			box-shadow: inset 0 0 0 1px oklch(1 0 0 / .7), inset 0 -10px 20px oklch(0.4 0.18 300 / .5), 0 16px 30px oklch(0.45 0.18 300 / .35); }
		[data-part=card]::before { content: ""; position: absolute; z-index: -1; left: 10px; right: 10px; top: 5px; height: 40%; border-radius: 28px 28px 50% 50%; background: linear-gradient(180deg, oklch(1 0 0 / .7), oklch(1 0 0 / 0)); }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { color: white; font: 400 9px/1 var(--font-code); letter-spacing: .2em; text-transform: uppercase; }
		[data-part=number] { margin: 8px 0 4px; font-size: 38px; font-weight: 900; font-variant-numeric: normal; text-shadow: 0 2px 0 oklch(0.4 0.18 300 / .6); }
		[data-part=caption] { color: white; font-size: 12px; font-weight: 500; line-height: 1.3; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
