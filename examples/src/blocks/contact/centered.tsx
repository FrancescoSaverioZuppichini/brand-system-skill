import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactCentered() {
	return (
		<section className="mx-auto flex max-w-xl flex-col gap-8 px-4 py-16 md:py-24">
			<div className="flex flex-col gap-3 text-center">
				<h2 className="text-3xl leading-tight md:text-4xl">Talk to the people who build Keep</h2>
				<p className="text-muted-foreground">
					Questions about plans, care schedules or moving your projects over. A person reads every message.
				</p>
			</div>
			<form className="flex flex-col gap-5">
				<div className="grid gap-2">
					<Label htmlFor="contact-name">Name</Label>
					<Input id="contact-name" placeholder="Ana Ruiz" />
				</div>
				<div className="grid gap-2">
					<Label htmlFor="contact-email">Email</Label>
					<Input id="contact-email" type="email" placeholder="ana@halden.studio" />
				</div>
				<div className="grid gap-2">
					<Label htmlFor="contact-message">Message</Label>
					<Textarea
						id="contact-message"
						rows={5}
						placeholder="We have nine client sites and want to give each an owner…"
					/>
				</div>
				<Button size="lg">Send message</Button>
				<p className="text-center text-sm text-muted-foreground">
					We reply within one working day, from Lisbon.
				</p>
			</form>
		</section>
	)
}
