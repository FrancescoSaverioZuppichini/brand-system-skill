import { plans } from "@/demo/content"
import { PlanCard } from "@/demo/plan"

export default function PricingThree() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm text-muted-foreground">Pricing</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Pay for people, not projects</h2>
				<p className="text-lg text-muted-foreground">
					Team and Studio include unlimited projects. Starter is free for three, with no time limit.
				</p>
			</div>
			<div className="mx-auto grid w-full max-w-5xl items-start gap-6 md:grid-cols-3">
				{plans.map((plan, index) => (
					<PlanCard
						key={plan.name}
						plan={plan}
						featured={index === 1}
						className={index === 1 ? "-order-1 md:order-none" : ""}
					/>
				))}
			</div>
		</section>
	)
}
