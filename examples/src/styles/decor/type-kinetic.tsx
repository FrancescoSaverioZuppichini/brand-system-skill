const glyphs = [..."Aa 0123456789"]

// [Agent] The type specimen in the corner: each glyph takes its own point on the width and weight axes, so one face
// runs from compressed-light to expanded-black along the line, the still frame of an axis animation.
export default function TypeKinetic() {
	return (
		<div aria-hidden="true" className="absolute top-[42px] right-14 text-right">
			<span className="block font-heading text-[26px] leading-none text-[var(--ink)]">
				{glyphs.map((glyph, index) => {
					const t = index / (glyphs.length - 1)
					return (
						<span key={glyph + index} style={{ fontStretch: `${62 + t * 88}%`, fontWeight: 500 + t * 400 }}>
							{glyph === " " ? " " : glyph}
						</span>
					)
				})}
			</span>
			<span className="mt-2 block font-heading text-[11px] font-medium text-[var(--grey)]">
				Anybody · wdth 62–150 · wght 500–900
			</span>
		</div>
	)
}
