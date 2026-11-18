import { Compass, FolderKanban, House, Inbox } from "lucide-react"
import type { ReactNode } from "react"
import { Phone } from "@/demo/device"
import { cn } from "@/lib/utils"

const tabs = [
	{ label: "Home", icon: House },
	{ label: "Projects", icon: FolderKanban },
	{ label: "Explore", icon: Compass },
	{ label: "Inbox", icon: Inbox },
]

export function TabBar({ active }: { active: string }) {
	return (
		<nav className="grid shrink-0 grid-cols-4 border-t bg-background pt-2 pb-3">
			{tabs.map(({ label, icon: Icon }) => (
				<a
					key={label}
					href="#top"
					aria-current={label === active ? "page" : undefined}
					className={cn(
						"flex flex-col items-center gap-1 text-[11px]",
						label === active ? "font-medium text-foreground" : "text-muted-foreground",
					)}
				>
					<Icon className="size-5" />
					{label}
				</a>
			))}
		</nav>
	)
}

// [Agent] The mobile blocks are phone apps: at 390 the first state is the page itself, full width and screen-tall;
// from md up every state sits in its own Phone, side by side and captioned, so one shot shows how the app moves.
export function PhoneStates({ states }: { states: { label: string; screen: ReactNode }[] }) {
	return (
		<section className="md:py-16">
			<div className="flex h-[780px] flex-col md:hidden">{states[0].screen}</div>
			<div className="hidden flex-wrap justify-center gap-10 px-8 md:flex">
				{states.map((state) => (
					<figure key={state.label} className="flex flex-col items-center gap-4">
						<Phone className="w-80">{state.screen}</Phone>
						<figcaption className="text-sm text-muted-foreground">{state.label}</figcaption>
					</figure>
				))}
			</div>
		</section>
	)
}
