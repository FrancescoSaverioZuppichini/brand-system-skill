import { Button } from "@/components/ui/button"
import { Logo } from "@/demo/logo"

export default function NavMinimal() {
	return (
		<header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-8">
			<Logo />
			<Button size="sm">Sign up</Button>
		</header>
	)
}
