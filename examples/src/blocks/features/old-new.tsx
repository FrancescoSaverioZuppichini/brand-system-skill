import { Check, X } from "lucide-react"

const ways = [
	{
		title: "Today",
		points: [
			"The plan is a doc nobody has opened since kickoff",
			"Releases are decided on a Friday call",
			"Nobody owns the project after launch",
			"A rewrite every two years",
			"The person who knew why has left",
		],
	},
	{
		title: "With Keep",
		points: [
			"One plan page with scope, owners and dates",
			"Each release is a checklist, reviewed and dated",
			"Shipped work moves into care with an owner",
			"The median project in care is 3.2 years old",
			"Every decision is written down where the next person looks",
		],
	},
]

export default function FeaturesOldNew() {
	const [today, keep] = ways
	return (
		<section className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<h2 className="text-3xl leading-tight md:text-5xl">Looking after a project, before and after</h2>
				<p className="text-lg text-muted-foreground">What small teams told us about the year after launch.</p>
			</div>
			<div className="grid gap-4 md:grid-cols-2">
				<div className="flex flex-col gap-5 rounded-xl border bg-card p-6 text-card-foreground md:p-8">
					<h3 className="text-xl">{today.title}</h3>
					<ul className="flex flex-col gap-3">
						{today.points.map((point) => (
							<li key={point} className="flex gap-3 text-muted-foreground">
								<X className="mt-0.5 size-4 shrink-0" /> {point}
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col gap-5 rounded-xl bg-primary p-6 text-primary-foreground md:p-8">
					<h3 className="text-xl">{keep.title}</h3>
					<ul className="flex flex-col gap-3">
						{keep.points.map((point) => (
							<li key={point} className="flex gap-3">
								<Check className="mt-0.5 size-4 shrink-0" /> {point}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
