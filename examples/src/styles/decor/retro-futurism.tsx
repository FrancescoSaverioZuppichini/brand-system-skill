import { Grain } from "./grain"

// [Agent] Ported from the hand-made specimen: four 70s racing stripes that run along the bottom and turn up the right
// with nested radii, a rounded CRT showing an orbit diagram on a grid, and print grain over all of it.
export default function RetroFuturism() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg viewBox="0 0 800 500" fill="none" strokeWidth="12" className="absolute inset-0 size-full">
				<path d="M0 474 H500 A64 64 0 0 0 564 410 V0" stroke="var(--brown)" />
				<path d="M0 458 H500 A48 48 0 0 0 548 410 V0" stroke="var(--orange)" />
				<path d="M0 442 H500 A32 32 0 0 0 532 410 V0" stroke="var(--marigold)" />
				<path d="M0 426 H500 A16 16 0 0 0 516 410 V0" stroke="var(--avocado)" />
			</svg>
			<div className="absolute top-[58px] left-[578px] h-[176px] w-[196px] rounded-[28px] bg-[var(--navy)] p-3.5 shadow-[inset_0_-6px_0_oklch(0.20_0.05_260)]">
				<svg
					viewBox="0 0 168 148"
					className="block size-full rounded-[22px/26px] [background:radial-gradient(circle_at_50%_45%,oklch(0.28_0.06_255),var(--screen))]"
				>
					<path
						d="M0 37H168M0 74H168M0 111H168M42 0V148M84 0V148M126 0V148"
						stroke="oklch(0.66 0.18 45 / .25)"
					/>
					<g fill="none" stroke="var(--orange)" strokeWidth="1.6">
						<ellipse cx="84" cy="74" rx="70" ry="26" transform="rotate(-18 84 74)" />
						<ellipse cx="84" cy="74" rx="46" ry="16" transform="rotate(-18 84 74)" strokeDasharray="3 4" />
						<path d="M84 60 V40 M84 40 l-4 6 M84 40 l4 6" strokeWidth="1.2" />
					</g>
					<circle cx="84" cy="74" r="13" fill="var(--orange)" />
					<circle cx="148" cy="54" r="4.5" fill="var(--cream)" />
					<circle cx="44" cy="91" r="3" fill="var(--marigold)" />
				</svg>
			</div>
			<Grain opacity={0.14} />
		</div>
	)
}
