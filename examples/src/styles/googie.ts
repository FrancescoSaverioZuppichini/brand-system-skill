import type { Style } from "@/theme"
import Decor from "./decor/googie"

export default {
	name: "Googie / Atomic age",
	family: "Art and historical movements",
	fonts: { heading: "Bungee", body: "Jost", mono: "Lobster Two" },
	google: "family=Lobster+Two:ital,wght@1,700&family=Bungee&family=Jost:wght@400;600",
	radius: "999px",
	border: "3px",
	shadow: "none",
	heading: { weight: 400, case: "uppercase", tracking: "0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The whole copy block leans as one sign hung off a cantilevered roof (a single rotation, nothing tilted
	// inside it). Bungee caps with a turquoise drop, the accent line in Lobster Two script (the "mono" slot), the card a
	// turquoise kidney.
	css: `
		[data-part=nav] header { max-width: none; padding: 20px 40px 0; }
		[data-part=nav] header > span { font-size: 20px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 24px 0 0 64px; }
		[data-part=copy] { flex: none; width: 470px; gap: 0; transform: rotate(-5deg); transform-origin: 0 0; }
		[data-part=kicker] { color: var(--coral); font: italic 700 30px var(--font-code); letter-spacing: 0; text-transform: none; }
		[data-part=headline] { margin-top: 4px; font-size: 42px; line-height: 1; text-shadow: 4px 4px 0 var(--turquoise); }
		[data-part=accent] { display: block; margin: 2px 0 0 26px; color: var(--coral); font: italic 700 64px/1.05 var(--font-code); letter-spacing: 0; text-transform: none; text-shadow: 3px 3px 0 var(--ink); }
		[data-part=sub] { margin-top: 14px; max-width: 400px; color: var(--ink); font-size: 16px; line-height: 1.5; }
		[data-part=button] { margin-top: 20px; height: auto; padding: 12px 26px 10px; border: 3px solid var(--ink); font: 400 15px var(--font-heading); letter-spacing: .04em; text-transform: uppercase; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; top: 250px; left: 538px; width: 258px; padding: 26px 22px 30px 34px; gap: 0; border: 3px solid var(--ink); border-radius: 62% 38% 52% 48% / 46% 58% 42% 54%; box-shadow: none; background: var(--turquoise); transform: rotate(7deg); }
		[data-part=card] > div { gap: 0; padding: 0; }
		[data-part=label] { color: var(--ink); font-size: 12px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; }
		[data-part=number] { color: var(--cream); font-size: 46px; line-height: 1.05; text-shadow: 3px 3px 0 var(--ink); }
		[data-part=caption] { color: var(--ink); font-size: 14px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
