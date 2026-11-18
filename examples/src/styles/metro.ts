import type { Style } from "@/theme"
import Decor from "./decor/metro"

export default {
	name: "Metro (Microsoft design language)",
	family: "Digital UI eras",
	fonts: { heading: "Open Sans", body: "Noto Sans", mono: "Fira Mono" },
	google: "family=Open+Sans:wght@300;400;600&family=Noto+Sans:wght@400&family=Fira+Mono",
	radius: "0px",
	border: "2px",
	shadow: "none",
	heading: { weight: 300, case: "lowercase", tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Typography first: the kicker becomes the panorama title, set huge and light and running off the right edge
	// to say the screen keeps going sideways. The number card is the big live tile, its label the tile name at the foot.
	css: `
		[data-part=nav] { position: absolute; left: 224px; bottom: 26px; }
		[data-part=nav] header { height: 44px; padding: 0; }
		[data-part=nav] header > span { color: var(--white); font: 600 16px var(--font-display); text-transform: lowercase; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; left: 26px; top: 150px; width: 360px; gap: 0; }
		[data-part=kicker] { position: absolute; left: -8px; top: -176px; color: var(--white); font: 300 118px/1 var(--font-display); letter-spacing: -.03em; text-transform: lowercase; white-space: nowrap; }
		[data-part=headline] { font-size: 42px; line-height: 1.08; }
		[data-part=sub] { margin-top: 18px; color: var(--grey); font-size: 15px; line-height: 1.5; }
		[data-part=button] { margin-top: 26px; height: auto; padding: 9px 22px 10px; border: 2px solid var(--white); background: none; color: var(--white); font: 600 16px/1 var(--font-display); text-transform: lowercase; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 444px; top: 150px; width: 256px; height: 256px; padding: 14px 16px; border: 0; background: none; color: var(--white); }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { position: absolute; left: 10px; bottom: 8px; color: var(--white); font: 400 13px/1 var(--font-display); text-transform: lowercase; }
		[data-part=number] { font: 300 76px/1 var(--font-display); letter-spacing: -.03em; }
		[data-part=caption] { margin-top: 6px; color: var(--white); font-size: 16px; line-height: 1.3; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
