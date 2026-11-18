import { Phone } from "@/demo/device"
import { ReleaseChecklist } from "@/demo/phone-screens"
import { AppWindow } from "@/demo/screen"

// [Agent] The phone shows the release checklist, a job people do away from the desk, never the desktop squeezed. On
// phones the desktop drops out and only the phone stays, centred.
export default function ShowcaseDevices() {
	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<h2 className="text-3xl leading-tight md:text-5xl">At your desk and on the train</h2>
				<p className="text-lg text-muted-foreground">
					Plan on the desktop. Sign off a release from your phone, with the same checklist.
				</p>
			</div>
			<div className="relative mx-auto w-full max-w-5xl md:pb-12">
				<AppWindow className="hidden md:mr-28 md:block" />
				<Phone className="mx-auto w-64 md:absolute md:right-0 md:bottom-0 md:w-56">
					<ReleaseChecklist />
				</Phone>
			</div>
		</section>
	)
}
