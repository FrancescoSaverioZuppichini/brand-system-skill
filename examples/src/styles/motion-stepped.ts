import type { Style } from "@/theme"
import Decor from "./decor/motion-stepped"
import { diagramCss } from "./decor/motion"

export default {
	name: "Stepped / mechanical",
	family: "Motion languages",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] Live tokens: state changes jump in four steps, like a mechanical counter; reduced motion cuts.
	css: `${diagramCss}
		[data-slot=button], [data-slot=badge] { transition: background-color 500ms steps(4, end), transform 500ms steps(4, end); }
		@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
	`,
} satisfies Style
