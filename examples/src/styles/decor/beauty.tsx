// [Agent] Ported from the hand-made specimen: a blush stage on the right and a product shot drawn in SVG (a squeeze tube
// standing on its cap and a dropper bottle on a nude podium, lit from the left, with a lipstick swatch smear and
// droplets), standing in for the studio photography the style lives on.
export default function Beauty() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute top-0 right-0 h-full w-[360px] [background:radial-gradient(90%_60%_at_60%_45%,var(--petal),var(--blush))]" />
			<svg viewBox="0 0 800 500" className="absolute inset-0 size-full">
				<defs>
					<linearGradient id="tube" x1="0" x2="1">
						<stop offset="0" stopColor="oklch(0.90 0.03 20)" />
						<stop offset="0.28" stopColor="oklch(0.99 0.006 40)" />
						<stop offset="0.6" stopColor="oklch(0.93 0.025 20)" />
						<stop offset="1" stopColor="oklch(0.80 0.05 20)" />
					</linearGradient>
					<linearGradient id="cap" x1="0" x2="1">
						<stop offset="0" stopColor="oklch(0.56 0.19 15)" />
						<stop offset="0.3" stopColor="oklch(0.72 0.17 15)" />
						<stop offset="1" stopColor="oklch(0.48 0.17 15)" />
					</linearGradient>
					<linearGradient id="glass" x1="0" x2="1">
						<stop offset="0" stopColor="oklch(0.78 0.06 55)" />
						<stop offset="0.25" stopColor="oklch(0.92 0.03 60)" />
						<stop offset="0.65" stopColor="oklch(0.82 0.05 55)" />
						<stop offset="1" stopColor="oklch(0.68 0.06 50)" />
					</linearGradient>
					<linearGradient id="podium" x1="0" x2="1">
						<stop offset="0" stopColor="oklch(0.76 0.05 50)" />
						<stop offset="0.35" stopColor="oklch(0.86 0.04 55)" />
						<stop offset="1" stopColor="oklch(0.70 0.05 45)" />
					</linearGradient>
					<radialGradient id="drop" cx="0.35" cy="0.35" r="0.7">
						<stop offset="0" stopColor="#fff" stopOpacity="0.95" />
						<stop offset="0.5" stopColor="oklch(0.92 0.03 20)" stopOpacity="0.4" />
						<stop offset="1" stopColor="oklch(0.70 0.08 20)" stopOpacity="0.5" />
					</radialGradient>
					<filter id="blur">
						<feGaussianBlur stdDeviation="10" />
					</filter>
				</defs>
				<path
					d="M492 300 C 520 270 600 262 660 268 C 720 274 760 290 770 310 C 740 318 690 306 640 310 C 580 316 530 330 492 300 Z"
					fill="var(--pop)"
					opacity="0.9"
				/>
				<path
					d="M510 296 C 560 280 640 276 720 290"
					stroke="#fff"
					strokeOpacity="0.45"
					strokeWidth="3"
					fill="none"
					strokeLinecap="round"
				/>
				<ellipse
					cx="610"
					cy="470"
					rx="150"
					ry="34"
					fill="oklch(0.62 0.06 40)"
					opacity="0.35"
					filter="url(#blur)"
				/>
				<path d="M470 392 v80 a140 30 0 0 0 280 0 v-80 Z" fill="url(#podium)" />
				<ellipse cx="610" cy="392" rx="140" ry="30" fill="oklch(0.88 0.035 55)" />
				<ellipse
					cx="572"
					cy="398"
					rx="46"
					ry="10"
					fill="oklch(0.55 0.06 40)"
					opacity="0.35"
					filter="url(#blur)"
				/>
				<path d="M538 178 h68 l-6 156 h-56 Z" fill="url(#tube)" />
				<rect x="533" y="168" width="78" height="16" rx="2" fill="oklch(0.94 0.02 20)" />
				<path d="M537 172 h70" stroke="oklch(0.80 0.04 20)" strokeWidth="1" strokeDasharray="2 3" />
				<rect x="544" y="334" width="56" height="62" rx="6" fill="url(#cap)" />
				<rect x="556" y="196" width="7" height="124" rx="3.5" fill="#fff" opacity="0.7" />
				<ellipse
					cx="672"
					cy="402"
					rx="40"
					ry="8"
					fill="oklch(0.55 0.06 40)"
					opacity="0.35"
					filter="url(#blur)"
				/>
				<rect x="636" y="290" width="72" height="110" rx="14" fill="url(#glass)" opacity="0.95" />
				<rect x="644" y="300" width="8" height="84" rx="4" fill="#fff" opacity="0.6" />
				<rect x="652" y="262" width="40" height="30" rx="3" fill="var(--cocoa)" />
				<path d="M656 262 c0 -32 32 -32 32 0 Z" fill="oklch(0.28 0.03 40)" />
				<circle cx="502" cy="210" r="9" fill="url(#drop)" />
				<circle cx="742" cy="200" r="14" fill="url(#drop)" />
				<circle cx="726" cy="240" r="6" fill="url(#drop)" />
				<circle cx="486" cy="250" r="5" fill="url(#drop)" />
			</svg>
		</div>
	)
}
