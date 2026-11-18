import type { Style } from "@/theme"
import Decor from "./decor/pixel"

export default {
	name: "Pixel / 8-bit",
	family: "Digital UI eras",
	fonts: { heading: "Press Start 2P", body: "VT323", mono: "Silkscreen" },
	google: "family=Press+Start+2P&family=Silkscreen&family=VT323",
	radius: "0px",
	border: "4px",
	shadow: "4px 4px 0 oklch(0.15 0.04 280)",
	heading: { weight: 400, case: "uppercase" },
	specimen: "start",
	decor: Decor,
	// [Agent] Pixel borders are four 4 px box-shadows offset up, down, left and right with no blur: the corner pixel stays
	// empty, which is the stepped 8-bit corner. The subline is a game dialog box with its "more" arrow.
	css: `
		--pixel-border: 0 -4px 0 0 var(--white), 0 4px 0 0 var(--white), -4px 0 0 0 var(--white), 4px 0 0 0 var(--white);
		[data-part=frame] { -webkit-font-smoothing: none; }
		[data-part=nav] { position: absolute; left: 160px; top: 36px; z-index: 1; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { font-family: var(--font-code); font-size: 16px; color: var(--white); gap: 10px; }
		[data-part=nav] header > span svg { shape-rendering: crispEdges; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 0; }
		[data-part=copy] > *, [data-part=card] { position: absolute; margin: 0; }
		[data-part=kicker] { left: 40px; top: 104px; font: 16px/1 var(--font-display); letter-spacing: 0; color: var(--yellow); }
		[data-part=headline] { left: 40px; top: 140px; font-size: 32px; line-height: 48px; text-shadow: 4px 4px 0 var(--red); }
		[data-part=accent] { display: block; }
		[data-part=sub] { left: 44px; top: 264px; width: 520px; max-width: none; padding: 12px 60px 14px 16px; background: var(--panel); box-shadow: var(--pixel-border); font-size: 20px; line-height: 24px; color: var(--white); }
		[data-part=sub]::after { content: ""; position: absolute; right: 12px; bottom: 8px; border: 6px solid transparent; border-top: 8px solid var(--yellow); border-bottom: 0; }
		[data-part=button] { left: 76px; top: 372px; height: auto; padding: 12px 16px; border-radius: 0; font: 16px/16px var(--font-display); text-transform: uppercase; box-shadow: var(--pixel-border), 0 12px 0 0 oklch(0.15 0.04 280); }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 528px; top: 28px; width: 248px; padding: 12px 14px; gap: 0; border: 0; box-shadow: var(--pixel-border); }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font: 16px/16px var(--font-code); color: var(--green); }
		[data-part=number] { margin: 14px 0 12px 44px; font: 24px/24px var(--font-display); color: var(--yellow); }
		[data-part=caption] { font-size: 20px; line-height: 20px; color: var(--white); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
