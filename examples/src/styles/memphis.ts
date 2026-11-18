import type { Style } from "@/theme"
import Decor from "./decor/memphis"

export default {
	name: "Memphis",
	family: "Art and historical movements",
	fonts: { heading: "Unbounded", body: "DM Sans", mono: "DM Sans" },
	google: "family=Unbounded:wght@500;800&family=DM+Sans:wght@400;500;700",
	radius: "0px",
	border: "2.5px",
	shadow: "4px 4px 0 var(--black)",
	heading: { weight: 800, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Flat colour with hard offset shadows: the kicker a pink pill, the accent a mint slab, the card a tilted
	// yellow laminate whose striped header is the card's own ::before (one repeating gradient).
	css: `
		[data-part=nav] header { max-width: none; padding: 20px 58px 0; }
		[data-part=nav] header > span { font-size: 20px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 16px 0 0 58px; }
		[data-part=copy] { flex: none; width: 470px; gap: 0; }
		[data-part=kicker] { width: fit-content; padding: 6px 14px; border: 2.5px solid var(--black); border-radius: 999px; background: var(--pink); color: var(--black); font-size: 13px; font-weight: 700; letter-spacing: .08em; }
		[data-part=headline] { margin-top: 16px; font-size: 50px; line-height: 1.14; }
		[data-part=accent] { display: inline-block; margin-top: 10px; padding: 0 8px 4px; border: 2.5px solid var(--black); background: var(--mint); box-shadow: 4px 4px 0 var(--black); line-height: 1; }
		[data-part=sub] { margin-top: 20px; max-width: 420px; color: var(--black); font-size: 16px; font-weight: 500; line-height: 1.5; }
		[data-part=button] { margin-top: 20px; height: auto; padding: 13px 24px; border: 2.5px solid var(--black); border-radius: 0; box-shadow: 4px 4px 0 var(--black); font: 500 15px var(--font-heading); }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; top: 268px; left: 556px; width: 181px; padding: 0 0 14px; gap: 0; border: 2.5px solid var(--black); border-radius: 0; box-shadow: 6px 6px 0 var(--black); background: var(--yellow); transform: rotate(-4deg); }
		[data-part=card]::before { content: ""; height: 18px; border-bottom: 2.5px solid var(--black); background: repeating-linear-gradient(90deg, var(--black) 0 4px, var(--white) 4px 10px); }
		[data-part=card] > div { gap: 0; padding: 0 16px; }
		[data-part=label] { margin-top: 12px; color: var(--black); font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
		[data-part=number] { margin-top: 2px; font-size: 40px; font-weight: 800; line-height: 1.1; }
		[data-part=caption] { margin-top: 2px; color: var(--black); font-size: 13px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
