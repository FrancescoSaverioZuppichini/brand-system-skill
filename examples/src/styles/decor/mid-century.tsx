import { Grain } from "./grain"

// [Agent] Ported from the hand-made specimen: a mustard sun, an orange crescent, a key and two paper triangles, with the
// teal sheet the number card sits on. Every edge is pushed around by low-frequency noise so the vectors read as
// scissor-cut paper, then print grain over everything.
export default function MidCentury() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<svg className="absolute inset-0 size-full" viewBox="0 0 800 500">
				<filter id="cut" x="-5%" y="-5%" width="110%" height="110%">
					<feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" />
					<feDisplacementMap in="SourceGraphic" scale="7" />
				</filter>
				<g filter="url(#cut)">
					<circle fill="var(--mustard)" cx="628" cy="178" r="148" />
					<path
						fill="var(--orange)"
						d="M470 70 C560 40 660 110 640 230 C628 300 560 330 512 300 C566 250 572 170 470 70 Z"
					/>
					<path fill="var(--teal)" d="M548 296 L770 280 L780 470 L540 486 Z" />
					<g transform="rotate(16 700 160)" fill="var(--ink)">
						<circle cx="700" cy="78" r="32" />
						<circle fill="var(--paper)" cx="700" cy="72" r="10" />
						<rect x="692" y="104" width="16" height="150" />
						<rect x="708" y="214" width="24" height="12" />
						<rect x="708" y="236" width="16" height="12" />
					</g>
					<path fill="var(--ink)" d="M440 470 L470 400 L500 470 Z" />
					<path fill="var(--mustard)" d="M478 470 L508 412 L538 470 Z" />
				</g>
			</svg>
			<Grain opacity={0.22} />
		</div>
	)
}
