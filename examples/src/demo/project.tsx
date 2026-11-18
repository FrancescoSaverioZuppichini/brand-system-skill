import { Sparkline } from "@/demo/chart"
import { Person, StatusBadge } from "@/demo/table"
import { cn } from "@/lib/utils"

const scope = [
	"Email first, team later at sign-up",
	"Import from Linear and Jira",
	"A sample project for new teams",
]

// [Agent] Two more states of one project's life (the plan and the care page), frameless like ReleaseChecklist, so the
// steps and CTA blocks can show plan → ship → care without reusing the hero's AppWindow.
export function ProjectPlan({ className }: { className?: string }) {
	return (
		<div className={cn("flex flex-col gap-4 p-4 text-xs", className)}>
			<div className="flex items-center justify-between gap-2">
				<span className="text-base font-semibold">Onboarding v3</span>
				<StatusBadge status="Planning" />
			</div>
			<div className="grid grid-cols-[5rem_1fr] items-center gap-y-2.5">
				<span className="text-muted-foreground">Owner</span>
				<Person name="Mei Okafor" />
				<span className="text-muted-foreground">Reviewer</span>
				<Person name="Jonas Lind" />
				<span className="text-muted-foreground">Ships</span>
				<span>3 February</span>
			</div>
			<div className="flex flex-col gap-2 border-t pt-3">
				<span className="text-muted-foreground">Scope</span>
				<ol className="flex flex-col gap-1.5">
					{scope.map((item, index) => (
						<li key={item} className="flex gap-2">
							<span className="font-mono text-muted-foreground">{index + 1}.</span>
							{item}
						</li>
					))}
				</ol>
			</div>
		</div>
	)
}

const checks = [
	{ label: "Uptime, 30 days", value: "99.98%", ok: true },
	{ label: "Dependencies", value: "2 updates", ok: false },
	{ label: "Error rate", value: "0.02%", ok: true },
]

export function ProjectCare({ className }: { className?: string }) {
	return (
		<div className={cn("flex flex-col gap-4 p-4 text-xs", className)}>
			<div className="flex items-center justify-between gap-2">
				<span className="text-base font-semibold">Customer portal</span>
				<StatusBadge status="In care" />
			</div>
			<div className="flex items-center justify-between gap-2 text-muted-foreground">
				<Person name="Tomás Berg" className="text-foreground" />
				<span>In care since 2023</span>
			</div>
			<div className="flex items-end justify-between gap-4 rounded-md border p-3">
				<div className="flex flex-col gap-0.5">
					<span className="text-muted-foreground">Weekly visits</span>
					<span className="text-lg font-semibold tabular-nums">18,240</span>
				</div>
				<Sparkline />
			</div>
			<div className="flex flex-col divide-y rounded-md border">
				{checks.map((check) => (
					<span key={check.label} className="flex items-center gap-2 px-3 py-2">
						<span className={cn("size-1.5 rounded-full", check.ok ? "bg-chart-2" : "bg-chart-3")} />
						{check.label}
						<span className="ml-auto font-mono tabular-nums">{check.value}</span>
					</span>
				))}
			</div>
			<span className="text-muted-foreground">Next review · 18 Nov 2027</span>
		</div>
	)
}
