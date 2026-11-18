import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { CustomerLogo } from "@/demo/logo"

// [Agent] Each result is one measured change with its period, and the logo index is the customer it belongs to in
// content.ts (0 Northwind, 1 Halden, 2 Ostra, 3 Fieldnote), so the numbers match the case studies elsewhere.
const results = [
	{ customer: 1, value: "12", line: "client sites in care since 2021, none of them rewritten" },
	{ customer: 0, value: "98%", line: "of releases on time over 18 months, up from 71%" },
	{ customer: 3, value: "14", line: "hardware and firmware releases for one launch, each reviewed" },
	{ customer: 2, value: "6 h", line: "of release meetings saved a month once checklists replaced them" },
]

export default function LogosResultCards() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-4">
				<span className="text-sm font-medium text-muted-foreground">Customers</span>
				<h2 className="text-3xl leading-tight md:text-4xl">What changed after they moved to Keep</h2>
				<p className="text-muted-foreground">Four teams, four numbers they measured themselves.</p>
			</div>
			<div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-2 md:px-0 lg:grid-cols-4">
				{results.map((result) => (
					<Card key={result.customer} className="w-64 shrink-0 gap-3 px-5 md:w-auto">
						<CustomerLogo index={result.customer} className="text-base" />
						<span className="mt-3 font-heading text-4xl leading-none tabular-nums">{result.value}</span>
						<p className="text-sm text-muted-foreground">{result.line}</p>
						<a href="#top" className="mt-auto flex items-center gap-1 pt-3 text-sm font-medium">
							Read the case study <ArrowRight className="size-4" />
						</a>
					</Card>
				))}
			</div>
		</section>
	)
}
