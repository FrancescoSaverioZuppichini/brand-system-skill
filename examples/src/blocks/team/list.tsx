import { team } from "@/demo/team"

export default function TeamList() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-3">
				<p className="text-sm text-muted-foreground">Team</p>
				<h2 className="text-3xl leading-tight md:text-4xl">Everyone who builds Keep</h2>
				<p className="text-muted-foreground">
					{team.length} people, listed in the order they joined. Every release note credits the people who
					made it.
				</p>
			</div>
			<ul className="grid gap-x-8 md:grid-cols-3">
				{team.map((person) => (
					<li key={person.name} className="flex flex-col border-t py-3">
						<span className="font-medium">{person.name}</span>
						<span className="text-sm text-muted-foreground">
							{person.role} · {person.city}
						</span>
					</li>
				))}
			</ul>
		</section>
	)
}
