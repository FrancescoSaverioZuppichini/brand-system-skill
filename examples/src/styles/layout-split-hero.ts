import type { Style } from "@/theme"
import Decor from "./decor/layout-split-hero"

export default {
	name: "Split hero",
	family: "Layout archetypes",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "0 12px 28px -10px oklch(0.3 0.03 260 / 0.3)",
	heading: { weight: 600, tracking: "-0.03em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Copy in columns 1–5, vertically centred; the number card floats over the seam between copy and product
	// window, which is where the hero gets its depth. The empty ghost button marks the second action's slot.
	css: `
		[data-part=nav] header { max-width: none; width: auto; height: 64px; margin: 0 40px; padding: 0; border-bottom: 1px solid var(--hairline); }
		[data-part=nav] [data-slot=button] { height: 30px; padding: 0 18px; background: none; color: var(--graphite); border: 1px solid var(--hairline); box-shadow: none; }
		[data-part=body] { padding: 0 40px; align-items: center; }
		[data-part=copy] { flex: none; width: 286px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 12px; letter-spacing: 0; text-transform: none; color: var(--cobalt); }
		[data-part=headline] { font-size: 39px; line-height: 1.06; margin-top: 14px; }
		[data-part=sub] { font-size: 14px; line-height: 1.55; margin: 16px 0 26px; }
		[data-part=button] { position: relative; height: auto; padding: 11px 16px; font-size: 13.5px; box-shadow: none; }
		[data-part=button] svg { display: none; }
		[data-part=button]::after { content: ""; position: absolute; top: 0; bottom: 0; left: calc(100% + 10px); width: 104px; border: 1px solid var(--hairline); border-radius: 8px; background: linear-gradient(var(--shade), var(--shade)) center / 56px 7px no-repeat; }
		[data-part=card] { position: absolute; left: 376px; bottom: 44px; width: 186px; padding: 14px 16px; gap: 0; border-radius: 8px; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label], [data-part=caption] { font-size: 11px; }
		[data-part=number] { font-family: var(--font-body); font-size: 26px; font-weight: 600; letter-spacing: -0.02em; margin: 4px 0 2px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
