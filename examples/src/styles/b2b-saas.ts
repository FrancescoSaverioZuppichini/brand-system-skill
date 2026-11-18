import type { Style } from "@/theme"
import Decor from "./decor/b2b-saas"

export default {
	name: "B2B SaaS",
	family: "Industry-coded languages",
	fonts: { heading: "Plus Jakarta Sans", body: "Inter", mono: "JetBrains Mono" },
	google:
		"family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400",
	radius: "8px",
	border: "1px",
	shadow: "0 10px 30px oklch(0.22 0.02 265 / .12), 0 1px 3px oklch(0.22 0.02 265 / .06)",
	heading: { weight: 700, tracking: "-0.035em" },
	specimen: "center",
	decor: Decor,
	// [Agent] The default landing on purpose: centred one-line headline, announcement pill, one primary button, and the
	// number card floating over the product screenshot, the way every SaaS hero pins a metric to its app shot.
	css: `
		[data-part=nav] header { padding: 12px 32px; max-width: none; }
		[data-part=nav] header > span { font-weight: 700; letter-spacing: -0.02em; }
		[data-part=body] { justify-content: flex-start; padding: 0 20px; }
		[data-part=copy] { gap: 0; max-width: 760px; }
		[data-part=kicker] { display: inline-flex; align-items: center; gap: 8px; padding: 5px 12px 5px 6px; border-radius: 999px; border: 1px solid var(--line); background: var(--white); font-size: 13px; font-weight: 500; letter-spacing: 0; text-transform: none; color: var(--ink); }
		[data-part=kicker]::before { content: ""; width: 18px; height: 18px; border-radius: 50%; background: var(--lilac); box-shadow: inset 0 0 0 5px var(--lilac), inset 0 0 0 9px var(--iris); }
		[data-part=kicker]::after { content: "→"; font-size: 13px; }
		[data-part=headline] { font-size: 48px; line-height: 1.08; margin: 16px 0 12px; white-space: nowrap; }
		[data-part=accent] { color: var(--iris); }
		[data-part=sub] { font-size: 16px; line-height: 1.55; color: var(--slate); max-width: 420px; }
		[data-part=button] { margin-top: 20px; height: auto; padding: 12px 20px; font-size: 15px; font-weight: 600; box-shadow: 0 1px 2px oklch(0.30 0.15 275 / .3), inset 0 1px 0 oklch(1 0 0 / .2); }
		[data-part=button] svg { display: none; }
		[data-part=card] { left: 186px; top: 386px; right: auto; bottom: auto; width: 184px; padding: 14px 0; gap: 0; border-radius: 12px; }
		[data-part=card] > div { padding: 0 16px; gap: 0; }
		[data-part=label] { font-size: 12px; font-weight: 500; color: var(--slate); }
		[data-part=number] { font-weight: 700; font-size: 28px; letter-spacing: -0.02em; margin: 4px 0 2px; }
		[data-part=caption] { font-size: 11.5px; color: var(--slate); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
