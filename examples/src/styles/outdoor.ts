import type { Style } from "@/theme"
import Decor from "./decor/outdoor"

const tag = "polygon(18px 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%, 0 18px)"

export default {
	name: "Outdoor / utilitarian",
	family: "Industry-coded languages",
	fonts: { heading: "Barlow Condensed", body: "Barlow", mono: "Space Mono" },
	google: "family=Barlow+Condensed:wght@600;800&family=Barlow:wght@400;500&family=Space+Mono:wght@400;700",
	radius: "3px",
	border: "1px",
	shadow: "none",
	heading: { weight: 800, case: "uppercase", tracking: "0.005em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Gear-label details: the logo is a sewn olive patch (dashed stitch inset), the button has a stitched
	// outline inside it, and the number card is a khaki hang tag (clipped corners, punched eyelet, dashed stitch) hung
	// over the landscape photo.
	css: `
		[data-part=nav] header { padding: 36px 46px 0; max-width: none; }
		[data-part=nav] header > span { position: relative; gap: 8px; padding: 13px 14px; border-radius: 4px; background: var(--olive); color: var(--canvas); font-weight: 800; font-size: 20px; text-transform: uppercase; letter-spacing: .06em; }
		[data-part=nav] header > span::after { content: ""; position: absolute; inset: 4px; border: 1.5px dashed var(--khaki); border-radius: 2px; }
		[data-part=nav] header > span svg rect { fill: var(--canvas); }
		[data-part=nav] header > span svg rect:last-child { fill: var(--olive); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 26px 330px 0 46px; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { display: flex; align-items: center; gap: 10px; font-family: var(--font-code); font-weight: 700; font-size: 12px; letter-spacing: .12em; color: var(--granite); }
		[data-part=kicker]::before { content: ""; width: 10px; height: 10px; background: var(--blaze); }
		[data-part=headline] { font-size: 66px; line-height: .9; margin: 14px 0 18px; white-space: nowrap; }
		[data-part=accent] { display: block; color: var(--blaze); }
		[data-part=sub] { font-size: 16px; line-height: 1.5; color: var(--granite); max-width: 390px; }
		[data-part=button] { margin-top: 24px; height: auto; padding: 13px 22px; gap: 12px; border-radius: 3px; font-family: var(--font-heading); font-weight: 600; font-size: 19px; letter-spacing: .08em; text-transform: uppercase; outline: 1.5px dashed oklch(0.93 0.02 90 / .5); outline-offset: -5px; }
		[data-part=button] svg { display: none; }
		[data-part=button]::before { content: ""; width: 10px; height: 10px; background: var(--blaze); }
		[data-part=card] { position: absolute; left: 508px; top: 292px; width: 204px; padding: 30px 0 14px; gap: 0; border: 0; border-radius: 4px; background: var(--khaki); transform: rotate(-4deg); clip-path: ${tag}; }
		[data-part=card]::before { content: ""; position: absolute; left: 50%; top: 10px; width: 12px; height: 12px; margin-left: -6px; border-radius: 50%; background: var(--canvas); box-shadow: 0 0 0 2px var(--granite); }
		[data-part=card]::after { content: ""; position: absolute; inset: 4px; border: 1.5px dashed oklch(0.30 0.01 250 / .45); clip-path: ${tag}; }
		[data-part=card] > div { padding: 0 16px; gap: 0; }
		[data-part=label] { font-family: var(--font-code); font-weight: 700; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--granite); padding-bottom: 6px; border-bottom: 1.5px solid var(--granite); }
		[data-part=number] { font-weight: 800; font-size: 54px; line-height: 1; margin-top: 6px; }
		[data-part=caption] { font-family: var(--font-code); font-size: 10.5px; line-height: 1.4; margin-top: 4px; color: var(--granite); white-space: nowrap; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
