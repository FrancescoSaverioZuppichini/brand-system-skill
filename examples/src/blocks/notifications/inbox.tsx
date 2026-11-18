import { Check, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppShell, RowMenu } from "@/demo/app-nav"
import { Face, notices } from "@/demo/inbox"
import { ReleaseBadge, releases } from "@/demo/workspace"
import { cn } from "@/lib/utils"

const tabs = ["All", "Request", "Mention"] as const
const open = notices[0]
const release = releases.find((item) => item.project === open.project)
const checks = [
	"Changelog written",
	"Migration tested",
	"Owner signed off",
	"Care date set",
	"Client notified",
]

function List() {
	return (
		<Tabs defaultValue="All" className="gap-0">
			<TabsList variant="line" className="w-full justify-start border-b px-2">
				{tabs.map((tab) => (
					<TabsTrigger key={tab} value={tab} className="flex-none">
						{tab === "All" ? tab : `${tab}s`}
						<span className="text-muted-foreground tabular-nums">
							{notices.filter((notice) => tab === "All" || notice.kind === tab).length}
						</span>
					</TabsTrigger>
				))}
			</TabsList>
			{tabs.map((tab) => (
				<TabsContent key={tab} value={tab} className="flex flex-col gap-1 p-2">
					{notices
						.filter((notice) => tab === "All" || notice.kind === tab)
						.map((notice) => (
							<a
								key={notice.text}
								href="#top"
								aria-current={notice === open ? "true" : undefined}
								className={cn(
									"flex gap-3 rounded-md p-2.5 text-sm",
									notice === open ? "bg-accent text-accent-foreground" : "hover:bg-accent/50",
								)}
							>
								<Face name={notice.from} />
								<span className="flex min-w-0 flex-1 flex-col gap-0.5">
									<span className="flex items-baseline gap-2">
										<span className={cn("truncate", notice.unread && "font-medium")}>{notice.from}</span>
										<span className="ml-auto shrink-0 text-xs text-muted-foreground">{notice.time}</span>
									</span>
									<span className="truncate text-muted-foreground">{notice.text}</span>
									<span className="text-xs text-muted-foreground">{notice.project}</span>
								</span>
							</a>
						))}
				</TabsContent>
			))}
		</Tabs>
	)
}

function Message() {
	if (!release) return null
	return (
		<article className="flex max-w-2xl flex-col gap-6 p-6 lg:p-8">
			<div className="flex flex-wrap items-center gap-3">
				<Face name={open.from} className="size-10" />
				<div className="flex flex-col text-sm">
					<span className="font-medium">{open.from}</span>
					<span className="text-muted-foreground">To you · {open.time} ago</span>
				</div>
				<div className="ml-auto flex items-center gap-2">
					<Button variant="outline">Request changes</Button>
					<Button>Approve release</Button>
					<RowMenu items={["Mark as unread", "Snooze until tomorrow", "Open release"]} />
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<h2 className="text-xl leading-tight">
					{release.project} {release.version} is ready for Thursday
				</h2>
				<p className="text-sm leading-relaxed text-muted-foreground">
					Hi Ana, {release.checks} of 5 checks pass. The migration ran on a copy of production on Monday with
					no errors, and the rollback plan is in the release notes. The client note goes out when you approve.
				</p>
			</div>
			<div className="flex flex-col rounded-lg border">
				<div className="flex items-center justify-between gap-2 border-b px-4 py-3 text-sm">
					<span className="font-medium">
						Release {release.version} · {release.checks} of 5 checks
					</span>
					<ReleaseBadge state={release.state} />
				</div>
				{checks.map((check, index) => (
					<span
						key={check}
						className={cn(
							"flex items-center gap-2 border-b px-4 py-2.5 text-sm last:border-0",
							index >= release.checks && "text-muted-foreground",
						)}
					>
						{index < release.checks ? (
							<Check className="size-4 text-chart-2" />
						) : (
							<Circle className="size-4" />
						)}
						{check}
					</span>
				))}
			</div>
		</article>
	)
}

export default function NotificationsInbox() {
	return (
		<AppShell active="Inbox" crumbs={["Halden", "Inbox"]}>
			<div className="flex h-full">
				<div className="w-full shrink-0 overflow-y-auto md:w-80 md:border-r lg:w-96">
					<div className="flex items-baseline gap-2 px-4 pt-4 pb-2">
						<h1 className="text-xl leading-tight">Inbox</h1>
						<span className="text-sm text-muted-foreground">
							{notices.filter((notice) => notice.unread).length} unread
						</span>
					</div>
					<List />
				</div>
				<div className="hidden min-w-0 flex-1 overflow-y-auto md:block">
					<Message />
				</div>
			</div>
		</AppShell>
	)
}
