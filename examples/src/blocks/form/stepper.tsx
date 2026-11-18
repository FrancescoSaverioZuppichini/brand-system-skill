import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"
import { Pick } from "@/demo/app-nav"
import { people } from "@/demo/content"
import { Logo } from "@/demo/logo"
import { Stepper } from "@/demo/stepper"

const checks = [
	{ label: "Changelog written", payments: false },
	{ label: "Migration tested on a copy of live", payments: false },
	{ label: "Owner signs off", payments: false },
	{ label: "Care date set", payments: false },
	{ label: "Client notified", payments: false },
	{ label: "Refund a test invoice end to end", payments: true },
	{ label: "Invoice totals match the old system", payments: true },
]

// [Agent] A focused frame (logo, task, exit) instead of the app shell: the step is the only thing on screen. The
// checklist depends on step 1 (a payments project gets two extra checks), which is what earns a multi-step form.
// On a phone Back/Next live in a bar fixed under the scrolling card.
export default function FormStepper() {
	return (
		<div className="flex h-[900px] flex-col bg-background text-foreground">
			<header className="flex h-14 shrink-0 items-center gap-3 border-b px-4 md:px-8">
				<Logo className="text-base" />
				<Separator orientation="vertical" className="h-5!" />
				<span className="truncate text-sm font-medium">New release</span>
				<Button variant="ghost" size="sm" className="ml-auto max-sm:hidden">
					Save draft
				</Button>
				<Button variant="ghost" size="icon-sm" aria-label="Close" className="max-sm:ml-auto">
					<X />
				</Button>
			</header>
			<main className="min-h-0 flex-1 overflow-y-auto">
				<div className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-6 md:py-10">
					<Stepper steps={["Project", "Scope", "Checklist", "Schedule"]} current={2} />
					<Card className="gap-6 p-5 md:p-6">
						<div className="flex flex-col gap-1">
							<h1 className="text-lg leading-tight">Checklist for Billing rewrite 1.4</h1>
							<p className="text-sm text-muted-foreground">
								Billing rewrite handles payments, so two payment checks were added to the usual five.
							</p>
						</div>
						<FieldGroup className="gap-3">
							{checks.map((check, index) => (
								<Field key={check.label} orientation="horizontal">
									<Checkbox id={`check-${index}`} defaultChecked />
									<FieldLabel htmlFor={`check-${index}`} className="font-normal">
										{check.label}
									</FieldLabel>
									{check.payments && (
										<Badge variant="secondary" className="font-normal">
											Payments
										</Badge>
									)}
								</Field>
							))}
						</FieldGroup>
						<Separator />
						<Field>
							<FieldLabel>Who signs off</FieldLabel>
							<Pick
								value={people[0].name}
								options={people.map((person) => person.name)}
								className="sm:w-64"
							/>
						</Field>
					</Card>
					<div className="flex justify-between max-md:hidden">
						<Button variant="outline">Back</Button>
						<Button>Next: schedule</Button>
					</div>
				</div>
			</main>
			<footer className="flex shrink-0 gap-2 border-t p-4 md:hidden">
				<Button variant="outline" className="flex-1">
					Back
				</Button>
				<Button className="flex-1">Next</Button>
			</footer>
		</div>
	)
}
