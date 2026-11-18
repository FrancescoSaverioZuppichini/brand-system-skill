import { Search, SearchX, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { AppShell } from "@/demo/app-nav"

const filters = ["Status: Paused", "Owner: Mei Okafor"]

export default function EmptyNoResults() {
	return (
		<AppShell active="Projects" crumbs={["Halden", "Projects"]}>
			<div className="flex min-h-full flex-col gap-4 p-4 md:p-6">
				<div className="flex flex-col gap-3 md:flex-row md:items-center">
					<InputGroup className="md:max-w-sm">
						<InputGroupAddon>
							<Search />
						</InputGroupAddon>
						<InputGroupInput defaultValue="billing" aria-label="Search projects" />
						<InputGroupAddon align="inline-end">
							<InputGroupButton size="icon-xs" aria-label="Clear search">
								<X />
							</InputGroupButton>
						</InputGroupAddon>
					</InputGroup>
					<div className="flex flex-wrap gap-2">
						{filters.map((filter) => (
							<Button key={filter} variant="secondary" size="sm" aria-label={`Remove ${filter}`}>
								{filter} <X />
							</Button>
						))}
					</div>
				</div>
				<Empty className="flex-1">
					<EmptyHeader>
						<EmptyMedia variant="icon">
							<SearchX />
						</EmptyMedia>
						<EmptyTitle>
							<h2 className="text-lg leading-tight">No projects match “billing” with these filters</h2>
						</EmptyTitle>
						<EmptyDescription>
							Billing rewrite matches the search, but it is Shipping and owned by Ana Ruiz. Clear the filters
							to see it.
						</EmptyDescription>
					</EmptyHeader>
					<EmptyContent>
						<Button variant="outline">Clear filters</Button>
					</EmptyContent>
				</Empty>
			</div>
		</AppShell>
	)
}
