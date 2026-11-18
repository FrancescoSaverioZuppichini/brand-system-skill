import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Photo } from "@/demo/photo"

const routes = [
	{
		title: "Sales",
		text: "Studio plans, client spaces, and moving more than ten projects over.",
		person: "Clara Dubois",
		reply: "replies the same day",
		link: "Email sales",
	},
	{
		title: "Support",
		text: "Something broken, confusing or slower than it should be.",
		person: "Kwame Mensah",
		reply: "care team, within 4 hours on weekdays",
		link: "Open a ticket",
	},
	{
		title: "Press",
		text: "Interviews, numbers about Keep, logos and photos of the team.",
		person: "Hanna Vogel",
		reply: "founder, within two days",
		link: "Get the press kit",
	},
]

export default function ContactRoutes() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-xl flex-col gap-3 text-center">
				<p className="text-sm text-muted-foreground">Contact</p>
				<h2 className="text-3xl leading-tight md:text-4xl">Pick who you need</h2>
				<p className="text-muted-foreground">Three small teams, each answering its own inbox.</p>
			</div>
			<div className="grid gap-4 md:grid-cols-3 md:gap-6">
				{routes.map((route) => (
					<Card key={route.title} className="gap-4 p-6">
						<h3 className="text-xl leading-tight">{route.title}</h3>
						<p className="text-muted-foreground">{route.text}</p>
						<span className="flex items-center gap-3 text-sm">
							<Photo scene="person" className="size-9 shrink-0 rounded-full" />
							<span>
								<span className="font-medium">{route.person}</span>
								<span className="text-muted-foreground">, {route.reply}</span>
							</span>
						</span>
						<a href="#" className="mt-auto flex items-center gap-1 pt-2 text-sm font-medium">
							{route.link} <ArrowRight className="size-4" />
						</a>
					</Card>
				))}
			</div>
		</section>
	)
}
