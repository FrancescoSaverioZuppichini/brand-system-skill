import { Search } from "lucide-react"
import { Person } from "@/demo/table"
import { cn } from "@/lib/utils"

const decisions = [
	{
		title: "Keep Stripe invoices, drop our PDF service",
		why: "The PDF service cost two days every release. Stripe's invoices cover every client we have.",
		by: "Ana Ruiz",
		date: "14 Oct 2026",
	},
	{
		title: "Release every three weeks, not weekly",
		why: "Fewer releases, each one reviewed. Nobody has deployed on a Friday since June.",
		by: "Tomás Berg",
		date: "2 Sep 2026",
	},
	{
		title: "Stay on Postgres",
		why: "One database the next owner already knows. Revisit at the 2027 review.",
		by: "Ana Ruiz",
		date: "19 Jun 2026",
	},
]

// [Agent] The decision log, the "hand it over" job: frameless like ProjectPlan and ProjectCare, so feature blocks can
// show plan → ship → care → hand over as four different screens.
export function Decisions({ className }: { className?: string }) {
	return (
		<div className={cn("flex flex-col gap-4 p-4 text-xs", className)}>
			<div className="flex items-center justify-between gap-2">
				<span className="text-base font-semibold">Decisions</span>
				<span className="text-muted-foreground">Billing rewrite · 46</span>
			</div>
			<span className="flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-muted-foreground">
				<Search className="size-3.5" /> Search decisions
			</span>
			<ol className="flex flex-col divide-y rounded-md border">
				{decisions.map((decision) => (
					<li key={decision.title} className="flex flex-col gap-1.5 p-3">
						<span className="font-medium">{decision.title}</span>
						<span className="leading-relaxed text-muted-foreground">{decision.why}</span>
						<span className="flex items-center justify-between gap-2 text-muted-foreground">
							<Person name={decision.by} className="text-foreground" />
							{decision.date}
						</span>
					</li>
				))}
			</ol>
		</div>
	)
}
