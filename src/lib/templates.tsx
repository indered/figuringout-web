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

// --- Brand Constants ---

const BRAND = {
  cream: '#FDF8F3',
  teal: '#14B8A6',
  text: '#1A1A1A',
  muted: '#6B7280',
  sand: '#E8DFD5',
}

// --- Shared Components ---

function LogoLockup(): ReactElement {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: 32, fontWeight: 700, color: BRAND.text, fontFamily: 'Space Grotesk' }}>
          Figuring Out
        </span>
        <div style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: BRAND.teal,
          marginLeft: 4,
          marginTop: 10,
        }} />
      </div>
      <span style={{ fontSize: 22, color: BRAND.muted, fontFamily: 'Space Grotesk' }}>
        figuringout.club
      </span>
    </div>
  )
}

// --- Templates ---

export interface TemplateParams {
  caption: string
  flavor?: string
  accentColor?: string
  subtitle?: string
  slideNumber?: number
  totalSlides?: number
}

export function QuoteTemplate({ caption, accentColor }: TemplateParams): ReactElement {
  const accent = accentColor || BRAND.teal

  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: BRAND.cream,
      fontFamily: 'Space Grotesk',
      padding: 0,
    }}>
      {/* Teal accent bar */}
      <div style={{ width: '100%', height: 8, backgroundColor: accent }} />

      {/* Decorative circle */}
      <div style={{
        position: 'absolute',
        top: 80,
        right: 80,
        width: 120,
        height: 120,
        borderRadius: '50%',
        background: `${accent}25`,
      }} />

      {/* Small decorative dot */}
      <div style={{
        position: 'absolute',
        bottom: 180,
        left: 60,
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: `${accent}15`,
      }} />

      {/* Caption */}
      <div style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 80px 40px',
      }}>
        <span style={{
          fontSize: caption.length > 80 ? 42 : caption.length > 40 ? 52 : 64,
          fontWeight: 700,
          color: BRAND.text,
          textAlign: 'center',
          lineHeight: 1.3,
          maxWidth: '90%',
        }}>
          {caption}
        </span>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex',
        padding: '30px 60px 40px',
        borderTop: `1px solid ${BRAND.sand}`,
      }}>
        <LogoLockup />
      </div>
    </div>
  )
}

export function FlavorTemplate({ caption, flavor, accentColor }: TemplateParams): ReactElement {
  const flavorData = flavor ? flavors.find(f => f.slug === flavor) : null
  const accent = accentColor || flavorData?.color || BRAND.teal
  const flavorName = flavorData?.name || caption
  const tagline = flavorData?.tagline || caption
  const taste = flavorData?.taste || ''

  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: BRAND.cream,
      fontFamily: 'Space Grotesk',
    }}>
      {/* Color block top half */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        background: `linear-gradient(135deg, ${accent}20 0%, ${accent}40 100%)`,
        padding: '60px 80px',
        position: 'relative',
      }}>
        {/* Large decorative circle */}
        <div style={{
          position: 'absolute',
          top: 60,
          right: 60,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `${accent}30`,
        }} />

        {/* Flavor dot */}
        <div style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          backgroundColor: accent,
          marginBottom: 40,
        }} />

        {/* Flavor name */}
        <span style={{
          fontSize: flavorName.length > 20 ? 56 : 72,
          fontWeight: 700,
          color: BRAND.text,
          textAlign: 'center',
          lineHeight: 1.2,
        }}>
          {flavorName}
        </span>

        {/* Taste */}
        {taste && (
          <span style={{
            fontSize: 28,
            color: accent,
            fontWeight: 600,
            marginTop: 16,
          }}>
            {taste}
          </span>
        )}

        {/* Tagline */}
        <span style={{
          fontSize: 30,
          color: BRAND.muted,
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
        padding: '30px 60px 40px',
        backgroundColor: BRAND.cream,
        borderTop: `1px solid ${BRAND.sand}`,
      }}>
        <LogoLockup />
      </div>
    </div>
  )
}

export function CarouselTemplate({ caption, subtitle, slideNumber, totalSlides, accentColor }: TemplateParams): ReactElement {
  const accent = accentColor || BRAND.teal

  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: BRAND.cream,
      fontFamily: 'Space Grotesk',
    }}>
      {/* Top bar with slide number */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px 60px 0',
      }}>
        <div style={{
          width: 40,
          height: 4,
          backgroundColor: accent,
          borderRadius: 2,
        }} />
        {slideNumber && totalSlides && (
          <span style={{
            fontSize: 24,
            color: BRAND.muted,
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
          color: BRAND.text,
          lineHeight: 1.3,
          maxWidth: '95%',
        }}>
          {caption}
        </span>

        {subtitle && (
          <span style={{
            fontSize: 28,
            color: BRAND.muted,
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
        padding: '30px 60px 40px',
        borderTop: `1px solid ${BRAND.sand}`,
      }}>
        <LogoLockup />
      </div>
    </div>
  )
}
