import type { ReactNode } from "react"
import { customers } from "@/demo/content"
import { CustomerLogo } from "@/demo/logo"
import { cn } from "@/lib/utils"

// [Agent] A second set of teams for the lower row, so the two rows never show the same logo and volume reads as real.
const more = [
	{ name: "Studio Rasa", className: "font-heading font-bold" },
	{ name: "Kiln", className: "font-mono uppercase" },
	{ name: "Bureau Nord", className: "font-sans italic" },
	{ name: "Saltmarsh", className: "font-heading tracking-widest uppercase" },
	{ name: "Oakfield School", className: "font-heading font-bold" },
	{ name: "Common Room", className: "font-mono uppercase" },
	{ name: "Ferro Labs", className: "font-sans italic" },
	{ name: "Ridgeway", className: "font-heading tracking-widest uppercase" },
]

// [Agent] The track holds its logos twice and slides by exactly half its own width, so each loop restarts on an
// identical frame. Hovering the section pauses both rows; reduced motion stops them on the first frame.
function Track({
	children,
	reverse,
	className,
}: {
	children: ReactNode
	reverse?: boolean
	className?: string
}) {
	const set = "flex shrink-0 items-center gap-16 pr-16"
	return (
		<div className={cn("flex overflow-hidden", className)}>
			<div
				className={cn(
					"flex w-max animate-[marquee_48s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none",
					reverse && "[animation-direction:reverse]",
				)}
			>
				<div className={set}>{children}</div>
				<div className={set} aria-hidden>
					{children}
				</div>
			</div>
		</div>
	)
}

export default function LogosMarquee() {
	return (
		<section className="group flex flex-col gap-8 overflow-hidden py-12 md:py-16">
			<style>{"@keyframes marquee { to { transform: translateX(-50%) } }"}</style>
			<p className="px-4 text-center text-sm text-muted-foreground">
				Studios, schools and communities: 312 teams keep their projects here
			</p>
			<Track>
				{customers.map((name, index) => (
					<CustomerLogo key={name} index={index} />
				))}
			</Track>
			<Track reverse className="hidden md:flex">
				{more.map((team) => (
					<span
						key={team.name}
						className={cn("text-lg whitespace-nowrap text-muted-foreground", team.className)}
					>
						{team.name}
					</span>
				))}
			</Track>
		</section>
	)
}
