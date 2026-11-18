import type { Style } from "@/theme"
import Decor from "./decor/duotone"

export default {
	name: "Duotone",
	family: "Illustration and imagery",
	fonts: { heading: "Archivo", body: "Inter Tight", mono: "JetBrains Mono" },
	google: "family=Archivo:wght@500;800;900&family=Inter+Tight:wght@400;500&family=JetBrains+Mono:wght@500",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 900, tracking: "-0.045em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Type sits over the dark end of the map (the rule for text on duotone), and the number card switches to the
	// second pair, pink over navy, the way a campaign shifts colour pairs between sections.
	css: `
		[data-part=nav] header { padding: 24px 48px 0; }
		[data-part=nav] header > span { color: var(--lime); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 26px 48px 0; }
		[data-part=copy] { flex: none; width: 420px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 12px; letter-spacing: .12em; color: var(--lime); }
		[data-part=headline] { font-size: 66px; line-height: .92; margin: 18px 0 20px; }
		[data-part=sub] { width: 330px; font-size: 15px; line-height: 1.5; color: var(--lime); margin-bottom: 26px; }
		[data-part=button] { height: auto; padding: 15px 24px; border-radius: 999px; font-family: var(--font-heading); font-weight: 800; font-size: 14px; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; right: 0; bottom: 0; width: 230px; padding: 20px 24px; border: 0; background: var(--bubblegum); color: var(--navy); }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-family: var(--font-code); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--navy); }
		[data-part=number] { font-weight: 900; font-size: 46px; letter-spacing: -.04em; margin: 8px 0 4px; }
		[data-part=caption] { font-size: 13px; font-weight: 500; color: var(--navy); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
