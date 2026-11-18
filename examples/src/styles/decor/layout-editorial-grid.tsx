const bar = "block h-1.5 rounded-[3px] bg-[var(--block)]"
const cross =
	"linear-gradient(to top right, transparent calc(50% - 0.7px), var(--shade) 50%, transparent calc(50% + 0.7px)), linear-gradient(to bottom right, transparent calc(50% - 0.7px), var(--shade) 50%, transparent calc(50% + 0.7px)), var(--panel)"
const columns = [
	["100%", "100%", "86%", "100%", "92%", "60%"],
	["100%", "90%", "100%", "78%", "100%", "40%"],
]

// [Agent] One 12-column grid used unevenly: the headline takes 8 columns, the portrait 4, then the lower band splits
// 3 / 5 / 4 (standfirst, picture over two text columns, number) so nothing lines up symmetrically.
export default function LayoutEditorialGrid() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute inset-y-0 inset-x-10 grid grid-cols-12 gap-x-5">
				{Array.from({ length: 12 }, (_, index) => (
					<i key={index} className="bg-[var(--cobalt)]/[0.03]" />
				))}
			</div>
			<div className="absolute top-[20px] left-[128px] flex gap-[18px]">
				{[0, 1, 2].map((index) => (
					<i key={index} className="h-1.5 w-[38px] rounded-[3px] bg-[var(--shade)]" />
				))}
			</div>
			<i className="absolute top-[20px] right-10 h-1.5 w-[38px] rounded-[3px] bg-[var(--shade)]" />
			<figure className="absolute top-[68px] right-10 m-0 w-[226.7px]">
				<div className="h-[262px]" style={{ background: cross }} />
				<figcaption className="mt-2 flex items-center gap-2.5 border-t border-[var(--hairline)] pt-2 font-mono text-[10px] leading-none text-[var(--pencil)]">
					Fig. 1 <i className={`${bar} max-w-[120px] flex-1`} />
				</figcaption>
			</figure>
			<div className="absolute top-[212px] left-[225px] grid w-[288.3px] grid-cols-2 content-start gap-x-5 border-t border-[var(--hairline)] pt-3.5">
				<div className="col-span-2 mb-4 h-[118px] bg-[linear-gradient(120deg,oklch(0.94_0.02_250),oklch(0.86_0.04_262))]" />
				{columns.map((widths, column) => (
					<div key={column} className="grid content-start gap-[9px]">
						{widths.map((width, index) => (
							<i key={index} className={bar} style={{ width }} />
						))}
					</div>
				))}
			</div>
		</div>
	)
}
