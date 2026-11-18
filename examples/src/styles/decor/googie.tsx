// [Agent] Ported from the hand-made specimen: a faint Formica boomerang print on the wall, a pale boomerang slab behind
// the sign, a coral parabola arcing behind the card, Sputnik starbursts (alternating long and short rays, each ending
// in a dot), four-point sparkles and an atom.
const rays = [0, 45, 90, 135, 180, 225, 270, 315]

function Sputnik({ transform }: { transform: string }) {
	return (
		<g transform={transform} stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round" fill="var(--ink)">
			{rays.map((angle) => (
				<g key={angle} transform={`rotate(${angle})`}>
					<line y2="-46" />
					<circle cy="-46" r="5" stroke="none" />
					<g transform="rotate(22.5)">
						<line y2="-28" />
						<circle cy="-28" r="3.5" stroke="none" />
					</g>
				</g>
			))}
			<circle r="9" fill="var(--mustard)" />
		</g>
	)
}

export default function Googie() {
	return (
		<svg aria-hidden="true" className="absolute inset-0 size-full" viewBox="0 0 800 500">
			<defs>
				<path id="boom" d="M0 0 C10 -12 26 -14 36 -6 C26 -8 16 -4 8 4 C6 14 10 24 18 30 C6 26 -2 12 0 0Z" />
				<pattern id="formica" width="120" height="96" patternUnits="userSpaceOnUse">
					<use href="#boom" x="14" y="24" fill="var(--turquoise)" opacity=".28" />
					<use href="#boom" transform="translate(84 62) rotate(140)" fill="var(--coral)" opacity=".24" />
					<use
						href="#boom"
						transform="translate(70 18) rotate(60) scale(.7)"
						fill="var(--mustard)"
						opacity=".4"
					/>
					<g fill="var(--ink)" opacity=".18">
						<circle cx="50" cy="50" r="1.6" />
						<circle cx="104" cy="30" r="1.6" />
						<circle cx="24" cy="80" r="1.6" />
					</g>
				</pattern>
				<path id="sparkle" d="M0 -16 C2 -4 4 -2 16 0 C4 2 2 4 0 16 C-2 4 -4 2 -16 0 C-4 -2 -2 -4 0 -16Z" />
			</defs>
			<rect width="800" height="500" fill="url(#formica)" opacity=".6" />
			<path
				fill="var(--atomic)"
				d="M24 230 C80 70 300 0 520 40 C380 60 210 120 150 270 C130 330 140 400 170 470 C70 420 0 330 24 230Z"
			/>
			<path
				fill="none"
				stroke="var(--coral)"
				strokeWidth="14"
				strokeLinecap="round"
				d="M470 500 C520 300 640 170 790 150"
			/>
			<Sputnik transform="translate(668 110)" />
			<Sputnik transform="translate(460 446) scale(.5)" />
			<g fill="var(--mustard)" stroke="var(--ink)" strokeWidth="2">
				<use href="#sparkle" transform="translate(560 60)" />
				<use href="#sparkle" transform="translate(754 252) scale(.8)" />
				<use href="#sparkle" transform="translate(40 470) scale(.7)" />
			</g>
			<g transform="translate(486 214)" fill="none" stroke="var(--ink)" strokeWidth="2">
				<ellipse rx="34" ry="11" />
				<ellipse rx="34" ry="11" transform="rotate(60)" />
				<ellipse rx="34" ry="11" transform="rotate(-60)" />
				<circle r="5" fill="var(--coral)" stroke="none" />
			</g>
		</svg>
	)
}
