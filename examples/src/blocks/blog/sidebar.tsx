import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Photo } from "@/demo/photo"
import { posts } from "@/demo/posts"
import { cn } from "@/lib/utils"

const categories = [
	{ name: "All", count: posts.length },
	...[...new Set(posts.map((post) => post.category))].map((name) => ({
		name,
		count: posts.filter((post) => post.category === name).length,
	})),
]

export default function BlogSidebar() {
	return (
		<section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_17rem] lg:gap-12">
			<div className="flex min-w-0 flex-col gap-8">
				{/* [Agent] On phones the sidebar is gone and its categories come back as chips above the posts. */}
				<ToggleGroup
					type="single"
					variant="outline"
					spacing={2}
					defaultValue="All"
					className="flex-wrap lg:hidden"
				>
					{categories.map((category) => (
						<ToggleGroupItem
							key={category.name}
							value={category.name}
							size="sm"
							className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
						>
							{category.name}
						</ToggleGroupItem>
					))}
				</ToggleGroup>
				<div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
					{posts.slice(0, 4).map((post) => (
						<article key={post.title} className="flex flex-col gap-2">
							<Photo scene={post.scene} className="mb-2 aspect-[16/10] rounded-lg" />
							<span className="text-sm text-muted-foreground">
								{post.category} · {post.read} read
							</span>
							<h3 className="text-xl leading-snug">{post.title}</h3>
							<p className="text-sm text-muted-foreground">{post.excerpt}</p>
						</article>
					))}
				</div>
			</div>
			<aside className="hidden flex-col gap-8 lg:flex">
				<InputGroup>
					<InputGroupAddon>
						<Search />
					</InputGroupAddon>
					<InputGroupInput placeholder="Search 10 posts" />
				</InputGroup>
				<nav className="flex flex-col gap-1 text-sm">
					{categories.map((category, index) => (
						<span
							key={category.name}
							className={cn(
								"flex justify-between rounded-md px-3 py-2",
								index === 0 ? "bg-accent font-medium text-accent-foreground" : "text-muted-foreground",
							)}
						>
							{category.name}
							<span className="tabular-nums">{category.count}</span>
						</span>
					))}
				</nav>
				<div className="flex flex-col gap-3 rounded-lg bg-muted p-4">
					<span className="font-medium">Kept, monthly</span>
					<p className="text-sm text-muted-foreground">One essay a month on software that lasts.</p>
					<Input type="email" aria-label="Email" placeholder="ana@halden.studio" className="bg-background" />
					<Button>Subscribe</Button>
				</div>
			</aside>
		</section>
	)
}
