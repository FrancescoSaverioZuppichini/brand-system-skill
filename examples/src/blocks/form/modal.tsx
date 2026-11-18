import { ChevronDown } from "lucide-react"
import ListTable from "@/blocks/list/table"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Pick } from "@/demo/app-nav"
import { customers, people } from "@/demo/content"

// [Agent] The dialog opens over the real projects list (list/table): Radix portals it to <body> and the list is the
// shooter's 900 px viewport, so the dim covers the shot exactly. Below sm the dialog fills the screen and the
// footer drops to the bottom, where the thumb is.
export default function FormModal() {
	return (
		<>
			<ListTable />
			<Dialog open>
				<DialogContent
					onOpenAutoFocus={(event) => event.preventDefault()}
					className="max-sm:top-0 max-sm:left-0 max-sm:flex max-sm:h-full max-sm:max-w-full max-sm:translate-x-0 max-sm:translate-y-0 max-sm:flex-col max-sm:rounded-none max-sm:border-0 sm:max-w-md"
				>
					<DialogHeader>
						<DialogTitle>New project</DialogTitle>
						<DialogDescription>A one-page plan. You can change all of this later.</DialogDescription>
					</DialogHeader>
					<FieldGroup className="gap-4">
						<Field>
							<FieldLabel htmlFor="project-name">Name</FieldLabel>
							<Input id="project-name" defaultValue="Booking app redesign" />
						</Field>
						<Field>
							<FieldLabel>Client</FieldLabel>
							<Pick value={customers[2]} options={customers} />
						</Field>
						<Field>
							<FieldLabel>Owner</FieldLabel>
							<Pick value={people[2].name} options={people.map((person) => person.name)} />
							<FieldDescription>The owner signs off releases and gets the care alerts.</FieldDescription>
						</Field>
					</FieldGroup>
					<Collapsible>
						<CollapsibleTrigger className="flex w-full items-center justify-between gap-2 border-y py-3 text-left text-sm">
							<span className="flex flex-col">
								<span className="font-medium">Advanced options</span>
								<span className="text-xs text-muted-foreground">Template, start date, care schedule</span>
							</span>
							<ChevronDown className="size-4 text-muted-foreground" />
						</CollapsibleTrigger>
					</Collapsible>
					<DialogFooter className="max-sm:mt-auto">
						<Button variant="outline">Cancel</Button>
						<Button>Create project</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}
