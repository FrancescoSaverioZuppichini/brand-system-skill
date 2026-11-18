import type { Style } from "@/theme"
import Decor from "./decor/layout-long-scroll"

export default {
	name: "Long-scroll storytelling",
	family: "Layout archetypes",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.035em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Each piece of the hero lands in its own chapter band: the copy in 01, the number card in 02, the button in
	// the dark 03, so the frame reads as one story caught mid-scroll under the pinned visual.
	css: `
		[data-part=nav] { position: absolute; top: 3px; left: 0; width: 400px; }
		[data-part=nav] header { padding: 18px 40px 0; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { padding: 82px 0 0 40px; align-items: flex-start; }
		[data-part=copy] { flex: none; width: 350px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 12px; letter-spacing: 0; text-transform: none; color: var(--cobalt); }
		[data-part=headline] { font-size: 40px; line-height: 1.02; margin-top: 10px; }
		[data-part=sub] { font-size: 13.5px; line-height: 1.5; margin-top: 14px; }
		[data-part=button] { position: absolute; left: 40px; top: 432px; height: auto; padding: 10px 16px; font-size: 13px; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 40px; top: 292px; width: 200px; padding: 12px 14px; gap: 0; border-radius: 8px; box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label], [data-part=caption] { font-size: 11px; }
		[data-part=number] { font-family: var(--font-body); font-size: 24px; font-weight: 600; letter-spacing: -0.02em; margin: 4px 0 2px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
