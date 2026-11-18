const bar = "block h-[7px] rounded bg-[var(--block)]"

// [Agent] The 12 columns stay faintly visible so the 5 / 7 split reads as structure, not luck. The product window takes
// columns 6–12 and bleeds off the right edge the way Stripe-style heroes crop the app; everything in it is a grey
// placeholder, because the layout is the subject, not the product.
export default function LayoutSplitHero() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute inset-y-0 inset-x-10 grid grid-cols-12 gap-x-6">
				{Array.from({ length: 12 }, (_, index) => (
					<i key={index} className="bg-[var(--cobalt)]/[0.035]" />
				))}
			</div>
			<div className="absolute top-[28px] left-[142px] flex gap-5">
				{[0, 1, 2, 3].map((index) => (
					<i key={index} className="h-[7px] w-11 rounded bg-[var(--shade)]" />
				))}
			</div>
			<figure className="absolute top-[117px] -right-[60px] left-[350px] m-0 grid h-[330px] grid-cols-[96px_1fr] grid-rows-[30px_1fr] overflow-hidden rounded-[10px] border border-[var(--hairline)] bg-[var(--panel)] shadow-[0_24px_48px_-24px_oklch(0.3_0.03_260/0.25)]">
				<div className="col-span-2 flex items-center gap-1.5 border-b border-[var(--hairline)] bg-[var(--sheet)] px-3">
					<i className="size-2 rounded-full bg-[var(--shade)]" />
					<i className="size-2 rounded-full bg-[var(--shade)]" />
					<i className="size-2 rounded-full bg-[var(--shade)]" />
				</div>
				<div className="grid content-start gap-3 border-r border-[var(--hairline)] px-3 py-4">
					<i className={`${bar} w-[70%] bg-[var(--cobalt)]/50`} />
					<i className={`${bar} w-[80%]`} />
					<i className={`${bar} w-[60%]`} />
					<i className={`${bar} w-[74%]`} />
					<i className={`${bar} w-[52%]`} />
				</div>
				<div className="grid grid-rows-[auto_1fr_auto] gap-3.5 bg-[var(--sheet)] p-[18px]">
					<i className="block h-2.5 w-[40%] rounded bg-[var(--shade)]" />
					<svg
						className="size-full rounded-lg border border-[var(--hairline)]"
						viewBox="0 0 300 120"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<path
							d="M0 96 C40 90 60 70 100 74 S160 40 200 46 S260 18 300 22 V120 H0Z"
							fill="oklch(0.56 0.2 260 / 0.08)"
						/>
						<path
							d="M0 96 C40 90 60 70 100 74 S160 40 200 46 S260 18 300 22"
							fill="none"
							stroke="oklch(0.56 0.2 260 / 0.55)"
							strokeWidth="2"
							vectorEffect="non-scaling-stroke"
						/>
					</svg>
					<div className="grid gap-2.5">
						<i className={`${bar} w-[92%]`} />
						<i className={`${bar} w-[76%]`} />
						<i className={`${bar} w-[84%]`} />
					</div>
				</div>
			</figure>
		</div>
	)
}
