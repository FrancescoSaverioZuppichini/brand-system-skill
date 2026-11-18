import type { Style } from "@/theme"
import Decor from "./decor/motion-cinematic"
import { diagramCss } from "./decor/motion"

export default {
	name: "Cinematic",
	family: "Motion languages",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Live tokens: surfaces change on the slow symmetric ease; reduced motion cuts instead.
	css: `${diagramCss}
		[data-slot=button], [data-slot=card] { transition: opacity 900ms cubic-bezier(0.65, 0, 0.35, 1), transform 900ms cubic-bezier(0.65, 0, 0.35, 1), background-color 300ms cubic-bezier(0.65, 0, 0.35, 1); }
		@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
	`,
} satisfies Style
