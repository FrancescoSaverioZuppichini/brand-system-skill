import { stats } from "@/demo/content"

const explained = [
	"Shipped projects with a named owner and a review date, counted on 1 November 2026.",
	"Releases shipped on or before their planned date over the last twelve months.",
	"Half of all projects in care are older than this. The oldest started in 2019.",
	"Paying teams of 2 to 40 people, in 28 countries.",
]

export default function StatsRuled() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<h2 className="max-w-2xl text-3xl leading-tight md:text-4xl">What happens to projects kept in Keep</h2>
			<dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8">
				{stats.map((item, index) => (
					<div key={item.label} className="flex flex-col gap-2 border-t pt-5">
						<dd className="font-heading text-4xl leading-none tabular-nums md:text-5xl">{item.value}</dd>
						<dt className="text-sm font-medium">{item.label}</dt>
						<p className="text-sm text-muted-foreground">{explained[index]}</p>
					</div>
				))}
			</dl>
		</section>
	)
}
