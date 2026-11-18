import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Pick } from "@/demo/app-nav"
import { Logo } from "@/demo/logo"
import { Stepper } from "@/demo/stepper"

const countries = ["Germany", "Austria", "Switzerland", "Netherlands", "Portugal", "Sweden"]

export default function RegisterSteps() {
	return (
		<section className="mx-auto flex min-h-[720px] w-full max-w-md flex-col justify-center gap-8 px-4 py-16">
			<div className="flex flex-col items-center gap-8">
				<Logo />
				<Stepper steps={["Account", "Business", "Plan"]} current={1} className="w-full max-w-xs" />
			</div>
			<div className="flex flex-col gap-2 text-center">
				<h1 className="text-2xl">Your business details</h1>
				<p className="text-sm text-muted-foreground">
					They go on your invoices. You can change them later in Billing.
				</p>
			</div>
			<form className="flex flex-col gap-4">
				<Field>
					<FieldLabel htmlFor="register-steps-company">Company name</FieldLabel>
					<Input id="register-steps-company" autoComplete="organization" defaultValue="Halden Studio GmbH" />
				</Field>
				<Field>
					<FieldLabel>Country</FieldLabel>
					<Pick value="Germany" options={countries} />
				</Field>
				<Field>
					<FieldLabel htmlFor="register-steps-vat">VAT ID (optional)</FieldLabel>
					<Input id="register-steps-vat" placeholder="DE123456789" />
					<FieldDescription>Needed for reverse-charge invoices inside the EU.</FieldDescription>
				</Field>
				<div className="mt-2 grid gap-3 sm:grid-cols-2">
					<Button type="button" variant="outline" size="lg">
						Back
					</Button>
					<Button type="submit" size="lg">
						Continue to plan
					</Button>
				</div>
			</form>
		</section>
	)
}
