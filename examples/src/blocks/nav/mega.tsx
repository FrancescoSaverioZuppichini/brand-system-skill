import {
	ArrowRight,
	ChevronDown,
	ChevronRight,
	FolderKanban,
	HeartPulse,
	LayoutTemplate,
	LifeBuoy,
	Milestone,
	Plug,
	Rocket,
	SquareTerminal,
	Users,
	X,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { product } from "@/demo/content"
import { Logo } from "@/demo/logo"
import { Photo } from "@/demo/photo"

// [Agent] Icons only where they name a part of the product (the same icons the app's sidebar uses), per the tell in
// layouts.md; the featured card is a real story, not a promo tile.
const groups = [
	{
		title: "Plan",
		items: [
			{ name: "Projects", line: "Scope, owners and dates on one page", icon: FolderKanban },
			{ name: "Templates", line: "1,200 plans other teams kept", icon: LayoutTemplate },
			{ name: "Roadmaps", line: "Every project's next twelve months", icon: Milestone },
		],
	},
	{
		title: "Ship",
		items: [
			{ name: "Releases", line: "Checklists, reviewed and dated", icon: Rocket },
			{ name: "CLI", line: "Plan and ship from your terminal", icon: SquareTerminal },
			{ name: "Integrations", line: "GitHub, GitLab and Linear", icon: Plug },
		],
	},
	{
		title: "Look after",
		items: [
			{ name: "In care", line: "An owner and a yearly review", icon: LifeBuoy },
			{ name: "Health checks", line: "A monthly checklist, no pager", icon: HeartPulse },
			{ name: "Client spaces", line: "Read-only status for clients", icon: Users },
		],
	},
]

const solutions = ["Studios and agencies", "In-house product teams", "Open-source maintainers"]

const top = [
	{ label: "Product", open: true },
	{ label: "Solutions", open: false },
]

function Desktop() {
	return (
		<div className="hidden lg:block">
			<div className="mx-auto flex max-w-6xl items-center gap-8 px-8 py-3">
				<Logo />
				<nav className="flex items-center gap-6 text-sm">
					{top.map((item) => (
						<span
							key={item.label}
							className={
								item.open
									? "flex items-center gap-1 font-medium"
									: "flex items-center gap-1 text-muted-foreground"
							}
						>
							{item.label}
							<ChevronDown className={item.open ? "size-3.5 rotate-180" : "size-3.5"} />
						</span>
					))}
					{["Customers", "Pricing", "Docs"].map((link) => (
						<a key={link} href="#top" className="text-muted-foreground hover:text-foreground">
							{link}
						</a>
					))}
				</nav>
				<div className="ml-auto flex items-center gap-2">
					<Button variant="outline" size="sm">
						Log in
					</Button>
					<Button size="sm">{product.primary}</Button>
				</div>
			</div>
			<div className="mx-auto max-w-6xl px-8 pb-8">
				<div className="grid grid-cols-[1fr_1fr_1fr_17rem] gap-8 rounded-xl border bg-popover p-6 text-popover-foreground shadow-lg">
					{groups.map((group) => (
						<div key={group.title} className="flex flex-col gap-1">
							<span className="px-2 pb-2 text-xs font-medium text-muted-foreground">{group.title}</span>
							{group.items.map(({ name, line, icon: Icon }) => (
								<a key={name} href="#top" className="flex gap-3 rounded-md p-2 hover:bg-accent">
									<Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
									<span className="flex flex-col gap-0.5">
										<span className="text-sm font-medium">{name}</span>
										<span className="text-xs text-muted-foreground">{line}</span>
									</span>
								</a>
							))}
						</div>
					))}
					<a href="#top" className="flex flex-col gap-3 rounded-lg bg-muted p-3">
						<Photo scene="person" className="aspect-[16/10] rounded-md" />
						<span className="text-sm font-medium">Halden's client sites, five years in</span>
						<span className="flex items-center gap-1 text-xs text-muted-foreground">
							Read the story <ArrowRight className="size-3" />
						</span>
					</a>
				</div>
			</div>
		</div>
	)
}

// [Agent] The phone version of the open menu: groups become accordions (Product open), plain pages are rows, and
// both actions sit at the bottom of the list.
function Mobile() {
	return (
		<div className="flex flex-col lg:hidden">
			<div className="flex items-center justify-between border-b px-4 py-3">
				<Logo />
				<Button variant="ghost" size="icon" aria-label="Close menu" className="-mr-2">
					<X />
				</Button>
			</div>
			<Accordion type="single" collapsible defaultValue="Product" className="px-4">
				<AccordionItem value="Product">
					<AccordionTrigger className="text-base">Product</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4">
						{groups.map((group) => (
							<div key={group.title} className="flex flex-col gap-2">
								<span className="text-xs font-medium text-muted-foreground">{group.title}</span>
								{group.items.map(({ name, icon: Icon }) => (
									<a key={name} href="#top" className="flex items-center gap-3">
										<Icon className="size-4 text-muted-foreground" />
										{name}
									</a>
								))}
							</div>
						))}
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="Solutions">
					<AccordionTrigger className="text-base">Solutions</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-2">
						{solutions.map((item) => (
							<a key={item} href="#top">
								{item}
							</a>
						))}
					</AccordionContent>
				</AccordionItem>
				{["Customers", "Pricing", "Docs"].map((link) => (
					<a key={link} href="#top" className="flex items-center justify-between border-b py-4 font-medium">
						{link}
						<ChevronRight className="size-4 text-muted-foreground" />
					</a>
				))}
			</Accordion>
			<div className="flex flex-col gap-3 p-4">
				<Button size="lg" variant="outline">
					Log in
				</Button>
				<Button size="lg">{product.primary}</Button>
			</div>
		</div>
	)
}

export default function NavMega() {
	return (
		<header className="border-b bg-background">
			<Desktop />
			<Mobile />
		</header>
	)
}
