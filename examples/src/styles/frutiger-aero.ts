import type { Style } from "@/theme"
import Decor from "./decor/frutiger-aero"

export default {
	name: "Frutiger Aero",
	family: "Digital UI eras",
	fonts: { heading: "Source Sans 3", body: "Source Sans 3", mono: "Fira Mono" },
	google: "family=Source+Sans+3:wght@300;400;600;700&family=Fira+Mono",
	radius: "9px",
	border: "1px",
	shadow: "0 4px 10px oklch(0.25 0.1 250 / .25)",
	heading: { weight: 300, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The logo is the glass window's title (glowing text on the frosted frame), the button a glossy grass pill,
	// and the number card a Vista sidebar gadget whose bar chart turns into the glowing aqua orb at its foot.
	css: `
		--gloss: linear-gradient(180deg, oklch(1 0 0 / .85), oklch(1 0 0 / .35) 49%, oklch(1 0 0 / 0) 50%);
		[data-part=nav] { position: absolute; top: 44px; left: 44px; }
		[data-part=nav] header { height: 30px; padding: 0; }
		[data-part=nav] header > span { gap: 7px; color: oklch(0.15 0.02 250); font: 400 14px var(--font-body); text-shadow: 0 0 8px white, 0 0 4px white; }
		[data-part=nav] header > span svg { width: 16px; height: 16px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; left: 77px; top: 102px; width: 392px; gap: 0; }
		[data-part=kicker] { color: oklch(0.5 0.12 200); font-size: 13px; font-weight: 600; letter-spacing: .04em; text-transform: none; }
		[data-part=headline] { max-width: 300px; margin: 10px 0 12px; color: var(--deep-blue); font-size: 40px; line-height: 1.06; }
		[data-part=sub] { max-width: 360px; color: var(--ink-blue); font-size: 15px; line-height: 1.5; }
		[data-part=button] { margin-top: 22px; height: auto; padding: 11px 26px; border-radius: 999px; color: white; font-size: 15px; font-weight: 700; text-shadow: 0 1px 1px oklch(0.35 0.12 150);
			background: var(--gloss), linear-gradient(180deg, oklch(0.8 0.17 140), var(--grass) 50%, oklch(0.58 0.16 145) 51%, oklch(0.74 0.17 140));
			box-shadow: 0 0 0 1px oklch(0.45 0.13 150), inset 0 -4px 8px oklch(0.9 0.14 130 / .7), 0 4px 10px oklch(0.45 0.13 150 / .35); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 540px; top: 92px; width: 210px; padding: 22px 20px 24px; border: 0; border-radius: 12px; color: white; text-align: center;
			background: linear-gradient(180deg, oklch(1 0 0 / .42), oklch(1 0 0 / .08) 48%, oklch(1 0 0 / 0) 49%), linear-gradient(180deg, oklch(0.45 0.13 245), oklch(0.25 0.09 255));
			box-shadow: 0 0 0 1px oklch(0.2 0.06 255), inset 0 0 0 1px oklch(1 0 0 / .45), 0 12px 26px oklch(0.25 0.1 250 / .5); }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { color: var(--aqua); font-size: 13px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
		[data-part=number] { margin: 12px 0 8px; font-size: 56px; font-weight: 300; text-shadow: 0 0 14px oklch(0.85 0.1 200 / .8); }
		[data-part=caption] { color: oklch(0.9 0.03 220); font-size: 14px; line-height: 1.3; }
		[data-part=chart] { width: 34px; height: 34px; margin: 16px auto 0; border-radius: 50%; background: var(--gloss), radial-gradient(circle at 50% 70%, oklch(0.9 0.12 195), oklch(0.62 0.13 215)); box-shadow: 0 0 0 1px oklch(0.85 0.06 210 / .8), 0 0 14px oklch(0.85 0.1 200 / .7); }
		[data-part=chart] span { display: none; }
	`,
} satisfies Style
