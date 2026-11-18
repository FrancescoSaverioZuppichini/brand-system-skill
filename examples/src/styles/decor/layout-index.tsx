const columns = "grid grid-cols-[48px_1.6fr_1fr_1fr_56px] items-center gap-x-5"
const rows = [
	["62%", "58%", "42%"],
	["44%", "70%", "36%"],
	["74%", "48%", "52%"],
	["52%", "62%", "40%"],
	["66%", "40%", "56%"],
	["38%", "66%", "34%"],
	["58%", "52%", "46%"],
	["48%", "44%", "50%"],
]

// [Agent] The page is a table: one row height, hairline rules, hierarchy only by column position, no cards and no
// radius. Row 03 is hovered, so its preview (picture over the number card) is frozen beside the pointer.
export default function LayoutIndex() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute top-5 right-8 flex gap-4">
				{[0, 1, 2].map((index) => (
					<i key={index} className="h-1.5 w-[38px] rounded-[3px] bg-[var(--shade)]" />
				))}
			</div>
			<div className="absolute top-[167px] inset-x-8">
				<div className={`${columns} h-[30px] border-t border-[var(--graphite)]`}>
					{["16px", "36px", "36px", "36px", "28px"].map((width, index) => (
						<i
							key={index}
							className={`h-[5px] rounded-[3px] bg-[var(--pencil)]/50 ${index === 4 ? "justify-self-end" : ""}`}
							style={{ width }}
						/>
					))}
				</div>
				{rows.map(([title, client, type], index) => {
					const hover = index === 2
					return (
						<div
							key={title}
							className={`${columns} h-[37px] border-t ${hover || index === 3 ? "border-[var(--cobalt)]" : "border-[var(--hairline)]"}`}
						>
							<span
								className={`font-mono text-xs leading-none ${hover ? "text-[var(--cobalt)]" : "text-[var(--pencil)]"}`}
							>
								0{index + 1}
							</span>
							<i
								className={`h-1.5 rounded-[3px] ${hover ? "bg-[var(--cobalt)]" : "bg-[var(--graphite)]/75"}`}
								style={{ width: title }}
							/>
							<i className="h-1.5 rounded-[3px] bg-[var(--shade)]" style={{ width: client }} />
							<i className="h-1.5 rounded-[3px] bg-[var(--shade)]" style={{ width: type }} />
							<i className="h-1.5 w-[34px] justify-self-end rounded-[3px] bg-[var(--shade)]" />
						</div>
					)
				})}
			</div>
			<div className="absolute top-[300px] left-[318px] h-[160px] w-[196px] overflow-hidden rounded-[2px] bg-[var(--sheet)] shadow-[0_18px_40px_-12px_oklch(0.3_0.04_260/0.35)]">
				<div className="h-[78px] bg-[linear-gradient(130deg,oklch(0.94_0.02_250),oklch(0.82_0.06_262))]" />
			</div>
			<svg className="absolute top-[282px] left-[300px] h-5 w-4" viewBox="0 0 16 20" aria-hidden="true">
				<path
					d="M1 1v15l4-4 3 7 3-1.4-3-6.6h5.5z"
					fill="var(--graphite)"
					stroke="var(--sheet)"
					strokeWidth="1.2"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	)
}
