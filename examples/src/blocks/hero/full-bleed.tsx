import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { product } from "@/demo/content"
import { Logo } from "@/demo/logo"
import { Photo } from "@/demo/photo"

// [Agent] The scrim is fixed black, not a theme colour: white copy has to read on the photo in light and dark styles.
export default function HeroFullBleed() {
	return (
		<section className="relative flex min-h-[720px] flex-col text-white md:min-h-[820px]">
			<Photo scene="place" className="absolute inset-0" />
			<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/20" />
			<header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 md:px-8">
				<Logo />
				<nav className="hidden gap-8 text-sm md:flex">
					{product.links.slice(0, 4).map((link) => (
						<span key={link}>{link}</span>
					))}
				</nav>
				<Button
					size="sm"
					variant="outline"
					className="hidden border-white/60 bg-transparent text-white md:inline-flex"
				>
					Book a visit
				</Button>
				<Menu className="md:hidden" />
			</header>
			<div className="relative mx-auto mt-auto flex w-full max-w-6xl flex-col gap-5 px-4 pb-16 md:px-8 md:pb-24">
				<h1 className="max-w-3xl text-5xl leading-[1.02] md:text-7xl">{product.headline}</h1>
				<p className="max-w-xl text-lg text-white/85">{product.sub}</p>
				<div className="flex flex-col gap-3 sm:flex-row">
					<Button size="lg">{product.primary}</Button>
					<Button size="lg" variant="outline" className="border-white/60 bg-transparent text-white">
						{product.secondary}
					</Button>
				</div>
			</div>
		</section>
	)
}
