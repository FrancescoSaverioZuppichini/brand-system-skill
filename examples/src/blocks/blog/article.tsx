import { Badge } from "@/components/ui/badge"
import { Photo } from "@/demo/photo"
import { ArticleBody, article, Author } from "@/demo/posts"

export default function BlogArticle() {
	return (
		<article className="mx-auto flex max-w-[44rem] flex-col gap-6 px-4 py-16 md:px-8 md:py-24">
			<Badge variant="secondary">{article.category}</Badge>
			<h1 className="text-4xl leading-[1.08] md:text-5xl">{article.title}</h1>
			<p className="text-xl leading-relaxed text-muted-foreground">{article.dek}</p>
			<Author name={article.author} meta={`${article.date} · ${article.read} read`} />
			<Photo
				scene={article.scene}
				label="The Lisbon studio, where the CLI is reviewed"
				className="my-4 aspect-[16/10] rounded-xl"
			/>
			<ArticleBody />
		</article>
	)
}
