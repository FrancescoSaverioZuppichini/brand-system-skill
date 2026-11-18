import type { Style } from "@/theme"
import Decor from "./decor/studio-product"

export default {
	name: "Studio product photography",
	family: "Illustration and imagery",
	fonts: { heading: "Instrument Serif", body: "Inter Tight", mono: "Geist Mono" },
	google: "family=Instrument+Serif&family=Inter+Tight:wght@400;500;600&family=Geist+Mono:wght@400;500",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The product is the hero, so the copy steps aside: the headline is a centred line over the tin, the subline
	// and the black pill sit left of it, the number right of it. The copy box is pinned at the subline, so the kicker and
	// headline are placed from there back up to the top of the frame.
	css: `
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; left: 56px; top: 250px; width: 230px; gap: 0; }
		[data-part=kicker], [data-part=headline] { position: absolute; left: -56px; width: 800px; text-align: center; }
		[data-part=kicker] { top: -216px; font-family: var(--font-code); font-size: 11px; color: var(--tin); }
		[data-part=headline] { top: -194px; font-size: 54px; line-height: 1; white-space: nowrap; }
		[data-part=sub] { font-size: 14px; line-height: 1.55; margin-bottom: 20px; }
		[data-part=button] { height: auto; padding: 12px 22px; border-radius: 999px; font-size: 14px; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; right: 56px; top: 268px; width: 190px; padding: 0; border: 0; background: none; box-shadow: none; text-align: right; }
		[data-part=card] > div { padding: 0; align-items: flex-end; gap: 0; }
		[data-part=label] { font-family: var(--font-code); font-size: 10px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; }
		[data-part=number] { font-family: var(--font-body); font-weight: 500; font-size: 40px; letter-spacing: -.03em; margin: 8px 0 6px; }
		[data-part=caption] { font-size: 13px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
