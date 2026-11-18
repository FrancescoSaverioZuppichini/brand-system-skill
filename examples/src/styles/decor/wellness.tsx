import { Grain } from "./grain"

// [Agent] Ported from the hand-made specimen: a sand arch with a terracotta sun holds the copy, a botanical line drawing
// and pebbles sit around it so the centre stays calm, and warm paper grain lies over everything.
export default function Wellness() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg viewBox="0 0 800 500" className="absolute inset-0 size-full">
				<g fill="none" stroke="var(--olive)" strokeWidth="1.4" strokeLinecap="round">
					<path d="M96 470 C 92 380 100 290 128 200 C 140 160 150 130 158 104" />
					<path d="M100 410 C 70 400 52 372 50 342 C 78 350 96 372 100 410 Z" />
					<path d="M104 352 C 132 336 146 306 142 276 C 118 290 104 318 104 352 Z" />
					<path d="M112 290 C 82 280 66 254 66 226 C 92 236 108 260 112 290 Z" />
					<path d="M126 222 C 150 206 160 180 156 154 C 136 168 126 192 126 222 Z" />
					<path d="M140 170 C 118 160 106 140 108 118 C 128 128 140 148 140 170 Z" />
					<path
						d="M100 410 L 76 372 M104 352 L 128 300 M112 290 L 84 248 M126 222 L 146 178 M140 170 L 120 136"
						strokeWidth="1"
					/>
				</g>
				<path d="M10 500 C 6 452 52 430 96 440 C 140 450 160 480 156 500 Z" fill="var(--sage)" />
				<ellipse cx="170" cy="488" rx="34" ry="22" fill="var(--terracotta)" opacity="0.85" />
				<path
					d="M680 120 C 690 80 740 66 770 92 C 796 116 784 160 748 166 C 712 172 672 156 680 120 Z"
					fill="var(--sage)"
					opacity="0.55"
				/>
				<circle cx="660" cy="200" r="12" fill="var(--olive)" opacity="0.5" />
				<g fill="none" stroke="var(--terracotta)" strokeWidth="1.4" strokeLinecap="round">
					<path d="M640 290 C 660 270 700 262 730 270" />
					<path d="M650 306 C 670 290 704 284 728 290" opacity="0.6" />
				</g>
			</svg>
			<div className="absolute top-[30px] left-[168px] h-[470px] w-[444px] rounded-t-[222px] bg-[var(--sand)]">
				<span className="absolute top-[52px] left-1/2 size-[76px] -translate-x-1/2 rounded-full bg-[var(--terracotta)] outline-1 outline-offset-[13px] outline-[oklch(0.62_0.12_45/.45)]" />
			</div>
			<Grain opacity={0.16} frequency={0.8} />
		</div>
	)
}
