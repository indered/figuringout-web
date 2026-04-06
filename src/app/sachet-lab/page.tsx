'use client'

/**
 * Sachet Lab — CSS 3D sachet explorations
 * Real stick pack proportions: 30mm x 130mm (1:4.3 ratio)
 * 3 concepts to compare side by side
 */

import { coreFlavors } from '@/data/flavors'

// Real stick pack dimensions scaled for screen
const W = 100 // px width
const H = 430 // px height (1:4.3 ratio)

function SachetA({ color, name, rotate = 0 }: { color: string; name: string; rotate?: number }) {
  // Concept A: "Matte Foil" — dark body, flavor color bottom third, clean type
  return (
    <div
      style={{
        width: W,
        height: H,
        borderRadius: '6px 6px 4px 4px',
        position: 'relative',
        overflow: 'hidden',
        transform: `perspective(800px) rotateY(${rotate}deg) rotateX(2deg)`,
        transformStyle: 'preserve-3d',
        // Matte dark base
        background: `linear-gradient(180deg,
          #1A1A1A 0%,
          #1A1A1A 60%,
          ${color}22 70%,
          ${color} 100%
        )`,
        // Realistic shadow
        boxShadow: `
          ${rotate < 0 ? '8' : '-8'}px 12px 30px rgba(0,0,0,0.4),
          ${rotate < 0 ? '3' : '-3'}px 4px 8px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.06),
          inset 0 -1px 0 rgba(0,0,0,0.3)
        `,
      }}
    >
      {/* Top seal — heat sealed edge */}
      <div style={{
        height: 8,
        background: 'rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }} />

      {/* Tear notch */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 18,
        width: 0,
        height: 0,
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderTop: `6px solid ${color}`,
      }} />

      {/* Foil highlight — diagonal */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: 30,
        height: '100%',
        background: 'linear-gradient(160deg, transparent 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.04) 60%, transparent 100%)',
      }} />

      {/* Left edge highlight */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 3,
        height: '100%',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
      }} />

      {/* Content */}
      <div style={{
        padding: '30px 12px 20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Brand */}
        <div>
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: 7,
            fontWeight: 700,
            letterSpacing: 2.5,
            textAlign: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}>
            FIGURING OUT.
          </p>
          <div style={{
            width: 20,
            height: 0.5,
            background: 'rgba(255,255,255,0.15)',
            margin: '8px auto',
          }} />
        </div>

        {/* Flavor name — the hero */}
        <div style={{ textAlign: 'center' }}>
          {name.split(' ').map((word, i) => (
            <p key={i} style={{
              color: 'white',
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 0.5,
              lineHeight: 1.3,
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}>
              {word.toUpperCase()}
            </p>
          ))}
          <p style={{
            color: 'rgba(255,255,255,0.35)',
            fontSize: 5.5,
            fontWeight: 500,
            letterSpacing: 2.5,
            marginTop: 10,
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}>
            ELECTROLYTE MIX
          </p>
        </div>

        {/* Bottom */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            color: 'rgba(255,255,255,0.2)',
            fontSize: 5,
            letterSpacing: 1,
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}>
            NET WT 6g
          </p>
        </div>
      </div>

      {/* Bottom seal */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 6,
        background: 'rgba(0,0,0,0.15)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }} />

      {/* Flavor color stripe at very bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 3,
        background: color,
      }} />
    </div>
  )
}

function SachetB({ color, name, rotate = 0 }: { color: string; name: string; rotate?: number }) {
  // Concept B: "Bold Color" — full flavor color body, white text, LMNT-inspired
  return (
    <div
      style={{
        width: W,
        height: H,
        borderRadius: '6px 6px 4px 4px',
        position: 'relative',
        overflow: 'hidden',
        transform: `perspective(800px) rotateY(${rotate}deg) rotateX(2deg)`,
        transformStyle: 'preserve-3d',
        background: `linear-gradient(180deg,
          ${color} 0%,
          ${color} 85%,
          ${color}CC 100%
        )`,
        boxShadow: `
          ${rotate < 0 ? '8' : '-8'}px 12px 30px rgba(0,0,0,0.35),
          ${rotate < 0 ? '3' : '-3'}px 4px 8px rgba(0,0,0,0.15),
          inset 0 1px 0 rgba(255,255,255,0.15),
          inset 0 -1px 0 rgba(0,0,0,0.2)
        `,
      }}
    >
      {/* Top seal */}
      <div style={{ height: 8, background: 'rgba(0,0,0,0.1)' }} />

      {/* Dark overlay top half — depth */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '45%',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)',
      }} />

      {/* Foil highlight */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 8,
        width: 18,
        height: '100%',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08) 100%)',
      }} />

      {/* Content */}
      <div style={{
        padding: '30px 12px 20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 1,
      }}>
        <div>
          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: 7,
            fontWeight: 700,
            letterSpacing: 2.5,
            textAlign: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}>
            FIGURING OUT.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          {name.split(' ').map((word, i) => (
            <p key={i} style={{
              color: 'white',
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 0.3,
              lineHeight: 1.25,
              fontFamily: 'system-ui, -apple-system, sans-serif',
              textShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}>
              {word.toUpperCase()}
            </p>
          ))}
          <p style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: 5.5,
            letterSpacing: 2.5,
            marginTop: 10,
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}>
            ELECTROLYTE MIX
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{
            color: 'rgba(255,255,255,0.3)',
            fontSize: 5,
            letterSpacing: 1,
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}>
            NET WT 6g
          </p>
        </div>
      </div>

      {/* Bottom seal */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 6,
        background: 'rgba(0,0,0,0.15)',
      }} />
    </div>
  )
}

function SachetC({ color, name, rotate = 0 }: { color: string; name: string; rotate?: number }) {
  // Concept C: "Split" — dark top half, color bottom half, white brand area in center
  return (
    <div
      style={{
        width: W,
        height: H,
        borderRadius: '6px 6px 4px 4px',
        position: 'relative',
        overflow: 'hidden',
        transform: `perspective(800px) rotateY(${rotate}deg) rotateX(2deg)`,
        transformStyle: 'preserve-3d',
        background: '#1A1A1A',
        boxShadow: `
          ${rotate < 0 ? '8' : '-8'}px 12px 30px rgba(0,0,0,0.4),
          ${rotate < 0 ? '3' : '-3'}px 4px 8px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.06)
        `,
      }}
    >
      {/* Top seal */}
      <div style={{ height: 8, background: 'rgba(255,255,255,0.03)' }} />

      {/* Color bottom half */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '45%',
        background: `linear-gradient(180deg, ${color}88 0%, ${color} 40%)`,
      }} />

      {/* White label area — center */}
      <div style={{
        position: 'absolute',
        top: '28%',
        left: 10,
        right: 10,
        height: '30%',
        background: 'rgba(255,255,255,0.95)',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 6px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
      }}>
        <p style={{
          color: '#1A1A1A',
          fontSize: 6.5,
          fontWeight: 700,
          letterSpacing: 2,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          marginBottom: 6,
        }}>
          FIGURING OUT.
        </p>
        {name.split(' ').map((word, i) => (
          <p key={i} style={{
            color,
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: 0.3,
            lineHeight: 1.3,
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}>
            {word.toUpperCase()}
          </p>
        ))}
      </div>

      {/* Foil highlight */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: 25,
        height: '100%',
        background: 'linear-gradient(160deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',
      }} />

      {/* Bottom detail */}
      <div style={{
        position: 'absolute',
        bottom: 15,
        left: 0,
        right: 0,
        textAlign: 'center',
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: 5,
          letterSpacing: 2,
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}>
          ELECTROLYTE MIX
        </p>
        <p style={{
          color: 'rgba(255,255,255,0.25)',
          fontSize: 4.5,
          letterSpacing: 1,
          marginTop: 4,
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}>
          NET WT 6g
        </p>
      </div>
    </div>
  )
}

export default function SachetLab() {
  const f = coreFlavors

  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh', padding: '40px 16px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ color: '#F5F5F5', fontSize: 20, fontWeight: 700, marginBottom: 4, fontFamily: 'system-ui' }}>
          Sachet Lab
        </h1>
        <p style={{ color: '#6B7280', fontSize: 12, marginBottom: 40, fontFamily: 'system-ui' }}>
          3 concepts × 3 flavors. CSS 3D with perspective, foil, shadows.
        </p>

        {/* Concept A: Matte Foil */}
        <div style={{ marginBottom: 60 }}>
          <p style={{ color: '#14B8A6', fontSize: 11, fontWeight: 600, letterSpacing: 2, marginBottom: 20, fontFamily: 'system-ui' }}>
            CONCEPT A — MATTE FOIL
          </p>
          <p style={{ color: '#6B7280', fontSize: 10, marginBottom: 20, fontFamily: 'system-ui' }}>
            Dark matte body. Flavor color bleeds in from bottom. Restrained. AG1 energy.
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 20 }}>
            <SachetA color={f[0]?.color || '#8B5CF6'} name={f[0]?.name || ''} rotate={-8} />
            <div style={{ transform: 'translateY(-20px)' }}>
              <SachetA color={f[2]?.color || '#14B8A6'} name={f[2]?.name || ''} rotate={0} />
            </div>
            <SachetA color={f[1]?.color || '#FF4D00'} name={f[1]?.name || ''} rotate={8} />
          </div>
        </div>

        {/* Concept B: Bold Color */}
        <div style={{ marginBottom: 60 }}>
          <p style={{ color: '#FFD700', fontSize: 11, fontWeight: 600, letterSpacing: 2, marginBottom: 20, fontFamily: 'system-ui' }}>
            CONCEPT B — BOLD COLOR
          </p>
          <p style={{ color: '#6B7280', fontSize: 10, marginBottom: 20, fontFamily: 'system-ui' }}>
            Full flavor color body. Bold and loud. LMNT energy. Each flavor owns its color completely.
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 20 }}>
            <SachetB color={f[0]?.color || '#8B5CF6'} name={f[0]?.name || ''} rotate={-8} />
            <div style={{ transform: 'translateY(-20px)' }}>
              <SachetB color={f[2]?.color || '#14B8A6'} name={f[2]?.name || ''} rotate={0} />
            </div>
            <SachetB color={f[1]?.color || '#FF4D00'} name={f[1]?.name || ''} rotate={8} />
          </div>
        </div>

        {/* Concept C: Split */}
        <div style={{ marginBottom: 60 }}>
          <p style={{ color: '#FF6B9D', fontSize: 11, fontWeight: 600, letterSpacing: 2, marginBottom: 20, fontFamily: 'system-ui' }}>
            CONCEPT C — SPLIT
          </p>
          <p style={{ color: '#6B7280', fontSize: 10, marginBottom: 20, fontFamily: 'system-ui' }}>
            Dark top, color bottom, white label center. Humantra meets luxury skincare. Most distinctive.
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 20 }}>
            <SachetC color={f[0]?.color || '#8B5CF6'} name={f[0]?.name || ''} rotate={-8} />
            <div style={{ transform: 'translateY(-20px)' }}>
              <SachetC color={f[2]?.color || '#14B8A6'} name={f[2]?.name || ''} rotate={0} />
            </div>
            <SachetC color={f[1]?.color || '#FF4D00'} name={f[1]?.name || ''} rotate={8} />
          </div>
        </div>
      </div>
    </div>
  )
}
