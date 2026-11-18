import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import { AreaChart } from "@/demo/chart"
import { stats } from "@/demo/content"
import { Frame } from "@/demo/frame"
import { ReleaseChecklist } from "@/demo/phone-screens"
import { ProjectsTable } from "@/demo/table"

const posts: { tag: string; date: string; title: string; text: string; shot: ReactNode }[] = [
	{
		tag: "Keep 2.0",
		date: "4 Nov 2026",
		title: "Care reports: what you kept alive this year",
		text: "One page per workspace with every project in care, its owner and its next review, plus the curve of what you still run.",
		shot: (
			<Frame url="keep.app/reports/care">
				<div className="flex flex-col gap-3 p-4">
					<div className="flex items-baseline justify-between text-xs">
						<span className="text-muted-foreground">{stats[0].label}</span>
						<span className="text-muted-foreground">{stats[0].delta}</span>
					</div>
					<span className="text-2xl font-semibold tabular-nums">{stats[0].value}</span>
					<AreaChart className="h-36" />
				</div>
			</Frame>
		),
	},
	{
		tag: "Keep 1.9",
		date: "14 Oct 2026",
		title: "Release checklists you can reuse",
		text: "Save a release's checks as a template, start the next one from it, and see who ticked what.",
		shot: (
			<Frame url="keep.app/billing-rewrite/releases/1.4">
				<ReleaseChecklist />
			</Frame>
		),
	},
	{
		tag: "Keep 1.8",
		date: "23 Sep 2026",
		title: "Owners and progress in the projects table",
		text: "The weekly check-in now starts from one screen: who owns each project and how far its release is.",
		shot: (
			<Frame url="keep.app/projects">
				<ProjectsTable className="px-2" />
			</Frame>
		),
	},
]

export default function ChangelogCards() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="flex flex-col gap-2">
				<h1 className="text-4xl md:text-5xl">What's new in Keep</h1>
				<p className="text-muted-foreground">The bigger releases, each with the full story.</p>
			</div>
			<div className="flex flex-col gap-12 md:gap-16">
				{posts.map((post) => (
					<article key={post.title} className="grid items-center gap-6 md:grid-cols-[7fr_5fr] md:gap-12">
						{post.shot}
						<div className="flex flex-col items-start gap-3">
							<span className="flex items-center gap-3 text-sm text-muted-foreground">
								<Badge variant="secondary">{post.tag}</Badge>
								{post.date}
							</span>
							<h2 className="text-2xl">{post.title}</h2>
							<p className="text-muted-foreground">{post.text}</p>
							<a
								href="#post"
								className="flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
							>
								Read the post <ArrowRight className="size-4" />
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
