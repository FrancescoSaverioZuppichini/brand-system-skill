// [Agent] Ported from the hand-drawn specimen: flat cut paper (a red disc, a blue strip) under two greyscale
// "archive photos" (a landscape print with a deckled bottom edge and an amphora cut-out) and a scale-clash figure,
// held with tape. Grain lives only inside the cut shapes: noise is overlaid on the source, then clipped to its alpha.
export default function Collage() {
	return (
		<svg
			aria-hidden="true"
			className="absolute top-0 left-[380px]"
			width="420"
			height="500"
			viewBox="0 0 420 500"
		>
			<defs>
				<filter id="collage-grain" x="0" y="0" width="100%" height="100%">
					<feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="7" />
					<feColorMatrix type="matrix" values=".45 0 0 0 .27  .45 0 0 0 .27  .45 0 0 0 .27  0 0 0 0 1" />
					<feBlend in="SourceGraphic" mode="overlay" />
					<feComposite in2="SourceGraphic" operator="in" />
				</filter>
				<filter id="collage-cut" x="-5%" y="-5%" width="115%" height="115%">
					<feDropShadow dx="2" dy="3" stdDeviation="0" floodOpacity=".22" />
				</filter>
				<linearGradient id="collage-sky" x2="0" y2="1">
					<stop offset="0" stopColor="#d9d9d6" />
					<stop offset=".7" stopColor="#8f8f8c" />
				</linearGradient>
				<linearGradient id="collage-pot" x2="1">
					<stop offset="0" stopColor="#1c1c1c" />
					<stop offset=".3" stopColor="#b9b9b6" />
					<stop offset=".45" stopColor="#7a7a78" />
					<stop offset="1" stopColor="#121212" />
				</linearGradient>
			</defs>
			<polygon
				fill="var(--cobalt)"
				filter="url(#collage-cut)"
				points="-10,300 430,170 440,236 0,372 -6,350 4,336"
			/>
			<circle cx="250" cy="170" r="120" fill="var(--vermilion)" filter="url(#collage-cut)" />
			<g filter="url(#collage-cut)" transform="rotate(-4 200 380)">
				<g filter="url(#collage-grain)">
					<polygon
						points="40,300 360,300 360,440 346,446 330,438 310,447 288,440 262,448 240,439 214,447 190,440 166,448 140,439 116,447 92,440 66,448 40,442"
						fill="url(#collage-sky)"
					/>
					<path d="M40 400C90 370 140 380 190 360S290 350 360 372V448H40z" fill="#4a4a48" />
					<path d="M40 420C110 404 200 414 260 400S340 404 360 410V448H40z" fill="#222" />
				</g>
			</g>
			<rect
				x="166"
				y="290"
				width="62"
				height="20"
				fill="oklch(0.90 0.04 90 / .7)"
				transform="rotate(-8 196 300)"
			/>
			<g filter="url(#collage-cut)" transform="translate(250 64)">
				<g filter="url(#collage-grain)">
					<path
						fill="url(#collage-pot)"
						d="M-26 0H26L22 10C20 30 20 44 24 56C70 76 84 110 80 150C76 210 40 260 18 290L30 318H-30L-18 290C-40 260-76 210-80 150C-84 110-70 76-24 56C-20 44-20 30-22 10Z"
					/>
					<path
						d="M-22 22C-62 18-74 52-58 84M22 22C62 18 74 52 58 84"
						stroke="#2a2a2a"
						strokeWidth="9"
						fill="none"
					/>
					<rect x="-78" y="118" width="156" height="10" fill="#e8e8e4" opacity=".55" />
				</g>
			</g>
			<g fill="var(--ink)">
				<circle cx="116" cy="352" r="6" />
				<path d="M108 361h16l4 26h-4l-2-14v20l-1 26h-5l-1-22-2 22h-5l-1-26v-20l-2 14h-4z" />
			</g>
			<rect
				x="326"
				y="424"
				width="70"
				height="20"
				fill="oklch(0.90 0.04 90 / .7)"
				transform="rotate(40 360 434)"
			/>
		</svg>
	)
}
