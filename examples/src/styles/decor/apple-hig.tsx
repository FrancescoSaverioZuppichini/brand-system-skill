// [Agent] Ported from the hand-made specimen: the status bar, the green icon tile and chevron of the grouped-list row,
// and a screen of colour with Liquid Glass controls floating over it. The glass is almost clear: the backdrop is
// warped by a displacement filter, saturated, and lit by a bright rim on the top-left and a faint one opposite.
const glass =
	"absolute flex items-center justify-around bg-white/16 [backdrop-filter:url(#lens)_blur(1.5px)_saturate(1.8)_brightness(1.06)] shadow-[inset_1.5px_1.5px_0_oklch(1_0_0/.8),inset_-1px_-1px_0_oklch(1_0_0/.45),inset_0_0_16px_oklch(1_0_0/.28),0_8px_24px_oklch(0.2_0.05_280/.25)]"

export default function AppleHig() {
	return (
		<div aria-hidden="true" className="absolute inset-0 text-[var(--label)]">
			<svg width="0" height="0" className="absolute">
				<filter id="lens" x="0" y="0" width="100%" height="100%">
					<feTurbulence type="fractalNoise" baseFrequency=".012 .03" numOctaves="1" seed="4" result="t" />
					<feDisplacementMap
						in="SourceGraphic"
						in2="t"
						scale="22"
						xChannelSelector="R"
						yChannelSelector="G"
					/>
				</filter>
			</svg>
			<div className="absolute inset-x-[30px] top-3 flex items-center gap-1.5 font-[Inter] text-[15px] leading-none font-semibold">
				9:41
				<svg className="ml-auto" width="18" height="12" fill="currentColor">
					<rect x="0" y="8" width="3" height="4" rx="1" />
					<rect x="5" y="5" width="3" height="7" rx="1" />
					<rect x="10" y="2.5" width="3" height="9.5" rx="1" />
					<rect x="15" y="0" width="3" height="12" rx="1" />
				</svg>
				<svg width="16" height="12" viewBox="0 0 16 12">
					<path
						d="M8 11.5l2.4-2.6a3.4 3.4 0 0 0-4.8 0zM3.3 6.6a6.6 6.6 0 0 1 9.4 0l1.6-1.7a9 9 0 0 0-12.6 0zM.2 3.4a11 11 0 0 1 15.6 0"
						fill="currentColor"
						stroke="currentColor"
						strokeWidth=".4"
					/>
				</svg>
				<svg width="27" height="13" fill="currentColor">
					<rect
						x=".5"
						y=".5"
						width="23"
						height="12"
						rx="3.5"
						fill="none"
						stroke="currentColor"
						opacity=".4"
					/>
					<rect x="2" y="2" width="18" height="9" rx="2" />
					<rect x="25" y="4.5" width="1.5" height="4" rx=".7" opacity=".4" />
				</svg>
			</div>
			<span className="absolute top-[312px] left-12 z-10 grid size-[30px] place-items-center rounded-[8px] bg-[var(--system-green)]">
				<svg width="16" height="16">
					<path
						d="M3 8.5l3.2 3.2L13 4.5"
						fill="none"
						stroke="white"
						strokeWidth="2.2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</span>
			<svg className="absolute top-[321px] left-[412px] z-10" width="8" height="13">
				<path
					d="M1.5 1.5l5 5-5 5"
					fill="none"
					stroke="oklch(0.75 0.01 260)"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<div className="absolute top-11 left-[460px] h-[436px] w-[312px] overflow-hidden rounded-[30px] [background:linear-gradient(165deg,oklch(0.62_0.2_300),oklch(0.45_0.2_280)_60%,oklch(0.32_0.14_270))] *:absolute *:rounded-full">
				<i className="top-10 left-[110px] size-[210px] [background:radial-gradient(circle_at_40%_35%,oklch(0.88_0.08_350),oklch(0.66_0.2_355))]" />
				<i className="top-[210px] -left-[90px] size-[330px] [background:radial-gradient(circle_at_40%_35%,oklch(0.88_0.14_80),oklch(0.72_0.19_45))]" />
				<i className="top-[250px] left-[150px] size-[260px] [background:radial-gradient(circle_at_40%_35%,oklch(0.75_0.15_230),oklch(0.5_0.2_262))]" />
			</div>
			<div className={`${glass} top-[58px] left-[474px] size-11 justify-center! rounded-full`}>
				<svg width="12" height="20">
					<path
						d="M10 2L2 10l8 8"
						fill="none"
						stroke="white"
						strokeWidth="2.6"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<div className={`${glass} top-[58px] left-[664px] h-11 w-[94px] rounded-[22px]`}>
				<svg width="20" height="22">
					<path
						d="M10 14V2M5 6l5-5 5 5M3 10v10h14V10"
						fill="none"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<svg width="22" height="6" fill="white">
					<circle cx="3" cy="3" r="2.4" />
					<circle cx="11" cy="3" r="2.4" />
					<circle cx="19" cy="3" r="2.4" />
				</svg>
			</div>
			<div className={`${glass} bottom-[34px] left-[474px] h-[60px] w-[222px] rounded-[30px]`}>
				<span className="grid h-[50px] w-[62px] place-items-center rounded-[25px] bg-white/32 shadow-[inset_0_0_0_.5px_oklch(1_0_0/.6)]">
					<svg width="26" height="22">
						<path d="M2 10L13 1l11 9v11H16v-7h-6v7H2z" fill="white" />
					</svg>
				</span>
				<svg width="24" height="24" fill="white">
					<rect x="2" y="2" width="8" height="8" rx="2" />
					<rect x="14" y="2" width="8" height="8" rx="2" />
					<rect x="2" y="14" width="8" height="8" rx="2" />
					<rect x="14" y="14" width="8" height="8" rx="2" />
				</svg>
				<svg width="24" height="24" fill="white">
					<circle cx="12" cy="8" r="5" />
					<path d="M2 23c0-5 4.5-8 10-8s10 3 10 8z" />
				</svg>
			</div>
			<div className={`${glass} bottom-[34px] left-[704px] size-[60px] justify-center! rounded-full`}>
				<svg width="22" height="22">
					<circle cx="9.5" cy="9.5" r="7" fill="none" stroke="white" strokeWidth="2.4" />
					<path d="M14.5 14.5l6 6" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
				</svg>
			</div>
		</div>
	)
}
