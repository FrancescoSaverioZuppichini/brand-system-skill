import { ChevronsLeftRight } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Person, StatusBadge } from "@/demo/table"

const notes = [
	"mtg 12/10 w/ Mei, Jonas, Priya (Tomás out)",
	"- signup is too long!! cut to 3 steps?? email first",
	"- import from linear… jira too? Tomás says maybe Dec",
	"- sample project for new teams (Priya has one)",
	"- who owns this after launch???",
	"- ship before Feb? or after the beta",
	"- SSO → not now",
	"- Jonas to review? ask him",
]

const scope = [
	"Email first, team later at sign-up",
	"Import from Linear and Jira",
	"A sample project for new teams",
]

function Notes() {
	return (
		<div className="flex flex-col gap-3 bg-muted px-5 pt-16 pb-6 font-mono text-xs leading-relaxed md:px-10 md:text-sm">
			<span className="font-sans text-lg font-semibold">Onboarding v3 notes (FINAL) (2)</span>
			{notes.map((line) => (
				<span key={line} className={line.includes("SSO") ? "line-through opacity-60" : undefined}>
					{line}
				</span>
			))}
		</div>
	)
}

// [Agent] The plan fills the frame in two columns (people and date left, scope right), so at the default split the
// right half already shows the messy notes turned into a clean scope; dragging left reveals the owner and date.
function Plan() {
	return (
		<div className="grid content-start gap-6 bg-card px-5 pt-16 pb-6 text-sm text-card-foreground md:grid-cols-2 md:gap-10 md:px-10">
			<div className="flex flex-col gap-4">
				<span className="flex items-center gap-3">
					<span className="text-lg font-semibold">Onboarding v3</span>
					<StatusBadge status="Planning" />
				</span>
				<div className="grid grid-cols-[5.5rem_1fr] items-center gap-y-3">
					<span className="text-muted-foreground">Owner</span>
					<Person name="Mei Okafor" />
					<span className="text-muted-foreground">Reviewer</span>
					<Person name="Jonas Lind" />
					<span className="text-muted-foreground">Ships</span>
					<span>3 February</span>
				</div>
			</div>
			<div className="flex flex-col gap-3">
				<span className="text-muted-foreground">Scope</span>
				<ol className="flex flex-col divide-y rounded-md border">
					{scope.map((item, index) => (
						<li key={item} className="flex gap-3 px-3 py-2.5">
							<span className="font-mono text-muted-foreground">{index + 1}</span>
							{item}
						</li>
					))}
				</ol>
				<span className="text-muted-foreground">Not now: SSO</span>
			</div>
		</div>
	)
}

// [Agent] Both states are stacked in one grid cell at the same size and the plan is clipped from the divider to the
// right edge. An invisible full-size range input sits on top, so dragging anywhere and the arrow keys both move it
// with no pointer code, and its focus ring shows on the handle.
export default function ShowcaseBeforeAfter() {
	const [split, setSplit] = useState(45)
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm font-medium text-muted-foreground">Import</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Paste the old notes, get a plan</h2>
				<p className="text-lg text-muted-foreground">
					Keep reads your meeting notes and finds the scope, the owner, the reviewer and the date.
				</p>
			</div>
			<div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-xl border shadow-lg">
				<div className="grid h-[520px] *:col-start-1 *:row-start-1 md:h-[420px]">
					<Notes />
					<div className="grid" style={{ clipPath: `inset(0 0 0 ${split}%)` }}>
						<Plan />
					</div>
				</div>
				<input
					type="range"
					min={0}
					max={100}
					value={split}
					onChange={(event) => setSplit(Number(event.target.value))}
					aria-label="Compare the notes with the plan"
					className="peer absolute inset-0 size-full cursor-ew-resize opacity-0"
				/>
				<div
					className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-foreground peer-focus-visible:[&>span]:ring-2"
					style={{ left: `${split}%` }}
				>
					<span className="absolute top-1/2 left-1/2 flex size-10 -translate-1/2 items-center justify-center rounded-full border bg-background text-foreground shadow-md ring-ring">
						<ChevronsLeftRight className="size-4" />
					</span>
				</div>
				<Badge variant="outline" className="pointer-events-none absolute top-4 left-4 bg-background">
					Before · notes.docx
				</Badge>
				<Badge className="pointer-events-none absolute top-4 right-4">After · plan in Keep</Badge>
			</div>
		</section>
	)
}
