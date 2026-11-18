// [Agent] Ported from the hand-drawn specimen: a poster image stand-in. A red-lit arched doorway with a silhouette,
// its magenta light blooming into the dark and pooling on the floor, a dotted "floor" indicator, film grain on top.
export default function Nightlife() {
	return (
		<svg aria-hidden="true" className="absolute inset-0" width="800" height="500" viewBox="0 0 800 500">
			<defs>
				<linearGradient id="night-door" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="var(--magenta)" />
					<stop offset="0.6" stopColor="var(--red)" />
					<stop offset="1" stopColor="oklch(0.36 0.15 25)" />
				</linearGradient>
				<radialGradient id="night-pool" cx="0.5" cy="0.5" r="0.5">
					<stop offset="0" stopColor="var(--red)" stopOpacity="0.6" />
					<stop offset="1" stopColor="var(--red)" stopOpacity="0" />
				</radialGradient>
				<filter id="night-bloom" x="-100%" y="-50%" width="300%" height="200%">
					<feGaussianBlur stdDeviation="34" />
				</filter>
				<filter id="night-grain">
					<feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
					<feColorMatrix values="0 0 0 0 1  0 0 0 0 0.9  0 0 0 0 0.85  0 0 0 0.1 0" />
				</filter>
			</defs>
			<rect
				x="452"
				y="40"
				width="130"
				height="400"
				rx="65"
				fill="var(--magenta)"
				opacity="0.7"
				filter="url(#night-bloom)"
			/>
			<ellipse cx="517" cy="452" rx="170" ry="26" fill="url(#night-pool)" />
			<path d="M462 440 V125 A55 55 0 0 1 572 125 V440 Z" fill="url(#night-door)" />
			<g fill="oklch(0.10 0.01 20)">
				<ellipse cx="527" cy="262" rx="15" ry="18" />
				<rect x="520" y="274" width="14" height="22" rx="5" />
				<path d="M496 440 L502 382 C 494 362 482 330 488 314 C 494 302 512 297 527 297 C 542 297 560 302 566 314 C 572 330 560 362 552 382 L558 440 Z" />
			</g>
			<path
				d="M489 326 C 490 312 500 302 518 299"
				stroke="var(--skin)"
				strokeOpacity="0.45"
				strokeWidth="1.5"
				fill="none"
				strokeLinecap="round"
			/>
			<path d="M462 440 L420 500 H614 L572 440 Z" fill="var(--red)" opacity="0.18" />
			<g fill="var(--cream)" opacity="0.5">
				<circle cx="618" cy="64" r="2.5" />
				<circle cx="618" cy="84" r="2.5" />
				<circle cx="618" cy="104" r="2.5" />
				<circle cx="618" cy="124" r="2.5" />
				<circle cx="618" cy="144" r="2.5" fill="var(--red)" />
			</g>
			<rect width="800" height="500" filter="url(#night-grain)" />
		</svg>
	)
}
