import type { Style } from "@/theme"
import Decor from "./decor/generative"

export default {
	name: "Generative / data art",
	family: "Illustration and imagery",
	fonts: { heading: "Geist", body: "Geist", mono: "Geist Mono" },
	google: "family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.035em" },
	specimen: "start",
	decor: Decor,
	// [Agent] A quiet column of neutral type so the field carries the page; the number reads as data, set in the mono
	// on a hairline like a plot's readout.
	css: `
		[data-part=nav] header { padding: 22px 44px 0; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 32px 0 0 44px; }
		[data-part=copy] { flex: none; width: 270px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 11px; font-weight: 500; letter-spacing: .04em; text-transform: none; color: var(--cobalt); }
		[data-part=headline] { font-size: 42px; line-height: 1.04; margin: 16px 0; }
		[data-part=sub] { font-size: 14px; line-height: 1.55; margin-bottom: 24px; }
		[data-part=button] { height: auto; padding: 12px 18px; font-size: 14px; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 44px; bottom: 40px; width: 270px; padding: 12px 0 0; border: 0; border-top: 1px solid var(--rule); background: none; }
		[data-part=card] > div { display: grid; grid-template-columns: 1fr auto; row-gap: 6px; padding: 0; font-family: var(--font-code); }
		[data-part=label], [data-part=caption] { font-size: 11px; }
		[data-part=number] { grid-area: 1 / 2 / 3 / 3; align-self: end; font-family: var(--font-code); font-weight: 500; font-size: 30px; letter-spacing: -.04em; }
		[data-part=caption] { grid-row: 2; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
