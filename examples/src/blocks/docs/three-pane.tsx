import { Info, Menu, Search } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Code } from "@/demo/device"
import { Logo } from "@/demo/logo"
import { cn } from "@/lib/utils"

const tabs = ["Guides", "CLI", "API", "Changelog"]

const nav = [
	{ group: "Get started", pages: ["Quickstart", "Core ideas", "Invite your team"] },
	{ group: "Projects", pages: ["Write a plan", "Owners and roles", "Statuses"] },
	{ group: "Releases", pages: ["Release checklists", "Release notes"] },
	{ group: "Care", pages: ["Move a project into care", "Health checks", "Yearly reviews"] },
]

const active = "Move a project into care"

const toc = [
	{ id: "before", label: "Before you start" },
	{ id: "cli", label: "Move it from the CLI" },
	{ id: "owner", label: "Choose an owner" },
	{ id: "review", label: "Set the review date" },
	{ id: "next", label: "What happens next" },
]

export default function DocsThreePane() {
	return (
		<section className="min-h-[720px]">
			<header className="border-b">
				<div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 md:px-8">
					<Button variant="ghost" size="icon-sm" className="-ml-2 lg:hidden" aria-label="Menu">
						<Menu />
					</Button>
					<span className="flex items-center gap-2">
						<Logo className="text-base" />
						<span className="text-sm text-muted-foreground">Docs</span>
					</span>
					<nav className="hidden gap-5 text-sm md:flex">
						{tabs.map((tab, index) => (
							<a key={tab} href="#tab" className={cn(index === 0 ? "font-medium" : "text-muted-foreground")}>
								{tab}
							</a>
						))}
					</nav>
					<span className="ml-auto hidden w-56 items-center gap-2 rounded-md border px-2 py-1.5 text-sm text-muted-foreground md:flex">
						<Search className="size-4" /> Search docs
						<Kbd className="ml-auto">⌘K</Kbd>
					</span>
					<Button variant="ghost" size="icon-sm" className="ml-auto md:hidden" aria-label="Search">
						<Search />
					</Button>
				</div>
			</header>
			<div className="mx-auto grid max-w-6xl gap-10 px-4 py-8 md:px-8 lg:grid-cols-[13rem_1fr_11rem] lg:py-10">
				<nav className="hidden flex-col gap-6 text-sm lg:flex">
					{nav.map(({ group, pages }) => (
						<div key={group} className="flex flex-col gap-1">
							<span className="px-2 pb-1 text-xs font-medium text-muted-foreground">{group}</span>
							{pages.map((page) => (
								<a
									key={page}
									href="#page"
									className={cn(
										"rounded-md px-2 py-1",
										page === active ? "bg-accent font-medium text-accent-foreground" : "text-muted-foreground",
									)}
								>
									{page}
								</a>
							))}
						</div>
					))}
				</nav>
				<article className="flex min-w-0 max-w-2xl flex-col gap-5">
					<span className="text-sm text-muted-foreground">Care</span>
					<h1 className="text-3xl md:text-4xl">{active}</h1>
					<Select defaultValue="cli">
						<SelectTrigger className="w-full lg:hidden" aria-label="On this page">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{toc.map((item) => (
								<SelectItem key={item.id} value={item.id}>
									{item.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<p className="leading-relaxed text-muted-foreground">
						A project moves into care when its last planned release ships. It keeps an owner, gets a weekly health
						check, and comes back for review once a year, so it never drifts without anyone noticing.
					</p>
					<h2 className="text-xl">Move it from the CLI</h2>
					<p className="leading-relaxed text-muted-foreground">
						Run <code className="font-mono text-sm text-foreground">keep care</code> in the project's folder. It
						checks that every release is closed, then asks for an owner and a review date.
					</p>
					<Code
						title="Terminal"
						lines={[
							{ text: "keep care billing-rewrite --owner ana --review 2027-11-18", tone: "prompt" },
							{ text: "✓ Releases closed: 1.0 to 1.4", tone: "output" },
							{ text: "✓ Owner: Ana Ruiz · health check every Monday", tone: "output" },
							{ text: "✓ Moved to care: next review 18 Nov 2027", tone: "output" },
						]}
					/>
					<h2 className="text-xl">Choose an owner</h2>
					<p className="leading-relaxed text-muted-foreground">
						The owner answers health checks and runs the yearly review. Pick the person who will still be on the
						team next year, not the one who shipped the last release.
					</p>
					<Alert>
						<Info />
						<AlertDescription>
							Projects in care count towards your plan's project limit. Starter includes three.
						</AlertDescription>
					</Alert>
				</article>
				<aside className="hidden flex-col gap-2 text-sm lg:flex">
					<span className="text-xs font-medium text-muted-foreground">On this page</span>
					{toc.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							className={cn(
								"border-l-2 py-0.5 pl-3",
								item.id === "cli" ? "border-primary font-medium" : "border-transparent text-muted-foreground",
							)}
						>
							{item.label}
						</a>
					))}
				</aside>
			</div>
		</section>
	)
}
