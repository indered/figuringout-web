import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FDF8F3',
          padding: '60px 80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: 80,
            right: 120,
            width: 160,
            height: 160,
            borderRadius: '50%',
            background: 'rgba(255, 215, 0, 0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 180,
            background: 'linear-gradient(180deg, transparent 0%, rgba(20, 184, 166, 0.15) 50%, rgba(20, 184, 166, 0.3) 100%)',
          }}
        />

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
            <span style={{ fontSize: 96, fontWeight: 700, color: '#1A1A1A' }}>
              Figuring Out
            </span>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                backgroundColor: '#14B8A6',
                marginLeft: 8,
                marginTop: 30,
              }}
            />
          </div>

          {/* Tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 36, color: '#6B7280' }}>
              Hydrate while you figure it out.
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 24, fontWeight: 500, color: '#1A1A1A' }}>
            Premium Electrolytes for Runners
          </span>
          <span style={{ fontSize: 20, color: '#6B7280' }}>
            figuringout.club
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
