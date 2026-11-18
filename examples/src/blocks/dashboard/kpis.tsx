import { ArrowDownRight, ArrowUpRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AppShell } from "@/demo/app-nav"
import { AreaChart, Sparkline } from "@/demo/chart"
import { series, stats } from "@/demo/content"
import { cn } from "@/lib/utils"

const kpis = [
	{ ...stats[0], good: true, data: series.slice(-8) },
	{ ...stats[1], good: true, data: [88, 90, 89, 91, 92, 91, 93, 94] },
	{
		label: "Reviews due",
		value: "12",
		delta: "4 overdue, +3 vs last week",
		good: false,
		data: [5, 6, 4, 7, 8, 6, 9, 12],
	},
]

const attention = [
	{
		title: "Billing rewrite 1.4 waits for sign-off",
		line: "3 of 5 checks · migrates 20 Nov",
		action: "Review",
	},
	{ title: "Mobile app 0.9 is blocked", line: "Migration fails on staging", action: "Open" },
	{ title: "Customer portal review is due", line: "Yearly review · today", action: "Start" },
	{ title: "Search index paused for 2 weeks", line: "Resume or archive it", action: "Decide" },
]

export default function DashboardKpis() {
	return (
		<AppShell
			active="Overview"
			crumbs={["Halden", "Overview"]}
			action={
				<Button size="sm">
					<Plus /> New project
				</Button>
			}
		>
			<div className="flex flex-col gap-6 p-4 md:p-6">
				<div className="flex items-center justify-between gap-4">
					<h1 className="text-xl leading-tight">Overview</h1>
					<Select defaultValue="quarter">
						<SelectTrigger size="sm">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="month">This month</SelectItem>
							<SelectItem value="quarter">This quarter</SelectItem>
							<SelectItem value="year">This year</SelectItem>
						</SelectContent>
					</Select>
				</div>
				{/* [Agent] One sideways scroller on phones (the next card peeks), a plain three-column grid from md. */}
				<div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 md:mx-0 md:pb-0 md:grid md:grid-cols-3 md:gap-4 md:px-0">
					{kpis.map((kpi) => (
						<Card key={kpi.label} className="w-64 shrink-0 snap-start gap-2 p-4 md:w-auto">
							<span className="text-sm text-muted-foreground">{kpi.label}</span>
							<div className="flex items-end justify-between gap-3">
								<span className="text-2xl font-semibold tabular-nums">{kpi.value}</span>
								<Sparkline data={kpi.data} />
							</div>
							<span
								className={cn(
									"flex items-center gap-1 text-xs",
									kpi.good ? "text-muted-foreground" : "text-destructive",
								)}
							>
								{kpi.good ? <ArrowUpRight className="size-3.5" /> : <ArrowDownRight className="size-3.5" />}
								{kpi.delta}
							</span>
						</Card>
					))}
				</div>
				<div className="grid gap-4 lg:grid-cols-[3fr_2fr]">
					<Card className="gap-4 p-4 md:p-5">
						<div className="flex items-baseline justify-between gap-2">
							<span className="text-sm font-medium">Projects in care, by quarter</span>
							<span className="text-sm text-muted-foreground tabular-nums">1,284 now</span>
						</div>
						<AreaChart className="h-48 md:h-64" />
					</Card>
					<Card className="gap-0 p-0">
						<div className="flex items-baseline justify-between gap-2 border-b px-4 py-3 md:px-5">
							<span className="text-sm font-medium">Needs attention</span>
							<span className="text-xs text-muted-foreground">{attention.length} open</span>
						</div>
						<ul className="divide-y">
							{attention.map((item) => (
								<li key={item.title} className="flex items-center gap-3 px-4 py-3 md:px-5">
									<div className="flex min-w-0 flex-1 flex-col text-sm">
										<span className="truncate font-medium">{item.title}</span>
										<span className="truncate text-xs text-muted-foreground">{item.line}</span>
									</div>
									<Button variant="outline" size="sm">
										{item.action}
									</Button>
								</li>
							))}
						</ul>
					</Card>
				</div>
			</div>
		</AppShell>
	)
}
