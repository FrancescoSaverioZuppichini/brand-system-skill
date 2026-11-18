// [Agent] Ported from the hand-made specimen: three flat films multiplied so their overlaps make the third colour, a
// halftone screen fading in from the left, and a stepped rule that walks down the stair of the headline.
export default function NewWave() {
	return (
		<div aria-hidden="true" className="absolute inset-0 *:absolute">
			<div className="top-[34px] left-[372px] h-[214px] w-[330px] bg-[var(--film-pink)] mix-blend-multiply" />
			<div className="top-[168px] left-[300px] h-[210px] w-[250px] bg-[var(--film-cyan)] mix-blend-multiply" />
			<div className="top-[292px] left-[512px] h-[176px] w-[270px] bg-[var(--film-yellow)] mix-blend-multiply" />
			<div className="top-[34px] left-[560px] h-[150px] w-[222px] [background:radial-gradient(circle,var(--type)_42%,transparent_46%)_0_0/8px_8px] [mask:linear-gradient(100deg,transparent,#000_90%)]" />
			<svg className="inset-0 size-full" viewBox="0 0 800 500">
				<path
					d="M52 132 H120 V194 H188 V262 H316 V346 H540"
					fill="none"
					stroke="var(--type)"
					strokeWidth="2"
				/>
				<g fill="var(--type)">
					<circle cx="540" cy="346" r="4" />
					<rect x="760" y="20" width="22" height="4" />
					<rect x="769" y="11" width="4" height="22" />
					<rect x="540" y="168" width="10" height="124" />
				</g>
				<line x1="300" y1="472" x2="510" y2="380" stroke="var(--type)" strokeWidth="1" />
				<g fill="none" stroke="var(--type)" strokeWidth="1">
					<rect x="20" y="20" width="10" height="10" />
					<rect x="740" y="470" width="10" height="10" />
				</g>
			</svg>
		</div>
	)
}
