// [Agent] The type specimen in the corner: the textura glyphs over the faces named in Garamond small caps.
export default function TypeBlackletter() {
	return (
		<div aria-hidden="true" className="absolute top-[44px] right-14 text-right">
			<span className="block font-heading text-[30px] leading-none text-[var(--ink)]">Aa 0123456789</span>
			<span className="mt-2 block text-[14px] tracking-[0.12em] text-[var(--lead)] [font-variant-caps:all-small-caps]">
				UnifrakturMaguntia · EB Garamond
			</span>
		</div>
	)
}
