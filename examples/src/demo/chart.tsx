import { series } from "@/demo/content"
import { cn } from "@/lib/utils"

const quarters = ["Q1 23", "Q1 24", "Q1 25", "Q1 26"]

function toPoints(data: number[], width: number, height: number) {
	const max = Math.max(...data)
	const step = width / (data.length - 1)
	return data.map((value, index) => [index * step, height - (value / max) * height * 0.9] as const)
}

// [Agent] Plain SVG instead of a chart library: the shape scales with its box (preserveAspectRatio none) while the
// strokes stay 2 px thanks to vector-effect, and every colour comes from the style's chart tokens.
export function AreaChart({ data = series, className }: { data?: number[]; className?: string }) {
	const points = toPoints(data, 100, 100)
	const line = points.map(([x, y]) => `${x},${y}`).join(" ")
	return (
		<div className={cn("flex flex-col gap-2", className)}>
			<svg viewBox="0 0 100 100" preserveAspectRatio="none" className="min-h-0 w-full flex-1">
				{[25, 50, 75].map((y) => (
					<line
						key={y}
						x1="0"
						x2="100"
						y1={y}
						y2={y}
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
			<div className="flex justify-between font-mono text-[10px] text-muted-foreground">
				{quarters.map((quarter) => (
					<span key={quarter}>{quarter}</span>
				))}
			</div>
		</div>
	)
}

export function Sparkline({ data = series, className }: { data?: number[]; className?: string }) {
	const line = toPoints(data, 100, 30)
		.map(([x, y]) => `${x},${y}`)
		.join(" ")
	return (
		<svg viewBox="0 0 100 30" preserveAspectRatio="none" className={cn("h-8 w-24", className)}>
			<polyline
				points={line}
				fill="none"
				strokeWidth="2"
				className="stroke-chart-1"
				vectorEffect="non-scaling-stroke"
			/>
		</svg>
	)
}

const barColors = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4", "bg-chart-5"]

export function Bars({ data, labels, className }: { data: number[]; labels: string[]; className?: string }) {
	const max = Math.max(...data)
	return (
		<div className={cn("flex flex-col gap-2", className)}>
			{data.map((value, index) => (
				<div key={labels[index]} className="grid grid-cols-[6rem_1fr_2.5rem] items-center gap-2 text-xs">
					<span className="truncate text-muted-foreground">{labels[index]}</span>
					<div className="h-2 bg-muted">
						<div
							className={cn("h-full", barColors[index % 5])}
							style={{ width: `${(value / max) * 100}%` }}
						/>
					</div>
					<span className="text-right font-mono tabular-nums">{value}</span>
				</div>
			))}
		</div>
	)
}
