import {
	ChevronsUpDown,
	CreditCard,
	FolderKanban,
	Inbox,
	LayoutDashboard,
	LifeBuoy,
	LogOut,
	Menu,
	MoreHorizontal,
	Rocket,
	Search,
	Settings,
	UserRound,
	Users,
} from "lucide-react"
import { Fragment, type ReactNode } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { people } from "@/demo/content"
import { Logo } from "@/demo/logo"
import { workspace } from "@/demo/workspace"
import { cn } from "@/lib/utils"

export const areas = [
	{ label: "Overview", icon: LayoutDashboard },
	{ label: "Inbox", icon: Inbox },
	{ label: "Projects", icon: FolderKanban },
	{ label: "Releases", icon: Rocket },
	{ label: "Care", icon: LifeBuoy },
]

export const admin = [
	{ label: "Members", icon: Users },
	{ label: "Billing", icon: CreditCard },
	{ label: "Settings", icon: Settings },
]

export const me = people[0]

function NavLink({ label, icon: Icon, active }: (typeof areas)[number] & { active: boolean }) {
	return (
		<a
			href="#"
			aria-current={active ? "page" : undefined}
			className={cn(
				"flex items-center gap-2 rounded-md px-2 py-1.5",
				active
					? "bg-background font-medium text-foreground shadow-xs"
					: "text-muted-foreground hover:bg-background/60 hover:text-foreground",
			)}
		>
			<Icon className="size-4" />
			{label}
		</a>
	)
}

function AccountMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex w-full items-center gap-2 rounded-md border bg-background p-2 text-left">
				<Avatar className="size-7">
					<AvatarFallback className="text-[10px]">{me.initials}</AvatarFallback>
				</Avatar>
				<span className="flex min-w-0 flex-1 flex-col text-xs">
					<span className="truncate font-medium">{me.name}</span>
					<span className="truncate text-muted-foreground">
						{workspace.name} · {workspace.plan} plan
					</span>
				</span>
				<ChevronsUpDown className="size-3.5 text-muted-foreground" />
			</DropdownMenuTrigger>
			<DropdownMenuContent side="top" align="start" className="w-52">
				<DropdownMenuItem>
					<UserRound /> Profile
				</DropdownMenuItem>
				<DropdownMenuItem>
					<CreditCard /> Billing
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogOut /> Sign out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export function Sidebar({ active }: { active: string }) {
	return (
		<div className="flex h-full flex-col gap-5 p-3 text-sm">
			<Logo className="px-2 pt-1 text-base" />
			<nav className="flex flex-col gap-0.5">
				{areas.map((area) => (
					<NavLink key={area.label} {...area} active={area.label === active} />
				))}
			</nav>
			<nav className="flex flex-col gap-0.5">
				<span className="px-2 pb-1 text-xs font-medium text-muted-foreground">Workspace</span>
				{admin.map((area) => (
					<NavLink key={area.label} {...area} active={area.label === active} />
				))}
			</nav>
			<div className="mt-auto">
				<AccountMenu />
			</div>
		</div>
	)
}

// [Agent] Keep's signed-in app around a screen, shared by every app block so only the page inside changes. It is a
// fixed 900 px frame (the shooter's viewport) whose main area scrolls, so a portalled dialog lines up with the shot.
// Below md the sidebar moves into a real Sheet behind ≡ and the top bar keeps the page title and the account.
export function AppShell({
	active,
	crumbs,
	action,
	className,
	children,
}: {
	active: string
	crumbs: string[]
	action?: ReactNode
	className?: string
	children: ReactNode
}) {
	return (
		<div className={cn("flex h-[900px] overflow-hidden bg-background text-foreground", className)}>
			<aside className="hidden w-56 shrink-0 border-r bg-muted/50 md:block">
				<Sidebar active={active} />
			</aside>
			<div className="flex min-w-0 flex-1 flex-col">
				<header className="flex h-14 shrink-0 items-center gap-3 border-b px-4 md:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon-sm" className="-ml-1.5 md:hidden" aria-label="Menu">
								<Menu />
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="w-64 bg-muted p-0" showCloseButton={false}>
							<SheetTitle className="sr-only">Menu</SheetTitle>
							<Sidebar active={active} />
						</SheetContent>
					</Sheet>
					<Breadcrumb className="hidden min-w-0 md:block">
						<BreadcrumbList>
							{crumbs.map((crumb, index) => (
								<Fragment key={crumb}>
									{index > 0 && <BreadcrumbSeparator />}
									<BreadcrumbItem>
										{index < crumbs.length - 1 ? (
											<BreadcrumbLink href="#">{crumb}</BreadcrumbLink>
										) : (
											<BreadcrumbPage>{crumb}</BreadcrumbPage>
										)}
									</BreadcrumbItem>
								</Fragment>
							))}
						</BreadcrumbList>
					</Breadcrumb>
					<span className="min-w-0 truncate text-sm font-medium md:hidden">{crumbs.at(-1)}</span>
					<div className="ml-auto flex items-center gap-2">
						<InputGroup className="hidden w-60 lg:flex">
							<InputGroupAddon>
								<Search />
							</InputGroupAddon>
							<InputGroupInput placeholder="Search" />
							<InputGroupAddon align="inline-end">
								<Kbd>⌘K</Kbd>
							</InputGroupAddon>
						</InputGroup>
						<Button
							variant="ghost"
							size="icon-sm"
							className="hidden md:inline-flex lg:hidden"
							aria-label="Search"
						>
							<Search />
						</Button>
						{action}
						<Avatar className="size-7 md:hidden">
							<AvatarFallback className="text-[10px]">{me.initials}</AvatarFallback>
						</Avatar>
					</div>
				</header>
				<main className="relative min-h-0 flex-1 overflow-y-auto">{children}</main>
			</div>
		</div>
	)
}

// [Agent] The ⋯ menu that holds a row's repeated actions, so tables and lists never grow a row of buttons.
export function RowMenu({ items, className }: { items: string[]; className?: string }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon-sm"
					className={cn("text-muted-foreground", className)}
					aria-label="Actions"
				>
					<MoreHorizontal />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{items.map((item) => (
					<DropdownMenuItem key={item}>{item}</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
