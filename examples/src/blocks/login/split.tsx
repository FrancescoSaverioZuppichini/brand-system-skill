import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { quote } from "@/demo/content"
import { Logo } from "@/demo/logo"
import { Photo } from "@/demo/photo"

export default function LoginSplit() {
	return (
		<section className="grid min-h-[720px] lg:grid-cols-2">
			<div className="flex flex-col gap-12 px-4 py-8 md:px-12">
				<Logo />
				<div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-6">
					<div className="flex flex-col gap-2">
						<h1 className="text-3xl">Welcome back</h1>
						<p className="text-muted-foreground">Log in to see what your team shipped this week.</p>
					</div>
					<form className="flex flex-col gap-4">
						<Field>
							<FieldLabel htmlFor="login-split-email">Email</FieldLabel>
							<Input
								id="login-split-email"
								type="email"
								autoComplete="email"
								placeholder="ana@halden.studio"
							/>
						</Field>
						<Field>
							<div className="flex items-center justify-between">
								<FieldLabel htmlFor="login-split-password">Password</FieldLabel>
								<a href="#reset" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
									Forgot it?
								</a>
							</div>
							<Input id="login-split-password" type="password" autoComplete="current-password" />
						</Field>
						<Button type="submit" size="lg">
							Log in
						</Button>
					</form>
					<p className="text-sm text-muted-foreground">
						New to Keep?{" "}
						<a href="#signup" className="text-foreground underline underline-offset-4">
							Create an account
						</a>
					</p>
				</div>
			</div>
			<div className="relative hidden lg:block">
				<Photo scene="place" className="absolute inset-0" />
				{/* [Agent] A scrim from the foreground colour under the quote keeps it readable on any photo, light or dark style. */}
				<div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 bg-linear-to-t from-foreground/85 to-transparent p-10 pt-32 text-background">
					<p className="text-2xl leading-snug">“{quote.text}”</p>
					<span className="text-sm opacity-80">
						{quote.name} · {quote.role}
					</span>
				</div>
			</div>
		</section>
	)
}
