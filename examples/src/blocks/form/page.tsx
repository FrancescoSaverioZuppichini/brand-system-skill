import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Switch } from "@/components/ui/switch"
import { AppShell, Pick } from "@/demo/app-nav"
import { people } from "@/demo/content"
import { allProjects } from "@/demo/workspace"

const names = people.map((person) => person.name)

const reviews = [
	{ id: "yearly", title: "Yearly review", line: "First review on 4 Dec 2027, then every year.", on: true },
	{
		id: "report",
		title: "Send Northwind a care report",
		line: "A one-page summary after each review.",
		on: true,
	},
	{
		id: "weekend",
		title: "Hold alerts at weekends",
		line: "Failures from Saturday wait until Monday 08:00.",
		on: false,
	},
]

function Section({ title, line, children }: { title: string; line: string; children: React.ReactNode }) {
	return (
		<section className="grid gap-3 md:grid-cols-[14rem_1fr] md:gap-8">
			<div className="flex flex-col gap-1">
				<h2 className="text-base leading-tight">{title}</h2>
				<p className="text-sm text-muted-foreground">{line}</p>
			</div>
			<Card className="p-4 md:p-5">{children}</Card>
		</section>
	)
}

export default function FormPage() {
	return (
		<AppShell active="Care" crumbs={["Care", "New care plan"]} className="md:h-[1080px]">
			<div className="mx-auto flex max-w-4xl flex-col gap-8 p-4 md:p-8">
				<div className="flex flex-col gap-1">
					<h1 className="text-xl leading-tight">Set up care</h1>
					<p className="text-sm text-muted-foreground">
						A shipped project gets an owner, a health check and a yearly review.
					</p>
				</div>
				<Section title="Project" line="Which project moves into care, and who looks after it.">
					<FieldGroup className="gap-4">
						<Field>
							<FieldLabel>Project</FieldLabel>
							<Pick value={allProjects[0].name} options={allProjects.map((project) => project.name)} />
						</Field>
						<div className="grid gap-4 sm:grid-cols-2">
							<Field>
								<FieldLabel>Owner</FieldLabel>
								<Pick value={names[0]} options={names} />
							</Field>
							<Field>
								<FieldLabel>Backup owner</FieldLabel>
								<Pick value={names[1]} options={names} />
							</Field>
						</div>
					</FieldGroup>
				</Section>
				<Section title="Health check" line="Keep calls this address and alerts the owner when it fails.">
					<FieldGroup className="gap-4">
						<Field>
							<FieldLabel htmlFor="health-url">Address</FieldLabel>
							<InputGroup>
								<InputGroupAddon>https://</InputGroupAddon>
								<InputGroupInput
									id="health-url"
									defaultValue="billing.northwind.com/health"
									className="pl-0.5"
								/>
							</InputGroup>
						</Field>
						<div className="grid gap-4 sm:grid-cols-2">
							<Field>
								<FieldLabel>Check every</FieldLabel>
								<Pick value="Hour" options={["5 minutes", "Hour", "Day"]} />
							</Field>
							<Field>
								<FieldLabel>Alert after</FieldLabel>
								<Pick
									value="2 failures in a row"
									options={["1 failure", "2 failures in a row", "3 failures in a row"]}
								/>
							</Field>
						</div>
					</FieldGroup>
				</Section>
				<Section title="Reviews" line="What happens once a year, and who hears about it.">
					<FieldGroup className="gap-5">
						{reviews.map((review) => (
							<Field key={review.id} orientation="horizontal">
								<FieldContent>
									<FieldLabel htmlFor={review.id}>{review.title}</FieldLabel>
									<FieldDescription>{review.line}</FieldDescription>
								</FieldContent>
								<Switch id={review.id} defaultChecked={review.on} />
							</Field>
						))}
					</FieldGroup>
				</Section>
				<div className="flex flex-col-reverse gap-2 border-t pt-6 sm:flex-row sm:justify-end">
					<Button variant="outline">Cancel</Button>
					<Button>Start care</Button>
				</div>
			</div>
		</AppShell>
	)
}
