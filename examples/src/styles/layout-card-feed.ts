import type { Style } from "@/theme"
import Decor from "./decor/layout-card-feed"

export default {
	name: "Card feed",
	family: "Layout archetypes",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.025em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The hero shrinks to a feed header (one line of headline over the filter chips), the button moves up into
	// the app bar, and the number card becomes one post in the second masonry column.
	css: `
		[data-part=nav] { position: absolute; top: 0; left: 0; }
		[data-part=nav] header { height: 56px; padding: 0 40px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { padding: 70px 0 0 40px; align-items: flex-start; }
		[data-part=copy] { flex: none; width: 420px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 11.5px; letter-spacing: 0; text-transform: none; color: var(--cobalt); }
		[data-part=headline] { font-size: 28px; line-height: 1.1; margin-top: 8px; }
		[data-part=sub] { max-width: 340px; font-size: 12.5px; line-height: 1.5; margin-top: 8px; }
		[data-part=button] { position: absolute; top: 11px; right: 86px; height: 32px; padding: 0 14px; font-size: 12.5px; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 224px; top: 383px; width: 168px; padding: 14px; gap: 0; border-radius: 8px; background: var(--tint); border-color: oklch(0.56 0.2 260 / 0.15); box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label], [data-part=caption] { font-size: 11px; }
		[data-part=number] { font-family: var(--font-body); font-size: 26px; font-weight: 700; letter-spacing: -0.02em; color: var(--cobalt); margin: 4px 0 2px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
