import type { Style } from "@/theme"
import Decor from "./decor/devtool-dark"

export default {
	name: "Dev-tool dark (Vercel / Linear)",
	family: "Digital UI eras",
	fonts: { heading: "Geist", body: "Geist", mono: "Geist Mono" },
	google: "family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.045em" },
	specimen: "center",
	decor: Decor,
	css: `
		[data-part=nav] header { border-bottom: 1px solid var(--seam); max-width: none; }
		[data-part=body] { justify-content: flex-start; padding-top: 34px; }
		[data-part=kicker] { border: 1px solid var(--seam); border-radius: 999px; padding: 4px 12px; text-transform: none; letter-spacing: 0; color: var(--dim); background: var(--void); }
		[data-part=kicker]::before { content: "●"; color: var(--iris); margin-right: 8px; font-size: 9px; vertical-align: 1px; }
		[data-part=headline] { font-size: 54px; line-height: 1.02; max-width: 470px; }
		[data-part=accent] { color: oklch(0.75 0.005 270); }
		[data-part=copy] { gap: 18px; }
		[data-part=card] { left: 236px; right: auto; bottom: -30px; width: 228px; background: var(--void); }
		[data-part=label] { font-family: var(--font-code); font-size: 11px; text-transform: uppercase; letter-spacing: .1em; }
		[data-part=number] { font-family: var(--font-body); font-weight: 600; font-size: 28px; letter-spacing: -0.03em; }
		[data-part=chart] { display: none; }
	`,
} satisfies Style
