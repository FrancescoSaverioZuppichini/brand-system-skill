import { Check, ChevronRight, Circle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { projects } from "@/demo/content"
import { StatusBadge } from "@/demo/table"
import { cn } from "@/lib/utils"

// [Agent] Two real states of Keep's phone app, for heroes, showcases and the mobile blocks: never the same screen twice.
export function ProjectList() {
	return (
		<div className="flex flex-col gap-3 p-4 text-xs">
			<div className="flex items-baseline justify-between">
				<span className="text-base font-semibold">Projects</span>
				<span className="text-muted-foreground">5 active</span>
			</div>
			{projects.map((project) => (
				<div key={project.name} className="flex flex-col gap-2 rounded-lg border bg-card p-3">
					<div className="flex items-center justify-between gap-2">
						<span className="truncate font-medium">{project.name}</span>
						<ChevronRight className="size-3.5 shrink-0 text-muted-foreground" />
					</div>
					<div className="flex items-center justify-between gap-2">
						<StatusBadge status={project.status} />
						<Progress value={project.progress} className="h-1 w-16" />
					</div>
				</div>
			))}
		</div>
	)
}

const checks = [
	{ label: "Changelog written", done: true },
	{ label: "Migration tested", done: true },
	{ label: "Owner signed off", done: true },
	{ label: "Care date set", done: false },
	{ label: "Client notified", done: false },
]

export function ReleaseChecklist() {
	return (
		<div className="flex flex-col gap-3 p-4 text-xs">
			<span className="text-muted-foreground">Billing rewrite</span>
			<span className="text-base font-semibold">Release 1.4</span>
			<Progress value={60} className="h-1.5" />
			<span className="text-muted-foreground">3 of 5 checks</span>
			<div className="flex flex-col divide-y rounded-lg border bg-card">
				{checks.map((check) => (
					<span
						key={check.label}
						className={cn("flex items-center gap-2 p-3", !check.done && "text-muted-foreground")}
					>
						{check.done ? <Check className="size-3.5 text-chart-2" /> : <Circle className="size-3.5" />}
						{check.label}
					</span>
				))}
			</div>
		</div>
	)
}
