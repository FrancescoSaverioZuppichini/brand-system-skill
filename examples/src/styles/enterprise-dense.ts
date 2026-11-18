import type { Style } from "@/theme"
import Decor from "./decor/enterprise-dense"

export default {
	name: "Enterprise / dashboard-dense",
	family: "Digital UI eras",
	fonts: { heading: "IBM Plex Sans", body: "IBM Plex Sans", mono: "IBM Plex Mono" },
	google: "family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500",
	radius: "2px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400 },
	specimen: "start",
	decor: Decor,
	// [Agent] The hero becomes a console page header: the kicker is a breadcrumb (the slash is a diagonal hairline
	// drawn as a background), the button is Carbon's label-left/icon-right action pinned top right, and the number card
	// is the first KPI tile of the row the decor continues.
	css: `
		[data-part=frame] { font-size: 12px; font-variant-numeric: tabular-nums; }
		[data-part=nav] header { max-width: none; height: 40px; padding: 0 0 0 48px; }
		[data-part=nav] header > span { font-size: 14px; font-weight: 600; color: oklch(0.96 0 0); }
		[data-part=nav] header > span svg { display: none; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { display: block; padding: 10px 20px 0 68px; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { font-size: 12px; font-weight: 400; letter-spacing: 0; text-transform: none; color: var(--graphite); }
		[data-part=kicker]::before { content: "Keep"; color: var(--cobalt); padding-right: 22px; background: linear-gradient(to bottom right, transparent calc(50% - .6px), var(--graphite) 50%, transparent calc(50% + .6px)) right 8px center / 6px 11px no-repeat; }
		[data-part=headline] { font-size: 24px; line-height: 1.2; margin-top: 8px; }
		[data-part=sub] { font-size: 12.5px; line-height: 1.35; max-width: 330px; margin-top: 4px; color: var(--graphite); }
		[data-part=button] { position: absolute; top: 76px; right: 20px; height: 32px; padding: 0 12px 0 14px; gap: 28px; font-size: 13px; }
		[data-part=card] { position: absolute; top: 151px; left: 68px; width: 252px; height: 72px; padding: 9px 12px; gap: 0; border-radius: 2px; box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label], [data-part=caption] { font-size: 12px; line-height: 1.35; }
		[data-part=label] { font-weight: 500; }
		[data-part=number] { font-family: var(--font-body); font-size: 26px; font-weight: 500; line-height: 1.1; margin-top: 2px; }
		[data-part=chart] { position: absolute; top: 18px; right: 12px; width: 60px; height: 34px; margin: 0; gap: 2px; }
		[data-part=chart] span { background: var(--cobalt) !important; opacity: .3; }
		[data-part=chart] span:last-child { opacity: 1; }
	`,
} satisfies Style
