import type { Style } from "@/theme"
import Decor from "./decor/swiss"

export default {
	name: "Swiss / International Typographic",
	family: "Modernist and print",
	fonts: { heading: "Inter Tight", body: "Inter", mono: "IBM Plex Mono" },
	google: "family=Inter+Tight:wght@600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.045em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Flush left on a hard left axis, the number reversed out of the red field, rules instead of boxes.
	css: `
		[data-part=nav] header { margin: 0 300px 0 40px; padding: 22px 0 10px; border-bottom: 1px solid var(--ink); max-width: none; width: auto; }
		[data-part=nav] [data-slot=button] { background: var(--ink); color: var(--paper); }
		[data-part=body] { padding-right: 300px; }
		[data-part=kicker] { text-transform: none; letter-spacing: 0; color: var(--ink); font-size: 13px; }
		[data-part=headline] { font-size: 76px; line-height: .92; }
		[data-part=headline]::after { content: "."; color: var(--signal); }
		[data-part=sub] { color: var(--ink); border-top: 1px solid var(--ink); padding-top: 14px; max-width: none; }
		[data-part=button] { background: var(--ink); color: var(--paper); }
		[data-part=card] { position: absolute; top: 92px; right: 40px; width: 200px; background: none; border: 0; padding: 0; color: var(--paper); }
		[data-part=card] > div { padding: 0; }
		[data-part=label], [data-part=caption] { color: var(--paper); font-size: 13px; }
		[data-part=label] { font-family: var(--font-code); }
		[data-part=number] { font-size: 64px; font-weight: 600; letter-spacing: -0.04em; margin: 10px 0 6px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
