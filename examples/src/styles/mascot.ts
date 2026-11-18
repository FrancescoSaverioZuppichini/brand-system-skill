import type { Style } from "@/theme"
import Decor from "./decor/mascot"

export default {
	name: "Mascot-led",
	family: "Illustration and imagery",
	fonts: { heading: "Fredoka", body: "Nunito", mono: "DM Mono" },
	google: "family=Fredoka:wght@500;600;700&family=Nunito:wght@500;700&family=DM+Mono:wght@500",
	radius: "16px",
	border: "2px",
	shadow: "none",
	heading: { weight: 700, tracking: "-0.01em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The character's own colours run the page: its forest lid is the button, its mint halo the kicker pill and
	// the card's outline, and every shape is as round as the character.
	css: `
		[data-part=nav] header { padding: 22px 52px 0; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=body] { align-items: flex-start; padding: 24px 0 0 52px; }
		[data-part=copy] { flex: none; width: 340px; gap: 0; align-items: flex-start; }
		[data-part=kicker] { padding: 7px 12px; border-radius: 999px; background: var(--mint); color: var(--forest); font-family: var(--font-code); font-size: 12px; letter-spacing: 0; text-transform: none; line-height: 1; }
		[data-part=headline] { font-size: 50px; line-height: 1.02; margin: 16px 0 14px; }
		[data-part=sub] { font-size: 15px; font-weight: 500; line-height: 1.55; margin-bottom: 24px; }
		[data-part=button] { height: auto; padding: 15px 28px; border-radius: 999px; font-family: var(--font-heading); font-weight: 600; font-size: 17px; line-height: 1; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; left: 500px; top: 378px; width: 240px; padding: 14px 18px; gap: 0; border-radius: 20px; border-color: var(--mint); }
		[data-part=card] > div { padding: 0; gap: 0; }
		[data-part=label] { font-family: var(--font-heading); font-weight: 600; font-size: 13px; color: var(--forest); }
		[data-part=number] { font-weight: 700; font-size: 30px; margin: 6px 0 2px; }
		[data-part=caption] { font-size: 12px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
