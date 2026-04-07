'use client';

import React from 'react';

/* ─────────────────────────── HELPERS ─────────────────────────── */

const SectionHeader = ({ num, title, desc }: { num: string; title: string; desc: string }) => (
  <div style={{ marginBottom: 48 }}>
    <span style={{ color: '#14B8A6', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
      Section {num}
    </span>
    <h2 style={{ color: '#fff', fontSize: 32, fontWeight: 700, margin: '8px 0 12px', letterSpacing: -0.5 }}>{title}</h2>
    <p style={{ color: '#888', fontSize: 15, maxWidth: 560, lineHeight: 1.6 }}>{desc}</p>
  </div>
);

/* ─────────── SECTION 0: THE BOLD DIRECTION ─────────── */

const BOLD_SACHET_W = 60;
const BOLD_SACHET_H = 240;

const BoldCrimpEdge = ({ position }: { position: 'top' | 'bottom' }) => {
  const isTop = position === 'top';
  return (
    <div style={{
      position: 'absolute',
      [isTop ? 'top' : 'bottom']: 0,
      left: 0,
      width: '100%',
      height: 14,
      background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 2px, transparent 2px, transparent 5px)',
      opacity: 0.5,
      borderRadius: isTop ? '3px 3px 0 0' : '0 0 3px 3px',
      zIndex: 4,
    }} />
  );
};

/* ── Bold Illustration: Wallet with plant (white) ── */
const BoldWalletPlantIllustration = () => (
  <div style={{ position: 'relative', width: 36, height: 50 }}>
    <div style={{
      position: 'absolute', bottom: 0, left: 2, width: 32, height: 22,
      border: '1.5px solid #fff', borderRadius: 3,
    }} />
    <div style={{
      position: 'absolute', bottom: 16, left: 2, width: 32, height: 12,
      borderTop: '1.5px solid #fff', borderLeft: '1.5px solid #fff', borderRight: '1.5px solid #fff',
      borderRadius: '3px 3px 0 0',
    }} />
    <div style={{
      position: 'absolute', bottom: 22, left: 16, width: 2, height: 18,
      background: '#fff', borderRadius: 1,
    }} />
    <div style={{
      position: 'absolute', bottom: 32, left: 8, width: 10, height: 6,
      borderRadius: '50% 0 50% 0', border: '1.5px solid #fff',
      transform: 'rotate(-15deg)',
    }} />
    <div style={{
      position: 'absolute', bottom: 37, left: 19, width: 10, height: 6,
      borderRadius: '0 50% 0 50%', border: '1.5px solid #fff',
      transform: 'rotate(15deg)',
    }} />
    <div style={{
      position: 'absolute', bottom: 40, left: 13, width: 8, height: 8,
      borderRadius: '50% 0 50% 0', border: '1.5px solid #fff',
      transform: 'rotate(-5deg)',
    }} />
  </div>
);

/* ── Bold Illustration: Matchstick with spiral (white) ── */
const BoldMatchstickIllustration = () => (
  <div style={{ position: 'relative', width: 30, height: 55 }}>
    <div style={{
      position: 'absolute', bottom: 0, left: 13, width: 2.5, height: 32,
      background: '#fff', borderRadius: 1,
    }} />
    <div style={{
      position: 'absolute', bottom: 30, left: 10, width: 9, height: 6,
      background: 'rgba(255,255,255,0.7)', borderRadius: '3px 3px 1px 1px',
    }} />
    <div style={{
      position: 'absolute', bottom: 34, left: 5, width: 18, height: 18,
      border: '1.5px solid #fff', borderRadius: '50%',
      borderBottomColor: 'transparent',
      transform: 'rotate(-30deg)',
    }} />
    <div style={{
      position: 'absolute', bottom: 38, left: 9, width: 10, height: 10,
      border: '1.5px solid #fff', borderRadius: '50%',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      transform: 'rotate(-60deg)',
    }} />
    <div style={{
      position: 'absolute', bottom: 48, left: 11, width: 5, height: 5,
      border: '1.5px solid #fff', borderRadius: '50%',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
    }} />
  </div>
);

/* ── Bold Illustration: Loading bar with runner dot (white) ── */
const BoldLoadingBarIllustration = () => (
  <div style={{ position: 'relative', width: 40, height: 30 }}>
    {/* outer bar */}
    <div style={{
      position: 'absolute', top: 10, left: 0, width: 40, height: 10,
      border: '1.5px solid #fff', borderRadius: 2,
    }} />
    {/* filled portion ~47% */}
    <div style={{
      position: 'absolute', top: 12, left: 2, width: 17, height: 6,
      background: 'rgba(255,255,255,0.6)', borderRadius: 1,
    }} />
    {/* runner dot at 47% mark */}
    <div style={{
      position: 'absolute', top: 3, left: 18, width: 4, height: 4,
      background: '#fff', borderRadius: '50%',
    }} />
    {/* tiny legs on runner */}
    <div style={{
      position: 'absolute', top: 6, left: 17, width: 1, height: 3,
      background: '#fff', transform: 'rotate(-20deg)',
    }} />
    <div style={{
      position: 'absolute', top: 6, left: 22, width: 1, height: 3,
      background: '#fff', transform: 'rotate(20deg)',
    }} />
  </div>
);

interface BoldSachetProps {
  flavorName: string;
  bgColor: string;
  microText: string;
  illustration: React.ReactNode;
  dotColor: string;
  scale?: number;
  rotate?: number;
}

const BoldSachet = ({ flavorName, bgColor, microText, illustration, dotColor, scale = 1, rotate = 0 }: BoldSachetProps) => {
  const w = BOLD_SACHET_W * scale;
  const h = BOLD_SACHET_H * scale;
  return (
    <div style={{
      width: w, height: h,
      background: bgColor,
      borderRadius: 4,
      position: 'relative',
      overflow: 'hidden',
      transform: `rotate(${rotate}deg)`,
      flexShrink: 0,
      boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
    }}>
      {/* Matte texture noise */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: 'repeating-conic-gradient(rgba(255,255,255,0.03) 0% 25%, transparent 0% 50%)',
        backgroundSize: '4px 4px',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Glossy highlight on flavor name area */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40%',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      <BoldCrimpEdge position="top" />
      <BoldCrimpEdge position="bottom" />

      {/* Brand name top */}
      <div style={{
        position: 'absolute', top: 20 * scale, left: 0, width: '100%',
        textAlign: 'center', fontSize: 5 * scale, fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
        color: 'rgba(255,255,255,0.7)', letterSpacing: 1.5 * scale, fontWeight: 400,
        zIndex: 3,
      }}>
        Figuring Out<span style={{color:'#14B8A6'}}>.</span>
      </div>

      {/* Illustration center */}
      <div style={{
        position: 'absolute', top: '32%', left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 3,
      }}>
        {illustration}
      </div>

      {/* Flavor name — HUGE, bold, left-aligned, bottom third */}
      <div style={{
        position: 'absolute', bottom: 18 * scale, left: 4 * scale, right: 4 * scale,
        fontSize: 10 * scale, fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
        color: '#fff', fontWeight: 800, lineHeight: 1.05,
        textAlign: 'left', textShadow: '0 1px 3px rgba(0,0,0,0.25)',
        zIndex: 3, letterSpacing: -0.3 * scale,
      }}>
        {flavorName}
      </div>

      {/* Micro text — rotated 90deg along right edge */}
      <div style={{
        position: 'absolute', right: -20 * scale, top: '50%',
        transform: 'rotate(90deg) translateX(-50%)',
        transformOrigin: 'center center',
        fontSize: 3.5 * scale, fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
        color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap',
        zIndex: 3, letterSpacing: 0.3,
      }}>
        {microText}
      </div>

      {/* Orange signed dot */}
      <div style={{
        position: 'absolute', bottom: 8 * scale, right: 6 * scale,
        width: 3 * scale, height: 3 * scale,
        borderRadius: '50%', background: dotColor,
        zIndex: 3,
      }} />
    </div>
  );
};

const BOLD_FLAVORS = [
  {
    name: 'Broke But\nHydrated',
    displayName: 'Broke But Hydrated',
    bgColor: '#E8173A',
    micro: 'rent is a concept. hydration is a fact.',
    illustration: <BoldWalletPlantIllustration />,
    dotColor: '#14B8A6',
    powder: '/powder-color2.png',
  },
  {
    name: 'Hot\nEx',
    displayName: 'Hot Ex',
    bgColor: '#4169E1',
    micro: "if you have to ask what this is, it isn\u2019t.",
    illustration: <BoldMatchstickIllustration />,
    dotColor: '#14B8A6',
    powder: '/powder-red.png',
  },
  {
    name: 'Clarity',
    displayName: 'Clarity',
    bgColor: '#14B8A6',
    micro: 'buffering is not the same as broken.',
    illustration: <BoldLoadingBarIllustration />,
    dotColor: '#E8173A',
    powder: '/powder-burst.png',
  },
];

/* ─────────── SECTION 1: Signed Print sachet base ─────────── */

const SACHET_W = 60;
const SACHET_H = 240;

const CrimpEdge = ({ position }: { position: 'top' | 'bottom' }) => {
  const isTop = position === 'top';
  return (
    <div style={{
      position: 'absolute',
      [isTop ? 'top' : 'bottom']: 0,
      left: 0,
      width: '100%',
      height: 14,
      background: 'repeating-linear-gradient(90deg, #1A1714 0px, #1A1714 2px, transparent 2px, transparent 5px)',
      opacity: 0.35,
      borderRadius: isTop ? '3px 3px 0 0' : '0 0 3px 3px',
    }} />
  );
};

/* ── Illustration: Wallet with plant ── */
const WalletPlantIllustration = () => (
  <div style={{ position: 'relative', width: 36, height: 50 }}>
    {/* wallet body */}
    <div style={{
      position: 'absolute', bottom: 0, left: 2, width: 32, height: 22,
      border: '1.5px solid #1A1714', borderRadius: 3,
    }} />
    {/* wallet flap */}
    <div style={{
      position: 'absolute', bottom: 16, left: 2, width: 32, height: 12,
      borderTop: '1.5px solid #1A1714', borderLeft: '1.5px solid #1A1714', borderRight: '1.5px solid #1A1714',
      borderRadius: '3px 3px 0 0',
    }} />
    {/* plant stem — wavy via border trick */}
    <div style={{
      position: 'absolute', bottom: 22, left: 16, width: 2, height: 18,
      background: '#1A1714', borderRadius: 1,
    }} />
    {/* leaf left */}
    <div style={{
      position: 'absolute', bottom: 32, left: 8, width: 10, height: 6,
      borderRadius: '50% 0 50% 0', border: '1.5px solid #1A1714',
      transform: 'rotate(-15deg)',
    }} />
    {/* leaf right */}
    <div style={{
      position: 'absolute', bottom: 37, left: 19, width: 10, height: 6,
      borderRadius: '0 50% 0 50%', border: '1.5px solid #1A1714',
      transform: 'rotate(15deg)',
    }} />
    {/* leaf top */}
    <div style={{
      position: 'absolute', bottom: 40, left: 13, width: 8, height: 8,
      borderRadius: '50% 0 50% 0', border: '1.5px solid #1A1714',
      transform: 'rotate(-5deg)',
    }} />
  </div>
);

/* ── Illustration: Matchstick with spiral flame ── */
const MatchstickIllustration = () => (
  <div style={{ position: 'relative', width: 30, height: 55 }}>
    {/* stick shaft */}
    <div style={{
      position: 'absolute', bottom: 0, left: 13, width: 2.5, height: 32,
      background: '#1A1714', borderRadius: 1,
    }} />
    {/* match head */}
    <div style={{
      position: 'absolute', bottom: 30, left: 10, width: 9, height: 6,
      background: '#E87B35', borderRadius: '3px 3px 1px 1px',
    }} />
    {/* flame outer spiral */}
    <div style={{
      position: 'absolute', bottom: 34, left: 5, width: 18, height: 18,
      border: '1.5px solid #1A1714', borderRadius: '50%',
      borderBottomColor: 'transparent',
      transform: 'rotate(-30deg)',
    }} />
    {/* flame inner spiral */}
    <div style={{
      position: 'absolute', bottom: 38, left: 9, width: 10, height: 10,
      border: '1.5px solid #1A1714', borderRadius: '50%',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      transform: 'rotate(-60deg)',
    }} />
    {/* flame top curl dot */}
    <div style={{
      position: 'absolute', bottom: 48, left: 11, width: 5, height: 5,
      border: '1.5px solid #1A1714', borderRadius: '50%',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
    }} />
  </div>
);

/* ── Illustration: Mountain with circle at summit ── */
const MountainIllustration = () => (
  <div style={{ position: 'relative', width: 40, height: 45 }}>
    {/* mountain — two angled lines meeting at top via clip-path */}
    <div style={{
      position: 'absolute', bottom: 0, left: 0, width: 40, height: 32,
      clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
      border: '0 none',
      background: 'transparent',
    }}>
      {/* inner outline triangle */}
      <div style={{
        width: '100%', height: '100%',
        clipPath: 'polygon(50% 4px, calc(100% - 2px) calc(100% - 1.5px), 2px calc(100% - 1.5px), 50% 6px)',
        background: '#E8DCC8',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
        background: 'transparent',
        border: '1.5px solid #1A1714',
      }} />
    </div>
    {/* use simple border approach for mountain */}
    <div style={{
      position: 'absolute', bottom: 0, left: 4, width: 0, height: 0,
      borderLeft: '16px solid transparent',
      borderRight: '16px solid transparent',
      borderBottom: '32px solid transparent',
    }} />
    {/* left mountain line */}
    <div style={{
      position: 'absolute', bottom: 0, left: 5, width: 16, height: 32,
      borderLeft: '1.5px solid #1A1714',
      transform: 'skewX(26deg)',
      transformOrigin: 'bottom left',
    }} />
    {/* right mountain line */}
    <div style={{
      position: 'absolute', bottom: 0, right: 5, width: 16, height: 32,
      borderRight: '1.5px solid #1A1714',
      transform: 'skewX(-26deg)',
      transformOrigin: 'bottom right',
    }} />
    {/* circle at summit */}
    <div style={{
      position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
      width: 10, height: 10,
      border: '1.5px solid #1A1714', borderRadius: '50%',
    }} />
  </div>
);

interface SignedSachetProps {
  flavorName: string;
  accent: string;
  microText: string;
  illustration: React.ReactNode;
  scale?: number;
  rotate?: number;
}

const SignedSachet = ({ flavorName, accent, microText, illustration, scale = 1, rotate = 0 }: SignedSachetProps) => {
  const w = SACHET_W * scale;
  const h = SACHET_H * scale;
  return (
    <div style={{
      width: w, height: h,
      background: '#E8DCC8',
      borderRadius: 4,
      position: 'relative',
      overflow: 'hidden',
      transform: `rotate(${rotate}deg) scale(1)`,
      flexShrink: 0,
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    }}>
      <CrimpEdge position="top" />
      <CrimpEdge position="bottom" />

      {/* Brand name top */}
      <div style={{
        position: 'absolute', top: 20 * scale, left: 0, width: '100%',
        textAlign: 'center', fontSize: 7 * scale, fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
        color: '#1A1714', letterSpacing: 1.5 * scale, fontWeight: 400,
      }}>
        Figuring Out<span style={{color:'#14B8A6'}}>.</span>
      </div>

      {/* Illustration center */}
      <div style={{
        position: 'absolute', top: '32%', left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {illustration}
      </div>

      {/* Flavor name */}
      <div style={{
        position: 'absolute', bottom: 50 * scale, left: 0, width: '100%',
        textAlign: 'center', fontSize: 8.5 * scale, fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
        color: accent, fontStyle: 'italic', transform: 'rotate(1deg)',
        fontWeight: 600, letterSpacing: 0.3 * scale,
      }}>
        {flavorName}
      </div>

      {/* Micro text */}
      <div style={{
        position: 'absolute', bottom: 28 * scale, left: 4 * scale, right: 4 * scale,
        textAlign: 'center', fontSize: 4.5 * scale, fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
        color: '#6B6459', lineHeight: 1.4, letterSpacing: 0.2,
      }}>
        {microText}
      </div>

      {/* Signed dot */}
      <div style={{
        position: 'absolute', bottom: 8 * scale, right: 6 * scale,
        width: 3 * scale, height: 3 * scale,
        borderRadius: '50%', background: '#FF4D00',
      }} />
    </div>
  );
};

const FLAVORS_S1 = [
  {
    name: 'Broke But Hydrated',
    accent: '#C4724B',
    micro: 'rent is a concept. hydration is a fact.',
    illustration: <WalletPlantIllustration />,
  },
  {
    name: 'Hot Ex',
    accent: '#E87B35',
    micro: 'this has more commitment than they do.',
    illustration: <MatchstickIllustration />,
  },
  {
    name: 'Clarity',
    accent: '#2D6A6A',
    micro: "you started. that's the whole thing.",
    illustration: <MountainIllustration />,
  },
];

/* ─────────── SECTION 2: Water Experiments ─────────── */

const WaterSachet = ({ variant }: { variant: '2A' | '2B' | '2C' | '2D' }) => {
  const w = 56;
  const h = 224;

  const configs: Record<string, { bg: string; bandColor?: string; bodyColor?: string; label: string; sublabel: string; ripples?: boolean; shimmer?: boolean }> = {
    '2A': { bg: '#FFFFFF', label: '2A', sublabel: 'No Water (Baseline)' },
    '2B': { bg: '#FFFFFF', label: '2B', sublabel: 'Aqua Shimmer', shimmer: true },
    '2C': { bg: 'linear-gradient(180deg, #87CEEB 0%, #87CEEB 25%, #F0EDE6 25%, #F0EDE6 100%)', label: '2C', sublabel: 'Sky Band + Pearl + Ripple', ripples: true },
    '2D': { bg: 'linear-gradient(180deg, #1A7A7A 0%, #1A7A7A 28%, #D0D0D0 28%, #D0D0D0 100%)', label: '2D', sublabel: 'Deep Aqua + Silver' },
  };

  const cfg = configs[variant];

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: w, height: h, borderRadius: 4, position: 'relative', overflow: 'hidden',
        background: cfg.bg, boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
      }}>
        <CrimpEdge position="top" />
        <CrimpEdge position="bottom" />

        {/* brand */}
        <div style={{
          position: 'absolute', top: 22, left: 0, width: '100%',
          textAlign: 'center', fontSize: 6.5, fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
          color: variant === '2D' ? '#fff' : '#1A1714', letterSpacing: 1.2,
        }}>
          Figuring Out<span style={{color:'#14B8A6'}}>.</span>
        </div>

        {/* flavor name center */}
        <div style={{
          position: 'absolute', top: '45%', left: 0, width: '100%',
          textAlign: 'center', fontSize: 8, fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
          color: variant === '2D' ? '#1A7A7A' : '#333', fontStyle: 'italic',
        }}>
          Still Loading
        </div>

        {/* shimmer spots for 2B */}
        {cfg.shimmer && (
          <>
            {[30, 55, 78, 105, 140, 170].map((top, i) => (
              <div key={i} style={{
                position: 'absolute', top, left: 8 + (i % 3) * 14, width: 18, height: 8,
                background: `rgba(70,200,215,${0.1 + (i % 3) * 0.05})`,
                borderRadius: 10, transform: `rotate(${i * 12}deg)`,
              }} />
            ))}
          </>
        )}

        {/* ripple lines for 2C */}
        {cfg.ripples && (
          <>
            {[80, 110, 140, 165, 190].map((top, i) => (
              <div key={i} style={{
                position: 'absolute', top, left: 4, right: 4, height: 1,
                background: `rgba(70,200,215,${0.15 + i * 0.03})`,
              }} />
            ))}
          </>
        )}
      </div>
      <div style={{ marginTop: 10, fontSize: 11, color: '#14B8A6', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', fontWeight: 600 }}>{cfg.label}</div>
      <div style={{ fontSize: 10, color: '#666', marginTop: 2 }}>{cfg.sublabel}</div>
    </div>
  );
};

/* ─────────── SECTION 3: Wild Concepts ─────────── */

const WildSachet = ({ concept }: { concept: 1 | 2 | 3 | 4 | 5 }) => {
  const w = 56;
  const h = 224;

  const labels: Record<number, string> = {
    1: 'Concert Ticket',
    2: 'Broadsheet',
    3: 'Brutalist',
    4: 'Boarding Pass',
    5: 'Hand-Stamped',
  };

  const renderContent = () => {
    switch (concept) {
      case 1: // Concert Ticket
        return (
          <div style={{
            width: w, height: h, background: '#1A1A1A', borderRadius: 4,
            position: 'relative', overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          }}>
            {/* bright color stub at top */}
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: 50,
              background: 'linear-gradient(135deg, #FF4D00, #FF6B35)',
            }} />
            {/* perforation notches */}
            {[0, 8, 16, 24, 32, 40, 48].map(x => (
              <div key={x} style={{
                position: 'absolute', top: 48, left: x, width: 4, height: 4,
                borderRadius: '50%', background: '#1A1A1A',
              }} />
            ))}
            <div style={{
              position: 'absolute', top: 16, left: 0, width: '100%',
              textAlign: 'center', fontSize: 6, color: '#fff', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
              letterSpacing: 1.5, fontWeight: 700,
            }}>ADMIT ONE</div>
            <div style={{
              position: 'absolute', top: '50%', left: 0, width: '100%',
              textAlign: 'center', fontSize: 7.5, color: '#FF4D00', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
              fontWeight: 700, letterSpacing: 0.5,
            }}>Left On Read</div>
            <div style={{
              position: 'absolute', bottom: 20, left: 0, width: '100%',
              textAlign: 'center', fontSize: 5, color: '#555', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
            }}>Figuring Out<span style={{color:'#14B8A6'}}>.</span></div>
          </div>
        );
      case 2: // Broadsheet
        return (
          <div style={{
            width: w, height: h, background: '#F5F0E8', borderRadius: 2,
            position: 'relative', overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            border: '1px solid #D4CBBB',
          }}>
            {/* masthead line */}
            <div style={{ position: 'absolute', top: 12, left: 4, right: 4, borderBottom: '1.5px solid #1A1714' }} />
            <div style={{
              position: 'absolute', top: 16, left: 0, width: '100%',
              textAlign: 'center', fontSize: 6, color: '#1A1714', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
              letterSpacing: 1, fontWeight: 700, fontStyle: 'italic',
            }}>THE DAILY HYDRATE</div>
            <div style={{ position: 'absolute', top: 28, left: 4, right: 4, borderBottom: '0.5px solid #1A1714' }} />
            {/* headline */}
            <div style={{
              position: 'absolute', top: 40, left: 6, right: 6,
              fontSize: 8, color: '#1A1714', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
              fontWeight: 700, lineHeight: 1.3, textAlign: 'center',
            }}>Therapy Is Expensive</div>
            {/* body text lines */}
            {[70, 78, 86, 94, 102, 110, 118].map((t, i) => (
              <div key={i} style={{
                position: 'absolute', top: t, left: 6, right: 6 + (i === 6 ? 14 : 0), height: 1.5,
                background: '#C8BFA8', borderRadius: 1,
              }} />
            ))}
            <div style={{
              position: 'absolute', bottom: 16, left: 0, width: '100%',
              textAlign: 'center', fontSize: 5, color: '#888', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
            }}>Figuring Out<span style={{color:'#14B8A6'}}>.</span></div>
          </div>
        );
      case 3: // Brutalist
        return (
          <div style={{
            width: w, height: h, background: '#D46A2E', borderRadius: 2,
            position: 'relative', overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%) rotate(-90deg)',
              fontSize: 18, color: '#fff', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
              fontWeight: 900, letterSpacing: -1, whiteSpace: 'nowrap',
              textTransform: 'uppercase',
            }}>SITUATIONSHIP</div>
            <div style={{
              position: 'absolute', bottom: 10, left: 0, width: '100%',
              textAlign: 'center', fontSize: 5, color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
            }}>Figuring Out<span style={{color:'#14B8A6'}}>.</span></div>
          </div>
        );
      case 4: // Boarding Pass
        return (
          <div style={{
            width: w, height: h, background: '#FFFFFF', borderRadius: 3,
            position: 'relative', overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            border: '1px solid #E0E0E0',
          }}>
            <div style={{
              position: 'absolute', top: 14, left: 0, width: '100%',
              textAlign: 'center', fontSize: 5, color: '#999', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
              letterSpacing: 1,
            }}>BOARDING PASS</div>
            {/* FROM */}
            <div style={{
              position: 'absolute', top: 40, left: 6,
              fontSize: 5, color: '#999', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
            }}>FROM</div>
            <div style={{
              position: 'absolute', top: 48, left: 6,
              fontSize: 10, color: '#1A1A1A', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', fontWeight: 800,
            }}>DRY</div>
            {/* arrow */}
            <div style={{
              position: 'absolute', top: 72, left: '50%', transform: 'translateX(-50%)',
              fontSize: 10, color: '#14B8A6',
            }}>↓</div>
            {/* TO */}
            <div style={{
              position: 'absolute', top: 90, left: 6,
              fontSize: 5, color: '#999', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
            }}>TO</div>
            <div style={{
              position: 'absolute', top: 98, left: 6,
              fontSize: 8, color: '#1A1A1A', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', fontWeight: 800,
            }}>COCONUT LIME</div>
            {/* barcode bars at bottom */}
            <div style={{ position: 'absolute', bottom: 14, left: 6, right: 6, display: 'flex', gap: 1, height: 24 }}>
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} style={{
                  flex: 1, background: '#1A1A1A',
                  height: i % 3 === 0 ? 24 : i % 2 === 0 ? 18 : 21,
                  alignSelf: 'flex-end',
                }} />
              ))}
            </div>
            <div style={{
              position: 'absolute', bottom: 4, left: 0, width: '100%',
              textAlign: 'center', fontSize: 4, color: '#CCC', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
            }}>FIG-OUT-2026</div>
          </div>
        );
      case 5: // Hand-Stamped
        return (
          <div style={{
            width: w, height: h, background: '#D4C4A8', borderRadius: 3,
            position: 'relative', overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          }}>
            {/* kraft texture — subtle dots */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                top: 15 + i * 18, left: 5 + (i % 4) * 12,
                width: 2, height: 2, borderRadius: '50%',
                background: 'rgba(0,0,0,0.06)',
              }} />
            ))}
            {/* stamp circle */}
            <div style={{
              position: 'absolute', top: '35%', left: '50%',
              transform: 'translate(-50%, -50%) rotate(-8deg)',
              width: 40, height: 40,
              border: '2px solid #8B4513', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                fontSize: 5.5, color: '#8B4513', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
                textAlign: 'center', fontWeight: 700, lineHeight: 1.2,
              }}>Figuring<br />Out<span style={{color:'#14B8A6'}}>.</span></div>
            </div>
            {/* ink splash */}
            <div style={{
              position: 'absolute', top: '32%', left: '60%',
              width: 8, height: 3, background: 'rgba(139,69,19,0.2)',
              borderRadius: 2, transform: 'rotate(25deg)',
            }} />
            <div style={{
              position: 'absolute', top: '38%', left: '25%',
              width: 5, height: 2, background: 'rgba(139,69,19,0.15)',
              borderRadius: 2, transform: 'rotate(-15deg)',
            }} />
            {/* flavor */}
            <div style={{
              position: 'absolute', bottom: 45, left: 0, width: '100%',
              textAlign: 'center', fontSize: 7, color: '#5C4033', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
              fontStyle: 'italic', fontWeight: 600,
            }}>Still Loading</div>
            <div style={{
              position: 'absolute', bottom: 25, left: 0, width: '100%',
              textAlign: 'center', fontSize: 4.5, color: '#8B7355', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
            }}>coconut &amp; lime</div>
          </div>
        );
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {renderContent()}
      <div style={{ marginTop: 10, fontSize: 11, color: '#14B8A6', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', fontWeight: 600 }}>
        {concept}. {labels[concept]}
      </div>
    </div>
  );
};

/* ─────────── SECTION 4: Earlier Exploration ─────────── */

const EarlierSachet = ({ accent, flavorName }: { accent: string; flavorName: string }) => {
  const w = 56;
  const h = 224;
  return (
    <div style={{
      width: w, height: h, background: '#2B2926', borderRadius: 4,
      position: 'relative', overflow: 'hidden',
      boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
    }}>
      <CrimpEdge position="top" />
      <CrimpEdge position="bottom" />

      {/* micro decorative lines */}
      {[45, 55, 65, 155, 165, 175].map((t, i) => (
        <div key={i} style={{
          position: 'absolute', top: t, left: 8, right: 8, height: 0.5,
          background: `rgba(255,255,255,0.08)`,
        }} />
      ))}

      {/* brand */}
      <div style={{
        position: 'absolute', top: 22, left: 0, width: '100%',
        textAlign: 'center', fontSize: 6, fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
        color: 'rgba(255,255,255,0.5)', letterSpacing: 1.5,
      }}>
        Figuring Out<span style={{color:'#14B8A6'}}>.</span>
      </div>

      {/* accent band */}
      <div style={{
        position: 'absolute', top: 80, left: 0, width: '100%', height: 60,
        background: accent, opacity: 0.9,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          fontSize: 7.5, color: '#fff', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
          fontStyle: 'italic', fontWeight: 600, textAlign: 'center',
          letterSpacing: 0.3, padding: '0 4px',
        }}>
          {flavorName}
        </div>
      </div>

      {/* bottom text */}
      <div style={{
        position: 'absolute', bottom: 22, left: 0, width: '100%',
        textAlign: 'center', fontSize: 4.5, color: 'rgba(255,255,255,0.35)',
        fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
      }}>
        electrolyte mix
      </div>
    </div>
  );
};

/* ════════════════════════════ MAIN PAGE ════════════════════════════ */

export default function SachetGalleryPage() {
  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh', padding: '60px 24px 100px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Page Title */}
        <div style={{ marginBottom: 80, borderBottom: '1px solid #222', paddingBottom: 40 }}>
          <h1 style={{ color: '#fff', fontSize: 40, fontWeight: 800, letterSpacing: -1, margin: 0 }}>
            Sachet Gallery
          </h1>
          <p style={{ color: '#666', fontSize: 15, marginTop: 12 }}>
            Every direction explored. Every concept tested. All in one place.
          </p>
        </div>

        {/* ═══════════ SECTION 0: THE BOLD DIRECTION ═══════════ */}
        <section style={{ marginBottom: 100 }}>
          <SectionHeader
            num="00"
            title="0. THE BOLD DIRECTION"
            desc="Razzle Red, Royal Blue, Teal. White line art, glossy names, powder explosions. Designed for phone screens, sweaty hands, and golden hour."
          />

          {/* Display A: Hero shot — fanned with powder explosions */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ fontSize: 11, color: '#555', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', marginBottom: 16, letterSpacing: 1 }}>
              HERO SHOT
            </div>
            <div style={{
              display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
              gap: 0, position: 'relative', height: 340, paddingBottom: 20,
            }}>
              {BOLD_FLAVORS.map((f, i) => {
                const angles = [-25, -10, 5];
                const offsets = [-50, 0, 50];
                const powderPositions = [
                  { top: 20, left: -30 },
                  { top: 10, left: -20 },
                  { top: 30, left: -25 },
                ];
                return (
                  <div key={f.displayName} style={{
                    position: 'absolute',
                    left: `calc(50% + ${offsets[i]}px - 30px)`,
                    bottom: 20,
                    zIndex: i + 1,
                  }}>
                    {/* Powder explosion behind sachet */}
                    <img
                      src={f.powder}
                      alt=""
                      style={{
                        position: 'absolute',
                        top: powderPositions[i].top,
                        left: powderPositions[i].left,
                        width: 150,
                        height: 150,
                        objectFit: 'contain',
                        opacity: 0.7,
                        zIndex: 0,
                        mixBlendMode: 'screen',
                        pointerEvents: 'none',
                      }}
                    />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <BoldSachet
                        flavorName={f.name}
                        bgColor={f.bgColor}
                        microText={f.micro}
                        illustration={f.illustration}
                        dotColor={f.dotColor}
                        rotate={angles[i]}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Display B: Upright side by side — clean, no powder */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ fontSize: 11, color: '#555', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', marginBottom: 16, letterSpacing: 1 }}>
              UPRIGHT LINEUP
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
              {BOLD_FLAVORS.map(f => (
                <BoldSachet
                  key={f.displayName}
                  flavorName={f.name}
                  bgColor={f.bgColor}
                  microText={f.micro}
                  illustration={f.illustration}
                  dotColor={f.dotColor}
                />
              ))}
            </div>
          </div>

          {/* Display C: Close-up 2.5x of Broke But Hydrated */}
          <div>
            <div style={{ fontSize: 11, color: '#555', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', marginBottom: 16, letterSpacing: 1 }}>
              CLOSE-UP (2.5x)
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <BoldSachet
                flavorName={BOLD_FLAVORS[0].name}
                bgColor={BOLD_FLAVORS[0].bgColor}
                microText={BOLD_FLAVORS[0].micro}
                illustration={BOLD_FLAVORS[0].illustration}
                dotColor={BOLD_FLAVORS[0].dotColor}
                scale={2.5}
              />
            </div>
          </div>
        </section>

        {/* ═══════════ SECTION 1: The Signed Print ═══════════ */}
        <section style={{ marginBottom: 100 }}>
          <SectionHeader
            num="01"
            title="1. THE SIGNED PRINT"
            desc="The final direction. Warm sand background, continuous line illustrations, hand-signed energy. 40% empty space. Minimal and confident."
          />

          {/* Display A: Fanned at diagonal angles */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ fontSize: 11, color: '#555', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', marginBottom: 16, letterSpacing: 1 }}>
              FANNED DISPLAY
            </div>
            <div style={{
              display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
              gap: 0, position: 'relative', height: 300, paddingBottom: 20,
            }}>
              {FLAVORS_S1.map((f, i) => {
                const angles = [-12, 0, 12];
                const offsets = [-30, 0, 30];
                return (
                  <div key={f.name} style={{ position: 'absolute', left: `calc(50% + ${offsets[i]}px - 30px)` }}>
                    <SignedSachet
                      flavorName={f.name}
                      accent={f.accent}
                      microText={f.micro}
                      illustration={f.illustration}
                      rotate={angles[i]}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Display B: Upright side by side */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ fontSize: 11, color: '#555', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', marginBottom: 16, letterSpacing: 1 }}>
              UPRIGHT LINEUP
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
              {FLAVORS_S1.map(f => (
                <SignedSachet
                  key={f.name}
                  flavorName={f.name}
                  accent={f.accent}
                  microText={f.micro}
                  illustration={f.illustration}
                />
              ))}
            </div>
          </div>

          {/* Display C: 2.5x Close-up */}
          <div>
            <div style={{ fontSize: 11, color: '#555', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', marginBottom: 16, letterSpacing: 1 }}>
              CLOSE-UP (2.5x)
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SignedSachet
                flavorName={FLAVORS_S1[0].name}
                accent={FLAVORS_S1[0].accent}
                microText={FLAVORS_S1[0].micro}
                illustration={FLAVORS_S1[0].illustration}
                scale={2.5}
              />
            </div>
          </div>
        </section>

        {/* ═══════════ SECTION 2: Water Experiments ═══════════ */}
        <section style={{ marginBottom: 100 }}>
          <SectionHeader
            num="02"
            title="2. WATER EXPERIMENTS"
            desc="Testing aqua washes, shimmer effects, sky blue bands, and pearl finishes on the sachet body."
          />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
            {(['2A', '2B', '2C', '2D'] as const).map(v => (
              <WaterSachet key={v} variant={v} />
            ))}
          </div>
        </section>

        {/* ═══════════ SECTION 3: Wild Concepts ═══════════ */}
        <section style={{ marginBottom: 100 }}>
          <SectionHeader
            num="03"
            title="3. WILD CONCEPTS"
            desc="Five divergent concepts pushing the sachet beyond a sachet. Concert tickets, newspapers, brutalist type, boarding passes, and hand-stamped kraft."
          />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            {([1, 2, 3, 4, 5] as const).map(c => (
              <WildSachet key={c} concept={c} />
            ))}
          </div>
        </section>

        {/* ═══════════ SECTION 4: Earlier Exploration ═══════════ */}
        <section style={{ marginBottom: 40 }}>
          <SectionHeader
            num="04"
            title="4. EARLIER EXPLORATION"
            desc="The warm charcoal direction with accent color bands. Where it all started."
          />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <EarlierSachet accent="#D46A2E" flavorName="Left On Read" />
            <EarlierSachet accent="#C4687A" flavorName="Situationship" />
            <EarlierSachet accent="#7A9B76" flavorName="Still Loading" />
          </div>
        </section>

      </div>
    </div>
  );
}
