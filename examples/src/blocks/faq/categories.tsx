import { Search } from "lucide-react"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { questions, topics } from "@/demo/questions"
import { cn } from "@/lib/utils"

export default function FaqCategories() {
	const [topic, setTopic] = useState<string>(topics[0])
	const [query, setQuery] = useState("")
	// [Agent] A search looks across every topic; with no search the chosen topic shows. Both are derived in render.
	const shown = query
		? questions.filter((item) => `${item.q} ${item.a}`.toLowerCase().includes(query.toLowerCase()))
		: questions.filter((item) => item.topic === topic)

	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm text-muted-foreground">Help</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Everything people ask us</h2>
				<p className="text-lg text-muted-foreground">
					{questions.length} answers on billing, data, setup and clients.
				</p>
				<label className="mt-2 flex h-11 w-full items-center gap-2 rounded-md border bg-card px-3 shadow-xs">
					<Search className="size-4 shrink-0 text-muted-foreground" />
					<input
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						placeholder="Search questions"
						className="h-full min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
					/>
				</label>
			</div>
			<div className="grid gap-6 md:grid-cols-[12rem_1fr] md:gap-12">
				<nav className="flex flex-wrap gap-2 md:flex-col md:gap-1">
					{topics.map((name) => (
						<button
							key={name}
							type="button"
							onClick={() => {
								setTopic(name)
								setQuery("")
							}}
							className={cn(
								"flex items-center justify-between gap-2 rounded-full px-3 py-1.5 text-sm ring-1 ring-border ring-inset md:rounded-md md:py-2 md:ring-0",
								name === topic && !query
									? "bg-primary text-primary-foreground ring-primary md:bg-accent md:font-medium md:text-accent-foreground"
									: "text-muted-foreground",
							)}
						>
							{name}
							<span className="hidden font-mono text-xs md:inline">
								{questions.filter((item) => item.topic === name).length}
							</span>
						</button>
					))}
				</nav>
				<Accordion
					key={topic + query}
					type="single"
					collapsible
					defaultValue={shown[0]?.q}
					className="border-t"
				>
					{shown.map((item) => (
						<AccordionItem key={item.q} value={item.q} className="last:border-b">
							<AccordionTrigger className="text-base">{item.q}</AccordionTrigger>
							<AccordionContent className="text-base text-muted-foreground">{item.a}</AccordionContent>
						</AccordionItem>
					))}
					{shown.length === 0 && (
						<p className="py-6 text-muted-foreground">
							Nothing matches “{query}”. Write to hello@keep.app and a person will answer.
						</p>
					)}
				</Accordion>
			</div>
		</section>
	)
}
