// [Agent] Ported from the hand-made specimen: a navy floor band with cream pinstripes, three red speed lines trailing a
// teardrop body (fat rounded nose leading right, the S1 locomotive and the Airstream), its chrome waist band a
// hard-banded gradient: bright sky reflection, a dark horizon line, bounce light below.
const body =
	"M360 373 C470 318 600 300 688 300 C750 300 790 334 790 373 C790 412 750 446 688 446 C600 446 470 428 360 373Z"

export default function Streamline() {
	return (
		<svg aria-hidden="true" className="absolute inset-0 size-full" viewBox="0 0 800 500">
			<defs>
				<linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="oklch(0.99 0.004 250)" />
					<stop offset=".3" stopColor="oklch(0.86 0.01 250)" />
					<stop offset=".48" stopColor="oklch(0.50 0.02 255)" />
					<stop offset=".6" stopColor="oklch(0.72 0.015 250)" />
					<stop offset="1" stopColor="oklch(0.92 0.008 250)" />
				</linearGradient>
				<linearGradient id="enamel" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="oklch(0.42 0.08 260)" />
					<stop offset=".25" stopColor="var(--navy)" />
					<stop offset="1" stopColor="oklch(0.20 0.05 260)" />
				</linearGradient>
				<clipPath id="body">
					<path d={body} />
				</clipPath>
			</defs>
			<rect y="444" width="800" height="56" fill="var(--navy)" />
			<g fill="var(--cream)">
				<rect y="452" width="800" height="2" />
				<rect y="458" width="800" height="2" />
				<rect y="464" width="800" height="2" />
			</g>
			<g fill="var(--red)">
				<rect x="-20" y="359" width="440" height="6" rx="3" />
				<rect x="-20" y="370" width="400" height="6" rx="3" />
				<rect x="-20" y="381" width="360" height="6" rx="3" />
			</g>
			<path fill="url(#enamel)" d={body} />
			<g clipPath="url(#body)">
				<ellipse cx="640" cy="318" rx="150" ry="10" fill="oklch(1 0 0 / .28)" />
				<rect x="340" y="356" width="460" height="34" fill="url(#chrome)" />
				<rect x="340" y="371" width="460" height="4" fill="var(--red)" />
			</g>
			<circle cx="742" cy="373" r="22" fill="url(#chrome)" stroke="oklch(0.45 0.02 255)" strokeWidth="2" />
			<circle cx="742" cy="373" r="12" fill="var(--navy)" />
		</svg>
	)
}
