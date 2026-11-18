import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/demo/logo"
import { GoogleIcon } from "@/demo/providers"

export default function LoginCard() {
	return (
		<section className="flex min-h-[720px] items-center justify-center px-4 py-16 sm:bg-muted">
			{/* [Agent] The card frame only exists from sm up: on a phone the fields sit straight on the page at full width. */}
			<Card className="w-full max-w-sm gap-6 border-0 bg-transparent px-0 py-0 shadow-none sm:border sm:bg-card sm:px-8 sm:py-8 sm:shadow-sm">
				<div className="flex flex-col items-center gap-3 text-center">
					<Logo />
					<h1 className="text-2xl">Log in to Keep</h1>
				</div>
				<form className="flex flex-col gap-4">
					<Field>
						<FieldLabel htmlFor="login-card-email">Email</FieldLabel>
						<Input id="login-card-email" type="email" autoComplete="email" placeholder="ana@halden.studio" />
					</Field>
					<Field>
						<div className="flex items-center justify-between">
							<FieldLabel htmlFor="login-card-password">Password</FieldLabel>
							<a href="#reset" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
								Forgot it?
							</a>
						</div>
						<Input id="login-card-password" type="password" autoComplete="current-password" />
					</Field>
					<Button type="submit" size="lg">
						Log in
					</Button>
				</form>
				<div className="flex items-center gap-3 text-xs text-muted-foreground">
					<Separator className="flex-1" /> or <Separator className="flex-1" />
				</div>
				<Button variant="outline" size="lg">
					<GoogleIcon /> Continue with Google
				</Button>
				<p className="text-center text-sm text-muted-foreground">
					New to Keep?{" "}
					<a href="#signup" className="text-foreground underline underline-offset-4">
						Create an account
					</a>
				</p>
			</Card>
		</section>
	)
}
