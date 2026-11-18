import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { CustomerLogo } from "@/demo/logo"
import { Photo } from "@/demo/photo"

// [Agent] `logo` indexes customers in content.ts, so the wordmark and the story name the same company.
const cases = [
	{
		logo: 1,
		result: "0 rewrites",
		line: "of anything Halden has shipped since 2021, across 64 client projects.",
		href: "/customers/halden",
		scene: "place" as const,
	},
	{
		logo: 0,
		result: "3 days",
		line: "from plan sign-off to release at Northwind, down from 12 before checklists.",
		href: "/customers/northwind",
		scene: "object" as const,
	},
	{
		logo: 3,
		result: "38 projects",
		line: "in care at Fieldnote, each with an owner and a review date.",
		href: "/customers/fieldnote",
		scene: "person" as const,
	},
]

export default function TestimonialsCaseStudies() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-4">
				<span className="text-sm text-muted-foreground">Customers</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Teams like yours, a few years in</h2>
				<p className="text-lg text-muted-foreground">
					Three studios and product teams on what changed after they moved to Keep.
				</p>
			</div>
			<div className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:px-0">
				{cases.map((item) => (
					<Card key={item.href} className="w-[80%] shrink-0 snap-start gap-4 p-4 md:w-auto">
						<Photo scene={item.scene} className="aspect-[16/10] rounded-md" />
						<CustomerLogo index={item.logo} className="text-base" />
						<span className="font-heading text-4xl font-semibold tabular-nums">{item.result}</span>
						<p className="flex-1 text-muted-foreground">{item.line}</p>
						<a href={item.href} className="flex items-center gap-1.5 text-sm font-medium hover:underline">
							Read the story <ArrowRight className="size-4" />
						</a>
					</Card>
				))}
			</div>
		</section>
	)
}
