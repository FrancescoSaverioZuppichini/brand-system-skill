import { Search } from "lucide-react"
import type { ReactNode } from "react"
import { Code, session } from "@/demo/device"
import { ProjectsTable } from "@/demo/table"
import { cn } from "@/lib/utils"

const onTime = [
	{ quarter: "Q4 24", value: 88 },
	{ quarter: "Q1 25", value: 89 },
	{ quarter: "Q2 25", value: 90 },
	{ quarter: "Q3 25", value: 91 },
	{ quarter: "Q4 25", value: 92 },
	{ quarter: "Q1 26", value: 92 },
	{ quarter: "Q2 26", value: 93 },
	{ quarter: "Q3 26", value: 94 },
]

const reviews = [
	{ name: "Halden client sites", date: "3 Feb 2027" },
	{ name: "Fieldnote app", date: "14 Mar 2027" },
	{ name: "Customer portal", date: "18 Nov 2027" },
]

// [Agent] Each tile is a title, a line and a crop of the real screen that bleeds off the tile's bottom edge, so the
// crop reads as a window into the product rather than a card inside a card.
function Tile({
	title,
	line,
	className,
	children,
}: {
	title: string
	line: string
	className?: string
	children: ReactNode
}) {
	return (
		<div
			className={cn(
				"flex flex-col gap-5 overflow-hidden rounded-xl bg-muted px-5 pt-5 md:px-6 md:pt-6",
				className,
			)}
		>
			<div className="flex flex-col gap-1">
				<h3 className="text-lg leading-snug">{title}</h3>
				<p className="text-sm text-muted-foreground">{line}</p>
			</div>
			<div className="mt-auto -mb-(--border-width) rounded-t-lg border bg-card text-card-foreground">
				{children}
			</div>
		</div>
	)
}

export default function FeaturesBento() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<h2 className="text-3xl leading-tight md:text-5xl">Everything a project needs after launch day</h2>
				<p className="text-lg text-muted-foreground">
					One tool for the plan, the releases and the years of care after.
				</p>
			</div>
			<div className="grid gap-4 md:grid-cols-3">
				<Tile
					title="Every project on one page"
					line="Owner, status and progress for all of them, from planning to in care."
					className="md:col-span-2"
				>
					<ProjectsTable className="px-2 pt-1" />
				</Tile>
				<Tile title="94% of releases on time" line="Checklists make the date real. Up 6 points in two years.">
					<div className="flex h-44 items-end gap-1.5 p-4">
						{onTime.map((bar, index) => (
							<div key={bar.quarter} className="flex h-full flex-1 flex-col justify-end gap-1.5">
								<div
									className={cn(
										"rounded-sm",
										index === onTime.length - 1 ? "bg-primary" : "bg-muted-foreground/25",
									)}
									style={{ height: `${(bar.value - 80) * 6}%` }}
								/>
								<span className="text-center font-mono text-[9px] text-muted-foreground">
									{bar.quarter.slice(0, 2)}
								</span>
							</div>
						))}
					</div>
				</Tile>
				<Tile title="Find any decision" line="Every why, written down where the next person looks.">
					<div className="flex flex-col gap-2 p-4 text-xs">
						<span className="flex items-center gap-2 rounded-md border px-2.5 py-1.5">
							<Search className="size-3.5 text-muted-foreground" /> postgres
						</span>
						<span className="rounded-md bg-accent px-2.5 py-2">
							<span className="font-medium">Stay on Postgres</span>
							<span className="block text-muted-foreground">Billing rewrite · Ana Ruiz · 19 Jun</span>
						</span>
						<span className="px-2.5 py-2">
							<span className="font-medium">Move search to Postgres</span>
							<span className="block text-muted-foreground">Search index · Priya Shah · 2 Mar</span>
						</span>
					</div>
				</Tile>
				<Tile title="A review date on everything" line="Shipped work moves into care with an owner.">
					<ul className="flex flex-col divide-y p-2 text-xs">
						{reviews.map((review) => (
							<li key={review.name} className="flex items-center justify-between gap-2 px-2 py-2.5">
								<span className="flex items-center gap-2">
									<span className="size-1.5 rounded-full bg-chart-2" /> {review.name}
								</span>
								<span className="font-mono text-muted-foreground">{review.date}</span>
							</li>
						))}
					</ul>
				</Tile>
				<Tile title="Ship from your terminal" line="The CLI runs the same checklist as the app.">
					<Code lines={session.slice(3)} className="rounded-none" />
				</Tile>
			</div>
		</section>
	)
}
