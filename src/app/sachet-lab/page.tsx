'use client'

/**
 * Sachet Lab v5 — Based on actual Humantra reference photos
 *
 * Key learnings from real product:
 * - Stick pack, ~1:6 ratio, very long and narrow
 * - WHITE base, flavor color as a band on one side
 * - Pillow/tube shape — has volume, slight organic curve
 * - Crimped sealed edges at both ends
 * - Shown at diagonal angle with realistic shadow
 * - Brand name bold across center
 */

const W = 38  // narrow — real sachets are ~22mm wide
const H = 220 // ~1:5.8 ratio

// Figuring Out flavor colors — soft, not garish
const flavors = [
  {
    name: 'Broke But Hydrated',
    taste: 'Berry & Pomegranate',
    bandColor: '#D4A0B0',   // soft dusty rose
    bandDark: '#B8849A',
  },
  {
    name: 'Hot Ex',
    taste: 'Citrus Energy',
    bandColor: '#E8B090',   // warm peach/terracotta
    bandDark: '#C89878',
  },
  {
    name: 'Clarity',
    taste: 'Himalayan Lime',
    bandColor: '#90C8B8',   // soft sage teal
    bandDark: '#70A898',
  },
]

function Sachet({
  name,
  taste,
  bandColor,
  bandDark,
  angle = 0,
}: {
  name: string
  taste: string
  bandColor: string
  bandDark: string
  angle?: number
}) {
  return (
    <div style={{
      width: W,
      height: H,
      position: 'relative',
      transform: `rotate(${angle}deg)`,
      transition: 'transform 0.4s ease',
    }}>
      {/* Drop shadow — follows angle */}
      <div style={{
        position: 'absolute',
        bottom: -6,
        left: 4,
        right: 4,
        height: 8,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,0,0,0.18) 0%, transparent 70%)',
        filter: 'blur(3px)',
      }} />

      {/* Sachet body — pillow/tube shape */}
      <div style={{
        width: '100%',
        height: '100%',
        // Pillow shape — more rounded on sides to simulate tube volume
        borderRadius: '4px 4px 3px 3px',
        position: 'relative',
        overflow: 'hidden',
        // White/cream base — like real Humantra
        background: `linear-gradient(
          90deg,
          #F5F2EE 0%,
          #FAFAF8 15%,
          #FFFFFF 40%,
          #FDFCFB 60%,
          #FAF9F7 80%,
          #F2EFEB 100%
        )`,
        // Multi-layer shadow for 3D tube feel
        boxShadow: `
          2px 4px 12px rgba(0,0,0,0.1),
          1px 2px 4px rgba(0,0,0,0.06),
          inset -3px 0 8px rgba(0,0,0,0.03),
          inset 3px 0 6px rgba(255,255,255,0.8)
        `,
      }}>

        {/* Cylindrical highlight — simulates tube volume */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '30%',
          width: '25%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
          pointerEvents: 'none',
        }} />

        {/* Right edge shadow — depth */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 4,
          height: '100%',
          background: 'linear-gradient(270deg, rgba(0,0,0,0.06), transparent)',
          pointerEvents: 'none',
        }} />

        {/* === FLAVOR COLOR BAND — left 35% === */}
        <div style={{
          position: 'absolute',
          top: 12,
          left: 0,
          width: '38%',
          bottom: 12,
          background: `linear-gradient(90deg, ${bandColor} 0%, ${bandColor} 70%, transparent 100%)`,
          borderRadius: '0 2px 2px 0',
        }}>
          {/* Diagonal lines pattern on the band */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.2) 2px,
              rgba(255,255,255,0.2) 3px
            )`,
          }} />
        </div>

        {/* === TOP CRIMP SEAL === */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 12,
          background: `linear-gradient(180deg, #E8E4E0 0%, #F0EDEA 50%, #F5F2EE 100%)`,
          borderBottom: '0.5px solid rgba(0,0,0,0.08)',
        }}>
          {/* Zigzag crimp pattern */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            backgroundImage: `repeating-linear-gradient(
              90deg,
              rgba(0,0,0,0.04) 0px,
              rgba(0,0,0,0.04) 1.5px,
              transparent 1.5px,
              transparent 3.5px
            )`,
          }} />
        </div>

        {/* === BOTTOM CRIMP SEAL === */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 12,
          background: `linear-gradient(0deg, #E8E4E0 0%, #F0EDEA 50%, #F5F2EE 100%)`,
          borderTop: '0.5px solid rgba(0,0,0,0.08)',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            backgroundImage: `repeating-linear-gradient(
              90deg,
              rgba(0,0,0,0.04) 0px,
              rgba(0,0,0,0.04) 1.5px,
              transparent 1.5px,
              transparent 3.5px
            )`,
          }} />
        </div>

        {/* === TEXT CONTENT (rotated 90deg — reads bottom to top like real sachets) === */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}>
          {/* Brand name */}
          <p style={{
            color: '#1A1A1A',
            fontSize: 8,
            fontWeight: 800,
            letterSpacing: 2,
            fontFamily: 'var(--font-space-grotesk), system-ui',
          }}>
            FIGURING OUT.
          </p>

          {/* Claims row */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ color: '#6B7280', fontSize: 3.5, fontWeight: 600, letterSpacing: 0.5, fontFamily: 'system-ui' }}>
              0g SUGAR
            </span>
            <span style={{ color: '#6B7280', fontSize: 2.5 }}>•</span>
            <span style={{ color: '#6B7280', fontSize: 3.5, fontWeight: 600, letterSpacing: 0.5, fontFamily: 'system-ui' }}>
              ELECTROLYTES
            </span>
            <span style={{ color: '#6B7280', fontSize: 2.5 }}>•</span>
            <span style={{ color: '#6B7280', fontSize: 3.5, fontWeight: 600, letterSpacing: 0.5, fontFamily: 'system-ui' }}>
              VEGAN
            </span>
          </div>
        </div>

        {/* Flavor name on the color band (also rotated) */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '12%',
          transform: 'translate(-50%, -50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            color: bandDark,
            fontSize: 3.8,
            fontWeight: 700,
            letterSpacing: 0.8,
            fontFamily: 'var(--font-space-grotesk), system-ui',
            mixBlendMode: 'multiply',
          }}>
            {name.toUpperCase()}
          </p>
          <p style={{
            color: bandDark,
            fontSize: 2.8,
            fontWeight: 500,
            letterSpacing: 0.5,
            marginTop: 2,
            fontFamily: 'system-ui',
            opacity: 0.7,
          }}>
            {taste}
          </p>
        </div>

        {/* Net weight on bottom area (rotated) */}
        <div style={{
          position: 'absolute',
          bottom: 20,
          left: '65%',
          transform: 'rotate(-90deg)',
          transformOrigin: 'left center',
        }}>
          <p style={{
            color: '#9CA3AF',
            fontSize: 2.5,
            letterSpacing: 0.5,
            fontFamily: 'system-ui',
          }}>
            Net Wt. 6g
          </p>
        </div>
      </div>
    </div>
  )
}

export default function SachetLab() {
  return (
    <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh', padding: '40px 16px' }}>
      <div style={{ maxWidth: 500, margin: '0 auto' }}>
        <p style={{ color: '#14B8A6', fontSize: 10, fontWeight: 600, letterSpacing: 3, marginBottom: 8, fontFamily: 'system-ui', textAlign: 'center' }}>
          SACHET LAB
        </p>
        <h1 style={{ color: '#1A1A1A', fontSize: 22, fontWeight: 700, textAlign: 'center', marginBottom: 6, fontFamily: 'system-ui' }}>
          The Sachet
        </h1>
        <p style={{ color: '#6B7280', fontSize: 11, textAlign: 'center', marginBottom: 50, fontFamily: 'system-ui', lineHeight: 1.5 }}>
          White matte foil. Soft flavor band. Tube shape.<br/>
          Based on Humantra reference.
        </p>

        {/* Fanned display — diagonal angles like Humantra hero shot */}
        <div style={{
          position: 'relative',
          height: 300,
          marginBottom: 60,
        }}>
          <div style={{ position: 'absolute', left: '10%', top: 30 }}>
            <Sachet {...flavors[0]} angle={-35} />
          </div>
          <div style={{ position: 'absolute', left: '35%', top: 10 }}>
            <Sachet {...flavors[2]} angle={-25} />
          </div>
          <div style={{ position: 'absolute', left: '58%', top: 0 }}>
            <Sachet {...flavors[1]} angle={-15} />
          </div>
        </div>

        {/* Upright display */}
        <p style={{ color: '#9CA3AF', fontSize: 10, textAlign: 'center', marginBottom: 20, fontFamily: 'system-ui' }}>
          Upright
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 16, marginBottom: 60 }}>
          {flavors.map((f, i) => (
            <Sachet key={f.name} {...f} angle={0} />
          ))}
        </div>

        {/* Single close-up */}
        <p style={{ color: '#9CA3AF', fontSize: 10, textAlign: 'center', marginBottom: 20, fontFamily: 'system-ui' }}>
          Close-up — 2.5x
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ transform: 'scale(2.5)', transformOrigin: 'top center' }}>
            <Sachet {...flavors[2]} angle={-20} />
          </div>
        </div>
      </div>
    </div>
  )
}
