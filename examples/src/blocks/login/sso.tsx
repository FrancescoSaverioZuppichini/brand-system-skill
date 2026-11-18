import { KeyRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/demo/logo"
import { GoogleIcon, MicrosoftIcon } from "@/demo/providers"

const providers = [
	{ name: "Google", icon: GoogleIcon },
	{ name: "Microsoft", icon: MicrosoftIcon },
	{ name: "SAML SSO", icon: KeyRound },
]

export default function LoginSso() {
	return (
		<section className="mx-auto flex min-h-[720px] w-full max-w-sm flex-col justify-center gap-6 px-4 py-16">
			<div className="flex flex-col items-center gap-3 text-center">
				<Logo />
				<h1 className="text-2xl">Log in to Keep</h1>
				<p className="text-sm text-muted-foreground">Use your work account. Your admin may require SSO.</p>
			</div>
			<div className="flex flex-col gap-3">
				{providers.map(({ name, icon: Icon }) => (
					<Button key={name} variant="outline" size="lg">
						<Icon /> Continue with {name}
					</Button>
				))}
			</div>
			<div className="flex items-center gap-3 text-xs text-muted-foreground">
				<Separator className="flex-1" /> or <Separator className="flex-1" />
			</div>
			<form className="flex flex-col gap-3">
				<Field>
					<FieldLabel htmlFor="login-sso-email">Work email</FieldLabel>
					<Input id="login-sso-email" type="email" autoComplete="email" placeholder="ana@halden.studio" />
				</Field>
				<Button type="submit" size="lg">
					Email me a link
				</Button>
			</form>
			<p className="text-center text-xs text-muted-foreground">
				By continuing you agree to the{" "}
				<a href="#terms" className="underline underline-offset-4">
					Terms
				</a>{" "}
				and{" "}
				<a href="#privacy" className="underline underline-offset-4">
					Privacy policy
				</a>
				.
			</p>
		</section>
	)
}
