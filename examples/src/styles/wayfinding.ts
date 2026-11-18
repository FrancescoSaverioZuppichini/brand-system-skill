import type { Style } from "@/theme"
import Decor from "./decor/wayfinding"

export default {
	name: "Signage / wayfinding",
	family: "Modernist and print",
	fonts: { heading: "Public Sans", body: "Public Sans", mono: "Overpass Mono" },
	google:
		"family=Barlow+Semi+Condensed:wght@500&family=Overpass+Mono:wght@600&family=Public+Sans:wght@600;700",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.005em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Every part is a sign on the decor's panels: the logo a white destination tile in the header, the kicker the
	// header's line name, the button and the card the yellow and green panels at the bottom. Barlow Semi Condensed sets
	// the secondary sign text.
	css: `
		[data-part=nav] header { position: absolute; top: 25px; right: 34px; width: auto; max-width: none; padding: 0; }
		[data-part=nav] header > span { height: 52px; gap: 10px; padding: 0 16px; border-radius: 6px; background: var(--white); color: var(--head); font-size: 24px; font-weight: 700; }
		[data-part=nav] header svg { width: 30px; height: 30px; }
		[data-part=nav] header svg .fill-primary { fill: var(--head); }
		[data-part=nav] header svg .fill-primary-foreground { fill: var(--white); }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=kicker] { position: absolute; top: 34px; left: 98px; color: var(--white); font-size: 26px; font-weight: 600; line-height: 34px; letter-spacing: .01em; text-transform: none; }
		[data-part=headline] { position: absolute; top: 124px; left: 144px; width: 500px; font-size: 54px; line-height: 1.04; }
		[data-part=sub] { position: absolute; top: 252px; left: 144px; max-width: 470px; color: oklch(0.99 0 0 / .78); font: 500 21px/1.3 "Barlow Semi Condensed"; }
		[data-part=button] { position: absolute; top: 340px; left: 12px; width: 384px; height: 148px; justify-content: space-between; padding: 0 26px; border-radius: 8px; font-size: 30px; font-weight: 700; }
		[data-part=button] svg { width: 40px; height: 40px; stroke-width: 3; }
		[data-part=card] { position: absolute; top: 340px; left: 404px; width: 384px; height: 148px; justify-content: center; padding: 0 24px; gap: 0; border: 0; border-radius: 8px; box-shadow: none; background: var(--green); color: var(--white); }
		[data-part=card] > div { display: grid; grid-template-columns: auto 1fr; gap: 0 18px; padding: 0; }
		[data-part=label] { grid-column: 1 / 3; color: var(--white); font-size: 16px; font-weight: 600; letter-spacing: .02em; }
		[data-part=number] { margin-top: 6px; font-size: 64px; font-weight: 700; letter-spacing: -0.02em; }
		[data-part=caption] { align-self: end; max-width: 120px; padding-bottom: 8px; color: var(--white); font: 500 18px/1.15 "Barlow Semi Condensed"; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
