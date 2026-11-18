import { people } from "@/demo/content"
import { Photo } from "@/demo/photo"
import { Stars } from "@/demo/quotes"

const author = people[2]

const results = [
	{ value: "38", label: "projects in care" },
	{ value: "2020", label: "oldest one, still running" },
]

export default function TestimonialsPhotoSplit() {
	return (
		<section className="bg-muted">
			<div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
				<Photo
					scene="person"
					label={`${author.name}, Fieldnote studio`}
					className="aspect-[4/3] rounded-xl md:aspect-[4/5]"
				/>
				<figure className="flex flex-col gap-6">
					<Stars />
					<blockquote className="font-heading text-2xl leading-snug md:text-3xl">
						I sold Fieldnote's first product in 2020. It still runs, and I can tell you who looks after it and
						when it was last checked.
					</blockquote>
					<figcaption className="flex flex-col">
						<span className="font-medium">{author.name}</span>
						<span className="text-sm text-muted-foreground">{author.role}</span>
					</figcaption>
					<dl className="grid grid-cols-2 gap-6 border-t pt-6">
						{results.map((result) => (
							<div key={result.label} className="flex flex-col gap-1">
								<dt className="order-last text-sm text-muted-foreground">{result.label}</dt>
								<dd className="font-heading text-3xl font-semibold tabular-nums md:text-4xl">
									{result.value}
								</dd>
							</div>
						))}
					</dl>
				</figure>
			</div>
		</section>
	)
}
