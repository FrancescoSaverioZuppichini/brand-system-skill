import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"
import { product } from "@/demo/content"
import { Logo } from "@/demo/logo"
import { MobileMenu } from "@/demo/menu"

const links = ["Docs", "Guides", "API", "Changelog"]

const results = {
	Docs: ["Write a one-page plan", "Release checklists", "Move a project into care", "keep ship"],
	Projects: ["Billing rewrite", "Customer portal", "Onboarding v3"],
}

export default function NavSearch() {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		function toggle(event: KeyboardEvent) {
			if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
				event.preventDefault()
				setOpen((value) => !value)
			}
		}
		document.addEventListener("keydown", toggle)
		return () => document.removeEventListener("keydown", toggle)
	}, [])

	return (
		<header className="border-b bg-background">
			<div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3 md:px-8">
				<Logo />
				<button
					type="button"
					onClick={() => setOpen(true)}
					className="hidden h-9 w-72 items-center gap-2 rounded-md border bg-muted/50 px-3 text-sm text-muted-foreground hover:bg-muted lg:flex"
				>
					<Search className="size-4" />
					Search docs and projects
					<Kbd className="ml-auto">⌘K</Kbd>
				</button>
				<nav className="ml-auto hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
					{links.map((link) => (
						<a key={link} href="#top" className="hover:text-foreground">
							{link}
						</a>
					))}
				</nav>
				<div className="hidden items-center gap-2 lg:flex">
					<Button variant="outline" size="sm">
						Log in
					</Button>
					<Button size="sm">{product.primary}</Button>
				</div>
				<div className="ml-auto flex lg:hidden">
					<Button variant="ghost" size="icon" aria-label="Search" onClick={() => setOpen(true)}>
						<Search />
					</Button>
					<MobileMenu links={links} className="-mr-2" />
				</div>
			</div>
			{/* [Agent] On phones the palette fills the screen (no margins, no corners), which is what "search opens full
			    screen" asks for; from sm up it is the usual centred dialog. */}
			<CommandDialog
				open={open}
				onOpenChange={setOpen}
				title="Search Keep"
				description="Search the docs and your projects"
				className="max-sm:top-0 max-sm:h-full max-sm:max-w-none max-sm:translate-y-0 max-sm:rounded-none max-sm:border-0"
			>
				<CommandInput placeholder="Search docs and projects" />
				<CommandList>
					<CommandEmpty>No results.</CommandEmpty>
					{Object.entries(results).map(([group, items]) => (
						<CommandGroup key={group} heading={group}>
							{items.map((item) => (
								<CommandItem key={item}>{item}</CommandItem>
							))}
						</CommandGroup>
					))}
				</CommandList>
			</CommandDialog>
		</header>
	)
}
