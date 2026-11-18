import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Photo } from "@/demo/photo"
import { cart, order, ShopHeader, usd } from "@/demo/shop"

function Line({ line }: { line: (typeof cart)[number] }) {
	return (
		<li className="flex gap-4 py-5">
			<Photo scene="object" className="size-20 shrink-0 rounded-md md:size-24" />
			<div className="flex min-w-0 flex-1 flex-col gap-1">
				<div className="flex items-baseline justify-between gap-3">
					<span className="font-medium">{line.name}</span>
					<span className="tabular-nums">{usd.format(line.price * line.quantity)}</span>
				</div>
				<span className="text-sm text-muted-foreground">
					{line.option} · {usd.format(line.price)} each
				</span>
				<div className="mt-2 flex items-center justify-between gap-3">
					<ButtonGroup aria-label={`Quantity of ${line.name}`}>
						<Button variant="outline" size="icon-sm" aria-label="One less">
							<Minus />
						</Button>
						<ButtonGroupText className="h-8 min-w-9 justify-center bg-background tabular-nums">
							{line.quantity}
						</ButtonGroupText>
						<Button variant="outline" size="icon-sm" aria-label="One more">
							<Plus />
						</Button>
					</ButtonGroup>
					<Button variant="link" size="sm" className="px-0 text-muted-foreground">
						Remove
					</Button>
				</div>
			</div>
		</li>
	)
}

function Summary() {
	return (
		<Card className="gap-4 px-6">
			<span className="font-medium">Order summary</span>
			<dl className="flex flex-col gap-2.5 text-sm">
				<div className="flex justify-between">
					<dt className="text-muted-foreground">Subtotal · {order.items} items</dt>
					<dd className="tabular-nums">{usd.format(order.subtotal)}</dd>
				</div>
				<div className="flex justify-between">
					<dt className="text-muted-foreground">Shipping</dt>
					<dd>Free</dd>
				</div>
				<div className="flex justify-between">
					<dt className="text-muted-foreground">Sales tax</dt>
					<dd className="text-muted-foreground">At checkout</dd>
				</div>
				<div className="flex justify-between border-t pt-3 text-base font-medium">
					<dt>Total</dt>
					<dd className="tabular-nums">{usd.format(order.subtotal)}</dd>
				</div>
			</dl>
			<div className="flex flex-col gap-1.5">
				<Progress value={100} className="h-1.5" />
				<span className="text-xs text-muted-foreground">Free shipping unlocked: your bag is over $75.</span>
			</div>
			<Button size="lg" className="max-md:hidden">
				Check out
			</Button>
			<span className="text-xs text-muted-foreground">Ships in 1–2 business days · 30-day returns</span>
		</Card>
	)
}

export default function CommerceCart() {
	return (
		<div>
			<ShopHeader />
			<main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-8 md:px-8 md:py-12">
				<h1 className="text-3xl leading-tight md:text-4xl">Your bag</h1>
				<div className="grid items-start gap-8 md:grid-cols-[1fr_22rem] md:gap-12">
					<ul className="flex flex-col divide-y border-y">
						{cart.map((line) => (
							<Line key={line.sku} line={line} />
						))}
					</ul>
					<Summary />
				</div>
				{/* [Agent] A child of <main>, so on phones it sticks to the bottom for the whole page, not just
				    while the summary card is in view. */}
				<div className="sticky bottom-0 -mx-4 flex items-center gap-4 border-t bg-background p-4 md:hidden">
					<div className="flex flex-col text-sm">
						<span className="text-muted-foreground">Total</span>
						<span className="font-medium tabular-nums">{usd.format(order.subtotal)}</span>
					</div>
					<Button size="lg" className="flex-1">
						Check out
					</Button>
				</div>
			</main>
		</div>
	)
}
