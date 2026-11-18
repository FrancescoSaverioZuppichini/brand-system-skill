// [Agent] Ported from the hand-made specimen: a framed print of the great wave (Prussian blue swell with paper-white
// claws, a sage shore, bokashi sky and dusk bands), a vermilion seal under the copy, and mulberry-fibre paper
// multiplied over everything so the flat colour reads as printed.
export default function UkiyoE() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute top-6 left-[336px] h-[452px] w-[440px]" viewBox="0 0 440 452">
				<defs>
					{/* [Agent] Bokashi: one ink wiped to nothing across a band, never a multi-colour gradient. */}
					<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0" stopColor="var(--bero)" />
						<stop offset=".3" stopColor="var(--bero)" stopOpacity="0" />
					</linearGradient>
					<linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0" stopColor="var(--shu)" stopOpacity="0" />
						<stop offset="1" stopColor="var(--shu)" stopOpacity=".45" />
					</linearGradient>
					<linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0" stopColor="var(--surf)" />
						<stop offset="1" stopColor="var(--bero)" />
					</linearGradient>
					<linearGradient id="swell" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0" stopColor="var(--bero)" />
						<stop offset="1" stopColor="var(--ai)" />
					</linearGradient>
					<clipPath id="frame">
						<rect width="440" height="452" />
					</clipPath>
				</defs>
				<g clipPath="url(#frame)" strokeLinejoin="round">
					<rect width="440" height="452" fill="var(--hosho)" />
					<rect width="440" height="452" fill="url(#sky)" />
					<rect y="170" width="440" height="80" fill="url(#dusk)" />
					<path
						d="M150 252 C190 236 214 238 236 230 C262 220 280 226 300 214 C326 200 360 214 390 222 C410 228 428 226 440 224 V252Z"
						fill="var(--moss)"
						stroke="var(--sumi)"
						strokeWidth="1.5"
					/>
					<rect y="250" width="440" height="202" fill="url(#sea)" />
					<g stroke="var(--hosho)" strokeWidth="1.2" fill="none" opacity=".75">
						<path d="M200 270 q14 -6 28 0 t28 0 M300 286 q14 -6 28 0 t28 0 t28 0 M230 312 q14 -6 28 0 t28 0 M340 336 q14 -6 28 0 t28 0" />
					</g>
					{/* the wave: rises from the left edge, curls right, cropped by the frame; the pale disc shows inside the barrel */}
					<ellipse cx="270" cy="212" rx="34" ry="30" fill="var(--surf)" />
					<path
						fill="url(#swell)"
						stroke="var(--sumi)"
						strokeWidth="2.5"
						d="M-10 460 L-10 236 C30 170 110 124 190 120 C252 117 300 142 318 184 C324 204 314 222 298 228 C304 206 292 186 270 182 C244 178 228 196 232 216 C236 236 260 244 282 236 C250 268 224 330 224 460Z"
					/>
					<g fill="none" stroke="var(--hosho)" strokeWidth="3" strokeLinecap="round">
						<path d="M10 270 C50 200 120 160 184 152" />
						<path d="M30 320 C60 250 130 200 196 190" />
						<path d="M60 380 C90 310 150 250 210 236" />
						<path d="M110 452 C130 380 180 300 226 268" />
					</g>
					{/* foam claws along the lip */}
					<g fill="var(--hosho)" stroke="var(--sumi)" strokeWidth="1.6">
						<path d="M196 120 c10 -14 26 -14 30 -2 c-8 -6 -16 -2 -18 6Z" />
						<path d="M232 122 c12 -12 28 -10 30 2 c-8 -5 -16 -1 -18 6Z" />
						<path d="M266 134 c14 -8 30 -4 28 8 c-6 -6 -14 -4 -18 4Z" />
						<path d="M292 152 c16 -4 30 4 24 16 c-4 -8 -12 -8 -18 -2Z" />
						<path d="M310 178 c14 2 22 14 12 22 c-2 -8 -8 -12 -14 -10Z" />
						<circle cx="330" cy="148" r="4" />
						<circle cx="344" cy="168" r="3" />
						<circle cx="316" cy="124" r="3" />
						<circle cx="350" cy="194" r="2.5" />
						<circle cx="338" cy="212" r="3" />
					</g>
				</g>
				<rect x="1.5" y="1.5" width="437" height="449" fill="none" stroke="var(--sumi)" strokeWidth="3" />
			</svg>
			<svg className="absolute top-[404px] left-[268px] size-[34px]" viewBox="0 0 34 34">
				<rect x="1" y="1" width="32" height="32" fill="none" stroke="var(--shu)" strokeWidth="2.5" />
				<path d="M8 8 H26 V26 H8Z M8 17 H26 M17 8 V26" fill="none" stroke="var(--shu)" strokeWidth="2.5" />
			</svg>
			<svg className="pointer-events-none absolute inset-0 z-20 size-full opacity-35 mix-blend-multiply">
				<filter id="mulberry">
					<feTurbulence type="fractalNoise" baseFrequency=".02 .3" numOctaves="3" seed="6" />
					<feColorMatrix values="0 0 0 0 .55  0 0 0 0 .48  0 0 0 0 .36  0 0 0 .6 -.2" />
				</filter>
				<rect width="100%" height="100%" filter="url(#mulberry)" />
			</svg>
		</div>
	)
}
