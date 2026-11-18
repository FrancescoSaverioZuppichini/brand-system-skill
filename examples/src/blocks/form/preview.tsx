import { ChevronDown, Copy, Link2 } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { AppShell, me, Pick } from "@/demo/app-nav"
import { Photo } from "@/demo/photo"

const note = {
	title: "Billing rewrite 1.4: new invoices for every account",
	domain: "notes.halden.studio",
	slug: "billing-1-4",
	text: "On 20 Nov every Northwind account moves to the new invoice model. Here is what changes, and what stays.",
}

// [Agent] Both panels are force-mounted tabs: on a phone the tab bar picks one (Edit or Preview), from md the tab
// bar is hidden and the inactive panel is shown again, so the same markup is a split view on desktop.
export default function FormPreview() {
	return (
		<AppShell active="Releases" crumbs={["Releases", "Billing rewrite 1.4", "Release notes"]}>
			<Tabs
				defaultValue="edit"
				className="gap-0 md:grid md:h-full md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
			>
				<TabsList className="m-4 mb-0 grid grid-cols-2 md:hidden">
					<TabsTrigger value="edit">Edit</TabsTrigger>
					<TabsTrigger value="preview">Preview</TabsTrigger>
				</TabsList>
				<TabsContent
					value="edit"
					forceMount
					className="flex flex-col gap-6 p-4 data-[state=inactive]:hidden md:overflow-y-auto md:p-6 md:data-[state=inactive]:flex"
				>
					<div className="flex flex-col gap-1">
						<h1 className="text-xl leading-tight">Publish release notes</h1>
						<p className="text-sm text-muted-foreground">
							A public page for 1.4 that you can send to Northwind.
						</p>
					</div>
					<FieldGroup className="gap-4">
						<Field>
							<FieldLabel htmlFor="note-title">Title</FieldLabel>
							<Input id="note-title" defaultValue={note.title} />
						</Field>
						<Field>
							<FieldLabel htmlFor="note-slug">Link</FieldLabel>
							<div className="flex flex-col gap-2 sm:flex-row">
								<Pick
									value={note.domain}
									options={[note.domain, "keep.app/halden"]}
									className="sm:w-48 sm:shrink-0"
								/>
								<InputGroup>
									<InputGroupAddon>/</InputGroupAddon>
									<InputGroupInput id="note-slug" defaultValue={note.slug} className="pl-0.5" />
								</InputGroup>
							</div>
						</Field>
						<Field>
							<FieldLabel htmlFor="note-text">Description</FieldLabel>
							<Textarea id="note-text" defaultValue={note.text} className="min-h-20" />
							<FieldDescription>Shown under the title when the link is shared.</FieldDescription>
						</Field>
						<div className="grid gap-4 sm:grid-cols-2">
							<Field>
								<FieldLabel>Who can open it</FieldLabel>
								<Pick
									value="Anyone with the link"
									options={["Anyone with the link", "Northwind, with a password"]}
								/>
							</Field>
							<Field>
								<FieldLabel>Expires</FieldLabel>
								<Pick value="Never" options={["Never", "In 30 days", "On a date"]} />
							</Field>
						</div>
					</FieldGroup>
					<Collapsible>
						<CollapsibleTrigger className="flex w-full items-center justify-between gap-2 border-y py-3 text-left text-sm">
							<span className="flex flex-col">
								<span className="font-medium">Advanced options</span>
								<span className="text-xs text-muted-foreground">UTM tags, card image, search indexing</span>
							</span>
							<ChevronDown className="size-4 text-muted-foreground" />
						</CollapsibleTrigger>
					</Collapsible>
					<div className="flex flex-col-reverse gap-2 sm:flex-row">
						<Button variant="outline">
							<Copy /> Copy link
						</Button>
						<Button className="sm:ml-auto">Publish notes</Button>
					</div>
				</TabsContent>
				<TabsContent
					value="preview"
					forceMount
					className="flex flex-col gap-4 bg-muted/60 p-4 data-[state=inactive]:hidden md:border-l md:p-8 md:data-[state=inactive]:flex"
				>
					<span className="text-xs font-medium text-muted-foreground">Preview · as it unfurls in chat</span>
					<div className="flex gap-3 rounded-lg border bg-background p-4">
						<Avatar className="size-8">
							<AvatarFallback className="text-[11px]">{me.initials}</AvatarFallback>
						</Avatar>
						<div className="flex min-w-0 flex-1 flex-col gap-2 text-sm">
							<span>
								<span className="font-medium">{me.name}</span>{" "}
								<span className="text-xs text-muted-foreground">10:48</span>
							</span>
							<span>Notes for tomorrow's migration, all in one place:</span>
							<span className="flex items-center gap-1 text-primary underline underline-offset-2">
								<Link2 className="size-3.5" /> {note.domain}/{note.slug}
							</span>
							<div className="flex max-w-sm flex-col overflow-hidden rounded-md border-l-4 border-l-border bg-muted/50">
								<Photo scene="object" className="aspect-[1.91/1]" />
								<div className="flex flex-col gap-1 p-3">
									<span className="text-xs text-muted-foreground">{note.domain}</span>
									<span className="font-medium">{note.title}</span>
									<span className="line-clamp-2 text-muted-foreground">{note.text}</span>
								</div>
							</div>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</AppShell>
	)
}
