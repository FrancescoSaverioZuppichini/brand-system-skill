import { CircleAlert } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { AppShell } from "@/demo/app-nav"
import { Sparkline } from "@/demo/chart"
import { Face } from "@/demo/workspace"

type Event = { who: string; did: string; what: string; note?: string; time: string }

const days: { day: string; events: Event[] }[] = [
	{
		day: "Today",
		events: [
			{ who: "Ana Ruiz", did: "opened for review", what: "Billing rewrite 1.4", time: "10:42" },
			{ who: "Tomás Berg", did: "released", what: "Customer portal 2.8.1", time: "09:15" },
			{
				who: "Health check",
				did: "failed on",
				what: "Search index",
				note: "Timeout after 30 s on /search",
				time: "08:51",
			},
			{
				who: "Jonas Lind",
				did: "blocked",
				what: "Mobile app 0.9",
				note: "“Migration fails on staging, looking into it.”",
				time: "08:30",
			},
		],
	},
	{
		day: "Yesterday",
		events: [
			{ who: "Priya Shah", did: "released", what: "Client reports 3.1", time: "17:20" },
			{
				who: "Mei Okafor",
				did: "commented on",
				what: "Onboarding v3",
				note: "“The plan is ready for review.”",
				time: "15:02",
			},
			{ who: "Leo Marchetti", did: "released", what: "Design system 1.12", time: "14:05" },
			{ who: "Leo Marchetti", did: "scheduled", what: "Care dashboard 2.0", time: "11:30" },
		],
	},
]

const side = [
	{ label: "Releases this week", value: "6", note: "+2 vs last week", data: [3, 4, 2, 5, 4, 3, 4, 6] },
	{
		label: "Health checks run",
		value: "16,050",
		note: "99.2% passed",
		data: [15200, 15600, 15400, 15900, 15800, 16100, 15900, 16050],
	},
	{ label: "Comments", value: "48", note: "−5 vs last week", data: [40, 52, 47, 61, 55, 49, 53, 48] },
]

// [Agent] People get their initials, the system gets an icon, so a scan down the rail tells who did what.
function Mark({ event }: { event: Event }) {
	if (event.who !== "Health check") return <Face name={event.who} className="size-7 ring-4 ring-background" />
	return (
		<Avatar className="size-7 ring-4 ring-background">
			<AvatarFallback>
				<CircleAlert className="size-3.5" />
			</AvatarFallback>
		</Avatar>
	)
}

export default function DashboardFeed() {
	return (
		<AppShell active="Inbox" crumbs={["Halden", "Activity"]}>
			<div className="grid gap-8 p-4 md:p-6 lg:grid-cols-[minmax(0,42rem)_18rem] lg:justify-between">
				<div className="flex flex-col gap-6">
					<h1 className="text-xl leading-tight">Activity</h1>
					{days.map(({ day, events }) => (
						<section key={day} className="flex flex-col gap-3">
							<h2 className="text-sm leading-tight text-muted-foreground">{day}</h2>
							<ol className="relative flex flex-col gap-5 before:absolute before:top-2 before:bottom-2 before:left-3.5 before:w-px before:bg-border">
								{events.map((event) => (
									<li key={event.what + event.did} className="relative flex gap-3 text-sm">
										<Mark event={event} />
										<div className="flex min-w-0 flex-1 flex-col gap-1 pt-1">
											<p>
												<span className="font-medium">{event.who}</span>{" "}
												<span className="text-muted-foreground">{event.did}</span>{" "}
												<span className="font-medium">{event.what}</span>
											</p>
											{event.note && <p className="text-muted-foreground">{event.note}</p>}
										</div>
										<span className="pt-1 text-xs text-muted-foreground tabular-nums">{event.time}</span>
									</li>
								))}
							</ol>
						</section>
					))}
				</div>
				<aside className="flex flex-col gap-3">
					<h2 className="text-sm leading-tight text-muted-foreground">This week</h2>
					{side.map((stat) => (
						<Card key={stat.label} className="gap-1 p-4">
							<span className="text-sm text-muted-foreground">{stat.label}</span>
							<div className="flex items-end justify-between gap-2">
								<span className="text-xl font-semibold tabular-nums">{stat.value}</span>
								<Sparkline data={stat.data} className="h-7 w-20" />
							</div>
							<span className="text-xs text-muted-foreground">{stat.note}</span>
						</Card>
					))}
				</aside>
			</div>
		</AppShell>
	)
}
