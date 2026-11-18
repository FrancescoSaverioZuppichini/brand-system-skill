import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppShell, RowMenu } from "@/demo/app-nav"
import { Face, ReleaseBadge, releases } from "@/demo/workspace"

const days = Object.groupBy(releases, (release) => release.day)

// [Agent] Group labels stick to the top of the scrolling page, so a long day never loses its heading on a phone.
export default function ListGrouped() {
	return (
		<AppShell
			active="Releases"
			crumbs={["Halden", "Releases"]}
			action={
				<Button size="sm">
					<Plus /> New release
				</Button>
			}
		>
			<div className="mx-auto flex max-w-3xl flex-col gap-2 p-4 md:p-8">
				<h1 className="pb-2 text-xl leading-tight">Releases</h1>
				{Object.entries(days).map(([day, items]) => (
					<section key={day}>
						<h2 className="sticky top-0 z-10 border-b bg-background py-2 text-xs leading-tight text-muted-foreground">
							{day} · {items?.length}
						</h2>
						<ul className="divide-y">
							{items?.map((release) => (
								<li key={release.project} className="flex items-center gap-3 py-3 text-sm">
									<Face name={release.owner} />
									<div className="flex min-w-0 flex-1 flex-col">
										<span className="truncate font-medium">
											{release.project} {release.version}
										</span>
										<span className="truncate text-xs text-muted-foreground">
											{release.owner} · {release.checks} of 5 checks
										</span>
									</div>
									<span className="hidden text-xs text-muted-foreground tabular-nums sm:block">
										{release.time}
									</span>
									<ReleaseBadge state={release.state} />
									<RowMenu items={["Open", "Copy link", "Reschedule"]} className="max-sm:hidden" />
								</li>
							))}
						</ul>
					</section>
				))}
			</div>
		</AppShell>
	)
}
