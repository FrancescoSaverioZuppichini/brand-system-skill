// [Agent] Ported from the hand-drawn specimen: velvet curtains and a scalloped valance, a gilt frame with C-scroll corners
// around a dark green field, a cartouche under the number card, and a Caravaggio shaft of light from the upper right.
export default function Baroque() {
	return (
		<svg className="absolute inset-0 size-full" viewBox="0 0 800 500" aria-hidden="true">
			<defs>
				{/* [Agent] Velvet folds: one repeating stripe gradient, then a vertical shade on top so the folds fall into darkness. */}
				<linearGradient id="folds" x1="0" x2="26" gradientUnits="userSpaceOnUse" spreadMethod="repeat">
					<stop offset="0" stopColor="oklch(0.18 0.06 20)" />
					<stop offset=".45" stopColor="oklch(0.42 0.13 22)" />
					<stop offset=".6" stopColor="oklch(0.35 0.11 20)" />
					<stop offset="1" stopColor="oklch(0.18 0.06 20)" />
				</linearGradient>
				<linearGradient id="fall" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="#000" stopOpacity=".1" />
					<stop offset="1" stopColor="#000" stopOpacity=".7" />
				</linearGradient>
				<linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0" stopColor="oklch(0.46 0.08 70)" />
					<stop offset=".3" stopColor="oklch(0.86 0.12 88)" />
					<stop offset=".5" stopColor="oklch(0.58 0.10 75)" />
					<stop offset=".75" stopColor="oklch(0.82 0.12 86)" />
					<stop offset="1" stopColor="oklch(0.42 0.07 65)" />
				</linearGradient>
				<radialGradient id="field" cx=".5" cy=".42" r=".7">
					<stop offset="0" stopColor="oklch(0.30 0.06 160)" />
					<stop offset="1" stopColor="oklch(0.12 0.02 160)" />
				</radialGradient>
				{/* [Agent] Caravaggio's shaft of light: a pale wedge from the upper right, blurred so it reads as air, not a shape. */}
				<linearGradient id="beam" x1="1" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="oklch(0.93 0.05 85)" stopOpacity=".22" />
					<stop offset="1" stopColor="oklch(0.93 0.05 85)" stopOpacity="0" />
				</linearGradient>
				<filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
					<feGaussianBlur stdDeviation="14" />
				</filter>
				<filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
					<feGaussianBlur stdDeviation="3" result="b" />
					<feColorMatrix in="b" values="1 0 0 0 0  0 .8 0 0 0  0 0 .3 0 0  0 0 0 .5 0" result="g" />
					<feMerge>
						<feMergeNode in="g" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
				{/* [Agent] One corner of C-scrolls and an acanthus leaf, drawn once and mirrored to the other three corners. */}
				<g id="corner" fill="none" stroke="url(#gold)" strokeLinecap="round">
					<path strokeWidth="4" d="M62 -6 C40 -34 4 -30 -8 -10 C-16 4 -4 18 10 10 C18 5 15 -6 7 -5" />
					<path strokeWidth="4" d="M-6 62 C-34 40 -30 4 -10 -8" />
					<path strokeWidth="2.5" d="M-10 62 C-24 72 -26 92 -14 104 C-6 112 4 104 -2 96" />
					<path strokeWidth="2.5" d="M62 -10 C72 -24 92 -26 104 -14 C112 -6 104 4 96 -2" />
					<path
						fill="url(#gold)"
						stroke="none"
						d="M-4 -4 C-14 -12 -30 -14 -42 -40 C-22 -36 -12 -26 -8 -16 C-12 -28 -10 -36 -4 -44 C2 -32 2 -18 -4 -4Z"
					/>
				</g>
			</defs>

			<rect width="800" height="500" fill="var(--umber)" />
			<ellipse
				cx="400"
				cy="230"
				rx="330"
				ry="250"
				fill="oklch(0.28 0.05 40)"
				opacity=".55"
				filter="url(#soft)"
			/>

			{/* frame */}
			<rect x="192" y="48" width="416" height="350" fill="url(#field)" />
			<rect
				x="192"
				y="48"
				width="416"
				height="350"
				fill="none"
				stroke="url(#gold)"
				strokeWidth="12"
				filter="url(#glow)"
			/>
			<rect x="206" y="62" width="388" height="322" fill="none" stroke="url(#gold)" strokeWidth="1.5" />
			<rect
				x="186"
				y="42"
				width="428"
				height="362"
				fill="none"
				stroke="oklch(0.75 0.12 85)"
				strokeWidth="2"
				strokeDasharray="0 7"
				strokeLinecap="round"
			/>
			<use href="#corner" transform="translate(192 48)" />
			<use href="#corner" transform="translate(608 48) scale(-1 1)" />
			<use href="#corner" transform="translate(192 398) scale(1 -1)" />
			<use href="#corner" transform="translate(608 398) scale(-1 -1)" />
			{/* card cartouche */}
			<g transform="translate(400 428)" filter="url(#glow)">
				<path
					fill="oklch(0.25 0.09 20)"
					stroke="url(#gold)"
					strokeWidth="4"
					d="M-96 -44 C-70 -54 70 -54 96 -44 C110 -20 110 20 96 44 C70 54 -70 54 -96 44 C-110 20 -110 -20 -96 -44Z"
				/>
				<path
					fill="none"
					stroke="url(#gold)"
					strokeWidth="3.5"
					strokeLinecap="round"
					d="M-104 -28 C-126 -34 -136 -12 -124 -2 C-116 4 -108 -4 -114 -10 M-104 28 C-126 34 -136 12 -124 2 M104 -28 C126 -34 136 -12 124 -2 C116 4 108 -4 114 -10 M104 28 C126 34 136 12 124 2"
				/>
				<path
					fill="none"
					stroke="oklch(0.75 0.12 85)"
					strokeWidth="1"
					opacity=".6"
					d="M-86 -36 C-62 -44 62 -44 86 -36 C98 -16 98 16 86 36 C62 44 -62 44 -86 36 C-98 16 -98 -16 -86 -36Z"
				/>
			</g>

			{/* curtains and valance */}
			<path fill="url(#folds)" d="M0 0 H176 C160 110 110 210 84 290 C70 350 76 430 100 500 H0Z" />
			<path fill="url(#fall)" d="M0 0 H176 C160 110 110 210 84 290 C70 350 76 430 100 500 H0Z" />
			<g transform="translate(800 0) scale(-1 1)">
				<path fill="url(#folds)" d="M0 0 H176 C160 110 110 210 84 290 C70 350 76 430 100 500 H0Z" />
				<path fill="url(#fall)" d="M0 0 H176 C160 110 110 210 84 290 C70 350 76 430 100 500 H0Z" />
			</g>
			<path
				fill="url(#folds)"
				transform="translate(0 -8)"
				d="M0 0 H800 V20 Q760 52 720 20 Q680 52 640 20 Q600 52 560 20 Q520 52 480 20 Q440 52 400 20 Q360 52 320 20 Q280 52 240 20 Q200 52 160 20 Q120 52 80 20 Q40 52 0 20Z"
			/>
			<path
				fill="none"
				stroke="url(#gold)"
				strokeWidth="3"
				transform="translate(0 -8)"
				d="M0 22 Q40 54 80 22 Q120 54 160 22 Q200 54 240 22 Q280 54 320 22 Q360 54 400 22 Q440 54 480 22 Q520 54 560 22 Q600 54 640 22 Q680 54 720 22 Q760 54 800 22"
			/>
			<path
				fill="none"
				stroke="oklch(0.75 0.12 85)"
				strokeWidth="5"
				strokeDasharray="1.5 4"
				opacity=".8"
				transform="translate(0 -8)"
				d="M0 28 Q40 60 80 28 Q120 60 160 28 Q200 60 240 28 Q280 60 320 28 Q360 60 400 28 Q440 60 480 28 Q520 60 560 28 Q600 60 640 28 Q680 60 720 28 Q760 60 800 28"
			/>

			<path fill="url(#beam)" filter="url(#soft)" d="M600 -20 L720 -20 L360 520 L150 520Z" />
		</svg>
	)
}
