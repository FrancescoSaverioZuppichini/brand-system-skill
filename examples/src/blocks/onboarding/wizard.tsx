import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Logo } from "@/demo/logo"
import { Stepper } from "@/demo/stepper"

// [Agent] Each answer names what it changes in the app, so the question earns its screen.
const options = [
	{
		id: "clients",
		title: "Client work",
		text: "Starts you with a read-only space per client and monthly reports.",
	},
	{
		id: "product",
		title: "Our own product",
		text: "Starts you with release checklists and a care schedule.",
	},
	{ id: "open-source", title: "Open source", text: "Starts you with public changelogs and GitHub releases." },
	{
		id: "internal",
		title: "Internal tools",
		text: "Starts you with owners and a yearly review for each tool.",
	},
]

export default function OnboardingWizard() {
	return (
		<section className="mx-auto flex min-h-[720px] max-w-6xl flex-col gap-12 px-4 py-6 md:px-8 md:py-8">
			<header className="grid grid-cols-2 items-center gap-y-6 md:grid-cols-[1fr_auto_1fr]">
				<Logo />
				<Stepper
					steps={["Role", "Use", "Team", "Import"]}
					current={1}
					className="col-span-2 row-start-2 md:col-span-1 md:row-start-auto md:w-80"
				/>
				<a
					href="#skip"
					className="flex items-center gap-1 justify-self-end text-sm text-muted-foreground md:col-start-3 md:row-start-1"
				>
					Skip setup <ArrowRight className="size-4" />
				</a>
			</header>
			<div className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8">
				<div className="flex flex-col gap-3 text-center">
					<h1 className="text-3xl leading-tight md:text-5xl">What will you use Keep for first?</h1>
					<p className="text-muted-foreground">
						We'll set up your first project and views to match. You can add the others later.
					</p>
				</div>
				<RadioGroup defaultValue="product" className="grid gap-3 sm:grid-cols-2">
					{options.map((option) => (
						<FieldLabel key={option.id} htmlFor={`wizard-${option.id}`}>
							<Field orientation="horizontal">
								<FieldContent>
									<FieldTitle>{option.title}</FieldTitle>
									<FieldDescription>{option.text}</FieldDescription>
								</FieldContent>
								<RadioGroupItem value={option.id} id={`wizard-${option.id}`} />
							</Field>
						</FieldLabel>
					))}
				</RadioGroup>
				<div className="mt-auto grid grid-cols-2 gap-3 sm:flex sm:justify-between">
					<Button variant="outline" size="lg">
						Back
					</Button>
					<Button size="lg">Continue</Button>
				</div>
			</div>
		</section>
	)
}
