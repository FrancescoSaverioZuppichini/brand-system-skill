import { Photo } from "@/demo/photo"
import { team } from "@/demo/team"
import { cn } from "@/lib/utils"

type Scene = "place" | "object" | "person"

export const posts: {
	title: string
	excerpt: string
	category: string
	author: string
	date: string
	read: string
	scene: Scene
}[] = [
	{
		title: "How we look after a project for five years",
		excerpt:
			"Shipping is the middle of a project, not the end. The routine that has kept the Keep CLI healthy since 2021.",
		category: "Care",
		author: "Rui Almeida",
		date: "12 Nov 2026",
		read: "8 min",
		scene: "place",
	},
	{
		title: "Release 1.4: what a reviewed checklist caught",
		excerpt: "Twelve checks, one failed migration, and why we were glad it failed on a Tuesday morning.",
		category: "Shipping",
		author: "Daniel Kim",
		date: "4 Nov 2026",
		read: "5 min",
		scene: "object",
	},
	{
		title: "The yearly review, explained on one page",
		excerpt: "Three questions we ask every project once a year, and what we do with the answers.",
		category: "Care",
		author: "Kwame Mensah",
		date: "28 Oct 2026",
		read: "6 min",
		scene: "person",
	},
	{
		title: "Writing plans the next person can read",
		excerpt: "Scope, owners, dates and the things you chose not to do. Why the last list matters most.",
		category: "Planning",
		author: "Chloé Martin",
		date: "15 Oct 2026",
		read: "7 min",
		scene: "object",
	},
	{
		title: "Why we ship less often than we used to",
		excerpt:
			"We went from weekly releases to one every three weeks. Fewer incidents, and nobody misses Fridays.",
		category: "Shipping",
		author: "Matteo Ricci",
		date: "2 Oct 2026",
		read: "4 min",
		scene: "place",
	},
	{
		title: "Halden's client sites, five years in",
		excerpt: "Ana Ruiz's studio keeps twelve client sites in care. We spent a week there to see how.",
		category: "Customers",
		author: "Sofia Marin",
		date: "18 Sep 2026",
		read: "9 min",
		scene: "person",
	},
	{
		title: "Moving a project into care without a handover meeting",
		excerpt: "The plan page is the handover. What the new owner reads first, and what they write back.",
		category: "Care",
		author: "Aisha Bello",
		date: "5 Sep 2026",
		read: "6 min",
		scene: "place",
	},
	{
		title: "What 1,284 projects taught us about deadlines",
		excerpt:
			"Projects with one named owner ship on time 94% of the time. Projects with a team as owner do not.",
		category: "Planning",
		author: "Zainab Hassan",
		date: "21 Aug 2026",
		read: "7 min",
		scene: "object",
	},
	{
		title: "Health checks that don't page anyone at night",
		excerpt: "A monthly checklist beats an alert storm for software that is meant to last.",
		category: "Engineering",
		author: "Viktor Petrov",
		date: "7 Aug 2026",
		read: "5 min",
		scene: "object",
	},
	{
		title: "Your data stays in Frankfurt: how and why",
		excerpt: "Where Keep stores your plans, how backups are tested, and what we do on day 31.",
		category: "Engineering",
		author: "Lukas Brandt",
		date: "24 Jul 2026",
		read: "4 min",
		scene: "place",
	},
]

export const article = {
	...posts[0],
	dek: "Shipping is the middle of a project, not the end. This is the routine our team has used to keep the Keep CLI healthy since its first release in 2021: one owner, one page, a monthly check and a yearly review.",
	body: [
		{ kind: "h2", id: "middle", text: "Shipping is the middle" },
		{
			kind: "p",
			text: "Most plans end on launch day. Ours keep going. When the Keep CLI shipped in March 2021, its plan page did not close; it grew a new section called care, with an owner, a monthly health check and a review date a year out. Five years and 38 releases later the CLI has never been rewritten, and the page still says who looks after it and why.",
		},
		{ kind: "h2", id: "owner", text: "One owner, one page" },
		{
			kind: "p",
			text: "Every project in care has exactly one owner. Not a team, not a channel: a person whose name is on the page. Elif Kaya has owned the CLI since 2023. She does not do all the work, but she decides what gets done, and anyone with a question knows where to go. The page holds the scope, the decisions and the list of things we chose not to do, which is often the most useful part.",
		},
		{ kind: "h3", id: "leaves", text: "When the owner leaves" },
		{
			kind: "p",
			text: "Owners change jobs, go on leave and move to other projects. The handover is the page itself: the new owner reads it top to bottom, adds a dated note that they have taken over, and runs the next health check with the old owner on the call. It takes an afternoon, and nobody has to remember anything that is not already written down.",
		},
		{
			kind: "quote",
			text: "The CLI is five years old and nobody is afraid to change it. That is the whole point.",
			by: "Elif Kaya, owner of the Keep CLI",
		},
		{ kind: "h2", id: "health", text: "A health check every month" },
		{
			kind: "p",
			text: "On the first Monday of the month the owner runs a checklist of twelve items: dependencies, error rates, a backup restored on a test machine, open support threads and the date of the last release. It takes about forty minutes. Most months nothing is wrong. The months where something is wrong are the reason we do it.",
		},
		{ kind: "h2", id: "review", text: "The yearly review" },
		{
			kind: "p",
			text: "Once a year, in November, the owner and one person from outside the project read the whole page and ask three questions: is this still needed, is it still safe, and would we build it the same way today. The answers decide the next year: keep it as it is, invest in it, or plan a careful retirement. The CLI's fifth review is next week, and the plan for year six is already half written.",
		},
	] as { kind: "h2" | "h3" | "p" | "quote"; text: string; id?: string; by?: string }[],
}

export function Author({ name, meta, className }: { name: string; meta: string; className?: string }) {
	const role = team.find((person) => person.name === name)?.role
	return (
		<span className={cn("flex items-center gap-3 text-sm", className)}>
			<Photo scene="person" className="size-9 shrink-0 rounded-full" />
			<span className="flex flex-col">
				<span className="font-medium">
					{name}
					{role && <span className="font-normal text-muted-foreground"> · {role}</span>}
				</span>
				<span className="text-muted-foreground">{meta}</span>
			</span>
		</span>
	)
}

export function ArticleBody({ className }: { className?: string }) {
	return (
		<div className={cn("flex flex-col gap-5 text-lg leading-relaxed", className)}>
			{article.body.map((block) => {
				if (block.kind === "h2")
					return (
						<h2 key={block.id} id={block.id} className="mt-6 scroll-mt-24 text-2xl leading-tight md:text-3xl">
							{block.text}
						</h2>
					)
				if (block.kind === "h3")
					return (
						<h3 key={block.id} id={block.id} className="mt-2 scroll-mt-24 text-xl leading-snug">
							{block.text}
						</h3>
					)
				if (block.kind === "quote")
					return (
						<figure key={block.text} className="my-6 border-l-2 border-primary pl-6">
							<blockquote className="font-heading text-2xl leading-snug md:text-3xl">
								“{block.text}”
							</blockquote>
							<figcaption className="mt-3 text-base text-muted-foreground">{block.by}</figcaption>
						</figure>
					)
				return <p key={block.text}>{block.text}</p>
			})}
		</div>
	)
}
