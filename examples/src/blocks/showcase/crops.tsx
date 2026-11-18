import { TrendingUp } from "lucide-react"
import type { ReactNode } from "react"
import { Progress } from "@/components/ui/progress"
import { AreaChart } from "@/demo/chart"
import { series, stats } from "@/demo/content"
import { AppWindow } from "@/demo/screen"
import { Person, StatusBadge } from "@/demo/table"

// [Agent] Close-ups are the same app parts at the same text-xs, enlarged with CSS zoom, so they are true crops of the
// screen above (same type, same spacing) and stay sharp at any size.
function CloseUp({ caption, zoom = 1.6, children }: { caption: string; zoom?: number; children: ReactNode }) {
	return (
		<figure className="flex w-80 shrink-0 flex-col gap-3 md:w-auto">
			<div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border bg-card text-card-foreground">
				<div className="text-xs" style={{ zoom }}>
					{children}
				</div>
			</div>
			<figcaption className="text-sm text-muted-foreground">{caption}</figcaption>
		</figure>
	)
}

export default function ShowcaseCrops() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-4">
				<span className="text-sm font-medium text-muted-foreground">Details</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Made for people who read the small print</h2>
				<p className="text-lg text-muted-foreground">
					The whole screen, then three things we spent too long on.
				</p>
			</div>
			<div className="h-[440px] overflow-hidden md:h-auto">
				<AppWindow />
			</div>
			<div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-3 md:px-0">
				<CloseUp caption="Every number carries its change since last quarter.">
					<div className="flex flex-col gap-1 rounded-lg border p-3">
						<span className="text-[11px] text-muted-foreground">{stats[0].label}</span>
						<span className="text-lg font-semibold tabular-nums">{stats[0].value}</span>
						<span className="flex items-center gap-1 text-[11px] text-muted-foreground">
							<TrendingUp className="size-3 text-chart-2" /> {stats[0].delta}
						</span>
					</div>
				</CloseUp>
				<CloseUp
					caption="Owner, status and progress share one row, so the table reads like a sentence."
					zoom={1.3}
				>
					<div className="flex items-center gap-3">
						<Person name="Ana Ruiz" />
						<StatusBadge status="Shipping" />
						<Progress value={72} className="h-1.5 w-12" />
					</div>
				</CloseUp>
				<CloseUp caption="The chart ends at today's count, never at a projection.">
					<div className="flex w-36 flex-col gap-1">
						<span className="text-right font-mono text-[10px] tabular-nums">Q3 26 · 1,284</span>
						<AreaChart data={series.slice(-6)} className="h-16 [&>div]:hidden" />
					</div>
				</CloseUp>
			</div>
		</section>
	)
}
