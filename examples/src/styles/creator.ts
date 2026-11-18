import type { Style } from "@/theme"
import Decor from "./decor/creator"

export default {
	name: "Creator / influencer",
	family: "Industry-coded languages",
	fonts: { heading: "Bricolage Grotesque", body: "Inter", mono: "Caveat" },
	google:
		"family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=Inter:wght@400;500&family=Caveat:wght@600;700",
	radius: "16px",
	border: "2.5px",
	shadow: "0 6px 0 var(--ink)",
	heading: { weight: 800, tracking: "-0.04em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Link-in-bio energy: the kicker is a handwritten note (Caveat, the "mono" slot), the accent is a tilted
	// sticker (white ring plus a hard offset ink shadow), and the button and number card wear the same sticker outline.
	css: `
		[data-part=nav] header { padding: 20px 46px 0; max-width: none; }
		[data-part=nav] header > span { font-weight: 800; letter-spacing: -0.03em; font-size: 22px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 18px 300px 0 46px; }
		[data-part=copy] { gap: 0; }
		[data-part=kicker] { display: inline-block; width: fit-content; font-family: var(--font-code); font-weight: 700; font-size: 32px; letter-spacing: 0; text-transform: none; color: var(--punch); transform: rotate(-5deg); transform-origin: left; }
		[data-part=headline] { font-size: 62px; line-height: .97; margin: 14px 0 24px; white-space: nowrap; }
		[data-part=accent] { display: block; width: fit-content; margin: 6px 0 0 -4px; padding: 0 14px 6px; border-radius: 999px; background: var(--sun); box-shadow: 0 0 0 4px var(--white), 0 8px 0 4px var(--ink); transform: rotate(-3deg); }
		[data-part=sub] { font-size: 15px; line-height: 1.55; color: var(--ink); max-width: 400px; }
		[data-part=button] { margin-top: 30px; height: auto; padding: 15px 28px; border-radius: 999px; border: 2.5px solid var(--ink); box-shadow: 0 6px 0 var(--ink); color: var(--white); font-family: var(--font-heading); font-weight: 800; font-size: 18px; letter-spacing: -0.01em; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 558px; top: 326px; width: auto; padding: 14px 0; gap: 0; border-radius: 20px; border-color: var(--ink); transform: rotate(4deg); }
		[data-part=card] > div { padding: 0 20px; gap: 0; }
		[data-part=label] { font-size: 13px; font-weight: 500; color: var(--ink); }
		[data-part=number] { font-weight: 800; font-size: 44px; line-height: 1; letter-spacing: -0.03em; color: var(--punch); margin: 2px 0 4px; }
		[data-part=caption] { font-family: var(--font-code); font-weight: 600; font-size: 21px; line-height: 1; color: var(--ink); }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
