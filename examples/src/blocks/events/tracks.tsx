import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { days, event, tracks } from "@/demo/schedule"

const day = days[0]
const first = 9 * 60
const slots = Array.from({ length: 7 }, (_, index) => {
	const minutes = first + index * 30
	return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${minutes % 60 === 0 ? "00" : "30"}`
})

// [Agent] Grid row 1 holds the track names; each half-hour after 09:00 is one more row, so a session spans
// (end - start) / 30 rows and parallel sessions line up by time across the columns.
function row(time: string) {
	const [hours, minutes] = time.split(":").map(Number)
	return (hours * 60 + minutes - first) / 30 + 2
}

export default function EventsTracks() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-3">
				<p className="text-sm text-muted-foreground">
					{event.name} · {day.date} · {day.name}
				</p>
				<h2 className="text-3xl leading-tight md:text-4xl">Three rooms, one morning</h2>
				<p className="text-muted-foreground">
					Talks in the main hall, hands-on workshops, and clinics where you bring your own plan.
				</p>
			</div>
			<div className="hidden grid-cols-[4rem_repeat(3,minmax(0,1fr))] grid-rows-[auto_repeat(7,6rem)] gap-x-3 md:grid">
				{tracks.map((track, index) => (
					<span
						key={track}
						className="pb-3 text-sm font-medium"
						style={{ gridColumn: index + 2, gridRow: 1 }}
					>
						{track}
					</span>
				))}
				{slots.map((slot, index) => (
					<span
						key={slot}
						className="col-span-full border-t pt-2 font-mono text-xs text-muted-foreground"
						style={{ gridRow: index + 2, gridColumnStart: 1 }}
					>
						{slot}
					</span>
				))}
				{day.sessions.map((session) => (
					<div
						key={session.title}
						className="relative my-1.5 flex flex-col gap-0.5 overflow-hidden rounded-md border bg-card p-3 text-sm"
						style={{
							gridColumn: tracks.indexOf(session.track) + 2,
							gridRow: `${row(session.start)} / ${row(session.end)}`,
						}}
					>
						<span className="font-mono text-xs text-muted-foreground">
							{session.start}–{session.end}
						</span>
						<span className="font-medium leading-snug">{session.title}</span>
						<span className="text-muted-foreground">{session.speaker}</span>
					</div>
				))}
			</div>
			{/* [Agent] Phones never get the grid: three columns at 390 px leave each title a few letters wide. */}
			<Tabs defaultValue={tracks[0]} className="gap-4 md:hidden">
				<TabsList className="w-full">
					{tracks.map((track) => (
						<TabsTrigger key={track} value={track}>
							{track}
						</TabsTrigger>
					))}
				</TabsList>
				{tracks.map((track) => (
					<TabsContent key={track} value={track} className="flex flex-col gap-2">
						{day.sessions
							.filter((session) => session.track === track)
							.map((session) => (
								<div
									key={session.title}
									className="flex flex-col gap-1 rounded-md border bg-card p-3 text-sm"
								>
									<span className="font-mono text-xs text-muted-foreground">
										{session.start}–{session.end}
									</span>
									<span className="font-medium">{session.title}</span>
									<span className="text-muted-foreground">{session.speaker}</span>
								</div>
							))}
					</TabsContent>
				))}
			</Tabs>
		</section>
	)
}
