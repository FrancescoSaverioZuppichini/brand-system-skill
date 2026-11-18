// [Agent] Ported from the hand-made specimen: a Morris block print around a framed text page. One ogee tile, mirrored
// about its centre line like a woodblock (S-curved willow stems make the net, a bloom sits in each cell, buds at the
// corners), and a Kelmscott border: a white-line vine cut into a black block, tiled along each side. The willow-leaf
// rule under the headline is drawn here too.
function Bloom() {
	return (
		<g>
			<g fill="var(--madder)">
				{[0, 60, 120, 180, 240, 300].map((angle) => (
					<ellipse key={angle} cy="-10" rx="6" ry="11" transform={`rotate(${angle})`} />
				))}
			</g>
			<circle r="7" fill="var(--weld)" />
			<g fill="var(--madder)">
				<circle cy="-3" r="1.4" />
				<circle cx="2.6" cy="1.5" r="1.4" />
				<circle cx="-2.6" cy="1.5" r="1.4" />
			</g>
		</g>
	)
}

const leaves = [
	"translate(30 30) rotate(-135)",
	"translate(90 30) rotate(-45)",
	"translate(30 90) rotate(135)",
	"translate(90 90) rotate(45)",
	"translate(60 60) rotate(-62) scale(.8)",
	"translate(60 60) rotate(-118) scale(.8)",
	"translate(60 60) rotate(62) scale(.8)",
	"translate(60 60) rotate(118) scale(.8)",
	"translate(52 12) rotate(-160) scale(.55)",
	"translate(68 12) rotate(-20) scale(.55)",
	"translate(52 108) rotate(160) scale(.55)",
	"translate(68 108) rotate(20) scale(.55)",
	"translate(8 48) rotate(-110) scale(.55)",
	"translate(112 48) rotate(-70) scale(.55)",
	"translate(8 72) rotate(110) scale(.55)",
	"translate(112 72) rotate(70) scale(.55)",
]

export default function ArtsAndCrafts() {
	return (
		<svg aria-hidden="true" className="absolute inset-0 size-full" viewBox="0 0 800 500">
			<defs>
				<g id="bud">
					<g fill="var(--weld)">
						{[45, 135, 225, 315].map((angle) => (
							<ellipse key={angle} cy="-8" rx="5" ry="9" transform={`rotate(${angle})`} />
						))}
					</g>
					<circle r="4" fill="var(--madder)" />
				</g>
				<path id="willow" d="M0 0 C8 -7 22 -7 32 0 C22 6 8 6 0 0Z" />
				<pattern
					id="morris"
					width="120"
					height="120"
					patternUnits="userSpaceOnUse"
					patternTransform="scale(.78)"
				>
					<rect width="120" height="120" fill="var(--indigo)" />
					<g fill="none" stroke="var(--willow)" strokeWidth="3.2">
						<path d="M60 0 C60 30 0 30 0 60 C0 90 60 90 60 120" />
						<path d="M60 0 C60 30 120 30 120 60 C120 90 60 90 60 120" />
					</g>
					<g fill="var(--willow)">
						{leaves.map((transform) => (
							<use key={transform} href="#willow" transform={transform} />
						))}
					</g>
					<path
						d="M30 30 l-14 -14 M90 30 l14 -14 M30 90 l-14 14 M90 90 l14 14"
						fill="none"
						stroke="var(--linen)"
						strokeWidth=".8"
						opacity=".7"
					/>
					<g transform="translate(60 60)">
						<Bloom />
					</g>
					<use href="#bud" x="0" y="0" />
					<use href="#bud" x="120" y="0" />
					<use href="#bud" x="0" y="120" />
					<use href="#bud" x="120" y="120" />
					<g fill="var(--linen)" opacity=".85">
						<circle cx="60" cy="0" r="3" />
						<circle cx="60" cy="120" r="3" />
						<circle cx="0" cy="60" r="3" />
						<circle cx="120" cy="60" r="3" />
					</g>
				</pattern>
				<pattern id="vine" width="28" height="20" patternUnits="userSpaceOnUse">
					<rect width="28" height="20" fill="var(--ink)" />
					<path
						d="M0 10 C7 2 14 2 14 10 C14 18 21 18 28 10"
						fill="none"
						stroke="var(--linen)"
						strokeWidth="1.6"
					/>
					<path
						d="M7 5 C9 1 13 0 15 1 C13 4 10 5 7 5Z M21 15 C19 19 15 20 13 19 C15 16 18 15 21 15Z"
						fill="var(--linen)"
					/>
				</pattern>
				<pattern id="vine-v" href="#vine" patternTransform="rotate(90)" />
			</defs>
			<rect width="800" height="500" fill="url(#morris)" />
			<rect x="140" y="40" width="520" height="420" fill="var(--linen)" />
			<rect x="140" y="40" width="520" height="20" fill="url(#vine)" />
			<rect x="140" y="440" width="520" height="20" fill="url(#vine)" />
			<rect x="140" y="40" width="20" height="420" fill="url(#vine-v)" />
			<rect x="640" y="40" width="20" height="420" fill="url(#vine-v)" />
			<g fill="none" stroke="var(--ink)">
				<rect x="140" y="40" width="520" height="420" strokeWidth="2" />
				<rect x="160" y="60" width="480" height="380" strokeWidth="1.5" />
				<rect x="166" y="66" width="468" height="368" strokeWidth=".6" />
			</g>
			<g transform="translate(370 230)">
				<path d="M0 7 H22 M38 7 H60" stroke="var(--ink)" />
				<path d="M30 1 C36 3 38 7 30 13 C22 7 24 3 30 1Z" fill="var(--willow)" />
			</g>
		</svg>
	)
}
