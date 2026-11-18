import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppShell, Pick } from "@/demo/app-nav"
import { allProjects, releases, workspace } from "@/demo/workspace"

const rows = [
	{
		id: "ws-name",
		label: "Workspace name",
		line: "Shown to clients on shared pages.",
		field: <Input id="ws-name" defaultValue={workspace.name} />,
	},
	{
		id: "ws-url",
		label: "Workspace address",
		line: "Changing it breaks old links.",
		field: (
			<InputGroup>
				<InputGroupAddon>keep.app/</InputGroupAddon>
				<InputGroupInput id="ws-url" defaultValue="halden" className="pl-0.5" />
			</InputGroup>
		),
	},
	{
		id: "ws-zone",
		label: "Time zone",
		line: "Health checks and reviews run on this clock.",
		field: (
			<Pick
				value="Europe/Stockholm (CET)"
				options={["Europe/Stockholm (CET)", "Europe/London (GMT)", "America/New_York (EST)"]}
			/>
		),
	},
	{
		id: "ws-review",
		label: "Default review",
		line: "New care plans start with this schedule.",
		field: <Pick value="Every year" options={["Every 6 months", "Every year", "Every 2 years"]} />,
	},
]

const tabs = ["General", "Care defaults", "Integrations", "Export"]

// [Agent] Rows are label-left, field-right from md and stack below it; the danger zone is the only card with a
// coloured border, so it can't be mistaken for another settings group.
export default function SettingsTabs() {
	return (
		<AppShell active="Settings" crumbs={["Settings", "Workspace"]}>
			<div className="mx-auto flex max-w-4xl flex-col gap-6 p-4 md:p-8">
				<h1 className="text-xl leading-tight">Workspace settings</h1>
				<Tabs defaultValue="General" className="gap-6">
					<TabsList variant="line" className="w-full justify-start overflow-x-auto border-b">
						{tabs.map((tab) => (
							<TabsTrigger key={tab} value={tab} className="flex-none">
								{tab}
							</TabsTrigger>
						))}
					</TabsList>
					<TabsContent value="General" className="flex flex-col gap-6">
						<Card className="gap-0 p-0">
							<div className="divide-y">
								{rows.map((row) => (
									<div key={row.id} className="grid gap-3 p-4 md:grid-cols-2 md:items-center md:gap-8 md:p-5">
										<div className="flex flex-col gap-0.5">
											<label htmlFor={row.id} className="text-sm font-medium">
												{row.label}
											</label>
											<span className="text-sm text-muted-foreground">{row.line}</span>
										</div>
										{row.field}
									</div>
								))}
							</div>
							<div className="flex justify-end border-t p-4 md:px-5">
								<Button>Save changes</Button>
							</div>
						</Card>
						<Card className="gap-4 border-destructive/60 p-4 md:flex-row md:items-center md:p-5">
							<div className="flex flex-1 flex-col gap-1">
								<h2 className="text-base leading-tight text-destructive">Delete workspace</h2>
								<p className="text-sm text-muted-foreground">
									Deletes {allProjects.length} projects, {releases.length} releases and every care plan.
									Export first; this can't be undone.
								</p>
							</div>
							<Button
								variant="outline"
								className="border-destructive/60 text-destructive hover:text-destructive"
							>
								Delete workspace
							</Button>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</AppShell>
	)
}
