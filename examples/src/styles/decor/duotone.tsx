// [Agent] Ported from the hand-made specimen: a concert crowd under one stage light, drawn in greys, then gradient-mapped
// to two inks. The filter collapses the scene to luminance and maps black to the violet and white to the lime; its table
// values are those two pigments in sRGB, because a filter table cannot read a CSS variable.
export default function Duotone() {
	return (
		<svg className="absolute inset-0 size-full" viewBox="0 0 800 500" aria-hidden="true">
			<defs>
				<filter id="duotone" colorInterpolationFilters="sRGB">
					<feColorMatrix values=".2126 .7152 .0722 0 0  .2126 .7152 .0722 0 0  .2126 .7152 .0722 0 0  0 0 0 1 0" />
					<feComponentTransfer>
						<feFuncR type="table" tableValues="0.144 0.734" />
						<feFuncG type="table" tableValues="0.047 0.926" />
						<feFuncB type="table" tableValues="0.334 0.300" />
					</feComponentTransfer>
				</filter>
				<filter id="haze" x="-50%" y="-50%" width="200%" height="200%">
					<feGaussianBlur stdDeviation="22" />
				</filter>
				<filter id="soft">
					<feGaussianBlur stdDeviation="1.4" />
				</filter>
				<filter id="grain">
					<feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="5" />
					<feColorMatrix type="saturate" values="0" />
				</filter>
				<linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="#fff" />
					<stop offset="1" stopColor="#fff" stopOpacity="0" />
				</linearGradient>
				<radialGradient id="glow" cx="640" cy="80" r="420" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#fff" />
					<stop offset=".35" stopColor="#9a9a9a" />
					<stop offset="1" stopColor="#050505" />
				</radialGradient>
			</defs>
			<g filter="url(#duotone)">
				<rect width="800" height="500" fill="url(#glow)" />
				<g filter="url(#haze)" opacity=".8">
					<polygon points="630,60 650,60 860,500 520,500" fill="url(#beam)" />
					<polygon points="630,60 650,60 380,500 250,500" fill="url(#beam)" opacity=".55" />
					<polygon points="630,60 650,60 760,0 700,0" fill="#fff" />
				</g>
				<circle cx="640" cy="66" r="18" fill="#fff" />
				<g fill="#060606" filter="url(#soft)">
					<path d="M300 500c0-60 40-90 80-96 4-30 0-56 26-60s34 24 30 58c40 8 70 40 74 98z" />
					<path d="M520 500c4-50 34-74 66-80-2-28 8-50 30-50s30 24 26 52c34 8 56 40 60 78z" />
					<path d="M680 500c2-40 26-60 50-66-2-24 8-40 26-40s26 20 22 44c18 8 26 30 26 62z" />
					<path d="M200 500c2-36 24-54 46-60-2-22 6-36 22-36s24 16 22 38c26 6 40 30 42 58z" />
					<path d="M420 500c2-30 20-46 40-50-2-18 6-30 18-30s20 14 18 32c22 6 32 24 32 48z" />
					<path d="M572 432l-24-150 22-4 26 150z" />
					<ellipse cx="560" cy="270" rx="16" ry="20" transform="rotate(-10 560 270)" />
					<path
						d="M548 256l-6-26M556 252l-2-30M564 252l2-28M572 256l6-24"
						stroke="#060606"
						strokeWidth="7"
						strokeLinecap="round"
					/>
					<path d="M716 440l30-170 22 4-26 170z" />
					<circle cx="758" cy="262" r="16" />
					<path d="M384 420l-40-120 20-8 42 120z" />
					<circle cx="350" cy="292" r="15" />
				</g>
				<rect width="800" height="500" filter="url(#grain)" opacity=".35" className="mix-blend-overlay" />
			</g>
		</svg>
	)
}
