import { Grain } from "./grain"

// [Agent] Ported from the hand-made specimen: an arched painted window. A sfumato landscape (blurred ridges under a dark
// radial veil that dissolves the edges into smoke instead of drawing a border) above a parapet lit hard from the upper
// left (chiaroscuro); the number card is the cartellino, the painted paper label of Bellini and Antonello, laid on it.
export default function Renaissance() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute top-[34px] left-[440px] h-[432px] w-[304px] overflow-hidden rounded-t-[152px] outline outline-offset-8 outline-[var(--umber)]">
				<svg className="absolute inset-0 size-full" viewBox="0 0 304 432" preserveAspectRatio="none">
					<defs>
						<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0" stopColor="oklch(0.30 0.035 220)" />
							<stop offset=".34" stopColor="oklch(0.62 0.045 185)" />
							<stop offset=".56" stopColor="oklch(0.90 0.05 85)" />
						</linearGradient>
						<filter id="far" x="-10%" y="-30%" width="120%" height="160%">
							<feGaussianBlur stdDeviation="3" />
						</filter>
						<filter id="mid" x="-10%" y="-30%" width="120%" height="160%">
							<feGaussianBlur stdDeviation="1.4" />
						</filter>
						<radialGradient id="smoke" cx=".45" cy=".46" r=".72">
							<stop offset=".45" stopColor="oklch(0.17 0.02 55)" stopOpacity="0" />
							<stop offset="1" stopColor="oklch(0.17 0.02 55)" stopOpacity=".92" />
						</radialGradient>
						<linearGradient id="stone" x1="0" y1="0" x2="1" y2="0">
							<stop offset="0" stopColor="oklch(0.46 0.035 60)" />
							<stop offset=".45" stopColor="oklch(0.27 0.03 55)" />
							<stop offset="1" stopColor="oklch(0.12 0.015 55)" />
						</linearGradient>
						<linearGradient id="ledge" x1="0" y1="0" x2="1" y2="0">
							<stop offset="0" stopColor="oklch(0.78 0.05 75)" />
							<stop offset=".6" stopColor="oklch(0.42 0.035 60)" />
							<stop offset="1" stopColor="oklch(0.20 0.02 55)" />
						</linearGradient>
					</defs>
					<rect width="304" height="432" fill="url(#sky)" />
					<path
						filter="url(#far)"
						fill="oklch(0.74 0.04 180)"
						d="M-10 236 L14 214 L30 222 L52 176 L66 186 L84 150 L98 168 L116 160 L134 196 L156 188 L176 210 L198 172 L214 180 L236 150 L252 164 L270 158 L292 196 L314 190 V290 H-10Z"
					/>
					<path
						filter="url(#mid)"
						fill="oklch(0.56 0.05 168)"
						d="M-10 262 C30 240 62 258 100 244 C140 230 168 256 214 240 C254 228 282 244 314 236 V320 H-10Z"
					/>
					<path
						filter="url(#mid)"
						fill="oklch(0.88 0.04 85)"
						opacity=".75"
						d="M96 316 C120 296 168 300 196 284 C214 274 236 276 250 270 C236 286 210 290 190 302 C160 318 128 316 112 330Z"
					/>
					<path
						fill="oklch(0.32 0.035 120)"
						d="M-10 300 C40 282 84 298 124 306 C170 316 220 290 314 292 V432 H-10Z"
					/>
					<path fill="oklch(0.24 0.03 90)" d="M-10 318 C30 312 70 326 104 336 L-10 352Z" />
					<rect width="304" height="432" fill="url(#smoke)" />
					<rect y="322" width="304" height="110" fill="url(#stone)" />
					<rect y="316" width="304" height="8" fill="url(#ledge)" />
				</svg>
			</div>
			<Grain opacity={0.12} />
		</div>
	)
}
