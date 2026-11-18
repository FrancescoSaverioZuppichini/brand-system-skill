const bevel =
	"shadow-[inset_-1px_-1px_var(--soot),inset_1px_1px_white,inset_-2px_-2px_oklch(0.55_0_0),inset_2px_2px_oklch(0.9_0_0)]"
const sunken =
	"shadow-[inset_1px_1px_oklch(0.55_0_0),inset_-1px_-1px_white,inset_2px_2px_var(--soot),inset_-2px_-2px_oklch(0.9_0_0)]"

// [Agent] One Windows 95 window: silver frame with the two-pixel bevel, a purple-to-pink title bar with its buttons, and
// a sunken pastel body. The copy and the number card sit on top of these frames.
function Window({ className, buttons }: { className: string; buttons: number }) {
	return (
		<div className={`absolute flex flex-col gap-[3px] bg-[var(--silver)] p-[3px] ${bevel} ${className}`}>
			<div className="flex h-[22px] items-center justify-end gap-1 pr-[3px] [background:linear-gradient(90deg,var(--purple),var(--pink))]">
				{Array.from({ length: buttons }, (_, index) => (
					<b key={index} className={`h-3.5 w-4 bg-[var(--silver)] ${bevel}`} />
				))}
			</div>
			<div
				className={`flex-1 [background:linear-gradient(oklch(0.96_0.03_330),oklch(0.93_0.04_280))] ${sunken}`}
			/>
		</div>
	)
}

// [Agent] Ported from the hand-made specimen: a sunset sky, a pink sun, a checkerboard floor tipped back to the horizon,
// a marble Ionic column, a teal palm, full-width katakana down the edge, two Win95 windows and CRT scanlines on top.
export default function Vaporwave() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 [background:linear-gradient(var(--purple),var(--lavender)_34%,var(--pink)_50%,var(--sunset)_60%,var(--purple)_60%)]"
		>
			<div className="absolute top-[120px] left-[470px] size-[220px] rounded-full opacity-90 [background:linear-gradient(var(--pink),var(--sunset))]" />
			<div className="absolute -inset-x-[300px] top-[300px] h-[520px] origin-top [transform:perspective(300px)_rotateX(70deg)] [background:repeating-conic-gradient(var(--teal)_0_25%,var(--lavender)_0_50%)_0_0/80px_80px] [mask:linear-gradient(transparent,#000_25%)]" />
			<svg viewBox="0 0 190 300" className="absolute top-[104px] left-[596px] h-[300px] w-[190px]">
				<g fill="none" stroke="var(--teal)" strokeLinecap="round">
					<path d="M70 300 C 74 220 90 140 112 74" strokeWidth="10" />
					<g strokeWidth="9">
						<path d="M112 74 Q 70 40 20 70" />
						<path d="M112 74 Q 90 20 40 14" />
						<path d="M112 74 Q 130 18 176 22" />
						<path d="M112 74 Q 160 60 186 108" />
						<path d="M112 74 Q 70 80 52 132" />
						<path d="M112 74 Q 140 100 140 150" />
					</g>
				</g>
			</svg>
			<svg viewBox="0 0 92 300" className="absolute top-28 left-[560px] h-[300px] w-[92px]">
				<defs>
					<linearGradient id="marble" x1="0" x2="1">
						<stop offset="0" stopColor="oklch(0.82 0.06 300)" />
						<stop offset=".35" stopColor="oklch(0.99 0.01 300)" />
						<stop offset="1" stopColor="oklch(0.72 0.08 300)" />
					</linearGradient>
				</defs>
				<g fill="url(#marble)">
					<rect x="0" y="0" width="92" height="9" />
					<rect x="10" y="9" width="72" height="14" rx="4" />
					<circle cx="12" cy="20" r="11" />
					<circle cx="80" cy="20" r="11" />
					<polygon points="17,24 75,24 78,276 14,276" />
					<rect x="8" y="276" width="76" height="9" />
					<rect x="2" y="285" width="88" height="15" />
				</g>
				<g fill="none" stroke="oklch(0.62 0.08 300)">
					<circle cx="12" cy="20" r="5" />
					<circle cx="80" cy="20" r="5" />
					<path d="M28 30 V270 M40 30 V272 M52 30 V272 M64 30 V270" />
				</g>
			</svg>
			<span className="absolute top-[22px] right-3.5 font-['Zen_Kaku_Gothic_New'] text-[44px] leading-none font-bold tracking-[.2em] text-white [text-shadow:3px_3px_0_var(--pink)] [writing-mode:vertical-rl]">
				キープ
			</span>
			<Window
				className="top-[50px] left-10 h-[280px] w-[474px] drop-shadow-[8px_8px_0_oklch(0.30_0.12_300/.35)]"
				buttons={3}
			/>
			<Window
				className="top-[326px] left-[352px] h-[110px] w-[236px] drop-shadow-[8px_8px_0_oklch(0.30_0.12_300/.35)]"
				buttons={1}
			/>
			<div className="pointer-events-none absolute inset-0 z-10 [background:repeating-linear-gradient(oklch(0_0_0/.07)_0_1px,transparent_1px_3px)]" />
		</div>
	)
}
