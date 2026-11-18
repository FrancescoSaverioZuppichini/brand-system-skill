import { Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Photo } from "@/demo/photo"

const chips = ["Client work", "Open source", "Hardware", "Agencies", "Research", "Internal tools"]

const listings = [
	{ title: "Agency retainer", by: "Halden", uses: "1.2k uses", scene: "place" as const },
	{ title: "Hardware launch", by: "Fieldnote", uses: "860 uses", scene: "object" as const },
	{ title: "Yearly client review", by: "Ostra", uses: "640 uses", scene: "person" as const },
	{ title: "Open-source release", by: "Tilde", uses: "2.4k uses", scene: "object" as const },
]

export default function HeroSearch() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 md:px-8 md:py-28">
			<div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
				<h1 className="text-5xl leading-[1.02] md:text-6xl">Find a plan someone already kept</h1>
				<div className="flex w-full items-center gap-2 rounded-lg border bg-card p-2 shadow-sm">
					<Search className="ml-2 size-5 shrink-0 text-muted-foreground" />
					<input
						className="h-10 min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
						placeholder="Search 1,200 project templates"
					/>
					<Button size="lg">Search</Button>
				</div>
				<div className="flex flex-wrap justify-center gap-2">
					{chips.map((chip) => (
						<Badge key={chip} variant="outline" className="px-3 py-1 text-sm font-normal">
							{chip}
						</Badge>
					))}
				</div>
			</div>
			<div className="-mx-4 flex gap-4 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-4 md:px-0">
				{listings.map((listing) => (
					<div key={listing.title} className="flex w-56 shrink-0 flex-col gap-2 md:w-auto">
						<Photo scene={listing.scene} className="aspect-[4/3] rounded-lg" />
						<span className="font-medium">{listing.title}</span>
						<span className="text-sm text-muted-foreground">
							{listing.by} · {listing.uses}
						</span>
					</div>
				))}
			</div>
		</section>
	)
}
