import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { product } from "@/demo/content"

const checks = [
	"A 30-minute call with someone who builds Keep",
	"Your projects imported for you",
	"No card needed",
]

export default function HeroForm() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:px-8 lg:grid-cols-[1fr_420px] lg:py-28">
			<div className="flex flex-col gap-6">
				<h1 className="text-5xl leading-[1.02] md:text-6xl">{product.headline}</h1>
				<p className="text-lg text-muted-foreground">{product.sub}</p>
				<ul className="flex flex-col gap-3">
					{checks.map((check) => (
						<li key={check} className="flex items-center gap-3">
							<Check className="size-4 text-primary" /> {check}
						</li>
					))}
				</ul>
			</div>
			{/* [Agent] The card frame drops on phones (border, padding and shadow off): a card inside a 390 px screen
			    only wastes width. */}
			<Card className="border-0 bg-transparent py-0 shadow-none sm:border sm:bg-card sm:py-6 sm:shadow-lg">
				<CardContent className="flex flex-col gap-4 px-0 sm:px-6">
					<span className="text-lg font-medium">Book a demo</span>
					<div className="grid gap-2">
						<Label htmlFor="hero-name">Name</Label>
						<Input id="hero-name" placeholder="Ana Ruiz" />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="hero-email">Work email</Label>
						<Input id="hero-email" placeholder="ana@halden.studio" />
					</div>
					<div className="grid gap-2">
						<Label>Team size</Label>
						<Select defaultValue="2-10">
							<SelectTrigger className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="1">Just me</SelectItem>
								<SelectItem value="2-10">2–10 people</SelectItem>
								<SelectItem value="11-50">11–50 people</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<Button size="lg">Book a 30-minute demo</Button>
					<span className="text-xs text-muted-foreground">
						We reply within one working day. No sales sequence.
					</span>
				</CardContent>
			</Card>
		</section>
	)
}
