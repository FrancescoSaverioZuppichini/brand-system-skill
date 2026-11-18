import { BookOpen, FolderKanban, Rocket, Scale, Search, X } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppShell } from "@/demo/app-nav"
import { StatusBadge } from "@/demo/table"
import { ReleaseBadge } from "@/demo/workspace"

const query = "billing"

const types = [
	{ label: "All", count: 14 },
	{ label: "Projects", count: 2 },
	{ label: "Releases", count: 3 },
	{ label: "Docs", count: 6 },
	{ label: "Decisions", count: 2 },
	{ label: "People", count: 1 },
]

const results = [
	{
		source: "Projects",
		icon: FolderKanban,
		title: "Billing rewrite",
		text: "Move invoices and plans to Stripe Billing. Old invoices stay readable; customers keep their card on file.",
		meta: <StatusBadge status="Shipping" />,
		by: "Ana Ruiz · updated 2h ago",
	},
	{
		source: "Releases › Billing rewrite",
		icon: Rocket,
		title: "Release 1.4",
		text: "The first billing release for EU customers: plans, proration and the new invoice emails.",
		meta: <ReleaseBadge state="In review" />,
		by: "3 of 5 checks · today, 10:42",
	},
	{
		source: "Decisions › Billing rewrite",
		icon: Scale,
		title: "Keep Stripe invoices, drop our PDF service",
		text: "Decided for the billing rewrite: the PDF service cost two days every release.",
		by: "Ana Ruiz · 14 Oct 2026",
	},
	{
		source: "Docs › Plans",
		icon: BookOpen,
		title: "How billing works on Studio",
		text: "Studio is billed per member, per month: $24 for each member, with client spaces included.",
		by: "Docs · updated 3 weeks ago",
	},
	{
		source: "Projects",
		icon: FolderKanban,
		title: "Invoices v2",
		text: "Starts when the billing rewrite ships: PDF invoices for clients, in their own currency.",
		meta: <StatusBadge status="Planning" />,
		by: "Jonas Lind · updated 1d ago",
	},
]

// [Agent] Splitting on a capturing group keeps the matches at the odd indexes, so every match gets a <mark> without
// a regex loop; matches are found case-insensitively and shown as written.
function Highlight({ text }: { text: string }) {
	return text.split(new RegExp(`(${query})`, "i")).map((part, index) =>
		index % 2 ? (
			<mark key={`${part}-${index}`} className="rounded-sm bg-chart-4/30 px-0.5 text-foreground">
				{part}
			</mark>
		) : (
			part
		),
	)
}

export default function SearchPage() {
	return (
		<AppShell active="" crumbs={["Halden", "Search"]}>
			<div className="mx-auto flex max-w-3xl flex-col gap-5 p-4 md:p-8">
				<InputGroup className="h-11">
					<InputGroupAddon>
						<Search />
					</InputGroupAddon>
					<InputGroupInput defaultValue={query} aria-label="Search Halden" className="text-base" />
					<InputGroupAddon align="inline-end">
						<InputGroupButton size="icon-xs" aria-label="Clear search">
							<X />
						</InputGroupButton>
						<Kbd>⌘K</Kbd>
					</InputGroupAddon>
				</InputGroup>
				<Tabs defaultValue="All">
					<div className="-mx-4 overflow-x-auto border-b px-4 md:mx-0 md:px-0">
						<TabsList variant="line">
							{types.map((type) => (
								<TabsTrigger key={type.label} value={type.label} className="flex-none">
									{type.label}
									<span className="text-muted-foreground tabular-nums">{type.count}</span>
								</TabsTrigger>
							))}
						</TabsList>
					</div>
				</Tabs>
				<h1 className="text-sm leading-tight">14 results for “{query}”</h1>
				<ol className="flex flex-col gap-7">
					{results.map(({ source, icon: Icon, title, text, meta, by }) => (
						<li key={title} className="flex flex-col gap-1.5">
							<span className="flex items-center gap-1.5 text-xs text-muted-foreground">
								<Icon className="size-3.5" /> {source}
							</span>
							<a href="#top" className="text-lg leading-snug font-medium hover:underline">
								<Highlight text={title} />
							</a>
							<p className="text-sm leading-relaxed text-muted-foreground">
								<Highlight text={text} />
							</p>
							<span className="flex items-center gap-2 text-xs text-muted-foreground">
								{meta}
								{by}
							</span>
						</li>
					))}
				</ol>
			</div>
		</AppShell>
	)
}
