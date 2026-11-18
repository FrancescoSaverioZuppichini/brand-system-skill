import {
	Bell,
	ChartColumn,
	ChevronLeft,
	ChevronRight,
	Download,
	Funnel,
	Grid3x3,
	LayoutGrid,
	Menu,
	PanelsTopLeft,
	Search,
	Settings,
	User,
} from "lucide-react"

const years = [
	[2019, 10],
	[2020, 16],
	[2021, 21],
	[2022, 27],
	[2023, 33],
	[2024, 38],
	[2025, 44],
	[2026, 50],
]

const rows = [
	["KP-1284", "AM", 82, "1,206", "2019-03-14", "--green"],
	["KP-1279", "JL", 64, "884", "2019-06-02", "--green"],
	["KP-1261", "RS", 41, "517", "2020-01-21", "--amber"],
	["KP-1240", "NO", 93, "2,048", "2021-09-08", "--green"],
	["KP-1198", "TK", 18, "96", "2023-11-30", "--red"],
] as const

// [Agent] The whole console around the hero: Carbon's dark shell bar and icon rail, two more KPI tiles beside the number
// card, and a data table with a toolbar, one selected row and status dots. Density is the identity, so it is all drawn.
export default function EnterpriseDense() {
	return (
		<div aria-hidden="true" className="absolute inset-0 text-[12px] text-[var(--ink)] tabular-nums">
			<div className="absolute inset-x-0 top-0 flex h-10 bg-[var(--shell)] text-[oklch(0.96_0_0)] *:grid *:size-10 *:place-items-center">
				<span className="!w-12">
					<Menu className="size-4" />
				</span>
				<span className="ml-auto">
					<Search className="size-4" />
				</span>
				<span>
					<Bell className="size-4" />
				</span>
				<span>
					<Grid3x3 className="size-4" />
				</span>
				<span className="mr-1">
					<span className="size-6 rounded-full bg-[var(--cobalt)]" />
				</span>
			</div>
			<div className="absolute top-10 bottom-0 left-0 flex w-12 flex-col border-r border-[var(--rule)] bg-[var(--panel)] text-[var(--graphite)] *:grid *:h-10 *:place-items-center">
				<span className="bg-[var(--canvas)] text-[var(--ink)] shadow-[inset_3px_0_0_var(--cobalt)]">
					<LayoutGrid className="size-4" />
				</span>
				<span>
					<ChartColumn className="size-4" />
				</span>
				<span>
					<PanelsTopLeft className="size-4" />
				</span>
				<span>
					<User className="size-4" />
				</span>
				<span>
					<Settings className="size-4" />
				</span>
			</div>

			<div className="absolute top-[151px] left-[328px] flex h-[72px] w-[294px] items-end gap-1.5 rounded-[2px] border border-[var(--rule)] bg-[var(--panel)] px-3 pt-2 pb-1.5">
				{years.map(([year, height]) => (
					<span
						key={year}
						className="flex flex-1 flex-col items-center gap-0.5 font-mono text-[9.5px] leading-none text-[var(--graphite)]"
					>
						<span className="w-full rounded-t-[1px] bg-[var(--cobalt)]" style={{ height }} />
						{year}
					</span>
				))}
			</div>
			<div className="absolute top-[151px] left-[630px] flex h-[72px] w-[150px] items-center gap-2.5 rounded-[2px] border border-[var(--rule)] bg-[var(--panel)] px-3">
				<svg viewBox="0 0 48 48" className="size-12 -rotate-90" fill="none" strokeWidth="8">
					<circle cx="24" cy="24" r="18" stroke="var(--rule)" />
					<circle cx="24" cy="24" r="18" stroke="var(--green)" strokeDasharray="80 113" />
					<circle
						cx="24"
						cy="24"
						r="18"
						stroke="var(--amber)"
						strokeDasharray="20 113"
						strokeDashoffset="-80"
					/>
				</svg>
				<div className="grid gap-1 font-mono text-[11px] leading-none text-[var(--graphite)]">
					{[
						["--green", "71%"],
						["--amber", "18%"],
						["--rule", "11%"],
					].map(([color, share]) => (
						<span key={color} className="flex items-center gap-1.5">
							<span className="size-2 rounded-[1px]" style={{ background: `var(${color})` }} />
							{share}
						</span>
					))}
				</div>
			</div>

			<div className="absolute top-[233px] left-[68px] w-[712px] rounded-[2px] border border-[var(--rule)] bg-[var(--panel)]">
				<div className="flex h-9 items-center border-b border-[var(--rule)] pr-1 pl-2 text-[var(--graphite)]">
					<span className="flex h-[26px] w-[200px] items-center border-b border-[oklch(0.7_0.005_250)] bg-[var(--canvas)] px-2">
						<Search className="size-3.5" />
					</span>
					<span className="ml-auto flex *:grid *:size-[30px] *:place-items-center">
						<span>
							<Funnel className="size-4" />
						</span>
						<span>
							<Download className="size-4" />
						</span>
						<span>
							<Menu className="size-4" />
						</span>
					</span>
				</div>
				<table className="w-full border-collapse whitespace-nowrap [&_td]:h-[27px] [&_td]:border-b [&_td]:border-[var(--rule)] [&_td]:px-2 [&_th]:h-[27px] [&_th]:border-b [&_th]:border-[var(--rule)] [&_th]:bg-[var(--canvas)] [&_th]:px-2 [&_th]:text-left [&_th]:font-semibold">
					<thead>
						<tr>
							<th className="w-3">
								<span className="block size-3 rounded-[1px] border border-[var(--graphite)]" />
							</th>
							<th>ID</th>
							<th />
							<th>Progress</th>
							<th className="!text-right">Items</th>
							<th>Since</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{rows.map(([id, initials, progress, items, since, status], index) => (
							<tr key={id} className={index === 1 ? "bg-[var(--selection)]" : undefined}>
								<td>
									<span
										className={
											index === 1
												? "block size-3 rounded-[1px] bg-[var(--cobalt)]"
												: "block size-3 rounded-[1px] border border-[var(--graphite)]"
										}
									/>
								</td>
								<td className="font-mono text-[11.5px] text-[var(--cobalt)]">{id}</td>
								<td>
									<span className="grid size-[18px] place-items-center rounded-full bg-[oklch(0.92_0.03_258)] text-[9px] font-semibold text-[var(--cobalt)]">
										{initials}
									</span>
								</td>
								<td>
									<span className="block h-1 w-[110px] bg-[var(--rule)]">
										<span className="block h-full bg-[var(--cobalt)]" style={{ width: `${progress}%` }} />
									</span>
								</td>
								<td className="text-right">{items}</td>
								<td>{since}</td>
								<td>
									<span className="block size-2 rounded-full" style={{ background: `var(${status})` }} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="flex h-[26px] items-center px-2 text-[var(--graphite)]">
					1–5 of 1,284
					<span className="ml-auto flex gap-3.5">
						<ChevronLeft className="size-3.5" />
						<ChevronRight className="size-3.5" />
					</span>
				</div>
			</div>
		</div>
	)
}
