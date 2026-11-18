import type { Style } from "@/theme"
import Decor from "./decor/nightlife"

export default {
	name: "Adult / nightlife (tasteful)",
	family: "Industry-coded languages",
	fonts: { heading: "Big Shoulders Display", body: "Inter", mono: "DM Mono" },
	google: "family=Big+Shoulders+Display:wght@500;800;900&family=Inter:wght@300;400&family=DM+Mono:wght@400",
	radius: "2px",
	border: "1px",
	shadow: "none",
	heading: { weight: 900, case: "uppercase", tracking: "0.005em" },
	specimen: "start",
	decor: Decor,
	// [Agent] A club poster: one word per line (min-content width), small discreet mono everywhere else, and the logo
	// moved to the top-right corner so the stacked headline keeps the full height. The number is a floor-listing entry
	// between two hairlines, not a box.
	css: `
		[data-part=nav] { position: absolute; top: 0; right: 0; z-index: 1; }
		[data-part=nav] header { padding: 30px 36px; }
		[data-part=nav] header > span { font-family: var(--font-code); font-size: 11px; letter-spacing: .3em; text-transform: uppercase; gap: 10px; }
		[data-part=nav] header > span svg { width: 16px; height: 16px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 34px 40px 0; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { display: flex; align-items: center; gap: 10px; font-family: var(--font-code); font-size: 11px; font-weight: 400; letter-spacing: .2em; color: var(--smoke); }
		[data-part=kicker]::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--red); box-shadow: 0 0 10px var(--red); }
		[data-part=headline] { width: min-content; font-size: 84px; line-height: .9; margin: 16px 0 18px; }
		[data-part=accent] { color: var(--magenta); text-shadow: 0 0 30px oklch(0.60 0.24 345 / .6); }
		[data-part=sub] { font-size: 12.5px; font-weight: 300; line-height: 1.65; color: var(--smoke); max-width: 330px; }
		[data-part=button] { margin-top: 20px; height: auto; padding: 10px 18px; border: 1px solid var(--cream); border-radius: 2px; background: transparent; color: var(--cream); font-family: var(--font-code); font-size: 11px; font-weight: 400; letter-spacing: .2em; text-transform: uppercase; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 618px; top: 296px; width: 150px; padding: 12px 0 14px; gap: 0; border: 0; border-top: 1px solid oklch(0.95 0.01 60 / .22); border-bottom: 1px solid oklch(0.95 0.01 60 / .22); border-radius: 0; background: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { display: flex; align-items: center; gap: 8px; font-family: var(--font-code); font-size: 10px; letter-spacing: .18em; text-transform: uppercase; color: var(--smoke); }
		[data-part=label]::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--red); }
		[data-part=number] { font-weight: 800; font-size: 64px; line-height: .95; margin: 6px 0 4px; }
		[data-part=caption] { font-size: 11.5px; font-weight: 300; color: var(--smoke); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
