import { Badge } from "@/components/ui/badge"
import { Photo } from "@/demo/photo"
import { Author, posts } from "@/demo/posts"

export default function BlogFeatured() {
	const [lead, ...rest] = posts
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<article className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
				<Photo scene={lead.scene} className="aspect-[16/10] rounded-xl" />
				<div className="flex flex-col items-start gap-4">
					<Badge variant="secondary">{lead.category}</Badge>
					<h2 className="text-3xl leading-tight md:text-4xl">{lead.title}</h2>
					<p className="text-lg text-muted-foreground">{lead.excerpt}</p>
					<Author name={lead.author} meta={`${lead.date} · ${lead.read} read`} />
				</div>
			</article>
			<div className="-mx-4 flex gap-4 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:px-0">
				{rest.slice(0, 3).map((post) => (
					<article key={post.title} className="flex w-72 shrink-0 flex-col gap-2 md:w-auto">
						<Photo scene={post.scene} className="mb-2 aspect-[4/3] rounded-lg" />
						<span className="text-sm text-muted-foreground">
							{post.category} · {post.date}
						</span>
						<h3 className="text-lg leading-snug">{post.title}</h3>
						<p className="text-sm text-muted-foreground">{post.excerpt}</p>
					</article>
				))}
			</div>
		</section>
	)
}
