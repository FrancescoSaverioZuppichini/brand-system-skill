const tile =
	"relative overflow-hidden rounded-[18px] border border-[var(--hairline)] bg-[var(--sheet)] p-[22px]"
const bar = "block h-[7px] rounded bg-[var(--block)]"
const cross =
	"linear-gradient(to top right, transparent calc(50% - 0.7px), var(--shade) 50%, transparent calc(50% + 0.7px)), linear-gradient(to bottom right, transparent calc(50% - 0.7px), var(--shade) 50%, transparent calc(50% + 0.7px)), var(--panel)"

// [Agent] Four equal columns and three rows; every tile is a span (2×2, 1×2, 2×1, 1×1), never a free size, so the
// gaps stay identical. The hero copy and the number card fill the first two cells; these are the rest of the box.
export default function LayoutBento() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-3 bg-[var(--panel)] p-5"
		>
			<div className={`${tile} col-span-2 row-span-2`} />
			<div />
			<div className="relative row-span-2 rounded-[18px] bg-[linear-gradient(160deg,oklch(0.94_0.02_250),oklch(0.84_0.05_262))]">
				<i className="absolute bottom-[38px] left-5 h-2.5 w-[36%] rounded bg-[var(--sheet)]/70" />
				<i className="absolute bottom-[22px] left-5 h-[7px] w-[60%] rounded bg-[var(--sheet)]/70" />
			</div>
			<div className={tile}>
				<i className="mb-[30px] block size-[34px] rounded-full border-[7px] border-[var(--shade)]" />
				<div className="grid gap-[9px]">
					<i className={`${bar} w-[70%] bg-[var(--shade)]`} />
					<i className={`${bar} w-[90%]`} />
				</div>
			</div>
			<div className={`${tile} col-span-2`}>
				<div className="grid gap-[9px]">
					<i className={`${bar} w-[34%] bg-[var(--shade)]`} />
					<i className={`${bar} w-[52%]`} />
				</div>
				<div className="mt-[18px] flex h-[70px] items-end gap-2">
					{[30, 46, 38, 62, 55, 92, 70, 80].map((height, index) => (
						<i
							key={height}
							className={`flex-1 rounded-t ${index === 5 ? "bg-[var(--cobalt)]/60" : "bg-[var(--shade)]"}`}
							style={{ height: `${height}%` }}
						/>
					))}
				</div>
			</div>
			<div className={`${tile} col-span-2`}>
				<div className="grid w-[40%] gap-[9px]">
					<i className={`${bar} w-[80%] bg-[var(--shade)]`} />
					<i className={bar} />
					<i className={`${bar} w-[70%]`} />
				</div>
				<div
					className="absolute inset-y-0 right-0 left-[46%] border-l border-[var(--hairline)]"
					style={{ background: cross }}
				/>
			</div>
		</div>
	)
}
