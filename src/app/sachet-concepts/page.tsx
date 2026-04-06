'use client'

/**
 * Sachet Concepts — 5 radically different packaging designs
 * None of these look like supplement sachets. All are buildable in pure CSS.
 * Each concept shown at 56px wide (realistic website size) + 140px (detail view).
 */

// ============================================================
// FLAVOR DATA
// ============================================================
const flavors = [
  {
    name: 'Left On Read',
    taste: 'Lemon, Black Salt & Cumin',
    joke: 'Sharp. Stings. Just like them not replying.',
    primary: '#FFD23F',    // electric yellow
    secondary: '#1A1A1A',  // black
    accent: '#FF4D00',     // brand orange
    light: '#FFF3C4',
  },
  {
    name: 'Situationship',
    taste: 'Rose & Basil Seed',
    joke: 'Sweet but complicated. No label.',
    primary: '#E8A0BF',    // dusty rose
    secondary: '#2D1B2E',  // deep plum
    accent: '#FF6B9D',     // hot pink
    light: '#FCD0E0',
  },
  {
    name: 'Therapy Is Expensive',
    taste: 'Orange & Tamarind',
    joke: 'So you run instead.',
    primary: '#FF6B35',    // burnt orange
    secondary: '#1A0F0A',  // near black
    accent: '#FFB347',     // warm amber
    light: '#FFD4B8',
  },
  {
    name: 'Still Loading',
    taste: 'Coconut & Lime',
    joke: "Life hasn't started yet. Neither has your pace.",
    primary: '#7ECFB3',    // seafoam
    secondary: '#0D2818',  // deep forest
    accent: '#B8F0D8',     // mint
    light: '#D4F5E9',
  },
]

// ============================================================
// CONCEPT 1: THE CONCERT TICKET
// Looks like a torn-at-the-perforation concert ticket stub.
// Bold diagonal text, perforated edge, event-style layout.
// Emotional reaction: "Is that a ticket to something?"
// ============================================================
function ConceptTicket({
  flavor,
  size = 56,
}: { flavor: typeof flavors[0]; size?: number }) {
  const h = size * 5.2
  const perfY = h * 0.22 // perforation line position

  return (
    <div style={{
      width: size,
      height: h,
      position: 'relative',
      fontFamily: 'var(--font-space-grotesk), system-ui',
    }}>
      {/* Shadow */}
      <div style={{
        position: 'absolute', bottom: -4, left: 3, right: 3, height: 8,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,0,0,0.2) 0%, transparent 70%)',
        filter: 'blur(3px)',
      }} />

      {/* Main body */}
      <div style={{
        width: '100%', height: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        background: flavor.secondary,
        boxShadow: '2px 4px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}>
        {/* Top stub — the "kept" part (flavor color) */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: perfY,
          background: flavor.primary,
        }}>
          {/* ADMIT ONE style tiny text */}
          <div style={{
            position: 'absolute', top: '18%', left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
          }}>
            <p style={{
              fontSize: Math.max(3, size * 0.055), fontWeight: 700,
              letterSpacing: Math.max(1, size * 0.03),
              color: flavor.secondary, textTransform: 'uppercase',
              opacity: 0.7,
            }}>HYDRATE</p>
          </div>
          {/* Number — like a ticket number */}
          <div style={{
            position: 'absolute', bottom: '15%', right: '12%',
          }}>
            <p style={{
              fontSize: Math.max(6, size * 0.14), fontWeight: 900,
              color: flavor.secondary, opacity: 0.15,
              fontFamily: 'Georgia, serif',
            }}>01</p>
          </div>
        </div>

        {/* Perforation line — dashed border + notches */}
        <div style={{
          position: 'absolute', top: perfY - 1, left: 0, right: 0, height: 2,
          backgroundImage: `repeating-linear-gradient(90deg, ${flavor.primary}80 0px, ${flavor.primary}80 3px, transparent 3px, transparent 6px)`,
        }} />
        {/* Notch left */}
        <div style={{
          position: 'absolute', top: perfY - 4, left: -4, width: 8, height: 8,
          borderRadius: '50%', background: '#0D0D0D',
        }} />
        {/* Notch right */}
        <div style={{
          position: 'absolute', top: perfY - 4, right: -4, width: 8, height: 8,
          borderRadius: '50%', background: '#0D0D0D',
        }} />

        {/* Main body area — dark with flavor name */}
        <div style={{
          position: 'absolute', top: perfY, left: 0, right: 0, bottom: 0,
        }}>
          {/* Flavor name — MASSIVE, rotated, cropped */}
          <div style={{
            position: 'absolute', top: '38%', left: '50%',
            transform: 'translate(-50%, -50%) rotate(-90deg)',
            whiteSpace: 'nowrap',
          }}>
            <p style={{
              fontSize: Math.max(7, size * 0.155), fontWeight: 900,
              color: flavor.primary,
              letterSpacing: Math.max(0.5, size * 0.015),
              textTransform: 'uppercase',
            }}>{flavor.name}</p>
          </div>

          {/* Brand name at bottom */}
          <div style={{
            position: 'absolute', bottom: '6%', left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
          }}>
            <p style={{
              fontSize: Math.max(3, size * 0.06), fontWeight: 700,
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: Math.max(1, size * 0.025),
              textTransform: 'uppercase',
            }}>FIGURING OUT.</p>
          </div>

          {/* Thin accent line near bottom */}
          <div style={{
            position: 'absolute', bottom: '14%', left: '15%', right: '15%',
            height: 1,
            background: `linear-gradient(90deg, transparent, ${flavor.primary}40, transparent)`,
          }} />
        </div>

        {/* Top crimp */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 6,
          background: `linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)`,
          borderBottom: '0.5px solid rgba(255,255,255,0.05)',
        }} />

        {/* Bottom crimp */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 6,
          background: `linear-gradient(0deg, rgba(0,0,0,0.3) 0%, transparent 100%)`,
        }} />
      </div>
    </div>
  )
}

// ============================================================
// CONCEPT 2: THE EDITORIAL / NEWSPAPER
// Looks like a clipping from a broadsheet newspaper.
// Serif typography, column rules, dateline, classified-ad energy.
// Emotional reaction: "Did they print a newspaper on a sachet?"
// ============================================================
function ConceptEditorial({
  flavor,
  size = 56,
}: { flavor: typeof flavors[0]; size?: number }) {
  const h = size * 5.2

  return (
    <div style={{
      width: size,
      height: h,
      position: 'relative',
      fontFamily: 'Georgia, "Times New Roman", serif',
    }}>
      {/* Shadow */}
      <div style={{
        position: 'absolute', bottom: -4, left: 3, right: 3, height: 8,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, transparent 70%)',
        filter: 'blur(3px)',
      }} />

      {/* Main body — off-white "newsprint" */}
      <div style={{
        width: '100%', height: '100%',
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        background: '#F5F0E8',
        boxShadow: '1px 3px 10px rgba(0,0,0,0.12), inset 0 0 20px rgba(0,0,0,0.03)',
      }}>
        {/* Newsprint texture — very fine dot pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)`,
          backgroundSize: '3px 3px',
          pointerEvents: 'none',
        }} />

        {/* Top rule — double line like a newspaper masthead */}
        <div style={{
          position: 'absolute', top: 8, left: '10%', right: '10%', height: 3,
          borderTop: '1.5px solid #1A1A1A',
          borderBottom: '0.5px solid #1A1A1A',
        }} />

        {/* "Masthead" — brand name in blackletter energy */}
        <div style={{
          position: 'absolute', top: 14, left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(4, size * 0.08), fontWeight: 400,
            color: '#1A1A1A',
            letterSpacing: Math.max(0.5, size * 0.01),
            fontStyle: 'italic',
          }}>Figuring Out</p>
        </div>

        {/* Dateline */}
        <div style={{
          position: 'absolute', top: 24, left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(2.5, size * 0.04), fontWeight: 400,
            color: '#8B8070',
            letterSpacing: 0.5,
          }}>EST. 2026</p>
        </div>

        {/* Rule below dateline */}
        <div style={{
          position: 'absolute', top: 30, left: '10%', right: '10%',
          height: 0, borderTop: '0.5px solid #C0B8A8',
        }} />

        {/* HEADLINE — the flavor name, bold serif, multi-line */}
        <div style={{
          position: 'absolute', top: '14%', left: '50%',
          transform: 'translateX(-50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
          transformOrigin: 'center center',
        }}>
          <p style={{
            fontSize: Math.max(8, size * 0.17), fontWeight: 900,
            color: '#1A1A1A',
            letterSpacing: -0.5,
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
          }}>{flavor.name.toUpperCase()}</p>
        </div>

        {/* Color accent bar — like a section marker */}
        <div style={{
          position: 'absolute', top: '55%', left: 0, width: 4, height: '20%',
          background: flavor.primary,
        }} />

        {/* Subheadline / taste — small italic */}
        <div style={{
          position: 'absolute', top: '60%', left: '50%',
          transform: 'translateX(-50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(3, size * 0.05), fontWeight: 400,
            color: '#6B6050',
            fontStyle: 'italic',
          }}>{flavor.taste}</p>
        </div>

        {/* "Column" text lines — decorative, like body copy */}
        <div style={{
          position: 'absolute', bottom: '16%', left: '15%', right: '15%',
          display: 'flex', flexDirection: 'column', gap: 2,
        }}>
          {[0.9, 0.7, 0.85, 0.6, 0.95, 0.5].map((w, i) => (
            <div key={i} style={{
              width: `${w * 100}%`, height: 1,
              background: i === 0 ? '#1A1A1A' : '#C0B8A8',
              opacity: i === 0 ? 0.6 : 0.4,
            }} />
          ))}
        </div>

        {/* Bottom rule */}
        <div style={{
          position: 'absolute', bottom: 10, left: '10%', right: '10%',
          height: 0, borderTop: '0.5px solid #C0B8A8',
        }} />

        {/* "ELECTROLYTES" — tiny footer */}
        <div style={{
          position: 'absolute', bottom: 4, left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(2, size * 0.035), fontWeight: 400,
            color: '#A09080',
            letterSpacing: Math.max(0.5, size * 0.015),
            textTransform: 'uppercase',
          }}>ELECTROLYTES</p>
        </div>

        {/* Top crimp */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 5,
          background: 'linear-gradient(180deg, #E8E0D4 0%, #F5F0E8 100%)',
        }} />

        {/* Bottom crimp */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 5,
          background: 'linear-gradient(0deg, #E0D8CC 0%, #F5F0E8 100%)',
        }} />
      </div>
    </div>
  )
}

// ============================================================
// CONCEPT 3: THE MEME SACHET / BRUTALIST
// Full-bleed color. The flavor name IS the entire design.
// Massive cropped text. No band, no white space. The text
// overflows like it can't be contained. Brutalist typography.
// Emotional reaction: "LOL wait that says Therapy Is Expensive"
// ============================================================
function ConceptBrutalist({
  flavor,
  size = 56,
}: { flavor: typeof flavors[0]; size?: number }) {
  const h = size * 5.2

  return (
    <div style={{
      width: size,
      height: h,
      position: 'relative',
      fontFamily: 'var(--font-space-grotesk), system-ui',
    }}>
      {/* Shadow */}
      <div style={{
        position: 'absolute', bottom: -4, left: 3, right: 3, height: 8,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,0,0,0.2) 0%, transparent 70%)',
        filter: 'blur(3px)',
      }} />

      {/* Main body — FULL BLEED COLOR */}
      <div style={{
        width: '100%', height: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        background: `linear-gradient(160deg, ${flavor.primary} 0%, ${flavor.accent || flavor.primary} 100%)`,
        boxShadow: `2px 4px 14px ${flavor.primary}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
      }}>
        {/* Subtle noise texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `repeating-conic-gradient(rgba(255,255,255,0.03) 0% 25%, transparent 0% 50%)`,
          backgroundSize: '4px 4px',
          pointerEvents: 'none',
        }} />

        {/* MASSIVE flavor name — rotated, cropped, overflowing */}
        <div style={{
          position: 'absolute', top: '42%', left: '50%',
          transform: 'translate(-50%, -50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(11, size * 0.22), fontWeight: 900,
            color: 'rgba(0,0,0,0.12)',
            letterSpacing: -1,
            textTransform: 'uppercase',
            lineHeight: 0.85,
          }}>{flavor.name}</p>
        </div>

        {/* Foreground flavor name — smaller, sharp, readable */}
        <div style={{
          position: 'absolute', top: '42%', left: '50%',
          transform: 'translate(-50%, -50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(7, size * 0.145), fontWeight: 900,
            color: flavor.secondary,
            letterSpacing: Math.max(0.3, size * 0.008),
            textTransform: 'uppercase',
          }}>{flavor.name}</p>
        </div>

        {/* Brand — bottom right, tiny, understated */}
        <div style={{
          position: 'absolute', bottom: '5%', right: '10%',
          transform: 'rotate(-90deg)',
          transformOrigin: 'bottom right',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(3, size * 0.05), fontWeight: 800,
            color: 'rgba(0,0,0,0.25)',
            letterSpacing: Math.max(1.5, size * 0.04),
            textTransform: 'uppercase',
          }}>FIG.OUT</p>
        </div>

        {/* Top accent — thin contrasting stripe */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 4,
          background: flavor.secondary,
        }} />

        {/* Bottom accent */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 4,
          background: flavor.secondary,
        }} />

        {/* Gloss */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 55%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  )
}

// ============================================================
// CONCEPT 4: THE BOARDING PASS
// Designed like a stylized boarding pass — "destination" is
// the flavor, "departure" is your current mood.
// Horizontal data layout, barcode-like pattern at bottom.
// Emotional reaction: "Where is this taking me?"
// ============================================================
function ConceptBoardingPass({
  flavor,
  size = 56,
}: { flavor: typeof flavors[0]; size?: number }) {
  const h = size * 5.2

  return (
    <div style={{
      width: size,
      height: h,
      position: 'relative',
      fontFamily: 'var(--font-space-grotesk), system-ui',
    }}>
      {/* Shadow */}
      <div style={{
        position: 'absolute', bottom: -4, left: 3, right: 3, height: 8,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, transparent 70%)',
        filter: 'blur(3px)',
      }} />

      {/* Main body — white with structure */}
      <div style={{
        width: '100%', height: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        background: '#FAFAFA',
        boxShadow: '1px 3px 10px rgba(0,0,0,0.1), inset 0 0 0 0.5px rgba(0,0,0,0.06)',
      }}>
        {/* Top color header strip */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: h * 0.12,
          background: `linear-gradient(135deg, ${flavor.primary}, ${flavor.accent || flavor.primary})`,
        }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
          }}>
            <p style={{
              fontSize: Math.max(3, size * 0.055), fontWeight: 800,
              color: flavor.secondary,
              letterSpacing: Math.max(1.5, size * 0.035),
              textTransform: 'uppercase',
              opacity: 0.8,
            }}>FIGURING OUT</p>
          </div>
        </div>

        {/* "FROM" section */}
        <div style={{
          position: 'absolute', top: h * 0.14, left: '50%',
          transform: 'translateX(-50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(2, size * 0.035), fontWeight: 600,
            color: '#B0B0B0',
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}>FROM</p>
        </div>

        {/* Departure code — big */}
        <div style={{
          position: 'absolute', top: '18%', left: '50%',
          transform: 'translateX(-50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(9, size * 0.18), fontWeight: 900,
            color: '#1A1A1A',
            letterSpacing: -0.5,
          }}>DRY</p>
        </div>

        {/* Arrow / direction indicator */}
        <div style={{
          position: 'absolute', top: '28%', left: '50%',
          transform: 'translateX(-50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
          display: 'flex', alignItems: 'center', gap: 2,
        }}>
          <div style={{ width: Math.max(8, size * 0.15), height: 1, background: flavor.primary }} />
          <div style={{
            width: 0, height: 0,
            borderTop: '2px solid transparent',
            borderBottom: '2px solid transparent',
            borderLeft: `3px solid ${flavor.primary}`,
          }} />
        </div>

        {/* "TO" section */}
        <div style={{
          position: 'absolute', top: '31%', left: '50%',
          transform: 'translateX(-50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(2, size * 0.035), fontWeight: 600,
            color: '#B0B0B0',
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}>TO</p>
        </div>

        {/* Destination — the FLAVOR NAME, big and bold */}
        <div style={{
          position: 'absolute', top: '42%', left: '50%',
          transform: 'translate(-50%, -50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(6, size * 0.12), fontWeight: 900,
            color: flavor.primary,
            letterSpacing: Math.max(0.3, size * 0.005),
            textTransform: 'uppercase',
          }}>{flavor.name}</p>
        </div>

        {/* Divider line with notches */}
        <div style={{
          position: 'absolute', top: '55%', left: '8%', right: '8%',
          height: 0,
          borderTop: `1px dashed ${flavor.primary}40`,
        }} />
        <div style={{
          position: 'absolute', top: 'calc(55% - 3px)', left: -3, width: 6, height: 6,
          borderRadius: '50%', background: '#0D0D0D',
        }} />
        <div style={{
          position: 'absolute', top: 'calc(55% - 3px)', right: -3, width: 6, height: 6,
          borderRadius: '50%', background: '#0D0D0D',
        }} />

        {/* Taste profile text */}
        <div style={{
          position: 'absolute', top: '62%', left: '50%',
          transform: 'translateX(-50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(2.5, size * 0.04), fontWeight: 500,
            color: '#888',
            letterSpacing: 0.3,
          }}>{flavor.taste}</p>
        </div>

        {/* Barcode-like pattern at bottom */}
        <div style={{
          position: 'absolute', bottom: '5%', left: '15%', right: '15%',
          height: h * 0.12,
          display: 'flex', gap: 0.5, alignItems: 'flex-end',
        }}>
          {[...Array(18)].map((_, i) => (
            <div key={i} style={{
              flex: i % 3 === 0 ? 2 : 1,
              height: `${50 + ((i * 17) % 50)}%`,
              background: i % 4 === 0 ? flavor.primary : '#1A1A1A',
              opacity: i % 4 === 0 ? 0.8 : 0.15,
            }} />
          ))}
        </div>

        {/* Gloss */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        {/* Crimps */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 4,
          background: 'linear-gradient(180deg, #E8E4E0 0%, #FAFAFA 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 4,
          background: 'linear-gradient(0deg, #E8E4E0 0%, #FAFAFA 100%)',
        }} />
      </div>
    </div>
  )
}

// ============================================================
// CONCEPT 5: THE HAND-STAMPED / CRAFT
// Raw kraft-paper aesthetic. Looks hand-stamped with ink.
// Rubber stamp circles, imperfect borders, raw textures.
// Like something from a specialty coffee roaster.
// Emotional reaction: "This feels artisanal, not manufactured"
// ============================================================
function ConceptCraft({
  flavor,
  size = 56,
}: { flavor: typeof flavors[0]; size?: number }) {
  const h = size * 5.2

  return (
    <div style={{
      width: size,
      height: h,
      position: 'relative',
      fontFamily: 'Georgia, "Times New Roman", serif',
    }}>
      {/* Shadow */}
      <div style={{
        position: 'absolute', bottom: -4, left: 3, right: 3, height: 8,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, transparent 70%)',
        filter: 'blur(3px)',
      }} />

      {/* Main body — kraft paper */}
      <div style={{
        width: '100%', height: '100%',
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        background: `linear-gradient(170deg, #D4C4A8 0%, #CBB896 30%, #C8B48E 60%, #C0AC84 100%)`,
        boxShadow: '1px 3px 10px rgba(0,0,0,0.12)',
      }}>
        {/* Kraft paper grain texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.015) 2px, rgba(0,0,0,0.015) 3px),
            repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.01) 3px, rgba(0,0,0,0.01) 4px)
          `,
          pointerEvents: 'none',
        }} />

        {/* Stamp circle — like a rubber stamp mark */}
        <div style={{
          position: 'absolute', top: '15%', left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.65, height: size * 0.65,
          borderRadius: '50%',
          border: `2px solid ${flavor.secondary}`,
          opacity: 0.7,
        }}>
          {/* Inner ring */}
          <div style={{
            position: 'absolute', inset: 3,
            borderRadius: '50%',
            border: `0.5px solid ${flavor.secondary}`,
            opacity: 0.4,
          }} />
        </div>

        {/* Stamp text inside circle — brand name curved (simulated) */}
        <div style={{
          position: 'absolute', top: '13%', left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(3, size * 0.05), fontWeight: 700,
            color: flavor.secondary,
            letterSpacing: Math.max(0.5, size * 0.015),
            textTransform: 'uppercase',
            opacity: 0.7,
          }}>FIG.OUT</p>
        </div>

        {/* Color ink splash — asymmetric shape */}
        <div style={{
          position: 'absolute', top: '30%', left: '8%', right: '12%',
          height: h * 0.08,
          background: flavor.primary,
          borderRadius: '2px 8px 4px 6px',
          opacity: 0.85,
          transform: 'rotate(-2deg)',
        }} />

        {/* Flavor name — stamped effect, slightly imperfect */}
        <div style={{
          position: 'absolute', top: '48%', left: '50%',
          transform: 'translate(-50%, -50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(7, size * 0.14), fontWeight: 900,
            color: flavor.secondary,
            letterSpacing: Math.max(0.3, size * 0.005),
            textTransform: 'uppercase',
            fontFamily: 'var(--font-space-grotesk), system-ui',
            opacity: 0.85,
          }}>{flavor.name}</p>
        </div>

        {/* Taste notes — hand-written energy */}
        <div style={{
          position: 'absolute', top: '66%', left: '50%',
          transform: 'translateX(-50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(2.5, size * 0.04), fontWeight: 400,
            color: flavor.secondary,
            fontStyle: 'italic',
            opacity: 0.5,
          }}>{flavor.taste}</p>
        </div>

        {/* "Batch" number — artisan detail */}
        <div style={{
          position: 'absolute', bottom: '12%', left: '50%',
          transform: 'translateX(-50%) rotate(-90deg)',
          whiteSpace: 'nowrap',
        }}>
          <p style={{
            fontSize: Math.max(2, size * 0.035), fontWeight: 600,
            color: flavor.secondary,
            letterSpacing: 1,
            opacity: 0.35,
            fontFamily: 'var(--font-space-grotesk), system-ui',
          }}>BATCH 001</p>
        </div>

        {/* Horizontal stamp lines — like a customs stamp */}
        <div style={{
          position: 'absolute', bottom: '20%', left: '12%', right: '12%',
          display: 'flex', flexDirection: 'column', gap: 3,
        }}>
          {[1, 0.75, 0.5].map((w, i) => (
            <div key={i} style={{
              width: `${w * 100}%`, height: 0.5,
              background: flavor.secondary,
              opacity: 0.15,
            }} />
          ))}
        </div>

        {/* Top crimp — kraft-colored */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 5,
          background: 'linear-gradient(180deg, #B8A47C 0%, #C8B48E 100%)',
        }}>
          <div style={{
            position: 'absolute', bottom: 0, left: 1, right: 1, height: 3,
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 2.5px)',
          }} />
        </div>

        {/* Bottom crimp */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 5,
          background: 'linear-gradient(0deg, #B0A078 0%, #C8B48E 100%)',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 1, right: 1, height: 3,
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 2.5px)',
          }} />
        </div>
      </div>
    </div>
  )
}

// ============================================================
// SECTION COMPONENT
// ============================================================
function ConceptSection({
  number,
  title,
  metaphor,
  description,
  emotional,
  ratio,
  whyDifferent,
  children,
  detailChildren,
}: {
  number: number
  title: string
  metaphor: string
  description: string
  emotional: string
  ratio: string
  whyDifferent: string
  children: React.ReactNode
  detailChildren: React.ReactNode
}) {
  return (
    <section style={{ marginBottom: 80 }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
          <span style={{
            fontSize: 11, fontWeight: 800, color: '#FF4D00',
            fontFamily: 'var(--font-space-grotesk), system-ui',
          }}>CONCEPT {number}</span>
          <span style={{
            fontSize: 9, fontWeight: 600, color: '#6B7280',
            fontFamily: 'system-ui', letterSpacing: 1,
            textTransform: 'uppercase',
          }}>{metaphor}</span>
        </div>
        <h2 style={{
          fontSize: 20, fontWeight: 800, color: '#F5F5F5',
          fontFamily: 'var(--font-space-grotesk), system-ui',
          marginBottom: 6,
        }}>{title}</h2>
        <p style={{
          fontSize: 12, color: '#9CA3AF', lineHeight: 1.6,
          fontFamily: 'system-ui', maxWidth: 500,
        }}>{description}</p>
      </div>

      {/* Specs */}
      <div style={{
        display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap',
      }}>
        <div style={{
          padding: '6px 10px', borderRadius: 4,
          background: 'rgba(255,77,0,0.08)', border: '1px solid rgba(255,77,0,0.15)',
        }}>
          <span style={{ fontSize: 8, color: '#FF4D00', fontWeight: 700, letterSpacing: 1, fontFamily: 'system-ui' }}>
            RATIO: {ratio}
          </span>
        </div>
        <div style={{
          padding: '6px 10px', borderRadius: 4,
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
        }}>
          <span style={{ fontSize: 8, color: '#9CA3AF', fontWeight: 600, letterSpacing: 0.5, fontFamily: 'system-ui' }}>
            {whyDifferent}
          </span>
        </div>
      </div>

      {/* Emotional trigger */}
      <div style={{
        padding: '8px 12px', borderRadius: 6,
        background: 'rgba(255,255,255,0.03)',
        borderLeft: '3px solid #FF4D00',
        marginBottom: 24,
      }}>
        <p style={{
          fontSize: 11, color: '#D1D5DB', fontStyle: 'italic',
          fontFamily: 'Georgia, serif',
        }}>Emotional trigger: &ldquo;{emotional}&rdquo;</p>
      </div>

      {/* Small sachets — real website size */}
      <div style={{ marginBottom: 20 }}>
        <p style={{
          fontSize: 9, color: '#6B7280', fontWeight: 600,
          letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase',
          fontFamily: 'system-ui',
        }}>AT WEBSITE SIZE (56px wide)</p>
        <div style={{
          display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-end',
          padding: '24px 20px',
          background: '#0D0D0D',
          borderRadius: 8,
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {children}
        </div>
      </div>

      {/* Large sachets — detail view */}
      <div>
        <p style={{
          fontSize: 9, color: '#6B7280', fontWeight: 600,
          letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase',
          fontFamily: 'system-ui',
        }}>DETAIL VIEW (140px wide)</p>
        <div style={{
          display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'flex-end',
          padding: '40px 30px',
          background: '#0D0D0D',
          borderRadius: 8,
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {detailChildren}
        </div>
      </div>
    </section>
  )
}


// ============================================================
// PAGE
// ============================================================
export default function SachetConceptsPage() {
  return (
    <div style={{ backgroundColor: '#111111', minHeight: '100vh', padding: '40px 20px 100px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        {/* Page header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{
            fontSize: 10, fontWeight: 800, color: '#FF4D00',
            letterSpacing: 4, marginBottom: 8,
            fontFamily: 'var(--font-space-grotesk), system-ui',
          }}>PACKAGING REDESIGN</p>
          <h1 style={{
            fontSize: 28, fontWeight: 900, color: '#F5F5F5',
            fontFamily: 'var(--font-space-grotesk), system-ui',
            marginBottom: 8,
          }}>5 Sachet Concepts</h1>
          <p style={{
            fontSize: 13, color: '#6B7280', lineHeight: 1.6,
            fontFamily: 'system-ui', maxWidth: 480, margin: '0 auto',
          }}>
            Each design rejects the typical white-stick-pack-with-colored-band.
            These look like objects people want to photograph, not supplements they hide.
          </p>
        </div>

        {/* ===== CONCEPT 1: CONCERT TICKET ===== */}
        <ConceptSection
          number={1}
          title="The Concert Ticket"
          metaphor="TICKET STUB"
          description="Dark body with a bright torn-stub top. Perforated edge with circular notches. The flavor name glows against the dark like a headliner on a gig poster. You don't drink this — you attend it."
          emotional="Is that a ticket to something?"
          ratio="1 : 5.2"
          whyDifferent="Dark background, perforation notches, stub structure"
          detailChildren={
            flavors.map((f, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <ConceptTicket flavor={f} size={140} />
                <p style={{ fontSize: 9, color: '#6B7280', fontFamily: 'system-ui', textAlign: 'center' }}>{f.name}</p>
              </div>
            ))
          }
        >
          {flavors.map((f, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <ConceptTicket flavor={f} size={56} />
              <p style={{ fontSize: 7, color: '#6B7280', fontFamily: 'system-ui' }}>{f.name}</p>
            </div>
          ))}
        </ConceptSection>

        {/* ===== CONCEPT 2: EDITORIAL ===== */}
        <ConceptSection
          number={2}
          title="The Broadsheet"
          metaphor="NEWSPAPER CLIPPING"
          description="Off-white newsprint body with serif typography, double column rules, and dateline. The flavor name is the headline. Fake body-copy lines fill the lower third. It reads like a clipping you'd pin to your wall."
          emotional="Did they print a newspaper on a sachet?"
          ratio="1 : 5.2"
          whyDifferent="Serif font, newsprint color, editorial layout, column rules"
          detailChildren={
            flavors.map((f, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <ConceptEditorial flavor={f} size={140} />
                <p style={{ fontSize: 9, color: '#6B7280', fontFamily: 'system-ui', textAlign: 'center' }}>{f.name}</p>
              </div>
            ))
          }
        >
          {flavors.map((f, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <ConceptEditorial flavor={f} size={56} />
              <p style={{ fontSize: 7, color: '#6B7280', fontFamily: 'system-ui' }}>{f.name}</p>
            </div>
          ))}
        </ConceptSection>

        {/* ===== CONCEPT 3: BRUTALIST ===== */}
        <ConceptSection
          number={3}
          title="The Meme / Brutalist"
          metaphor="FULL-BLEED TYPE"
          description="The flavor name IS the entire design. Full-bleed color, no white space, massive cropped sans-serif text with a ghosted shadow layer underneath. Every sachet is a tiny billboard that screams its joke. The text overflows like it can't be contained."
          emotional="LOL wait, that says Therapy Is Expensive"
          ratio="1 : 5.2"
          whyDifferent="Full-bleed color, no band, text IS the design, meme energy"
          detailChildren={
            flavors.map((f, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <ConceptBrutalist flavor={f} size={140} />
                <p style={{ fontSize: 9, color: '#6B7280', fontFamily: 'system-ui', textAlign: 'center' }}>{f.name}</p>
              </div>
            ))
          }
        >
          {flavors.map((f, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <ConceptBrutalist flavor={f} size={56} />
              <p style={{ fontSize: 7, color: '#6B7280', fontFamily: 'system-ui' }}>{f.name}</p>
            </div>
          ))}
        </ConceptSection>

        {/* ===== CONCEPT 4: BOARDING PASS ===== */}
        <ConceptSection
          number={4}
          title="The Boarding Pass"
          metaphor="DESTINATION UNKNOWN"
          description="Structured like a boarding pass: FROM (DRY) to DESTINATION (the flavor name). Colored header strip, dashed divider with side notches, and a barcode-like pattern at the bottom. Every sachet is a trip somewhere better."
          emotional="Where is this taking me?"
          ratio="1 : 5.2"
          whyDifferent="Data layout, barcode element, FROM/TO structure, notch divider"
          detailChildren={
            flavors.map((f, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <ConceptBoardingPass flavor={f} size={140} />
                <p style={{ fontSize: 9, color: '#6B7280', fontFamily: 'system-ui', textAlign: 'center' }}>{f.name}</p>
              </div>
            ))
          }
        >
          {flavors.map((f, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <ConceptBoardingPass flavor={f} size={56} />
              <p style={{ fontSize: 7, color: '#6B7280', fontFamily: 'system-ui' }}>{f.name}</p>
            </div>
          ))}
        </ConceptSection>

        {/* ===== CONCEPT 5: CRAFT / HAND-STAMPED ===== */}
        <ConceptSection
          number={5}
          title="The Hand-Stamped"
          metaphor="CRAFT ARTISAN"
          description="Kraft paper body with rubber-stamp aesthetics. Circular stamp mark at top, asymmetric ink splash in the flavor color, bold stamped type, batch number. Looks like it came from a specialty roaster, not a supplement factory."
          emotional="This feels artisanal, not manufactured"
          ratio="1 : 5.2"
          whyDifferent="Kraft paper color, stamp circles, ink splash, batch numbering"
          detailChildren={
            flavors.map((f, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <ConceptCraft flavor={f} size={140} />
                <p style={{ fontSize: 9, color: '#6B7280', fontFamily: 'system-ui', textAlign: 'center' }}>{f.name}</p>
              </div>
            ))
          }
        >
          {flavors.map((f, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <ConceptCraft flavor={f} size={56} />
              <p style={{ fontSize: 7, color: '#6B7280', fontFamily: 'system-ui' }}>{f.name}</p>
            </div>
          ))}
        </ConceptSection>

        {/* ===== COMPARISON STRIP ===== */}
        <section style={{ marginTop: 60, marginBottom: 40 }}>
          <p style={{
            fontSize: 10, fontWeight: 800, color: '#FF4D00',
            letterSpacing: 4, marginBottom: 16,
            fontFamily: 'var(--font-space-grotesk), system-ui',
            textAlign: 'center',
          }}>SIDE BY SIDE — &ldquo;THERAPY IS EXPENSIVE&rdquo;</p>
          <p style={{
            fontSize: 11, color: '#6B7280', textAlign: 'center',
            fontFamily: 'system-ui', marginBottom: 24,
          }}>Same flavor, all 5 concepts, at website size</p>
          <div style={{
            display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap',
            padding: '30px 20px',
            background: '#0D0D0D',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            {[
              { label: '1. Ticket', Comp: ConceptTicket },
              { label: '2. Editorial', Comp: ConceptEditorial },
              { label: '3. Brutalist', Comp: ConceptBrutalist },
              { label: '4. Boarding', Comp: ConceptBoardingPass },
              { label: '5. Craft', Comp: ConceptCraft },
            ].map(({ label, Comp }, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <Comp flavor={flavors[2]} size={56} />
                <p style={{ fontSize: 8, color: '#6B7280', fontFamily: 'system-ui' }}>{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer note */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{
            fontSize: 11, color: '#4B5563',
            fontFamily: 'system-ui', lineHeight: 1.6,
          }}>
            All concepts are pure CSS. No images, no SVGs, no emojis.
            <br />Pick one and we&apos;ll refine it into the final production design.
          </p>
        </div>
      </div>
    </div>
  )
}
