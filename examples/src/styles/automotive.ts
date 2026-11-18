import type { Style } from "@/theme"
import Decor from "./decor/automotive"

export default {
	name: "Automotive / industrial",
	family: "Industry-coded languages",
	fonts: { heading: "Michroma", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Michroma&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, case: "uppercase", tracking: "0.04em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Wide thin caps at small sizes and lots of black: the car carries the page. The number is not a card but a
	// spec readout on the strip under the car, label and caption in mono.
	css: `
		[data-part=nav] header { padding: 22px 44px 0; max-width: none; }
		[data-part=nav] header > span { font-size: 12px; letter-spacing: .32em; text-transform: uppercase; gap: 12px; }
		[data-part=nav] header > span svg { width: 18px; height: 18px; }
		[data-part=nav] [data-slot=button] { background: transparent; border: 1px solid oklch(0.98 0 0 / .3); color: var(--silver); border-radius: 0; font-size: 10px; font-weight: 500; letter-spacing: .22em; text-transform: uppercase; }
		[data-part=body] { align-items: flex-start; padding: 18px 44px 0; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { display: flex; align-items: center; gap: 12px; font-family: var(--font-heading); font-size: 9px; font-weight: 400; letter-spacing: .28em; color: var(--silver); }
		[data-part=kicker]::before { content: ""; width: 24px; height: 2px; background: var(--signal); }
		[data-part=headline] { font-size: 29px; line-height: 1.3; margin: 18px 0 14px; white-space: nowrap; }
		[data-part=accent] { display: block; }
		[data-part=sub] { font-size: 13px; font-weight: 300; line-height: 1.6; color: var(--silver); max-width: 360px; }
		[data-part=button] { margin-top: 22px; height: auto; padding: 12px 18px; gap: 14px; border-radius: 0; background: transparent; border: 1px solid var(--chrome); color: var(--chrome); font-size: 11px; font-weight: 500; letter-spacing: .22em; text-transform: uppercase; }
		[data-part=button] svg { width: 18px; stroke-width: 1; }
		[data-part=card] { position: absolute; left: 44px; bottom: 30px; width: auto; padding: 0; gap: 0; border: 0; border-radius: 0; background: none; box-shadow: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-family: var(--font-code); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: var(--silver); }
		[data-part=number] { font-size: 26px; letter-spacing: .04em; margin: 6px 0 4px; }
		[data-part=caption] { font-family: var(--font-code); font-size: 10px; color: var(--silver); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
