// [Agent] Ported from the hand-drawn specimen: an action-photo stand-in, a running track in hard perspective behind an
// angled cut, motion-blurred into speed lines (a horizontal-only gaussian blur), a white cut line and three slashes.
export default function Sports() {
	return (
		<svg aria-hidden="true" className="absolute inset-0" width="800" height="500" viewBox="0 0 800 500">
			<defs>
				<clipPath id="sports-cut">
					<polygon points="560,0 800,0 800,500 410,500" />
				</clipPath>
				<linearGradient id="sports-shade" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0" stopColor="#000" stopOpacity="0.55" />
					<stop offset="0.5" stopColor="#000" stopOpacity="0" />
				</linearGradient>
				<linearGradient id="sports-fade" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="#000" stopOpacity="0.65" />
					<stop offset="0.5" stopColor="#000" stopOpacity="0" />
				</linearGradient>
				<filter id="sports-speed" x="-10%" y="-10%" width="120%" height="120%">
					<feGaussianBlur stdDeviation="10 1.5" />
				</filter>
			</defs>
			<g clipPath="url(#sports-cut)">
				<rect width="800" height="500" fill="var(--track)" />
				<g stroke="oklch(0.97 0.01 60)" strokeWidth="5" filter="url(#sports-speed)">
					<path d="M120 500 L1000 -150 M290 500 L1010 -150 M470 500 L1020 -150 M660 500 L1030 -150 M860 500 L1040 -150 M1070 500 L1050 -150" />
				</g>
				<g stroke="oklch(0.97 0.01 60)" strokeOpacity="0.35" strokeWidth="2" filter="url(#sports-speed)">
					<path d="M480 120 H800 M520 210 H800 M440 330 H760 M560 400 H800" />
				</g>
				<rect width="800" height="500" fill="url(#sports-fade)" />
				<rect width="800" height="500" fill="url(#sports-shade)" />
			</g>
			<polygon points="560,0 570,0 420,500 410,500" fill="var(--white)" />
			<g fill="var(--white)" opacity="0.9">
				<polygon points="610,30 624,30 604,66 590,66" />
				<polygon points="632,30 646,30 626,66 612,66" />
				<polygon points="654,30 668,30 648,66 634,66" />
			</g>
		</svg>
	)
}
