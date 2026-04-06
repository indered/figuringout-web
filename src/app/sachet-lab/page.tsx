'use client'

/**
 * Sachet Lab — Comprehensive exploration
 * Sections:
 * 1. Shine (approved)
 * 2. Powder spill (realistic granular scatter)
 * 3. Color options (10 numbered)
 * 4. Line patterns (horizontal, vertical, split-h, split-v)
 * 5. Shade options
 * 6. Watery energy experiments
 */

const W = 50
const H = Math.round(W * 5.8)

// ===== BASE SACHET =====
function Sachet({
  bandColor,
  bandLight,
  bandDark,
  name,
  angle = 0,
  linePattern = 'horizontal',
  shade = 'white',
  waterEffect = false,
  torn = false,
  label,
}: {
  bandColor: string
  bandLight: string
  bandDark: string
  name: string
  angle?: number
  linePattern?: 'horizontal' | 'vertical' | 'split-v' | 'split-h'
  shade?: 'white' | 'cream' | 'pearl' | 'silver'
  waterEffect?: boolean
  torn?: boolean
  label?: string
}) {
  const shadeBg: Record<string, string> = {
    white: 'linear-gradient(100deg, #F0EDEA 0%, #F8F7F5 8%, #FFFFFF 20%, #FFFFFF 50%, #F8F6F4 80%, #F3F0ED 100%)',
    cream: 'linear-gradient(100deg, #F5F0E8 0%, #FAF5ED 10%, #FFF8F0 30%, #FFF8F0 50%, #FAF5ED 80%, #F0EBE2 100%)',
    pearl: 'linear-gradient(100deg, #F0F0F5 0%, #F5F5FA 10%, #FAFAFF 30%, #FFFFFF 50%, #F5F5FA 80%, #EEEFF5 100%)',
    silver: 'linear-gradient(100deg, #E8E8E8 0%, #F0F0F0 10%, #F8F8F8 30%, #FAFAFA 50%, #F0F0F0 80%, #E5E5E5 100%)',
  }

  const lineStyles: Record<string, string> = {
    horizontal: `repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.4) 4px, rgba(255,255,255,0.4) 5.5px)`,
    vertical: `repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.35) 4px, rgba(255,255,255,0.35) 5.5px)`,
    'split-v': `linear-gradient(90deg, ${bandColor} 50%, transparent 50%)`,
    'split-h': `linear-gradient(180deg, ${bandColor} 50%, transparent 50%)`,
  }

  // For split patterns, the band covers the full relevant half
  const isSplit = linePattern === 'split-v' || linePattern === 'split-h'

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{ width: W, height: H, position: 'relative', transform: `rotate(${angle}deg)` }}>
        {/* Shadow */}
        <div style={{
          position: 'absolute', bottom: -6, left: 4, right: 4, height: 10,
          borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(0,0,0,0.18) 0%, transparent 70%)',
          filter: 'blur(4px)',
        }} />

        {/* Powder scatter — realistic granular */}
        {torn && (
          <div style={{ position: 'absolute', top: -35, left: '-60%', width: '220%', height: 50, zIndex: 2 }}>
            {/* Base powder spread */}
            {[...Array(40)].map((_, i) => {
              const x = 20 + Math.sin(i * 2.7) * 35 + (i % 7) * 8
              const y = 30 - Math.cos(i * 1.3) * 15 - (i % 5) * 4
              const s = 1 + (i % 4) * 0.8
              const opacity = 0.3 + (i % 3) * 0.15
              const isLight = i % 3 === 0
              return (
                <div key={i} style={{
                  position: 'absolute',
                  left: `${x}%`,
                  top: y,
                  width: s,
                  height: s,
                  borderRadius: '50%',
                  background: isLight ? bandLight : bandColor,
                  opacity,
                }} />
              )
            })}
            {/* Larger powder chunks */}
            {[...Array(12)].map((_, i) => {
              const x = 25 + (i * 5.5) + Math.sin(i) * 10
              const y = 28 - (i % 4) * 6
              const s = 2 + (i % 3) * 1.5
              return (
                <div key={`c${i}`} style={{
                  position: 'absolute',
                  left: `${x}%`,
                  top: y,
                  width: s,
                  height: s * 0.7,
                  borderRadius: '40%',
                  background: i % 2 === 0 ? bandColor : bandLight,
                  opacity: 0.5 + (i % 3) * 0.1,
                  filter: 'blur(0.3px)',
                }} />
              )
            })}
            {/* Soft powder dust cloud behind */}
            <div style={{
              position: 'absolute', left: '15%', right: '15%', bottom: 5, height: 20,
              background: `radial-gradient(ellipse at 50% 80%, ${bandLight}60 0%, transparent 70%)`,
              filter: 'blur(5px)',
            }} />
          </div>
        )}

        {/* Body */}
        <div style={{
          width: '100%', height: '100%',
          borderRadius: torn ? '1px 1px 3px 3px' : '4px 4px 3px 3px',
          position: 'relative', overflow: 'hidden',
          background: shadeBg[shade],
          boxShadow: `2px 6px 16px rgba(0,0,0,0.12), 1px 2px 5px rgba(0,0,0,0.08), inset -2px 0 6px rgba(0,0,0,0.04), inset 3px 0 8px rgba(255,255,255,0.9), inset 0 2px 4px rgba(255,255,255,0.7)`,
        }}>
          {/* Gloss */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(${95 + angle * 0.3}deg, transparent 0%, transparent 10%, rgba(255,255,255,0.25) 20%, rgba(255,255,255,0.55) 30%, rgba(255,255,255,0.75) 35%, rgba(255,255,255,0.55) 40%, rgba(255,255,255,0.25) 50%, transparent 65%, transparent 100%)`,
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(${140 + angle * 0.2}deg, transparent 50%, rgba(255,255,255,0.1) 65%, rgba(255,255,255,0.25) 72%, rgba(255,255,255,0.1) 78%, transparent 90%)`,
            pointerEvents: 'none',
          }} />

          {/* Left edge highlight */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: 3, height: '100%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0.7) 100%)',
            pointerEvents: 'none',
          }} />

          {/* Right edge shadow */}
          <div style={{
            position: 'absolute', top: 0, right: 0, width: 5, height: '100%',
            background: 'linear-gradient(270deg, rgba(0,0,0,0.08), rgba(0,0,0,0.02), transparent)',
            pointerEvents: 'none',
          }} />

          {/* Color band */}
          {isSplit ? (
            <div style={{
              position: 'absolute', top: 12, left: 0,
              width: linePattern === 'split-v' ? '50%' : '100%',
              height: linePattern === 'split-h' ? '50%' : 'calc(100% - 24px)',
              bottom: linePattern === 'split-v' ? 12 : undefined,
              background: `linear-gradient(180deg, ${bandLight} 0%, ${bandColor} 30%, ${bandColor} 70%, ${bandLight} 100%)`,
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.2) 60%, transparent 100%)`,
              }} />
            </div>
          ) : (
            <div style={{
              position: 'absolute', top: 12, left: 0, width: '42%', bottom: 12,
              background: `linear-gradient(180deg, ${bandLight} 0%, ${bandColor} 30%, ${bandColor} 70%, ${bandLight} 100%)`,
              borderRadius: '0 3px 3px 0',
            }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: lineStyles[linePattern] }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.2) 60%, transparent 100%)`,
              }} />
            </div>
          )}

          {/* Watery energy effect */}
          {waterEffect && (
            <>
              <div style={{
                position: 'absolute', bottom: '10%', left: '35%', right: 0, height: '35%',
                background: 'linear-gradient(0deg, rgba(100,210,220,0.15) 0%, rgba(130,220,230,0.08) 50%, transparent 100%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', bottom: '20%', left: '45%', right: '10%', height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(100,210,220,0.3), transparent)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', bottom: '28%', left: '50%', right: '5%', height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(100,210,220,0.2), transparent)',
                pointerEvents: 'none',
              }} />
            </>
          )}

          {/* Top crimp */}
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
          {torn && (
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 6,
              background: `linear-gradient(180deg, ${bandColor} 0%, #F5F2EE 100%)`,
              clipPath: 'polygon(0% 0%, 8% 70%, 18% 20%, 28% 80%, 38% 30%, 48% 70%, 58% 10%, 68% 60%, 78% 25%, 88% 75%, 95% 15%, 100% 50%, 100% 100%, 0% 100%)',
            }} />
          )}

          {/* Bottom crimp */}
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

          {/* Brand text (rotated) */}
          <div style={{
            position: 'absolute', top: '42%', left: '58%',
            transform: 'translate(-50%, -50%) rotate(-90deg)',
            whiteSpace: 'nowrap',
          }}>
            <p style={{ color: '#1A1A1A', fontSize: 8, fontWeight: 800, letterSpacing: 2, fontFamily: 'var(--font-space-grotesk), system-ui' }}>
              FIGURING OUT.
            </p>
          </div>

          {/* Flavor name on band */}
          <div style={{
            position: 'absolute', top: '50%', left: isSplit ? '20%' : '14%',
            transform: 'translate(-50%, -50%) rotate(-90deg)',
            whiteSpace: 'nowrap',
          }}>
            <p style={{
              color: isSplit ? 'white' : bandDark,
              fontSize: 4.5, fontWeight: 800, letterSpacing: 0.5,
              fontFamily: 'var(--font-space-grotesk), system-ui',
              textShadow: isSplit ? '0 1px 2px rgba(0,0,0,0.2)' : 'none',
            }}>
              {name.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
      {label && <p style={{ fontSize: 8, color: '#6B7280', fontFamily: 'system-ui', textAlign: 'center' }}>{label}</p>}
    </div>
  )
}

// ===== COLOR OPTIONS =====
const colorOptions = [
  { n: 1, name: 'Rose Pink', bandColor: '#F0A0C0', bandLight: '#FCD0E0', bandDark: '#6A2048' },
  { n: 2, name: 'Blush', bandColor: '#F5C0C8', bandLight: '#FFE0E5', bandDark: '#8A4050' },
  { n: 3, name: 'Coral', bandColor: '#F5A080', bandLight: '#FFD0B8', bandDark: '#7A3010' },
  { n: 4, name: 'Peach', bandColor: '#F5C898', bandLight: '#FFE8D0', bandDark: '#6A4020' },
  { n: 5, name: 'Marigold', bandColor: '#F0D080', bandLight: '#FFF0C0', bandDark: '#6A5010' },
  { n: 6, name: 'Sage', bandColor: '#A8D8B8', bandLight: '#D0F0D8', bandDark: '#2A5838' },
  { n: 7, name: 'Mint Teal', bandColor: '#70D4C0', bandLight: '#B0F0E0', bandDark: '#105840' },
  { n: 8, name: 'Sky', bandColor: '#90C8E8', bandLight: '#C0E0F8', bandDark: '#1A4060' },
  { n: 9, name: 'Lavender', bandColor: '#C0A8E0', bandLight: '#E0D0F8', bandDark: '#4A2870' },
  { n: 10, name: 'Lilac', bandColor: '#D8B0D8', bandLight: '#F0D8F0', bandDark: '#5A3060' },
]

function SectionTitle({ children, color = '#14B8A6' }: { children: React.ReactNode; color?: string }) {
  return <p style={{ color, fontSize: 11, fontWeight: 700, letterSpacing: 3, marginBottom: 8, fontFamily: 'system-ui', textTransform: 'uppercase' }}>{children}</p>
}
function SectionDesc({ children }: { children: React.ReactNode }) {
  return <p style={{ color: '#6B7280', fontSize: 10, marginBottom: 20, fontFamily: 'system-ui', lineHeight: 1.5 }}>{children}</p>
}

export default function SachetLab() {
  return (
    <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh', padding: '40px 16px 80px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <h1 style={{ color: '#1A1A1A', fontSize: 24, fontWeight: 700, textAlign: 'center', marginBottom: 6, fontFamily: 'system-ui' }}>
          Sachet Lab
        </h1>
        <p style={{ color: '#6B7280', fontSize: 11, textAlign: 'center', marginBottom: 50, fontFamily: 'system-ui' }}>
          Comprehensive exploration. Each section numbered for feedback.
        </p>

        {/* ===== SECTION 2: POWDER SPILL ===== */}
        <div style={{ marginBottom: 60 }}>
          <SectionTitle color="#E06080">2. Powder Spill</SectionTitle>
          <SectionDesc>Realistic granular scatter — individual particles, chunks, and dust cloud. Like Humantra&apos;s product photos.</SectionDesc>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <Sachet bandColor="#F0A0C0" bandLight="#FCD0E0" bandDark="#6A2048" name="Broke But Hydrated" angle={-25} torn={true} label="Torn + powder" />
            <Sachet bandColor="#70D4C0" bandLight="#B0F0E0" bandDark="#105840" name="Clarity" angle={-15} torn={true} label="Torn + powder" />
          </div>
        </div>

        {/* ===== SECTION 3: COLOR OPTIONS ===== */}
        <div style={{ marginBottom: 60 }}>
          <SectionTitle color="#CA8A04">3. Color Options (10)</SectionTitle>
          <SectionDesc>Brighter and pastel variations. Pick your favorites by number.</SectionDesc>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {colorOptions.map(c => (
              <Sachet key={c.n} bandColor={c.bandColor} bandLight={c.bandLight} bandDark={c.bandDark} name={c.name} angle={-5} label={`#${c.n} ${c.name}`} />
            ))}
          </div>
        </div>

        {/* ===== SECTION 4: LINE PATTERNS ===== */}
        <div style={{ marginBottom: 60 }}>
          <SectionTitle color="#8B5CF6">4. Line Patterns</SectionTitle>
          <SectionDesc>Same color, four different patterns. Compare side by side.</SectionDesc>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <Sachet bandColor="#70D4C0" bandLight="#B0F0E0" bandDark="#105840" name="Clarity" angle={-5} linePattern="horizontal" label="4A. Horizontal" />
            <Sachet bandColor="#70D4C0" bandLight="#B0F0E0" bandDark="#105840" name="Clarity" angle={-5} linePattern="vertical" label="4B. Vertical" />
            <Sachet bandColor="#70D4C0" bandLight="#B0F0E0" bandDark="#105840" name="Clarity" angle={-5} linePattern="split-v" label="4C. Split Vertical" />
            <Sachet bandColor="#70D4C0" bandLight="#B0F0E0" bandDark="#105840" name="Clarity" angle={-5} linePattern="split-h" label="4D. Split Horizontal" />
          </div>
        </div>

        {/* ===== SECTION 5: SHADE OPTIONS ===== */}
        <div style={{ marginBottom: 60 }}>
          <SectionTitle color="#44403C">5. Body Shade Options</SectionTitle>
          <SectionDesc>The white area can be different tones. Same color band, different base.</SectionDesc>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <Sachet bandColor="#F0A0C0" bandLight="#FCD0E0" bandDark="#6A2048" name="BBH" angle={-5} shade="white" label="5A. White" />
            <Sachet bandColor="#F0A0C0" bandLight="#FCD0E0" bandDark="#6A2048" name="BBH" angle={-5} shade="cream" label="5B. Cream" />
            <Sachet bandColor="#F0A0C0" bandLight="#FCD0E0" bandDark="#6A2048" name="BBH" angle={-5} shade="pearl" label="5C. Pearl" />
            <Sachet bandColor="#F0A0C0" bandLight="#FCD0E0" bandDark="#6A2048" name="BBH" angle={-5} shade="silver" label="5D. Silver" />
          </div>
        </div>

        {/* ===== SECTION 6: WATERY ENERGY ===== */}
        <div style={{ marginBottom: 60 }}>
          <SectionTitle color="#0891B2">6. Watery Energy Experiments</SectionTitle>
          <SectionDesc>Aqua shimmer, water ripple lines, blue-green tint on the white area.</SectionDesc>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <Sachet bandColor="#70D4C0" bandLight="#B0F0E0" bandDark="#105840" name="Clarity" angle={-5} waterEffect={false} label="6A. No water" />
            <Sachet bandColor="#70D4C0" bandLight="#B0F0E0" bandDark="#105840" name="Clarity" angle={-5} waterEffect={true} label="6B. Aqua shimmer" />
            <Sachet bandColor="#90C8E8" bandLight="#C0E0F8" bandDark="#1A4060" name="Clarity" angle={-5} waterEffect={true} shade="pearl" label="6C. Sky + pearl + water" />
          </div>
        </div>
      </div>
    </div>
  )
}
