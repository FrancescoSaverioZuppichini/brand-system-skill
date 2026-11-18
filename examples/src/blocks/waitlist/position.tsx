import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const invited = 3

export default function WaitlistPosition() {
	return (
		<section className="flex min-h-[720px] items-center justify-center bg-muted px-4 py-16">
			<Card className="w-full max-w-md gap-6 p-6 text-center md:p-8">
				<div className="flex flex-col items-center gap-2">
					<span className="text-sm text-muted-foreground">You're on the list</span>
					<p className="font-heading text-6xl leading-none tabular-nums md:text-7xl">#418</p>
					<span className="text-muted-foreground">of 2,140 teams waiting for self-hosted Keep</span>
				</div>
				<p className="text-sm">
					Every team you invite that joins moves you up 25 places. Five joins skip the line entirely.
				</p>
				<div className="flex items-center gap-2 rounded-md bg-foreground py-1 pr-1 pl-3 text-background">
					<span className="flex-1 truncate text-left font-mono text-sm">keep.app/r/halden-7k2</span>
					<Button size="sm" variant="secondary">
						<Copy /> Copy
					</Button>
				</div>
				<div className="grid grid-cols-3 gap-2">
					{["Email", "LinkedIn", "Bluesky"].map((channel) => (
						<Button key={channel} variant="outline">
							{channel}
						</Button>
					))}
				</div>
				<div className="flex flex-col gap-2 text-left text-sm">
					<div className="flex justify-between">
						<span className="font-medium">{invited} of 5 joined</span>
						<span className="text-muted-foreground">2 more to skip the line</span>
					</div>
					<Progress value={(invited / 5) * 100} />
				</div>
			</Card>
		</section>
	)
}
