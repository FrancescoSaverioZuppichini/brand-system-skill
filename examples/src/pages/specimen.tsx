import { ArrowRight } from "lucide-react"
import { blocks } from "@/blocks"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { product, series, stat } from "@/demo/content"
import { cn } from "@/lib/utils"
import { styles } from "@/theme"

const bars = series.filter((_, index) => index % 2 === 0)

// [Agent] The atlas specimen: the same 800×500 mini page in every style (the nav/minimal block, hero copy, one button,
// one number card). data-part names every piece so a style's `css` can art-direct it without its own component.
export function Specimen({ slug }: { slug: string }) {
	const style = styles[slug]
	const Nav = blocks["nav/minimal"]
	const Decor = style.decor
	const center = style.specimen === "center"
	return (
		<div
			data-part="frame"
			className="relative h-[500px] w-[800px] overflow-hidden bg-background text-foreground"
		>
			{Decor && <Decor />}
			<div className="relative flex h-full flex-col">
				<div data-part="nav">
					<Nav />
				</div>
				<div
					data-part="body"
					className={cn(
						"flex flex-1 gap-8 px-10 pb-10",
						center ? "flex-col items-center justify-center text-center" : "items-end",
					)}
				>
					<div
						data-part="copy"
						className={cn("flex flex-col gap-5", center ? "max-w-[640px] items-center" : "flex-1")}
					>
						<span
							data-part="kicker"
							className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase"
						>
							{product.kicker}
						</span>
						<h1 data-part="headline" className="text-[64px] leading-[0.95]">
							Make something <span data-part="accent">people keep</span>
						</h1>
						<p data-part="sub" className="max-w-[440px] text-[15px] leading-relaxed text-muted-foreground">
							{product.sub}
						</p>
						<Button data-part="button" size="lg" className="w-fit">
							{product.primary} <ArrowRight />
						</Button>
					</div>
					<Card
						data-part="card"
						className={cn("w-56 shrink-0 gap-3 py-5", center && "absolute right-8 bottom-8 text-left")}
					>
						<CardContent className="flex flex-col gap-1 px-5">
							<span data-part="label" className="text-xs text-muted-foreground">
								{stat.label}
							</span>
							<span data-part="number" className="font-heading text-5xl leading-none tabular-nums">
								{stat.value}
							</span>
							<span data-part="caption" className="text-xs text-muted-foreground">
								{stat.caption}
							</span>
							<div data-part="chart" className="mt-3 flex h-10 items-end gap-1">
								{bars.map((value, index) => (
									<span
										key={value}
										className={cn(
											"flex-1",
											index === bars.length - 1 ? "bg-primary" : "bg-muted-foreground/25",
										)}
										style={{ height: `${(value / bars[bars.length - 1]) * 100}%` }}
									/>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
