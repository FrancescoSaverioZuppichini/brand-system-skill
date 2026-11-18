import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { plans } from "@/demo/content"

const plan = plans[1]

const included = [
	"Unlimited projects",
	"Release checklists",
	"Care schedules",
	"Health checks",
	"Integrations",
	"Markdown and JSON export",
	"EU hosting, Frankfurt",
	"Daily backups for 30 days",
]

export default function PricingSingle() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm text-muted-foreground">Pricing</span>
				<h2 className="text-3xl leading-tight md:text-5xl">One plan, everything in it</h2>
			</div>
			<Card className="mx-auto w-full max-w-2xl gap-6 px-6 md:px-10 md:py-10">
				<Badge variant="outline" className="self-center">
					{plan.name} plan
				</Badge>
				<div className="flex flex-col items-center gap-1 text-center">
					<span className="font-heading text-5xl font-semibold tabular-nums">${plan.price}</span>
					<span className="text-muted-foreground">{plan.unit}</span>
				</div>
				<p className="text-center">
					Every feature for your whole team. Starter stays free for three projects.
				</p>
				<ul className="grid gap-3 border-t pt-6 sm:grid-cols-2">
					{included.map((item) => (
						<li key={item} className="flex items-center gap-2 text-sm">
							<Check className="size-4 shrink-0" />
							{item}
						</li>
					))}
				</ul>
				<Button size="lg">Start with {plan.name}</Button>
				<span className="text-center text-sm text-muted-foreground">
					Monthly or yearly. Cancel anytime and take everything with you as Markdown.
				</span>
			</Card>
		</section>
	)
}
