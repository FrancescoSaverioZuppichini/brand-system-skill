// [Agent] Ported from the hand-made specimen: a 120 px tile of stars repeated like a 1997 background GIF, the rainbow
// line GIF every homepage used instead of an <hr>, the bevelled table around the counter and the button, and the
// "under construction" tape along the bottom.
export default function Web1() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute inset-0 size-full">
				<pattern id="stars" width="120" height="120" patternUnits="userSpaceOnUse">
					<g fill="var(--white)">
						<circle cx="12" cy="18" r="1" />
						<circle cx="70" cy="9" r=".8" />
						<circle cx="101" cy="44" r="1.3" />
						<circle cx="33" cy="77" r=".9" />
						<circle cx="88" cy="96" r="1.1" />
						<circle cx="54" cy="52" r=".7" />
						<circle cx="8" cy="108" r="1.2" />
						<circle cx="112" cy="112" r=".6" />
					</g>
					<path d="M60 22l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="var(--gif-yellow)" />
					<path d="M22 44l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="oklch(0.93 0.1 195)" />
				</pattern>
				<rect width="100%" height="100%" fill="url(#stars)" />
			</svg>
			<div className="absolute top-[271px] left-[100px] h-1.5 w-[600px] [background:linear-gradient(90deg,red,orange,yellow,lime,cyan,blue,magenta,red)]" />
			<div className="absolute top-[302px] left-[200px] h-[110px] w-[398px] border-[3px] border-[var(--silver)] [border-style:outset] bg-[var(--silver)]" />
			<div className="absolute top-[307px] left-[406px] h-[100px] w-[188px] border-2 border-[var(--silver)] [border-style:inset]" />
			<div className="absolute inset-x-0 bottom-0 h-[18px] border-t-2 border-[var(--black)] [background:repeating-linear-gradient(-45deg,var(--gif-yellow)_0_14px,var(--black)_14px_28px)]" />
		</div>
	)
}
