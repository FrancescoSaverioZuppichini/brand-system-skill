// [Agent] Ported from the hand-drawn specimen: stars, a magenta glow, the striped sun (its stripes are gaps in a mask that
// widen toward the horizon), wireframe mountains and the neon floor grid tilted into perspective.
export default function Synthwave() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 [background:linear-gradient(var(--night)_0%,oklch(0.24_0.12_298)_30%,var(--violet)_50%,oklch(0.55_0.25_330)_60%,var(--night)_60%)]"
		>
			<div className="absolute inset-x-0 top-0 h-[240px] opacity-70 [background:radial-gradient(1px_1px_at_20%_30%,#fff,transparent),radial-gradient(1px_1px_at_70%_20%,#fff,transparent),radial-gradient(1.5px_1.5px_at_45%_70%,#fff,transparent),radial-gradient(1px_1px_at_90%_60%,#fff,transparent)_0_0/130px_90px]" />
			<div className="absolute top-[120px] left-[250px] h-[220px] w-[300px] rounded-full bg-[var(--magenta)] opacity-70 blur-[60px]" />
			<div className="absolute top-[140px] left-[280px] size-[240px] rounded-full [background:linear-gradient(var(--yellow),var(--sun)_35%,var(--magenta)_70%)] [mask:linear-gradient(#000_36%,transparent_36%_37.5%,#000_37.5%_43%,transparent_43%_45%,#000_45%_50%,transparent_50%_53%,#000_53%_57%,transparent_57%_61%,#000_61%_64%,transparent_64%_69%,#000_69%)]" />
			<svg
				className="absolute top-[214px] left-0 h-[86px] w-[800px]"
				viewBox="0 0 800 86"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<g fill="var(--night)" stroke="var(--magenta)" strokeWidth="1.5" strokeLinejoin="round">
					<path d="M0 86 L0 40 L40 18 L90 52 L140 6 L190 44 L230 30 L290 86 Z" />
					<path d="M510 86 L560 34 L600 50 L660 4 L710 46 L750 22 L800 44 L800 86 Z" />
				</g>
				<g fill="none" stroke="var(--magenta)" strokeWidth="1" opacity=".6">
					<path d="M140 6 L120 86 M140 6 L170 86 M40 18 L60 86 M660 4 L640 86 M660 4 L690 86 M750 22 L770 86" />
				</g>
			</svg>
			<div className="absolute -inset-x-[500px] top-[300px] h-[560px] origin-top [transform:perspective(260px)_rotateX(72deg)] [background:linear-gradient(90deg,var(--magenta)_2px,transparent_2px)_0_0/60px_60px,linear-gradient(var(--magenta)_2px,transparent_2px)_0_0/60px_60px,var(--night)] [filter:drop-shadow(0_0_4px_var(--magenta))]" />
			<div className="absolute inset-x-0 top-[299px] h-0.5 bg-[var(--cyan)] shadow-[0_0_12px_2px_var(--cyan)]" />
		</div>
	)
}
