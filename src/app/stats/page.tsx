'use client'

import { useState, useEffect } from 'react'

interface Stats {
  total: number
  today: number
  thisWeek: number
  waitlist: {
    email: number
    phone: number
    total: number
    emailList: { email: string; createdAt: string; ipCountry?: string; ipCity?: string }[]
    phoneList: { phone: string; countryCode: string; country: string; createdAt: string; ipCountry?: string; ipCity?: string }[]
  }
  topCountries: { _id: string; count: number }[]
  topCities: { _id: { city: string; country: string }; count: number }[]
  topPages: { _id: string; count: number }[]
  daily: { _id: string; count: number }[]
  recent: { country?: string; city?: string; page: string; timestamp: string }[]
}

export default function StatsPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/track', { cache: 'no-store' })
      .then(r => r.json())
      .then(setStats)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0D0D0D' }}>
        <p className="text-sm" style={{ color: '#6B7280' }}>Loading stats...</p>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0D0D0D' }}>
        <p className="text-sm" style={{ color: '#6B7280' }}>Failed to load stats.</p>
      </div>
    )
  }

  const maxDaily = Math.max(...(stats.daily.map(d => d.count) || [1]))

  return (
    <div className="min-h-screen px-4 py-10 sm:py-14" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: '#F5F5F5' }}>
            Figuring Out<span style={{ color: '#14B8A6' }}>.</span> Stats
          </h1>
          <p className="text-xs mt-1" style={{ color: '#6B7280' }}>Live visitor tracking & waitlist stats</p>
        </div>

        {/* Top cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {[
            { label: 'Total Visitors', value: stats.total, color: '#14B8A6' },
            { label: 'Today', value: stats.today, color: '#FFD700' },
            { label: 'This Week', value: stats.thisWeek, color: '#FF6B9D' },
            { label: 'Waitlist Total', value: stats.waitlist.total, color: '#8B5CF6' },
          ].map(card => (
            <div key={card.label} className="rounded-xl p-4 sm:p-5" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <p className="text-2xl sm:text-3xl font-bold" style={{ color: card.color }}>{card.value}</p>
              <p className="text-[10px] sm:text-xs mt-1" style={{ color: '#9CA3AF' }}>{card.label}</p>
            </div>
          ))}
        </div>

        {/* Waitlist breakdown */}
        <div className="rounded-xl p-4 sm:p-5 mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-xs font-semibold mb-3" style={{ color: '#9CA3AF' }}>Waitlist Breakdown</p>
          <div className="flex gap-6">
            <div>
              <p className="text-xl font-bold" style={{ color: '#14B8A6' }}>{stats.waitlist.email}</p>
              <p className="text-[10px]" style={{ color: '#6B7280' }}>Emails</p>
            </div>
            <div>
              <p className="text-xl font-bold" style={{ color: '#FFD700' }}>{stats.waitlist.phone}</p>
              <p className="text-[10px]" style={{ color: '#6B7280' }}>Phone Numbers</p>
            </div>
          </div>
        </div>

        {/* Waitlist: Emails */}
        {stats.waitlist.emailList.length > 0 && (
          <div className="rounded-xl p-4 sm:p-5 mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
            <p className="text-xs font-semibold mb-3" style={{ color: '#9CA3AF' }}>Emails ({stats.waitlist.email})</p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th className="text-left text-[10px] font-medium uppercase pb-2" style={{ color: '#6B7280' }}>#</th>
                    <th className="text-left text-[10px] font-medium uppercase pb-2" style={{ color: '#6B7280' }}>Email</th>
                    <th className="text-left text-[10px] font-medium uppercase pb-2" style={{ color: '#6B7280' }}>Location</th>
                    <th className="text-left text-[10px] font-medium uppercase pb-2" style={{ color: '#6B7280' }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.waitlist.emailList.map((e, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                      <td className="text-[10px] py-2" style={{ color: '#6B7280' }}>{i + 1}</td>
                      <td className="text-xs py-2" style={{ color: '#F5F5F5' }}>{e.email}</td>
                      <td className="text-[10px] py-2" style={{ color: '#9CA3AF' }}>{e.ipCity || '—'}{e.ipCountry ? `, ${e.ipCountry}` : ''}</td>
                      <td className="text-[10px] py-2" style={{ color: '#9CA3AF' }}>{new Date(e.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Waitlist: Phones */}
        {stats.waitlist.phoneList.length > 0 && (
          <div className="rounded-xl p-4 sm:p-5 mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
            <p className="text-xs font-semibold mb-3" style={{ color: '#9CA3AF' }}>Phone Numbers ({stats.waitlist.phone})</p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th className="text-left text-[10px] font-medium uppercase pb-2" style={{ color: '#6B7280' }}>#</th>
                    <th className="text-left text-[10px] font-medium uppercase pb-2" style={{ color: '#6B7280' }}>Number</th>
                    <th className="text-left text-[10px] font-medium uppercase pb-2" style={{ color: '#6B7280' }}>Country</th>
                    <th className="text-left text-[10px] font-medium uppercase pb-2" style={{ color: '#6B7280' }}>Location</th>
                    <th className="text-left text-[10px] font-medium uppercase pb-2" style={{ color: '#6B7280' }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.waitlist.phoneList.map((p, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                      <td className="text-[10px] py-2" style={{ color: '#6B7280' }}>{i + 1}</td>
                      <td className="text-xs py-2" style={{ color: '#F5F5F5' }}>{p.countryCode} {p.phone}</td>
                      <td className="text-[10px] py-2" style={{ color: '#9CA3AF' }}>{p.country || '—'}</td>
                      <td className="text-[10px] py-2" style={{ color: '#9CA3AF' }}>{p.ipCity || '—'}{p.ipCountry ? `, ${p.ipCountry}` : ''}</td>
                      <td className="text-[10px] py-2" style={{ color: '#9CA3AF' }}>{new Date(p.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Daily chart */}
        {stats.daily.length > 0 && (
          <div className="rounded-xl p-4 sm:p-5 mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
            <p className="text-xs font-semibold mb-4" style={{ color: '#9CA3AF' }}>Daily Visitors (14 days)</p>
            <div className="flex items-end gap-1 sm:gap-2" style={{ height: 120 }}>
              {stats.daily.map(day => (
                <div key={day._id} className="flex-1 flex flex-col items-center gap-1">
                  <p className="text-[8px] sm:text-[10px] font-bold" style={{ color: '#14B8A6' }}>{day.count}</p>
                  <div
                    className="w-full rounded-t"
                    style={{
                      height: `${Math.max((day.count / maxDaily) * 80, 4)}px`,
                      backgroundColor: '#14B8A6',
                    }}
                  />
                  <p className="text-[7px] sm:text-[9px]" style={{ color: '#6B7280' }}>
                    {day._id.slice(5)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Two column: Countries + Cities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="rounded-xl p-4 sm:p-5" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
            <p className="text-xs font-semibold mb-3" style={{ color: '#9CA3AF' }}>Top Countries</p>
            {stats.topCountries.map((c, i) => (
              <div key={c._id || i} className="flex justify-between py-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-xs" style={{ color: '#F5F5F5' }}>{c._id || 'Unknown'}</span>
                <span className="text-xs font-bold" style={{ color: '#14B8A6' }}>{c.count}</span>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-4 sm:p-5" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
            <p className="text-xs font-semibold mb-3" style={{ color: '#9CA3AF' }}>Top Cities</p>
            {stats.topCities.map((c, i) => (
              <div key={i} className="flex justify-between py-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-xs" style={{ color: '#F5F5F5' }}>{c._id?.city || 'Unknown'}, {c._id?.country || ''}</span>
                <span className="text-xs font-bold" style={{ color: '#14B8A6' }}>{c.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top pages */}
        <div className="rounded-xl p-4 sm:p-5 mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-xs font-semibold mb-3" style={{ color: '#9CA3AF' }}>Top Pages</p>
          {stats.topPages.map((p, i) => (
            <div key={p._id || i} className="flex justify-between py-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span className="text-xs font-mono" style={{ color: '#F5F5F5' }}>{p._id}</span>
              <span className="text-xs font-bold" style={{ color: '#14B8A6' }}>{p.count}</span>
            </div>
          ))}
        </div>

        {/* Recent visitors */}
        <div className="rounded-xl p-4 sm:p-5" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-xs font-semibold mb-3" style={{ color: '#9CA3AF' }}>Recent Visitors (last 50)</p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th className="text-left text-[10px] font-medium uppercase pb-2" style={{ color: '#6B7280' }}>Time</th>
                  <th className="text-left text-[10px] font-medium uppercase pb-2" style={{ color: '#6B7280' }}>Location</th>
                  <th className="text-left text-[10px] font-medium uppercase pb-2" style={{ color: '#6B7280' }}>Page</th>
                </tr>
              </thead>
              <tbody>
                {stats.recent.map((v, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                    <td className="text-[10px] sm:text-xs py-2" style={{ color: '#9CA3AF' }}>
                      {new Date(v.timestamp).toLocaleString()}
                    </td>
                    <td className="text-[10px] sm:text-xs py-2" style={{ color: '#F5F5F5' }}>
                      {v.city || '—'}{v.country ? `, ${v.country}` : ''}
                    </td>
                    <td className="text-[10px] sm:text-xs py-2 font-mono" style={{ color: '#14B8A6' }}>
                      {v.page}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
