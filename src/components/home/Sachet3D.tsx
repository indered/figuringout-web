/**
 * Premium 3D Sachet — Condensation Drop concept
 * Stick pack shape (1:2.8), dark-to-color gradient, condensation droplets,
 * tear notch, seal border, noise grain, hero waterdrop, foil highlight
 */

interface Sachet3DProps {
  color: string
  label: string
  size?: number // base width in px, height auto
}

export default function Sachet3D({ color, label, size = 90 }: Sachet3DProps) {
  const w = size
  const h = Math.round(size * 2.8)
  const id = label.replace(/\s+/g, '-').toLowerCase()

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 90 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${label} electrolyte sachet`}
    >
      <defs>
        {/* Main body gradient — dark top to flavor color bottom */}
        <linearGradient id={`body-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="40%" stopColor="#1A1A1A" />
          <stop offset="75%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>

        {/* Foil highlight stripe */}
        <linearGradient id={`shine-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="40%" stopColor="white" stopOpacity="0.08" />
          <stop offset="60%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Liquid glow at bottom */}
        <radialGradient id={`glow-${id}`} cx="0.5" cy="1" r="0.6">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>

        {/* Hero waterdrop gradient */}
        <radialGradient id={`drop-${id}`} cx="0.4" cy="0.3" r="0.6">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </radialGradient>

        {/* Clip to sachet shape */}
        <clipPath id={`clip-${id}`}>
          <rect x="6" y="8" width="78" height="236" rx="6" />
        </clipPath>

        {/* Noise grain filter */}
        <filter id={`grain-${id}`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend mode="multiply" in="SourceGraphic" in2="gray" />
        </filter>
      </defs>

      {/* Drop shadow */}
      <ellipse cx="45" cy="248" rx="28" ry="4" fill="black" fillOpacity="0.1" />

      {/* === SACHET BODY === */}
      <g clipPath={`url(#clip-${id})`}>
        {/* Base fill — dark to color gradient */}
        <rect x="6" y="8" width="78" height="236" rx="6" fill={`url(#body-${id})`} />

        {/* Grain texture overlay */}
        <rect x="6" y="8" width="78" height="236" fill={`url(#body-${id})`} filter={`url(#grain-${id})`} opacity="0.04" />

        {/* Foil highlight stripe — diagonal */}
        <rect x="50" y="8" width="20" height="236" fill={`url(#shine-${id})`} transform="skewX(-12)" />

        {/* Left edge soft highlight */}
        <rect x="6" y="8" width="5" height="236" fill="white" fillOpacity="0.06" />

        {/* Bottom liquid glow */}
        <rect x="6" y="120" width="78" height="124" fill={`url(#glow-${id})`} />

        {/* === SEAL BORDERS (heat-sealed edges) === */}
        {/* Top seal */}
        <rect x="6" y="8" width="78" height="10" fill="white" fillOpacity="0.04" />
        <line x1="6" y1="18" x2="84" y2="18" stroke="white" strokeOpacity="0.08" strokeWidth="0.5" />

        {/* Left seal */}
        <rect x="6" y="8" width="3" height="236" fill="white" fillOpacity="0.03" />

        {/* Right seal */}
        <rect x="81" y="8" width="3" height="236" fill="white" fillOpacity="0.03" />

        {/* Bottom seal */}
        <rect x="6" y="234" width="78" height="10" fill="white" fillOpacity="0.04" />

        {/* === TEAR NOTCH === */}
        <path d="M56 8 L60 2 L64 8" fill="#0D0D0D" />
        <circle cx="60" cy="10" r="1.5" fill="white" fillOpacity="0.15" />

        {/* === BRAND NAME — small, confident, top === */}
        <text
          x="45" y="40"
          textAnchor="middle"
          fill="#FDF8F3"
          fontSize="7"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.8"
        >
          FIGURING OUT.
        </text>

        {/* Thin divider */}
        <line x1="30" y1="48" x2="60" y2="48" stroke="#FDF8F3" strokeOpacity="0.15" strokeWidth="0.5" />

        {/* === HERO WATERDROP — center, the icon === */}
        <g transform="translate(45, 88)">
          {/* Outer glow */}
          <ellipse cx="0" cy="4" rx="20" ry="20" fill={color} fillOpacity="0.08" />
          {/* Drop shape — larger */}
          <path
            d="M0 -28 C-5 -18 -18 -3 -18 10 C-18 23 -10 30 0 30 C10 30 18 23 18 10 C18 -3 5 -18 0 -28Z"
            fill={`url(#drop-${id})`}
          />
          {/* Inner highlight */}
          <ellipse cx="-5" cy="-3" rx="4" ry="5.5" fill="white" fillOpacity="0.45" />
          {/* Tiny sparkle */}
          <circle cx="-6" cy="-8" r="1.5" fill="white" fillOpacity="0.6" />
        </g>

        {/* === FLAVOR NAME — the star === */}
        <text
          x="45" y="138"
          textAnchor="middle"
          fill="#FDF8F3"
          fontSize="7.5"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.8"
        >
          {label.toUpperCase()}
        </text>

        {/* Flavor sub */}
        <text
          x="45" y="150"
          textAnchor="middle"
          fill="#FDF8F3"
          fontSize="5"
          fontWeight="400"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1"
          opacity="0.45"
        >
          ELECTROLYTE MIX
        </text>

        {/* === WAVE LINES — liquid level === */}
        <path
          d="M6 180 Q25 173 45 180 Q65 187 84 180"
          stroke="white"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.12"
        />
        <path
          d="M6 190 Q30 184 50 190 Q70 196 84 190"
          stroke="white"
          strokeWidth="0.7"
          fill="none"
          strokeOpacity="0.08"
        />

        {/* === CONDENSATION DROPLETS === */}
        {/* Large droplet */}
        <g transform="translate(68, 60)">
          <ellipse rx="3.5" ry="4.5" fill="white" fillOpacity="0.1" />
          <ellipse cx="-1" cy="-1.5" rx="1.5" ry="2" fill="white" fillOpacity="0.25" />
        </g>

        {/* Medium droplet */}
        <g transform="translate(22, 100)">
          <ellipse rx="2.5" ry="3" fill="white" fillOpacity="0.08" />
          <ellipse cx="-0.8" cy="-1" rx="1" ry="1.5" fill="white" fillOpacity="0.2" />
        </g>

        {/* Small droplet */}
        <g transform="translate(72, 150)">
          <ellipse rx="2" ry="2.5" fill="white" fillOpacity="0.1" />
          <ellipse cx="-0.5" cy="-0.8" rx="0.8" ry="1" fill="white" fillOpacity="0.2" />
        </g>

        {/* Tiny droplets — scattered for condensation density */}
        <circle cx="30" cy="65" r="1.2" fill="white" fillOpacity="0.08" />
        <circle cx="65" cy="120" r="1" fill="white" fillOpacity="0.06" />
        <circle cx="25" cy="170" r="1.5" fill="white" fillOpacity="0.07" />
        <circle cx="74" cy="85" r="0.8" fill="white" fillOpacity="0.09" />
        <circle cx="18" cy="135" r="1.3" fill="white" fillOpacity="0.06" />
        <circle cx="70" cy="175" r="1" fill="white" fillOpacity="0.08" />
        <circle cx="35" cy="195" r="0.7" fill="white" fillOpacity="0.05" />
        <circle cx="55" cy="160" r="1.8" fill="white" fillOpacity="0.05" />

        {/* === BOTTOM DETAIL TEXT (trust signal) === */}
        <text
          x="45" y="218"
          textAnchor="middle"
          fill="#FDF8F3"
          fontSize="3.5"
          fontWeight="400"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5"
          opacity="0.25"
        >
          NET WT 6g
        </text>

        {/* Small flavor color stripe at bottom edge */}
        <rect x="6" y="230" width="78" height="4" fill={color} fillOpacity="0.6" />
      </g>
    </svg>
  )
}
