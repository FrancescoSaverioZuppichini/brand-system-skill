import { ArrowLeft, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppShell } from "@/demo/app-nav"
import { notices } from "@/demo/inbox"
import { Face } from "@/demo/workspace"
import { ProjectsTable } from "@/demo/table"
import { cn } from "@/lib/utils"

const unread = notices.filter((notice) => notice.unread).length

function Notice({ notice }: { notice: (typeof notices)[number] }) {
	return (
		<a href="#top" className="flex gap-3 px-4 py-3 hover:bg-accent/50">
			<Face name={notice.from} />
			<span className="flex min-w-0 flex-1 flex-col gap-0.5 text-sm">
				<span className={cn(!notice.unread && "text-muted-foreground")}>
					<span className="font-medium text-foreground">{notice.from}</span> {notice.text}
				</span>
				<span className="text-xs text-muted-foreground">
					{notice.project} · {notice.time}
				</span>
			</span>
			<span className={cn("mt-1.5 size-2 shrink-0 rounded-full", notice.unread ? "bg-primary" : "invisible")}>
				<span className="sr-only">{notice.unread ? "Unread" : "Read"}</span>
			</span>
		</a>
	)
}

function Panel({ back }: { back?: boolean }) {
	return (
		<Tabs defaultValue="all" className="gap-0">
			<div className="flex items-center gap-2 px-4 pt-3">
				{back && (
					<Button variant="ghost" size="icon-sm" className="-ml-2" aria-label="Back">
						<ArrowLeft />
					</Button>
				)}
				<h2 className="text-base leading-tight">Notifications</h2>
				<Button variant="link" size="sm" className="ml-auto px-0">
					Mark all read
				</Button>
			</div>
			<TabsList variant="line" className="w-full justify-start border-b px-2">
				<TabsTrigger value="all" className="flex-none">
					All <span className="text-muted-foreground tabular-nums">{unread}</span>
				</TabsTrigger>
				<TabsTrigger value="mentions" className="flex-none">
					Mentions
				</TabsTrigger>
			</TabsList>
			{(["all", "mentions"] as const).map((tab) => (
				<TabsContent key={tab} value={tab} className="flex flex-col divide-y">
					{notices
						.filter((notice) => tab === "all" || notice.kind === "Mention")
						.slice(0, 6)
						.map((notice) => (
							<Notice key={notice.text} notice={notice} />
						))}
				</TabsContent>
			))}
			<a href="#top" className="block border-t px-4 py-3 text-center text-sm font-medium">
				Open inbox
			</a>
		</Tabs>
	)
}

// [Agent] The real Popover, open and portalled under the bell; AppShell is the shooter's 900 px viewport, so Radix
// places it on the block. Phones hide it and show the same panel as its own full screen instead of the page.
export default function NotificationsPopover() {
	return (
		<>
			<div className="flex h-[900px] flex-col md:hidden">
				<Panel back />
			</div>
			<AppShell
				active="Projects"
				crumbs={["Halden", "Projects"]}
				className="max-md:hidden"
				action={
					<Popover open>
						<PopoverTrigger asChild>
							<Button
								variant="ghost"
								size="icon-sm"
								className="relative bg-accent"
								aria-label={`${unread} unread`}
							>
								<Bell />
								<span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-primary" />
							</Button>
						</PopoverTrigger>
						<PopoverContent
							align="end"
							className="w-96 p-0 max-md:hidden"
							onOpenAutoFocus={(event) => event.preventDefault()}
						>
							<Panel />
						</PopoverContent>
					</Popover>
				}
			>
				<div className="flex flex-col gap-4 p-6">
					<h1 className="text-xl leading-tight">Projects</h1>
					<ProjectsTable />
				</div>
			</AppShell>
		</>
	)
}
