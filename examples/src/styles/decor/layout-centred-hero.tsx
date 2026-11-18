const bar = "block h-[7px] rounded bg-[var(--block)]"

// [Agent] Link placeholders on the centre axis, then the framed app window under the fold with a soft accent glow
// behind it; the frame's bottom edge crops the window on purpose. The number card sits in the window's first tile.
export default function LayoutCentredHero() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute top-[27px] left-1/2 flex -translate-x-1/2 gap-5">
				{[0, 1, 2, 3].map((index) => (
					<i key={index} className="h-[7px] w-[42px] rounded bg-[var(--shade)]" />
				))}
			</div>
			<div className="absolute top-[340px] left-1/2 h-[260px] w-[660px] -translate-x-1/2 rounded-full [background:radial-gradient(closest-side,oklch(0.56_0.2_260/0.34),transparent)] blur-[10px]" />
			<figure className="absolute inset-x-20 top-[368px] m-0 grid h-[220px] grid-cols-[120px_1fr] grid-rows-[28px_1fr] overflow-hidden rounded-xl border border-[var(--hairline)] bg-[var(--panel)] shadow-[0_0_0_6px_oklch(0.97_0.005_255),0_30px_60px_-20px_oklch(0.3_0.05_260/0.25)]">
				<div className="col-span-2 flex items-center gap-1.5 border-b border-[var(--hairline)] bg-[var(--sheet)] px-3">
					<i className="size-2 rounded-full bg-[var(--shade)]" />
					<i className="size-2 rounded-full bg-[var(--shade)]" />
					<i className="size-2 rounded-full bg-[var(--shade)]" />
				</div>
				<div className="grid content-start gap-3 border-r border-[var(--hairline)] px-3.5 py-4">
					<i className={`${bar} w-[70%] bg-[var(--cobalt)]/50`} />
					<i className={`${bar} w-[84%]`} />
					<i className={`${bar} w-[62%]`} />
					<i className={`${bar} w-[76%]`} />
				</div>
				<div className="grid grid-cols-[1.4fr_1fr_1fr] content-start gap-3 bg-[var(--sheet)] p-4">
					<i />
					{["50%", "44%"].map((width) => (
						<div
							key={width}
							className="grid h-[82px] content-start gap-2.5 rounded-lg border border-[var(--hairline)] px-3.5 py-3"
						>
							<i className={bar} style={{ width }} />
							<i className="block h-3.5 w-[66%] rounded bg-[var(--shade)]" />
							<i className={`${bar} w-[80%]`} />
						</div>
					))}
				</div>
			</figure>
		</div>
	)
}
