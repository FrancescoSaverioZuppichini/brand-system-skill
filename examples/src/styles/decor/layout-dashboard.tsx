const bar = "block h-1.5 rounded-[3px] bg-[var(--shade)]"
const panel = "rounded-lg border border-[var(--hairline)] bg-[var(--sheet)]"
const menu = [["60px", true], ["72px"], ["50px"], ["66px"], null, ["58px"], ["76px"], ["46px"]] as const

// [Agent] The app shell: a full-height sidebar, a thin top bar, and a content cell of KPI tiles, a chart beside a
// legend list, and a table, all grey placeholders. The number card is the first KPI and the hero button the top bar's.
export default function LayoutDashboard() {
	return (
		<div aria-hidden="true" className="absolute inset-0 bg-[var(--panel)]">
			<aside className="absolute inset-y-0 left-0 flex w-44 flex-col gap-1 border-r border-[var(--hairline)] bg-[var(--sheet)] px-3 pt-[54px]">
				{menu.map((item, index) =>
					item ? (
						<span
							key={index}
							className={`flex h-[30px] items-center gap-2.5 rounded-md px-2 ${item[1] ? "bg-[var(--tint)]" : ""}`}
						>
							<i
								className={`size-[13px] rounded border-[1.5px] ${item[1] ? "border-[var(--cobalt)]" : "border-[var(--shade)]"}`}
							/>
							<i
								className={`h-1.5 rounded-[3px] ${item[1] ? "bg-[var(--cobalt)]/45" : "bg-[var(--block)]"}`}
								style={{ width: item[0] }}
							/>
						</span>
					) : (
						<i key={index} className="mx-2 mt-3.5 mb-1.5 block h-1.5 w-10 rounded-[3px] bg-[var(--block)]" />
					),
				)}
			</aside>
			<div className="absolute top-0 right-0 left-44 h-12 border-b border-[var(--hairline)] bg-[var(--sheet)]" />
			<div className="absolute top-2.5 right-[136px] flex h-7 w-[180px] items-center gap-2 rounded-md border border-[var(--hairline)] bg-[var(--panel)] px-2.5">
				<i className="size-2 rounded-full border-[1.5px] border-[var(--shade)]" />
				<i className="h-1.5 w-16 rounded-[3px] bg-[var(--shade)]" />
			</div>
			<div className="absolute top-[120px] right-5 left-[196px] grid grid-cols-4 gap-3">
				<i />
				{[
					["50%", "60%"],
					["62%", "46%"],
					["40%", "54%"],
				].map(([label, value]) => (
					<div key={label} className={`${panel} grid h-[95px] content-start gap-2 px-3.5 py-3`}>
						<i className={bar} style={{ width: label }} />
						<i className="block h-[15px] rounded bg-[var(--shade)]" style={{ width: value }} />
						<i className="block h-3 w-[34px] rounded-full bg-[var(--leaf)]/20" />
					</div>
				))}
			</div>
			<div className="absolute top-[227px] right-5 left-[196px] grid grid-cols-[2fr_1fr] gap-3">
				<div className={`${panel} grid h-[138px] grid-rows-[auto_1fr] gap-2 px-3.5 py-3`}>
					<i className={`${bar} w-[22%]`} />
					<svg className="size-full" viewBox="0 0 360 100" preserveAspectRatio="none" aria-hidden="true">
						<path
							d="M0 25H360M0 50H360M0 75H360"
							stroke="var(--hairline)"
							vectorEffect="non-scaling-stroke"
						/>
						<path
							d="M0 84 L30 78 L60 80 L90 66 L120 70 L150 56 L180 60 L210 44 L240 48 L270 34 L300 38 L330 22 L360 18 V100 H0Z"
							fill="oklch(0.56 0.2 260 / 0.09)"
						/>
						<path
							d="M0 84 L30 78 L60 80 L90 66 L120 70 L150 56 L180 60 L210 44 L240 48 L270 34 L300 38 L330 22 L360 18"
							fill="none"
							stroke="var(--cobalt)"
							strokeWidth="1.75"
							vectorEffect="non-scaling-stroke"
						/>
						<path
							d="M0 92 L30 90 L60 88 L90 86 L120 84 L150 82 L180 80 L210 76 L240 74 L270 70 L300 68 L330 64 L360 62"
							fill="none"
							stroke="oklch(0.8 0.01 255)"
							strokeWidth="1.5"
							strokeDasharray="4 3"
							vectorEffect="non-scaling-stroke"
						/>
					</svg>
				</div>
				<div className={`${panel} grid content-start gap-[11px] px-3.5 py-3`}>
					<i className={`${bar} w-[40%]`} />
					{[
						["var(--cobalt)", 1],
						["var(--leaf)", 0.8],
						["var(--shade)", 0.6],
						["var(--shade)", 0.7],
					].map(([dot, length]) => (
						<span key={length} className="flex items-center gap-2">
							<i className="size-2 rounded-full" style={{ background: dot }} />
							<i className="h-1.5 rounded-[3px] bg-[var(--block)]" style={{ flex: length }} />
							<i className="h-1.5 w-[26px] rounded-[3px] bg-[var(--shade)]" />
						</span>
					))}
				</div>
			</div>
			<div className={`${panel} absolute top-[377px] right-5 left-[196px] overflow-hidden`}>
				<div className="grid h-7 grid-cols-[24px_2fr_1fr_1fr_60px] items-center gap-4 bg-[var(--panel)] px-3.5">
					<span />
					<i className={`${bar} w-[30%]`} />
					<i className={`${bar} w-[40%]`} />
					<i className={`${bar} w-[36%]`} />
					<i className={bar} />
				</div>
				{[
					["62%", "var(--tint)", "50%"],
					["48%", "oklch(0.62 0.15 155 / 0.18)", "64%"],
					["70%", "var(--tint)", "42%"],
				].map(([name, pill, date]) => (
					<div
						key={name}
						className="grid h-[34px] grid-cols-[24px_2fr_1fr_1fr_60px] items-center gap-4 border-t border-[var(--hairline)] px-3.5"
					>
						<i className="size-3 rounded-[3px] border-[1.5px] border-[var(--shade)]" />
						<i className="block h-1.5 rounded-[3px] bg-[var(--block)]" style={{ width: name }} />
						<i className="h-3.5 w-[46px] rounded-full" style={{ background: pill }} />
						<i className="block h-1.5 rounded-[3px] bg-[var(--block)]" style={{ width: date }} />
						<i className="block h-1.5 rounded-[3px] bg-[var(--block)]" />
					</div>
				))}
			</div>
		</div>
	)
}
