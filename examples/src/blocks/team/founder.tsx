import { Photo } from "@/demo/photo"

export default function TeamFounder() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[5fr_6fr] md:gap-16 md:px-8 md:py-24">
			<Photo
				scene="person"
				label="Hanna Vogel, Lisbon 2026"
				className="aspect-[4/3] rounded-xl md:aspect-[4/5]"
			/>
			<div className="flex flex-col gap-5">
				<p className="text-sm text-muted-foreground">Why Keep exists</p>
				<h2 className="text-3xl leading-tight md:text-4xl">Our best work kept disappearing</h2>
				<div className="flex flex-col gap-4 text-lg leading-relaxed">
					<p>
						In 2019 I counted the projects my old studio had shipped in ten years. There were 61, and eleven
						were still running. The rest had not failed. They had been left: nobody owned them after launch,
						so nobody noticed when they started to rot.
					</p>
					<p>
						Keep is the tool I wanted then. It treats shipping as the middle of a project and gives every
						finished thing an owner, a monthly check and a yearly review. It is small on purpose, and it will
						stay that way.
					</p>
					<p>
						Today 1,284 projects are in care with Keep. I would like that number to grow slowly, and every one
						of them to still be running in 2030.
					</p>
				</div>
				<div className="flex flex-col gap-1 pt-2">
					<span className="font-heading text-2xl italic">Hanna Vogel</span>
					<span className="text-sm text-muted-foreground">Founder, Keep · Lisbon, November 2026</span>
				</div>
			</div>
		</section>
	)
}
