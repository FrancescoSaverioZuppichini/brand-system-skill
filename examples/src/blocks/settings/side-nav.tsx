import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { AppShell, me } from "@/demo/app-nav"
import { cn } from "@/lib/utils"

const menu = [
	{ group: "Account", items: ["Profile", "Notifications", "Security"] },
	{ group: "Workspace", items: ["General", "Members", "Billing", "Integrations"] },
]

const active = "Profile"

const preferences = [
	{ id: "clock", title: "Use 24-hour time", line: "Release times show as 17:20, not 5:20 pm.", on: true },
	{
		id: "monday",
		title: "Start the week on Monday",
		line: "Used by the schedule and the weekly digest.",
		on: true,
	},
]

// [Agent] On a phone the grouped menu becomes one Select with the same groups, so every settings page is still one
// tap away without a second screen.
export default function SettingsSideNav() {
	return (
		<AppShell active="Settings" crumbs={["Settings", active]}>
			<div className="flex flex-col gap-6 p-4 md:p-6">
				<h1 className="text-xl leading-tight">Settings</h1>
				<div className="grid gap-6 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10">
					<Select defaultValue={active}>
						<SelectTrigger className="w-full md:hidden">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{menu.map(({ group, items }) => (
								<SelectGroup key={group}>
									<SelectLabel>{group}</SelectLabel>
									{items.map((item) => (
										<SelectItem key={item} value={item}>
											{item}
										</SelectItem>
									))}
								</SelectGroup>
							))}
						</SelectContent>
					</Select>
					<nav className="hidden flex-col gap-5 text-sm md:flex">
						{menu.map(({ group, items }) => (
							<div key={group} className="flex flex-col gap-0.5">
								<span className="px-2 pb-1 text-xs font-medium text-muted-foreground">{group}</span>
								{items.map((item) => (
									<a
										key={item}
										href="#"
										className={cn(
											"rounded-md px-2 py-1.5",
											item === active
												? "bg-muted font-medium"
												: "text-muted-foreground hover:text-foreground",
										)}
									>
										{item}
									</a>
								))}
							</div>
						))}
					</nav>
					<div className="flex max-w-2xl flex-col gap-6">
						<Card className="gap-5 p-5">
							<div className="flex flex-col gap-1">
								<h2 className="text-base leading-tight">Profile</h2>
								<p className="text-sm text-muted-foreground">
									How your name shows on plans, releases and comments.
								</p>
							</div>
							<div className="flex items-center gap-4">
								<Avatar className="size-14">
									<AvatarFallback>{me.initials}</AvatarFallback>
								</Avatar>
								<Button variant="outline" size="sm">
									Change photo
								</Button>
								<Button variant="ghost" size="sm" className="text-muted-foreground">
									Remove
								</Button>
							</div>
							<FieldGroup className="gap-4">
								<div className="grid gap-4 sm:grid-cols-2">
									<Field>
										<FieldLabel htmlFor="profile-name">Name</FieldLabel>
										<Input id="profile-name" defaultValue={me.name} />
									</Field>
									<Field>
										<FieldLabel htmlFor="profile-role">Role</FieldLabel>
										<Input id="profile-role" defaultValue="Studio lead" />
									</Field>
								</div>
								<Field>
									<FieldLabel htmlFor="profile-email">Email</FieldLabel>
									<Input id="profile-email" defaultValue="ana@halden.studio" />
									<FieldDescription>Used to sign in and for care alerts.</FieldDescription>
								</Field>
							</FieldGroup>
							<Button className="self-end">Save profile</Button>
						</Card>
						<Card className="gap-5 p-5">
							<h2 className="text-base leading-tight">Preferences</h2>
							<FieldGroup className="gap-5">
								{preferences.map((preference) => (
									<Field key={preference.id} orientation="horizontal">
										<FieldContent>
											<FieldLabel htmlFor={preference.id}>{preference.title}</FieldLabel>
											<FieldDescription>{preference.line}</FieldDescription>
										</FieldContent>
										<Switch id={preference.id} defaultChecked={preference.on} />
									</Field>
								))}
							</FieldGroup>
						</Card>
					</div>
				</div>
			</div>
		</AppShell>
	)
}
