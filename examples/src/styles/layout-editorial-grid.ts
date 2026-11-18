import type { Style } from "@/theme"
import Decor from "./decor/layout-editorial-grid"

export default {
	name: "Editorial asymmetric grid",
	family: "Layout archetypes",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.04em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The headline runs across 8 of the 12 columns; under a hairline the standfirst and button drop into a narrow
	// 3-column measure, and the number closes the right column under a heavy rule like a magazine's pull figure.
	css: `
		[data-part=nav] header { max-width: none; width: auto; height: 46px; margin: 0 40px; padding: 0; border-bottom: 1px solid var(--graphite); }
		[data-part=nav] header > span { font-size: 15px; gap: 6px; }
		[data-part=nav] header > span svg { width: 18px; height: 18px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { padding: 0 40px; align-items: flex-start; }
		[data-part=copy] { flex: none; width: 473px; gap: 0; padding-top: 22px; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 11px; letter-spacing: .08em; color: var(--cobalt); }
		[data-part=headline] { font-size: 54px; line-height: .98; margin-top: 14px; }
		[data-part=sub] { width: 165px; margin-top: 15px; padding-top: 14px; border-top: 1px solid var(--hairline); font-size: 14.5px; line-height: 1.45; font-weight: 500; color: var(--graphite); }
		[data-part=button] { height: auto; margin-top: 18px; padding: 9px 14px; font-size: 12.5px; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; right: 40px; bottom: 26px; width: 166px; padding: 12px 0 0; gap: 0; border: 0; border-top: 2px solid var(--graphite); border-radius: 0; box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-family: var(--font-code); font-size: 10.5px; font-weight: 500; letter-spacing: .06em; text-transform: uppercase; }
		[data-part=number] { font-family: var(--font-body); font-size: 34px; font-weight: 700; letter-spacing: -0.03em; margin: 8px 0 4px; }
		[data-part=caption] { font-size: 11.5px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
