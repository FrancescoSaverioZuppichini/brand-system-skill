import { notes, Pin, PinnedScreen } from "@/demo/pins"
import { cn } from "@/lib/utils"

function Note({ index, left }: { index: number; left?: boolean }) {
	return (
		<div className={cn("flex gap-4", left && "lg:flex-row-reverse lg:text-right")}>
			<Pin n={index + 1} />
			<div className="flex flex-col gap-1">
				<h3 className="text-base leading-snug">{notes[index].title}</h3>
				<p className="text-sm text-muted-foreground">{notes[index].text}</p>
			</div>
		</div>
	)
}

// [Agent] The screen comes first in the markup so phones read it before the four notes; from lg up the grid puts it in
// the middle column with pins 1–2 (left half of the screen) on the left and 3–4 on the right.
export default function ShowcaseSideNotes() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<h2 className="text-3xl leading-tight md:text-5xl">One screen, both edges working</h2>
				<p className="text-lg text-muted-foreground">
					The numbers sit on the left, search and the trend on the right.
				</p>
			</div>
			<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)] lg:items-center">
				<PinnedScreen pins={4} className="lg:col-start-2 lg:row-start-1" />
				<div className="flex flex-col gap-8 lg:col-start-1 lg:row-start-1">
					<Note index={0} left />
					<Note index={1} left />
				</div>
				<div className="flex flex-col gap-8 lg:col-start-3 lg:row-start-1">
					<Note index={2} />
					<Note index={3} />
				</div>
			</div>
		</section>
	)
}
