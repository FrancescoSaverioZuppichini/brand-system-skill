import { ArrowRight, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

const popular = ["keep init", "Care schedules", "Import from Tasklist", "Webhooks", "SAML SSO"]

const sections = [
	{
		title: "Get started",
		text: "Install the CLI and plan a first project.",
		links: ["Quickstart", "Create your first project", "Invite your team"],
		pages: 6,
	},
	{
		title: "Projects",
		text: "Plans, owners, statuses and decisions.",
		links: ["Write a one-page plan", "Owners and roles", "Archive a project"],
		pages: 11,
	},
	{
		title: "Releases",
		text: "Checklists, sign-off and release notes.",
		links: ["Release checklists", "Reusable templates", "Publish release notes"],
		pages: 9,
	},
	{
		title: "Care",
		text: "Look after a project once it ships.",
		links: ["Move a project into care", "Health checks", "Yearly reviews"],
		pages: 7,
	},
	{
		title: "Integrations",
		text: "Connect the tools your team already uses.",
		links: ["GitHub", "GitLab", "Linear"],
		pages: 8,
	},
	{
		title: "API and CLI",
		text: "Script Keep or build on top of it.",
		links: ["CLI reference", "REST API", "Webhooks"],
		pages: 24,
	},
]

export default function DocsSearchFirst() {
	return (
		<section>
			<div className="bg-muted">
				<div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center md:px-8 md:py-20">
					<h1 className="text-4xl md:text-5xl">Keep docs</h1>
					<InputGroup className="h-11 max-w-xl bg-background">
						<InputGroupInput placeholder="Search guides, CLI commands and the API" />
						<InputGroupAddon>
							<Search />
						</InputGroupAddon>
						<InputGroupAddon align="inline-end">
							<Kbd>⌘K</Kbd>
						</InputGroupAddon>
					</InputGroup>
					<div className="flex flex-wrap justify-center gap-2">
						<span className="text-sm text-muted-foreground">Popular:</span>
						{popular.map((topic) => (
							<Badge key={topic} variant="outline" className="bg-background font-normal">
								{topic}
							</Badge>
						))}
					</div>
				</div>
			</div>
			<div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 md:px-8 md:py-16 lg:grid-cols-3">
				{sections.map((section) => (
					<Card key={section.title} className="gap-4 p-5">
						<div className="flex flex-col gap-1">
							<h2 className="text-lg">{section.title}</h2>
							<p className="text-sm text-muted-foreground">{section.text}</p>
						</div>
						<ul className="flex flex-col gap-1.5 text-sm">
							{section.links.map((link) => (
								<li key={link}>
									<a href="#doc" className="underline-offset-4 hover:underline">
										{link}
									</a>
								</li>
							))}
						</ul>
						<a href="#section" className="mt-auto flex items-center gap-1.5 text-sm font-medium">
							All {section.pages} pages <ArrowRight className="size-4" />
						</a>
					</Card>
				))}
			</div>
		</section>
	)
}
