const cross =
	"linear-gradient(to top right, transparent calc(50% - 0.7px), var(--shade) 50%, transparent calc(50% + 0.7px)), linear-gradient(to bottom right, transparent calc(50% - 0.7px), var(--shade) 50%, transparent calc(50% + 0.7px)), var(--block)"
const picture = (angle: number) => `linear-gradient(${angle}deg, oklch(0.94 0.02 250), oklch(0.85 0.045 262))`
// [Agent] Image heights per column, as the masonry stacks them; 0 is the gap the number card drops into.
const feed = [
	[
		{ height: 150, background: picture(150), title: "80%" },
		{ height: 96, background: cross, title: "64%" },
	],
	[{ height: 120, background: cross, title: "70%" }, null],
	[
		{ height: 90, background: picture(30), title: "86%" },
		{ height: 190, background: picture(200), title: "76%" },
	],
	[
		{ height: 110, background: cross, title: "60%" },
		{ height: 160, background: picture(110), title: "72%" },
	],
]

// [Agent] Equal-width columns, uneven image heights, and the feed running off the bottom edge the way an endless list
// does; search, filter chips and the avatar make it an app to browse, not a page to read.
export default function LayoutCardFeed() {
	return (
		<div aria-hidden="true" className="absolute inset-0 bg-[var(--panel)]">
			<div className="absolute inset-x-0 top-0 h-14 border-b border-[var(--hairline)] bg-[var(--sheet)]" />
			<div className="absolute top-3 left-[150px] flex h-8 w-[260px] items-center gap-2.5 rounded-full border border-[var(--hairline)] bg-[var(--panel)] pl-3.5">
				<i className="size-2.5 rounded-full border-2 border-[var(--shade)]" />
				<i className="h-[7px] w-[90px] rounded bg-[var(--shade)]" />
			</div>
			<i className="absolute top-3.5 right-10 size-7 rounded-full bg-[var(--shade)]" />
			<div className="absolute top-[144px] right-10 flex gap-2">
				{[0, 1, 2, 3].map((index) => (
					<i
						key={index}
						className={`grid h-7 w-[62px] place-items-center rounded-full border ${index === 0 ? "border-[var(--graphite)] bg-[var(--graphite)]" : "border-[var(--hairline)] bg-[var(--sheet)]"}`}
					>
						<i
							className={`h-1.5 w-[30px] rounded-[3px] ${index === 0 ? "bg-white/50" : "bg-[var(--shade)]"}`}
						/>
					</i>
				))}
			</div>
			<div className="absolute top-[190px] inset-x-10 grid grid-cols-4 items-start gap-4">
				{feed.map((column, index) => (
					<div key={index} className="grid gap-4">
						{column.map((post) =>
							post ? (
								<div
									key={post.height}
									className="overflow-hidden rounded-lg border border-[var(--hairline)] bg-[var(--sheet)]"
								>
									<div style={{ height: post.height, background: post.background }} />
									<div className="grid gap-[9px] px-3 pt-[11px] pb-3">
										<i className="block h-[7px] rounded bg-[var(--shade)]" style={{ width: post.title }} />
										<span className="flex items-center gap-[7px]">
											<i className="size-4 rounded-full bg-[var(--shade)]" />
											<i className="h-1.5 w-14 rounded-[3px] bg-[var(--block)]" />
											<i className="ml-auto h-3 w-[13px] rounded-[3px] border-[1.5px] border-[var(--shade)]" />
										</span>
									</div>
								</div>
							) : (
								<i key="card" />
							),
						)}
					</div>
				))}
			</div>
		</div>
	)
}
