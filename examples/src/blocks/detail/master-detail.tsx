import { Check, Circle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppShell, RowMenu } from "@/demo/app-nav"
import { ReleaseBadge, releases } from "@/demo/workspace"
import { cn } from "@/lib/utils"

const selected = releases[0]

const checks = [
	{ label: "Changelog written", by: "Ana Ruiz · 16 Nov", done: true },
	{ label: "Migration tested on a copy of live", by: "Tomás Berg · 17 Nov", done: true },
	{ label: "Owner signed off", by: "Ana Ruiz · today", done: true },
	{ label: "Care date set", by: "Pick the first review date", done: false },
	{ label: "Client notified", by: "Northwind expects a note 2 days ahead", done: false },
]

const changes = [
	"Live accounts move to the new invoice model in batches of 200.",
	"Refunds older than 2019 keep their original tax lines.",
	"The old invoice tables become read-only and stay for 12 months.",
]

// [Agent] On a phone the list is the whole screen; the record is a second screen with a back arrow, so it is not
// rendered below md rather than squeezed under the list.
export default function DetailMasterDetail() {
	return (
		<AppShell active="Releases" crumbs={["Releases", `${selected.project} ${selected.version}`]}>
			<div className="flex h-full">
				<section className="flex w-full flex-col border-r md:w-80 md:shrink-0">
					<div className="border-b p-3">
						<InputGroup>
							<InputGroupAddon>
								<Search />
							</InputGroupAddon>
							<InputGroupInput placeholder="Search releases" />
						</InputGroup>
					</div>
					<ul className="min-h-0 flex-1 divide-y overflow-y-auto">
						{releases.map((release) => (
							<li
								key={release.project}
								className={cn(
									"flex flex-col gap-1 px-4 py-3 text-sm",
									release === selected && "bg-muted md:shadow-[inset_2px_0_0_var(--primary)]",
								)}
							>
								<span className="flex items-center justify-between gap-2">
									<span className="truncate font-medium">
										{release.project} {release.version}
									</span>
									<span className="shrink-0 text-xs text-muted-foreground">{release.day}</span>
								</span>
								<span className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
									{release.checks} of 5 checks
									<ReleaseBadge state={release.state} />
								</span>
							</li>
						))}
					</ul>
				</section>
				<article className="hidden min-w-0 flex-1 flex-col gap-6 overflow-y-auto p-6 md:flex lg:px-10">
					<header className="flex flex-wrap items-start justify-between gap-4">
						<div className="flex flex-col gap-1.5">
							<div className="flex items-center gap-3">
								<h1 className="text-xl leading-tight">
									{selected.project} {selected.version}
								</h1>
								<ReleaseBadge state={selected.state} />
							</div>
							<span className="text-sm text-muted-foreground">
								Opened by {selected.owner} today at {selected.time} · ships to Northwind on 20 Nov
							</span>
						</div>
						<div className="flex items-center gap-2">
							<Button variant="outline" size="sm">
								Notify client
							</Button>
							<Button size="sm">Ship {selected.version}</Button>
							<RowMenu items={["Copy link", "Reschedule", "Cancel release"]} />
						</div>
					</header>
					<Tabs defaultValue="checklist" className="gap-5">
						<TabsList variant="line">
							<TabsTrigger value="checklist">Checklist</TabsTrigger>
							<TabsTrigger value="changes">Changes</TabsTrigger>
							<TabsTrigger value="notes">Notes</TabsTrigger>
						</TabsList>
						<TabsContent value="checklist" className="flex flex-col gap-6">
							<div className="flex items-center gap-3 text-sm">
								<Progress value={60} className="h-1.5 max-w-xs" />
								<span className="text-muted-foreground">3 of 5 · 2 left before shipping</span>
							</div>
							<ul className="flex flex-col divide-y rounded-lg border">
								{checks.map((check) => (
									<li key={check.label} className="flex items-center gap-3 px-4 py-3 text-sm">
										{check.done ? (
											<Check className="size-4 text-chart-2" />
										) : (
											<Circle className="size-4 text-muted-foreground" />
										)}
										<div className="flex min-w-0 flex-1 flex-col">
											<span className={cn(!check.done && "font-medium")}>{check.label}</span>
											<span className="text-xs text-muted-foreground">{check.by}</span>
										</div>
										{!check.done && (
											<Button variant="ghost" size="sm">
												Do it
											</Button>
										)}
									</li>
								))}
							</ul>
							<section className="flex flex-col gap-2">
								<h2 className="text-base leading-tight">What's in {selected.version}</h2>
								<ul className="flex list-disc flex-col gap-1.5 pl-5 text-sm text-muted-foreground">
									{changes.map((change) => (
										<li key={change}>{change}</li>
									))}
								</ul>
							</section>
						</TabsContent>
					</Tabs>
				</article>
			</div>
		</AppShell>
	)
}
