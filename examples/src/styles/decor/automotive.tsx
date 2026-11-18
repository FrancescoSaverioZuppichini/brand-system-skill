// [Agent] Ported from the hand-drawn specimen: a studio render stand-in (overhead light strip, floor pool, a fastback
// with a metallic shoulder highlight, head- and tail-light glints), then the spec strip under it: a full-width
// hairline and a tick ruler whose red bar shows how far along the number is.
export default function Automotive() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute inset-0" width="800" height="500" viewBox="0 0 800 500">
				<defs>
					<radialGradient id="auto-floor" cx="0.5" cy="0.5" r="0.5">
						<stop offset="0" stopColor="oklch(0.42 0.005 260)" />
						<stop offset="1" stopColor="var(--studio)" stopOpacity="0" />
					</radialGradient>
					<radialGradient id="auto-back" cx="0.62" cy="0.1" r="0.7">
						<stop offset="0" stopColor="oklch(0.30 0.005 260)" />
						<stop offset="1" stopColor="var(--studio)" />
					</radialGradient>
					<linearGradient id="auto-paint" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0" stopColor="oklch(0.50 0.005 260)" />
						<stop offset="0.3" stopColor="oklch(0.88 0.004 260)" />
						<stop offset="0.42" stopColor="oklch(0.42 0.006 260)" />
						<stop offset="0.75" stopColor="oklch(0.24 0.005 260)" />
						<stop offset="1" stopColor="oklch(0.16 0 0)" />
					</linearGradient>
					<linearGradient id="auto-glass" x1="0" y1="0" x2="1" y2="0">
						<stop offset="0" stopColor="oklch(0.10 0 0)" />
						<stop offset="0.55" stopColor="oklch(0.28 0.006 260)" />
						<stop offset="1" stopColor="oklch(0.10 0 0)" />
					</linearGradient>
					<radialGradient id="auto-rim" cx="0.4" cy="0.35" r="0.7">
						<stop offset="0" stopColor="oklch(0.85 0.004 260)" />
						<stop offset="1" stopColor="oklch(0.35 0.005 260)" />
					</radialGradient>
					<filter id="auto-glow" x="-20%" y="-200%" width="140%" height="500%">
						<feGaussianBlur stdDeviation="3" result="b" />
						<feMerge>
							<feMergeNode in="b" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
					<filter id="auto-soft">
						<feGaussianBlur stdDeviation="8" />
					</filter>
				</defs>
				<rect width="800" height="500" fill="url(#auto-back)" />
				<ellipse
					cx="550"
					cy="0"
					rx="190"
					ry="10"
					fill="var(--chrome)"
					opacity="0.5"
					filter="url(#auto-soft)"
				/>
				<ellipse cx="520" cy="384" rx="330" ry="36" fill="url(#auto-floor)" />
				<g transform="translate(214 200) scale(0.94)">
					<ellipse cx="300" cy="190" rx="270" ry="10" fill="#000" opacity="0.9" filter="url(#auto-soft)" />
					<path
						d="M24 130 C22 116 40 108 82 103 L200 93 C236 70 266 58 306 55 C366 51 414 56 446 67 C494 82 532 92 568 101 C578 106 580 120 576 136 L572 146 L520 146 A50 50 0 0 0 420 146 L190 146 A50 50 0 0 0 90 146 L36 146 C28 144 24 138 24 130 Z"
						fill="url(#auto-paint)"
					/>
					<path
						d="M214 92 C246 72 272 62 306 60 C364 56 408 60 436 70 C452 76 454 84 438 87 L232 94 Z"
						fill="url(#auto-glass)"
					/>
					<path d="M318 60 L322 92" stroke="var(--studio)" strokeWidth="3" />
					<path d="M86 106 C200 98 380 92 566 104" fill="none" stroke="var(--chrome)" strokeOpacity="0.5" />
					<path
						d="M26 122 L74 112"
						stroke="var(--chrome)"
						strokeWidth="2.5"
						strokeLinecap="round"
						filter="url(#auto-glow)"
					/>
					<path
						d="M548 102 L577 110"
						stroke="var(--signal)"
						strokeWidth="3"
						strokeLinecap="round"
						filter="url(#auto-glow)"
					/>
					<path d="M200 128 L420 128" stroke="var(--studio)" strokeOpacity="0.6" />
					{[140, 470].map((x) => (
						<g key={x}>
							<circle cx={x} cy="150" r="42" fill="oklch(0.10 0 0)" />
							<circle cx={x} cy="150" r="29" fill="url(#auto-rim)" />
							<path
								d={`M${x} 121 V179 M${x - 29} 150 H${x + 29} M${x - 20.5} 129.5 L${x + 20.5} 170.5 M${x + 20.5} 129.5 L${x - 20.5} 170.5`}
								stroke="oklch(0.20 0 0)"
								strokeWidth="5"
							/>
							<circle cx={x} cy="150" r="7" fill="oklch(0.70 0.004 260)" />
						</g>
					))}
				</g>
			</svg>
			<div className="absolute top-[382px] right-11 left-11 h-px bg-[oklch(0.98_0_0/0.16)]" />
			<div className="absolute top-[448px] right-11 left-[228px] h-[18px] [background:repeating-linear-gradient(90deg,oklch(0.98_0_0/0.16)_0_1px,transparent_1px_12px)] [mask:linear-gradient(90deg,#000,transparent)]">
				<div className="absolute bottom-0 left-0 h-0.5 w-[38%] bg-[var(--signal)]" />
			</div>
		</div>
	)
}
