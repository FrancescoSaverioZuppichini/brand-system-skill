import type { Style } from "@/theme"
import Decor from "./decor/skeuomorphism"

export default {
	name: "Skeuomorphism",
	family: "Digital UI eras",
	fonts: { heading: "Fraunces", body: "Inter", mono: "DM Mono" },
	google: "family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;700&family=DM+Mono",
	radius: "8px",
	border: "1px",
	shadow: "0 1px 0 oklch(1 0 0 / .6), 0 2px 4px oklch(0.2 0.03 60 / .3)",
	heading: { weight: 700, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The copy is written on the notepad, so every line height is a multiple of its 30 px rule and the text sits
	// on the blue lines. The logo is the embossed title in the leather binding; the number is a brushed-metal plate
	// whose four screws are radial gradients pinned to its corners.
	css: `
		[data-part=nav] { position: absolute; top: 26px; left: 36px; width: 488px; height: 62px; }
		[data-part=nav] header { height: 100%; justify-content: center; padding: 0; }
		[data-part=nav] header > span { color: oklch(0.86 0.04 75); font: 700 20px var(--font-body); letter-spacing: -.01em; text-shadow: 0 -1px 0 oklch(0.15 0.03 45), 0 1px 0 oklch(0.55 0.06 55 / .6); }
		[data-part=nav] header > span svg rect { filter: drop-shadow(0 -1px 0 oklch(0.15 0.03 45)); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; left: 102px; top: 114px; width: 392px; gap: 0; }
		[data-part=kicker] { margin-top: 4px; height: 30px; color: var(--leather); font-size: 12px; font-weight: 700; line-height: 30px; letter-spacing: .14em; }
		[data-part=headline] { color: var(--ink); font-size: 44px; line-height: 60px; text-shadow: 0 1px 0 oklch(1 0 0 / .6); }
		[data-part=sub] { color: oklch(0.38 0.04 55); font-size: 14.5px; line-height: 30px; }
		[data-part=button] { margin-top: 22px; height: 38px; padding: 0 20px; border-radius: 8px; color: white; font-size: 15px; font-weight: 700; text-shadow: 0 -1px 0 oklch(0.25 0.08 255 / .7);
			background: linear-gradient(180deg, oklch(0.78 0.1 250), var(--gloss-blue) 50%, oklch(0.52 0.16 255) 51%, oklch(0.58 0.15 252));
			box-shadow: inset 0 1px 0 oklch(1 0 0 / .55), 0 0 0 1px oklch(0.38 0.13 258), 0 2px 3px oklch(0 0 0 / .3); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 556px; top: 92px; width: 210px; height: 300px; padding: 28px 22px 0; border: 0; background: none; box-shadow: none; text-align: center; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { margin-top: 4px; color: oklch(0.97 0.01 120); font-size: 13px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; text-shadow: 0 -1px 0 oklch(0.18 0.05 150); }
		[data-part=number] { display: grid; place-items: center; height: 112px; margin: 22px 0 18px; border-radius: 8px; color: oklch(0.42 0.01 250); font-size: 50px; font-weight: 700; letter-spacing: -.01em; font-variant-numeric: normal;
			text-shadow: 0 1px 0 oklch(1 0 0 / .9), 0 -1px 0 oklch(0 0 0 / .35);
			background:
				radial-gradient(circle at 12px 12px, white 0 1px, oklch(0.7 0.01 250) 3px, oklch(0.45 0.01 250) 4.5px, transparent 5px),
				radial-gradient(circle at calc(100% - 12px) 12px, white 0 1px, oklch(0.7 0.01 250) 3px, oklch(0.45 0.01 250) 4.5px, transparent 5px),
				radial-gradient(circle at 12px calc(100% - 12px), white 0 1px, oklch(0.7 0.01 250) 3px, oklch(0.45 0.01 250) 4.5px, transparent 5px),
				radial-gradient(circle at calc(100% - 12px) calc(100% - 12px), white 0 1px, oklch(0.7 0.01 250) 3px, oklch(0.45 0.01 250) 4.5px, transparent 5px),
				repeating-linear-gradient(90deg, oklch(1 0 0 / 0) 0 1px, oklch(0 0 0 / .05) 1px 2px, oklch(1 0 0 / .12) 2px 3px),
				linear-gradient(180deg, oklch(0.97 0.004 250), var(--chrome) 46%, oklch(0.74 0.01 250) 54%, oklch(0.9 0.006 250));
			box-shadow: inset 0 1px 0 white, inset 0 -1px 0 oklch(0.6 0.01 250), 0 3px 6px oklch(0 0 0 / .45); }
		[data-part=caption] { margin: 0 auto; width: 120px; color: oklch(0.92 0.03 140); font-size: 14px; font-weight: 500; line-height: 1.35; text-shadow: 0 -1px 0 oklch(0.18 0.05 150); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
