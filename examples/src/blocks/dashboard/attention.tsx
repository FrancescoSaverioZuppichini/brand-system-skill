import { ArrowRight, CircleAlert, Rocket, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AppShell } from "@/demo/app-nav"
import { AreaChart } from "@/demo/chart"

const needs = [
	{
		icon: Rocket,
		title: "Sign off Billing rewrite 1.4",
		line: "3 of 5 checks done. Northwind migrates on 20 Nov.",
		action: "Review release",
	},
	{
		icon: CircleAlert,
		title: "Search index health check is failing",
		line: "Failing since 4 Nov. Priya Shah, the owner, is away.",
		action: "Open check",
	},
	{
		icon: UserCheck,
		title: "Approve the Design system handover",
		line: "Leo Marchetti hands it to Mei Okafor on Friday.",
		action: "Approve",
	},
]

const releases = [18, 22, 25, 24, 31, 29, 34, 38, 36, 41, 44, 47, 45, 52, 48]

const failed = [
	{ project: "Search index", count: 14 },
	{ project: "Mobile app", count: 7 },
	{ project: "Status page", count: 5 },
	{ project: "Docs site", count: 3 },
	{ project: "Customer portal", count: 2 },
]

// [Agent] The tinted panel is the page's one loud thing: the user's job here is to act, so the charts sit below it
// and stay neutral.
export default function DashboardAttention() {
	return (
		<AppShell active="Overview" crumbs={["Halden", "Overview"]}>
			<div className="flex flex-col gap-6 p-4 md:p-6">
				<div>
					<h1 className="text-xl leading-tight">Good morning, Ana</h1>
					<p className="text-sm text-muted-foreground">Wednesday 18 November · 3 things need you</p>
				</div>
				<section className="rounded-xl border bg-muted p-1.5">
					<h2 className="px-3 pt-2 pb-2.5 text-sm leading-tight">Needs you</h2>
					<ul className="flex flex-col gap-1.5">
						{needs.map(({ icon: Icon, title, line, action }) => (
							<li
								key={title}
								className="flex flex-col gap-3 rounded-lg border bg-card p-3 sm:flex-row sm:items-center md:px-4"
							>
								<Icon className="hidden size-4 shrink-0 text-muted-foreground sm:block" />
								<div className="flex min-w-0 flex-1 flex-col text-sm">
									<span className="font-medium">{title}</span>
									<span className="text-muted-foreground">{line}</span>
								</div>
								<Button size="sm" className="self-start sm:self-auto">
									{action} <ArrowRight />
								</Button>
							</li>
						))}
					</ul>
				</section>
				<div className="grid gap-4 lg:grid-cols-2">
					<Card className="gap-4 p-4 md:p-5">
						<div className="flex items-baseline justify-between gap-2">
							<span className="text-sm font-medium">Releases per quarter</span>
							<span className="text-sm text-muted-foreground tabular-nums">48 this quarter</span>
						</div>
						<AreaChart data={releases} className="h-44 md:h-52" />
					</Card>
					<Card className="gap-4 p-4 md:p-5">
						<div className="flex items-baseline justify-between gap-2">
							<span className="text-sm font-medium">Failed health checks, last 30 days</span>
							<span className="text-sm text-muted-foreground tabular-nums">31 total</span>
						</div>
						<ul className="flex flex-col gap-4 py-1 text-sm">
							{failed.map((row) => (
								<li key={row.project} className="grid grid-cols-[7.5rem_1fr_2rem] items-center gap-3">
									<span className="truncate text-muted-foreground">{row.project}</span>
									<span className="h-2 rounded-full bg-muted">
										<span
											className="block h-full rounded-full bg-chart-1"
											style={{ width: `${(row.count / failed[0].count) * 100}%` }}
										/>
									</span>
									<span className="text-right tabular-nums">{row.count}</span>
								</li>
							))}
						</ul>
					</Card>
				</div>
			</div>
		</AppShell>
	)
}
