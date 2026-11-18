import type { Style } from "@/theme"
import Decor from "./decor/kids"

export default {
	name: "Kids / playful",
	family: "Industry-coded languages",
	fonts: { heading: "Fredoka", body: "Nunito", mono: "Sniglet" },
	google: "family=Fredoka:wght@600;700&family=Nunito:wght@700&family=Sniglet",
	radius: "18px",
	border: "3px",
	shadow: "0 5px 0 var(--cloud-edge)",
	heading: { weight: 700, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Depth is a solid darker bottom edge (a 0-blur box-shadow), never a soft shadow. "keep" turns green through
	// a hard gradient stop clipped to the text. The button keeps the game's bright green with white caps; the theme's
	// primary role is the darker forest green, which passes contrast for everyday buttons.
	css: `
		[data-part=nav] { position: absolute; left: 48px; top: 30px; z-index: 1; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font-size: 22px; font-weight: 700; }
		[data-part=nav] header > span svg rect:first-child { fill: var(--green); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] { position: absolute; left: 48px; top: 86px; width: 470px; gap: 0; align-items: flex-start; }
		[data-part=kicker] { padding: 8px 16px; border-radius: 999px; background: var(--yellow); box-shadow: 0 4px 0 var(--yellow-edge); font-family: var(--font-display); font-size: 15px; font-weight: 600; letter-spacing: 0; text-transform: none; color: var(--ink); }
		[data-part=headline] { margin: 22px 0 18px; font-size: 60px; line-height: .98; }
		[data-part=accent] { display: table; background: linear-gradient(90deg, var(--ink) 0 184px, var(--green-edge) 184px); background-clip: text; color: transparent; }
		[data-part=sub] { max-width: 430px; font-size: 16px; font-weight: 700; line-height: 1.5; color: var(--slate); }
		[data-part=button] { margin-top: 26px; height: auto; padding: 17px 34px; border-radius: 18px; background: var(--green); box-shadow: 0 5px 0 var(--green-edge); color: var(--white); text-shadow: 0 1px 0 var(--green-edge); font-family: var(--font-display); font-size: 19px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 556px; top: 324px; width: 216px; padding: 16px 18px 14px; gap: 0; border-radius: 20px; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-family: var(--font-display); font-size: 13px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--red); }
		[data-part=number] { font-size: 48px; font-weight: 700; line-height: 1.05; letter-spacing: 0; color: var(--blue-edge); font-variant-numeric: normal; }
		[data-part=caption] { font-size: 13.5px; font-weight: 700; color: var(--slate); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
