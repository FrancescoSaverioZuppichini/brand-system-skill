// [Agent] Paper grain from SVG fractal noise, laid over the whole specimen and multiplied in, so it darkens the paper
// and the inks alike the way real stock does. Shared by the print styles (riso, zine, letterpress, grunge…).
export function Grain({ opacity = 0.18, frequency = 0.85 }: { opacity?: number; frequency?: number }) {
	return (
		<svg
			aria-hidden="true"
			className="pointer-events-none absolute inset-0 z-20 size-full mix-blend-multiply"
			style={{ opacity }}
		>
			<filter id="grain">
				<feTurbulence type="fractalNoise" baseFrequency={frequency} numOctaves="3" stitchTiles="stitch" />
				<feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.6 -0.55" />
			</filter>
			<rect width="100%" height="100%" filter="url(#grain)" />
		</svg>
	)
}
