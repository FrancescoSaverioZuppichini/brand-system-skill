import { ArrowRight, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Status } from "@/demo/content"
import { Stepper } from "@/demo/stepper"
import { StatusBadge } from "@/demo/table"
import { allProjects } from "@/demo/workspace"
import { cn } from "@/lib/utils"

const parts = [
	{ label: "Fields", note: "6 mapped", done: true },
	{ label: "Statuses", note: "5 to map", done: false },
	{ label: "People", note: "8 matched", done: true },
]

// [Agent] The twelve Linear projects are the twelve in workspace.ts, so the counts per Keep status (3 planning,
// 4 shipping, 4 in care, 1 paused) are the workspace's own.
const statuses: { linear: string; keep: Status; projects: number }[] = [
	{ linear: "Backlog", keep: "Planning", projects: 1 },
	{ linear: "Planned", keep: "Planning", projects: 2 },
	{ linear: "Started", keep: "Shipping", projects: 4 },
	{ linear: "Paused", keep: "Paused", projects: 1 },
	{ linear: "Completed", keep: "In care", projects: 4 },
]

function Mapping() {
	return (
		<div className="flex flex-col gap-5 rounded-lg border bg-card p-4 md:p-6">
			<div className="flex flex-col gap-1">
				<h1 className="text-xl leading-tight">Map Linear statuses</h1>
				<p className="text-sm text-muted-foreground">
					Each Linear status becomes one Keep status. Completed projects move into care with a yearly review.
				</p>
			</div>
			<div className="flex flex-col divide-y rounded-md border">
				<div className="hidden grid-cols-[1fr_2rem_1fr_5rem] gap-3 px-4 py-2 text-xs text-muted-foreground sm:grid">
					<span>In Linear</span>
					<span />
					<span>In Keep</span>
					<span className="text-right">Projects</span>
				</div>
				{statuses.map((status) => (
					<div
						key={status.linear}
						className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2 px-4 py-3 text-sm sm:grid-cols-[1fr_2rem_1fr_5rem]"
					>
						<span className="row-start-1 font-medium">{status.linear}</span>
						<ArrowRight className="hidden size-4 text-muted-foreground sm:block" />
						<Select defaultValue={status.keep}>
							<SelectTrigger className="col-span-2 w-full sm:col-span-1">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{["Planning", "Shipping", "In care", "Paused"].map((keep) => (
									<SelectItem key={keep} value={keep}>
										{keep}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<span className="col-start-2 row-start-1 text-right text-sm text-muted-foreground tabular-nums sm:col-start-4">
							{status.projects}
						</span>
					</div>
				))}
			</div>
			<div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
				{allProjects.length} projects will arrive as
				{(["Planning", "Shipping", "In care", "Paused"] as Status[]).map((keep) => (
					<span key={keep} className="flex items-center gap-1">
						{allProjects.filter((project) => project.status === keep).length}
						<StatusBadge status={keep} />
					</span>
				))}
			</div>
		</div>
	)
}

export default function OverlaysFullscreen() {
	return (
		<div role="dialog" aria-label="Import from Linear" className="flex h-[760px] flex-col bg-background">
			<header className="grid shrink-0 grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 border-b px-4 py-3 md:grid-cols-[1fr_auto_1fr] md:px-6">
				<div className="flex items-center gap-2">
					<Button variant="ghost" size="icon-sm" aria-label="Close import">
						<X />
					</Button>
					<span className="font-medium">Import from Linear</span>
				</div>
				<Stepper
					steps={["Connect", "Map", "Review"]}
					current={1}
					className="col-span-2 row-start-2 justify-self-center md:col-span-1 md:col-start-2 md:row-start-1 md:w-80"
				/>
				<Button className="justify-self-end">Continue to review</Button>
			</header>
			<div className="flex min-h-0 flex-1">
				<nav className="hidden w-60 shrink-0 flex-col gap-1 border-r p-4 text-sm md:flex">
					<span className="px-2 pb-2 text-xs text-muted-foreground">Halden on Linear · 12 projects</span>
					{parts.map((part) => (
						<span
							key={part.label}
							className={cn(
								"flex items-center gap-2 rounded-md px-2 py-1.5",
								!part.done && "bg-accent font-medium text-accent-foreground",
							)}
						>
							{part.done ? (
								<Check className="size-4 text-chart-2" />
							) : (
								<span className="size-4 rounded-full border-2 border-primary" />
							)}
							{part.label}
							<span className="ml-auto text-xs font-normal text-muted-foreground">{part.note}</span>
						</span>
					))}
				</nav>
				<main className="min-w-0 flex-1 overflow-y-auto bg-muted/40 p-4 md:p-10">
					<div className="mx-auto max-w-2xl">
						<Mapping />
					</div>
				</main>
			</div>
		</div>
	)
}
