// [Agent] Ported from the hand-made specimen: a flat pictogram room in daylight (window, pendant lamp, table, plant),
// built from circles and rounded rectangles with one tomato accent and nothing shaded.
export default function Scandinavian() {
	return (
		<svg
			aria-hidden="true"
			className="absolute top-9 left-[448px] h-[428px] w-[316px] rounded-xl bg-[var(--birch)]"
			viewBox="0 0 316 428"
		>
			<rect x="186" y="44" width="96" height="140" rx="8" fill="var(--daylight)" />
			<path d="M234 44 V184 M186 114 H282" stroke="var(--birch)" strokeWidth="6" />
			<line x1="112" y1="0" x2="112" y2="118" stroke="var(--slate)" strokeWidth="2" />
			<path d="M62 160 A50 44 0 0 1 162 160 Z" fill="var(--tomato)" />
			<rect x="104" y="114" width="16" height="10" rx="3" fill="var(--slate)" />
			<ellipse cx="112" cy="163" rx="14" ry="5" fill="oklch(0.95 0.06 90)" />
			<path d="M0 372 H316 V416 A12 12 0 0 1 304 428 H12 A12 12 0 0 1 0 416Z" fill="var(--oak)" />
			<rect x="40" y="292" width="236" height="12" rx="6" fill="var(--slate)" />
			<rect x="70" y="304" width="8" height="82" rx="4" fill="var(--slate)" />
			<rect x="238" y="304" width="8" height="82" rx="4" fill="var(--slate)" />
			<rect x="190" y="236" width="40" height="56" rx="10" fill="var(--daylight)" />
			<g fill="var(--forest)">
				<ellipse cx="200" cy="214" rx="9" ry="24" transform="rotate(-24 200 214)" />
				<ellipse cx="222" cy="210" rx="9" ry="26" transform="rotate(20 222 210)" />
				<ellipse cx="211" cy="200" rx="8" ry="30" />
			</g>
			<circle cx="94" cy="276" r="16" fill="var(--forest)" opacity=".18" />
			<rect x="80" y="266" width="44" height="26" rx="6" fill="var(--daylight)" />
		</svg>
	)
}
