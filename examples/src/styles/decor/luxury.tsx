// [Agent] Ported from the hand-made specimen: a stand-in for the campaign photograph (blurred light catching folds of
// black satin, a vignette and film grain), the hamburger and bag of a fashion house's tiny navigation, and the slide
// index of a full-bleed carousel.
export default function Luxury() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg viewBox="0 0 800 500" className="absolute inset-0 size-full">
				<defs>
					<linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0.3">
						<stop offset="0" stopColor="oklch(0.90 0.01 80)" stopOpacity="0" />
						<stop offset="0.45" stopColor="oklch(0.90 0.01 80)" stopOpacity="0.55" />
						<stop offset="0.7" stopColor="oklch(0.90 0.01 80)" stopOpacity="0.12" />
						<stop offset="1" stopColor="oklch(0.90 0.01 80)" stopOpacity="0" />
					</linearGradient>
					<radialGradient id="vignette" cx="0.55" cy="0.35" r="0.75">
						<stop offset="0" stopColor="#000" stopOpacity="0" />
						<stop offset="1" stopColor="#000" stopOpacity="0.85" />
					</radialGradient>
					<filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
						<feGaussianBlur stdDeviation="5" />
					</filter>
					<filter id="softer" x="-20%" y="-20%" width="140%" height="140%">
						<feGaussianBlur stdDeviation="22" />
					</filter>
					<filter id="film">
						<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
						<feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.09 0" />
					</filter>
				</defs>
				<rect width="800" height="500" fill="var(--onyx)" />
				<path
					d="M-60 40 C 160 -10 300 170 520 120 S 760 -10 880 30 L 880 110 C 740 80 640 220 500 230 S 140 90 -60 150 Z"
					fill="url(#sheen)"
					filter="url(#softer)"
					opacity="0.9"
				/>
				<g filter="url(#soft)">
					<path
						d="M-60 170 C 120 120 260 300 470 250 S 720 110 880 150 L 880 182 C 720 150 600 300 450 300 S 110 170 -60 214 Z"
						fill="url(#sheen)"
					/>
					<path
						d="M180 -20 C 260 80 300 190 420 260 S 640 360 700 520 L 640 520 C 590 380 480 330 380 280 S 220 110 140 -20 Z"
						fill="url(#sheen)"
						opacity="0.7"
					/>
					<path
						d="M520 -20 C 560 60 620 120 700 150 S 830 190 860 260 L 860 300 C 800 230 700 220 640 180 S 520 60 480 -20 Z"
						fill="url(#sheen)"
						opacity="0.5"
					/>
				</g>
				<path
					d="M-60 250 C 140 210 300 360 480 330 S 740 230 880 270 L 880 520 L -60 520 Z"
					fill="oklch(0.10 0 0)"
					filter="url(#softer)"
					opacity="0.75"
				/>
				<rect width="800" height="500" fill="url(#vignette)" />
				<rect width="800" height="500" filter="url(#film)" />
			</svg>
			<svg viewBox="0 0 22 10" className="absolute top-[39px] left-9 w-[22px]">
				<path d="M0 1h22M0 9h22" stroke="white" />
			</svg>
			<svg viewBox="0 0 18 20" fill="none" stroke="white" className="absolute top-[34px] right-9 w-[18px]">
				<path d="M1.5 6.5h15l-1 13h-13l-1-13Z" />
				<path d="M5.5 8V5a3.5 3.5 0 0 1 7 0v3" />
			</svg>
			<div className="absolute right-9 bottom-[34px] flex gap-2">
				<i className="h-px w-[18px] bg-white" />
				<i className="h-px w-[18px] bg-white/40" />
				<i className="h-px w-[18px] bg-white/40" />
			</div>
		</div>
	)
}
