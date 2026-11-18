// [Agent] Scanlines over the whole screen and a blinking-block prompt at the bottom left.
export default function Terminal() {
	return (
		<div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
			<div className="absolute inset-0 [background:repeating-linear-gradient(0deg,oklch(0_0_0/0.18)_0_1px,transparent_1px_3px)]" />
			<span className="absolute bottom-6 left-10 font-mono text-[15px] text-[var(--dim)]">
				$ <span className="inline-block h-[18px] w-[10px] translate-y-[3px] bg-[var(--phosphor)]" />
			</span>
		</div>
	)
}
