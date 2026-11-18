import { ArrowLeft, Share, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { PhoneStates } from "@/demo/phone-app"
import { Photo } from "@/demo/photo"
import { Person } from "@/demo/table"

const details = [
	{ label: "Made by", value: "Halden" },
	{ label: "Length", value: "12 weeks" },
	{ label: "Releases", value: "4 checklists" },
	{ label: "Client space", value: "Included" },
	{ label: "Used by", value: "1.2k teams" },
]

function Body() {
	return (
		<div className="flex flex-col gap-5 p-4">
			<Photo scene="place" className="aspect-[4/3] rounded-xl" />
			<div className="flex flex-col gap-2">
				<h1 className="text-2xl leading-tight">Agency retainer</h1>
				<span className="flex items-center gap-2 text-sm text-muted-foreground">
					<span className="flex text-chart-4">
						{[1, 2, 3, 4, 5].map((n) => (
							<Star key={n} className="size-4 fill-current" />
						))}
					</span>
					4.8 · 212 ratings
				</span>
			</div>
			<div className="flex flex-col gap-2">
				<span className="text-sm font-medium">Care schedule</span>
				<ToggleGroup type="single" defaultValue="monthly" variant="outline" className="w-full">
					<ToggleGroupItem value="monthly" className="flex-1">
						Monthly
					</ToggleGroupItem>
					<ToggleGroupItem value="quarterly" className="flex-1">
						Quarterly
					</ToggleGroupItem>
					<ToggleGroupItem value="yearly" className="flex-1">
						Yearly
					</ToggleGroupItem>
				</ToggleGroup>
			</div>
			<p className="text-sm leading-relaxed text-muted-foreground">
				A retainer plan for studios that build and then look after client sites: a 12-week build in four
				reviewed releases, then a monthly health check and a yearly review with the client.
			</p>
			<dl className="flex flex-col divide-y border-y text-sm">
				{details.map((detail) => (
					<div key={detail.label} className="flex justify-between gap-4 py-2.5">
						<dt className="text-muted-foreground">{detail.label}</dt>
						<dd>{detail.value}</dd>
					</div>
				))}
			</dl>
			<figure className="flex flex-col gap-3 rounded-xl bg-muted p-4 text-sm">
				<blockquote>“Clients read the plan page instead of asking me for status.”</blockquote>
				<figcaption>
					<Person name="Mei Okafor" className="text-muted-foreground" />
				</figcaption>
			</figure>
		</div>
	)
}

// [Agent] The action bar sits outside the scrolling body, so it stays put while the body moves; the second state is
// the same body pulled up, the way it looks after a scroll.
function Detail({ scrolled }: { scrolled?: boolean }) {
	return (
		<div className="flex min-h-0 flex-1 flex-col">
			<div className="flex shrink-0 items-center justify-between border-b px-2 py-1.5">
				<Button variant="ghost" size="icon" aria-label="Back">
					<ArrowLeft />
				</Button>
				<span className="text-sm font-medium">{scrolled ? "Agency retainer" : "Template"}</span>
				<Button variant="ghost" size="icon" aria-label="Share">
					<Share />
				</Button>
			</div>
			<div className="min-h-0 flex-1 overflow-hidden">
				<div className={scrolled ? "-mt-[330px]" : undefined}>
					<Body />
				</div>
			</div>
			<div className="flex shrink-0 items-center gap-4 border-t bg-background p-4">
				<div className="flex flex-col text-sm">
					<span className="font-medium">Free</span>
					<span className="text-xs text-muted-foreground">on every plan</span>
				</div>
				<Button size="lg" className="flex-1">
					Use this template
				</Button>
			</div>
		</div>
	)
}

export default function MobileDetail() {
	return (
		<PhoneStates
			states={[
				{ label: "Detail", screen: <Detail /> },
				{ label: "Scrolled, the action stays", screen: <Detail scrolled /> },
			]}
		/>
	)
}
