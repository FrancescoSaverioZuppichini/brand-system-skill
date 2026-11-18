import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkline } from "@/demo/chart"
import { product, stats } from "@/demo/content"
import { Photo } from "@/demo/photo"
import { ProjectsTable } from "@/demo/table"
import { cn } from "@/lib/utils"

// [Agent] Each tile is one job of the product (track, measure, ship, review, team) with its own real view, so no tile
// is filler. On phones the table stays first and the small tiles become a sideways scroller.
function Tile({
	title,
	className,
	children,
}: {
	title: string
	className?: string
	children: React.ReactNode
}) {
	return (
		<Card className={cn("min-w-64 shrink-0 gap-3 overflow-hidden p-4", className)}>
			<span className="text-xs font-medium text-muted-foreground">{title}</span>
			{children}
		</Card>
	)
}

export default function HeroBento() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 md:px-8 md:py-28">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
				<h1 className="text-5xl leading-[1.02] md:text-6xl">{product.headline}</h1>
				<p className="text-lg text-muted-foreground">{product.sub}</p>
				<Button size="lg">{product.primary}</Button>
			</div>
			<div className="flex flex-col gap-4 md:grid md:grid-cols-3">
				<Tile title="Projects" className="md:col-span-2 md:row-span-2">
					<ProjectsTable rows={5} />
				</Tile>
				<div className="-mx-4 flex gap-4 overflow-x-auto px-4 md:contents">
					<Tile title={stats[0].label}>
						<div className="flex items-end justify-between">
							<span className="text-3xl font-semibold tabular-nums">{stats[0].value}</span>
							<Sparkline />
						</div>
						<span className="text-xs text-muted-foreground">{stats[0].delta}</span>
					</Tile>
					<Tile title="Release 1.4">
						{["Changelog written", "Migration tested", "Owner signed off"].map((item) => (
							<span key={item} className="flex items-center gap-2 text-sm">
								<Check className="size-4 text-chart-2" /> {item}
							</span>
						))}
					</Tile>
					<Tile title="Yearly review · Halden" className="p-0 md:col-span-1">
						<Photo scene="person" className="mx-4 mb-4 h-28" />
					</Tile>
					<Tile title="Next in care">
						<span className="text-sm">Customer portal · 18 Nov</span>
						<span className="text-sm">Search index · 2 Dec</span>
						<span className="text-sm text-muted-foreground">Mobile app · 9 Jan</span>
					</Tile>
				</div>
			</div>
		</section>
	)
}
