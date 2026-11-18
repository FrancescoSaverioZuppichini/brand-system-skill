import { Badge } from "@/components/ui/badge"

const sessions = [
	{
		time: "18:00",
		title: "Doors open: coffee and plans on the wall",
		speaker: "Keep Berlin team",
		format: "Break",
	},
	{
		time: "18:30",
		title: "Our first year with a care schedule",
		speaker: "Lukas Brandt, Keep",
		format: "Talk",
	},
	{
		time: "19:00",
		title: "Twelve client sites, one owner each",
		speaker: "Ana Ruiz, Halden",
		format: "Talk",
	},
	{
		time: "19:30",
		title: "What broke this year, in five minutes each",
		speaker: "Five speakers",
		format: "Lightning",
	},
	{
		time: "20:00",
		title: "Bring your plan: an open review",
		speaker: "Matteo Ricci, Keep",
		format: "Clinic",
	},
	{ time: "20:45", title: "Drinks in the courtyard", speaker: "Until 22:00", format: "Break" },
]

export default function EventsRuled() {
	return (
		<section className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex flex-col gap-3">
				<p className="text-sm text-muted-foreground">Keep evening · Berlin</p>
				<h2 className="text-3xl leading-tight md:text-4xl">Thursday 26 November</h2>
				<p className="text-muted-foreground">
					One room, four sessions, free with any Keep account. Torstraße 118, doors at 18:00.
				</p>
			</div>
			<ol className="flex flex-col border-b">
				{sessions.map((session) => (
					<li
						key={session.time}
						className="flex flex-col gap-1 border-t py-5 sm:grid sm:grid-cols-[5rem_1fr_auto] sm:items-baseline sm:gap-6"
					>
						<time className="font-mono text-sm text-muted-foreground">{session.time}</time>
						<div className="flex flex-col gap-1">
							<h3 className="text-lg leading-snug">{session.title}</h3>
							<span className="text-sm text-muted-foreground">{session.speaker}</span>
						</div>
						<Badge variant="outline" className="mt-1 font-normal sm:mt-0">
							{session.format}
						</Badge>
					</li>
				))}
			</ol>
		</section>
	)
}
