// [Agent] Ported from the hand-made specimen: faint column guides, and a band skewed so its bottom edge climbs to the
// right; inside it, six radial stops blurred together into one smooth multi-point field (Stripe's 2020 hero).
export default function MeshGradient() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute inset-0 [background:repeating-linear-gradient(90deg,oklch(0.25_0.04_265/.07)_0_1px,transparent_1px_190px)_40px_0]" />
			<div className="absolute top-[-260px] left-0 h-[590px] w-full origin-bottom-left -skew-y-12 overflow-hidden">
				<div className="absolute -inset-20 blur-[28px] [background:radial-gradient(40%_55%_at_12%_78%,var(--yellow),transparent_70%),radial-gradient(45%_60%_at_30%_92%,var(--orange),transparent_70%),radial-gradient(45%_70%_at_52%_70%,var(--magenta),transparent_72%),radial-gradient(40%_60%_at_78%_88%,var(--purple),transparent_70%),radial-gradient(50%_70%_at_92%_55%,var(--cyan),transparent_72%),radial-gradient(50%_60%_at_40%_30%,var(--purple),transparent_70%),var(--magenta)]" />
			</div>
		</div>
	)
}
