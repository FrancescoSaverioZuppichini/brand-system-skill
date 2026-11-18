import type { Style } from "@/theme"
import Decor from "./decor/layout-index"

export default {
	name: "Index / list site",
	family: "Layout archetypes",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The intro sits on the table's own columns (headline over title, subline over the rest), so the hero is just
	// the table's caption; the number card is the bottom half of the hover preview.
	css: `
		[data-part=nav] { position: absolute; top: 0; left: 0; }
		[data-part=nav] header { height: 46px; padding: 0 32px; }
		[data-part=nav] header > span { font-size: 15px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { padding: 60px 32px 0; align-items: flex-start; }
		[data-part=copy] { flex: none; width: 313px; gap: 0; }
		[data-part=kicker] { position: absolute; top: 17px; left: 120px; font-family: var(--font-code); font-size: 12px; line-height: 1; letter-spacing: 0; text-transform: none; }
		[data-part=headline] { font-size: 26px; line-height: 1.1; text-wrap: balance; }
		[data-part=sub] { position: absolute; top: 60px; left: 365px; max-width: 352px; font-size: 13px; line-height: 1.5; }
		[data-part=button] { position: absolute; top: 112px; left: 365px; height: auto; padding: 8px 13px; font-size: 12.5px; background: var(--graphite); color: var(--sheet); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 318px; top: 378px; width: 196px; padding: 10px 12px 12px; gap: 0; border: 0; border-radius: 0; background: none; box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label], [data-part=caption] { font-size: 11px; }
		[data-part=number] { font-family: var(--font-body); font-size: 22px; font-weight: 600; letter-spacing: -0.02em; margin: 3px 0 2px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
