import { CheckCircle2, LifeBuoy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { product } from "@/demo/content"
import { AppWindow } from "@/demo/screen"
import { cn } from "@/lib/utils"

// [Agent] The two cards pull out the moments the screenshot can't show at a glance: a release that passed and a
// project handed into care. On phones only the release survives, as a plain row under the screen.
function Moment({ className, release }: { className?: string; release?: boolean }) {
	const Icon = release ? CheckCircle2 : LifeBuoy
	return (
		<Card className={cn("flex-row items-center gap-3 px-4 py-3 shadow-lg", className)}>
			<Icon className="size-5 shrink-0 text-chart-2" />
			<div className="text-sm">
				<div className="font-medium">{release ? "Release 1.4 shipped" : "Customer portal moved to care"}</div>
				<div className="text-xs text-muted-foreground">
					{release ? "5 of 5 checks passed · 2 min ago" : "Next review 18 Nov 2027 · Tomás"}
				</div>
			</div>
		</Card>
	)
}

export default function HeroSplitFloating() {
	return (
		<section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:px-8 lg:grid-cols-[5fr_7fr] lg:py-28">
			<div className="flex flex-col gap-6">
				<h1 className="text-5xl leading-[1.02] md:text-6xl">{product.headline}</h1>
				<p className="text-lg text-muted-foreground">{product.sub}</p>
				<div className="flex flex-col gap-3 sm:flex-row">
					<Button size="lg">{product.primary}</Button>
					<Button size="lg" variant="outline">
						{product.secondary}
					</Button>
				</div>
			</div>
			<div className="relative flex flex-col gap-3 lg:py-10">
				<AppWindow />
				<Moment release className="lg:absolute lg:-bottom-2 lg:-left-10" />
				<Moment className="absolute -top-2 -right-6 hidden lg:flex" />
			</div>
		</section>
	)
}
