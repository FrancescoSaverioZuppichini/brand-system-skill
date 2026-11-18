import { CheckCircle2, CircleAlert } from "lucide-react"
import { type FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Frame } from "@/demo/frame"

const checks = [
	{ label: "Last release", value: "12 days ago", ok: true },
	{ label: "Tests on main", value: "Passing", ok: true },
	{ label: "Dependencies", value: "3 major versions behind", ok: false },
	{ label: "Open issues", value: "14, oldest from February", ok: false },
	{ label: "Owner", value: "Nobody named in the repo", ok: false },
]

export default function ShowcaseLiveDemo() {
	const [repo, setRepo] = useState("github.com/halden/client-portal")
	const [checked, setChecked] = useState(repo)
	const name = checked.replace(/^https?:\/\//, "").replace(/^github\.com\//, "")

	function check(event: FormEvent) {
		event.preventDefault()
		setChecked(repo)
	}

	return (
		<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
				<span className="text-sm font-medium text-muted-foreground">Try it</span>
				<h2 className="text-3xl leading-tight md:text-5xl">Is your project being looked after?</h2>
				<p className="text-lg text-muted-foreground">
					Paste a public repository. Keep runs the health check it runs every month for projects in care.
				</p>
			</div>
			<div className="mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-xl bg-muted p-4 md:p-6">
				<form onSubmit={check} className="flex flex-col gap-3 sm:flex-row">
					<Input
						value={repo}
						onChange={(event) => setRepo(event.target.value)}
						aria-label="Repository URL"
						className="h-10 bg-background font-mono"
					/>
					<Button size="lg" type="submit">
						Run the health check
					</Button>
				</form>
				<Frame url={`keep.app/check/${name}`} className="shadow-lg">
					<div className="grid gap-6 p-5 md:grid-cols-[15rem_1fr] md:p-6">
						<div className="flex flex-col gap-2">
							<span className="truncate font-mono text-xs text-muted-foreground">{name}</span>
							<span className="font-heading text-4xl leading-none tabular-nums">2 of 5</span>
							<span className="text-sm">checks healthy</span>
							<span className="mt-2 text-xs text-muted-foreground">
								Checked just now in 4.2 s. Suggested first review: 18 Feb 2027.
							</span>
						</div>
						<ul className="flex flex-col divide-y rounded-md border text-sm">
							{checks.map((item) => (
								<li key={item.label} className="flex flex-wrap items-center gap-x-3 gap-y-0.5 px-4 py-2.5">
									{item.ok ? (
										<CheckCircle2 className="size-4 shrink-0 text-chart-2" />
									) : (
										<CircleAlert className="size-4 shrink-0 text-chart-1" />
									)}
									<span className="font-medium">{item.label}</span>
									<span className="basis-full pl-7 text-muted-foreground sm:ml-auto sm:basis-auto sm:pl-0">
										{item.value}
									</span>
								</li>
							))}
						</ul>
					</div>
				</Frame>
			</div>
			<p className="text-center text-sm text-muted-foreground">
				Works without signing up · public repositories only
			</p>
		</section>
	)
}
