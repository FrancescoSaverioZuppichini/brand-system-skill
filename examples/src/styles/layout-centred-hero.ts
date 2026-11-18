import type { Style } from "@/theme"
import Decor from "./decor/layout-centred-hero"

export default {
	name: "Centred hero",
	family: "Layout archetypes",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.035em" },
	specimen: "center",
	decor: Decor,
	// [Agent] Everything sits on one centre axis; the headline is held to ~16 characters a line so the centred block stays
	// a compact shape. The number card becomes the first tile of the app window under the fold.
	css: `
		[data-part=nav] header { max-width: none; height: 60px; padding: 0 40px; }
		[data-part=nav] [data-slot=button] { height: 30px; padding: 0 18px; background: none; color: var(--graphite); border: 1px solid var(--hairline); }
		[data-part=body] { justify-content: flex-start; padding: 22px 0 0; }
		[data-part=copy] { width: 560px; gap: 0; }
		[data-part=kicker] { padding: 5px 11px; border-radius: 99px; background: var(--tint); font-family: var(--font-code); font-size: 11.5px; letter-spacing: 0; text-transform: none; color: var(--cobalt); }
		[data-part=headline] { max-width: 16ch; font-size: 50px; line-height: 1.04; margin-top: 16px; }
		[data-part=sub] { max-width: 410px; font-size: 15px; line-height: 1.5; margin: 16px 0 22px; }
		[data-part=button] { position: relative; left: -60px; height: auto; padding: 11px 18px; font-size: 13.5px; }
		[data-part=button] svg { display: none; }
		[data-part=button]::after { content: ""; position: absolute; top: 0; bottom: 0; left: calc(100% + 10px); width: 110px; border: 1px solid var(--hairline); border-radius: 8px; background: linear-gradient(var(--shade), var(--shade)) center / 58px 7px no-repeat; }
		[data-part=card] { left: 217px; top: 413px; right: auto; bottom: auto; width: 190px; height: 82px; padding: 12px 14px; gap: 0; border-radius: 8px; box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 5px; }
		[data-part=label], [data-part=caption] { font-size: 10.5px; line-height: 1; }
		[data-part=number] { font-family: var(--font-body); font-size: 22px; font-weight: 600; letter-spacing: -0.02em; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
