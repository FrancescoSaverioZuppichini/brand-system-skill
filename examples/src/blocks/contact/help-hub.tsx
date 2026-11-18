import { ArrowRight, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const topics = [
	"Care schedules",
	"Import from Linear",
	"Client spaces",
	"Billing",
	"Export to Markdown",
	"SSO",
]

const routes = [
	{
		title: "Read the docs",
		text: "120 guides, from your first plan to a yearly review.",
		link: "Open the docs",
	},
	{
		title: "Ask other teams",
		text: "The forum, where 312 teams compare care schedules.",
		link: "Visit the forum",
	},
	{
		title: "Write to support",
		text: "Kwame's care team answers within 4 hours on weekdays.",
		link: "Open a ticket",
	},
]

export default function ContactHelpHub() {
	return (
		<section className="bg-muted">
			<div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
				<div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 text-center">
					<h2 className="text-3xl leading-tight md:text-4xl">How can we help?</h2>
					<form className="flex w-full items-center gap-2 rounded-lg border bg-card p-1.5 shadow-sm">
						<Search className="ml-2 size-5 shrink-0 text-muted-foreground" />
						<input
							aria-label="Search help"
							placeholder="Search 120 guides"
							className="h-9 min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
						/>
						<Button>Search</Button>
					</form>
					<div className="flex flex-wrap justify-center gap-2">
						{topics.map((topic) => (
							<Badge key={topic} variant="outline" className="bg-background px-3 py-1 text-sm font-normal">
								{topic}
							</Badge>
						))}
					</div>
				</div>
				<div className="grid gap-4 md:grid-cols-3 md:gap-6">
					{routes.map((route) => (
						<Card key={route.title} className="gap-3 p-6">
							<h3 className="text-lg leading-tight">{route.title}</h3>
							<p className="text-sm text-muted-foreground">{route.text}</p>
							<a href="#" className="flex items-center gap-1 pt-1 text-sm font-medium">
								{route.link} <ArrowRight className="size-4" />
							</a>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
