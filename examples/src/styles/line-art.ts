import type { Style } from "@/theme"
import Decor from "./decor/line-art"

export default {
	name: "Line art",
	family: "Illustration and imagery",
	fonts: { heading: "Instrument Serif", body: "Hanken Grotesk", mono: "DM Mono" },
	google: "family=Instrument+Serif:ital@0;1&family=Hanken+Grotesk:wght@300;400;500&family=DM+Mono",
	radius: "8px",
	border: "1.5px",
	shadow: "none",
	heading: { weight: 400, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Everything is a line at the same weight as the drawing: the outlined pill button, the rule over the
	// number. The accent is the serif's italic, the only "colour" the type gets.
	css: `
		[data-part=nav] header { padding: 24px 64px 0; max-width: none; }
		[data-part=nav] header > span { font-size: 24px; }
		[data-part=nav] [data-slot=button] { background: transparent; color: var(--ink); border: 1.5px solid var(--ink); border-radius: 99px; font-weight: 500; }
		[data-part=body] { align-items: flex-start; padding: 28px 0 0 64px; }
		[data-part=copy] { flex: none; width: 340px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 11px; font-weight: 400; letter-spacing: .14em; color: var(--pencil); }
		[data-part=headline] { font-size: 54px; line-height: 1; margin: 22px 0; white-space: nowrap; }
		[data-part=accent] { display: block; font-style: italic; }
		[data-part=sub] { font-size: 15px; font-weight: 300; line-height: 1.6; color: var(--pencil); }
		[data-part=button] { margin-top: 30px; height: auto; padding: 11px 22px; border-radius: 99px; background: transparent; color: var(--ink); border: 1.5px solid var(--ink); font-size: 14px; font-weight: 500; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; right: 52px; bottom: 34px; width: 170px; padding: 10px 0 0; gap: 0; border: 0; border-top: 1px solid var(--ink); border-radius: 0; background: none; text-align: right; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-family: var(--font-code); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--pencil); }
		[data-part=number] { font-size: 34px; line-height: 1; margin: 6px 0 2px; }
		[data-part=caption] { font-size: 12px; font-weight: 300; color: var(--pencil); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
