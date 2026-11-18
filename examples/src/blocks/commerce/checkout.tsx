import { ChevronDown, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Logo } from "@/demo/logo"
import { Photo } from "@/demo/photo"
import { cart, order, usd } from "@/demo/shop"

const delivery = [
	{ value: "standard", label: "Standard", note: "3–5 business days", price: "Free" },
	{ value: "express", label: "Express", note: "1–2 business days", price: "$14.00" },
]

function Summary() {
	return (
		<div className="flex flex-col gap-4">
			<ul className="flex flex-col gap-4">
				{cart.map((line) => (
					<li key={line.sku} className="flex items-center gap-3 text-sm">
						<span className="relative">
							<Photo scene="object" className="size-14 rounded-md border" />
							<span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-foreground text-[11px] text-background tabular-nums">
								{line.quantity}
							</span>
						</span>
						<span className="flex min-w-0 flex-1 flex-col">
							<span className="truncate font-medium">{line.name}</span>
							<span className="text-muted-foreground">{line.option}</span>
						</span>
						<span className="tabular-nums">{usd.format(line.price * line.quantity)}</span>
					</li>
				))}
			</ul>
			<dl className="flex flex-col gap-2 border-t pt-4 text-sm">
				<div className="flex justify-between">
					<dt className="text-muted-foreground">Subtotal</dt>
					<dd className="tabular-nums">{usd.format(order.subtotal)}</dd>
				</div>
				<div className="flex justify-between">
					<dt className="text-muted-foreground">Shipping · Standard</dt>
					<dd>Free</dd>
				</div>
				<div className="flex justify-between">
					<dt className="text-muted-foreground">Sales tax · NY 8.875%</dt>
					<dd className="tabular-nums">{usd.format(order.tax)}</dd>
				</div>
				<div className="flex justify-between border-t pt-3 text-base font-medium">
					<dt>Total</dt>
					<dd className="tabular-nums">{usd.format(order.total)}</dd>
				</div>
			</dl>
		</div>
	)
}

function Sections() {
	return (
		<form className="flex flex-col gap-10">
			<FieldSet>
				<FieldLegend>Contact</FieldLegend>
				<Field>
					<FieldLabel htmlFor="checkout-email">Email</FieldLabel>
					<Input id="checkout-email" type="email" defaultValue={order.email} />
				</Field>
			</FieldSet>
			<FieldSet>
				<FieldLegend>Shipping</FieldLegend>
				<FieldGroup className="grid grid-cols-6 gap-4">
					<Field className="col-span-6">
						<FieldLabel htmlFor="checkout-name">Full name</FieldLabel>
						<Input id="checkout-name" defaultValue={order.name} />
					</Field>
					<Field className="col-span-6 sm:col-span-4">
						<FieldLabel htmlFor="checkout-street">Address</FieldLabel>
						<Input id="checkout-street" defaultValue="214 Dean St" />
					</Field>
					<Field className="col-span-6 sm:col-span-2">
						<FieldLabel htmlFor="checkout-apt">Apt, suite</FieldLabel>
						<Input id="checkout-apt" defaultValue="Apt 3" />
					</Field>
					<Field className="col-span-6 sm:col-span-3">
						<FieldLabel htmlFor="checkout-city">City</FieldLabel>
						<Input id="checkout-city" defaultValue="Brooklyn" />
					</Field>
					<Field className="col-span-3 sm:col-span-1">
						<FieldLabel htmlFor="checkout-state">State</FieldLabel>
						<Input id="checkout-state" defaultValue="NY" />
					</Field>
					<Field className="col-span-3 sm:col-span-2">
						<FieldLabel htmlFor="checkout-zip">ZIP</FieldLabel>
						<Input id="checkout-zip" defaultValue="11217" />
					</Field>
				</FieldGroup>
				<RadioGroup defaultValue="standard" className="gap-0 rounded-md border">
					{delivery.map((option) => (
						<label key={option.value} className="flex items-center gap-3 border-b p-4 text-sm last:border-0">
							<RadioGroupItem value={option.value} />
							<span className="flex flex-1 flex-col">
								<span className="font-medium">{option.label}</span>
								<span className="text-muted-foreground">{option.note}</span>
							</span>
							<span>{option.price}</span>
						</label>
					))}
				</RadioGroup>
			</FieldSet>
			<FieldSet>
				<FieldLegend>Payment</FieldLegend>
				<Tabs defaultValue="card">
					<TabsList className="w-full">
						<TabsTrigger value="card">Card</TabsTrigger>
						<TabsTrigger value="apple">Apple Pay</TabsTrigger>
						<TabsTrigger value="paypal">PayPal</TabsTrigger>
					</TabsList>
					<TabsContent value="card" className="pt-3">
						<FieldGroup className="grid grid-cols-2 gap-4">
							<Field className="col-span-2">
								<FieldLabel htmlFor="checkout-card">Card number</FieldLabel>
								<Input id="checkout-card" inputMode="numeric" placeholder="1234 1234 1234 1234" />
							</Field>
							<Field>
								<FieldLabel htmlFor="checkout-expiry">Expiry</FieldLabel>
								<Input id="checkout-expiry" placeholder="MM / YY" />
							</Field>
							<Field>
								<FieldLabel htmlFor="checkout-cvc">CVC</FieldLabel>
								<Input id="checkout-cvc" placeholder="3 digits" />
							</Field>
						</FieldGroup>
					</TabsContent>
				</Tabs>
			</FieldSet>
			<div className="flex flex-col gap-3">
				<Button size="lg" className="w-full">
					<Lock /> Pay {usd.format(order.total)}
				</Button>
				<span className="text-center text-xs text-muted-foreground">
					Free returns within 30 days. Card details go straight to our payment provider.
				</span>
			</div>
		</form>
	)
}

export default function CommerceCheckout() {
	return (
		<div>
			<header className="border-b">
				<div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
					<span className="flex items-center gap-2">
						<Logo />
						<span className="text-sm text-muted-foreground">Shop</span>
					</span>
					<span className="flex items-center gap-1.5 text-sm text-muted-foreground">
						<Lock className="size-3.5" /> Secure checkout
					</span>
				</div>
			</header>
			<Collapsible className="border-b bg-muted/50 md:hidden">
				<CollapsibleTrigger className="flex w-full items-center gap-2 px-4 py-3 text-sm">
					Show order summary <ChevronDown className="size-4" />
					<span className="ml-auto font-medium tabular-nums">{usd.format(order.total)}</span>
				</CollapsibleTrigger>
				<CollapsibleContent className="px-4 pb-4">
					<Summary />
				</CollapsibleContent>
			</Collapsible>
			<main className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-8 md:grid-cols-[1fr_24rem] md:px-8 md:py-12 lg:gap-20">
				<div className="flex flex-col gap-8">
					<h1 className="text-3xl leading-tight">Checkout</h1>
					<Sections />
				</div>
				<aside className="hidden rounded-lg border bg-muted/40 p-6 md:block">
					<Summary />
				</aside>
			</main>
		</div>
	)
}
