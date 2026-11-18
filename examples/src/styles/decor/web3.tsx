// [Agent] Ported from the hand-drawn specimen: blurred colour orbs, a glowing node network, a hex cluster and a 3D coin
// (an edge ellipse behind a face ellipse with a radial sheen) wrapped by an orbit whose front arc crosses over the coin.
export default function Web3() {
	return (
		<svg aria-hidden="true" className="absolute inset-0" width="800" height="500" viewBox="0 0 800 500">
			<defs>
				<filter id="web3-blur" x="-50%" y="-50%" width="200%" height="200%">
					<feGaussianBlur stdDeviation="50" />
				</filter>
				<radialGradient id="web3-face" cx="0.32" cy="0.28" r="0.85">
					<stop offset="0" stopColor="oklch(0.90 0.10 205)" />
					<stop offset="0.35" stopColor="oklch(0.66 0.20 270)" />
					<stop offset="0.75" stopColor="oklch(0.45 0.22 295)" />
					<stop offset="1" stopColor="oklch(0.30 0.16 295)" />
				</radialGradient>
				<linearGradient id="web3-edge" x1="0" x2="1">
					<stop offset="0" stopColor="oklch(0.30 0.14 295)" />
					<stop offset="0.5" stopColor="oklch(0.42 0.20 290)" />
					<stop offset="1" stopColor="oklch(0.22 0.10 295)" />
				</linearGradient>
				<linearGradient id="web3-emblem" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0" stopColor="oklch(0.98 0.03 205)" />
					<stop offset="1" stopColor="oklch(0.80 0.12 230)" />
				</linearGradient>
				<filter id="web3-glow" x="-50%" y="-50%" width="200%" height="200%">
					<feGaussianBlur stdDeviation="3" result="b" />
					<feMerge>
						<feMergeNode in="b" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>
			<circle cx="640" cy="160" r="150" fill="oklch(0.58 0.24 295)" opacity="0.55" filter="url(#web3-blur)" />
			<circle cx="520" cy="360" r="110" fill="var(--cyan)" opacity="0.35" filter="url(#web3-blur)" />
			<circle cx="80" cy="470" r="120" fill="oklch(0.58 0.24 295)" opacity="0.3" filter="url(#web3-blur)" />
			<path
				d="M430 60 L520 110 L470 200 M520 110 L760 70 L740 280 L700 420 M470 200 L430 300 L520 460 M760 70 L790 180"
				fill="none"
				stroke="var(--cyan)"
				strokeOpacity="0.22"
			/>
			<g fill="var(--cyan)" filter="url(#web3-glow)">
				<circle cx="430" cy="60" r="2.5" />
				<circle cx="520" cy="110" r="3" />
				<circle cx="470" cy="200" r="2" />
				<circle cx="760" cy="70" r="3" />
				<circle cx="740" cy="280" r="2.5" />
				<circle cx="430" cy="300" r="2" />
				<circle cx="790" cy="180" r="2" />
			</g>
			<ellipse
				cx="610"
				cy="200"
				rx="190"
				ry="52"
				transform="rotate(-14 610 200)"
				fill="none"
				stroke="var(--cyan)"
				strokeOpacity="0.35"
				strokeWidth="1.2"
			/>
			<g transform="translate(612 196) rotate(-10)">
				<ellipse cx="18" cy="0" rx="92" ry="122" fill="url(#web3-edge)" />
				<rect x="0" y="-122" width="18" height="244" fill="url(#web3-edge)" />
				<ellipse cx="0" cy="0" rx="92" ry="122" fill="url(#web3-face)" />
				<ellipse
					cx="0"
					cy="0"
					rx="76"
					ry="102"
					fill="none"
					stroke="oklch(0.96 0.01 280 / 0.35)"
					strokeWidth="2"
				/>
				<polygon points="0,-52 42,-26 42,26 0,52 -42,26 -42,-26" fill="url(#web3-emblem)" />
				<polygon points="0,-52 42,-26 0,0 -42,-26" fill="oklch(1 0 0 / 0.55)" />
				<polygon points="0,0 42,-26 42,26 0,52" fill="oklch(0.62 0.20 280 / 0.45)" />
				<ellipse
					cx="-38"
					cy="-62"
					rx="18"
					ry="38"
					transform="rotate(30 -38 -62)"
					fill="oklch(1 0 0 / 0.28)"
				/>
			</g>
			<path
				d="M 430 262 A 190 52 -14 0 0 795 160"
				fill="none"
				stroke="var(--cyan)"
				strokeWidth="1.6"
				strokeOpacity="0.8"
			/>
			<circle cx="436" cy="262" r="5" fill="var(--gain)" filter="url(#web3-glow)" />
			<path
				d="M330 30 l14 -8 l14 8 v16 l-14 8 l-14 -8 Z M358 30 l14 -8 l14 8 v16 l-14 8 l-14 -8 Z M344 54 l14 -8 l14 8 v16 l-14 8 l-14 -8 Z"
				fill="none"
				stroke="var(--frost)"
				strokeOpacity="0.1"
			/>
		</svg>
	)
}
