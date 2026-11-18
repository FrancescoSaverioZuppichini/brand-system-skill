import type { Style } from "@/theme"
import Decor from "./decor/bauhaus"

export default {
	name: "Bauhaus",
	family: "Modernist and print",
	fonts: { heading: "League Spartan", body: "Jost", mono: "DM Mono" },
	google: "family=League+Spartan:wght@700;800&family=Jost:wght@400;500&family=DM+Mono:wght@400",
	radius: "0px",
	border: "6px",
	shadow: "none",
	heading: { weight: 800, case: "lowercase", tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	css: `
		[data-part=frame] { text-transform: lowercase; }
		[data-part=nav] header { padding-right: 350px; }
		[data-part=body] { padding-right: 350px; }
		[data-part=kicker] { margin-left: -40px; width: 300px; padding: 12px 40px; background: var(--black); color: var(--paper); font-size: 15px; letter-spacing: .06em; text-transform: lowercase; }
		[data-part=headline] { font-size: 70px; line-height: .9; width: 460px; }
		[data-part=sub] { color: var(--black); max-width: 400px; }
		[data-slot=button] { border-radius: 999px; text-transform: lowercase; }
		[data-part=card] { position: absolute; right: 20px; bottom: 20px; width: 210px; background: var(--paper); border: 6px solid var(--black); padding: 12px 0; gap: 0; }
		[data-part=card] > div { padding: 0 14px; }
		[data-part=label] { font-family: var(--font-code); color: var(--black); }
		[data-part=number] { font-weight: 800; font-size: 50px; margin-top: 6px; }
		[data-part=caption] { color: var(--black); font-size: 13px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
