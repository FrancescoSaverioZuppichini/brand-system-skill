import { Package, RotateCcw, Star, Truck } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Photo } from "@/demo/photo"
import { goods, ShopHeader, usd } from "@/demo/shop"
import { cn } from "@/lib/utils"

const item = goods[0]
const views = ["object", "place", "person", "object"] as const

const sections = [
	{
		title: "Details",
		text: "192 numbered pages of 5 mm dot grid, an index, two ribbons and a back pocket. Lies flat open on any page.",
	},
	{
		title: "Paper and care",
		text: "100 gsm acid-free paper that takes fountain pen without bleed. Cloth cover, wipe clean with a damp cloth.",
	},
	{
		title: "Shipping and returns",
		text: "Ships from Newark, NJ in 1–2 business days. Free over $75. Return it unused within 30 days.",
	},
]

const checks = [
	{ icon: Truck, text: "Arrives 25–27 Nov in Brooklyn, NY 11217" },
	{ icon: Package, text: "Free shipping on orders over $75" },
	{ icon: RotateCcw, text: "30-day returns, no questions" },
]

function Gallery() {
	return (
		<>
			<div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 md:hidden">
				{views.map((scene, index) => (
					<Photo
						key={`${scene}-${index}`}
						scene={scene}
						className="aspect-square w-[88%] shrink-0 snap-center rounded-lg"
					/>
				))}
			</div>
			<div className="flex justify-center gap-1.5 md:hidden">
				{views.map((scene, index) => (
					<span
						key={`${scene}-${index}`}
						className={cn("h-1.5 rounded-full", index === 0 ? "w-4 bg-foreground" : "w-1.5 bg-border")}
					/>
				))}
			</div>
			<div className="hidden flex-col gap-3 md:flex">
				<Photo scene="object" className="aspect-square rounded-lg" />
				<div className="grid grid-cols-4 gap-3">
					{views.map((scene, index) => (
						<Photo
							key={`${scene}-${index}`}
							scene={scene}
							className={cn(
								"aspect-square rounded-md",
								index === 0 && "ring-2 ring-primary ring-offset-2 ring-offset-background",
							)}
						/>
					))}
				</div>
			</div>
		</>
	)
}

function Option({ label, value, options }: { label: string; value: string; options: string[] }) {
	return (
		<div className="flex flex-col gap-2">
			<span className="text-sm">
				{label}: <span className="text-muted-foreground">{value}</span>
			</span>
			<ToggleGroup type="single" defaultValue={value} variant="outline" spacing={2} className="flex-wrap">
				{options.map((option) => (
					<ToggleGroupItem key={option} value={option} className="min-w-14">
						{option}
					</ToggleGroupItem>
				))}
			</ToggleGroup>
		</div>
	)
}

export default function CommerceProduct() {
	return (
		<div>
			<ShopHeader />
			<main className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:grid-cols-[7fr_5fr] md:gap-12 md:px-8 md:py-12">
				<div className="flex min-w-0 flex-col gap-3">
					<Gallery />
				</div>
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<Breadcrumb className="hidden md:block">
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink href="#top">Shop</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbPage>Paper</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
						<h1 className="text-3xl leading-tight md:text-4xl">{item.name}</h1>
						<span className="flex items-center gap-2 text-sm text-muted-foreground">
							<span className="flex text-chart-4">
								{[1, 2, 3, 4, 5].map((n) => (
									<Star key={n} className="size-4 fill-current" />
								))}
							</span>
							{item.rating} · {item.reviews} reviews
						</span>
					</div>
					<div className="flex items-baseline gap-2">
						<span className="text-2xl font-semibold tabular-nums">{usd.format(item.price)}</span>
						<span className="font-mono text-xs text-muted-foreground">{item.sku}-SG</span>
					</div>
					<Option label="Size" value="A5" options={["A5", "A4"]} />
					<Option label="Cover" value="Sage" options={["Sage", "Bone", "Ink", "Rust"]} />
					{/* [Agent] Sticky inside the details column: on phones the button rides the bottom edge until the
					    column scrolls past; from md up it is an ordinary button in the flow. */}
					<div className="sticky bottom-0 -mx-4 border-t bg-background p-4 md:static md:m-0 md:border-0 md:p-0">
						<Button size="lg" className="w-full">
							Add to bag · {usd.format(item.price)}
						</Button>
					</div>
					<ul className="flex flex-col gap-2.5 text-sm">
						{checks.map(({ icon: Icon, text }) => (
							<li key={text} className="flex items-center gap-3">
								<Icon className="size-4 text-muted-foreground" /> {text}
							</li>
						))}
					</ul>
					<Accordion type="single" collapsible className="border-t">
						{sections.map((section) => (
							<AccordionItem key={section.title} value={section.title}>
								<AccordionTrigger>{section.title}</AccordionTrigger>
								<AccordionContent className="text-muted-foreground">{section.text}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</main>
		</div>
	)
}
