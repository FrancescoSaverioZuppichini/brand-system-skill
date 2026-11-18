import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Photo } from "@/demo/photo"
import { departments, team } from "@/demo/team"

const filters = ["All", ...departments]

export default function TeamFilter() {
	const [filter, setFilter] = useState("All")
	const people = filter === "All" ? team : team.filter((person) => person.department === filter)
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:px-8 md:py-24">
			<h2 className="text-3xl leading-tight md:text-4xl">Meet the team</h2>
			<ToggleGroup
				type="single"
				variant="outline"
				spacing={2}
				value={filter}
				onValueChange={(value) => value && setFilter(value)}
				className="flex-wrap"
			>
				{filters.map((name) => (
					<ToggleGroupItem
						key={name}
						value={name}
						className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
					>
						{name}
						<span className="text-xs opacity-60">
							{name === "All" ? team.length : team.filter((person) => person.department === name).length}
						</span>
					</ToggleGroupItem>
				))}
			</ToggleGroup>
			<div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 lg:grid-cols-6">
				{people.map((person) => (
					<div key={person.name} className="flex flex-col gap-0.5">
						<Photo scene="person" className="mb-2 aspect-square rounded-lg" />
						<h3 className="text-sm leading-snug">{person.name}</h3>
						<span className="text-sm text-muted-foreground">{person.role}</span>
					</div>
				))}
			</div>
		</section>
	)
}
