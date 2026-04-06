/**
 * Premium Sachet — Typography-forward, Humantra/LMNT style
 * No icons, no illustrations. Bold color + clean type = premium.
 * Stick pack shape (1:4.5 ratio, tall and slim)
 */

interface Sachet3DProps {
  color: string
  label: string
  size?: number
}

export default function Sachet3D({ color, label, size = 60 }: Sachet3DProps) {
  const w = size
  const h = Math.round(size * 4.2)
  const id = label.replace(/\s+/g, '-').toLowerCase()

  // Split label into lines if long
  const words = label.split(' ')
  const lines: string[] = []
  if (words.length <= 2) {
    lines.push(...words)
  } else {
    lines.push(words.slice(0, Math.ceil(words.length / 2)).join(' '))
    lines.push(words.slice(Math.ceil(words.length / 2)).join(' '))
  }

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 60 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${label} electrolyte sachet`}
    >
      <defs>
        <clipPath id={`c-${id}`}>
          <rect x="2" y="2" width="56" height="248" rx="4" />
        </clipPath>
      </defs>

      {/* Soft shadow */}
      <ellipse cx="30" cy="250" rx="20" ry="3" fill="black" fillOpacity="0.06" />

      <g clipPath={`url(#c-${id})`}>
        {/* Sachet body — solid matte color */}
        <rect x="2" y="2" width="56" height="248" rx="4" fill={color} />

        {/* Subtle dark overlay on top third — adds depth without gradient */}
        <rect x="2" y="2" width="56" height="90" fill="black" fillOpacity="0.15" />

        {/* Matte texture — fine horizontal lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="2" y1={22 + i * 20}
            x2="58" y2={22 + i * 20}
            stroke="white"
            strokeOpacity="0.03"
            strokeWidth="0.3"
          />
        ))}

        {/* Top seal edge */}
        <rect x="2" y="2" width="56" height="6" fill="black" fillOpacity="0.1" />

        {/* Tear notch */}
        <path d="M40 2 L43 0 L46 2" fill={color} stroke="white" strokeWidth="0.3" strokeOpacity="0.2" />

        {/* === BRAND NAME — small, top === */}
        <text
          x="30" y="32"
          textAnchor="middle"
          fill="white"
          fontSize="4.5"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1.5"
          opacity="0.7"
        >
          FIGURING OUT.
        </text>

        {/* Thin separator */}
        <line x1="18" y1="40" x2="42" y2="40" stroke="white" strokeOpacity="0.2" strokeWidth="0.4" />

        {/* === FLAVOR NAME — the star, large, bold === */}
        {lines.map((line, i) => (
          <text
            key={i}
            x="30"
            y={115 + i * 18}
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="800"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.5"
          >
            {line.toUpperCase()}
          </text>
        ))}

        {/* === PRODUCT TYPE — small, below flavor === */}
        <text
          x="30" y={115 + lines.length * 18 + 12}
          textAnchor="middle"
          fill="white"
          fontSize="3.8"
          fontWeight="500"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1.8"
          opacity="0.5"
        >
          ELECTROLYTE MIX
        </text>

        {/* Bottom zone — slightly lighter strip */}
        <rect x="2" y="210" width="56" height="40" fill="white" fillOpacity="0.06" />

        {/* Net weight */}
        <text
          x="30" y="232"
          textAnchor="middle"
          fill="white"
          fontSize="3.5"
          fontWeight="400"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.8"
          opacity="0.35"
        >
          NET WT 6g
        </text>

        {/* Bottom seal */}
        <rect x="2" y="244" width="56" height="6" fill="black" fillOpacity="0.1" />

        {/* Foil highlight — single subtle diagonal stripe */}
        <rect
          x="42" y="2" width="8" height="248"
          fill="white" fillOpacity="0.04"
          transform="skewX(-4)"
        />
      </g>
    </svg>
  )
}
