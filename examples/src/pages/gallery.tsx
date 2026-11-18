import { ExternalLink } from "lucide-react"
import { useState } from "react"
import { blocks } from "@/blocks"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { landings } from "@/landings"
import { cn } from "@/lib/utils"
import { styles } from "@/theme"

type View = "block" | "specimen" | "landing"

const families = Object.groupBy(
	Object.entries(styles).sort(([, a], [, b]) => a.name.localeCompare(b.name)),
	([, style]) => style.family,
)
const sections = Object.groupBy(Object.keys(blocks).sort(), (id) => id.split("/")[0])

// [Agent] The picks live in the query string, so a view is a link; previews are iframes because each route themes
// its whole <html>, which keeps this chrome neutral and lets the 390 frame use real mobile breakpoints.
export function Gallery() {
	const [query, setQuery] = useState(() => new URLSearchParams(location.search))
	const style = query.get("style") ?? "shadcn"
	const block = query.get("block") ?? "hero/split"
	const landing = query.get("landing") ?? "dev-tool"
	const view = (query.get("view") ?? "block") as View

	function pick(changes: Record<string, string>) {
		const next = new URLSearchParams({ ...Object.fromEntries(query), ...changes })
		history.replaceState(null, "", `?${next}`)
		setQuery(next)
	}

	const src = {
		block: `/block/${block}?style=${style}`,
		specimen: `/specimen/${style}`,
		landing: `/landing/${landing}?style=${style}`,
	}[view]

	return (
		<div className="flex h-screen flex-col text-sm">
			<header className="flex items-center gap-4 border-b px-4 py-2.5">
				<span className="font-semibold">Brand system examples</span>
				<span className="text-muted-foreground">
					{Object.keys(blocks).length} blocks · {Object.keys(styles).length} styles
				</span>
				<Tabs value={view} onValueChange={(value) => pick({ view: value })} className="ml-auto">
					<TabsList>
						<TabsTrigger value="block">Block</TabsTrigger>
						<TabsTrigger value="specimen">Specimen</TabsTrigger>
						<TabsTrigger value="landing">Landing</TabsTrigger>
					</TabsList>
				</Tabs>
				<Select value={style} onValueChange={(value) => pick({ style: value })}>
					<SelectTrigger className="w-72">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{Object.entries(families).map(([family, entries]) => (
							<SelectGroup key={family}>
								<SelectLabel>{family}</SelectLabel>
								{entries?.map(([slug, { name }]) => (
									<SelectItem key={slug} value={slug}>
										{name}
									</SelectItem>
								))}
							</SelectGroup>
						))}
					</SelectContent>
				</Select>
				<a
					href={src}
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-1 text-muted-foreground"
				>
					Open <ExternalLink className="size-3.5" />
				</a>
			</header>
			<div className="flex min-h-0 flex-1">
				<ScrollArea className="w-56 shrink-0 border-r">
					<nav className="flex flex-col gap-4 p-3">
						{view === "landing"
							? Object.keys(landings).map((name) => (
									<Item key={name} active={name === landing} onClick={() => pick({ landing: name })}>
										{name}
									</Item>
								))
							: Object.entries(sections).map(([section, ids]) => (
									<div key={section} className="flex flex-col gap-0.5">
										<span className="px-2 text-xs font-medium text-muted-foreground">{section}</span>
										{ids?.map((id) => (
											<Item
												key={id}
												active={view === "block" && id === block}
												onClick={() => pick({ view: "block", block: id })}
											>
												{id.split("/")[1]}
											</Item>
										))}
									</div>
								))}
					</nav>
				</ScrollArea>
				<main className="flex min-w-0 flex-1 gap-4 overflow-auto bg-muted p-4">
					{view === "specimen" ? (
						<iframe
							title="specimen"
							src={src}
							className="h-[500px] w-[800px] shrink-0 border bg-background"
						/>
					) : (
						<>
							<iframe title="desktop" src={src} className="h-full min-w-0 flex-1 border bg-background" />
							<iframe title="mobile" src={src} className="h-full w-[390px] shrink-0 border bg-background" />
						</>
					)}
				</main>
			</div>
		</div>
	)
}

function Item({ active, onClick, children }: { active: boolean; onClick: () => void; children: string }) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={cn(
				"rounded-md px-2 py-1 text-left",
				active ? "bg-background font-medium shadow-xs" : "text-muted-foreground hover:text-foreground",
			)}
		>
			{children}
		</button>
	)
}
