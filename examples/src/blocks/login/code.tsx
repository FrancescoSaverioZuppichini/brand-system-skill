import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Logo } from "@/demo/logo"

export default function LoginCode() {
	const [code, setCode] = useState("481")
	return (
		<section className="flex min-h-[720px] items-center justify-center px-4 py-16 sm:bg-muted">
			<Card className="w-full max-w-sm gap-6 border-0 bg-transparent px-0 py-0 text-center shadow-none sm:border sm:bg-card sm:px-8 sm:py-8 sm:shadow-sm">
				<div className="flex flex-col items-center gap-3">
					<Logo />
					<h1 className="text-2xl">Check your email</h1>
					<p className="text-sm text-muted-foreground">
						We sent a 6-digit code to <span className="font-medium text-foreground">ana@halden.studio</span>.
						It works for 10 minutes.
					</p>
				</div>
				<form className="flex flex-col gap-4">
					{/* [Agent] one-time-code lets iOS and Android offer the code from the SMS or mail bar; autoFocus shows the
					    active box straight away, and the slots stretch so six boxes fill a phone's width. */}
					<InputOTP
						maxLength={6}
						value={code}
						onChange={setCode}
						autoFocus
						autoComplete="one-time-code"
						aria-label="Login code"
						containerClassName="w-full"
					>
						<InputOTPGroup className="w-full gap-2">
							{[0, 1, 2, 3, 4, 5].map((index) => (
								<InputOTPSlot key={index} index={index} className="h-12 flex-1 rounded-md border text-lg" />
							))}
						</InputOTPGroup>
					</InputOTP>
					<Button type="submit" size="lg">
						Verify and log in
					</Button>
				</form>
				<p className="text-sm text-muted-foreground">
					Didn't get it? <span className="opacity-60">Resend in 0:24</span> ·{" "}
					<a href="#email" className="text-foreground underline underline-offset-4">
						Use another email
					</a>
				</p>
			</Card>
		</section>
	)
}
