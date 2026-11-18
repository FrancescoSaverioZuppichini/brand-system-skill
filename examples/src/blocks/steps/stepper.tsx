import { Check } from "lucide-react"
import { Frame } from "@/demo/frame"
import { ReleaseChecklist } from "@/demo/phone-screens"
import { Stepper } from "@/demo/stepper"

const checks = [
	"Checks written by the people who know the risk",
	"The release ships only when all of them pass",
	"The changelog is written before, not after",
]

export default function StepsStepper() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm text-muted-foreground">How it works</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Plan, ship, look after it</h2>
				<p className="text-lg text-muted-foreground">One project, three stages, one place.</p>
			</div>
			<Stepper steps={["Plan", "Ship", "Care"]} current={1} className="mx-auto w-full max-w-md" />
			<div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
				<div className="flex flex-col gap-5">
					<span className="font-mono text-xs text-muted-foreground">Step 2 of 3</span>
					<h3 className="text-2xl leading-tight md:text-3xl">Ship in small releases</h3>
					<p className="text-lg text-muted-foreground">
						A release is a checklist your team agreed on, not a ceremony. Small releases go out more calmly
						and are easier to undo.
					</p>
					<ul className="flex flex-col gap-3">
						{checks.map((check) => (
							<li key={check} className="flex items-start gap-3">
								<Check className="mt-0.5 size-4 shrink-0 text-chart-2" />
								{check}
							</li>
						))}
					</ul>
				</div>
				<Frame url="keep.app/billing-rewrite/1.4" className="shadow-lg">
					<ReleaseChecklist />
				</Frame>
			</div>
		</section>
	)
}
