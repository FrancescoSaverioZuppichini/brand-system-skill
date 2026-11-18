import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Code, session } from "@/demo/device"
import { product } from "@/demo/content"

export default function HeroTerminal() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:px-8 lg:grid-cols-2 lg:py-28">
			<div className="flex flex-col gap-6">
				<h1 className="text-5xl leading-[1.02] md:text-6xl">{product.headline}</h1>
				<p className="text-lg text-muted-foreground">
					Plan, ship and look after projects from your terminal. Every release is a checklist your team can
					review.
				</p>
				<div className="flex flex-col gap-3 sm:flex-row">
					<div className="flex h-10 flex-1 items-center justify-between gap-3 rounded-md border bg-muted px-3 font-mono text-sm">
						<span className="truncate">$ {product.install}</span>
						<Copy className="size-4 shrink-0 text-muted-foreground" />
					</div>
					<Button size="lg">Read the docs</Button>
				</div>
				<p className="text-sm text-muted-foreground">
					MIT-licensed CLI · works with GitHub, GitLab and Linear
				</p>
			</div>
			<Code title="~/billing-rewrite" lines={session} className="text-sm" />
		</section>
	)
}
