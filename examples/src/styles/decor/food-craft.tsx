import { stat } from "@/demo/content"

const scallops = `M0 30 ${"q14 22 28 0 ".repeat(29)}`
// [Agent] The badge's serrated rim: 56 points alternating between radius 112 and 100.
const serration = Array.from({ length: 56 }, (_, i) => {
	const angle = (i * Math.PI) / 28
	const radius = i % 2 ? 100 : 112
	return `${(radius * Math.cos(angle)).toFixed(1)},${(radius * Math.sin(angle)).toFixed(1)}`
}).join(" ")

// [Agent] Ported from the hand-made specimen: a striped market awning with a scalloped edge, a bottle-green squeeze
// bottle whose cream label carries the logo, and a stamped seal (serrated rim, tomato ring with the card's label and
// caption set on a curve, dashed stitch) under the number. Noise displaces the seal's edges so it reads printed.
export default function FoodCraft() {
	return (
		<svg aria-hidden="true" viewBox="0 0 800 500" className="absolute inset-0 size-full">
			<defs>
				<pattern id="awning" width="56" height="44" patternUnits="userSpaceOnUse">
					<rect width="28" height="44" fill="var(--tomato)" />
					<rect x="28" width="28" height="44" fill="var(--cream)" />
				</pattern>
				<filter id="paper">
					<feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
					<feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.32  0 0 0 0 0.15  0 0 0 0.22 0" />
				</filter>
				<filter id="stamp">
					<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="noise" />
					<feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" />
				</filter>
				<path id="arc-top" d="M -70 0 A 70 70 0 0 1 70 0" />
				<path id="arc-bottom" d="M -81 0 A 81 81 0 0 0 81 0" />
			</defs>
			<rect width="800" height="30" fill="url(#awning)" />
			<path d={`${scallops}Z`} fill="url(#awning)" />
			<path d={scallops} fill="none" stroke="var(--bottle)" strokeWidth="2" />
			<g transform="translate(690 0)">
				<path d="M-6 74 L-3 54 h6 L6 74 Z" fill="var(--mustard)" stroke="var(--bottle)" strokeWidth="2" />
				<rect
					x="-22"
					y="74"
					width="44"
					height="40"
					rx="6"
					fill="var(--mustard)"
					stroke="var(--bottle)"
					strokeWidth="2"
				/>
				<path
					d="M-26 114 h52 C 50 124 62 140 62 168 V 470 q0 14 -14 14 H -48 q-14 0 -14 -14 V 168 C -62 140 -50 124 -26 114 Z"
					fill="var(--bottle)"
				/>
				<rect x="-46" y="170" width="12" height="290" rx="6" fill="var(--glass)" />
				<rect x="-62" y="236" width="124" height="170" fill="var(--cream)" />
				<rect x="-62" y="236" width="124" height="16" fill="var(--tomato)" />
				<rect x="-62" y="390" width="124" height="16" fill="var(--tomato)" />
				<g
					fill="none"
					stroke="var(--bottle)"
					strokeWidth="2"
					strokeLinecap="round"
					transform="translate(0 14)"
				>
					<path d="M-2 372 C 0 330 8 300 22 276" />
					<path d="M2 344 C -18 340 -28 326 -28 310 C -12 314 0 326 2 344 Z" fill="var(--mustard)" />
					<path d="M8 316 C 24 310 32 296 30 282 C 16 288 8 300 8 316 Z" fill="var(--mustard)" />
				</g>
				<circle cx="-30" cy="296" r="3" fill="var(--tomato)" />
				<circle cx="34" cy="364" r="3" fill="var(--tomato)" />
			</g>
			<g transform="translate(568 318) rotate(-12) scale(0.9)" filter="url(#stamp)">
				<polygon
					points={serration}
					fill="var(--mustard)"
					stroke="var(--bottle)"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
				<circle r="94" fill="var(--tomato)" stroke="var(--bottle)" strokeWidth="2" />
				<circle r="88" fill="none" stroke="var(--cream)" strokeWidth="1.5" strokeDasharray="3 4" />
				<circle r="58" fill="var(--cream)" stroke="var(--bottle)" strokeWidth="2" />
				<g className="font-sans font-bold uppercase" fill="var(--cream)">
					<text fontSize="14" letterSpacing="3">
						<textPath href="#arc-top" startOffset="50%" textAnchor="middle">
							{stat.label}
						</textPath>
					</text>
					<text fontSize="11.5" letterSpacing="1.6">
						<textPath href="#arc-bottom" startOffset="50%" textAnchor="middle">
							{stat.caption}
						</textPath>
					</text>
				</g>
				<path d="M-76 0 l3 -7 l3 7 l-3 7 Z M70 0 l3 -7 l3 7 l-3 7 Z" fill="var(--mustard)" />
				<path
					d="M-30 24 q30 8 60 0"
					fill="none"
					stroke="var(--tomato)"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</g>
			<rect width="800" height="500" filter="url(#paper)" className="mix-blend-multiply" />
		</svg>
	)
}
