import { ChevronRight, Search } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

const popular = [
	{ title: "Move a project into care", path: "/docs/care/move" },
	{ title: "Quickstart", path: "/docs/quickstart" },
	{ title: "CLI reference", path: "/docs/cli" },
	{ title: "Import from Tasklist", path: "/docs/import/tasklist" },
	{ title: "Changelog", path: "/changelog" },
]

export default function NotFoundSearch() {
	return (
		<section className="mx-auto flex min-h-[720px] max-w-2xl flex-col justify-center gap-8 px-4 py-16 md:px-8">
			<div className="flex flex-col gap-3">
				<h1 className="text-3xl md:text-4xl">We couldn't find that page</h1>
				<p className="text-muted-foreground">
					Nothing lives at <span className="font-mono text-sm text-foreground">/docs/care-schedule</span>. Search
					the docs, or pick one of the pages people open most.
				</p>
			</div>
			<InputGroup className="h-11">
				<InputGroupInput defaultValue="care schedule" aria-label="Search the docs" />
				<InputGroupAddon>
					<Search />
				</InputGroupAddon>
				<InputGroupAddon align="inline-end">
					<Kbd>↵</Kbd>
				</InputGroupAddon>
			</InputGroup>
			<div className="flex flex-col">
				<span className="pb-2 text-sm text-muted-foreground">Popular pages</span>
				{popular.map((page) => (
					<a key={page.path} href={page.path} className="flex items-center justify-between gap-4 border-t py-3">
						<span className="flex min-w-0 flex-col">
							<span className="font-medium">{page.title}</span>
							<span className="truncate font-mono text-xs text-muted-foreground">{page.path}</span>
						</span>
						<ChevronRight className="size-4 shrink-0 text-muted-foreground" />
					</a>
				))}
			</div>
		</section>
	)
}
