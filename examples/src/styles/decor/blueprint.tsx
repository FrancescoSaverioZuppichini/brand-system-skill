// [Agent] Ported from the hand-made specimen: graph paper (8 px squares, a stronger rule every 40 px) under an orthographic
// drawing of the product, a jar. The elevation's right half is cut as a section (hatched walls, hidden wall dashed), with
// dimension lines, a plan view with its radius, and a lettered callout in the checker's yellow pencil.
const line = { fill: "none", stroke: "var(--line)", strokeWidth: 1.6 }
const thin = { fill: "none", stroke: "var(--line)", strokeWidth: 1 }
const hidden = { ...thin, strokeDasharray: "6 4" }
const centre = { fill: "none", stroke: "var(--faded)", strokeWidth: 1, strokeDasharray: "14 3 2 3" }
const arrows = { markerStart: "url(#arrow)", markerEnd: "url(#arrow)" }
const label = { fill: "var(--line)", className: "font-mono text-[11px]" }

export default function Blueprint() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 [background:linear-gradient(var(--grid)_1px,transparent_1px)_0_0/40px_40px,linear-gradient(90deg,var(--grid)_1px,transparent_1px)_0_0/40px_40px,linear-gradient(oklch(0.48_0.09_255/.45)_1px,transparent_1px)_0_0/8px_8px,linear-gradient(90deg,oklch(0.48_0.09_255/.45)_1px,transparent_1px)_0_0/8px_8px]"
		>
			<svg className="absolute inset-0 size-full" viewBox="0 0 800 500">
				<defs>
					<marker
						id="arrow"
						viewBox="0 0 10 10"
						refX="10"
						refY="5"
						markerWidth="9"
						markerHeight="9"
						orient="auto-start-reverse"
					>
						<path d="M0 1.5L10 5 0 8.5z" fill="var(--line)" />
					</marker>
					<pattern
						id="section"
						width="6"
						height="6"
						patternUnits="userSpaceOnUse"
						patternTransform="rotate(45)"
					>
						<line y2="6" stroke="var(--line)" strokeWidth=".8" />
					</pattern>
					<clipPath id="cut">
						<rect x="535" y="100" width="100" height="320" />
					</clipPath>
				</defs>

				<path {...centre} d="M535 104V424" />
				<path {...line} d="M470 184H600V384Q600 400 584 400H486Q470 400 470 384Z" />
				<path {...line} d="M462 152H608V184H462Z" />
				<path {...line} d="M522 136H548V152H522Z" />
				<g clipPath="url(#cut)" fill="url(#section)">
					<path d="M592 184V392H535V400H584Q600 400 600 384V184Z" />
					<path d="M535 152H608V184H600V164H535Z" />
				</g>
				<path {...thin} d="M535 392H592V184" />
				<path {...hidden} d="M478 188V392H535" />

				<path {...thin} d="M470 404V446M600 404V446" />
				<path {...thin} {...arrows} d="M470 438H600" />
				<text {...label} x="520" y="432">
					130
				</text>
				<path {...thin} d="M466 184H430M466 400H430" />
				<path {...thin} {...arrows} d="M438 184V400" />
				<text {...label} x="428" y="300" transform="rotate(-90 428 300)" textAnchor="middle">
					216
				</text>
				<path {...thin} d="M462 148V108M608 148V108" />
				<path {...thin} {...arrows} stroke="var(--pencil)" d="M462 116H608" />
				<text {...label} x="514" y="110" fill="var(--pencil)">
					Ø146
				</text>

				<path {...centre} d="M612 300H800M706 206V394" />
				<circle {...thin} cx="706" cy="300" r="86" strokeDasharray="2 4" />
				<circle {...line} cx="706" cy="300" r="73" />
				<circle {...hidden} cx="706" cy="300" r="65" />
				<circle {...line} cx="706" cy="300" r="13" />
				<path {...thin} d="M706 300L758 248H796" />
				<text {...label} x="768" y="243">
					R73
				</text>

				<path {...thin} d="M608 168L650 140H676" />
				<circle {...thin} stroke="var(--pencil)" cx="688" cy="140" r="11" />
				<text {...label} x="684" y="144" fill="var(--pencil)">
					A
				</text>
			</svg>
		</div>
	)
}
