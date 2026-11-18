import type { ReactNode } from "react"
import { Sparkline } from "@/demo/chart"
import { people, stats } from "@/demo/content"
import { Face, notices } from "@/demo/inbox"
import { ProjectList } from "@/demo/phone-screens"
import { PhoneStates, TabBar } from "@/demo/phone-app"
import { Logo } from "@/demo/logo"
import { ReleaseBadge, releases } from "@/demo/workspace"
import { cn } from "@/lib/utils"

// [Agent] On-time share per quarter minus a floor of 80%, so the sparkline (scaled from zero) shows the climb to 94%.
const onTime = [6, 8, 7, 10, 11, 9, 12, 14]
const thisWeek = releases.filter((release) => release.state !== "Released")

function Screen({ tab, children }: { tab: string; children: ReactNode }) {
	return (
		<div className="flex min-h-0 flex-1 flex-col">
			<div className="min-h-0 flex-1 overflow-hidden">{children}</div>
			<TabBar active={tab} />
		</div>
	)
}

function Home() {
	return (
		<Screen tab="Home">
			<div className="flex flex-col gap-5 p-4">
				<div className="flex items-center justify-between">
					<Logo className="text-base" />
					<Face name={people[0].name} />
				</div>
				<h1 className="text-2xl leading-tight">Morning, Ana</h1>
				<div className="flex items-end justify-between gap-4 rounded-xl border bg-card p-4">
					<div className="flex flex-col gap-1">
						<span className="text-sm text-muted-foreground">{stats[1].label}</span>
						<span className="text-3xl font-semibold tabular-nums">{stats[1].value}</span>
						<span className="w-fit rounded-md bg-muted px-1.5 py-0.5 text-xs whitespace-nowrap">
							{stats[1].delta}
						</span>
					</div>
					<Sparkline data={onTime} className="h-12 w-20" />
				</div>
				<div className="flex flex-col">
					<span className="pb-1 text-sm font-medium">Releases this week</span>
					{thisWeek.map((release) => (
						<div key={release.project} className="flex items-center gap-3 border-b py-3 last:border-0">
							<Face name={release.owner} className="size-9" />
							<div className="flex min-w-0 flex-1 flex-col">
								<span className="truncate text-sm font-medium">
									{release.project} {release.version}
								</span>
								<span className="truncate text-xs text-muted-foreground">
									{release.checks} of 5 checks · {release.day}
								</span>
							</div>
							<ReleaseBadge state={release.state} />
						</div>
					))}
				</div>
			</div>
		</Screen>
	)
}

function Inbox() {
	return (
		<Screen tab="Inbox">
			<div className="flex flex-col p-4">
				<span className="pb-2 text-base font-semibold">Inbox</span>
				{notices.slice(0, 6).map((notice) => (
					<div key={notice.text} className="flex gap-3 border-b py-3 text-xs last:border-0">
						<Face name={notice.from} />
						<div className="flex min-w-0 flex-1 flex-col gap-0.5">
							<span className={cn("line-clamp-2", !notice.unread && "text-muted-foreground")}>
								<span className="font-medium text-foreground">{notice.from}</span> {notice.text}
							</span>
							<span className="text-muted-foreground">
								{notice.project} · {notice.time}
							</span>
						</div>
						{notice.unread && <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />}
					</div>
				))}
			</div>
		</Screen>
	)
}

export default function MobileHome() {
	return (
		<PhoneStates
			states={[
				{ label: "Home", screen: <Home /> },
				{
					label: "Projects tab",
					screen: (
						<Screen tab="Projects">
							<ProjectList />
						</Screen>
					),
				},
				{ label: "Inbox tab", screen: <Inbox /> },
			]}
		/>
	)
}
