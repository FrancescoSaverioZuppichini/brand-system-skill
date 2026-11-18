import { useEffect, useRef, useState } from "react"
import { features } from "@/demo/content"
import { Frame } from "@/demo/frame"
import { ReleaseChecklist } from "@/demo/phone-screens"
import { ProjectCare, ProjectPlan } from "@/demo/project"
import { cn } from "@/lib/utils"

const steps = [
	{ ...features[0], url: "keep.app/onboarding-v3", view: <ProjectPlan /> },
	{ ...features[1], url: "keep.app/billing-rewrite/releases/1.4", view: <ReleaseChecklist /> },
	{ ...features[2], url: "keep.app/customer-portal/care", view: <ProjectCare /> },
]

function Screen({ index }: { index: number }) {
	return (
		<div className="rounded-xl bg-muted p-4 sm:p-8">
			<Frame url={steps[index].url} className="mx-auto max-w-md shadow-lg">
				{steps[index].view}
			</Frame>
		</div>
	)
}

export default function FeaturesSticky() {
	const [active, setActive] = useState(0)
	const list = useRef<HTMLOListElement>(null)

	// [Agent] A step becomes active when it crosses the middle of the viewport (the -50% margins shrink the observed
	// area to one line there), and the pinned screen swaps to that step's view. Without scrolling, step 1 shows.
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries)
					if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step))
			},
			{ rootMargin: "-50% 0px -50% 0px" },
		)
		for (const step of list.current?.querySelectorAll("[data-step]") ?? []) observer.observe(step)
		return () => observer.disconnect()
	}, [])

	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="flex max-w-2xl flex-col gap-4">
				<span className="text-sm font-medium text-muted-foreground">One project, three stages</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Follow Onboarding v3 from plan to care</h2>
			</div>
			<div className="grid gap-16 md:grid-cols-2">
				<ol ref={list} className="flex flex-col gap-16 md:gap-0">
					{steps.map((step, index) => (
						<li
							key={step.title}
							data-step={index}
							className={cn(
								"flex flex-col gap-6 transition-opacity md:min-h-[440px]",
								index !== active && "md:opacity-40",
							)}
						>
							<div className="flex flex-col gap-3">
								<span className="flex size-8 items-center justify-center rounded-full border font-mono text-sm">
									{index + 1}
								</span>
								<h3 className="text-2xl leading-tight md:text-3xl">{step.title}</h3>
								<p className="max-w-md text-muted-foreground">{step.text}</p>
							</div>
							<div className="md:hidden">
								<Screen index={index} />
							</div>
						</li>
					))}
				</ol>
				<div className="hidden md:block">
					<div className="sticky top-24">
						<Screen index={active} />
					</div>
				</div>
			</div>
		</section>
	)
}
