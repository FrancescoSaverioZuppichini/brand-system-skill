// [Agent] A faint 40 px grid that fades out from the top, one iris glow behind the headline, and the edge of a product
// window under the fold: the three moves every dev-tool landing makes, kept at low alpha so the type stays first.
export default function DevtoolDark() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute inset-0 [background:linear-gradient(var(--seam)_1px,transparent_1px)_0_0/40px_40px,linear-gradient(90deg,var(--seam)_1px,transparent_1px)_0_0/40px_40px] opacity-40 [mask-image:radial-gradient(ellipse_at_50%_0%,#000,transparent_70%)]" />
			<div className="absolute top-10 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-[var(--iris)] opacity-20 blur-[90px]" />
			<div className="absolute right-[90px] -bottom-10 left-[90px] h-[110px] rounded-xl border bg-[var(--surface)]">
				<div className="absolute top-5 left-4 flex w-28 flex-col gap-3">
					{[100, 70, 85, 60].map((width) => (
						<span
							key={width}
							className="h-1.5 rounded-full bg-[var(--seam)]"
							style={{ width: `${width}%` }}
						/>
					))}
				</div>
				<div className="absolute top-4 right-4 h-[90px] w-[220px] rounded-lg border bg-[var(--void)]">
					<svg viewBox="0 0 220 90" className="size-full">
						<polyline
							points="14,78 50,72 80,66 110,60 130,48 160,44 190,30 206,20"
							fill="none"
							stroke="var(--iris)"
							strokeWidth="2"
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}
