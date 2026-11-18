import { Photo } from "@/demo/photo"
import { Author, posts } from "@/demo/posts"

export default function BlogMagazine() {
	const [lead, ...rest] = posts
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex items-baseline justify-between gap-4 border-b pb-3 text-sm text-muted-foreground">
				<span className="font-medium text-foreground">Kept · the Keep magazine</span>
				<span>November 2026</span>
			</div>
			<div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
				<article className="flex flex-col gap-4">
					<Photo scene={lead.scene} className="aspect-[16/10] rounded-xl" />
					<span className="text-sm text-muted-foreground">{lead.category}</span>
					<h2 className="text-3xl leading-tight md:text-5xl">{lead.title}</h2>
					<p className="text-lg text-muted-foreground">{lead.excerpt}</p>
					<Author name={lead.author} meta={`${lead.date} · ${lead.read} read`} />
				</article>
				<ol className="flex flex-col divide-y">
					{rest.slice(0, 4).map((post) => (
						<li key={post.title} className="flex gap-4 py-4 first:pt-0">
							<Photo scene={post.scene} className="size-20 shrink-0 rounded-md md:size-24" />
							<div className="flex flex-col gap-1">
								<span className="text-xs text-muted-foreground">{post.category}</span>
								<h3 className="text-base leading-snug md:text-lg">{post.title}</h3>
								<span className="text-xs text-muted-foreground">{post.date}</span>
							</div>
						</li>
					))}
				</ol>
			</div>
			<div className="-mx-4 flex gap-6 overflow-x-auto border-t px-4 pt-8 md:mx-0 md:grid md:grid-cols-4 md:px-0">
				{rest.slice(4, 8).map((post) => (
					<article key={post.title} className="flex w-64 shrink-0 flex-col gap-2 md:w-auto">
						<Photo scene={post.scene} className="mb-1 aspect-[4/3] rounded-lg" />
						<span className="text-xs text-muted-foreground">{post.category}</span>
						<h3 className="text-base leading-snug">{post.title}</h3>
						<span className="text-xs text-muted-foreground">
							{post.author} · {post.date}
						</span>
					</article>
				))}
			</div>
		</section>
	)
}
