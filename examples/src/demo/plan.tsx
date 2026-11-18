import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { plans } from "@/demo/content"
import { cn } from "@/lib/utils"

type Plan = (typeof plans)[number]

export const pitch: Record<string, { line: string; action: string }> = {
	Starter: { line: "For trying Keep on a side project.", action: "Start free" },
	Team: { line: "For a team that ships and looks after its work.", action: "Start with Team" },
	Studio: { line: "For studios whose clients follow along.", action: "Start with Studio" },
}

// [Agent] One plan card for every pricing block, weighted price first, pitch second, name third (web-unslop). The
// featured card flips to the primary colours, so everything inside it switches to primary-foreground to keep contrast.
export function PlanCard({
	plan,
	price = plan.price,
	unit = plan.unit,
	featured,
	className,
}: {
	plan: Plan
	price?: number
	unit?: string
	featured?: boolean
	className?: string
}) {
	const soft = featured ? "text-primary-foreground/75" : "text-muted-foreground"
	return (
		<Card
			className={cn("gap-5 px-6", featured && "border-primary bg-primary text-primary-foreground", className)}
		>
			<div className="flex items-center justify-between gap-2">
				<span className={cn("text-sm font-medium", soft)}>{plan.name}</span>
				{featured && <Badge className="bg-primary-foreground text-primary">Most teams pick this</Badge>}
			</div>
			<div className="flex flex-col gap-1">
				<span className="font-heading text-4xl font-semibold tabular-nums">${price}</span>
				<span className={cn("text-sm", soft)}>{unit}</span>
			</div>
			<p className="text-sm">{pitch[plan.name].line}</p>
			<Button
				variant={featured ? "default" : "outline"}
				className={cn(featured && "bg-primary-foreground text-primary hover:bg-primary-foreground/90")}
			>
				{pitch[plan.name].action}
			</Button>
			<ul
				className={cn(
					"flex flex-col gap-2.5 border-t pt-5 text-sm",
					featured && "border-primary-foreground/20",
				)}
			>
				{plan.features.map((feature) => (
					<li key={feature} className="flex items-center gap-2">
						<Check className="size-4 shrink-0" />
						{feature}
					</li>
				))}
			</ul>
		</Card>
	)
}
