import type { Style } from "@/theme"
import Decor from "./decor/glassmorphism"

export default {
	name: "Glassmorphism",
	family: "Digital UI eras",
	fonts: { heading: "Plus Jakarta Sans", body: "Plus Jakarta Sans", mono: "DM Mono" },
	google: "family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@500",
	radius: "20px",
	border: "1px",
	shadow: "0 24px 48px oklch(0.15 0.08 285 / .35)",
	heading: { weight: 800, tracking: "-0.03em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The number card is a second pane of glass: white at 18 % with a 1 px light rim, blurring the blobs and the
	// sphere behind it, and its bar chart becomes a single cyan-to-pink progress bar.
	css: `
		[data-part=nav] { position: absolute; top: 28px; left: 64px; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { color: var(--frost); font-weight: 800; letter-spacing: -.02em; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; left: 100px; top: 112px; width: 380px; gap: 0; align-items: flex-start; }
		[data-part=kicker] { padding: 7px 14px; border-radius: 999px; background: oklch(1 0 0 / .22); box-shadow: inset 0 0 0 1px oklch(1 0 0 / .3); color: var(--frost); font-size: 12px; font-weight: 600; letter-spacing: .04em; text-transform: none; }
		[data-part=headline] { margin: 18px 0 14px; font-size: 44px; line-height: 1.05; }
		[data-part=sub] { color: oklch(1 0 0 / .75); font-size: 15px; line-height: 1.55; }
		[data-part=button] { margin-top: 26px; height: auto; padding: 14px 24px; border-radius: 14px; font-size: 15px; font-weight: 700; box-shadow: 0 8px 24px oklch(0.15 0.08 285 / .35); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 488px; top: 262px; width: 240px; padding: 22px 24px; gap: 0; border: 0; border-radius: 20px; background: oklch(1 0 0 / .18); backdrop-filter: blur(24px) saturate(1.3);
			box-shadow: inset 0 0 0 1px oklch(1 0 0 / .3), inset 0 1px 0 oklch(1 0 0 / .45), 0 24px 48px oklch(0.15 0.08 285 / .35); }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { color: oklch(1 0 0 / .75); font: 500 11px/1 var(--font-code); letter-spacing: .12em; text-transform: uppercase; }
		[data-part=number] { margin: 12px 0 6px; font-size: 44px; font-weight: 800; letter-spacing: -.03em; font-variant-numeric: normal; }
		[data-part=caption] { color: oklch(1 0 0 / .75); font-size: 13px; font-weight: 500; line-height: 1.4; }
		[data-part=chart] { height: 6px; margin-top: 16px; border-radius: 3px; background: linear-gradient(90deg, var(--blob-cyan), var(--blob-pink)) 0 0 / 72% 100% no-repeat, oklch(1 0 0 / .18); }
		[data-part=chart] span { display: none; }
	`,
} satisfies Style
