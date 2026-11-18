import { Bookmark, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneStates, TabBar } from "@/demo/phone-app"
import { Photo } from "@/demo/photo"
import { work } from "@/demo/work"
import { cn } from "@/lib/utils"

const chips = ["For you", "Agencies", "Hardware", "Open source", "Research"]

// [Agent] Each state is a crop of the same feed: the second phone starts further down with the chips still pinned
// above it, the third has another chip picked.
function Feed({ chip, cards, scrolled }: { chip: string; cards: typeof work; scrolled?: boolean }) {
	return (
		<div className="flex min-h-0 flex-1 flex-col">
			<div className="flex shrink-0 flex-col gap-3 border-b px-4 pt-3 pb-3">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl leading-tight">Explore</h1>
					<Button variant="ghost" size="icon" aria-label="Search">
						<Search />
					</Button>
				</div>
				<div className="-mx-4 flex gap-2 overflow-x-auto px-4">
					{chips.map((label) => (
						<Button
							key={label}
							size="sm"
							variant={label === chip ? "default" : "outline"}
							className="rounded-full"
						>
							{label}
						</Button>
					))}
				</div>
			</div>
			<div
				className={cn(
					"flex min-h-0 flex-1 flex-col gap-6 overflow-hidden p-4",
					scrolled && "[&>article:first-child]:-mt-44",
				)}
			>
				{cards.map((card) => (
					<article key={card.title} className="flex flex-col gap-2">
						<Photo scene={card.scene} className="aspect-[4/3] rounded-xl" />
						<div className="flex items-start gap-2">
							<div className="flex min-w-0 flex-1 flex-col">
								<span className="font-medium">{card.title}</span>
								<span className="text-sm text-muted-foreground">
									{card.client} · in care since {card.year}
								</span>
							</div>
							<Button variant="ghost" size="icon-sm" aria-label={`Save ${card.title}`}>
								<Bookmark className={cn(card === work[2] && "fill-current")} />
							</Button>
						</div>
					</article>
				))}
			</div>
			<TabBar active="Explore" />
		</div>
	)
}

export default function MobileFeed() {
	return (
		<PhoneStates
			states={[
				{ label: "Feed", screen: <Feed chip="For you" cards={work.slice(0, 3)} /> },
				{ label: "Scrolled, chips stay", screen: <Feed chip="For you" cards={work.slice(1, 5)} scrolled /> },
				{ label: "Agencies picked", screen: <Feed chip="Agencies" cards={[work[1], work[5], work[3]]} /> },
			]}
		/>
	)
}
