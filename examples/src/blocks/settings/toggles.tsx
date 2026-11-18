import { Switch } from "@/components/ui/switch"
import { AppShell } from "@/demo/app-nav"

const rows = [
	{
		id: "signoff",
		title: "A release needs your sign-off",
		line: "When a release you own reaches its last check.",
		on: true,
	},
	{
		id: "failed",
		title: "A health check fails",
		line: "For projects you own or back up, after 2 failures in a row.",
		on: true,
	},
	{ id: "review", title: "A yearly review is due", line: "A week before, and on the day.", on: true },
	{ id: "mention", title: "Someone mentions you", line: "In plans, release notes and comments.", on: true },
	{ id: "digest", title: "Weekly digest", line: "Monday at 08:00: what shipped and what's due.", on: false },
	{ id: "news", title: "News from Keep", line: "New features, about once a month.", on: false },
]

export default function SettingsToggles() {
	return (
		<AppShell active="Settings" crumbs={["Settings", "Notifications"]}>
			<div className="mx-auto flex max-w-2xl flex-col gap-6 p-4 md:p-8">
				<div className="flex flex-col gap-1">
					<h1 className="text-xl leading-tight">Notifications</h1>
					<p className="text-sm text-muted-foreground">
						Email to ana@halden.studio. Urgent ones also go to your phone.
					</p>
				</div>
				<ul className="divide-y border-y">
					{rows.map((row) => (
						<li key={row.id} className="flex items-center justify-between gap-6 py-4">
							<label htmlFor={row.id} className="flex flex-col gap-0.5">
								<span className="text-sm font-medium">{row.title}</span>
								<span className="text-sm text-muted-foreground">{row.line}</span>
							</label>
							<Switch id={row.id} defaultChecked={row.on} />
						</li>
					))}
				</ul>
			</div>
		</AppShell>
	)
}
