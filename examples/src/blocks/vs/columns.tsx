import { Check, X } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Logo } from "@/demo/logo"

const theirs = [
	"Tasks close when the sprint ends, and so does the project",
	"Nobody owns a project after launch",
	"Releases are tracked in another tool",
	"Decisions are spread across comments",
	"Reviews happen when something breaks",
]

const ours = [
	"A project keeps its owner after launch",
	"Releases are dated checklists with sign-off",
	"Every project in care has a yearly review date",
	"Decisions are written next to the plan",
	"Everything exports as Markdown",
]

export default function VsColumns() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm text-muted-foreground">Keep vs Tasklist</span>
				<h2 className="text-3xl leading-tight md:text-4xl">
					Tasklist tracks tasks. Keep looks after projects.
				</h2>
				<p className="text-muted-foreground">
					The difference shows a year after launch, when the sprint board is empty and the project still runs.
				</p>
			</div>
			<div className="mx-auto grid w-full max-w-4xl gap-4 md:grid-cols-2">
				<Card className="gap-5 bg-muted p-6 shadow-none">
					<div className="flex flex-col gap-1">
						<span className="text-lg font-medium text-muted-foreground">Tasklist</span>
						<span className="text-sm text-muted-foreground">Built for the sprint</span>
					</div>
					<ul className="flex flex-col gap-3 text-sm">
						{theirs.map((item) => (
							<li key={item} className="flex gap-3 text-muted-foreground">
								<X className="mt-0.5 size-4 shrink-0" /> {item}
							</li>
						))}
					</ul>
				</Card>
				<Card className="gap-5 border-primary bg-primary p-6 text-primary-foreground">
					<div className="flex flex-col gap-1">
						<Logo className="text-lg [&_rect]:fill-current" />
						<span className="text-sm opacity-80">Built for the years after launch</span>
					</div>
					<ul className="flex flex-col gap-3 text-sm">
						{ours.map((item) => (
							<li key={item} className="flex gap-3">
								<Check className="mt-0.5 size-4 shrink-0" /> {item}
							</li>
						))}
					</ul>
				</Card>
			</div>
			<p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground">
				Fair to say: Tasklist is the better pick if you need time tracking or Gantt charts. Compared on 12 Nov
				2026 from Tasklist's public docs.
			</p>
		</section>
	)
}
