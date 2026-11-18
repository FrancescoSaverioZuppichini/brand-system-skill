// [Agent] Ported from the hand-made specimen: one character built from a few primitives (jar body, lid as a hat, a
// sprout), defined once and re-posed: the hero waves on a pale halo, and a small one peeks over the number card, its body
// hidden by the card itself because the decor sits underneath the page.
export default function Mascot() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute top-[46px] left-[440px] size-[320px] rounded-full bg-[var(--mint)]" />
			<svg className="absolute top-[70px] left-[470px] h-[300px] w-[270px]" viewBox="0 -6 200 226">
				<defs>
					<g id="mascot-body">
						<path
							fill="var(--sprout)"
							d="M40 90c0-30 20-38 60-38s60 8 60 38v70c0 32-24 44-60 44s-60-12-60-44z"
						/>
						<ellipse cx="100" cy="158" rx="40" ry="34" fill="var(--leaf)" />
						<rect x="44" y="36" width="112" height="24" rx="12" fill="var(--forest)" />
						<circle cx="100" cy="32" r="8" fill="var(--forest)" />
						<path
							d="M100 26c0-10 2-16 6-22"
							stroke="var(--forest)"
							strokeWidth="4"
							fill="none"
							strokeLinecap="round"
						/>
						<ellipse cx="116" cy="8" rx="12" ry="6" fill="var(--sprout)" transform="rotate(-24 116 8)" />
						<ellipse cx="94" cy="10" rx="9" ry="5" fill="var(--leaf)" transform="rotate(30 94 10)" />
						<ellipse cx="62" cy="124" rx="10" ry="6" fill="var(--cheek)" />
						<ellipse cx="138" cy="124" rx="10" ry="6" fill="var(--cheek)" />
					</g>
				</defs>
				<ellipse cx="100" cy="212" rx="58" ry="7" fill="oklch(0.88 0.04 140)" />
				<ellipse cx="78" cy="204" rx="16" ry="9" fill="var(--forest)" />
				<ellipse cx="122" cy="204" rx="16" ry="9" fill="var(--forest)" />
				<g stroke="var(--sprout)" strokeWidth="15" fill="none" strokeLinecap="round">
					<path d="M44 128C30 118 22 104 20 88" />
					<path d="M158 134c10 8 16 18 18 28" />
				</g>
				<circle cx="19" cy="82" r="10" fill="var(--sprout)" />
				<use href="#mascot-body" />
				<circle cx="78" cy="98" r="17" fill="var(--white)" />
				<circle cx="122" cy="98" r="17" fill="var(--white)" />
				<circle cx="81" cy="101" r="9.5" fill="var(--ink)" />
				<circle cx="125" cy="101" r="9.5" fill="var(--ink)" />
				<circle cx="84" cy="97" r="3" fill="var(--white)" />
				<circle cx="128" cy="97" r="3" fill="var(--white)" />
				<path d="M88 124q12 16 24 0z" fill="var(--ink)" />
				<path d="M95 130q5-4 10 0" stroke="var(--cheek)" strokeWidth="3" fill="none" strokeLinecap="round" />
				<path
					d="M8 66l-6-6M14 60l-1-8M2 76h-8"
					stroke="var(--forest)"
					strokeWidth="3"
					strokeLinecap="round"
				/>
			</svg>
			<svg className="absolute top-[316px] left-[666px] size-16" viewBox="36 0 128 128">
				<use href="#mascot-body" />
				<path
					d="M66 100q12-14 24 0M110 100q12-14 24 0"
					stroke="var(--ink)"
					strokeWidth="5"
					fill="none"
					strokeLinecap="round"
				/>
			</svg>
		</div>
	)
}
