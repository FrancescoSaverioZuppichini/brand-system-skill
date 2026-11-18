import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { days, event } from "@/demo/schedule"

export default function EventsDayTabs() {
	return (
		<section className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex flex-col items-center gap-3 text-center">
				<p className="text-sm text-muted-foreground">
					{event.name} · {event.place}
				</p>
				<h2 className="text-3xl leading-tight md:text-4xl">Three days, one project</h2>
				<p className="max-w-xl text-muted-foreground">
					Plan on Wednesday, ship on Thursday, look after it on Friday. {event.dates}.
				</p>
			</div>
			<Tabs defaultValue={days[0].name} className="gap-6">
				<TabsList className="h-10 w-full self-center sm:w-fit">
					{days.map((day) => (
						<TabsTrigger key={day.name} value={day.name} className="sm:px-5">
							{day.date.split(" ").slice(0, 2).join(" ")}
							<span className="hidden text-muted-foreground sm:inline">· {day.name}</span>
						</TabsTrigger>
					))}
				</TabsList>
				{days.map((day) => (
					<TabsContent key={day.name} value={day.name}>
						<ol className="flex flex-col border-b">
							{day.sessions.map((session) => (
								<li
									key={session.title}
									className="flex flex-col gap-1 border-t py-4 sm:grid sm:grid-cols-[7rem_1fr_auto] sm:items-baseline sm:gap-6"
								>
									<time className="font-mono text-sm text-muted-foreground">
										{session.start}–{session.end}
									</time>
									<div className="flex flex-col gap-0.5">
										<h3 className="text-base leading-snug">{session.title}</h3>
										<span className="text-sm text-muted-foreground">{session.speaker}</span>
									</div>
									<Badge variant="outline" className="mt-1 font-normal sm:mt-0">
										{session.track}
									</Badge>
								</li>
							))}
						</ol>
					</TabsContent>
				))}
			</Tabs>
		</section>
	)
}
