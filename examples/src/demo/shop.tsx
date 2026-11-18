import { Search, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/demo/logo"
import { MobileMenu } from "@/demo/menu"

// [Agent] Keep's shop: desk goods for makers, priced in USD. The cart, checkout and tracking blocks all show this one
// order, so 2 × $18 + $24 + $16 = $76, free shipping over $75, and New York sales tax (8.875%) of $6.75 make $82.75.
// [Agent] `photo` picks the Photo product drawing that matches the item (0 jar, 1 notebook, 2 mug, 3 tote).
export const goods = [
	{
		name: "Dot-grid notebook",
		sku: "KP-NB-A5",
		photo: 1,
		price: 18,
		line: "A5 · 192 pages · lay-flat",
		rating: 4.8,
		reviews: 312,
	},
	{
		name: "Planning desk pad",
		sku: "KP-DP-A3",
		photo: 1,
		price: 24,
		line: "A3 · 52 tear-off weeks",
		rating: 4.7,
		reviews: 184,
	},
	{
		name: "Enamel mug",
		sku: "KP-MG-12",
		photo: 2,
		price: 16,
		line: "12 oz · steel, enamelled",
		rating: 4.9,
		reviews: 96,
	},
	{
		name: "Canvas tote",
		sku: "KP-TT-01",
		photo: 3,
		price: 22,
		line: "12 oz cotton canvas",
		rating: 4.6,
		reviews: 71,
	},
	{
		name: "Release pencils",
		sku: "KP-PC-06",
		photo: 0,
		price: 12,
		line: "Six HB cedar pencils",
		rating: 4.8,
		reviews: 140,
	},
	{
		name: "Care log",
		sku: "KP-CL-A5",
		photo: 1,
		price: 28,
		line: "A5 hardcover · 240 pages",
		rating: 4.9,
		reviews: 58,
	},
]

export const cart = [
	{ ...goods[0], option: "A5 · Sage", quantity: 2 },
	{ ...goods[1], option: "A3 · 2027", quantity: 1 },
	{ ...goods[2], option: "Bone", quantity: 1 },
]

export const order = {
	number: "KP-10482",
	placed: "14 Nov 2026",
	items: 4,
	subtotal: 76,
	shipping: 0,
	tax: 6.75,
	total: 82.75,
	name: "Priya Shah",
	email: "priya@parcel.co",
	address: "214 Dean St, Apt 3",
	city: "Brooklyn, NY 11217",
	carrier: "UPS Ground",
	tracking: "1Z 999 AA1 01 2345 6784",
}

export const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })

export const aisles = ["Paper", "Desk", "Kitchen", "Bags"]

export function ShopHeader() {
	return (
		<header className="border-b">
			<div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 md:px-8">
				<MobileMenu links={aisles} className="-ml-2 md:hidden" />
				<span className="flex items-center gap-2">
					<Logo />
					<span className="text-sm text-muted-foreground">Shop</span>
				</span>
				<nav className="hidden gap-6 text-sm md:flex">
					{aisles.map((aisle) => (
						<a key={aisle} href="#top" className="text-muted-foreground hover:text-foreground">
							{aisle}
						</a>
					))}
				</nav>
				<div className="ml-auto flex items-center">
					<Button variant="ghost" size="icon" aria-label="Search">
						<Search />
					</Button>
					<Button variant="ghost" size="icon" aria-label={`Bag, ${order.items} items`} className="relative">
						<ShoppingBag />
						<span className="absolute top-0.5 right-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground tabular-nums">
							{order.items}
						</span>
					</Button>
				</div>
			</div>
		</header>
	)
}
