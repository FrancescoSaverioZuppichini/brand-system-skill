import { Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { Separator } from "@/components/ui/separator"
import { AppShell, RowMenu } from "@/demo/app-nav"
import { Sparkline } from "@/demo/chart"
import { Face } from "@/demo/workspace"
import { cn } from "@/lib/utils"

type Due = "Overdue" | "Today" | "This week" | "Snoozed"

const reviews: { project: string; owner: string; kind: string; due: Due; when: string }[] = [
	{ project: "Customer portal", owner: "Tomás Berg", kind: "Yearly review", due: "Today", when: "18 Nov" },
	{
		project: "Search index",
		owner: "Priya Shah",
		kind: "Health check failed",
		due: "Overdue",
		when: "2w ago",
	},
	{ project: "Status page", owner: "Ana Ruiz", kind: "Dependency update", due: "Overdue", when: "3d ago" },
	{ project: "Design system", owner: "Leo Marchetti", kind: "Handover", due: "This week", when: "20 Nov" },
	{ project: "Docs site", owner: "Mei Okafor", kind: "Yearly review", due: "This week", when: "21 Nov" },
	{
		project: "Client reports",
		owner: "Priya Shah",
		kind: "Care date missing",
		due: "This week",
		when: "22 Nov",
	},
	{ project: "Mobile app", owner: "Jonas Lind", kind: "Owner on leave", due: "Snoozed", when: "1 Dec" },
	{ project: "Data export", owner: "Tomás Berg", kind: "Yearly review", due: "Snoozed", when: "9 Dec" },
]

const tones: Record<Due, string> = {
	Overdue: "border-destructive/40 text-destructive",
	Today: "border-chart-1/50",
	"This week": "",
	Snoozed: "text-muted-foreground",
}

const facts = [
	["In care since", "14 Mar 2024"],
	["Client", "Northwind"],
	["Backup owner", "Ana Ruiz"],
	["Last review", "20 Nov 2025"],
	["Open issues", "2 minor"],
]

// [Agent] The inspector shows what the row can't (uptime trend, last year's notes, the review checklist), so it never
// repeats the list. On a phone only the list renders; tapping a review opens it as its own screen.
export default function ShellThreePane() {
	const selected = reviews[0]
	return (
		<AppShell active="Care" crumbs={["Care", "Reviews"]}>
			<div className="flex h-full">
				<section className="flex min-w-0 flex-1 flex-col border-r">
					<div className="flex flex-col gap-3 border-b p-4">
						<div className="flex items-baseline justify-between gap-2">
							<h1 className="text-xl leading-tight">Reviews</h1>
							<span className="text-sm text-muted-foreground">2 overdue · 1 today</span>
						</div>
						<InputGroup>
							<InputGroupAddon>
								<Search />
							</InputGroupAddon>
							<InputGroupInput placeholder="Filter reviews" />
							<InputGroupAddon align="inline-end">
								<Kbd>/</Kbd>
							</InputGroupAddon>
						</InputGroup>
					</div>
					<ul className="min-h-0 flex-1 divide-y overflow-y-auto">
						{reviews.map((review) => (
							<li
								key={review.project}
								className={cn("flex items-center gap-3 px-4 py-3 text-sm", review === selected && "bg-muted")}
							>
								<Face name={review.owner} />
								<div className="flex min-w-0 flex-1 flex-col">
									<span className="truncate font-medium">{review.project}</span>
									<span className="truncate text-xs text-muted-foreground">
										{review.kind} · {review.owner}
									</span>
								</div>
								<span className="hidden text-xs text-muted-foreground tabular-nums lg:block">
									{review.when}
								</span>
								<Badge variant="outline" className={cn("font-normal", tones[review.due])}>
									{review.due}
								</Badge>
								<RowMenu items={["Open", "Snooze a week", "Reassign"]} className="max-md:hidden" />
							</li>
						))}
					</ul>
				</section>
				<aside className="hidden w-80 shrink-0 flex-col gap-5 overflow-y-auto p-5 lg:flex xl:w-96">
					<div className="flex flex-col gap-1">
						<span className="text-xs text-muted-foreground">Yearly review · due today</span>
						<h2 className="text-lg leading-tight">{selected.project}</h2>
					</div>
					<dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
						{facts.map(([label, value]) => (
							<div key={label} className="contents">
								<dt className="text-muted-foreground">{label}</dt>
								<dd className="text-right">{value}</dd>
							</div>
						))}
					</dl>
					<Separator />
					<div className="flex flex-col gap-2">
						<div className="flex items-baseline justify-between text-sm">
							<span className="text-muted-foreground">Response time, last 12 months</span>
							<span className="font-medium tabular-nums">182 ms</span>
						</div>
						<Sparkline
							data={[240, 236, 251, 228, 230, 214, 221, 203, 198, 190, 187, 182]}
							className="h-10 w-full"
						/>
					</div>
					<div className="flex flex-col gap-2 text-sm">
						<span className="text-muted-foreground">From last year's review</span>
						<p className="leading-relaxed">
							“Move session storage off the old Redis box before the next review. Northwind wants SSO in
							2026.”
						</p>
					</div>
					<div className="mt-auto flex gap-2">
						<Button className="flex-1">Start review</Button>
						<Button variant="outline">Snooze</Button>
					</div>
				</aside>
			</div>
		</AppShell>
	)
}
