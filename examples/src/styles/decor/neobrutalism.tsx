// [Agent] Dot paper, three traffic-light dots, a starburst on the card's corner and a squiggle: stickers, not illustration.
export default function Neobrutalism() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<div className="absolute inset-0 [background:radial-gradient(var(--black)_1px,transparent_1.5px)_0_0/22px_22px] opacity-15" />
			<div className="absolute top-6 right-8 flex gap-2">
				{["--pink", "--yellow", "--lime"].map((color) => (
					<span
						key={color}
						className="size-6 rounded-full border-[3px] border-[var(--black)]"
						style={{ background: `var(${color})` }}
					/>
				))}
			</div>
			<svg viewBox="0 0 100 100" className="absolute top-[118px] right-[22px] z-10 size-[90px] rotate-12">
				<path
					d="M50 2 L60 32 L92 22 L72 48 L98 68 L64 68 L66 98 L48 74 L26 96 L32 64 L2 60 L28 44 L10 18 L40 30Z"
					fill="var(--yellow)"
					stroke="var(--black)"
					strokeWidth="4"
					strokeLinejoin="round"
				/>
			</svg>
			<svg viewBox="0 0 170 40" className="absolute right-16 bottom-12 w-[170px]">
				<path
					d="M4 30 C24 -6 40 -6 56 24 C72 52 90 4 108 18 C126 34 140 42 166 8"
					fill="none"
					stroke="var(--black)"
					strokeWidth="5"
					strokeLinecap="round"
				/>
			</svg>
		</div>
	)
}
