import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { plans } from "@/demo/content"
import { PlanCard } from "@/demo/plan"

// [Agent] Yearly is two months free (10 months for 12), the same discount the FAQ quotes: Team $10, Studio $20.
function yearly(price: number) {
	return (price * 10) / 12
}

export default function PricingToggle() {
	const [billing, setBilling] = useState("yearly")
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm text-muted-foreground">Pricing</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Pay for people, not projects</h2>
				<p className="text-lg text-muted-foreground">
					Monthly or yearly. Switch or cancel whenever you like.
				</p>
			</div>
			<Tabs value={billing} onValueChange={setBilling} className="mx-auto">
				<TabsList className="h-10">
					<TabsTrigger value="monthly" className="px-4">
						Monthly
					</TabsTrigger>
					<TabsTrigger value="yearly" className="px-4">
						Yearly · 2 months free
					</TabsTrigger>
				</TabsList>
			</Tabs>
			<div className="mx-auto grid w-full max-w-5xl items-start gap-6 md:grid-cols-3">
				{plans.map((plan, index) => {
					const discounted = billing === "yearly" && plan.price > 0
					return (
						<PlanCard
							key={plan.name}
							plan={plan}
							featured={index === 1}
							price={discounted ? yearly(plan.price) : plan.price}
							unit={
								discounted ? `per member / month, billed yearly ($${yearly(plan.price) * 12})` : plan.unit
							}
						/>
					)
				})}
			</div>
		</section>
	)
}
