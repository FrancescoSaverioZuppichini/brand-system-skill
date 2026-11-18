import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Photo } from "@/demo/photo"
import { team } from "@/demo/team"

const cities = new Set(team.map((person) => person.city)).size
const shown = 8

export default function TeamHiring() {
	return (
		<section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-16 text-center md:py-24">
			{/* [Agent] Faces overlap with a ring in the page colour so each circle reads as separate in every style; the
			    count chip says how many more there are instead of drawing all 24. */}
			<div className="flex items-center -space-x-2">
				{team.slice(0, shown).map((person) => (
					<Photo
						key={person.name}
						scene="person"
						className="size-9 rounded-full ring-2 ring-background md:size-12"
					/>
				))}
				<span className="flex size-9 items-center justify-center rounded-full bg-muted text-xs font-medium ring-2 ring-background md:size-12 md:text-sm">
					+{team.length - shown}
				</span>
			</div>
			<h2 className="text-3xl leading-tight md:text-4xl">
				{team.length} people in {cities} cities, building Keep slowly
			</h2>
			<p className="max-w-xl text-lg text-muted-foreground">
				We are hiring a care engineer, a product designer and a support writer. Remote within three hours of
				Lisbon.
			</p>
			<Button size="lg" className="w-full sm:w-auto">
				See 3 open roles <ArrowRight />
			</Button>
		</section>
	)
}
