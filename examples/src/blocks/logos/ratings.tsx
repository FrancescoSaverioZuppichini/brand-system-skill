import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"
import { people } from "@/demo/content"
import { Stars } from "@/demo/quotes"

const ratings = [
	{ site: "G2", score: "4.8", count: "410 reviews" },
	{ site: "Capterra", score: "4.7", count: "260 reviews" },
	{ site: "App Store", score: "4.8", count: "2,100 ratings" },
]

export default function LogosRatings() {
	return (
		<section className="bg-muted">
			<div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 md:grid-cols-4 md:px-8">
				{ratings.map((rating) => (
					<div key={rating.site} className="flex flex-col gap-1.5">
						<span className="flex items-center gap-2">
							<Stars />
							<span className="font-medium tabular-nums">{rating.score}</span>
						</span>
						<span className="text-sm text-muted-foreground">
							{rating.site} · {rating.count}
						</span>
					</div>
				))}
				<div className="flex flex-col gap-1.5">
					<AvatarGroup className="*:data-[slot=avatar]:ring-muted">
						{people.slice(0, 4).map((person) => (
							<Avatar key={person.name} className="size-7">
								<AvatarFallback className="bg-background text-[10px]">{person.initials}</AvatarFallback>
							</Avatar>
						))}
						<AvatarGroupCount className="size-7 bg-background text-[10px] ring-muted">+308</AvatarGroupCount>
					</AvatarGroup>
					<span className="text-sm text-muted-foreground">312 teams in 28 countries</span>
				</div>
			</div>
		</section>
	)
}
