import { notes, Pin, PinnedScreen } from "@/demo/pins"

export default function FeaturesNumberedShot() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<h2 className="text-3xl leading-tight md:text-5xl">Everything you need is on one screen</h2>
				<p className="text-lg text-muted-foreground">
					The projects screen your team opens every morning, and what to look for.
				</p>
			</div>
			<PinnedScreen pins={3} />
			<ol className="grid gap-8 md:grid-cols-3">
				{notes.slice(0, 3).map((note, index) => (
					<li key={note.title} className="flex flex-col gap-3">
						<Pin n={index + 1} />
						<h3 className="text-lg leading-snug">{note.title}</h3>
						<p className="text-sm text-muted-foreground">{note.text}</p>
					</li>
				))}
			</ol>
		</section>
	)
}
