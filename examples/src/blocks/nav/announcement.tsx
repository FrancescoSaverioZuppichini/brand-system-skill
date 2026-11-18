import { ArrowRight, X } from "lucide-react"
import { useState } from "react"
import NavStandard from "@/blocks/nav/standard"

export default function NavAnnouncement() {
	const [open, setOpen] = useState(true)
	return (
		<>
			{open && (
				<div className="bg-primary text-primary-foreground">
					<div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 text-sm md:px-8">
						<span className="size-7 shrink-0" />
						<a href="#top" className="flex min-w-0 flex-1 items-center justify-center gap-2">
							<span className="truncate md:hidden">Keep 2.0: care schedules are here</span>
							<span className="hidden md:inline">
								<span className="font-medium">Keep 2.0 is out.</span> Care schedules, health checks and a
								yearly review for every project you ship.
							</span>
							<span className="hidden shrink-0 font-medium underline underline-offset-4 md:inline">
								Read the post
							</span>
							<ArrowRight className="size-4 shrink-0" />
						</a>
						<button
							type="button"
							aria-label="Dismiss"
							onClick={() => setOpen(false)}
							className="flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-primary-foreground/10"
						>
							<X className="size-4" />
						</button>
					</div>
				</div>
			)}
			<NavStandard />
		</>
	)
}
