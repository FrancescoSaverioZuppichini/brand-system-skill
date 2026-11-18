import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { product } from "@/demo/content"
import { Logo } from "@/demo/logo"

// [Agent] The ≡ of the marketing navs on phones: the menu opens full screen with the links as tap rows and both actions
// pinned to the bottom, where the thumb is. The caller hides it at its own breakpoint (md or lg) via className.
export function MobileMenu({ links = product.links, className }: { links?: string[]; className?: string }) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" aria-label="Open menu" className={className}>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side="right" aria-describedby={undefined} className="w-full gap-0 p-4 sm:max-w-none">
				<SheetTitle className="py-1.5">
					<Logo />
				</SheetTitle>
				<nav className="mt-6 flex flex-col divide-y border-y text-lg">
					{links.map((link) => (
						<a key={link} href="#top" className="py-3">
							{link}
						</a>
					))}
				</nav>
				<div className="mt-auto flex flex-col gap-3">
					<Button size="lg" variant="outline">
						Log in
					</Button>
					<Button size="lg">{product.primary}</Button>
				</div>
			</SheetContent>
		</Sheet>
	)
}
