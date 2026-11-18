// [Agent] Ported from the hand-made specimen: a tilted pure-blue slab, a green ball cropped by the edge, an 8-bit star,
// an MS Paint red circle scrawled round the default button and a pixel cursor. Pure RGB on purpose: garish is the point.
export default function AntiDesign() {
	return (
		<div aria-hidden="true" className="absolute inset-0 *:absolute">
			<div className="top-[268px] left-[-40px] h-[300px] w-[560px] -rotate-3 bg-[var(--blue)]" />
			<div className="top-[-96px] left-[622px] size-[260px] rounded-full bg-[var(--green)]" />
			<svg
				viewBox="0 0 9 9"
				shapeRendering="crispEdges"
				className="top-7 left-[690px] w-[72px] rotate-[14deg]"
			>
				<path
					fill="var(--black)"
					d="M4 0h1v2h2v1h2v1h-1v1h-1v2h1v2h-1v-1h-2v-1h-1v1h-2v1h-1v-2h1v-2h-1v-1h-1v-1h2v-1h2z"
				/>
				<path fill="var(--yellow)" d="M4 2h1v1h2v1h-1v2h-1v-1h-1v1h-1v-2h-1v-1h2z" />
			</svg>
			<svg
				viewBox="0 0 230 120"
				className="z-10 top-[244px] left-[498px] h-[120px] w-[230px] overflow-visible"
			>
				<path
					d="M30 64 C 26 20, 150 2, 206 30 C 240 50, 214 104, 120 108 C 40 112, 6 84, 22 54 C 34 30, 90 18, 140 20"
					fill="none"
					stroke="var(--red)"
					strokeWidth="5"
					strokeLinecap="round"
				/>
			</svg>
			<svg viewBox="0 0 12 19" shapeRendering="crispEdges" className="z-10 top-[286px] left-[704px] w-[26px]">
				<path d="M0 0v16l4-4 3 7 2-1-3-7h6z" fill="var(--white)" stroke="var(--black)" strokeWidth="1" />
			</svg>
		</div>
	)
}
