import { Check, Circle } from "lucide-react"
import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"
import { Person } from "@/demo/table"
import { cn } from "@/lib/utils"

const checks = [
	{ label: "Changelog written", by: "Ana Ruiz", done: true },
	{ label: "Migration tested", by: "Tomás Berg", done: true },
	{ label: "Care date set", by: "Ana Ruiz", done: false },
]

const health = [
	{ label: "Uptime, 30 days", value: "99.98%", ok: true },
	{ label: "Dependencies", value: "2 updates", ok: false },
]

// [Agent] Each crop is one detail of the app drawn at a readable size (text-sm, not the screen's text-xs) and cut off
// by the card edge, so it reads as a close-up of the product rather than a shrunk screenshot.
function Crop({ children }: { children: ReactNode }) {
	return (
		<div className="h-40 overflow-hidden bg-muted px-6 pt-6">
			<div className="min-h-[calc(100%+1rem)] rounded-t-lg border bg-card p-4 text-sm text-card-foreground shadow-sm">
				{children}
			</div>
		</div>
	)
}

const cards = [
	{
		title: "Releases are checklists",
		line: "Five checks, each ticked by a named person before anything ships.",
		crop: (
			<div className="flex flex-col gap-3">
				{checks.map((check) => (
					<span
						key={check.label}
						className={cn("flex items-center gap-2", !check.done && "text-muted-foreground")}
					>
						{check.done ? <Check className="size-4 text-chart-2" /> : <Circle className="size-4" />}
						<span className="flex-1">{check.label}</span>
						<span className="text-xs text-muted-foreground">{check.by.split(" ")[0]}</span>
					</span>
				))}
			</div>
		),
	},
	{
		title: "Every project has an owner",
		line: "A person, not a team, with a reviewer and a ship date beside them.",
		crop: (
			<div className="grid grid-cols-[5.5rem_1fr] items-center gap-y-3">
				<span className="text-muted-foreground">Owner</span>
				<Person name="Mei Okafor" />
				<span className="text-muted-foreground">Reviewer</span>
				<Person name="Jonas Lind" />
				<span className="text-muted-foreground">Ships</span>
				<span>3 February</span>
			</div>
		),
	},
	{
		title: "Health checks without a pager",
		line: "A monthly check on what keeps a project alive, and a date for its next review.",
		crop: (
			<div className="flex flex-col gap-3">
				{health.map((item) => (
					<span key={item.label} className="flex items-center gap-2">
						<span className={cn("size-2 rounded-full", item.ok ? "bg-chart-2" : "bg-chart-3")} />
						{item.label}
						<span className="ml-auto font-mono text-xs tabular-nums">{item.value}</span>
					</span>
				))}
				<span className="border-t pt-3 text-muted-foreground">Next review · 18 Nov 2027</span>
			</div>
		),
	},
]

export default function FeaturesUiCards() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-4">
				<span className="text-sm font-medium text-muted-foreground">Features</span>
				<h2 className="text-3xl leading-tight md:text-4xl">Small habits that keep projects alive</h2>
				<p className="text-lg text-muted-foreground">Three details of Keep that do most of the work.</p>
			</div>
			<div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-3 md:px-0">
				{cards.map((card) => (
					<Card key={card.title} className="w-72 shrink-0 gap-0 overflow-hidden py-0 md:w-auto">
						<Crop>{card.crop}</Crop>
						<div className="flex flex-col gap-2 border-t p-6">
							<h3 className="text-lg leading-snug">{card.title}</h3>
							<p className="text-sm text-muted-foreground">{card.line}</p>
						</div>
					</Card>
				))}
			</div>
		</section>
	)
}
