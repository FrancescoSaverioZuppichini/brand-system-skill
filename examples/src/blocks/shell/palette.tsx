import { CornerDownLeft, FileText, FolderKanban, LifeBuoy, Plus, Rocket, UserPlus } from "lucide-react"
import {
	CommandDialog,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"
import ShellSidebar from "@/blocks/shell/sidebar"

const recent = [
	{ label: "Billing rewrite", hint: "Project", icon: FolderKanban },
	{ label: "Billing rewrite 1.4", hint: "Release · in review", icon: Rocket },
	{ label: "Customer portal care plan", hint: "Care", icon: LifeBuoy },
]

const pages = [
	{ label: "Projects", icon: FolderKanban, keys: "G P" },
	{ label: "Releases", icon: Rocket, keys: "G R" },
	{ label: "Care", icon: LifeBuoy, keys: "G C" },
]

const actions = [
	{ label: "New project", icon: Plus, keys: "N P" },
	{ label: "New release", icon: Rocket, keys: "N R" },
	{ label: "Invite member", icon: UserPlus, keys: "I" },
	{ label: "Write a plan from a template", icon: FileText, keys: "" },
]

// [Agent] The palette opens over the real sidebar screen: Radix portals the dialog to <body>, and the shell is the
// shooter's 900 px viewport, so the dimmed overlay covers exactly the shot. Below sm it fills the screen.
export default function ShellPalette() {
	return (
		<>
			<ShellSidebar />
			<CommandDialog
				open
				showCloseButton={false}
				className="max-sm:top-0 max-sm:left-0 max-sm:h-full max-sm:max-w-full max-sm:translate-x-0 max-sm:translate-y-0 max-sm:rounded-none max-sm:border-0 sm:top-24 sm:max-w-xl sm:translate-y-0"
			>
				<CommandInput placeholder="Search projects, releases, people…" />
				<CommandList className="max-h-none sm:max-h-[420px]">
					<CommandGroup heading="Recent">
						{recent.map(({ label, hint, icon: Icon }) => (
							<CommandItem key={label}>
								<Icon />
								{label}
								<span className="text-xs text-muted-foreground">{hint}</span>
								<CornerDownLeft className="ml-auto hidden in-data-[selected=true]:block" />
							</CommandItem>
						))}
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Go to">
						{pages.map(({ label, icon: Icon, keys }) => (
							<CommandItem key={label}>
								<Icon />
								{label}
								<CommandShortcut>{keys}</CommandShortcut>
							</CommandItem>
						))}
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Actions">
						{actions.map(({ label, icon: Icon, keys }) => (
							<CommandItem key={label}>
								<Icon />
								{label}
								{keys && <CommandShortcut>{keys}</CommandShortcut>}
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
				<div className="flex items-center gap-4 border-t px-3 py-2 text-xs text-muted-foreground max-sm:mt-auto">
					<span className="flex items-center gap-1.5">
						<Kbd>↑</Kbd>
						<Kbd>↓</Kbd> move
					</span>
					<span className="flex items-center gap-1.5">
						<Kbd>↵</Kbd> open
					</span>
					<span className="ml-auto flex items-center gap-1.5">
						<Kbd>esc</Kbd> close
					</span>
				</div>
			</CommandDialog>
		</>
	)
}
