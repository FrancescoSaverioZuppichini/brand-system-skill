import { posts } from "@/demo/posts"

export default function BlogList() {
	return (
		<section className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex flex-col gap-3">
				<h2 className="text-3xl leading-tight md:text-4xl">Engineering notes</h2>
				<p className="text-muted-foreground">
					How we plan, ship and look after Keep, written by the people doing it.
				</p>
			</div>
			<ol className="flex flex-col">
				{posts.slice(0, 6).map((post) => (
					<li
						key={post.title}
						className="flex flex-col gap-2 border-t py-6 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-8"
					>
						<time className="font-mono text-sm text-muted-foreground sm:pt-1">{post.date}</time>
						<div className="flex flex-col gap-2">
							<h3 className="text-xl leading-snug">{post.title}</h3>
							<p className="text-muted-foreground">{post.excerpt}</p>
							<span className="text-sm text-muted-foreground">
								{post.author} · {post.read} read
							</span>
						</div>
					</li>
				))}
			</ol>
		</section>
	)
}
