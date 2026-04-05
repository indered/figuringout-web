import { type ReactElement } from 'react'
import { flavors } from '@/data/flavors'

// --- Font Loading ---

const FONT_URLS = {
  regular: 'https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUUsj.ttf',
  bold: 'https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksj.ttf',
}

let fontCacheRegular: ArrayBuffer | null = null
let fontCacheBold: ArrayBuffer | null = null

export async function getFonts(): Promise<{ regular: ArrayBuffer; bold: ArrayBuffer }> {
  if (!fontCacheRegular || !fontCacheBold) {
    const [regular, bold] = await Promise.all([
      fetch(FONT_URLS.regular).then(r => r.arrayBuffer()),
      fetch(FONT_URLS.bold).then(r => r.arrayBuffer()),
    ])
    fontCacheRegular = regular
    fontCacheBold = bold
  }
  return { regular: fontCacheRegular, bold: fontCacheBold }
}

export function getFontConfig(fonts: { regular: ArrayBuffer; bold: ArrayBuffer }) {
  return [
    { name: 'Space Grotesk', data: fonts.regular, weight: 400 as const, style: 'normal' as const },
    { name: 'Space Grotesk', data: fonts.bold, weight: 700 as const, style: 'normal' as const },
  ]
}

// --- Templates ---

export interface TemplateParams {
  caption: string
  flavor?: string
  accentColor?: string
  subtitle?: string
  slideNumber?: number
  totalSlides?: number
  theme?: string // 'a' or 'b'
}

// ============================================================
// OPTION A — "Neon Depth"
// Dark background, glowing accent orbs, layered depth effect
// ============================================================

function LogoLockupDark({ accent }: { accent: string }): ReactElement {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: 30, fontWeight: 700, color: '#F5F5F5', fontFamily: 'Space Grotesk' }}>
          Figuring Out
        </span>
        <div style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: accent,
          marginLeft: 4,
          marginTop: 10,
        }} />
      </div>
      <span style={{ fontSize: 20, color: '#6B7280', fontFamily: 'Space Grotesk' }}>
        figuringout.club
      </span>
    </div>
  )
}

export function QuoteTemplateA({ caption, accentColor }: TemplateParams): ReactElement {
  const accent = accentColor || '#14B8A6'

  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#0A0A0A',
      fontFamily: 'Space Grotesk',
    }}>
      {/* Large glowing orb top-right */}
      <div style={{
        position: 'absolute',
        top: -60,
        right: -60,
        width: 320,
        height: 320,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${accent}35 0%, ${accent}10 40%, transparent 70%)`,
      }} />

      {/* Medium orb bottom-left */}
      <div style={{
        position: 'absolute',
        bottom: 100,
        left: -40,
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${accent}20 0%, transparent 60%)`,
      }} />

      {/* Small floating sphere — faux 3D */}
      <div style={{
        position: 'absolute',
        top: 160,
        right: 140,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: `radial-gradient(circle at 35% 35%, ${accent}90, ${accent}40 50%, ${accent}10 100%)`,
        boxShadow: `0 8px 32px ${accent}40`,
      }} />

      {/* Tiny floating sphere */}
      <div style={{
        position: 'absolute',
        bottom: 240,
        left: 100,
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: `radial-gradient(circle at 35% 35%, ${accent}80, ${accent}20 60%, transparent 100%)`,
      }} />

      {/* Accent line left */}
      <div style={{
        position: 'absolute',
        top: 60,
        left: 60,
        width: 4,
        height: 80,
        backgroundColor: accent,
        borderRadius: 2,
      }} />

      {/* Caption */}
      <div style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 90px 60px',
      }}>
        <span style={{
          fontSize: caption.length > 80 ? 42 : caption.length > 40 ? 52 : 64,
          fontWeight: 700,
          color: '#F5F5F5',
          textAlign: 'center',
          lineHeight: 1.35,
          maxWidth: '90%',
        }}>
          {caption}
        </span>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex',
        padding: '24px 60px 40px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}>
        <LogoLockupDark accent={accent} />
      </div>
    </div>
  )
}

export function FlavorTemplateA({ caption, flavor, accentColor }: TemplateParams): ReactElement {
  const flavorData = flavor ? flavors.find(f => f.slug === flavor) : null
  const accent = accentColor || flavorData?.color || '#14B8A6'
  const flavorName = flavorData?.name || caption
  const tagline = flavorData?.tagline || caption
  const taste = flavorData?.taste || ''

  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#0A0A0A',
      fontFamily: 'Space Grotesk',
    }}>
      {/* Background gradient wash */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(ellipse at 50% 30%, ${accent}18 0%, transparent 60%)`,
      }} />

      {/* Large glowing sphere — faux 3D */}
      <div style={{
        position: 'absolute',
        top: 40,
        right: 50,
        width: 180,
        height: 180,
        borderRadius: '50%',
        background: `radial-gradient(circle at 35% 35%, ${accent}60, ${accent}25 50%, transparent 100%)`,
        boxShadow: `0 12px 48px ${accent}30`,
      }} />

      {/* Small sphere */}
      <div style={{
        position: 'absolute',
        top: 200,
        left: 80,
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: `radial-gradient(circle at 35% 35%, ${accent}70, ${accent}15 60%, transparent 100%)`,
      }} />

      {/* Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: '80px 80px 40px',
      }}>
        {/* Flavor color ring */}
        <div style={{
          width: 90,
          height: 90,
          borderRadius: '50%',
          border: `4px solid ${accent}`,
          background: `radial-gradient(circle at 35% 35%, ${accent}40, transparent 70%)`,
          marginBottom: 40,
          boxShadow: `0 0 40px ${accent}30`,
        }} />

        {/* Flavor name */}
        <span style={{
          fontSize: flavorName.length > 20 ? 52 : 68,
          fontWeight: 700,
          color: '#F5F5F5',
          textAlign: 'center',
          lineHeight: 1.2,
        }}>
          {flavorName}
        </span>

        {/* Taste */}
        {taste && (
          <span style={{
            fontSize: 26,
            color: accent,
            fontWeight: 600,
            marginTop: 16,
          }}>
            {taste}
          </span>
        )}

        {/* Tagline */}
        <span style={{
          fontSize: 28,
          color: '#9CA3AF',
          textAlign: 'center',
          marginTop: 24,
          maxWidth: '80%',
          lineHeight: 1.4,
        }}>
          {tagline}
        </span>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex',
        padding: '24px 60px 40px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}>
        <LogoLockupDark accent={accent} />
      </div>
    </div>
  )
}

export function CarouselTemplateA({ caption, subtitle, slideNumber, totalSlides, accentColor }: TemplateParams): ReactElement {
  const accent = accentColor || '#14B8A6'

  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#0A0A0A',
      fontFamily: 'Space Grotesk',
    }}>
      {/* Glow top-left */}
      <div style={{
        position: 'absolute',
        top: -80,
        left: -80,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${accent}20 0%, transparent 60%)`,
      }} />

      {/* Small sphere right */}
      <div style={{
        position: 'absolute',
        bottom: 200,
        right: 80,
        width: 36,
        height: 36,
        borderRadius: '50%',
        background: `radial-gradient(circle at 35% 35%, ${accent}70, ${accent}15 60%, transparent 100%)`,
      }} />

      {/* Top bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '48px 60px 0',
      }}>
        <div style={{
          width: 48,
          height: 4,
          backgroundColor: accent,
          borderRadius: 2,
          boxShadow: `0 0 12px ${accent}60`,
        }} />
        {slideNumber && totalSlides && (
          <span style={{
            fontSize: 22,
            color: '#6B7280',
            fontWeight: 500,
          }}>
            {slideNumber}/{totalSlides}
          </span>
        )}
      </div>

      {/* Caption */}
      <div style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '40px 80px',
      }}>
        <span style={{
          fontSize: caption.length > 100 ? 38 : caption.length > 60 ? 46 : 56,
          fontWeight: 700,
          color: '#F5F5F5',
          lineHeight: 1.3,
          maxWidth: '95%',
        }}>
          {caption}
        </span>

        {subtitle && (
          <span style={{
            fontSize: 26,
            color: '#9CA3AF',
            marginTop: 24,
            lineHeight: 1.4,
            maxWidth: '90%',
          }}>
            {subtitle}
          </span>
        )}
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex',
        padding: '24px 60px 40px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}>
        <LogoLockupDark accent={accent} />
      </div>
    </div>
  )
}


// ============================================================
// OPTION B — "Bold Blocks"
// Deep charcoal, sharp geometric blocks, accent color slabs,
// high contrast, editorial magazine feel
// ============================================================

export function QuoteTemplateB({ caption, accentColor }: TemplateParams): ReactElement {
  const accent = accentColor || '#14B8A6'

  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#111111',
      fontFamily: 'Space Grotesk',
    }}>
      {/* Bold accent block top-left */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        backgroundColor: accent,
        opacity: 0.9,
      }} />

      {/* Rotated square — faux 3D depth */}
      <div style={{
        position: 'absolute',
        top: 30,
        left: 30,
        width: 140,
        height: 140,
        backgroundColor: '#111111',
        opacity: 0.7,
        transform: 'rotate(15deg)',
      }} />

      {/* Bottom-right geometric block */}
      <div style={{
        position: 'absolute',
        bottom: 100,
        right: 0,
        width: 120,
        height: 300,
        backgroundColor: accent,
        opacity: 0.12,
      }} />

      {/* Horizontal rule accent */}
      <div style={{
        position: 'absolute',
        top: 240,
        right: 60,
        width: 100,
        height: 3,
        backgroundColor: accent,
      }} />

      {/* Small accent square */}
      <div style={{
        position: 'absolute',
        bottom: 200,
        left: 60,
        width: 16,
        height: 16,
        backgroundColor: accent,
      }} />

      {/* Caption */}
      <div style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 100px 60px',
      }}>
        <span style={{
          fontSize: caption.length > 80 ? 44 : caption.length > 40 ? 54 : 66,
          fontWeight: 700,
          color: '#FFFFFF',
          textAlign: 'center',
          lineHeight: 1.3,
          maxWidth: '85%',
          letterSpacing: -1,
        }}>
          {caption}
        </span>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex',
        padding: '24px 60px 40px',
        borderTop: `2px solid ${accent}`,
      }}>
        <LogoLockupDark accent={accent} />
      </div>
    </div>
  )
}

export function FlavorTemplateB({ caption, flavor, accentColor }: TemplateParams): ReactElement {
  const flavorData = flavor ? flavors.find(f => f.slug === flavor) : null
  const accent = accentColor || flavorData?.color || '#14B8A6'
  const flavorName = flavorData?.name || caption
  const tagline = flavorData?.tagline || caption
  const taste = flavorData?.taste || ''

  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#111111',
      fontFamily: 'Space Grotesk',
    }}>
      {/* Full-width accent slab */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 180,
        backgroundColor: accent,
      }} />

      {/* Dark overlay on slab for depth */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 180,
        background: 'linear-gradient(180deg, transparent 0%, rgba(17,17,17,0.6) 100%)',
      }} />

      {/* Geometric block right */}
      <div style={{
        position: 'absolute',
        top: 120,
        right: 0,
        width: 80,
        height: 400,
        backgroundColor: accent,
        opacity: 0.08,
      }} />

      {/* Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: '100px 80px 40px',
      }}>
        {/* Flavor block — square instead of circle */}
        <div style={{
          width: 70,
          height: 70,
          backgroundColor: accent,
          marginBottom: 40,
          boxShadow: `0 8px 32px ${accent}50`,
        }} />

        {/* Flavor name */}
        <span style={{
          fontSize: flavorName.length > 20 ? 52 : 68,
          fontWeight: 700,
          color: '#FFFFFF',
          textAlign: 'center',
          lineHeight: 1.2,
          letterSpacing: -1,
        }}>
          {flavorName}
        </span>

        {/* Taste */}
        {taste && (
          <span style={{
            fontSize: 26,
            color: accent,
            fontWeight: 700,
            marginTop: 20,
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}>
            {taste}
          </span>
        )}

        {/* Tagline */}
        <span style={{
          fontSize: 28,
          color: '#9CA3AF',
          textAlign: 'center',
          marginTop: 24,
          maxWidth: '75%',
          lineHeight: 1.4,
        }}>
          {tagline}
        </span>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex',
        padding: '24px 60px 40px',
        borderTop: `2px solid ${accent}`,
      }}>
        <LogoLockupDark accent={accent} />
      </div>
    </div>
  )
}

export function CarouselTemplateB({ caption, subtitle, slideNumber, totalSlides, accentColor }: TemplateParams): ReactElement {
  const accent = accentColor || '#14B8A6'

  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#111111',
      fontFamily: 'Space Grotesk',
    }}>
      {/* Accent stripe left */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 8,
        height: '100%',
        backgroundColor: accent,
      }} />

      {/* Block pattern top-right */}
      <div style={{
        position: 'absolute',
        top: 40,
        right: 40,
        width: 60,
        height: 60,
        border: `3px solid ${accent}40`,
      }} />
      <div style={{
        position: 'absolute',
        top: 55,
        right: 55,
        width: 60,
        height: 60,
        border: `3px solid ${accent}20`,
      }} />

      {/* Top bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '48px 60px 0 30px',
      }}>
        <div style={{
          width: 60,
          height: 4,
          backgroundColor: accent,
        }} />
        {slideNumber && totalSlides && (
          <span style={{
            fontSize: 22,
            color: accent,
            fontWeight: 700,
          }}>
            {slideNumber}/{totalSlides}
          </span>
        )}
      </div>

      {/* Caption */}
      <div style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '40px 80px 40px 30px',
      }}>
        <span style={{
          fontSize: caption.length > 100 ? 38 : caption.length > 60 ? 48 : 58,
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.3,
          maxWidth: '95%',
          letterSpacing: -1,
        }}>
          {caption}
        </span>

        {subtitle && (
          <span style={{
            fontSize: 26,
            color: '#9CA3AF',
            marginTop: 24,
            lineHeight: 1.4,
            maxWidth: '90%',
          }}>
            {subtitle}
          </span>
        )}
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex',
        padding: '24px 60px 40px 30px',
        borderTop: `2px solid ${accent}`,
      }}>
        <LogoLockupDark accent={accent} />
      </div>
    </div>
  )
}


// ============================================================
// Router — picks template based on theme param
// ============================================================

export function QuoteTemplate(params: TemplateParams): ReactElement {
  return QuoteTemplateB(params)
}

export function FlavorTemplate(params: TemplateParams): ReactElement {
  return FlavorTemplateB(params)
}

export function CarouselTemplate(params: TemplateParams): ReactElement {
  return CarouselTemplateB(params)
}
