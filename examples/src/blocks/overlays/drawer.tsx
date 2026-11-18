import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { AppShell } from "@/demo/app-nav"
import { people } from "@/demo/content"
import { Person, StatusBadge } from "@/demo/table"
import { allProjects } from "@/demo/workspace"

const editing = allProjects[0]

function Projects() {
	return (
		<Table>
			<TableHeader className="max-md:hidden">
				<TableRow>
					<TableHead>Project</TableHead>
					<TableHead>Owner</TableHead>
					<TableHead>Status</TableHead>
					<TableHead className="text-right">Updated</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{allProjects.slice(0, 10).map((project) => (
					<TableRow key={project.name} data-state={project === editing ? "selected" : undefined}>
						<TableCell className="font-medium">{project.name}</TableCell>
						<TableCell>
							<Person name={project.owner} />
						</TableCell>
						<TableCell>
							<StatusBadge status={project.status} />
						</TableCell>
						<TableCell className="text-right text-muted-foreground">{project.updated}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

function Fields() {
	return (
		<FieldGroup className="gap-5 px-4">
			<Field>
				<FieldLabel htmlFor="project-name">Name</FieldLabel>
				<Input id="project-name" defaultValue={editing.name} />
			</Field>
			<div className="grid grid-cols-2 gap-4">
				<Field>
					<FieldLabel>Owner</FieldLabel>
					<Select defaultValue={editing.owner}>
						<SelectTrigger className="w-full">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{people.map((person) => (
								<SelectItem key={person.name} value={person.name}>
									{person.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</Field>
				<Field>
					<FieldLabel>Status</FieldLabel>
					<Select defaultValue={editing.status}>
						<SelectTrigger className="w-full">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{["Planning", "Shipping", "In care", "Paused"].map((status) => (
								<SelectItem key={status} value={status}>
									{status}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</Field>
			</div>
			<Field>
				<FieldLabel htmlFor="project-ships">Ships</FieldLabel>
				<Input id="project-ships" defaultValue="4 Dec 2026" />
			</Field>
			<Field>
				<FieldLabel htmlFor="project-scope">Scope</FieldLabel>
				<Textarea
					id="project-scope"
					rows={4}
					defaultValue="Move invoices and plans to Stripe Billing. Old invoices stay readable; customers keep their card on file."
				/>
			</Field>
			<Field orientation="horizontal">
				<Checkbox id="project-notify" defaultChecked />
				<FieldLabel htmlFor="project-notify" className="font-normal">
					Tell the 4 followers what changed
				</FieldLabel>
			</Field>
		</FieldGroup>
	)
}

// [Agent] The real shadcn Sheet, portalled to <body>: AppShell is exactly the shooter's 900 px viewport, so the panel
// spans the block's full height. Below sm it takes the whole width, which is the full-screen editor phones get.
export default function OverlaysDrawer() {
	return (
		<>
			<AppShell active="Projects" crumbs={["Halden", "Projects"]}>
				<div className="flex flex-col gap-4 p-4 md:p-6">
					<h1 className="text-xl leading-tight">Projects</h1>
					<Projects />
				</div>
			</AppShell>
			<Sheet open>
				<SheetContent
					onOpenAutoFocus={(event) => event.preventDefault()}
					className="w-full gap-2 sm:max-w-md"
				>
					<SheetHeader>
						<SheetTitle>Edit project</SheetTitle>
						<SheetDescription>
							{editing.name} · updated {editing.updated}
						</SheetDescription>
					</SheetHeader>
					<Fields />
					<SheetFooter className="sm:flex-row sm:justify-end">
						<Button variant="outline">Cancel</Button>
						<Button>Save changes</Button>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</>
	)
}
