import type { Style } from "@/theme"
import Decor from "./decor/sports"

export default {
	name: "Sports / athletic",
	family: "Industry-coded languages",
	fonts: { heading: "Anton", body: "Barlow", mono: "Barlow Condensed" },
	google: "family=Anton&family=Barlow:wght@500;600&family=Barlow+Condensed:wght@600;700;800",
	radius: "0px",
	border: "1px",
	shadow: "none",
	heading: { weight: 400, case: "uppercase", tracking: "0.005em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Anton has no italic, so the speed slant is a skew on the whole block (line lengths stay true). The logo
	// moves to the top-right corner so three lines of 100 px type keep the height; the number is a white stat plate cut
	// on the slant and pinned to the right edge. Barlow Condensed (the "mono" slot) sets the stats.
	css: `
		[data-part=nav] { position: absolute; top: 0; right: 0; z-index: 1; }
		[data-part=nav] header { padding: 30px 30px; }
		[data-part=nav] header > span { font-size: 26px; text-transform: uppercase; transform: skewX(-9deg); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 34px 38px 0; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { display: flex; align-items: center; gap: 10px; font-family: var(--font-code); font-weight: 700; font-size: 16px; letter-spacing: .16em; color: var(--white); }
		[data-part=kicker]::before { content: ""; width: 34px; height: 6px; background: var(--volt); transform: skewX(-24deg); }
		[data-part=headline] { width: 480px; font-size: 100px; line-height: .9; margin: 14px 0 18px; transform: skewX(-9deg); transform-origin: left bottom; }
		[data-part=accent] { display: block; white-space: nowrap; color: var(--volt); }
		[data-part=sub] { font-size: 15px; font-weight: 500; line-height: 1.5; color: oklch(0.99 0 0 / .78); max-width: 370px; }
		[data-part=button] { margin-top: 22px; height: auto; padding: 14px 34px 14px 26px; gap: 12px; border-radius: 0; font-family: var(--font-code); font-weight: 800; font-size: 20px; letter-spacing: .06em; text-transform: uppercase; clip-path: polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%); }
		[data-part=button] svg { width: 18px; height: 18px; stroke-width: 3; }
		[data-part=card] { position: absolute; right: 0; bottom: 34px; width: 268px; padding: 14px 0; gap: 0; border: 0; border-radius: 0; background: var(--white); color: var(--black); clip-path: polygon(28px 0, 100% 0, 100% 100%, 0 100%); }
		[data-part=card] > div { padding: 0 30px 0 54px; gap: 0; }
		[data-part=label] { font-family: var(--font-code); font-weight: 700; font-size: 15px; letter-spacing: .14em; text-transform: uppercase; color: var(--red); }
		[data-part=number] { font-size: 70px; line-height: 1; margin: 2px 0; transform: skewX(-9deg); transform-origin: left bottom; }
		[data-part=caption] { font-family: var(--font-code); font-weight: 600; font-size: 17px; letter-spacing: .02em; text-transform: uppercase; color: var(--black); white-space: nowrap; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
