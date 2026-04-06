/**
 * Premium Sachet v6 — Shiny foil, brighter pastels, horizontal lines,
 * watery energy, powder visibility
 */

const W_DEFAULT = 38
const H_RATIO = 5.8

interface Sachet3DProps {
  bandColor: string
  bandLight: string
  bandDark: string
  name: string
  taste: string
  angle?: number
  size?: number
  torn?: boolean  // show powder spilling out
}

export default function Sachet3D({
  bandColor,
  bandLight,
  bandDark,
  name,
  taste,
  angle = 0,
  size = W_DEFAULT,
  torn = false,
}: Sachet3DProps) {
  const w = size
  const h = Math.round(size * H_RATIO)

  return (
    <div style={{
      width: w,
      height: h,
      position: 'relative',
      transform: `rotate(${angle}deg)`,
    }}>
      {/* Shadow */}
      <div style={{
        position: 'absolute',
        bottom: -6, left: 4, right: 4, height: 10,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,0,0,0.18) 0%, transparent 70%)',
        filter: 'blur(4px)',
      }} />

      {/* Powder spill — if torn */}
      {torn && (
        <>
          {/* Main powder cloud */}
          <div style={{
            position: 'absolute',
            top: -20, left: '-30%', right: '-30%',
            height: 40,
            background: `radial-gradient(ellipse at 50% 90%, ${bandColor} 0%, ${bandLight} 25%, transparent 65%)`,
            filter: 'blur(4px)',
            opacity: 0.85,
            zIndex: 2,
          }} />
          {/* Powder particles */}
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              top: -8 - i * 3,
              left: `${15 + i * 12}%`,
              width: 3 + (i % 3),
              height: 3 + (i % 3),
              borderRadius: '50%',
              background: i % 2 === 0 ? bandColor : bandLight,
              opacity: 0.6 - i * 0.05,
              zIndex: 3,
            }} />
          ))}
        </>
      )}

      {/* Main body */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: torn ? '2px 2px 3px 3px' : '4px 4px 3px 3px',
        position: 'relative',
        overflow: 'hidden',
        // SHINY white base — glossy foil feel
        background: `linear-gradient(
          100deg,
          #F0EDEA 0%,
          #F8F7F5 8%,
          #FFFFFF 20%,
          #FEFEFE 35%,
          #FFFFFF 50%,
          #FCFBFA 65%,
          #F8F6F4 80%,
          #F3F0ED 100%
        )`,
        // Glossy shadow — more pronounced for shiny feel
        boxShadow: `
          2px 6px 16px rgba(0,0,0,0.12),
          1px 2px 5px rgba(0,0,0,0.08),
          inset -2px 0 6px rgba(0,0,0,0.04),
          inset 3px 0 8px rgba(255,255,255,0.9),
          inset 0 2px 4px rgba(255,255,255,0.7)
        `,
      }}>

        {/* === SHINY FOIL HIGHLIGHTS === */}
        {/* Primary gloss — STRONG hot spot */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(
            ${95 + angle * 0.3}deg,
            transparent 0%,
            transparent 10%,
            rgba(255,255,255,0.25) 20%,
            rgba(255,255,255,0.55) 30%,
            rgba(255,255,255,0.75) 35%,
            rgba(255,255,255,0.55) 40%,
            rgba(255,255,255,0.25) 50%,
            transparent 65%,
            transparent 100%
          )`,
          pointerEvents: 'none',
        }} />

        {/* Secondary shimmer — lower on sachet */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(
            ${140 + angle * 0.2}deg,
            transparent 50%,
            rgba(255,255,255,0.1) 65%,
            rgba(255,255,255,0.25) 72%,
            rgba(255,255,255,0.1) 78%,
            transparent 90%
          )`,
          pointerEvents: 'none',
        }} />

        {/* Secondary gloss — edge catch */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: 3, height: '100%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0.7) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Right edge — subtle dark for cylinder */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: 5, height: '100%',
          background: 'linear-gradient(270deg, rgba(0,0,0,0.08), rgba(0,0,0,0.02), transparent)',
          pointerEvents: 'none',
        }} />

        {/* === COLOR BAND — left 40% with BRIGHTER pastels === */}
        <div style={{
          position: 'absolute', top: torn ? 4 : 12, left: 0, width: '42%', bottom: 12,
          background: `linear-gradient(
            180deg,
            ${bandLight} 0%,
            ${bandColor} 30%,
            ${bandColor} 70%,
            ${bandLight} 100%
          )`,
          borderRadius: '0 3px 3px 0',
        }}>
          {/* HORIZONTAL lines on the band — bold, visible */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 4px,
              rgba(255,255,255,0.4) 4px,
              rgba(255,255,255,0.4) 5.5px
            )`,
          }} />

          {/* Band gloss — shiny reflection on the color area */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(
              90deg,
              transparent 0%,
              rgba(255,255,255,0.2) 30%,
              rgba(255,255,255,0.35) 45%,
              rgba(255,255,255,0.2) 60%,
              transparent 100%
            )`,
          }} />

          {/* Watery shimmer — subtle blue-ish reflection at bottom of band */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
            background: `linear-gradient(0deg, rgba(180,220,240,0.15) 0%, transparent 100%)`,
            borderRadius: '0 0 3px 0',
          }} />
        </div>

        {/* === WATERY ENERGY — subtle aqua shimmer across white area === */}
        <div style={{
          position: 'absolute', bottom: '15%', left: '40%', right: 0, height: '25%',
          background: `linear-gradient(0deg, rgba(180,230,220,0.08) 0%, transparent 100%)`,
          pointerEvents: 'none',
        }} />

        {/* === TOP CRIMP SEAL === */}
        {!torn && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 12,
            background: 'linear-gradient(180deg, #E5E1DD 0%, #EDEBE8 40%, #F5F2EE 100%)',
            borderBottom: '0.5px solid rgba(0,0,0,0.1)',
          }}>
            <div style={{
              position: 'absolute', bottom: 0, left: 2, right: 2, height: 5,
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1.5px, transparent 1.5px, transparent 3px)',
            }} />
          </div>
        )}

        {/* Torn top — if powder spilling */}
        {torn && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 6,
            background: `linear-gradient(180deg, ${bandColor} 0%, #F5F2EE 100%)`,
            clipPath: 'polygon(0% 0%, 8% 60%, 15% 20%, 25% 80%, 35% 30%, 45% 70%, 55% 10%, 65% 60%, 75% 25%, 85% 75%, 92% 15%, 100% 50%, 100% 100%, 0% 100%)',
          }} />
        )}

        {/* === BOTTOM CRIMP SEAL === */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 12,
          background: 'linear-gradient(0deg, #E5E1DD 0%, #EDEBE8 40%, #F5F2EE 100%)',
          borderTop: '0.5px solid rgba(0,0,0,0.1)',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 2, right: 2, height: 5,
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1.5px, transparent 1.5px, transparent 3px)',
          }} />
        </div>

        {/* === BRAND + CLAIMS (rotated) === */}
        <div style={{
          position: 'absolute', top: '50%', left: '58%',
          transform: 'translate(-50%, -50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
        }}>
          <p style={{
            color: '#1A1A1A', fontSize: Math.max(6, size * 0.2), fontWeight: 800,
            letterSpacing: 2, fontFamily: 'var(--font-space-grotesk), system-ui',
          }}>
            FIGURING OUT.
          </p>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ color: '#5A5A5A', fontSize: Math.max(3, size * 0.09), fontWeight: 600, letterSpacing: 0.5, fontFamily: 'system-ui' }}>0g SUGAR</span>
            <span style={{ color: '#B0B0B0', fontSize: Math.max(2, size * 0.06) }}>•</span>
            <span style={{ color: '#5A5A5A', fontSize: Math.max(3, size * 0.09), fontWeight: 600, letterSpacing: 0.5, fontFamily: 'system-ui' }}>ELECTROLYTES</span>
            <span style={{ color: '#B0B0B0', fontSize: Math.max(2, size * 0.06) }}>•</span>
            <span style={{ color: '#5A5A5A', fontSize: Math.max(3, size * 0.09), fontWeight: 600, letterSpacing: 0.5, fontFamily: 'system-ui' }}>VEGAN</span>
          </div>
        </div>

        {/* === FLAVOR NAME on band (rotated) === */}
        <div style={{
          position: 'absolute', top: '50%', left: '14%',
          transform: 'translate(-50%, -50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            color: bandDark, fontSize: Math.max(3.5, size * 0.11), fontWeight: 800,
            letterSpacing: 0.6, fontFamily: 'var(--font-space-grotesk), system-ui',
          }}>
            {name.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  )
}

// Vibrant pastels + deeper darks
export const sachetColors: Record<string, { bandColor: string; bandLight: string; bandDark: string }> = {
  'broke-but-hydrated': { bandColor: '#F0A0C0', bandLight: '#FCD0E0', bandDark: '#6A2048' },
  'hot-ex':             { bandColor: '#F5B088', bandLight: '#FFD8B8', bandDark: '#6A3010' },
  'clarity':            { bandColor: '#70D4C0', bandLight: '#B0F0E0', bandDark: '#105840' },
}
