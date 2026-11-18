import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Photo } from "@/demo/photo"
import { cart, order, ShopHeader, usd } from "@/demo/shop"
import { Stepper } from "@/demo/stepper"
import { cn } from "@/lib/utils"

const events = [
	{ when: "Today, 8:12 am", what: "Out for delivery", where: "Brooklyn, NY" },
	{ when: "Tue 17 Nov, 9:40 pm", what: "Arrived at UPS facility", where: "Maspeth, NY" },
	{ when: "Mon 16 Nov, 3:05 pm", what: "Shipped from our warehouse", where: "Newark, NJ" },
	{ when: "Sat 14 Nov, 11:20 am", what: "Order placed", where: "keep.app/shop" },
]

const streets = ["M0 70 L400 40", "M0 210 L400 170", "M90 0 L130 300", "M300 0 L260 300", "M0 140 L400 120"]

// [Agent] A drawn map, not a tile image: background-coloured streets on the muted ground read as light or dark with the
// style. The dashed route ends at the home pin; the van sits on it where the last scan put it.
function RouteMap({ className }: { className?: string }) {
	return (
		<div
			role="img"
			aria-label="Map: the van is 3 stops from 214 Dean St"
			className={cn("relative overflow-hidden bg-muted", className)}
		>
			<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
				<rect x="150" y="190" width="90" height="70" className="fill-chart-2 opacity-20" />
				{streets.map((d) => (
					<path key={d} d={d} strokeWidth="10" className="stroke-background" />
				))}
				<path
					d="M40 67 L98 63 L108 135 L268 127"
					fill="none"
					strokeWidth="3"
					strokeDasharray="6 6"
					className="stroke-primary"
				/>
				<circle cx="103" cy="100" r="9" className="fill-primary stroke-background" strokeWidth="3" />
				<path d="M268 127 L256 105 A14 14 0 1 1 280 105 Z" className="fill-foreground" />
				<circle cx="268" cy="98" r="5" className="fill-background" />
			</svg>
		</div>
	)
}

export default function CommerceTracking() {
	return (
		<div>
			<ShopHeader />
			<main className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-8 md:px-8 md:py-12">
				<div className="flex flex-col gap-2">
					<span className="text-sm text-muted-foreground">
						Order {order.number} · placed {order.placed}
					</span>
					<h1 className="text-3xl leading-tight md:text-4xl">Arriving today by 7 pm</h1>
					<span className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
						{order.carrier} · <span className="font-mono">{order.tracking}</span>
						<Button variant="ghost" size="icon-xs" aria-label="Copy tracking number">
							<Copy />
						</Button>
					</span>
				</div>
				<Stepper steps={["Ordered", "Shipped", "Out for delivery", "Delivered"]} current={2} />
				<div className="grid gap-6 md:grid-cols-2 md:gap-10">
					<RouteMap className="aspect-[4/3] rounded-lg" />
					<ol className="flex flex-col">
						{events.map((event, index) => (
							<li key={event.what} className="relative flex gap-4 pb-6 last:pb-0">
								{index < events.length - 1 && (
									<span className="absolute top-4 left-[5px] h-full w-px bg-border" />
								)}
								<span
									className={cn(
										"relative mt-1.5 size-3 shrink-0 rounded-full border-2",
										index === 0 ? "border-primary bg-primary" : "border-border bg-background",
									)}
								/>
								<span className="flex flex-col gap-0.5 text-sm">
									<span className={cn("font-medium", index > 0 && "text-muted-foreground")}>
										{event.what}
									</span>
									<span className="text-muted-foreground">
										{event.where} · {event.when}
									</span>
								</span>
							</li>
						))}
					</ol>
				</div>
				<div className="flex flex-col gap-3">
					<h2 className="text-lg leading-tight">
						{order.items} items · {usd.format(order.total)}
					</h2>
					<ul className="flex flex-col divide-y border-y">
						{cart.map((line) => (
							<li key={line.sku} className="flex items-center gap-4 py-3 text-sm">
								<Photo scene="object" variant={line.photo} className="size-12 shrink-0 rounded-md" />
								<span className="flex min-w-0 flex-1 flex-col">
									<span className="truncate font-medium">{line.name}</span>
									<span className="text-muted-foreground">
										{line.option} × {line.quantity}
									</span>
								</span>
								<span className="tabular-nums">{usd.format(line.price * line.quantity)}</span>
							</li>
						))}
					</ul>
					<span className="text-sm text-muted-foreground">
						To {order.name}, {order.address}, {order.city}
					</span>
				</div>
			</main>
		</div>
	)
}
