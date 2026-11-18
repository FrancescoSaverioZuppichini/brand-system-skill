import { SlidersHorizontal } from "lucide-react"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Photo } from "@/demo/photo"
import { goods, ShopHeader, usd } from "@/demo/shop"

// [Agent] Each facet group adds up to the 24 goods in the shop, so a count never promises what the grid can't hold.
const facets = [
	{
		title: "Aisle",
		options: [
			{ label: "Paper", count: 9 },
			{ label: "Desk", count: 6 },
			{ label: "Kitchen", count: 4 },
			{ label: "Bags", count: 3 },
			{ label: "Prints", count: 2 },
		],
	},
	{
		title: "Price",
		options: [
			{ label: "Under $15", count: 5 },
			{ label: "$15 to $25", count: 13 },
			{ label: "Over $25", count: 6 },
		],
	},
	{
		title: "Ships",
		options: [
			{ label: "In 1–2 days", count: 21 },
			{ label: "Made to order", count: 3 },
		],
	},
]

function Facets() {
	return (
		<div className="flex flex-col gap-6">
			{facets.map((facet) => (
				<fieldset key={facet.title} className="flex flex-col gap-2.5">
					<legend className="mb-2.5 text-sm font-medium">{facet.title}</legend>
					{facet.options.map((option) => (
						<label key={option.label} className="flex items-center gap-2 text-sm">
							<Checkbox />
							{option.label}
							<span className="ml-auto text-xs text-muted-foreground tabular-nums">{option.count}</span>
						</label>
					))}
				</fieldset>
			))}
		</div>
	)
}

export default function CommerceCategory() {
	return (
		<div>
			<ShopHeader />
			<main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:px-8 md:py-12">
				<div className="flex flex-col gap-2">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="#top">Shop</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>All goods</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
					<h1 className="text-3xl leading-tight md:text-4xl">Goods for the desk</h1>
				</div>
				<div className="grid gap-10 md:grid-cols-[12rem_1fr]">
					<aside className="hidden md:block">
						<Facets />
					</aside>
					<div className="flex min-w-0 flex-col gap-4">
						<div className="flex items-center gap-2">
							<span className="mr-auto text-sm text-muted-foreground">24 goods</span>
							<Select defaultValue="featured">
								<SelectTrigger size="sm" className="w-40">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="featured">Featured</SelectItem>
									<SelectItem value="low">Price, low to high</SelectItem>
									<SelectItem value="new">Newest</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="outline" className="md:hidden">
									<SlidersHorizontal /> Filters
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
						<div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3 lg:gap-x-6">
							{goods.map((item) => (
								<a key={item.sku} href="#top" className="flex flex-col gap-1">
									<Photo scene="object" variant={item.photo} className="mb-2 aspect-square rounded-lg" />
									<span className="text-sm font-medium">{item.name}</span>
									<span className="text-sm text-muted-foreground">{item.line}</span>
									<span className="text-sm tabular-nums">{usd.format(item.price)}</span>
								</a>
							))}
						</div>
						<div className="flex flex-col items-center gap-3 pt-6">
							<span className="text-sm text-muted-foreground">Showing 6 of 24</span>
							<Button variant="outline">Show 18 more</Button>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
