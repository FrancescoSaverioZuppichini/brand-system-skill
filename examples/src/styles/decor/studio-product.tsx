// [Agent] Ported from the hand-made specimen: a seamless sweep lit by one softbox, and a lacquered tin standing on it with
// a soft contact shadow and one hard cast shadow. A cylinder is only a horizontal gradient: a dark terminator, a narrow
// softbox streak, and a rim light on the far edge.
export default function StudioProduct() {
	return (
		<svg className="absolute inset-0 size-full" viewBox="0 0 800 500" aria-hidden="true">
			<defs>
				<linearGradient id="sweep" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="var(--falloff)" />
					<stop offset=".45" stopColor="var(--sweep)" />
					<stop offset=".7" stopColor="var(--bend)" />
					<stop offset="1" stopColor="var(--sweep)" />
				</linearGradient>
				<radialGradient id="softbox" cx=".5" cy=".58" r=".6">
					<stop offset="0" stopColor="var(--softbox)" />
					<stop offset=".7" stopColor="var(--softbox)" stopOpacity="0" />
				</radialGradient>
				<linearGradient id="tin">
					<stop offset="0" stopColor="var(--tin-shade)" />
					<stop offset=".08" stopColor="var(--tin)" />
					<stop offset=".17" stopColor="var(--tin-lit)" />
					<stop offset=".2" stopColor="oklch(0.86 0.03 40)" />
					<stop offset=".23" stopColor="var(--tin-lit)" />
					<stop offset=".34" stopColor="var(--tin)" />
					<stop offset=".52" stopColor="var(--tin)" />
					<stop offset=".8" stopColor="oklch(0.27 0.06 30)" />
					<stop offset=".92" stopColor="oklch(0.45 0.05 30)" />
					<stop offset="1" stopColor="var(--tin-shade)" />
				</linearGradient>
				<radialGradient id="lid" cx=".4" cy=".3" r=".7">
					<stop offset="0" stopColor="oklch(0.62 0.06 35)" />
					<stop offset=".7" stopColor="var(--tin)" />
					<stop offset="1" stopColor="oklch(0.3 0.07 30)" />
				</radialGradient>
				<radialGradient id="contact">
					<stop offset="0" stopColor="oklch(0.15 0.01 250)" stopOpacity=".75" />
					<stop offset="1" stopColor="oklch(0.15 0.01 250)" stopOpacity="0" />
				</radialGradient>
				<filter id="blur4" x="-20%" y="-50%" width="140%" height="200%">
					<feGaussianBlur stdDeviation="4" />
				</filter>
				<filter id="blur3" x="-20%" y="-50%" width="140%" height="200%">
					<feGaussianBlur stdDeviation="3" />
				</filter>
			</defs>
			<rect width="800" height="500" fill="url(#sweep)" />
			<rect width="800" height="500" fill="url(#softbox)" />
			<polygon
				points="447,398 617,398 563,432 393,432"
				fill="oklch(0.45 0.01 250 / .28)"
				filter="url(#blur4)"
			/>
			<ellipse cx="403" cy="414" rx="85" ry="14" fill="url(#contact)" filter="url(#blur3)" />
			<path d="M328 196H472V402A72 14 0 0 1 328 402Z" fill="url(#tin)" />
			<path d="M324 159H476V193A76 10 0 0 1 324 193Z" fill="oklch(0.15 0.03 30 / .6)" />
			<path d="M324 156H476V190A76 10 0 0 1 324 190Z" fill="url(#tin)" />
			<ellipse cx="400" cy="156" rx="76" ry="11" fill="url(#lid)" />
		</svg>
	)
}
