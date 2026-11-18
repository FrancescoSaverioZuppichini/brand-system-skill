// [Agent] Ported from the hand-made specimen: a folio. Uneven vellum, the scribe's drypoint ruling left visible, the
// frame of an illuminated initial (white filigree on blue inside gold and vermilion; the style's css floats the
// headline's real first letter into it), a bar border running down the margin with ivy-leaf sprays, and a coat of arms
// with a motto scroll for the number card.
const ink = "oklch(0.22 0.02 40)"

export default function Medieval() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute inset-0 size-full mix-blend-multiply opacity-50">
				<filter id="skin">
					<feTurbulence type="fractalNoise" baseFrequency=".006 .012" numOctaves="4" seed="3" />
					<feColorMatrix values="0 0 0 0 .62  0 0 0 0 .5  0 0 0 0 .32  0 0 0 .55 -.12" />
				</filter>
				<rect width="100%" height="100%" filter="url(#skin)" />
			</svg>
			<div className="absolute top-[52px] left-[156px] h-[392px] w-[420px] border-x border-[oklch(0.58_0.19_35/0.22)] bg-[repeating-linear-gradient(transparent_0_27px,oklch(0.58_0.19_35/0.22)_27px_28px)]" />
			<svg className="absolute inset-0 size-full" viewBox="0 0 800 500">
				<defs>
					<pattern id="filigree" width="12" height="12" patternUnits="userSpaceOnUse">
						<rect width="12" height="12" fill="var(--ultramarine)" />
						<g fill="oklch(0.96 0.02 85)">
							<circle cx="3" cy="3" r="1" />
							<circle cx="9" cy="9" r="1" />
							<circle cx="9" cy="3" r=".5" />
							<circle cx="3" cy="9" r=".5" />
						</g>
					</pattern>
					<linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0" stopColor="oklch(0.86 0.12 90)" />
						<stop offset=".5" stopColor="oklch(0.72 0.12 82)" />
						<stop offset="1" stopColor="oklch(0.62 0.11 75)" />
					</linearGradient>
					<path
						id="ivy"
						d="M0 0 C-6 -4 -9 -11 -5 -15 C-3 -17 0 -15 0 -12 C0 -15 3 -17 5 -15 C9 -11 6 -4 0 0Z"
					/>
				</defs>
				<rect x="128" y="188" width="10" height="268" fill="url(#leaf)" />
				<rect x="130" y="190" width="6" height="84" fill="var(--ultramarine)" />
				<rect x="130" y="280" width="6" height="84" fill="var(--vermilion)" />
				<rect x="130" y="370" width="6" height="84" fill="var(--ultramarine)" />
				<g fill="none" stroke={ink} strokeWidth="1.2" strokeLinecap="round">
					<path d="M128 230 C100 226 86 240 92 256 C96 266 108 262 104 254" />
					<path d="M128 330 C96 330 80 346 88 364 C92 374 106 370 102 360" />
					<path d="M128 420 C104 424 98 444 110 456 C118 462 126 454 120 448" />
					<path d="M138 456 C200 470 300 462 380 470 C460 476 520 466 560 472" />
					<path d="M212 120 C240 34 330 22 420 30 C500 36 540 24 572 34" />
				</g>
				<g fill="url(#leaf)" stroke={ink} strokeWidth=".8">
					<use href="#ivy" transform="translate(92 256) rotate(200) scale(1.3)" />
					<use href="#ivy" transform="translate(88 364) rotate(190) scale(1.3)" />
					<use href="#ivy" transform="translate(250 466) rotate(95) scale(1.2)" />
					<use href="#ivy" transform="translate(470 474) rotate(80) scale(1.2)" />
					<use href="#ivy" transform="translate(372 27) rotate(-90) scale(1.2)" />
				</g>
				<g stroke={ink} strokeWidth=".8">
					<use href="#ivy" fill="var(--ultramarine)" transform="translate(110 456) rotate(220) scale(1.2)" />
					<use href="#ivy" fill="var(--vermilion)" transform="translate(104 254) rotate(150) scale(1.1)" />
					<use href="#ivy" fill="var(--malachite)" transform="translate(360 468) rotate(-80) scale(1.2)" />
					<use href="#ivy" fill="var(--vermilion)" transform="translate(500 34) rotate(100) scale(1.2)" />
					<use href="#ivy" fill="var(--malachite)" transform="translate(272 32) rotate(-110) scale(1.1)" />
				</g>
				<g fill="url(#leaf)" stroke={ink} strokeWidth=".6">
					<circle cx="96" cy="236" r="3" />
					<circle cx="82" cy="348" r="3" />
					<circle cx="300" cy="470" r="3" />
					<circle cx="540" cy="474" r="3" />
					<circle cx="560" cy="30" r="3" />
					<circle cx="440" cy="28" r="3" />
				</g>
				<g transform="translate(596 70)">
					<path
						fill="oklch(0.95 0.03 85)"
						stroke={ink}
						strokeWidth="1.2"
						d="M-6 12 L8 6 L8 36 L-6 42 L2 27Z M170 12 L156 6 L156 36 L170 42 L162 27Z"
					/>
					<path
						fill="oklch(0.96 0.025 85)"
						stroke={ink}
						strokeWidth="1.2"
						d="M8 6 Q82 -4 156 6 L156 36 Q82 26 8 36Z"
					/>
					<path
						transform="translate(14 56)"
						fill="url(#leaf)"
						stroke={ink}
						strokeWidth="1.2"
						d="M0 0 H136 V78 C136 132 100 166 68 184 C36 166 0 132 0 78Z"
					/>
					<path
						transform="translate(24 66)"
						fill="url(#filigree)"
						d="M0 0 H116 V70 C116 116 86 146 58 162 C30 146 0 116 0 70Z"
					/>
					<path transform="translate(24 66)" fill="var(--vermilion)" d="M0 0 H116 V22 H0Z" />
					<g fill="url(#leaf)" transform="translate(82 77)">
						<circle cx="-34" r="5" />
						<circle r="5" />
						<circle cx="34" r="5" />
					</g>
				</g>
				<g transform="translate(72 48)">
					<rect width="140" height="140" fill="var(--vermilion)" />
					<rect x="6" y="6" width="128" height="128" fill="url(#leaf)" />
					<rect x="10" y="10" width="120" height="120" fill="url(#filigree)" />
				</g>
			</svg>
		</div>
	)
}
