import type { Style } from "@/theme"
import Decor from "./decor/motion-generative"
import { diagramCss } from "./decor/motion"

export default {
	name: "Generative",
	family: "Motion languages",
	fonts: { heading: "Inter", body: "Inter", mono: "JetBrains Mono" },
	google: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500",
	radius: "8px",
	border: "1px",
	shadow: "none",
	heading: { weight: 600, tracking: "-0.02em" },
	specimen: "start",
	decor: Decor,
	// [Agent] The real card takes the noise's last drift and tilt; reduced motion keeps one static seeded frame.
	css: `${diagramCss}
		[data-part=card] { transform: translate(-9.1px, -2.2px) rotate(-2.7deg); }
		@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
	`,
} satisfies Style
