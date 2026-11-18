import { TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import { series, stats } from "@/demo/content"

// [Agent] Fifteen quarters, Q1 23 to Q3 26, the same span as `series`; the last value of each line is the card's number.
const trends = [
	{ ...stats[0], data: series, ticks: [0, 650, 1300], unit: "" },
	{
		...stats[1],
		data: [80, 82, 81, 84, 85, 87, 86, 88, 89, 90, 91, 92, 92, 93, 94],
		ticks: [80, 90, 100],
		unit: "%",
	},
	{
		...stats[3],
		delta: "+21 this quarter, 28 countries",
		data: [48, 61, 75, 88, 104, 121, 140, 158, 179, 201, 222, 246, 268, 291, 312],
		ticks: [0, 160, 320],
		unit: "",
	},
]

// [Agent] A chart with a real y axis: ticks are the domain, so a line that starts at 80% is drawn against 80–100 and
// says so, instead of a sparkline whose scale the reader has to guess.
function Trend({ data, ticks, unit = "" }: { data: number[]; ticks: number[]; unit?: string }) {
	const [low, high] = [ticks[0], ticks[ticks.length - 1]]
	const y = (value: number) => 100 - ((value - low) / (high - low)) * 100
	const line = data.map((value, index) => `${(index / (data.length - 1)) * 100},${y(value)}`).join(" ")
	return (
		<div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 font-mono text-[10px] text-muted-foreground">
			<div className="relative h-28 w-8">
				{ticks.map((tick) => (
					<span key={tick} className="absolute right-0 -translate-y-1/2" style={{ top: `${y(tick)}%` }}>
						{tick.toLocaleString("en")}
						{unit}
					</span>
				))}
			</div>
			<svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-28 w-full overflow-visible">
				{ticks.map((tick) => (
					<line
						key={tick}
						x1="0"
						x2="100"
						y1={y(tick)}
						y2={y(tick)}
						className="stroke-border"
						vectorEffect="non-scaling-stroke"
					/>
				))}
				<polygon points={`0,100 ${line} 100,100`} className="fill-chart-1 opacity-15" />
				<polyline
					points={line}
					fill="none"
					strokeWidth="2"
					className="stroke-chart-1"
					vectorEffect="non-scaling-stroke"
				/>
			</svg>
			<span />
			<div className="flex justify-between">
				<span>Q1 23</span>
				<span>Q3 26</span>
			</div>
		</div>
	)
}

export default function StatsTrend() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-4">
				<span className="text-sm font-medium text-muted-foreground">Open numbers</span>
				<h2 className="text-3xl leading-tight md:text-4xl">The numbers we steer by, every quarter</h2>
				<p className="text-muted-foreground">
					Counted from Keep's own project data on the first day of each quarter. Nothing is rounded up.
				</p>
			</div>
			<div className="grid gap-4 md:grid-cols-3">
				{trends.map((trend) => (
					<Card key={trend.label} className="gap-4 px-5">
						<div className="flex flex-col gap-1">
							<span className="text-sm text-muted-foreground">{trend.label}</span>
							<span className="font-heading text-4xl leading-none tabular-nums">{trend.value}</span>
							<span className="flex items-center gap-1.5 text-xs text-muted-foreground">
								<TrendingUp className="size-3.5 text-chart-2" /> {trend.delta}
							</span>
						</div>
						<Trend data={trend.data} ticks={trend.ticks} unit={trend.unit} />
					</Card>
				))}
			</div>
		</section>
	)
}
