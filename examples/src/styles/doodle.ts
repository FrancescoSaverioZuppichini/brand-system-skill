import type { Style } from "@/theme"
import Decor from "./decor/doodle"

export default {
	name: "Hand-drawn / doodle",
	family: "Illustration and imagery",
	fonts: { heading: "DM Sans", body: "DM Sans", mono: "Patrick Hand" },
	google: "family=DM+Sans:opsz,wght@9..40,400;9..40,700&family=Patrick+Hand&family=Caveat:wght@500;700",
	radius: "0px",
	border: "0px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Calm sans for reading, hand for annotation: Caveat notes (kicker, number), Patrick Hand (the "mono" slot)
	// for UI words. The highlighter band, the red loop and the boxes are pseudo-elements run through the decor's
	// wobble filter; isolation keeps them under the text but above the page.
	css: `
		[data-part=nav] header { padding: 24px 56px 0; max-width: none; }
		[data-part=nav] header > span { font-family: var(--font-code); font-size: 24px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 32px 0 0 56px; }
		[data-part=copy] { flex: none; width: 360px; gap: 0; }
		[data-part=kicker] { display: inline-block; width: fit-content; font-family: Caveat; font-size: 26px; font-weight: 700; letter-spacing: 0; text-transform: none; color: var(--redpen); transform: rotate(-4deg); transform-origin: left; }
		[data-part=headline] { font-size: 46px; line-height: 1.06; margin: 20px 0 16px; }
		[data-part=accent] { position: relative; display: inline-block; isolation: isolate; }
		[data-part=accent]::before { content: ""; position: absolute; left: -4px; right: -8px; bottom: 2px; height: 18px; border-radius: 9px; background: var(--highlighter); z-index: -1; filter: url(#doodle-wobble); }
		[data-part=accent]::after { content: ""; position: absolute; inset: -6px -14px -8px -12px; border: 2.4px solid var(--redpen); border-radius: 50%; transform: rotate(-3deg); filter: url(#doodle-wobble); }
		[data-part=sub] { font-size: 15px; line-height: 1.55; color: var(--pencil); }
		[data-part=button] { position: relative; isolation: isolate; margin-top: 30px; height: auto; padding: 14px 24px; border-radius: 0; background: transparent; color: var(--ink); font-family: var(--font-code); font-size: 22px; font-weight: 400; }
		[data-part=button]::before { content: ""; position: absolute; inset: 2px; background: var(--highlighter); z-index: -1; filter: url(#doodle-wobble); }
		[data-part=button]::after { content: ""; position: absolute; inset: 0; border: 2.4px solid var(--ink); z-index: -1; filter: url(#doodle-wobble); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 520px; top: 372px; width: 210px; height: 112px; padding: 14px 0; gap: 0; border-radius: 0; background: none; transform: rotate(-2deg); }
		[data-part=card]::after { content: ""; position: absolute; inset: 0; border: 2.4px solid var(--ink); filter: url(#doodle-wobble); }
		[data-part=card] > div { padding: 0 18px; gap: 0; }
		[data-part=label] { font-family: var(--font-code); font-size: 19px; color: var(--pencil); }
		[data-part=number] { font-family: Caveat; font-weight: 700; font-size: 40px; line-height: 1; margin-top: 2px; color: var(--marker); }
		[data-part=caption] { font-size: 12px; color: var(--pencil); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
