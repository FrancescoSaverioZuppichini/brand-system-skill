import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { plans } from "@/demo/content"
import { PlanCard } from "@/demo/plan"

const enterprise = [
	"Everything in Studio",
	"SCIM provisioning",
	"99.9% uptime SLA",
	"Invoices and purchase orders",
	"Security review and DPA",
]

export default function PricingFour() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm text-muted-foreground">Pricing</span>
				<h2 className="text-3xl leading-tight md:text-5xl">From one side project to the whole company</h2>
				<p className="text-lg text-muted-foreground">
					Three self-serve plans, and Enterprise when you need a contract.
				</p>
			</div>
			<div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
				{plans.map((plan, index) => (
					<PlanCard key={plan.name} plan={plan} featured={index === 1} />
				))}
				<Card className="gap-5 px-6">
					<span className="text-sm font-medium text-muted-foreground">Enterprise</span>
					<div className="flex flex-col gap-1">
						<span className="font-heading text-4xl font-semibold">Custom</span>
						<span className="text-sm text-muted-foreground">yearly contract, from 50 members</span>
					</div>
					<p className="text-sm">For companies with procurement, compliance and an IT team.</p>
					<Button variant="outline">Talk to us</Button>
					<ul className="flex flex-col gap-2.5 border-t pt-5 text-sm">
						{enterprise.map((item) => (
							<li key={item} className="flex items-center gap-2">
								<Check className="size-4 shrink-0" />
								{item}
							</li>
						))}
					</ul>
				</Card>
			</div>
		</section>
	)
}
