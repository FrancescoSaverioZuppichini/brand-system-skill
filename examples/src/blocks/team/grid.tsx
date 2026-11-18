import { Photo } from "@/demo/photo"
import { team } from "@/demo/team"

const cities = new Set(team.map((person) => person.city)).size

export default function TeamGrid() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-3">
				<p className="text-sm text-muted-foreground">Team</p>
				<h2 className="text-3xl leading-tight md:text-4xl">The people who look after Keep</h2>
				<p className="text-muted-foreground">
					{team.length} of us in {cities} cities. We meet twice a year in Lisbon and most of us have been here
					longer than three years.
				</p>
			</div>
			<div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">
				{team.slice(0, 8).map((person) => (
					<div key={person.name} className="flex flex-col gap-1">
						<Photo scene="person" className="mb-2 aspect-[4/5] rounded-lg" />
						<h3 className="text-base leading-snug">{person.name}</h3>
						<span className="text-sm text-muted-foreground">{person.role}</span>
					</div>
				))}
			</div>
		</section>
	)
}
