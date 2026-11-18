import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { plans } from "@/demo/content"
import { Logo } from "@/demo/logo"

const starter = plans[0]

export default function RegisterCard() {
	return (
		<section className="flex min-h-[720px] items-center justify-center px-4 py-16 sm:bg-muted">
			<Card className="w-full max-w-sm gap-6 border-0 bg-transparent px-0 py-0 shadow-none sm:border sm:bg-card sm:px-8 sm:py-8 sm:shadow-sm">
				<div className="flex flex-col items-center gap-3 text-center">
					<Logo />
					<h1 className="text-2xl">Create your Keep account</h1>
					<p className="text-sm text-muted-foreground">
						{starter.name} is free for {starter.features[0]} and {starter.features[1]}. No card needed.
					</p>
				</div>
				<form className="flex flex-col gap-4">
					<Field>
						<FieldLabel htmlFor="register-card-name">Name</FieldLabel>
						<Input id="register-card-name" autoComplete="name" placeholder="Ana Ruiz" />
					</Field>
					<Field>
						<FieldLabel htmlFor="register-card-email">Work email</FieldLabel>
						<Input
							id="register-card-email"
							type="email"
							autoComplete="email"
							placeholder="ana@halden.studio"
						/>
					</Field>
					<Field>
						<FieldLabel htmlFor="register-card-password">Password</FieldLabel>
						<Input id="register-card-password" type="password" autoComplete="new-password" />
						<FieldDescription>At least 12 characters.</FieldDescription>
					</Field>
					<Field orientation="horizontal">
						<Checkbox id="register-card-terms" />
						<FieldLabel htmlFor="register-card-terms" className="font-normal">
							I agree to the Terms and the Privacy policy
						</FieldLabel>
					</Field>
					<Button type="submit" size="lg">
						Create account
					</Button>
				</form>
				<p className="text-center text-sm text-muted-foreground">
					Already have an account?{" "}
					<a href="#login" className="text-foreground underline underline-offset-4">
						Log in
					</a>
				</p>
			</Card>
		</section>
	)
}
