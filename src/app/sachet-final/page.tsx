'use client';

import React, { type CSSProperties } from 'react';

// ─── Data ────────────────────────────────────────────────────────────────────

type Flavor = {
  slug: string;
  name: string;
  accent: string;
  microLine: string;
  doodle: (color: string) => React.ReactNode;
};

const FLAVORS: Flavor[] = [
  {
    slug: 'broke-but-hydrated',
    name: 'broke but\nhydrated',
    accent: '#D46A2E',
    microLine: 'you don\'t need closure. you need electrolytes.',
    doodle: (c) => (
      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
        <rect x="0.5" y="0.5" width="7" height="5" rx="0.5" stroke={c} strokeWidth="0.6" />
        <rect x="1.5" y="1.5" width="5" height="3" rx="0.3" stroke={c} strokeWidth="0.4" />
      </svg>
    ),
  },
  {
    slug: 'hot-ex',
    name: 'hot ex',
    accent: '#C4687A',
    microLine: 'this has more commitment than they do.',
    doodle: (c) => (
      <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
        <path d="M3.8 2.2C3.8 1 2.8 0.5 2 0.5C1.2 0.5 0.3 1.2 0.3 2.2C0.3 3.8 2 5 3.8 6.5" stroke={c} strokeWidth="0.6" strokeLinecap="round" />
        <path d="M4.2 2.2C4.2 1 5.2 0.5 6 0.5C6.8 0.5 7.7 1.2 7.7 2.2C7.7 3.8 6 5 4.2 6.5" stroke={c} strokeWidth="0.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'clarity',
    name: 'clarity',
    accent: '#7A9B76',
    microLine: 'you don\'t have to know where you\'re going.',
    doodle: (c) => (
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M5.5 1C6.8 1.5 7.5 3 7.5 4C7.5 6 6 7.5 4 7.5C2 7.5 0.5 6 0.5 4C0.5 2.5 1.5 1.2 3 0.7" stroke={c} strokeWidth="0.6" strokeLinecap="round" strokeDasharray="1.2 0.8" />
      </svg>
    ),
  },
];

const BASE = '#2B2926';
const TEXT_SECONDARY = '#A89F91';
const PAGE_BG = '#0D0D0D';

// ─── Sachet Component ────────────────────────────────────────────────────────

function Sachet({
  flavor,
  width = 60,
  tornTop = false,
  style = {},
}: {
  flavor: Flavor;
  width?: number;
  tornTop?: boolean;
  style?: CSSProperties;
}) {
  const height = width * 4;
  const crimpH = Math.max(4, width * 0.08);
  const notchStripe = Math.max(3, width * 0.05);
  const brandSize = Math.max(5, width * 0.09);
  const flavorSize = Math.max(10, width * 0.22);
  const microSize = Math.max(4, width * 0.065);
  const notchTextSize = Math.max(3, width * 0.05);

  // Torn edge clip path for top
  const tornClip = tornTop
    ? 'polygon(0% 3%, 4% 1.5%, 8% 3.5%, 13% 1%, 18% 2.8%, 22% 0.5%, 28% 3%, 33% 1.2%, 38% 2.5%, 42% 0.8%, 48% 3.2%, 52% 1%, 58% 2.8%, 63% 0.3%, 68% 3%, 72% 1.5%, 78% 2.2%, 82% 0.6%, 88% 3.5%, 92% 1%, 96% 2.8%, 100% 1.5%, 100% 100%, 0% 100%)'
    : undefined;

  const outerStyle: CSSProperties = {
    position: 'relative',
    width,
    height,
    borderRadius: tornTop ? '0 0 3px 3px' : 3,
    overflow: 'hidden',
    flexShrink: 0,
    clipPath: tornClip,
    ...style,
  };

  // Crimp pattern (repeating ridges)
  const crimpGrad = `repeating-linear-gradient(90deg, rgba(0,0,0,0.25) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.25) 3px)`;

  return (
    <div style={outerStyle}>
      {/* Base fill */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: BASE,
        }}
      />

      {/* Matte paper texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-conic-gradient(rgba(255,255,255,0.015) 0% 25%, transparent 0% 50%) 0 0 / 4px 4px',
          pointerEvents: 'none',
        }}
      />

      {/* Warm diagonal highlight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255,240,220,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top crimp */}
      {!tornTop && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: crimpH,
            background: crimpGrad,
            backgroundColor: 'rgba(0,0,0,0.15)',
            zIndex: 2,
          }}
        />
      )}

      {/* Accent notch stripe at top */}
      <div
        style={{
          position: 'absolute',
          top: tornTop ? 0 : crimpH,
          left: 0,
          right: 0,
          height: notchStripe,
          background: flavor.accent,
          zIndex: 2,
        }}
      />

      {/* "rip here like your plans" text along notch stripe */}
      <div
        style={{
          position: 'absolute',
          top: tornTop ? 0 : crimpH,
          left: 0,
          right: 0,
          height: notchStripe,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontSize: notchTextSize,
            fontFamily: 'Georgia, "Times New Roman", serif',
            color: BASE,
            letterSpacing: '0.5px',
            lineHeight: 1,
            fontWeight: 400,
          }}
        >
          rip here like your plans
        </span>
      </div>

      {/* Tiny doodle near tear notch */}
      <div
        style={{
          position: 'absolute',
          top: (tornTop ? 0 : crimpH) + notchStripe + 2,
          right: width * 0.12,
          zIndex: 3,
        }}
      >
        {flavor.doodle(flavor.accent)}
      </div>

      {/* ── Rotated text container (all content reads bottom-to-top) ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: height,
          height: width,
          transformOrigin: '0 0',
          transform: 'rotate(-90deg) translateX(-100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: `${width * 0.15}px ${width * 0.25}px`,
          boxSizing: 'border-box',
          zIndex: 2,
        }}
      >
        {/* Brand name */}
        <span
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: brandSize,
            fontWeight: 400,
            color: TEXT_SECONDARY,
            letterSpacing: '1.5px',
            marginBottom: width * 0.06,
            lineHeight: 1,
            textTransform: 'lowercase' as const,
          }}
        >
          figuring out
        </span>

        {/* Flavor name */}
        <span
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: flavorSize,
            fontWeight: 700,
            color: flavor.accent,
            lineHeight: 1.1,
            letterSpacing: '-0.3px',
            textTransform: 'lowercase' as const,
            whiteSpace: 'pre-line',
            marginBottom: width * 0.1,
          }}
        >
          {flavor.name}
        </span>

        {/* Micro-line */}
        <span
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: microSize,
            fontWeight: 300,
            fontStyle: 'italic',
            color: TEXT_SECONDARY,
            lineHeight: 1.3,
            transform: 'rotate(-1.5deg)',
            transformOrigin: 'left center',
            maxWidth: '85%',
          }}
        >
          {flavor.microLine}
        </span>
      </div>

      {/* Bottom crimp */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: crimpH,
          background: crimpGrad,
          backgroundColor: 'rgba(0,0,0,0.15)',
          zIndex: 2,
        }}
      />

      {/* Multi-layer box shadow via wrapper — inset highlight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          boxShadow: 'inset 0 1px 0 rgba(255,240,220,0.06)',
          borderRadius: 'inherit',
          pointerEvents: 'none',
          zIndex: 4,
        }}
      />
    </div>
  );
}

// ─── Ground shadow ───────────────────────────────────────────────────────────

function GroundShadow({ width, offsetX = 0 }: { width: number; offsetX?: number }) {
  return (
    <div
      style={{
        width: width * 1.2,
        height: 8,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%)',
        filter: 'blur(3px)',
        marginTop: -2,
        marginLeft: offsetX,
        flexShrink: 0,
      }}
    />
  );
}

// ─── Section label ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: 11,
        fontWeight: 400,
        color: '#555',
        letterSpacing: '2px',
        textTransform: 'uppercase' as const,
        marginBottom: 32,
      }}
    >
      {children}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function SachetFinalPage() {
  const [broke, hotEx, clarity] = FLAVORS;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: PAGE_BG,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 20px 120px',
        gap: 100,
      }}
    >
      {/* ── 1. Hero: fanned display ── */}
      <section style={{ textAlign: 'center' as const }}>
        <SectionLabel>Hero Display</SectionLabel>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            position: 'relative',
            height: 320,
            width: 300,
            perspective: '800px',
          }}
        >
          {/* Broke But Hydrated — torn top, -30deg */}
          <div style={{ position: 'absolute', bottom: 20 }}>
            <div
              style={{
                transform: 'perspective(800px) rotateY(8deg) rotate(-30deg)',
                transformOrigin: 'bottom center',
                filter: 'drop-shadow(4px 8px 12px rgba(0,0,0,0.5)) drop-shadow(1px 2px 3px rgba(0,0,0,0.3))',
              }}
            >
              <Sachet flavor={broke} width={60} tornTop />
            </div>
            <GroundShadow width={60} offsetX={-20} />
          </div>

          {/* Hot Ex — -15deg */}
          <div style={{ position: 'absolute', bottom: 20, left: '50%', marginLeft: -30 }}>
            <div
              style={{
                transform: 'perspective(800px) rotateY(-5deg) rotate(-15deg)',
                transformOrigin: 'bottom center',
                filter: 'drop-shadow(4px 8px 12px rgba(0,0,0,0.5)) drop-shadow(1px 2px 3px rgba(0,0,0,0.3))',
              }}
            >
              <Sachet flavor={hotEx} width={60} />
            </div>
            <GroundShadow width={60} offsetX={-10} />
          </div>

          {/* Clarity — 0deg */}
          <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
            <div
              style={{
                transform: 'perspective(800px) rotateY(-10deg) rotate(0deg)',
                transformOrigin: 'bottom center',
                filter: 'drop-shadow(4px 8px 12px rgba(0,0,0,0.5)) drop-shadow(1px 2px 3px rgba(0,0,0,0.3))',
              }}
            >
              <Sachet flavor={clarity} width={60} />
            </div>
            <GroundShadow width={60} />
          </div>
        </div>
      </section>

      {/* ── 2. All 3 upright side by side ── */}
      <section style={{ textAlign: 'center' as const }}>
        <SectionLabel>All Flavors</SectionLabel>
        <div
          style={{
            display: 'flex',
            gap: 28,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          {FLAVORS.map((f) => (
            <div key={f.slug} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  filter: 'drop-shadow(2px 6px 10px rgba(0,0,0,0.45)) drop-shadow(0 1px 2px rgba(0,0,0,0.25))',
                }}
              >
                <Sachet flavor={f} width={60} />
              </div>
              <GroundShadow width={60} />
              <span
                style={{
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: 9,
                  color: TEXT_SECONDARY,
                  marginTop: 12,
                  letterSpacing: '0.5px',
                  textTransform: 'lowercase' as const,
                }}
              >
                {f.slug}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Close-up: 2.5x scale ── */}
      <section style={{ textAlign: 'center' as const }}>
        <SectionLabel>Detail Close-Up</SectionLabel>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              filter: 'drop-shadow(4px 12px 20px rgba(0,0,0,0.5)) drop-shadow(1px 3px 5px rgba(0,0,0,0.3))',
            }}
          >
            <Sachet flavor={broke} width={150} />
          </div>
        </div>
      </section>
    </div>
  );
}
