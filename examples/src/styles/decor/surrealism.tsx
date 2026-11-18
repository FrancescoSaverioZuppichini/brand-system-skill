// [Agent] Ported from the hand-made specimen: a Magritte afternoon. Graded sky, blurred clouds, sand to the horizon, and
// one impossible object: a Penrose triangle (three cube edges, x then y then z, projected isometrically so they land
// back on their start; redrawing the first corner on top closes the loop). Its shadow is the same shape sheared flat
// along the ground and flattened to one colour, the way a low sun would cast it.
const faces = [
	["x", "-25,-259.8 -50,-216.5 0,-216.5 25,-259.8"],
	["y", "75,0 -50,-216.5 0,-216.5 125,0"],
	["z", "150,-43.3 25,-259.8 0,-216.5 125,0"],
	["x", "-25,-259.8 -150,-43.3 -100,-43.3 25,-259.8"],
	["y", "-125,0 -150,-43.3 -100,-43.3 -75,0"],
	["z", "50,-216.5 25,-259.8 -100,-43.3 -75,0"],
	["x", "-125,-86.6 -150,-43.3 100,-43.3 125,-86.6"],
	["y", "-125,0 -150,-43.3 100,-43.3 125,0"],
	["z", "150,-43.3 125,-86.6 100,-43.3 125,0"],
	["y", "75,0 50,-43.3 100,-43.3 125,0"],
]
const fills: Record<string, string> = {
	x: "oklch(0.47 0.14 30)",
	y: "var(--terracotta)",
	z: "oklch(0.80 0.10 45)",
}

export default function Surrealism() {
	return (
		<svg aria-hidden="true" className="absolute inset-0 size-full" viewBox="0 0 800 500">
			<defs>
				<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="var(--sky-high)" />
					<stop offset=".64" stopColor="oklch(0.90 0.035 220)" />
				</linearGradient>
				<linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="var(--sand-far)" />
					<stop offset=".35" stopColor="var(--sand)" />
					<stop offset="1" stopColor="oklch(0.91 0.035 78)" />
				</linearGradient>
				<filter id="puff" x="-30%" y="-60%" width="160%" height="220%">
					<feGaussianBlur stdDeviation="5" />
				</filter>
				<filter id="cast" x="-10%" y="-50%" width="120%" height="200%">
					<feFlood floodColor="oklch(0.30 0.03 260)" />
					<feComposite in2="SourceAlpha" operator="in" />
					<feGaussianBlur stdDeviation="1.6" />
				</filter>
				<g id="penrose">
					{faces.map(([axis, points]) => (
						<polygon key={points} fill={fills[axis]} points={points} />
					))}
				</g>
			</defs>
			<rect width="800" height="330" fill="url(#sky)" />
			<g fill="var(--cloud)" filter="url(#puff)" opacity=".95">
				<ellipse cx="560" cy="86" rx="70" ry="22" />
				<ellipse cx="596" cy="70" rx="40" ry="24" />
				<ellipse cx="530" cy="74" rx="30" ry="18" />
				<ellipse cx="730" cy="190" rx="54" ry="14" />
				<ellipse cx="756" cy="178" rx="28" ry="16" />
				<ellipse cx="420" cy="250" rx="60" ry="10" />
			</g>
			<rect y="330" width="800" height="170" fill="url(#sand)" />
			<rect y="329" width="800" height="1.5" fill="oklch(0.72 0.05 70)" />
			<g transform="translate(600 414) scale(.85) matrix(1 0 1.55 -.2 0 0)" opacity=".42" filter="url(#cast)">
				<use href="#penrose" />
			</g>
			<use href="#penrose" transform="translate(600 414) scale(.85)" />
		</svg>
	)
}
