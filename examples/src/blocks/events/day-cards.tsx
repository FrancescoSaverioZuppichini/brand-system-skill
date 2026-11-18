import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { days, event } from "@/demo/schedule"

export default function EventsDayCards() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-3">
				<p className="text-sm text-muted-foreground">
					{event.name} · {event.place} · {event.dates}
				</p>
				<h2 className="text-3xl leading-tight md:text-4xl">Plan, ship, care: a day for each</h2>
				<p className="text-muted-foreground">
					Four highlights a day. The full schedule has every room and slot.
				</p>
			</div>
			<div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:px-0">
				{days.map((day, index) => (
					<Card key={day.name} className="w-[82%] shrink-0 gap-0 p-0 md:w-auto">
						<div className="flex items-baseline justify-between gap-2 border-b p-5">
							<h3 className="text-xl leading-tight">
								Day {index + 1} · {day.name}
							</h3>
							<span className="text-sm text-muted-foreground">{day.date}</span>
						</div>
						<ol className="flex flex-col gap-4 p-5">
							{day.sessions.slice(0, 4).map((session) => (
								<li key={session.title} className="flex flex-col gap-0.5">
									<time className="font-mono text-xs text-muted-foreground">{session.start}</time>
									<span className="font-medium leading-snug">{session.title}</span>
									<span className="text-sm text-muted-foreground">{session.speaker}</span>
								</li>
							))}
						</ol>
					</Card>
				))}
			</div>
			<Button variant="outline" className="w-full sm:w-fit">
				See the full schedule <ArrowRight />
			</Button>
		</section>
	)
}
