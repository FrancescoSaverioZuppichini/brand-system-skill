import type { Style } from "@/theme"
import Decor from "./decor/blueprint"

export default {
	name: "Blueprint / technical drawing",
	family: "Illustration and imagery",
	fonts: { heading: "Barlow Semi Condensed", body: "IBM Plex Mono", mono: "Space Mono" },
	google: "family=Barlow+Semi+Condensed:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Space+Mono",
	radius: "0px",
	border: "1.5px",
	shadow: "none",
	heading: { weight: 600, case: "uppercase", tracking: "0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The number card is the drawing's title block: a ruled grid of cells. The card's own pieces fill the top row
	// (label and number, caption); the sheet cell is drawn by the card's pseudo-elements, and the footer row is three
	// items stacked in one full-width cell (the content's ::before, the chart, its ::after) aligned left, centre, right.
	// The logo sits top right, out of the copy's way, where a drawing's revision box would be.
	css: `
		[data-part=nav] { position: absolute; inset: 0 0 auto; }
		[data-part=nav] header { justify-content: flex-end; padding: 20px 28px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 40px 0 0 40px; }
		[data-part=copy] { flex: none; width: 340px; gap: 0; }
		[data-part=kicker] { font-family: var(--font-body); font-weight: 500; font-size: 11px; letter-spacing: .12em; color: var(--pencil); }
		[data-part=headline] { font-size: 52px; line-height: .96; margin: 14px 0 16px; }
		[data-part=sub] { font-size: 13px; line-height: 1.55; margin-bottom: 22px; }
		[data-part=button] { height: auto; padding: 12px 16px; border: 1.5px solid var(--line); background: var(--cyanotype); color: var(--line); font-size: 12px; letter-spacing: .1em; text-transform: uppercase; }
		[data-part=button] svg { display: none; }
		[data-part=button]::before { content: "→"; margin-right: 6px; color: var(--pencil); }
		[data-part=card] { position: absolute; left: 40px; top: 384px; width: 360px; padding: 0; gap: 0; border: 1.5px solid var(--line); font-size: 10px; }
		[data-part=card]::before, [data-part=card]::after { position: absolute; right: 0; width: 64px; padding: 0 8px; }
		[data-part=card]::before { content: "Sheet"; top: 0; bottom: 30px; padding-top: 7px; border-left: 1px solid var(--line); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; color: var(--faded); }
		[data-part=card]::after { content: "1/1"; top: 24px; }
		[data-part=card] > div { display: grid; grid-template-columns: 1fr 1fr 64px; grid-template-rows: auto auto 30px; padding: 0; gap: 0; }
		[data-part=label] { grid-area: 1 / 1; padding: 7px 8px 0; border-right: 1px solid var(--line); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; color: var(--faded); }
		[data-part=number] { grid-area: 2 / 1; padding: 2px 8px 6px; border-right: 1px solid var(--line); font-weight: 500; font-size: 26px; line-height: 1.1; }
		[data-part=caption] { grid-area: 1 / 2 / 3 / 3; padding: 7px 8px; font-size: 10px; line-height: 1.3; color: var(--line); }
		[data-part=card] > div::before, [data-part=card] > div::after, [data-part=chart] { grid-area: 3 / 1 / 4 / 4; align-self: center; padding: 0 8px; font-size: 9px; letter-spacing: .1em; text-transform: uppercase; color: var(--faded); }
		[data-part=card] > div::before { content: "Keep"; }
		[data-part=card] > div::after { content: "Scale 1:2"; justify-self: end; }
		[data-part=chart] { align-self: stretch; display: flex; align-items: center; justify-content: center; height: auto; margin: 0; border-top: 1px solid var(--line); }
		[data-part=chart]::before { content: "Fig. 1"; }
		[data-part=chart] span { display: none; }
	`,
} satisfies Style
