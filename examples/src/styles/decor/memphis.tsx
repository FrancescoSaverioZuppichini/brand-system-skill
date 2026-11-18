// [Agent] Ported from the hand-made specimen: Memphis confetti around the copy. A dotted pink disc, a black squiggle, a
// yellow triangle, a terrazzo slab (a pink tile of scattered chips, tiled), a mint half-disc, a cobalt zigzag, dashes
// and small chips.
export default function Memphis() {
	return (
		<svg aria-hidden="true" className="absolute inset-0 size-full" viewBox="0 0 800 500">
			<defs>
				<pattern id="terrazzo" width="80" height="80" patternUnits="userSpaceOnUse">
					<rect width="80" height="80" fill="var(--pink)" />
					<polygon points="8,10 18,6 16,16" fill="var(--black)" />
					<polygon points="44,8 54,14 46,20" fill="var(--cobalt)" />
					<polygon points="64,40 74,36 72,48" fill="var(--yellow)" />
					<polygon points="20,50 30,46 28,58 18,58" fill="var(--mint)" />
					<polygon points="50,62 58,60 56,70" fill="var(--black)" />
					<polygon points="6,70 12,66 14,74" fill="var(--cobalt)" />
					<circle cx="36" cy="34" r="2.5" fill="var(--black)" />
					<circle cx="70" cy="18" r="2" fill="var(--white)" />
				</pattern>
				<pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
					<circle cx="7" cy="7" r="2.6" fill="var(--black)" />
				</pattern>
			</defs>
			<circle cx="690" cy="120" r="92" fill="var(--pink)" stroke="var(--black)" strokeWidth="2.5" />
			<rect x="616" y="40" width="140" height="70" fill="url(#dots)" />
			<path
				d="M520 60 q15 -30 30 0 t30 0 t30 0 t30 0 t30 0"
				fill="none"
				stroke="var(--black)"
				strokeWidth="7"
				strokeLinecap="round"
			/>
			<polygon
				points="560,210 610,150 640,224"
				fill="var(--yellow)"
				stroke="var(--black)"
				strokeWidth="2.5"
			/>
			<rect
				x="-20"
				y="410"
				width="250"
				height="110"
				fill="url(#terrazzo)"
				stroke="var(--black)"
				strokeWidth="2.5"
				transform="rotate(-6 100 460)"
			/>
			<path d="M300 500 A92 92 0 0 1 484 500" fill="var(--mint)" stroke="var(--black)" strokeWidth="2.5" />
			<path
				d="M500 448 l20 -22 l20 22 l20 -22 l20 22 l20 -22 l20 22"
				fill="none"
				stroke="var(--cobalt)"
				strokeWidth="7"
			/>
			<g fill="var(--black)">
				<rect x="470" y="20" width="26" height="6" transform="rotate(30 483 23)" />
				<rect x="760" y="300" width="26" height="6" transform="rotate(-40 773 303)" />
				<rect x="470" y="300" width="18" height="6" transform="rotate(-20 479 303)" />
			</g>
			<g stroke="var(--black)" strokeWidth="2">
				<polygon points="748,436 768,426 764,450" fill="var(--cobalt)" />
				<polygon points="12,240 30,232 26,254" fill="var(--yellow)" />
				<circle cx="510" cy="248" r="8" fill="var(--mint)" />
				<circle cx="770" cy="236" r="6" fill="var(--yellow)" />
			</g>
			<path
				d="M36 140 q8 -12 16 0 t16 0 t16 0"
				fill="none"
				stroke="var(--cobalt)"
				strokeWidth="4"
				strokeLinecap="round"
				transform="rotate(-90 52 140) translate(-40 -30)"
			/>
		</svg>
	)
}
