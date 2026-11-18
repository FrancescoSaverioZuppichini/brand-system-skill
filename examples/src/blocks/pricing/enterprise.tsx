import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const terms = [
	"SAML SSO and SCIM provisioning",
	"99.9% uptime SLA with service credits",
	"Yearly invoice, purchase orders accepted",
	"DPA, security review and EU-only hosting",
]

// [Agent] The band inverts the page (foreground as background) so it reads as the dark band in light styles and a light
// one in dark styles; the buttons invert with it.
export default function PricingEnterprise() {
	return (
		<section className="bg-foreground text-background">
			<div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
				<div className="flex flex-col gap-4">
					<span className="text-sm text-background/70">Enterprise</span>
					<h2 className="text-3xl leading-tight md:text-5xl">Keep for the whole company</h2>
					<p className="text-lg text-background/70">
						For 50 members or more, with procurement and an IT team to satisfy. A yearly contract, priced on
						your seats, with a person who knows your setup.
					</p>
				</div>
				<div className="flex flex-col gap-8">
					<ul className="flex flex-col gap-4">
						{terms.map((term) => (
							<li key={term} className="flex items-center gap-3">
								<Check className="size-5 shrink-0" />
								{term}
							</li>
						))}
					</ul>
					<div className="flex flex-col gap-3 sm:flex-row">
						<Button size="lg" className="bg-background text-foreground hover:bg-background/90">
							Talk to sales
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-background/40 bg-transparent text-background hover:bg-background/10 hover:text-background"
						>
							Read the security page
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
