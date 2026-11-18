import type { Style } from "@/theme"
import Decor from "./decor/isometric"

export default {
	name: "Isometric",
	family: "Illustration and imagery",
	fonts: { heading: "Inter", body: "IBM Plex Sans", mono: "IBM Plex Mono" },
	google: "family=Inter:wght@400;600;700&family=IBM+Plex+Sans:wght@400;600&family=IBM+Plex+Mono:wght@400;500",
	radius: "4px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.03em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The page is isometric graph paper (two hairline sets at +30 and -30 degrees); the copy sits on a solid
	// patch of the page so the grid never runs under text. The button's offset shadow is its own left-face colour, so
	// even the UI reads as a block.
	css: `
		[data-part=frame] { background-image: repeating-linear-gradient(30deg, var(--grid) 0 1px, transparent 1px 26px), repeating-linear-gradient(-30deg, var(--grid) 0 1px, transparent 1px 26px); }
		[data-part=nav] header { padding: 20px 52px 0; max-width: none; }
		[data-part=nav] header > span { font-weight: 700; letter-spacing: -0.02em; padding: 4px 8px; margin-left: -8px; background: var(--drafting); }
		[data-part=nav] [data-slot=button] { box-shadow: 3px 3px 0 var(--left); }
		[data-part=body] { align-items: flex-start; padding: 32px 0 0 52px; }
		[data-part=copy] { flex: none; width: 330px; gap: 0; padding: 24px 0; background: var(--drafting); box-shadow: 0 0 0 24px var(--drafting); }
		[data-part=kicker] { font-family: var(--font-code); font-size: 12px; font-weight: 500; letter-spacing: .04em; text-transform: none; color: var(--right); }
		[data-part=kicker]::before { content: "\\25C6  "; color: var(--amber); white-space: pre; }
		[data-part=headline] { font-size: 44px; line-height: 1.06; margin: 16px 0; }
		[data-part=sub] { font-size: 15px; line-height: 1.55; color: var(--graphite); }
		[data-part=button] { margin-top: 26px; height: auto; padding: 14px 20px; border-radius: 4px; font-size: 14px; font-weight: 600; box-shadow: 4px 4px 0 var(--left); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; right: 48px; bottom: 36px; width: 252px; padding: 14px 0; gap: 0; border-color: var(--grid); border-radius: 4px; }
		[data-part=card] > div { display: grid; grid-template-columns: auto 1fr; column-gap: 12px; align-items: end; padding: 0 16px; }
		[data-part=label] { grid-column: 1 / -1; margin-bottom: 8px; font-family: var(--font-code); font-size: 11px; font-weight: 500; letter-spacing: .06em; text-transform: uppercase; color: var(--graphite); }
		[data-part=number] { font-weight: 700; font-size: 30px; line-height: 1; letter-spacing: -0.02em; }
		[data-part=caption] { font-family: var(--font-code); font-size: 11px; line-height: 1.3; color: var(--graphite); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
