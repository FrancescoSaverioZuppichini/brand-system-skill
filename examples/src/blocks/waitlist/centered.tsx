import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { people } from "@/demo/content"
import { Logo } from "@/demo/logo"

export default function WaitlistCentered() {
	return (
		<section className="mx-auto flex min-h-[720px] max-w-2xl flex-col items-center justify-center gap-6 px-4 py-16 text-center">
			<Logo />
			<h1 className="text-4xl leading-tight md:text-6xl">Keep, on your own servers</h1>
			<p className="max-w-lg text-lg text-muted-foreground">
				Self-hosted Keep arrives in spring 2027: one Docker image, your Postgres, the same app. Join the list and
				we'll invite teams in the order they signed up.
			</p>
			<form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
				<Input type="email" placeholder="you@company.com" aria-label="Work email" className="h-10" />
				<Button size="lg" type="submit">
					Join the waitlist
				</Button>
			</form>
			<div className="flex items-center gap-3 text-sm text-muted-foreground">
				<span className="flex -space-x-2">
					{people.slice(0, 4).map((person) => (
						<Avatar key={person.name} className="size-7 border-2 border-background">
							<AvatarFallback className="text-[10px]">{person.initials}</AvatarFallback>
						</Avatar>
					))}
				</span>
				2,140 teams are waiting
			</div>
		</section>
	)
}
