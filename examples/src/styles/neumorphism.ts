import type { Style } from "@/theme"
import Decor from "./decor/neumorphism"

export default {
	name: "Neumorphism",
	family: "Digital UI eras",
	fonts: { heading: "Nunito", body: "Nunito", mono: "DM Mono" },
	google: "family=Nunito:wght@400;600;700;800&family=DM+Mono",
	radius: "24px",
	border: "0px",
	shadow: "-8px -8px 16px var(--highlight), 8px 8px 16px var(--shade)",
	heading: { weight: 800, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Nothing has its own colour: every control is the page surface pushed out (raised pair of shadows) or in
	// (the same pair inset). The number becomes the pressed well inside the dial and the bar chart a pressed toggle.
	css: `
		--pressed: inset -5px -5px 10px var(--highlight), inset 5px 5px 10px var(--shade);
		[data-part=nav] { position: absolute; top: 24px; left: 56px; }
		[data-part=nav] header { padding: 0; }
		[data-part=nav] header > span { color: var(--graphite); font-weight: 800; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; left: 56px; top: 74px; width: 424px; gap: 0; align-items: flex-start; }
		[data-part=kicker] { padding: 10px 18px; border-radius: 999px; box-shadow: var(--pressed); color: var(--cobalt); font-size: 13px; font-weight: 700; letter-spacing: .06em; text-transform: none; }
		[data-part=headline] { margin: 26px 0 16px; color: var(--graphite); font-size: 44px; line-height: 1.1; }
		[data-part=sub] { max-width: 400px; color: var(--pebble); font-size: 15px; font-weight: 600; line-height: 1.6; }
		[data-part=button] { margin-top: 34px; height: auto; gap: 12px; padding: 16px 26px; border-radius: 999px; background: var(--clay-base); color: var(--cobalt); font-size: 16px; font-weight: 800; box-shadow: var(--shadow); }
		[data-part=button] svg { width: 16px; height: 16px; stroke-width: 3; }
		[data-part=card] { position: absolute; left: 488px; top: 56px; width: 260px; height: 388px; padding: 30px 0 0; gap: 0; border-radius: 36px; background: none; text-align: center; }
		[data-part=card] > div { align-items: center; padding: 0; gap: 0; }
		[data-part=label] { color: var(--pebble); font-size: 13px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
		[data-part=number] { display: grid; place-items: center; width: 150px; height: 150px; margin: 40px 0 50px; border-radius: 50%; box-shadow: var(--pressed); color: var(--graphite); font-size: 34px; font-weight: 800; font-variant-numeric: normal; }
		[data-part=caption] { color: var(--pebble); font-size: 14px; font-weight: 600; line-height: 1.4; }
		[data-part=chart] { position: relative; width: 76px; height: 34px; margin: 22px 0 0; border-radius: 999px; box-shadow: var(--pressed); }
		[data-part=chart]::after { content: ""; position: absolute; right: 5px; top: 5px; width: 24px; height: 24px; border-radius: 50%; background: var(--cobalt); box-shadow: 2px 2px 5px var(--shade), -1px -1px 3px var(--highlight); }
		[data-part=chart] span { display: none; }
	`,
} satisfies Style
