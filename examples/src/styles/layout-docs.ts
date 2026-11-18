import type { Style } from "@/theme"
import Decor from "./decor/layout-docs"

export default {
	name: "Documentation",
	family: "Layout archetypes",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.025em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The hero becomes the top of an article in the middle column: the number card turns into a callout row with
	// an accent rule, and the button closes the page as the "next" link under a hairline.
	css: `
		[data-part=nav] { position: absolute; top: 0; left: 0; }
		[data-part=nav] header { height: 48px; padding: 0 24px; }
		[data-part=nav] header > span { font-size: 15px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { padding: 70px 0 0 204px; align-items: flex-start; }
		[data-part=copy] { flex: none; width: 414px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 11px; line-height: 1; letter-spacing: 0; text-transform: none; color: var(--cobalt); }
		[data-part=headline] { font-size: 26px; line-height: 1.15; margin-top: 10px; }
		[data-part=sub] { font-size: 13.5px; line-height: 1.6; margin-top: 10px; color: oklch(0.38 0.012 255); }
		[data-part=button] { position: absolute; top: 442px; right: 182px; height: auto; padding: 8px 14px; font-size: 12.5px; border-radius: 6px; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 204px; top: 190px; width: 414px; padding: 10px 14px; border: 0; border-left: 3px solid var(--cobalt); border-radius: 0 6px 6px 0; background: var(--tint); box-shadow: none; }
		[data-part=card] > div { flex-direction: row; align-items: baseline; gap: 10px; padding: 0; }
		[data-part=label] { font-size: 11.5px; font-weight: 600; color: var(--cobalt); }
		[data-part=number] { font-family: var(--font-body); font-size: 18px; font-weight: 700; letter-spacing: -0.02em; }
		[data-part=caption] { font-size: 11.5px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
