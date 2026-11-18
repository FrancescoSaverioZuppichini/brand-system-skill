import { notes, Pin, PinnedScreen } from "@/demo/pins"

export default function ShowcaseAnnotated() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm font-medium text-muted-foreground">The projects screen</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Every project you keep, at a glance</h2>
				<p className="text-lg text-muted-foreground">What your team sees first thing every morning.</p>
			</div>
			<div className="grid items-center gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
				<PinnedScreen pins={4} />
				<ol className="flex flex-col gap-6">
					{notes.slice(0, 4).map((note, index) => (
						<li key={note.title} className="flex gap-4">
							<Pin n={index + 1} />
							<div className="flex flex-col gap-1">
								<h3 className="text-base leading-snug">{note.title}</h3>
								<p className="text-sm text-muted-foreground">{note.text}</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
