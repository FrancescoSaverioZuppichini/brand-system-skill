import type { Style } from "@/theme"
import Decor from "./decor/editorial-photo"

export default {
	name: "Editorial photography",
	family: "Illustration and imagery",
	fonts: { heading: "Newsreader", body: "Instrument Sans", mono: "DM Mono" },
	google:
		"family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300&family=Instrument+Sans:wght@400;500&family=DM+Mono",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 300, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The photograph leads: a big unframed square on the left, so the logo, copy and number share one narrow
	// right column like a magazine opener. Captions and labels in mono, the accent in light italic.
	css: `
		[data-part=nav] header { padding: 34px 40px 0 500px; max-width: none; }
		[data-part=nav] header > span { font-size: 18px; font-weight: 400; gap: 8px; }
		[data-part=nav] header > span svg { width: 18px; height: 18px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 12px 0 0 500px; }
		[data-part=copy] { flex: none; width: 260px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 11px; font-weight: 400; letter-spacing: .1em; color: var(--pencil); }
		[data-part=headline] { font-size: 42px; line-height: 1.02; margin: 14px 0; }
		[data-part=accent] { display: block; font-style: italic; }
		[data-part=sub] { font-size: 13.5px; line-height: 1.55; color: var(--pencil); }
		[data-part=button] { margin-top: 18px; height: auto; padding: 12px 18px; border-radius: 0; font-size: 12px; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 500px; bottom: 36px; width: 260px; padding: 12px 0 0; gap: 0; border: 0; border-top: 1px solid var(--rule); border-radius: 0; background: none; }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-family: var(--font-code); font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: var(--pencil); }
		[data-part=number] { font-size: 34px; font-weight: 300; line-height: 1; margin: 8px 0 4px; }
		[data-part=caption] { font-family: var(--font-code); font-size: 11px; color: var(--pencil); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
