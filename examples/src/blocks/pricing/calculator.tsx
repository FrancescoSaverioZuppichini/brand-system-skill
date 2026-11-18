import { Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { plans } from "@/demo/content"
import { pitch } from "@/demo/plan"

// [Agent] The plan follows from the answers, mirroring the plan limits in content.ts: client spaces need Studio,
// anything past Starter's 3 projects or 2 members needs Team.
function pickPlan(members: number, projects: number, clients: boolean) {
	if (clients) return plans[2]
	if (members <= 2 && projects <= 3) return plans[0]
	return plans[1]
}

export default function PricingCalculator() {
	const [members, setMembers] = useState(8)
	const [projects, setProjects] = useState(14)
	const [clients, setClients] = useState("none")
	const plan = pickPlan(members, projects, clients === "spaces")
	const total = plan.price * members

	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm text-muted-foreground">Pricing</span>
				<h2 className="text-3xl leading-tight md:text-5xl">What would Keep cost you?</h2>
				<p className="text-lg text-muted-foreground">
					Tell us about your team. We pick the cheapest plan that fits.
				</p>
			</div>
			<div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-[3fr_2fr]">
				<Card className="gap-8 px-6">
					<div className="flex flex-col gap-4">
						<div className="flex items-baseline justify-between">
							<Label>Members who edit projects</Label>
							<span className="font-mono text-sm tabular-nums">{members}</span>
						</div>
						<Slider value={[members]} onValueChange={([value]) => setMembers(value)} min={1} max={50} />
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex items-baseline justify-between">
							<Label>Active projects</Label>
							<span className="font-mono text-sm tabular-nums">{projects}</span>
						</div>
						<Slider value={[projects]} onValueChange={([value]) => setProjects(value)} min={1} max={60} />
					</div>
					<div className="flex flex-col gap-3">
						<Label>Client access</Label>
						<ToggleGroup
							type="single"
							variant="outline"
							value={clients}
							onValueChange={(value) => value && setClients(value)}
							className="w-full"
						>
							<ToggleGroupItem value="none" className="flex-1">
								None
							</ToggleGroupItem>
							<ToggleGroupItem value="spaces" className="flex-1">
								Read-only spaces
							</ToggleGroupItem>
						</ToggleGroup>
					</div>
					<p className="mt-auto border-t pt-5 text-sm text-muted-foreground">
						Clients in a read-only space are free and never take a seat.
					</p>
				</Card>
				<Card className="gap-5 border-primary bg-primary px-6 text-primary-foreground">
					<span className="text-sm text-primary-foreground/75">Your plan: {plan.name}</span>
					<div className="flex flex-col gap-1">
						<span className="font-heading text-5xl font-semibold tabular-nums">${total}</span>
						<span className="text-sm text-primary-foreground/75">
							{plan.price ? `per month · ${members} members × $${plan.price}` : plan.unit}
						</span>
					</div>
					<p className="text-sm">{pitch[plan.name].line}</p>
					<Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
						{pitch[plan.name].action}
					</Button>
					<ul className="flex flex-col gap-2.5 border-t border-primary-foreground/20 pt-5 text-sm">
						{plan.features.slice(0, 3).map((feature) => (
							<li key={feature} className="flex items-center gap-2">
								<Check className="size-4 shrink-0" />
								{feature}
							</li>
						))}
					</ul>
				</Card>
			</div>
		</section>
	)
}
