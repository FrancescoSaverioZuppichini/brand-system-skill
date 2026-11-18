// [Agent] Ported from the hand-made specimen: an orange sun, a giant outlined "keep" behind the real one (the same word
// read at two scales), a tilted acid slab, one cut line across the page and a low-res "scan". The scan is a 32 × 24
// ordered dither baked into one path, drawn with crisp edges so it blows up into hard pixels.
export default function Postmodern() {
	return (
		<div aria-hidden="true" className="absolute inset-0 *:absolute">
			<div className="top-[26px] left-[600px] size-[150px] rounded-full bg-[var(--emigre-orange)]" />
			<span className="top-[168px] left-[300px] font-[Syne] text-[300px] leading-none font-extrabold tracking-[-0.04em] text-transparent [-webkit-text-stroke:1.4px_var(--outline)]">
				keep
			</span>
			<div className="top-[222px] left-[384px] h-[92px] w-[250px] -rotate-3 bg-[var(--acid)]" />
			<div className="top-[330px] left-0 h-px w-[800px] bg-[var(--charcoal)]" />
			<svg
				className="top-[352px] left-[430px] h-[96px] w-[128px]"
				viewBox="0 0 32 24"
				shapeRendering="crispEdges"
			>
				<rect width="32" height="24" fill="oklch(0.9 0.01 80)" />
				<path
					stroke="var(--charcoal)"
					d="M4 0.5h1M6 0.5h1M8 0.5h1M10 0.5h1M12 0.5h1M16 0.5h1M20 0.5h1M22 0.5h1M24 0.5h1M26 0.5h1M28 0.5h4M5 1.5h1M9 1.5h1M25 1.5h1M27 1.5h1M29 1.5h1M31 1.5h1M2 2.5h1M4 2.5h1M6 2.5h1M8 2.5h1M10 2.5h1M12 2.5h1M14 2.5h1M18 2.5h1M22 2.5h1M24 2.5h1M26 2.5h1M28 2.5h1M30 2.5h2M7 3.5h1M27 3.5h1M29 3.5h1M31 3.5h1M0 4.5h1M2 4.5h1M4 4.5h1M6 4.5h1M8 4.5h1M10 4.5h1M12 4.5h1M14 4.5h1M16 4.5h1M18 4.5h1M20 4.5h1M22 4.5h1M24 4.5h1M26 4.5h1M28 4.5h4M5 5.5h1M9 5.5h1M13 5.5h1M21 5.5h1M25 5.5h1M27 5.5h1M29 5.5h1M31 5.5h1M2 6.5h1M4 6.5h1M6 6.5h1M8 6.5h1M10 6.5h1M12 6.5h1M14 6.5h1M16 6.5h1M18 6.5h1M20 6.5h1M22 6.5h1M24 6.5h1M26 6.5h1M28 6.5h1M30 6.5h2M15 7.5h1M19 7.5h1M23 7.5h1M25 7.5h1M27 7.5h1M29 7.5h1M31 7.5h1M0 8.5h1M2 8.5h1M4 8.5h1M6 8.5h1M8 8.5h1M10 8.5h1M12 8.5h1M14 8.5h1M16 8.5h1M18 8.5h1M20 8.5h1M22 8.5h1M24 8.5h3M28 8.5h3M9 9.5h1M13 9.5h1M15 9.5h1M17 9.5h1M19 9.5h1M21 9.5h1M23 9.5h1M25 9.5h1M27 9.5h1M29 9.5h1M31 9.5h1M2 10.5h1M6 10.5h1M8 10.5h1M10 10.5h1M12 10.5h1M14 10.5h1M16 10.5h1M18 10.5h3M22 10.5h3M26 10.5h1M28 10.5h1M30 10.5h1M11 11.5h1M15 11.5h1M17 11.5h1M19 11.5h1M21 11.5h1M23 11.5h1M25 11.5h1M27 11.5h1M29 11.5h1M31 11.5h1M0 12.5h1M2 12.5h1M4 12.5h1M6 12.5h1M8 12.5h1M10 12.5h1M12 12.5h1M14 12.5h1M16 12.5h11M28 12.5h3M13 13.5h1M15 13.5h1M17 13.5h1M19 13.5h3M23 13.5h1M25 13.5h1M27 13.5h1M29 13.5h1M31 13.5h1M0 14.5h1M2 14.5h1M6 14.5h1M10 14.5h1M12 14.5h1M14 14.5h11M26 14.5h3M30 14.5h1M11 15.5h1M13 15.5h1M15 15.5h1M17 15.5h1M19 15.5h1M21 15.5h1M23 15.5h1M25 15.5h1M27 15.5h1M29 15.5h1M31 15.5h1M0 16.5h1M2 16.5h1M4 16.5h1M6 16.5h1M8 16.5h1M10 16.5h1M12 16.5h15M28 16.5h3M1 17.5h1M9 17.5h1M11 17.5h1M13 17.5h1M15 17.5h3M19 17.5h3M23 17.5h3M27 17.5h1M29 17.5h1M31 17.5h1M0 18.5h1M2 18.5h1M4 18.5h1M6 18.5h1M8 18.5h1M10 18.5h1M12 18.5h1M14 18.5h15M30 18.5h2M11 19.5h1M13 19.5h1M15 19.5h1M17 19.5h3M21 19.5h3M25 19.5h1M27 19.5h1M29 19.5h1M31 19.5h1M0 20.5h1M2 20.5h1M4 20.5h1M6 20.5h1M8 20.5h1M10 20.5h1M12 20.5h20M1 21.5h1M5 21.5h1M7 21.5h1M9 21.5h1M11 21.5h1M13 21.5h1M15 21.5h1M17 21.5h1M19 21.5h3M23 21.5h3M27 21.5h3M31 21.5h1M0 22.5h1M2 22.5h1M4 22.5h1M6 22.5h1M8 22.5h1M10 22.5h3M14 22.5h18M1 23.5h1M3 23.5h1M5 23.5h1M7 23.5h1M9 23.5h1M11 23.5h1M13 23.5h1M15 23.5h1M17 23.5h1M19 23.5h1M21 23.5h1M23 23.5h1M25 23.5h3M29 23.5h3"
				/>
			</svg>
			<span className="top-[454px] left-[430px] font-[Major_Mono_Display] text-xs">fig. 1</span>
		</div>
	)
}
