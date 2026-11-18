// [Agent] Each product is a CSS object (bottle, bowl, sphere, box) standing on a soft studio floor: the products carry
// all the colour while the page stays neutral.
const objects = {
	bottle:
		"w-[34px] h-[92px] rounded-[12px_12px_6px_6px] bg-[linear-gradient(90deg,oklch(0.8_0.04_262),oklch(0.93_0.02_262)_40%,oklch(0.74_0.06_262))]",
	bowl: "w-[78px] h-[38px] rounded-[4px_4px_40px_40px] bg-[linear-gradient(90deg,oklch(0.84_0.01_255),oklch(0.96_0.005_255)_45%,oklch(0.78_0.01_255))]",
	sphere: "size-16 rounded-full bg-[radial-gradient(circle_at_35%_30%,oklch(0.98_0_0),oklch(0.7_0.012_255))]",
	box: "w-14 h-[70px] rounded bg-[linear-gradient(90deg,oklch(0.42_0.02_255),oklch(0.55_0.02_255)_45%,oklch(0.36_0.02_255))]",
}
const products: { object: keyof typeof objects; dots?: string[] }[] = [
	{ object: "bottle", dots: ["oklch(0.8 0.04 262)", "var(--shade)"] },
	{ object: "bowl", dots: ["var(--shade)", "var(--shade)", "var(--shade)"] },
	{ object: "bottle" },
	{ object: "box", dots: ["oklch(0.4 0.02 255)", "var(--shade)"] },
	{ object: "sphere" },
	{ object: "box" },
	{ object: "bottle" },
	{ object: "bowl" },
]
const check = (on = false) => (
	<span className="flex items-center gap-2">
		<i
			className={`size-[11px] rounded-[3px] border-[1.5px] ${on ? "border-[var(--cobalt)] bg-[var(--cobalt)]" : "border-[var(--shade)]"}`}
		/>
		<i className="h-1.5 w-[60px] rounded-[3px] bg-[var(--block)]" />
	</span>
)
const heading = (width: string) => (
	<i className="mt-2 block h-1.5 rounded-[3px] bg-[var(--graphite)]/70 first:mt-0" style={{ width }} />
)

// [Agent] A filter column beside a 4-up product grid; the grid is the page and its second row runs off the bottom.
// The third cell of the first row is left empty for the number card.
export default function LayoutCatalogue() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute inset-x-0 top-0 h-[52px] border-b border-[var(--hairline)]" />
			<div className="absolute top-[23px] left-1/2 flex -translate-x-1/2 gap-[18px]">
				{[0, 1, 2, 3, 4].map((index) => (
					<i key={index} className="h-1.5 w-10 rounded-[3px] bg-[var(--shade)]" />
				))}
			</div>
			<i className="absolute top-[18px] right-8 h-4 w-[18px] rounded-[2px_2px_5px_5px] border-[1.75px] border-[var(--graphite)] after:absolute after:-top-[9px] after:-right-[9px] after:size-3 after:rounded-full after:bg-[var(--cobalt)]" />
			<div className="absolute top-[157px] left-8 grid w-[136px] content-start gap-2.5">
				{heading("55%")}
				{check(true)}
				{check()}
				{check()}
				{heading("40%")}
				<span className="flex gap-[7px]">
					{["var(--graphite)", "oklch(0.8 0.04 262)", "oklch(0.92 0.005 255)", "oklch(0.7 0.012 255)"].map(
						(color) => (
							<i
								key={color}
								className="size-4 rounded-full shadow-[inset_0_0_0_1px_oklch(0_0_0/0.08)]"
								style={{ background: color }}
							/>
						),
					)}
				</span>
				{heading("46%")}
				<span className="relative my-2 h-[3px] rounded-sm bg-[var(--block)] before:absolute before:inset-y-0 before:right-[30%] before:left-[18%] before:bg-[var(--cobalt)] after:absolute after:-top-[5px] after:left-[calc(70%-6px)] after:size-3 after:rounded-full after:border-[1.5px] after:border-[var(--cobalt)] after:bg-[var(--sheet)]" />
				{heading("62%")}
				{check()}
				{check()}
			</div>
			<div className="absolute top-[155px] right-8 left-[192px] grid grid-cols-4 gap-x-4 gap-y-5">
				{products.map((product, index) =>
					index === 2 ? (
						<i key="card" />
					) : (
						<div key={index}>
							<div className="relative aspect-[4/5] rounded bg-[radial-gradient(120%_80%_at_50%_100%,oklch(0.9_0.006_255),var(--panel)_60%)]">
								<i
									className={`absolute bottom-[18%] left-1/2 -translate-x-1/2 shadow-[0_14px_12px_-8px_oklch(0.3_0.02_255/0.3)] ${objects[product.object]}`}
								/>
							</div>
							{product.dots && (
								<>
									<div className="mt-[9px] flex items-center justify-between">
										<i className="h-1.5 w-[58%] rounded-[3px] bg-[var(--shade)]" />
										<i className="h-1.5 w-[24%] rounded-[3px] bg-[var(--graphite)]/60" />
									</div>
									<div className="mt-[7px] flex gap-1">
										{product.dots.map((dot, dotIndex) => (
											<i key={dotIndex} className="size-2 rounded-full" style={{ background: dot }} />
										))}
									</div>
								</>
							)}
						</div>
					),
				)}
			</div>
		</div>
	)
}
