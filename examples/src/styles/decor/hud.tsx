// [Agent] Ported from the hand-made specimen: a faint 40 px grid with a glow off-centre, corner brackets on the whole
// screen, tick rulers top and bottom, and the radar (rings, ticks, a sweep wedge, a wireframe globe, two targets) the
// readouts are arranged around. Scanlines go over everything.
export default function Hud() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 [background:radial-gradient(70%_80%_at_72%_48%,oklch(0.20_0.04_240),transparent_70%),linear-gradient(90deg,oklch(0.84_0.13_205/.07)_1px,transparent_1px)_0_0/40px_40px,linear-gradient(oklch(0.84_0.13_205/.07)_1px,transparent_1px)_0_0/40px_40px,var(--abyss)]"
		>
			<svg viewBox="0 0 772 472" fill="none" className="absolute inset-3.5">
				<path d="M0 26V0H26M746 0H772V26M772 446V472H746M26 472H0V446" stroke="var(--cyan)" />
			</svg>
			<div className="absolute inset-x-[200px] top-3.5 h-2 [background:repeating-linear-gradient(90deg,var(--dim)_0_1px,transparent_1px_10px)]" />
			<div className="absolute inset-x-[200px] bottom-3.5 h-2 [background:repeating-linear-gradient(90deg,var(--dim)_0_1px,transparent_1px_10px)]" />
			<svg
				viewBox="0 0 360 360"
				fill="none"
				className="absolute top-[62px] left-[404px] size-[360px] overflow-visible drop-shadow-[0_0_3px_oklch(0.84_0.13_205/.55)]"
			>
				<defs>
					<linearGradient id="sweep" x1="1" y1=".6" x2=".4" y2="0">
						<stop offset="0" stopColor="var(--cyan)" stopOpacity=".35" />
						<stop offset="1" stopColor="var(--cyan)" stopOpacity="0" />
					</linearGradient>
				</defs>
				<g stroke="var(--dim)">
					<circle cx="180" cy="180" r="176" />
					<circle cx="180" cy="180" r="130" strokeDasharray="2 6" />
					<circle cx="180" cy="180" r="90" />
					<path d="M180 0V120M180 240V360M0 180H120M240 180H360" />
				</g>
				<circle
					cx="180"
					cy="180"
					r="165"
					stroke="var(--cyan)"
					strokeWidth="5"
					strokeDasharray="1 7.64"
					opacity=".7"
				/>
				<circle cx="180" cy="180" r="165" stroke="var(--cyan)" strokeWidth="12" strokeDasharray="2 84.39" />
				<circle
					cx="180"
					cy="180"
					r="146"
					stroke="var(--cyan)"
					strokeWidth="3"
					strokeDasharray="200 717"
					transform="rotate(-120 180 180)"
				/>
				<circle
					cx="180"
					cy="180"
					r="146"
					stroke="var(--cyan)"
					strokeWidth="3"
					strokeDasharray="40 877"
					transform="rotate(130 180 180)"
				/>
				<circle
					cx="180"
					cy="180"
					r="112"
					stroke="var(--amber)"
					strokeWidth="2"
					strokeDasharray="70 634"
					transform="rotate(20 180 180)"
				/>
				<path d="M180 180 L326 146 A150 150 0 0 0 276 65 Z" fill="url(#sweep)" />
				<path d="M180 180 L326 146" stroke="var(--cyan)" strokeWidth="1.5" />
				<g stroke="var(--cyan)" transform="rotate(-18 180 180)">
					<circle cx="180" cy="180" r="44" />
					<ellipse cx="180" cy="180" rx="44" ry="13" />
					<ellipse cx="180" cy="180" rx="30" ry="44" />
					<ellipse cx="180" cy="180" rx="12" ry="44" />
					<path d="M140 162 H220 M140 198 H220" />
				</g>
				<path d="M286 102 l6 -6 l6 6 l-6 6 Z" stroke="var(--amber)" strokeWidth="1.5" />
				<circle cx="104" cy="236" r="4" fill="var(--cyan)" />
				<circle cx="104" cy="236" r="10" stroke="var(--cyan)" />
				<circle cx="244" cy="262" r="3.5" fill="var(--amber)" />
				<path d="M244 266 V330" stroke="var(--amber)" strokeDasharray="2 3" />
				<g className="fill-[var(--dim)] font-mono text-[9px] font-medium tracking-[.1em]">
					<text x="180" y="-8" textAnchor="middle">
						000
					</text>
					<text x="368" y="183">
						090
					</text>
					<text x="-8" y="183" textAnchor="end">
						270
					</text>
				</g>
			</svg>
			<div className="pointer-events-none absolute inset-0 z-10 [background:repeating-linear-gradient(oklch(0_0_0/.18)_0_1px,transparent_1px_3px)]" />
		</div>
	)
}
