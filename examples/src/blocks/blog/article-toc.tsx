import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Photo } from "@/demo/photo"
import { ArticleBody, article, Author } from "@/demo/posts"
import { cn } from "@/lib/utils"

const headings = article.body.filter((block) => block.kind === "h2" || block.kind === "h3")

export default function BlogArticleToc() {
	return (
		<section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[11rem_minmax(0,1fr)_14rem] lg:gap-12">
			<nav className="hidden flex-col gap-1 self-start text-sm lg:sticky lg:top-8 lg:flex">
				<span className="mb-2 text-xs font-medium text-muted-foreground">On this page</span>
				{headings.map((heading, index) => (
					<a
						key={heading.id}
						href={`#${heading.id}`}
						className={cn(
							"rounded-md px-2 py-1.5",
							heading.kind === "h3" && "pl-5",
							index === 0 ? "bg-accent font-medium text-accent-foreground" : "text-muted-foreground",
						)}
					>
						{heading.text}
					</a>
				))}
			</nav>
			<article className="flex min-w-0 flex-col gap-6">
				{/* [Agent] Below lg the sticky contents column becomes one select at the top of the article. */}
				<div className="flex flex-col gap-2 lg:hidden">
					<Label>On this page</Label>
					<Select defaultValue={headings[0].id}>
						<SelectTrigger className="w-full">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{headings.map((heading) => (
								<SelectItem key={heading.id} value={heading.id ?? heading.text}>
									{heading.text}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<h1 className="text-4xl leading-[1.08] md:text-5xl">{article.title}</h1>
				<Author name={article.author} meta={`${article.date} · ${article.read} read`} />
				<Photo scene={article.scene} className="my-2 aspect-[16/9] rounded-xl" />
				<ArticleBody />
			</article>
			<Card className="hidden gap-3 self-start p-5 lg:sticky lg:top-8 lg:flex">
				<span className="font-medium">Try a care schedule</span>
				<p className="text-sm text-muted-foreground">
					Give a shipped project an owner, a monthly check and a review date. Free for three projects.
				</p>
				<Button>Start a project</Button>
			</Card>
		</section>
	)
}
