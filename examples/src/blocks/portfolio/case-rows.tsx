import { ArrowRight } from "lucide-react"
import { Photo } from "@/demo/photo"
import { cn } from "@/lib/utils"

const cases = [
	{
		client: "Northwind",
		title: "A supplier portal in care for five years",
		story:
			"Tomás Berg's team shipped the portal in 2021 and moved it into care the same month. Five yearly reviews later it has had 41 releases and no rewrite.",
		results: [
			{ value: "41", label: "releases since 2021" },
			{ value: "0", label: "rewrites" },
		],
		scene: "place" as const,
	},
	{
		client: "Halden",
		title: "Twelve client sites on one care schedule",
		story:
			"Ana Ruiz's studio gives every client site an owner and a review month. Clients read their own plan page instead of asking for status.",
		results: [
			{ value: "12", label: "sites in care" },
			{ value: "−60%", label: "status emails" },
		],
		scene: "person" as const,
	},
	{
		client: "Fieldnote",
		title: "Hardware and firmware, planned on one page",
		story:
			"Mei Okafor planned the field kit with one owner per part and shipped it as fourteen reviewed releases, each a checklist the factory could read.",
		results: [
			{ value: "14", label: "releases to launch" },
			{ value: "2 days", label: "late on a 9-month plan" },
		],
		scene: "object" as const,
	},
]

export default function PortfolioCaseRows() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-14 px-4 py-16 md:gap-20 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-3">
				<h2 className="text-3xl leading-tight md:text-4xl">Case studies</h2>
				<p className="text-muted-foreground">Three teams, the numbers they track, and what they changed.</p>
			</div>
			{cases.map((item, index) => (
				<article key={item.client} className="grid items-center gap-6 md:grid-cols-2 md:gap-16">
					{/* [Agent] The photo comes first in the markup so phones always open a row with it; from md every
					    other row moves it to the right. */}
					<Photo
						scene={item.scene}
						className={cn("aspect-[4/3] rounded-xl", index % 2 === 1 && "md:order-last")}
					/>
					<div className="flex flex-col gap-5">
						<span className="text-sm text-muted-foreground">{item.client}</span>
						<h3 className="text-2xl leading-tight md:text-3xl">{item.title}</h3>
						<p className="text-muted-foreground">{item.story}</p>
						<dl className="grid grid-cols-2 gap-6 border-t pt-5">
							{item.results.map((result) => (
								<div key={result.label} className="flex flex-col gap-1">
									<dt className="order-last text-sm text-muted-foreground">{result.label}</dt>
									<dd className="text-3xl font-semibold tabular-nums">{result.value}</dd>
								</div>
							))}
						</dl>
						<a href="#" className="flex items-center gap-1 text-sm font-medium">
							Read the {item.client} story <ArrowRight className="size-4" />
						</a>
					</div>
				</article>
			))}
		</section>
	)
}
