import type { Style } from "@/theme"
import Decor from "./decor/motion-micro"
import { diagramCss } from "./decor/motion"

export default {
	name: "Functional micro",
	family: "Motion languages",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The tokens are live: controls ease out in 120 ms, opacity, colour and transform only, and stop for reduced motion.
	css: `${diagramCss}
		[data-slot=button], [data-slot=badge], [data-slot=tabs-trigger] { transition-property: opacity, transform, background-color; transition-duration: 120ms; transition-timing-function: cubic-bezier(0.2, 0, 0, 1); }
		@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
	`,
} satisfies Style
