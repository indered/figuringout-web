import Sachet3D from '@/components/home/Sachet3D'

export default function PreviewPage() {
  const flavors = [
    { color: '#8B5CF6', label: 'Broke But Hydrated' },
    { color: '#FF4D00', label: 'Hot Ex' },
    { color: '#14B8A6', label: 'Clarity' },
  ]

  return (
    <div style={{ backgroundColor: '#FDF8F3', minHeight: '100vh', padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 40, fontFamily: 'system-ui', fontSize: 14, color: '#6B7280' }}>
        Sachet Preview — Mobile (375px)
      </h1>

      {/* Product display — 3 sachets, center raised, sides rotated */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 16, marginBottom: 60 }}>
        <div style={{ transform: 'rotate(-8deg)' }}>
          <Sachet3D color={flavors[0].color} label={flavors[0].label} size={65} />
        </div>
        <div style={{ transform: 'translateY(-16px)' }}>
          <Sachet3D color={flavors[2].color} label={flavors[2].label} size={80} />
        </div>
        <div style={{ transform: 'rotate(8deg)' }}>
          <Sachet3D color={flavors[1].color} label={flavors[1].label} size={65} />
        </div>
      </div>

      {/* Individual sachets at different sizes */}
      <h2 style={{ textAlign: 'center', marginBottom: 20, fontFamily: 'system-ui', fontSize: 12, color: '#9CA3AF' }}>
        Individual sizes: 50px, 75px, 100px, 130px
      </h2>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 24 }}>
        {[50, 75, 100, 130].map(s => (
          <div key={s}>
            <Sachet3D color="#14B8A6" label="Clarity" size={s} />
            <p style={{ textAlign: 'center', fontSize: 10, color: '#9CA3AF', marginTop: 8 }}>{s}px</p>
          </div>
        ))}
      </div>

      {/* Dark background test */}
      <div style={{ backgroundColor: '#1A1A1A', borderRadius: 16, padding: '40px 20px', marginTop: 40 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 20, fontFamily: 'system-ui', fontSize: 12, color: '#6B7280' }}>
          On dark background
        </h2>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 16 }}>
          <div style={{ transform: 'rotate(-8deg)' }}>
            <Sachet3D color={flavors[0].color} label={flavors[0].label} size={65} />
          </div>
          <div style={{ transform: 'translateY(-16px)' }}>
            <Sachet3D color={flavors[2].color} label={flavors[2].label} size={80} />
          </div>
          <div style={{ transform: 'rotate(8deg)' }}>
            <Sachet3D color={flavors[1].color} label={flavors[1].label} size={65} />
          </div>
        </div>
      </div>
    </div>
  )
}
