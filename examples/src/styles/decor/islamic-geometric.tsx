// [Agent] Ported from the hand-made specimen: a real girih field, not clip art (Hankin's polygons-in-contact on the
// octagon-and-square tiling: rays leave each edge midpoint at 67.5° and stop where they meet, which gives the turquoise
// 8-point stars, terracotta 4-point stars and lapis crosses), an alfiz frame, and a
// pointed arch of two 234 px arcs whose ivory niche holds the copy.
export default function IslamicGeometric() {
	return (
		<svg className="absolute inset-0 size-full" viewBox="0 0 800 500">
			<defs>
				<pattern
					id="girih"
					width="100"
					height="100"
					patternUnits="userSpaceOnUse"
					patternTransform="translate(400 250) scale(.9) translate(-50 -50)"
				>
					<rect width="100" height="100" fill="var(--night-lapis)" />
					<g stroke="var(--gold)" strokeWidth="2.6" strokeLinejoin="miter">
						<polygon
							fill="var(--turquoise)"
							points="50,0 60.36,25 85.36,14.64 75,39.64 100,50 75,60.36 85.36,85.36 60.36,75 50,100 39.64,75 14.64,85.36 25,60.36 0,50 25,39.64 14.64,14.64 39.64,25"
						/>
						<g fill="var(--terracotta)">
							<polygon points="14.64,-14.64 8.58,0 14.64,14.64 0,8.58 -14.64,14.64 -8.58,0 -14.64,-14.64 0,-8.58" />
							<polygon points="114.64,-14.64 108.58,0 114.64,14.64 100,8.58 85.36,14.64 91.42,0 85.36,-14.64 100,-8.58" />
							<polygon points="14.64,85.36 8.58,100 14.64,114.64 0,108.58 -14.64,114.64 -8.58,100 -14.64,85.36 0,91.42" />
							<polygon points="114.64,85.36 108.58,100 114.64,114.64 100,108.58 85.36,114.64 91.42,100 85.36,85.36 100,91.42" />
						</g>
					</g>
					<polygon points="50,40 53,47 60,50 53,53 50,60 47,53 40,50 47,47" fill="var(--ivory)" />
				</pattern>
			</defs>
			<rect width="800" height="500" fill="url(#girih)" />
			{/* alfiz frame and pointed arch: two arcs of radius 230 whose centres sit inside the span */}
			<rect x="196" y="-4" width="408" height="508" fill="none" stroke="var(--gold)" strokeWidth="3" />
			<rect
				x="190"
				y="-4"
				width="420"
				height="508"
				fill="none"
				stroke="var(--night-lapis)"
				strokeWidth="6"
				opacity=".7"
			/>
			<path d="M216 504 V240 A234 234 0 0 1 400 12 A234 234 0 0 1 584 240 V504Z" fill="var(--night-lapis)" />
			<path d="M222 504 V240 A228 228 0 0 1 400 20 A228 228 0 0 1 578 240 V504Z" fill="var(--gold)" />
			<path d="M230 504 V240 A220 220 0 0 1 400 30 A220 220 0 0 1 570 240 V504Z" fill="var(--ivory)" />
			<path
				d="M238 504 V240 A212 212 0 0 1 400 40 A212 212 0 0 1 562 240 V504"
				fill="none"
				stroke="var(--lapis)"
				strokeWidth="1"
			/>
		</svg>
	)
}
