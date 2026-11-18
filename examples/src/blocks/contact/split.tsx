import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { place } from "@/demo/place"

const details = [
	{ icon: Mail, label: "sales@keep.app", note: "Clara Dubois answers, usually the same day" },
	{ icon: Phone, label: place.phone, note: "Mon–Fri, 09:00–18:00 Lisbon time" },
	{ icon: MapPin, label: place.street, note: place.city },
]

export default function ContactSplit() {
	return (
		<section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[5fr_6fr] lg:gap-16">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-3">
					<p className="text-sm text-muted-foreground">Contact</p>
					<h2 className="text-3xl leading-tight md:text-4xl">Plan a rollout with us</h2>
					<p className="text-muted-foreground">
						For studios and teams moving more than ten projects into care. Write, call, or come by the studio.
					</p>
				</div>
				<ul className="flex flex-col gap-5">
					{details.map((detail) => (
						<li key={detail.label} className="flex gap-3">
							<detail.icon className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
							<span className="flex flex-col">
								<span className="font-medium">{detail.label}</span>
								<span className="text-sm text-muted-foreground">{detail.note}</span>
							</span>
						</li>
					))}
				</ul>
			</div>
			{/* [Agent] On phones the form drops its card frame (border, padding, shadow): a card inside a 390 px screen
			    only wastes width. */}
			<Card className="border-0 bg-transparent py-0 shadow-none sm:border sm:bg-card sm:py-6 sm:shadow-sm">
				<CardContent className="flex flex-col gap-4 px-0 sm:px-6">
					<div className="grid gap-4 sm:grid-cols-2">
						<div className="grid gap-2">
							<Label htmlFor="split-first">First name</Label>
							<Input id="split-first" placeholder="Ana" />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="split-last">Last name</Label>
							<Input id="split-last" placeholder="Ruiz" />
						</div>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="split-work-email">Work email</Label>
						<Input id="split-work-email" type="email" placeholder="ana@halden.studio" />
					</div>
					<div className="grid gap-2">
						<Label>Projects to move</Label>
						<Select defaultValue="10-50">
							<SelectTrigger className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="1-10">Up to 10</SelectItem>
								<SelectItem value="10-50">10–50</SelectItem>
								<SelectItem value="50+">More than 50</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="split-message">What are you looking after?</Label>
						<Textarea id="split-message" rows={4} placeholder="Twelve client sites, two of them from 2019…" />
					</div>
					<Button size="lg">Send to Clara</Button>
				</CardContent>
			</Card>
		</section>
	)
}
