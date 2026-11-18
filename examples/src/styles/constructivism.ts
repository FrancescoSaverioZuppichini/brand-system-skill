import type { Style } from "@/theme"
import Decor from "./decor/constructivism"

export default {
	name: "Constructivism",
	family: "Modernist and print",
	fonts: { heading: "Anton", body: "Space Mono", mono: "Space Mono" },
	google: "family=Anton&family=Archivo+Black&family=Space+Mono:wght@400;700",
	radius: "0px",
	border: "2px",
	shadow: "none",
	heading: { weight: 400, case: "uppercase", tracking: "0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The headline leaves the flow and runs across the page on one -14° axis: the first line reversed out of a
	// black band (a background that stops at the first line box), the accent line in red under it, a red rule above.
	// Reading text stays level in the top-left corner; Archivo Black sets the labels and the button.
	css: `
		[data-part=nav] header { max-width: none; padding: 22px 40px 0; }
		[data-part=nav] header > span { font-family: "Archivo Black"; font-size: 20px; text-transform: uppercase; letter-spacing: .02em; }
		[data-part=nav] [data-slot=button] { border-radius: 0; background: var(--soot); color: var(--cream); font-family: "Archivo Black"; font-weight: 400; font-size: 12px; text-transform: uppercase; letter-spacing: .06em; }
		[data-part=body] { align-items: flex-start; padding-top: 14px; }
		[data-part=copy] { flex: none; gap: 14px; }
		[data-part=kicker] { width: fit-content; padding: 9px 14px; background: var(--red); color: var(--cream); font: 400 18px/1 "Archivo Black"; letter-spacing: .04em; }
		[data-part=sub] { max-width: 420px; color: var(--soot); font-size: 12px; line-height: 1.55; }
		[data-part=button] { height: auto; padding: 11px 44px 11px 16px; border-radius: 0; background: var(--soot); color: var(--cream); font: 400 15px "Archivo Black"; text-transform: uppercase; letter-spacing: .04em; clip-path: polygon(0 0, 100% 0, calc(100% - 22px) 100%, 0 100%); }
		[data-part=button] svg { display: none; }
		[data-part=headline] { position: absolute; left: -80px; top: 192px; width: 980px; padding-left: 150px; transform: rotate(-14deg); font-size: 96px; line-height: 118px; color: var(--cream); background: linear-gradient(var(--soot) 0 118px, transparent 0); }
		[data-part=headline]::before { content: ""; position: absolute; inset: -22px 0 auto; height: 10px; background: var(--red); }
		[data-part=accent] { display: block; margin: 6px 0 0 -38px; color: var(--red); font-size: 98px; line-height: .95; }
		[data-part=card] { position: absolute; right: 32px; bottom: 28px; width: 216px; padding: 14px 0 16px; gap: 0; border: 0; border-radius: 0; box-shadow: none; background: var(--soot); color: var(--cream); }
		[data-part=card] > div { gap: 0; padding: 0 18px; }
		[data-part=label] { color: var(--red); font: 700 12px var(--font-code); text-transform: uppercase; letter-spacing: .08em; }
		[data-part=number] { margin: 6px 0 4px; font-size: 68px; line-height: 1; }
		[data-part=caption] { color: var(--cream); font-size: 12px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
