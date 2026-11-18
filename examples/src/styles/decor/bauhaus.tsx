// [Agent] The right side is a 2 × 3 kit of tiles; every shape is a circle, half, quarter, triangle or square cut to its
// tile, the construction rule that keeps it Bauhaus and not clip art. The big red disc sits behind the headline.
export default function Bauhaus() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute top-9 left-[250px] size-[300px] rounded-full bg-[var(--red)]" />
			<div className="absolute top-0 right-0 grid h-full w-[330px] grid-cols-2 grid-rows-3 border-l-[6px] border-[var(--black)] *:relative *:overflow-hidden">
				<div className="bg-[var(--yellow)]">
					<div className="absolute bottom-0 left-0 size-[200%] -translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--black)]" />
				</div>
				<div>
					<div className="absolute inset-[18px] rounded-full bg-[var(--blue)]" />
				</div>
				<div className="bg-[var(--black)]">
					<div className="absolute inset-x-0 -top-1/2 bottom-1/2 rounded-full bg-[var(--red)]" />
				</div>
				<div className="bg-[var(--red)]">
					<div className="absolute inset-0 bg-[var(--paper)] [clip-path:polygon(0_100%,100%_100%,50%_0)]" />
				</div>
				<div className="bg-[var(--blue)]">
					<div className="absolute top-0 left-0 size-[200%] -translate-1/2 rounded-full bg-[var(--yellow)]" />
				</div>
				<div />
			</div>
		</div>
	)
}
