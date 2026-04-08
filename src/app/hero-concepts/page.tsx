'use client';

import React from 'react';

/* ─────────────────────────── HELPERS ─────────────────────────── */

const SectionHeader = ({ num, title, desc }: { num: string; title: string; desc: string }) => (
  <div style={{ marginBottom: 48 }}>
    <span style={{ color: '#14B8A6', fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
      Concept {num}
    </span>
    <h2 style={{ color: '#fff', fontSize: 32, fontWeight: 700, margin: '8px 0 12px', letterSpacing: -0.5, fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}>{title}</h2>
    <p style={{ color: '#888', fontSize: 15, maxWidth: 600, lineHeight: 1.6, fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}>{desc}</p>
  </div>
);

const font = 'var(--font-space-grotesk), system-ui, sans-serif';

/* ─────────────────────────── FLAVOR DATA ─────────────────────────── */

const flavors = [
  { name: 'Left On Read', sub: 'Lemon \u00b7 Black Salt \u00b7 Cumin', tagline: 'Sharp. Stings. Just like them not replying.', color: '#FBBF24', micro: 'you opened this faster than they\u2019ll open your message.' },
  { name: 'Situationship', sub: 'Rose \u00b7 Basil Seed', tagline: 'Sweet but complicated. No label.', color: '#FDA4AF', micro: 'still figuring out what this is.' },
  { name: 'Therapy Is Expensive', sub: 'Orange \u00b7 Tamarind', tagline: 'So you run instead.', color: '#FB923C', micro: 'co-pay: \u20b90. electrolytes: \u20b960.' },
  { name: 'Still Loading', sub: 'Coconut \u00b7 Lime', tagline: 'Life hasn\u2019t started yet. Neither has your pace.', color: '#6EE7B7', micro: 'buffering since 1994.' },
];

/* ═══════════════════════════════════════════════════════════════════
   HERO CONCEPT 1: POST-RUN GOLDEN HOUR
   60/40 split — beach scene left, dark stats panel right
   ═══════════════════════════════════════════════════════════════════ */

const StravaCard = () => (
  <div style={{
    background: '#1A1A1A', borderRadius: 16, padding: '28px 24px', border: '1px solid #2A2A2A',
    fontFamily: font, maxWidth: 320, width: '100%',
  }}>
    {/* Route squiggle */}
    <svg width="100%" height="60" viewBox="0 0 280 60" fill="none" style={{ marginBottom: 16 }}>
      <path d="M10,45 C40,10 80,50 120,25 C160,0 200,40 240,20 C260,10 270,30 275,25" stroke="#14B8A6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="10" cy="45" r="4" fill="#14B8A6" />
      <circle cx="275" cy="25" r="4" fill="#FF4D00" />
    </svg>
    {/* Stats */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 20 }}>
      <div>
        <div style={{ color: '#666', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>Distance</div>
        <div style={{ color: '#fff', fontSize: 28, fontWeight: 700, letterSpacing: -1 }}>8.4<span style={{ fontSize: 14, color: '#888', fontWeight: 400 }}>km</span></div>
      </div>
      <div>
        <div style={{ color: '#666', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>Pace</div>
        <div style={{ color: '#fff', fontSize: 28, fontWeight: 700, letterSpacing: -1 }}>4:58<span style={{ fontSize: 14, color: '#888', fontWeight: 400 }}>/km</span></div>
      </div>
      <div>
        <div style={{ color: '#666', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>Time</div>
        <div style={{ color: '#fff', fontSize: 28, fontWeight: 700, letterSpacing: -1 }}>41:42</div>
      </div>
    </div>
    {/* Splits */}
    <div style={{ borderTop: '1px solid #2A2A2A', paddingTop: 16 }}>
      <div style={{ color: '#666', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8 }}>Splits</div>
      {['5:12', '5:04', '4:58', '4:52', '4:48', '4:44', '4:38', '4:32'].map((s, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3px 0' }}>
          <span style={{ color: '#555', fontSize: 11 }}>km {i + 1}</span>
          <div style={{ flex: 1, margin: '0 8px', height: 3, borderRadius: 2, background: '#2A2A2A', overflow: 'hidden' }}>
            <div style={{ width: `${100 - i * 8}%`, height: '100%', background: i >= 6 ? '#14B8A6' : '#3A3A3A', borderRadius: 2 }} />
          </div>
          <span style={{ color: i >= 6 ? '#14B8A6' : '#888', fontSize: 12, fontWeight: i >= 6 ? 600 : 400, fontVariantNumeric: 'tabular-nums' }}>{s}</span>
        </div>
      ))}
      <div style={{ color: '#14B8A6', fontSize: 11, marginTop: 8, textAlign: 'right' }}>Negative split</div>
    </div>
  </div>
);

const GarminWatch = () => (
  <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#1A1A1A', border: '4px solid #333', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: font }}>
    <div style={{ color: '#14B8A6', fontSize: 7, letterSpacing: 1, textTransform: 'uppercase' }}>Garmin</div>
    <div style={{ color: '#fff', fontSize: 14, fontWeight: 700, lineHeight: 1 }}>6:04</div>
    <div style={{ color: '#666', fontSize: 7 }}>AM</div>
    <div style={{ display: 'flex', gap: 2, marginTop: 2 }}>
      <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#14B8A6' }} />
      <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#14B8A6', opacity: 0.5 }} />
      <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#333' }} />
    </div>
  </div>
);

const RunningShoe = ({ style: s }: { style?: React.CSSProperties }) => (
  <svg width="120" height="50" viewBox="0 0 120 50" style={s}>
    {/* Sole */}
    <path d="M10,42 C15,44 30,46 60,46 C90,46 105,44 115,40 L112,36 C100,38 70,40 30,40 C20,40 14,40 10,38 Z" fill="#333" />
    {/* Midsole */}
    <path d="M10,38 C14,40 20,40 30,40 C70,40 100,38 112,36 L108,30 C95,33 65,35 28,35 C18,35 12,34 8,32 Z" fill="#E5E5E5" />
    {/* Upper */}
    <path d="M8,32 C12,34 18,35 28,35 C65,35 95,33 108,30 C106,24 100,18 90,14 C75,8 50,10 35,14 C22,18 12,24 8,32Z" fill="#1A1A1A" />
    {/* Stripes */}
    <path d="M40,16 L28,32" stroke="#FF4D00" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    <path d="M52,14 L38,32" stroke="#FF4D00" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    <path d="M64,14 L48,34" stroke="#FF4D00" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
    {/* Lace area */}
    <ellipse cx="45" cy="18" rx="12" ry="4" fill="none" stroke="#444" strokeWidth="0.8" />
    {/* Tongue */}
    <path d="M38,16 C40,10 48,8 52,10" stroke="#333" strokeWidth="1.5" fill="#222" />
    {/* Heel tab */}
    <rect x="100" y="16" width="8" height="12" rx="2" fill="#14B8A6" />
    {/* Sand specks */}
    <circle cx="20" cy="43" r="0.8" fill="#D4C4B5" />
    <circle cx="50" cy="44" r="0.6" fill="#D4C4B5" />
    <circle cx="80" cy="43" r="0.7" fill="#D4C4B5" />
    <circle cx="95" cy="42" r="0.5" fill="#D4C4B5" />
  </svg>
);

const HeroConcept1 = () => (
  <div style={{
    display: 'flex', minHeight: 500, borderRadius: 16, overflow: 'hidden', border: '1px solid #2A2A2A',
    flexDirection: 'row',
  }}>
    {/* Beach side — 60% */}
    <div style={{
      flex: '0 0 60%', position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(180deg, #87CEEB 0%, #FFE4B5 35%, #FFA07A 65%, #E8DFD5 85%, #D4C4B5 100%)',
    }}>
      {/* Sun */}
      <div style={{
        position: 'absolute', top: '10%', left: '40%', width: 100, height: 100, borderRadius: '50%',
        background: 'radial-gradient(circle at 40% 35%, #FFF5CC, #FFD700 40%, #FFA500)',
        boxShadow: '0 0 60px rgba(255,180,0,0.4)',
      }} />
      {/* Clouds */}
      <svg style={{ position: 'absolute', top: '5%', left: '5%', opacity: 0.5 }} width="200" height="60" viewBox="0 0 200 60">
        <circle cx="60" cy="35" r="25" fill="white" fillOpacity="0.7" />
        <circle cx="90" cy="28" r="28" fill="white" fillOpacity="0.6" />
        <circle cx="130" cy="32" r="22" fill="white" fillOpacity="0.5" />
      </svg>
      {/* Waves */}
      <svg style={{ position: 'absolute', bottom: '22%', width: '100%' }} viewBox="0 0 600 40">
        <path d="M0,20 C100,40 200,0 300,20 C400,40 500,5 600,20 L600,40 L0,40Z" fill="#14B8A6" fillOpacity="0.3" />
      </svg>
      <svg style={{ position: 'absolute', bottom: '18%', width: '100%' }} viewBox="0 0 600 40">
        <path d="M0,15 C80,35 160,0 240,20 C320,40 420,5 500,18 C560,28 590,10 600,15 L600,40 L0,40Z" fill="#0D9488" fillOpacity="0.5" />
      </svg>
      <svg style={{ position: 'absolute', bottom: '14%', width: '100%' }} viewBox="0 0 600 40">
        <path d="M0,25 C60,10 120,30 180,18 C240,5 300,25 360,15 C420,5 480,22 540,12 C570,8 590,18 600,10 L600,40 L0,40Z" fill="#14B8A6" />
      </svg>
      {/* Sand */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '15%', background: 'linear-gradient(180deg, #E8DFD5, #D4C4B5)' }} />
      {/* Gear on sand — the "post-run drop" */}
      <div style={{ position: 'absolute', bottom: '4%', left: '10%', display: 'flex', alignItems: 'flex-end', gap: 16 }}>
        <RunningShoe style={{ transform: 'rotate(-8deg)' }} />
        <RunningShoe style={{ transform: 'rotate(5deg) scaleX(-1)', marginLeft: -20, marginBottom: 4 }} />
      </div>
      <div style={{ position: 'absolute', bottom: '6%', right: '15%' }}>
        <GarminWatch />
      </div>
      {/* Footprints leading to gear */}
      <div style={{ position: 'absolute', bottom: '2%', left: '50%' }}>
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} style={{
            position: 'absolute', left: i * 28, bottom: i % 2 === 0 ? 0 : 8,
            width: 10, height: 6, borderRadius: '50%',
            background: '#B8A080', opacity: 0.3 - i * 0.05,
          }} />
        ))}
      </div>
      {/* Wet sand shimmer line */}
      <div style={{ position: 'absolute', bottom: '14%', left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }} />
    </div>
    {/* Stats side — 40% */}
    <div style={{
      flex: '0 0 40%', background: '#0D0D0D', padding: '40px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      fontFamily: font,
    }}>
      <div style={{ marginBottom: 24, textAlign: 'center' }}>
        <div style={{ color: '#14B8A6', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Morning Run Complete</div>
        <h2 style={{ color: '#fff', fontSize: 28, fontWeight: 700, letterSpacing: -0.5, margin: 0, lineHeight: 1.2 }}>
          Hydrate while you<br />figure it out<span style={{ color: '#14B8A6' }}>.</span>
        </h2>
        <p style={{ color: '#666', fontSize: 13, marginTop: 8 }}>Premium electrolytes for everyone running through life.</p>
      </div>
      <StravaCard />
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   HERO CONCEPT 2: THE TRACK CUTS THROUGH
   Diagonal white track lines on beach
   ═══════════════════════════════════════════════════════════════════ */

const GarminHUD = () => (
  <div style={{
    position: 'absolute', top: 20, right: 20, fontFamily: font, background: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(8px)', borderRadius: 12, padding: '16px 20px', border: '1px solid rgba(255,255,255,0.1)',
  }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
      <span style={{ color: '#14B8A6', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase' }}>Live</span>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#14B8A6', display: 'inline-block', animation: 'pulse 2s infinite' }} />
    </div>
    <div style={{ display: 'flex', gap: 20 }}>
      <div>
        <div style={{ color: '#888', fontSize: 9, textTransform: 'uppercase', letterSpacing: 1 }}>Pace</div>
        <div style={{ color: '#fff', fontSize: 22, fontWeight: 700 }}>4:58</div>
      </div>
      <div>
        <div style={{ color: '#888', fontSize: 9, textTransform: 'uppercase', letterSpacing: 1 }}>HR</div>
        <div style={{ color: '#FF4D00', fontSize: 22, fontWeight: 700 }}>156</div>
      </div>
      <div>
        <div style={{ color: '#888', fontSize: 9, textTransform: 'uppercase', letterSpacing: 1 }}>Dist</div>
        <div style={{ color: '#fff', fontSize: 22, fontWeight: 700 }}>6.2</div>
      </div>
    </div>
  </div>
);

const HeroConcept2 = () => (
  <div style={{
    position: 'relative', minHeight: 500, borderRadius: 16, overflow: 'hidden', border: '1px solid #2A2A2A',
    background: 'linear-gradient(180deg, #87CEEB 0%, #FFE4B5 30%, #FFA07A 55%, #E8DFD5 75%, #D4C4B5 100%)',
  }}>
    {/* Sun */}
    <div style={{
      position: 'absolute', top: '8%', left: '30%', width: 120, height: 120, borderRadius: '50%',
      background: 'radial-gradient(circle at 40% 35%, #FFF5CC, #FFD700 40%, #FFA500)',
      boxShadow: '0 0 80px rgba(255,180,0,0.4)',
    }} />
    {/* Track lines — diagonal on wet sand */}
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 800 500" preserveAspectRatio="none">
      {/* Lane lines */}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <line key={i} x1={100 + i * 45} y1="500" x2={400 + i * 45} y2="0" stroke="white" strokeWidth={i === 0 || i === 5 ? 3 : 1.5} strokeOpacity={0.35} strokeDasharray={i === 0 || i === 5 ? 'none' : '8 6'} />
      ))}
      {/* Start line */}
      <line x1="150" y1="380" x2="370" y2="380" stroke="white" strokeWidth="3" strokeOpacity="0.4" />
    </svg>
    {/* Waves */}
    <svg style={{ position: 'absolute', bottom: '18%', width: '100%' }} viewBox="0 0 800 40">
      <path d="M0,20 C130,40 260,0 400,20 C530,40 660,5 800,20 L800,40 L0,40Z" fill="#14B8A6" fillOpacity="0.25" />
    </svg>
    <svg style={{ position: 'absolute', bottom: '12%', width: '100%' }} viewBox="0 0 800 40">
      <path d="M0,15 C100,35 200,0 300,20 C400,38 500,5 600,18 C700,30 750,10 800,15 L800,40 L0,40Z" fill="#14B8A6" fillOpacity="0.6" />
    </svg>
    {/* Sand */}
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '12%', background: 'linear-gradient(180deg, #E8DFD5, #D4C4B5)' }} />
    {/* Garmin HUD overlay */}
    <GarminHUD />
    {/* Center content */}
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontFamily: font, textAlign: 'center', zIndex: 10,
    }}>
      <div style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(12px)', borderRadius: 20, padding: '32px 40px', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ color: '#14B8A6', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Coming Soon</div>
        <h2 style={{ color: '#fff', fontSize: 36, fontWeight: 700, letterSpacing: -1, margin: 0, lineHeight: 1.2 }}>
          Hydrate while you<br />figure it out<span style={{ color: '#14B8A6' }}>.</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginTop: 10, marginBottom: 0 }}>Premium electrolytes for everyone running through life.</p>
      </div>
    </div>
    {/* Shoes at bottom — one on track, one off */}
    <div style={{ position: 'absolute', bottom: '5%', left: '20%', zIndex: 5 }}>
      <RunningShoe style={{ transform: 'rotate(-25deg)', opacity: 0.85 }} />
    </div>
    {/* Palm trees */}
    <svg style={{ position: 'absolute', bottom: '10%', left: '3%' }} width="60" height="120" viewBox="0 0 120 200">
      <path d="M55,200 Q60,150 65,100 Q68,50 60,30" stroke="#8B7355" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="30" cy="25" rx="35" ry="12" fill="#2D5A45" transform="rotate(-30, 60, 30)" opacity="0.6" />
      <ellipse cx="90" cy="25" rx="35" ry="12" fill="#2D5A45" transform="rotate(30, 60, 30)" opacity="0.6" />
      <ellipse cx="60" cy="10" rx="30" ry="10" fill="#3D6B55" opacity="0.6" />
    </svg>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   HERO CONCEPT 3: FLAT LAY ON SAND
   Top-down view of running gear on wet sand
   ═══════════════════════════════════════════════════════════════════ */

const PhoneStrava = () => (
  <div style={{
    width: 90, height: 160, borderRadius: 12, background: '#111', border: '2px solid #333',
    padding: '12px 8px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: 6,
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
  }}>
    <div style={{ color: '#FF4D00', fontSize: 7, fontWeight: 600, letterSpacing: 1 }}>STRAVA</div>
    <svg width="100%" height="30" viewBox="0 0 74 30" fill="none">
      <path d="M2,22 C10,5 20,25 35,12 C50,0 60,18 72,8" stroke="#14B8A6" strokeWidth="1.5" fill="none" />
    </svg>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
      <div>
        <div style={{ color: '#555', fontSize: 6, textTransform: 'uppercase' }}>Dist</div>
        <div style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>8.4<span style={{ fontSize: 7, color: '#888' }}>km</span></div>
      </div>
      <div>
        <div style={{ color: '#555', fontSize: 6, textTransform: 'uppercase' }}>Pace</div>
        <div style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>4:58</div>
      </div>
      <div>
        <div style={{ color: '#555', fontSize: 6, textTransform: 'uppercase' }}>Time</div>
        <div style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>41:42</div>
      </div>
      <div>
        <div style={{ color: '#555', fontSize: 6, textTransform: 'uppercase' }}>HR</div>
        <div style={{ color: '#FF4D00', fontSize: 12, fontWeight: 700 }}>156</div>
      </div>
    </div>
    <div style={{ marginTop: 'auto', color: '#333', fontSize: 6, textAlign: 'center' }}>Tuesday Morning Run</div>
  </div>
);

const Earbuds = () => (
  <svg width="50" height="50" viewBox="0 0 50 50">
    <circle cx="18" cy="18" r="10" fill="#222" stroke="#333" strokeWidth="1.5" />
    <circle cx="18" cy="18" r="4" fill="#333" />
    <circle cx="35" cy="32" r="10" fill="#222" stroke="#333" strokeWidth="1.5" />
    <circle cx="35" cy="32" r="4" fill="#333" />
    <path d="M25,12 C30,8 35,12 38,22" stroke="#333" strokeWidth="1" fill="none" />
  </svg>
);

const MiniSachet = ({ color, name }: { color: string; name: string }) => (
  <div style={{
    width: 36, height: 70, borderRadius: 4, overflow: 'hidden', position: 'relative',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)', transform: 'rotate(-12deg)',
  }}>
    <div style={{ height: '18%', background: '#0D0D0D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ color: '#fff', fontSize: 4, fontFamily: font, fontWeight: 600, letterSpacing: 0.5 }}>Figuring Out<span style={{ color: '#14B8A6' }}>.</span></span>
    </div>
    <div style={{ height: '62%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 3 }}>
      <span style={{ color: '#0D0D0D', fontSize: 5, fontWeight: 700, fontFamily: font, textAlign: 'center', lineHeight: 1.2 }}>{name}</span>
    </div>
    <div style={{ height: '20%', background: '#0D0D0D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ color: '#555', fontSize: 3.5, fontFamily: font }}>electrolytes</span>
    </div>
  </div>
);

const HeroConcept3 = () => (
  <div style={{
    position: 'relative', minHeight: 500, borderRadius: 16, overflow: 'hidden', border: '1px solid #2A2A2A',
    background: `
      radial-gradient(ellipse at 30% 70%, rgba(20,184,166,0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 20%, rgba(139,115,85,0.15) 0%, transparent 40%),
      linear-gradient(135deg, #D4C4B5 0%, #C8B898 30%, #D4C4B5 50%, #E0D5C5 70%, #D4C4B5 100%)
    `,
  }}>
    {/* Sand texture dots */}
    {Array.from({ length: 40 }).map((_, i) => (
      <div key={i} style={{
        position: 'absolute',
        left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
        width: Math.random() * 2 + 1, height: Math.random() * 2 + 1,
        borderRadius: '50%', background: '#B8A080', opacity: Math.random() * 0.3,
      }} />
    ))}
    {/* Wave washing in from bottom-left corner */}
    <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '50%', height: '20%' }} viewBox="0 0 400 100" preserveAspectRatio="none">
      <path d="M0,30 C50,10 100,40 150,25 C200,10 250,35 300,20 C350,5 380,25 400,15 L400,100 L0,100Z" fill="#14B8A6" fillOpacity="0.12" />
      <path d="M0,50 C40,35 80,55 120,42 C160,30 200,50 240,38 L240,100 L0,100Z" fill="#14B8A6" fillOpacity="0.06" />
    </svg>
    {/* Palm shadow across top-right */}
    <div style={{
      position: 'absolute', top: '-5%', right: '5%', width: 200, height: 300,
      background: 'linear-gradient(210deg, rgba(0,0,0,0.06) 0%, transparent 60%)',
      transform: 'rotate(-15deg)',
    }} />
    {/* Flat lay arrangement */}
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ position: 'relative', width: 420, height: 350 }}>
        {/* Shoes — center, slightly apart */}
        <div style={{ position: 'absolute', top: '30%', left: '25%', transform: 'rotate(-15deg)' }}>
          <RunningShoe />
        </div>
        <div style={{ position: 'absolute', top: '45%', left: '30%', transform: 'rotate(10deg) scaleX(-1)' }}>
          <RunningShoe />
        </div>
        {/* Garmin — top left */}
        <div style={{ position: 'absolute', top: '10%', left: '8%' }}>
          <GarminWatch />
        </div>
        {/* Phone with Strava — right side */}
        <div style={{ position: 'absolute', top: '15%', right: '5%', transform: 'rotate(5deg)' }}>
          <PhoneStrava />
        </div>
        {/* Sachet — leaning on shoe */}
        <div style={{ position: 'absolute', top: '22%', left: '55%' }}>
          <MiniSachet color="#FBBF24" name="Left On Read" />
        </div>
        {/* Second sachet — torn open */}
        <div style={{ position: 'absolute', bottom: '15%', right: '20%', transform: 'rotate(8deg)' }}>
          <MiniSachet color="#FB923C" name="Therapy Is Expensive" />
        </div>
        {/* Earbuds */}
        <div style={{ position: 'absolute', bottom: '25%', left: '10%', transform: 'rotate(-20deg)' }}>
          <Earbuds />
        </div>
      </div>
    </div>
    {/* Headline overlay */}
    <div style={{
      position: 'absolute', top: 24, left: 28, fontFamily: font, zIndex: 10,
    }}>
      <div style={{ color: '#14B8A6', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>Post-Run Essentials</div>
      <h2 style={{ color: '#1A1A1A', fontSize: 32, fontWeight: 700, letterSpacing: -1, margin: 0, lineHeight: 1.1 }}>
        Hydrate while<br />you figure it out<span style={{ color: '#14B8A6' }}>.</span>
      </h2>
    </div>
    {/* Bottom right CTA */}
    <div style={{ position: 'absolute', bottom: 20, right: 24, fontFamily: font, textAlign: 'right' }}>
      <div style={{ color: '#6B5B3E', fontSize: 13, fontWeight: 600 }}>Premium electrolytes</div>
      <div style={{ color: '#8B7355', fontSize: 11 }}>for everyone running through life.</div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   SACHET CONCEPT A: THE BAND
   Black top/bottom bands, bold flavor color in the middle
   ═══════════════════════════════════════════════════════════════════ */

const SachetBand = ({ flavor }: { flavor: typeof flavors[0] }) => (
  <div style={{
    width: 100, height: 280, borderRadius: 6, overflow: 'hidden', position: 'relative',
    boxShadow: '0 4px 24px rgba(0,0,0,0.3)', fontFamily: font,
  }}>
    {/* Top black band */}
    <div style={{
      height: '15%', background: '#0D0D0D', display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderBottom: '1px solid #222',
    }}>
      <span style={{ color: '#fff', fontSize: 8, fontWeight: 600, letterSpacing: 0.8 }}>
        Figuring Out<span style={{ color: '#14B8A6' }}>.</span>
      </span>
    </div>
    {/* Color field — flavor name dominates */}
    <div style={{
      height: '65%', background: flavor.color, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '0 10px', position: 'relative',
    }}>
      <div style={{
        fontSize: 18, fontWeight: 700, color: '#0D0D0D', lineHeight: 1.1,
        letterSpacing: -0.4, textAlign: 'left',
      }}>
        {flavor.name.split(' ').map((word, i) => (
          <div key={i}>{word}</div>
        ))}
      </div>
      {/* Micro text — the five-inch detail */}
      <div style={{
        position: 'absolute', bottom: 8, left: 10, right: 10,
        fontSize: 5.5, color: 'rgba(13,13,13,0.4)', lineHeight: 1.3, fontStyle: 'italic',
      }}>
        {flavor.micro}
      </div>
    </div>
    {/* Bottom black band — ingredients */}
    <div style={{
      height: '20%', background: '#0D0D0D', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 4,
      borderTop: '1px solid #222',
    }}>
      <span style={{ color: '#888', fontSize: 6, textTransform: 'uppercase', letterSpacing: 1.5 }}>
        {flavor.sub}
      </span>
      <span style={{ color: '#555', fontSize: 5 }}>premium electrolytes</span>
    </div>
    {/* Crimp texture top */}
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 6,
      background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 4px)',
    }} />
    {/* Crimp texture bottom */}
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: 6,
      background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 4px)',
    }} />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   SACHET CONCEPT B: THE STAMP
   All black with a circular stamp graphic
   ═══════════════════════════════════════════════════════════════════ */

const SachetStamp = ({ flavor, num }: { flavor: typeof flavors[0]; num: string }) => (
  <div style={{
    width: 100, height: 250, borderRadius: 6, overflow: 'hidden', position: 'relative',
    background: '#0D0D0D', fontFamily: font,
    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
  }}>
    {/* Brand name — small, top, like a seal */}
    <div style={{ padding: '12px 0 0', textAlign: 'center' }}>
      <span style={{ color: '#555', fontSize: 6, letterSpacing: 2, textTransform: 'uppercase' }}>
        Figuring Out<span style={{ color: '#14B8A6' }}>.</span>
      </span>
    </div>
    {/* Circular stamp */}
    <div style={{
      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      width: 80, height: 80, borderRadius: '50%', border: `3px solid ${flavor.color}`,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Large number */}
      <div style={{ fontSize: 32, fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: -2 }}>{num}</div>
    </div>
    {/* Flavor name arcing — simplified as positioned text */}
    <div style={{
      position: 'absolute', top: '32%', left: 0, right: 0, textAlign: 'center',
      fontSize: 7, color: flavor.color, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 600,
    }}>
      {flavor.name}
    </div>
    {/* Ingredients below stamp */}
    <div style={{
      position: 'absolute', bottom: '22%', left: 0, right: 0, textAlign: 'center',
      fontSize: 5.5, color: '#555', letterSpacing: 1,
    }}>
      {flavor.sub}
    </div>
    {/* Tagline — rotated on right edge */}
    <div style={{
      position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%) rotate(90deg)',
      transformOrigin: 'center', fontSize: 5, color: '#333', whiteSpace: 'nowrap', letterSpacing: 0.5,
    }}>
      {flavor.tagline}
    </div>
    {/* Micro text bottom */}
    <div style={{
      position: 'absolute', bottom: 10, left: 0, right: 0, textAlign: 'center',
      fontSize: 5, color: '#333', fontStyle: 'italic',
    }}>
      {flavor.micro}
    </div>
    {/* Crimp edges */}
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 6,
      background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 4px)',
    }} />
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: 6,
      background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 4px)',
    }} />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   SACHET CONCEPT C: THE FOLD
   Visible heat-seal as design element — top color, bottom black
   ═══════════════════════════════════════════════════════════════════ */

const SachetFold = ({ flavor }: { flavor: typeof flavors[0] }) => (
  <div style={{
    width: 100, height: 260, borderRadius: 6, overflow: 'hidden', position: 'relative',
    fontFamily: font, boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
  }}>
    {/* Top half — flavor color */}
    <div style={{
      height: '50%', background: flavor.color, position: 'relative',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10px',
    }}>
      {/* Brand */}
      <div style={{ fontSize: 6, color: 'rgba(13,13,13,0.5)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>
        Figuring Out<span style={{ color: '#14B8A6' }}>.</span>
      </div>
      {/* Flavor name — large */}
      <div style={{ fontSize: 16, fontWeight: 700, color: '#0D0D0D', lineHeight: 1.1, letterSpacing: -0.3 }}>
        {flavor.name}
      </div>
      {/* Tagline */}
      <div style={{ fontSize: 6, color: 'rgba(13,13,13,0.5)', marginTop: 6 }}>
        {flavor.tagline}
      </div>
      {/* GPS route subtle watermark */}
      <svg style={{ position: 'absolute', top: 8, right: 6, opacity: 0.12 }} width="30" height="30" viewBox="0 0 30 30">
        <path d="M3,25 C8,10 15,20 22,8 C26,2 28,10 28,5" stroke="#0D0D0D" strokeWidth="1.5" fill="none" />
        <circle cx="3" cy="25" r="2" fill="#0D0D0D" />
        <circle cx="28" cy="5" r="2" fill="#0D0D0D" />
      </svg>
    </div>
    {/* Tear line — the fold */}
    <div style={{ position: 'relative', height: 12, background: '#0D0D0D' }}>
      <div style={{
        position: 'absolute', top: 2, left: 0, right: 0, height: 1, borderTop: '1px dashed rgba(255,255,255,0.2)',
      }} />
      <div style={{
        position: 'absolute', top: 6, left: 0, right: 0, height: 1, borderTop: '1px dashed rgba(255,255,255,0.2)',
      }} />
      <div style={{
        position: 'absolute', top: 1, right: 6, fontSize: 4.5, color: 'rgba(255,255,255,0.25)',
        textTransform: 'uppercase', letterSpacing: 1,
      }}>
        tear here &rarr;
      </div>
    </div>
    {/* Bottom half — black with micro-text */}
    <div style={{
      height: 'calc(50% - 12px)', background: '#0D0D0D', position: 'relative',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10px',
    }}>
      {/* Ingredients */}
      <div style={{ fontSize: 6, color: '#666', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8 }}>
        {flavor.sub}
      </div>
      {/* Fortune cookie micro-text */}
      <div style={{ fontSize: 7, color: '#444', lineHeight: 1.5, fontStyle: 'italic' }}>
        {flavor.micro}
      </div>
      {/* Pace notation — runner culture detail */}
      <div style={{
        position: 'absolute', bottom: 10, right: 8,
        fontSize: 5, color: '#2A2A2A', fontVariantNumeric: 'tabular-nums',
      }}>
        4:58/km
      </div>
      {/* Electrolytes label */}
      <div style={{ position: 'absolute', bottom: 10, left: 10, fontSize: 5, color: '#333' }}>
        premium electrolytes
      </div>
    </div>
    {/* Crimp edges */}
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 6,
      background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 4px)',
    }} />
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: 6,
      background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 4px)',
    }} />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════ */

export default function HeroConceptsPage() {
  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh', padding: '40px 20px', fontFamily: font }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Page header */}
        <div style={{ marginBottom: 60, borderBottom: '1px solid #1A1A1A', paddingBottom: 32 }}>
          <span style={{ color: '#14B8A6', fontSize: 12, letterSpacing: 3, textTransform: 'uppercase' }}>
            Figuring Out<span style={{ color: '#14B8A6' }}>.</span> Design Lab
          </span>
          <h1 style={{ color: '#fff', fontSize: 40, fontWeight: 700, margin: '12px 0 8px', letterSpacing: -1 }}>
            Hero Concepts + Sachet Redesign
          </h1>
          <p style={{ color: '#666', fontSize: 15, maxWidth: 600, lineHeight: 1.6 }}>
            3 hero layouts and 3 sachet designs. All inspired by &ldquo;Post-Run Golden Hour&rdquo; — the aftermath of a beach run. Pick what speaks to you.
          </p>
        </div>

        {/* ── HERO CONCEPT 1 ── */}
        <div style={{ marginBottom: 80 }}>
          <SectionHeader
            num="H1"
            title='Post-Run Golden Hour'
            desc='60/40 split. Beach scene with dropped gear left, dark stats panel right. Strava card with negative splits. The "someone just finished a run" energy.'
          />
          <HeroConcept1 />
        </div>

        {/* ── HERO CONCEPT 2 ── */}
        <div style={{ marginBottom: 80 }}>
          <SectionHeader
            num="H2"
            title='The Track Cuts Through'
            desc='Full beach background with diagonal running track lane lines on wet sand. Garmin HUD overlay in corner. Content floats in glass card. More kinetic energy.'
          />
          <HeroConcept2 />
        </div>

        {/* ── HERO CONCEPT 3 ── */}
        <div style={{ marginBottom: 80 }}>
          <SectionHeader
            num="H3"
            title='Flat Lay on Sand'
            desc='Overhead top-down view of running gear on wet sand. Magazine editorial style. Phone with Strava, shoes, Garmin, sachets, earbuds. Most Instagram-shareable.'
          />
          <HeroConcept3 />
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #14B8A6, transparent)', margin: '40px 0 60px' }} />

        {/* ── SACHET CONCEPT A: THE BAND ── */}
        <div style={{ marginBottom: 80 }}>
          <SectionHeader
            num="S-A"
            title='The Band'
            desc='Black top/bottom bands framing a bold flavor color field. Flavor name offset left, oversized. Micro-text fortune cookies at bottom of the color band. Ratio 1:2.8 — wider than a lighter.'
          />
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'center' }}>
            {flavors.map((f) => (
              <div key={f.name} style={{ textAlign: 'center' }}>
                <SachetBand flavor={f} />
                <div style={{ color: '#555', fontSize: 11, marginTop: 12 }}>{f.tagline}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SACHET CONCEPT B: THE STAMP ── */}
        <div style={{ marginBottom: 80 }}>
          <SectionHeader
            num="S-B"
            title='The Stamp'
            desc='All-black body with a circular stamp graphic. Big numeral center, flavor name arcing top. Tagline rotated on the edge. Looks like a limited-edition run. Liquid Death energy.'
          />
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'center' }}>
            {flavors.map((f, i) => (
              <div key={f.name} style={{ textAlign: 'center' }}>
                <SachetStamp flavor={f} num={String(i + 1).padStart(2, '0')} />
                <div style={{ color: '#555', fontSize: 11, marginTop: 12 }}>{f.tagline}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SACHET CONCEPT C: THE FOLD ── */}
        <div style={{ marginBottom: 80 }}>
          <SectionHeader
            num="S-C"
            title='The Fold'
            desc='Visible heat-seal tear line as a design element. Top half: flavor color with name. Bottom half: black with micro-text fortune cookies. GPS route watermark. Pace notation hidden near the barcode area.'
          />
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'center' }}>
            {flavors.map((f) => (
              <div key={f.name} style={{ textAlign: 'center' }}>
                <SachetFold flavor={f} />
                <div style={{ color: '#555', fontSize: 11, marginTop: 12 }}>{f.tagline}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div style={{ textAlign: 'center', padding: '40px 0 60px', borderTop: '1px solid #1A1A1A' }}>
          <p style={{ color: '#444', fontSize: 13 }}>
            Pick a hero (H1/H2/H3) + a sachet style (A/B/C). Mix and match welcome.
          </p>
        </div>
      </div>
    </div>
  );
}
