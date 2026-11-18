// [Agent] The device as a hairline drawing on the dot grid, with numbered callouts like a manual's exploded view; the
// number card sits in its display window. Dial ticks (36, every sixth long) and the 6 × 3 speaker grille are generated.
const ticks = Array.from({ length: 36 }, (_, i) => {
	const angle = (i * Math.PI) / 18
	const [inner, outer] = i % 6 ? [59, 64] : [57, 70]
	return [
		Math.sin(angle) * inner,
		-Math.cos(angle) * inner,
		Math.sin(angle) * outer,
		-Math.cos(angle) * outer,
	]
})
const grille = Array.from({ length: 18 }, (_, i) => [250 + (i % 6) * 12, 58 + Math.floor(i / 6) * 12])
const tags = [
	[364, 104.5, "01"],
	[364, 262.5, "02"],
	[301.5, 396, "03"],
	[110.5, 396, "04"],
] as const

export default function TechnicalManual() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg
				className="absolute top-[62px] left-[392px] text-[var(--black)]"
				width="390"
				height="420"
				viewBox="0 0 390 420"
			>
				<rect x="32.5" y="26.5" width="300" height="330" rx="14" fill="var(--white)" stroke="currentColor" />
				<g transform="translate(110 262)">
					<circle r="54" fill="none" stroke="currentColor" />
					<circle r="40" fill="var(--housing)" stroke="currentColor" />
					<line y2="-34" stroke="var(--orange)" strokeWidth="3" strokeLinecap="round" />
					<circle r="4" fill="currentColor" />
					<g stroke="currentColor">
						{ticks.map(([x1, y1, x2, y2]) => (
							<line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} />
						))}
					</g>
				</g>
				<g fill="var(--housing)" stroke="currentColor">
					<rect x="210.5" y="210.5" width="30" height="30" rx="4" />
					<rect x="250.5" y="210.5" width="30" height="30" rx="4" />
					<rect x="290.5" y="210.5" width="22" height="30" rx="4" />
					<rect x="210.5" y="250.5" width="30" height="30" rx="4" />
					<rect x="250.5" y="250.5" width="30" height="30" rx="4" />
					<circle cx="225.5" cy="310.5" r="11" />
					<circle cx="265.5" cy="310.5" r="11" />
				</g>
				<rect x="290.5" y="250.5" width="22" height="30" rx="4" fill="var(--orange)" stroke="currentColor" />
				<g fill="currentColor">
					{grille.map(([cx, cy]) => (
						<circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" />
					))}
				</g>
				<path
					d="M224 104.5 H352 M164 262.5 H352 M301.5 281 V384 M110.5 316 V384"
					fill="none"
					stroke="oklch(0.18 0 0 / 0.55)"
				/>
				<g className="font-mono text-[10px]" textAnchor="middle">
					{tags.map(([x, y, label]) => (
						<g key={label}>
							<circle cx={x} cy={y} r="9" fill="var(--housing)" stroke="currentColor" />
							<text x={x} y={y + 3.5} fill="currentColor">
								{label}
							</text>
						</g>
					))}
				</g>
			</svg>
			<span className="absolute bottom-[30px] left-[424px] font-mono text-[10px] text-[var(--graphite)]">
				Fig. 1
			</span>
		</div>
	)
}
