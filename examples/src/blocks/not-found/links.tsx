import { BookOpen, FolderKanban, LifeBuoy, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const links = [
	{ icon: FolderKanban, title: "Your projects", text: "Plans, owners and releases for every project." },
	{ icon: BookOpen, title: "Docs", text: "Guides, the CLI reference and the API." },
	{ icon: Rocket, title: "Changelog", text: "What changed in Keep, newest first." },
	{ icon: LifeBuoy, title: "Help", text: "Write to us. A person answers within a day." },
]

export default function NotFoundLinks() {
	return (
		<section className="mx-auto grid min-h-[720px] max-w-6xl items-center gap-10 px-4 py-16 md:px-8 lg:grid-cols-2 lg:gap-16">
			<div className="flex flex-col items-start gap-5">
				<p className="font-heading text-7xl leading-none text-muted-foreground md:text-8xl">404</p>
				<h1 className="text-3xl md:text-4xl">This page moved or never existed</h1>
				<p className="text-muted-foreground">
					Check the address, or go where most people were heading. If a link on our site sent you here, tell
					us and we'll fix it.
				</p>
				<Button size="lg" className="w-full sm:w-auto">
					Back to home
				</Button>
			</div>
			<div className="grid gap-4 sm:grid-cols-2">
				{links.map(({ icon: Icon, title, text }) => (
					<a key={title} href="#link">
						<Card className="h-full gap-2 p-5 transition-colors hover:bg-accent">
							<Icon className="mb-2 size-5 text-muted-foreground" />
							<span className="font-medium">{title}</span>
							<span className="text-sm text-muted-foreground">{text}</span>
						</Card>
					</a>
				))}
			</div>
		</section>
	)
}
