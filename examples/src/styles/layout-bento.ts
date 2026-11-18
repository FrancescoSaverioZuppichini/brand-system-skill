import type { Style } from "@/theme"
import Decor from "./decor/layout-bento"

export default {
	name: "Bento grid",
	family: "Layout archetypes",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.03em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The hero copy is the 2×2 lead tile, the logo rides at the top of the tall picture tile, and the number card is the tinted 1×1
	// beside it; both are pinned to the decor's grid cells so every gap stays 12 px.
	css: `
		[data-part=nav] { position: absolute; top: 20px; left: 599px; width: 181px; z-index: 1; }
		[data-part=nav] header { padding: 20px; }
		[data-part=nav] [data-slot=button] { display: none; }
		[data-part=copy] { position: absolute; top: 20px; left: 20px; width: 374px; height: 302.67px; padding: 28px; gap: 0; justify-content: flex-end; }
		[data-part=kicker] { font-family: var(--font-code); font-size: 12px; letter-spacing: 0; text-transform: none; color: var(--cobalt); }
		[data-part=headline] { font-size: 38px; line-height: 1.05; margin-top: 12px; }
		[data-part=sub] { font-size: 13.5px; line-height: 1.55; margin: 14px 0 22px; }
		[data-part=button] { height: auto; padding: 10px 16px; font-size: 13px; }
		[data-part=button] svg { display: none; }
		[data-part=card] { position: absolute; top: 20px; left: 406px; width: 181px; height: 145.33px; padding: 22px; gap: 0; border-radius: 18px; background: var(--tint); border-color: oklch(0.56 0.2 260 / 0.15); box-shadow: none; }
		[data-part=card] > div { height: 100%; padding: 0; gap: 0; }
		[data-part=label] { font-size: 12px; }
		[data-part=number] { margin-top: auto; font-family: var(--font-body); font-size: 34px; font-weight: 600; letter-spacing: -0.03em; color: var(--cobalt); }
		[data-part=caption] { margin-top: 6px; font-size: 11.5px; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
