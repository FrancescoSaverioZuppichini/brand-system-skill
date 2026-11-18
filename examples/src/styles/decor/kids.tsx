import { Check, Heart, Lock, Star, Trophy } from "lucide-react"

// [Agent] A level map, Duolingo-style: a hearts-and-streak progress bar, lesson nodes as round buttons with a solid
// darker bottom edge (the "3D" depth, no blur), a progress ring around the current one, a locked node, confetti.
export default function Kids() {
	const node = "absolute grid h-[68px] w-[74px] place-items-center rounded-[50%] text-white"
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute top-10 left-[470px] flex w-[300px] items-center gap-3">
				<Heart className="size-7 fill-[var(--red)] text-[var(--red)]" />
				<div className="h-[18px] flex-1 rounded-full bg-[var(--cloud)]">
					<div className="relative h-full w-[64%] rounded-full bg-[var(--green)] shadow-[inset_0_-5px_0_oklch(0.68_0.19_135)]">
						<span className="absolute inset-x-2.5 top-1 h-1 rounded-sm bg-white/45" />
					</div>
				</div>
				<svg viewBox="0 0 24 28" className="w-[26px]">
					<path
						d="M12 1c1 6 9 8 9 16a9 9 0 0 1-18 0c0-4 2-6 4-8 0 3 1 5 3 5-1-5 1-10 2-13Z"
						fill="oklch(0.74 0.18 55)"
					/>
					<path d="M12 14c2 2 4 4 4 7a4 4 0 0 1-8 0c0-3 2-5 4-7Z" fill="var(--yellow)" />
				</svg>
			</div>
			<div className="absolute top-[94px] left-[521px] size-[98px] rounded-full border-8 border-[var(--cloud)] border-t-[var(--green)] border-r-[var(--green)] -rotate-[20deg]" />
			<div
				className={`top-[107px] left-[533px] bg-[var(--green)] shadow-[0_7px_0_var(--green-edge)] ${node}`}
			>
				<Star className="size-8 fill-white" />
			</div>
			<div className={`top-[146px] left-[650px] bg-[var(--blue)] shadow-[0_7px_0_var(--blue-edge)] ${node}`}>
				<Check className="size-8" strokeWidth={4} />
			</div>
			<div
				className={`top-[226px] left-[690px] bg-[var(--yellow)] shadow-[0_7px_0_var(--yellow-edge)] ${node}`}
			>
				<Trophy className="size-8" strokeWidth={2.5} />
			</div>
			<div
				className={`top-[286px] left-[466px] bg-[var(--cloud)] shadow-[0_7px_0_var(--cloud-edge)] ${node}`}
			>
				<Lock className="size-7 text-[oklch(0.75_0.01_260)]" strokeWidth={3} />
			</div>
			<svg viewBox="0 0 800 500" className="absolute inset-0 size-full">
				<circle cx="452" cy="230" r="7" fill="var(--blue)" />
				<rect
					x="740"
					y="120"
					width="14"
					height="14"
					rx="3"
					fill="var(--red)"
					transform="rotate(20 747 127)"
				/>
				<path d="M440 420 l6 -14 l6 14 l14 6 l-14 6 l-6 14 l-6 -14 l-14 -6 Z" fill="var(--yellow)" />
				<circle cx="600" cy="470" r="6" fill="var(--green)" />
				<path
					d="M740 470 q10 -16 20 0 q10 16 20 0"
					fill="none"
					stroke="var(--blue)"
					strokeWidth="5"
					strokeLinecap="round"
				/>
			</svg>
		</div>
	)
}
