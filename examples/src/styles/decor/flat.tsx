// [Agent] Ported from the hand-made specimen: the period's one trick, the long shadow (the icon's outline dragged 45°
// to the circle's edge and clipped by it), plus a few solid dots and a tilted square. No gradients anywhere.
export default function Flat() {
	return (
		<svg
			aria-hidden="true"
			className="absolute top-24 left-[470px]"
			width="290"
			height="290"
			viewBox="0 0 290 290"
		>
			<clipPath id="disc">
				<circle cx="145" cy="125" r="115" />
			</clipPath>
			<circle cx="145" cy="125" r="115" fill="var(--turquoise)" />
			<polygon clipPath="url(#disc)" points="185,85 385,285 305,365 105,165" fill="var(--turquoise-shade)" />
			<rect x="105" y="85" width="80" height="80" rx="3" fill="var(--white)" />
			<rect x="137" y="85" width="16" height="80" fill="var(--coral)" />
			<rect x="105" y="85" width="80" height="18" fill="oklch(0.93 0.01 250)" />
			<rect x="137" y="85" width="16" height="18" fill="oklch(0.52 0.16 30)" />
			<circle cx="262" cy="30" r="18" fill="var(--sun)" />
			<rect
				x="248"
				y="198"
				width="34"
				height="34"
				rx="3"
				fill="var(--coral)"
				transform="rotate(12 265 215)"
			/>
			<circle cx="16" cy="40" r="9" fill="var(--flat-blue)" />
		</svg>
	)
}
