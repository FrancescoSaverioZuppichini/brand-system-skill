import { FileText, FolderKanban, Rocket } from "lucide-react"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"
import { AppShell } from "@/demo/app-nav"
import { Photo } from "@/demo/photo"
import { ProjectsTable } from "@/demo/table"

const groups: { heading: string; results: { title: string; meta: string; thumb: ReactNode }[] }[] = [
	{
		heading: "Projects",
		results: [
			{ title: "Client reports", meta: "Project · Shipping · Priya Shah", thumb: <FolderKanban /> },
			{ title: "Client reports 3.1", meta: "Release · shipped yesterday", thumb: <Rocket /> },
		],
	},
	{
		heading: "Templates",
		results: [
			{
				title: "Yearly client review",
				meta: "Ostra · 640 uses",
				thumb: <Photo scene="person" className="size-full" />,
			},
			{
				title: "Client onboarding",
				meta: "Halden · 410 uses",
				thumb: <Photo scene="place" className="size-full" />,
			},
		],
	},
	{
		heading: "Docs",
		results: [
			{ title: "Client spaces", meta: "Give each client a read-only view", thumb: <FileText /> },
			{ title: "Invite a client to a project", meta: "Guides · 2 min read", thumb: <FileText /> },
		],
	},
]

// [Agent] One cmdk Command for both widths: from md up the input is a field and the list hangs under it as the
// dropdown; below md the same Command turns into a fixed full-screen layer with a Cancel button, the phone pattern.
function Search() {
	return (
		<Command
			shouldFilter={false}
			className="max-md:fixed max-md:inset-0 max-md:z-50 max-md:rounded-none max-md:bg-background md:relative md:h-auto md:overflow-visible md:border md:bg-background md:shadow-xs md:[&_[data-slot=command-input-wrapper]]:border-b-0"
		>
			<div className="flex items-center max-md:border-b max-md:pr-2 max-md:[&_[data-slot=command-input-wrapper]]:h-14 [&_[data-slot=command-input-wrapper]]:flex-1 max-md:[&_[data-slot=command-input-wrapper]]:border-b-0">
				<CommandInput value="client" placeholder="Search projects, templates and docs" />
				<Button variant="ghost" size="sm" className="md:hidden">
					Cancel
				</Button>
			</div>
			<CommandList className="max-md:max-h-none max-md:flex-1 md:absolute md:inset-x-0 md:top-full md:z-10 md:mt-1 md:max-h-none md:rounded-md md:border md:bg-popover md:shadow-md">
				{groups.map((group) => (
					<CommandGroup key={group.heading} heading={group.heading}>
						{group.results.map((result) => (
							<CommandItem key={result.title} value={result.title} className="gap-3">
								<span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-muted">
									{result.thumb}
								</span>
								<span className="flex min-w-0 flex-col">
									<span className="truncate font-medium">{result.title}</span>
									<span className="truncate text-xs text-muted-foreground">{result.meta}</span>
								</span>
							</CommandItem>
						))}
					</CommandGroup>
				))}
				<div className="flex items-center justify-between border-t px-3 py-2.5 text-xs text-muted-foreground">
					See all 14 results for “client”
					<Kbd>↵</Kbd>
				</div>
			</CommandList>
		</Command>
	)
}

export default function SearchInstant() {
	return (
		<AppShell active="Projects" crumbs={["Halden", "Projects"]}>
			<div className="flex flex-col gap-4 p-4 md:p-6">
				<h1 className="text-xl leading-tight">Projects</h1>
				<div className="max-w-xl">
					<Search />
				</div>
				<ProjectsTable />
			</div>
		</AppShell>
	)
}
