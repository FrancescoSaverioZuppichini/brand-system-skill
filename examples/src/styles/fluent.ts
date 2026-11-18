import type { Style } from "@/theme"
import Decor from "./decor/fluent"

export default {
	name: "Fluent",
	family: "Digital UI eras",
	fonts: { heading: "Noto Sans", body: "Noto Sans", mono: "JetBrains Mono" },
	google: "family=Noto+Sans:wght@400;600;700&family=JetBrains+Mono",
	radius: "4px",
	border: "1px",
	shadow: "0 2px 4px oklch(0 0 0 / .14), 0 0 2px oklch(0 0 0 / .12)",
	heading: { weight: 600, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The logo is the Mica window's title, the button a 32 px accent button with a leading plus, and the number
	// card an Acrylic toast (more transparent than Mica, blurring what is under it) that pops out over the window edge.
	css: `
		[data-part=nav] { position: absolute; top: 22px; left: 44px; }
		[data-part=nav] header { height: 40px; padding: 0; }
		[data-part=nav] header > span { gap: 10px; font: 400 12px var(--font-body); }
		[data-part=nav] header > span svg { width: 16px; height: 16px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; left: 114px; top: 92px; width: 474px; gap: 0; }
		[data-part=kicker] { color: var(--communication-blue); font-size: 12px; font-weight: 600; letter-spacing: 0; text-transform: none; }
		[data-part=headline] { margin: 10px 0; max-width: 320px; font-size: 38px; line-height: 1.15; }
		[data-part=sub] { max-width: 370px; color: var(--ink-secondary); font-size: 14px; line-height: 1.45; }
		[data-part=button] { margin-top: 22px; height: 32px; gap: 8px; padding: 0 14px; font-size: 14px; font-weight: 600; box-shadow: inset 0 -1px 0 var(--blue-pressed), 0 0 0 1px oklch(0 0 0 / .04); }
		[data-part=button]::before { content: ""; width: 12px; height: 12px; background: linear-gradient(currentColor, currentColor) center / 12px 1.5px no-repeat, linear-gradient(currentColor, currentColor) center / 1.5px 12px no-repeat; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 540px; top: 238px; width: 236px; padding: 14px 16px 18px; gap: 0; border: 0; border-radius: 8px; background: oklch(0.97 0.006 245 / .72); backdrop-filter: blur(30px) saturate(1.5);
			box-shadow: 0 0 0 1px oklch(0 0 0 / .08), inset 0 1px 0 oklch(1 0 0 / .7), 0 16px 32px oklch(0.15 0.05 250 / .28), 0 2px 6px oklch(0 0 0 / .1); }
		[data-part=card]::before { content: "Keep"; padding-left: 24px; color: var(--ink-secondary); font-size: 12px; line-height: 16px; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { margin-top: 14px; color: var(--ink); font-size: 14px; font-weight: 600; }
		[data-part=number] { margin: 8px 0 4px; color: var(--blue-pressed); font-size: 34px; font-weight: 600; letter-spacing: -.01em; font-variant-numeric: normal; }
		[data-part=caption] { color: var(--ink-secondary); font-size: 13px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
