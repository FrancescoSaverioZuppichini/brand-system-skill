import type { Style } from "@/theme"
import { diagramCss } from "./decor/motion"
import Decor from "./decor/motion-spring"

export default {
	name: "Spring / playful",
	family: "Motion languages",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Live tokens: presses and hovers overshoot on the CSS spring fallback; reduced motion gets a plain fade.
	css: `${diagramCss}
		[data-slot=button], [data-slot=badge] { transition: transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1), background-color 150ms ease-out; }
		[data-slot=button]:active { transform: scale(0.96); }
		@media (prefers-reduced-motion: reduce) { * { transition: opacity 150ms linear !important; } }
	`,
} satisfies Style
