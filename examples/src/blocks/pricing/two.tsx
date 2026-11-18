import { plans } from "@/demo/content"
import { PlanCard } from "@/demo/plan"

export default function PricingTwo() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm text-muted-foreground">Pricing</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Free to start, simple to grow</h2>
				<p className="text-lg text-muted-foreground">
					Try Keep on three projects. Pay when the whole team moves in.
				</p>
			</div>
			<div className="mx-auto grid w-full max-w-3xl items-start gap-6 md:grid-cols-2">
				<PlanCard plan={plans[0]} className="order-last md:order-none" />
				<PlanCard plan={plans[1]} featured />
			</div>
			<p className="text-center text-sm text-muted-foreground">
				Need client spaces, an audit log or SSO? Studio is ${plans[2].price} {plans[2].unit}.
			</p>
		</section>
	)
}
