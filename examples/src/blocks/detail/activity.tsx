import { CircleAlert, CircleCheck, LifeBuoy, Pencil } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { AppShell, me } from "@/demo/app-nav"
import { Person } from "@/demo/table"
import { Face } from "@/demo/workspace"

const fields = [
	["Owner", <Person key="owner" name="Tomás Berg" />],
	["Backup owner", <Person key="backup" name="Ana Ruiz" />],
	["Client", "Northwind"],
	["In care since", "14 Mar 2024"],
	["Health check", "Daily at 06:00, /health"],
	["Last check", "Passed today, 06:00"],
	["Yearly review", "18 Nov 2026 (today)"],
] as const

type Entry = { who: string; text: string; note?: string; when: string }

const log: Entry[] = [
	{ who: "Keep", text: "opened the yearly review", when: "Today, 06:00" },
	{ who: "Ana Ruiz", text: "became backup owner", note: "Leo Marchetti → Ana Ruiz", when: "3 Nov" },
	{ who: "Health check", text: "recovered after 14 minutes", when: "21 Oct" },
	{ who: "Health check", text: "failed: /health timed out", when: "21 Oct" },
	{
		who: "Tomás Berg",
		text: "commented",
		note: "“Session storage is off the old Redis box. One item left from last year.”",
		when: "2 Sep",
	},
	{ who: "Tomás Berg", text: "changed the health check to daily", note: "Hourly → Daily", when: "12 Jun" },
]

const icons = { Keep: LifeBuoy, "Health check": CircleAlert }

// [Agent] People get their initials, Keep and the health check get an icon, so the log reads who did what at a glance.
function Mark({ entry }: { entry: Entry }) {
	if (!(entry.who in icons)) return <Face name={entry.who} className="size-7 ring-4 ring-card" />
	const Icon = entry.text.startsWith("recovered") ? CircleCheck : icons[entry.who as keyof typeof icons]
	return (
		<Avatar className="size-7 ring-4 ring-card">
			<AvatarFallback>
				<Icon className="size-3.5" />
			</AvatarFallback>
		</Avatar>
	)
}

export default function DetailActivity() {
	return (
		<AppShell active="Care" crumbs={["Care", "Customer portal"]}>
			<div className="grid gap-6 p-4 md:p-6 lg:grid-cols-[1fr_26rem] lg:items-start">
				<section className="flex flex-col gap-5">
					<div className="flex flex-col gap-1">
						<span className="text-sm text-muted-foreground">Care plan</span>
						<h1 className="text-xl leading-tight">Customer portal</h1>
					</div>
					<dl className="flex flex-col divide-y border-y text-sm">
						{fields.map(([label, value]) => (
							<div
								key={label}
								className="grid grid-cols-[8rem_1fr] items-center gap-4 py-2.5 md:grid-cols-[10rem_1fr]"
							>
								<dt className="text-muted-foreground">{label}</dt>
								<dd className="min-w-0 truncate">{value}</dd>
							</div>
						))}
					</dl>
					<div className="flex gap-2 max-md:flex-col">
						<Button>Start review</Button>
						<Button variant="outline">
							<Pencil /> Edit plan
						</Button>
					</div>
				</section>
				<Card className="gap-4 p-4 md:p-5">
					<h2 className="text-base leading-tight">Activity</h2>
					<ol className="relative flex flex-col gap-4 before:absolute before:top-2 before:bottom-2 before:left-3.5 before:w-px before:bg-border">
						{log.map((entry) => (
							<li key={entry.text + entry.when} className="relative flex gap-3 text-sm">
								<Mark entry={entry} />
								<div className="flex min-w-0 flex-1 flex-col gap-0.5 pt-1">
									<p>
										<span className="font-medium">{entry.who}</span>{" "}
										<span className="text-muted-foreground">{entry.text}</span>
									</p>
									{entry.note && <p className="text-muted-foreground">{entry.note}</p>}
									<span className="text-xs text-muted-foreground">{entry.when}</span>
								</div>
							</li>
						))}
					</ol>
					<div className="flex gap-3 border-t pt-4">
						<Avatar className="size-7">
							<AvatarFallback className="text-[10px]">{me.initials}</AvatarFallback>
						</Avatar>
						<div className="flex flex-1 flex-col gap-2">
							<Textarea placeholder="Write a comment. @ mentions notify people." className="min-h-20" />
							<Button size="sm" variant="outline" className="self-end">
								Comment
							</Button>
						</div>
					</div>
				</Card>
			</div>
		</AppShell>
	)
}
