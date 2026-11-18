// [Agent] Ported from the hand-made specimen: a playbill. Foxed toned stock, a ruled border with rosette corners, a red
// ribbon banner for the kicker, two oval cartouches (the left holds the number card, the right the logo over an
// engraving made of fine concentric rules, no gradients), and double-rule flourishes with lozenges.
const flourishes = [
	[44, 116, 3, 1],
	[620, 116, 3, 1],
	[44, 380, 1, 3],
	[620, 380, 1, 3],
]

function Oval({ x, engraved }: { x: number; engraved?: boolean }) {
	return (
		<g transform={`translate(${x} 248)`}>
			<ellipse rx="64" ry="96" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3" />
			<ellipse rx="58" ry="90" fill="none" stroke="var(--ink)" strokeWidth=".8" />
			<ellipse
				rx="70"
				ry="102"
				fill="none"
				stroke="var(--ink)"
				strokeWidth="2"
				strokeDasharray="0 6"
				strokeLinecap="round"
			/>
			{engraved && (
				<g fill="none" stroke="var(--ink)" strokeWidth=".7">
					{[0, 1, 2, 3, 4, 5].map((step) => (
						<ellipse key={step} rx={54 - step * 3} ry={86 - step * 4} />
					))}
				</g>
			)}
		</g>
	)
}

export default function Victorian() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute inset-0 size-full" viewBox="0 0 800 500">
				<defs>
					<g id="rosette">
						<rect
							x="-11"
							y="-11"
							width="22"
							height="22"
							fill="var(--paper)"
							stroke="var(--ink)"
							strokeWidth="1.5"
						/>
						<path
							fill="var(--red)"
							d="M0 -8 C3 -3 3 -3 8 0 C3 3 3 3 0 8 C-3 3 -3 3 -8 0 C-3 -3 -3 -3 0 -8Z"
						/>
						<circle r="2" fill="var(--paper)" />
					</g>
				</defs>
				<rect x="14" y="14" width="772" height="472" fill="none" stroke="var(--ink)" strokeWidth="4" />
				<rect x="22" y="22" width="756" height="456" fill="none" stroke="var(--ink)" strokeWidth="1" />
				<use href="#rosette" x="22" y="22" />
				<use href="#rosette" x="778" y="22" />
				<use href="#rosette" x="22" y="478" />
				<use href="#rosette" x="778" y="478" />
				<g transform="translate(400 53)">
					<path
						fill="oklch(0.32 0.12 25)"
						d="M-176 -8 L-136 -8 L-136 26 L-176 26 L-160 9Z M176 -8 L136 -8 L136 26 L176 26 L160 9Z"
					/>
					<path
						fill="var(--red)"
						stroke="var(--ink)"
						strokeWidth="1.5"
						d="M-150 -17 Q0 -27 150 -17 L150 17 Q0 7 -150 17Z"
					/>
				</g>
				<Oval x={111} />
				<Oval x={689} engraved />
				<g fill="var(--ink)">
					{flourishes.map(([x, y, top, bottom]) => (
						<g key={`${x}-${y}`}>
							<rect x={x} y={y - top / 2} width="136" height={top} />
							<rect x={x} y={y + 4 - bottom / 2} width="136" height={bottom} />
							<path d={`M${x + 68} ${y - 6} l8 8 l-8 8 l-8 -8Z`} fill="var(--red)" />
						</g>
					))}
					<rect x="252" y="198" width="92" height="1" />
					<rect x="252" y="201" width="92" height="1" />
					<rect x="456" y="198" width="92" height="1" />
					<rect x="456" y="201" width="92" height="1" />
					<rect x="300" y="450" width="86" height="3" />
					<rect x="414" y="450" width="86" height="3" />
					<rect x="300" y="455" width="86" height="1" />
					<rect x="414" y="455" width="86" height="1" />
					<path d="M400 444 l9 9 l-9 9 l-9 -9Z" fill="var(--red)" />
				</g>
			</svg>
			<svg className="pointer-events-none absolute inset-0 z-20 size-full mix-blend-multiply opacity-45">
				<filter id="foxing">
					<feTurbulence type="fractalNoise" baseFrequency=".012" numOctaves="5" seed="8" />
					<feColorMatrix values="0 0 0 0 .6  0 0 0 0 .45  0 0 0 0 .28  0 0 0 .7 -.25" />
				</filter>
				<rect width="100%" height="100%" filter="url(#foxing)" />
			</svg>
		</div>
	)
}
