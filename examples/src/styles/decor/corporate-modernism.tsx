// [Agent] A standards-manual page: the left third is the corporate colour field carrying the mark, the right a ruled
// column. The mark is a disc cut by white bars (the IBM 8-bar trick): a striped mask over a plain circle.
export default function CorporateModernism() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute inset-y-0 left-0 w-[280px] bg-[var(--blue)]">
				<div className="absolute top-[162px] left-[52px] size-[176px] rounded-full bg-[var(--white)] [mask-image:repeating-linear-gradient(#000_0_15px,transparent_15px_22px)]" />
				<span className="absolute bottom-10 left-[50px] font-mono text-[11px] tracking-[0.08em] text-[var(--white)] opacity-80">
					Fig. 1
				</span>
			</div>
			<span className="absolute top-[62px] right-10 left-[320px] h-0.5 bg-[var(--ink)]" />
		</div>
	)
}
