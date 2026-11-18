import { Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { AppShell, RowMenu } from "@/demo/app-nav"
import { Photo } from "@/demo/photo"

// [Agent] Kind and length each add up to the 1,200 templates; the checked boxes (client work or agencies, with a care
// schedule) give the 214 in the count.
const facets = [
	{
		title: "Kind",
		options: [
			{ label: "Internal tools", count: 352 },
			{ label: "Client work", count: 312, checked: true },
			{ label: "Agencies", count: 204, checked: true },
			{ label: "Open source", count: 148 },
			{ label: "Hardware", count: 96 },
			{ label: "Research", count: 88 },
		],
	},
	{
		title: "Length",
		options: [
			{ label: "Under a month", count: 420 },
			{ label: "1–3 months", count: 516 },
			{ label: "Longer", count: 264 },
		],
	},
	{
		title: "Includes",
		options: [
			{ label: "Release checklist", count: 1012 },
			{ label: "Care schedule", count: 488, checked: true },
			{ label: "Client space", count: 236 },
		],
	},
]

const templates = [
	{ title: "Agency retainer", by: "Halden", uses: "1.2k", length: "12 weeks", scene: "place" as const },
	{ title: "Yearly client review", by: "Ostra", uses: "640", length: "2 weeks", scene: "person" as const },
	{ title: "Client onboarding", by: "Halden", uses: "410", length: "3 weeks", scene: "place" as const },
	{ title: "Website relaunch", by: "Lumen & Co", uses: "380", length: "10 weeks", scene: "object" as const },
	{ title: "Monthly care report", by: "Northwind", uses: "290", length: "Ongoing", scene: "place" as const },
	{ title: "Brand refresh", by: "Parcel", uses: "210", length: "8 weeks", scene: "object" as const },
	{ title: "Client handover", by: "Fieldnote", uses: "160", length: "1 week", scene: "person" as const },
]

function Facets() {
	return (
		<div className="flex flex-col gap-6">
			{facets.map((facet) => (
				<fieldset key={facet.title} className="flex flex-col gap-2.5">
					<legend className="mb-2.5 text-sm font-medium">{facet.title}</legend>
					{facet.options.map((option) => (
						<label key={option.label} className="flex items-center gap-2 text-sm">
							<Checkbox defaultChecked={option.checked} />
							{option.label}
							<span className="ml-auto text-xs text-muted-foreground tabular-nums">
								{option.count.toLocaleString("en-US")}
							</span>
						</label>
					))}
				</fieldset>
			))}
		</div>
	)
}

export default function SearchFacets() {
	return (
		<AppShell active="Projects" crumbs={["Halden", "Projects", "Templates"]}>
			<div className="flex flex-col gap-6 p-4 md:p-6">
				<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
					<h1 className="text-xl leading-tight">Templates</h1>
					<InputGroup className="md:max-w-xs">
						<InputGroupAddon>
							<Search />
						</InputGroupAddon>
						<InputGroupInput placeholder="Search 1,200 templates" />
					</InputGroup>
				</div>
				<div className="grid gap-8 md:grid-cols-[13rem_1fr]">
					<aside className="hidden md:block">
						<Facets />
					</aside>
					<div className="flex min-w-0 flex-col gap-3">
						<div className="flex items-center gap-2">
							<span className="mr-auto text-sm text-muted-foreground">214 templates</span>
							<Sheet>
								<SheetTrigger asChild>
									<Button variant="outline" size="sm" className="md:hidden">
										<SlidersHorizontal /> Filters · 3
									</Button>
								</SheetTrigger>
								<SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto">
									<SheetHeader>
										<SheetTitle>Filters</SheetTitle>
									</SheetHeader>
									<div className="px-4 pb-6">
										<Facets />
									</div>
								</SheetContent>
							</Sheet>
							<Select defaultValue="used">
								<SelectTrigger size="sm" className="w-36">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="used">Most used</SelectItem>
									<SelectItem value="new">Newest</SelectItem>
									<SelectItem value="short">Shortest</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="flex flex-col divide-y border-y">
							{templates.map((template) => (
								<div key={template.title} className="flex items-center gap-3 py-3">
									<Photo scene={template.scene} className="size-12 shrink-0 rounded-md" />
									<div className="flex min-w-0 flex-1 flex-col">
										<span className="truncate font-medium">{template.title}</span>
										<span className="truncate text-sm text-muted-foreground">
											{template.by} · {template.uses} uses
										</span>
									</div>
									<span className="hidden w-24 text-sm text-muted-foreground sm:block">
										{template.length}
									</span>
									<RowMenu items={["Preview", "Use template", "Save for later"]} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</AppShell>
	)
}
