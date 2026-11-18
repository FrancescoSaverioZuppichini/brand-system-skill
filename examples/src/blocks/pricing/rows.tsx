import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { plans } from "@/demo/content"
import { pitch } from "@/demo/plan"

export default function PricingRows() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-4">
				<span className="text-sm text-muted-foreground">Pricing</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Three plans, one line each</h2>
				<p className="text-lg text-muted-foreground">
					Prices per member, per month. Switch plans whenever you like.
				</p>
			</div>
			<ul className="flex flex-col divide-y border-y">
				{plans.map((plan, index) => (
					<li
						key={plan.name}
						className="grid gap-5 py-8 md:grid-cols-[1.4fr_1fr_1.4fr_auto] md:items-center md:gap-8"
					>
						<div className="flex flex-col gap-1">
							<h3 className="text-xl">{plan.name}</h3>
							<p className="text-sm text-muted-foreground">{pitch[plan.name].line}</p>
						</div>
						<div className="flex flex-col gap-0.5">
							<span className="font-heading text-3xl font-semibold tabular-nums">${plan.price}</span>
							<span className="text-sm text-muted-foreground">{plan.unit}</span>
						</div>
						<ul className="flex flex-col gap-2 text-sm">
							{plan.features.slice(0, 3).map((feature) => (
								<li key={feature} className="flex items-center gap-2">
									<Check className="size-4 shrink-0" />
									{feature}
								</li>
							))}
						</ul>
						<Button variant={index === 1 ? "default" : "outline"} className="md:w-40">
							{pitch[plan.name].action}
						</Button>
					</li>
				))}
			</ul>
		</section>
	)
}
