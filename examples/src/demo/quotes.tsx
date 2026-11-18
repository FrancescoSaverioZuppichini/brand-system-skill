import { Star } from "lucide-react"
import { people, quote } from "@/demo/content"
import { cn } from "@/lib/utils"

// [Agent] Ten short customer quotes for the wall and the carousel; the first six are the customers in content.ts.
export const quotes = [
	{ ...quote, stars: 5 },
	{
		...people[1],
		text: "Release checklists replaced our Friday deploy call. Twelve checks, all green, shipped.",
		stars: 5,
	},
	{
		...people[2],
		text: "Clients read the plan page instead of asking me for status. That alone pays for Studio.",
		stars: 5,
	},
	{
		...people[3],
		text: "The yearly review is the first process our team has actually kept doing.",
		stars: 5,
	},
	{
		...people[4],
		text: "I took over a project from 2020 and every decision was written down. I didn't have to call anyone.",
		stars: 5,
	},
	{
		...people[5],
		text: "A health check caught an expired certificate two weeks before a client would have.",
		stars: 4,
	},
	{
		name: "Sofia Brandt",
		role: "Developer, Tilde",
		text: "The CLI is the rare tool I didn't configure. keep ship, and I'm done.",
		stars: 5,
	},
	{
		name: "Kofi Owusu",
		role: "Studio owner, Marrow",
		text: "We moved 40 old client sites into care in a week. Now each one has an owner.",
		stars: 5,
	},
	{
		name: "Hana Sato",
		role: "PM, Parcel",
		text: "Plans fit on one page, so people actually read them.",
		stars: 4,
	},
	{
		name: "Ravi Iyer",
		role: "CTO, Northwind",
		text: "Moving off Jira took one afternoon with the importer, history included.",
		stars: 5,
	},
]

export function Stars({ count = 5, className }: { count?: number; className?: string }) {
	return (
		<span className={cn("flex gap-0.5 text-chart-4", className)} role="img" aria-label={`${count} out of 5`}>
			{[1, 2, 3, 4, 5].map((n) => (
				<Star key={n} className={cn("size-4", n <= count ? "fill-current" : "opacity-30")} />
			))}
		</span>
	)
}
