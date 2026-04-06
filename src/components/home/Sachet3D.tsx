/**
 * Premium Sachet — CSS 3D, based on real Humantra reference
 * White base, soft flavor color band, tube/pillow shape
 * Stick pack 1:5.8 ratio, crimped seals, diagonal stripe pattern
 */

const W_DEFAULT = 38
const H_RATIO = 5.8

interface Sachet3DProps {
  bandColor: string
  bandDark: string
  name: string
  taste: string
  angle?: number
  size?: number
}

export default function Sachet3D({
  bandColor,
  bandDark,
  name,
  taste,
  angle = 0,
  size = W_DEFAULT,
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
        bottom: -6,
        left: 4,
        right: 4,
        height: 8,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, transparent 70%)',
        filter: 'blur(3px)',
      }} />

      {/* Body */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '4px 4px 3px 3px',
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(90deg, #F5F2EE 0%, #FAFAF8 15%, #FFFFFF 40%, #FDFCFB 60%, #FAF9F7 80%, #F2EFEB 100%)`,
        boxShadow: `2px 4px 12px rgba(0,0,0,0.1), 1px 2px 4px rgba(0,0,0,0.06), inset -3px 0 8px rgba(0,0,0,0.03), inset 3px 0 6px rgba(255,255,255,0.8)`,
      }}>
        {/* Cylindrical highlight */}
        <div style={{
          position: 'absolute', top: 0, left: '30%', width: '25%', height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
          pointerEvents: 'none',
        }} />

        {/* Right edge shadow */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: 4, height: '100%',
          background: 'linear-gradient(270deg, rgba(0,0,0,0.06), transparent)',
          pointerEvents: 'none',
        }} />

        {/* Color band */}
        <div style={{
          position: 'absolute', top: 12, left: 0, width: '38%', bottom: 12,
          background: `linear-gradient(90deg, ${bandColor} 0%, ${bandColor} 70%, transparent 100%)`,
          borderRadius: '0 2px 2px 0',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(255,255,255,0.2) 2px, rgba(255,255,255,0.2) 3px)`,
          }} />
        </div>

        {/* Top crimp */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 12,
          background: 'linear-gradient(180deg, #E8E4E0 0%, #F0EDEA 50%, #F5F2EE 100%)',
          borderBottom: '0.5px solid rgba(0,0,0,0.08)',
        }}>
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 4,
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1.5px, transparent 1.5px, transparent 3.5px)',
          }} />
        </div>

        {/* Bottom crimp */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 12,
          background: 'linear-gradient(0deg, #E8E4E0 0%, #F0EDEA 50%, #F5F2EE 100%)',
          borderTop: '0.5px solid rgba(0,0,0,0.08)',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 4,
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1.5px, transparent 1.5px, transparent 3.5px)',
          }} />
        </div>

        {/* Brand + claims (rotated) */}
        <div style={{
          position: 'absolute', top: '50%', left: '55%',
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
            <span style={{ color: '#6B7280', fontSize: Math.max(3, size * 0.09), fontWeight: 600, letterSpacing: 0.5, fontFamily: 'system-ui' }}>0g SUGAR</span>
            <span style={{ color: '#6B7280', fontSize: Math.max(2, size * 0.06) }}>•</span>
            <span style={{ color: '#6B7280', fontSize: Math.max(3, size * 0.09), fontWeight: 600, letterSpacing: 0.5, fontFamily: 'system-ui' }}>ELECTROLYTES</span>
            <span style={{ color: '#6B7280', fontSize: Math.max(2, size * 0.06) }}>•</span>
            <span style={{ color: '#6B7280', fontSize: Math.max(3, size * 0.09), fontWeight: 600, letterSpacing: 0.5, fontFamily: 'system-ui' }}>VEGAN</span>
          </div>
        </div>

        {/* Flavor name on band (rotated) */}
        <div style={{
          position: 'absolute', top: '50%', left: '12%',
          transform: 'translate(-50%, -50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            color: bandDark, fontSize: Math.max(3, size * 0.1), fontWeight: 700,
            letterSpacing: 0.8, fontFamily: 'var(--font-space-grotesk), system-ui',
            mixBlendMode: 'multiply',
          }}>
            {name.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  )
}

// Flavor band colors — soft, muted, premium
export const sachetColors: Record<string, { bandColor: string; bandDark: string }> = {
  'broke-but-hydrated': { bandColor: '#D4A0B0', bandDark: '#8B5A6A' },
  'hot-ex': { bandColor: '#E8B090', bandDark: '#8B5A3A' },
  'clarity': { bandColor: '#90C8B8', bandDark: '#4A7868' },
}
