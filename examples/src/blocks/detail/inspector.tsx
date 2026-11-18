import { UserPlus, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AppShell, Pick, RowMenu } from "@/demo/app-nav"
import { Face, workspace } from "@/demo/workspace"

type Role = "Admin" | "Member" | "Viewer"

const members: { name: string; email: string; role: Role; projects: number; active: string }[] = [
	{ name: "Ana Ruiz", email: "ana@halden.studio", role: "Admin", projects: 4, active: "Now" },
	{ name: "Tomás Berg", email: "tomas@halden.studio", role: "Member", projects: 3, active: "1h ago" },
	{ name: "Mei Okafor", email: "mei@halden.studio", role: "Member", projects: 3, active: "3h ago" },
	{ name: "Jonas Lind", email: "jonas@halden.studio", role: "Member", projects: 2, active: "4d ago" },
	{ name: "Priya Shah", email: "priya@halden.studio", role: "Member", projects: 2, active: "2w ago" },
	{ name: "Leo Marchetti", email: "leo@halden.studio", role: "Admin", projects: 3, active: "40m ago" },
	{ name: "Sara Lindqvist", email: "sara@halden.studio", role: "Member", projects: 1, active: "Yesterday" },
	{ name: "Omar Haddad", email: "omar@halden.studio", role: "Member", projects: 2, active: "2d ago" },
	{ name: "Julia Weber", email: "julia@northwind.com", role: "Viewer", projects: 1, active: "5d ago" },
	{ name: "Kenji Sato", email: "kenji@halden.studio", role: "Member", projects: 0, active: "Invited" },
]

const selected = members[3]

// [Agent] The panel is the same markup at every width: a right column from lg, and below it a bottom sheet that sticks
// to the bottom of the scrolling list (sticky, not a portal), so the table stays in view above it.
export default function DetailInspector() {
	return (
		<AppShell
			active="Members"
			crumbs={["Workspace", "Members"]}
			action={
				<Button size="sm">
					<UserPlus /> Invite
				</Button>
			}
		>
			<div className="flex min-h-full flex-col lg:h-full lg:flex-row">
				<div className="flex flex-1 flex-col gap-4 p-4 md:p-6 lg:overflow-y-auto">
					<div>
						<h1 className="text-xl leading-tight">Members</h1>
						<p className="text-sm text-muted-foreground">
							{workspace.members} of {workspace.seats} seats used
						</p>
					</div>
					<Table>
						<TableHeader className="max-md:hidden">
							<TableRow>
								<TableHead>Member</TableHead>
								<TableHead>Role</TableHead>
								<TableHead className="text-right">Projects</TableHead>
								<TableHead className="text-right">Last active</TableHead>
								<TableHead className="w-10" />
							</TableRow>
						</TableHeader>
						<TableBody>
							{members.map((member) => (
								<TableRow key={member.email} data-state={member === selected ? "selected" : undefined}>
									<TableCell>
										<div className="flex items-center gap-3">
											<Face name={member.name} />
											<div className="flex flex-col">
												<span className="font-medium">{member.name}</span>
												<span className="text-xs text-muted-foreground">{member.email}</span>
											</div>
										</div>
									</TableCell>
									<TableCell className="max-md:text-right">
										<Badge
											variant={member.role === "Admin" ? "secondary" : "outline"}
											className="font-normal"
										>
											{member.role}
										</Badge>
									</TableCell>
									<TableCell className="text-right tabular-nums max-md:hidden">{member.projects}</TableCell>
									<TableCell className="text-right text-muted-foreground max-md:hidden">
										{member.active}
									</TableCell>
									<TableCell className="max-md:hidden">
										<RowMenu items={["Edit", "Resend invite", "Remove"]} />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
				<aside className="sticky bottom-0 flex flex-col gap-5 rounded-t-2xl border-t bg-background p-5 shadow-lg lg:static lg:w-80 lg:shrink-0 lg:overflow-y-auto lg:rounded-none lg:border-t-0 lg:border-l lg:shadow-none">
					<span className="mx-auto -mt-2 h-1 w-10 rounded-full bg-border lg:hidden" />
					<div className="flex items-start justify-between gap-2">
						<div className="flex items-center gap-3">
							<Face name={selected.name} className="size-10" />
							<div className="flex flex-col">
								<h2 className="text-base leading-tight">{selected.name}</h2>
								<span className="text-sm text-muted-foreground">{selected.email}</span>
							</div>
						</div>
						<Button variant="ghost" size="icon-sm" aria-label="Close">
							<X />
						</Button>
					</div>
					<Field>
						<FieldLabel>Role</FieldLabel>
						<Pick value={selected.role} options={["Admin", "Member", "Viewer"]} />
						<FieldDescription>Members plan, ship and look after projects.</FieldDescription>
					</Field>
					<Field orientation="horizontal">
						<FieldLabel htmlFor="rotation" className="flex-col items-start gap-0.5">
							On the care rotation
							<span className="text-xs font-normal text-muted-foreground">Gets health check alerts</span>
						</FieldLabel>
						<Switch id="rotation" defaultChecked />
					</Field>
					<dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-t pt-4 text-sm max-lg:hidden">
						<dt className="text-muted-foreground">Joined</dt>
						<dd className="text-right">12 Mar 2023</dd>
						<dt className="text-muted-foreground">Projects</dt>
						<dd className="text-right">Mobile app, Invoices v2</dd>
						<dt className="text-muted-foreground">Seat</dt>
						<dd className="text-right">${workspace.price} / month</dd>
					</dl>
					<Button className="lg:mt-auto">Save changes</Button>
				</aside>
			</div>
		</AppShell>
	)
}
