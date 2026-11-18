import { Check } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { plans, product, quote } from "@/demo/content"
import { CustomerLogo, Logo } from "@/demo/logo"

const team = plans[1]

const checks = [
	"Import from Tasklist, Linear or a CSV in one step",
	"Cancel anytime and export everything as Markdown",
	"Your data stays in the EU, in Frankfurt",
]

export default function RegisterSplitProof() {
	return (
		<section className="grid min-h-[720px] lg:grid-cols-2">
			<div className="flex flex-col gap-12 px-4 py-8 md:px-12">
				<Logo />
				<div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-6">
					<div className="flex flex-col gap-2">
						<h1 className="text-3xl">Try {team.name} free for 14 days</h1>
						<p className="text-muted-foreground">
							Then ${team.price} {team.unit}. No card until you decide to stay.
						</p>
					</div>
					<form className="flex flex-col gap-4">
						<Field>
							<FieldLabel htmlFor="register-split-name">Name</FieldLabel>
							<Input id="register-split-name" autoComplete="name" placeholder="Ana Ruiz" />
						</Field>
						<Field>
							<FieldLabel htmlFor="register-split-email">Work email</FieldLabel>
							<Input
								id="register-split-email"
								type="email"
								autoComplete="email"
								placeholder="ana@halden.studio"
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor="register-split-password">Password</FieldLabel>
							<Input id="register-split-password" type="password" autoComplete="new-password" />
						</Field>
						<Button type="submit" size="lg">
							Start free trial
						</Button>
					</form>
					<p className="text-sm text-muted-foreground lg:hidden">{product.proof}</p>
					<p className="text-sm text-muted-foreground">
						Already have an account?{" "}
						<a href="#login" className="text-foreground underline underline-offset-4">
							Log in
						</a>
					</p>
				</div>
			</div>
			<div className="hidden flex-col justify-center gap-8 bg-muted px-12 py-16 lg:flex">
				<Card className="gap-5 p-6">
					<p className="text-lg leading-snug">“{quote.text}”</p>
					<div className="flex items-center gap-3 text-sm">
						<Avatar>
							<AvatarFallback>{quote.initials}</AvatarFallback>
						</Avatar>
						<span className="flex flex-col">
							<span className="font-medium">{quote.name}</span>
							<span className="text-muted-foreground">{quote.role}</span>
						</span>
					</div>
				</Card>
				<ul className="flex flex-col gap-3">
					{checks.map((check) => (
						<li key={check} className="flex gap-3">
							<Check className="mt-1 size-4 shrink-0 text-primary" /> {check}
						</li>
					))}
				</ul>
				<div className="flex flex-col gap-3">
					<span className="text-sm text-muted-foreground">{product.proof}</span>
					<div className="flex flex-wrap gap-x-8 gap-y-3">
						{[0, 1, 2, 3].map((index) => (
							<CustomerLogo key={index} index={index} className="text-base" />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
