'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const COUNTRY_CODES = [
  { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India' },
  { code: '+1', country: 'US', flag: '🇺🇸', name: 'USA' },
  { code: '+44', country: 'GB', flag: '🇬🇧', name: 'UK' },
  { code: '+971', country: 'AE', flag: '🇦🇪', name: 'UAE' },
  { code: '+65', country: 'SG', flag: '🇸🇬', name: 'Singapore' },
  { code: '+61', country: 'AU', flag: '🇦🇺', name: 'Australia' },
  { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', country: 'FR', flag: '🇫🇷', name: 'France' },
  { code: '+81', country: 'JP', flag: '🇯🇵', name: 'Japan' },
  { code: '+86', country: 'CN', flag: '🇨🇳', name: 'China' },
  { code: '+82', country: 'KR', flag: '🇰🇷', name: 'South Korea' },
  { code: '+55', country: 'BR', flag: '🇧🇷', name: 'Brazil' },
  { code: '+52', country: 'MX', flag: '🇲🇽', name: 'Mexico' },
  { code: '+39', country: 'IT', flag: '🇮🇹', name: 'Italy' },
  { code: '+34', country: 'ES', flag: '🇪🇸', name: 'Spain' },
  { code: '+31', country: 'NL', flag: '🇳🇱', name: 'Netherlands' },
  { code: '+46', country: 'SE', flag: '🇸🇪', name: 'Sweden' },
  { code: '+41', country: 'CH', flag: '🇨🇭', name: 'Switzerland' },
  { code: '+60', country: 'MY', flag: '🇲🇾', name: 'Malaysia' },
  { code: '+66', country: 'TH', flag: '🇹🇭', name: 'Thailand' },
  { code: '+62', country: 'ID', flag: '🇮🇩', name: 'Indonesia' },
  { code: '+63', country: 'PH', flag: '🇵🇭', name: 'Philippines' },
  { code: '+84', country: 'VN', flag: '🇻🇳', name: 'Vietnam' },
  { code: '+92', country: 'PK', flag: '🇵🇰', name: 'Pakistan' },
  { code: '+880', country: 'BD', flag: '🇧🇩', name: 'Bangladesh' },
  { code: '+94', country: 'LK', flag: '🇱🇰', name: 'Sri Lanka' },
  { code: '+977', country: 'NP', flag: '🇳🇵', name: 'Nepal' },
  { code: '+27', country: 'ZA', flag: '🇿🇦', name: 'South Africa' },
  { code: '+234', country: 'NG', flag: '🇳🇬', name: 'Nigeria' },
  { code: '+254', country: 'KE', flag: '🇰🇪', name: 'Kenya' },
  { code: '+20', country: 'EG', flag: '🇪🇬', name: 'Egypt' },
  { code: '+966', country: 'SA', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+974', country: 'QA', flag: '🇶🇦', name: 'Qatar' },
  { code: '+973', country: 'BH', flag: '🇧🇭', name: 'Bahrain' },
  { code: '+968', country: 'OM', flag: '🇴🇲', name: 'Oman' },
  { code: '+965', country: 'KW', flag: '🇰🇼', name: 'Kuwait' },
  { code: '+7', country: 'RU', flag: '🇷🇺', name: 'Russia' },
]

type SignupMethod = 'phone' | 'email'

export default function WaitlistForm() {
  const [method, setMethod] = useState<SignupMethod>('phone')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[0])
  const [showCountryPicker, setShowCountryPicker] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [position, setPosition] = useState<number | null>(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [waitlistCount, setWaitlistCount] = useState(0)
  const [sliderX, setSliderX] = useState(0)
  const [slid, setSlid] = useState(false)

  // Fetch live count from DB
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch('/api/waitlist', { cache: 'no-store' })
        if (res.ok) {
          const data = await res.json()
          setWaitlistCount(data.count || 0)
        }
      } catch {
        // fallback
      }
    }
    fetchCount()
  }, [])

  // Auto-detect country code
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/', {
          signal: AbortSignal.timeout(3000),
        })
        if (response.ok) {
          const data = await response.json()
          if (data.country_calling_code) {
            const detected = COUNTRY_CODES.find(
              c => c.code === data.country_calling_code || c.country === data.country_code
            )
            if (detected) {
              setCountryCode(detected)
              return
            }
          }
        }
      } catch {
        try {
          const locale = navigator.language || navigator.languages?.[0]
          if (locale) {
            const countryFromLocale = locale.split('-')[1]?.toUpperCase()
            if (countryFromLocale) {
              const detected = COUNTRY_CODES.find(c => c.country === countryFromLocale)
              if (detected) setCountryCode(detected)
            }
          }
        } catch {
          // Keep default
        }
      }
    }
    detectCountry()
  }, [])

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setErrorMsg('')

    if (method === 'phone') {
      const cleanPhone = phone.replace(/\D/g, '')
      if (cleanPhone.length < 7 || cleanPhone.length > 15) {
        setStatus('error')
        setErrorMsg('Enter a valid phone number')
        return
      }
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        setStatus('error')
        setErrorMsg('Enter a valid email address')
        return
      }
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          method === 'phone'
            ? { type: 'phone', phone: phone.replace(/\D/g, ''), countryCode: countryCode.code }
            : { type: 'email', email: email.toLowerCase().trim() }
        ),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setPosition(data.position || Math.floor(Math.random() * 200) + 50)
        setWaitlistCount(data.position || waitlistCount + 1)
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong')
      }
    } catch {
      setStatus('success')
      setPosition(Math.floor(Math.random() * 200) + 50)
    }
  }

  // Slide to submit handler
  const handleSlideEnd = () => {
    if (sliderX > 200) {
      setSlid(true)
      handleSubmit()
    } else {
      setSliderX(0)
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        className="relative max-w-md mx-auto px-2 sm:px-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', duration: 0.6 }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: ['#14B8A6', '#FFD700', '#FF6B6B', '#87CEEB'][i % 4],
                left: `${10 + (i * 7)}%`,
                top: '50%',
              }}
              initial={{ y: 0, opacity: 1 }}
              animate={{
                y: [0, -80 - Math.random() * 40, -60],
                x: [(i % 2 === 0 ? -1 : 1) * (10 + Math.random() * 20)],
                opacity: [1, 1, 0],
              }}
              transition={{ duration: 1.2, delay: i * 0.05 }}
            />
          ))}
        </div>

        <div
          className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)' }}
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white opacity-10" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white opacity-10" />

          <motion.div
            className="relative z-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-lg">
              <motion.span
                className="text-3xl sm:text-4xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', delay: 0.3 }}
              >
                🌴
              </motion.span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">You&apos;re in!</h3>
            <p className="text-white/90 mb-4 text-sm sm:text-base">
              Position <span className="font-bold text-yellow-300">#{position}</span> on the waitlist
            </p>

            <div className="bg-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
              <p className="text-xs sm:text-sm text-white/90">
                We&apos;ll notify you when we launch.<br />
                <span className="font-semibold text-yellow-300">First 200 get a free box.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-lg mx-auto px-2 sm:px-0">
      <motion.div
        className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(20, 184, 166, 0.2)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30 hidden sm:block"
          style={{ background: 'linear-gradient(135deg, #14B8A6, #FFD700)' }}
        />

        {/* Badge — teal, no red */}
        <motion.div
          className="flex justify-center mb-4 sm:mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <span
            className="text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full"
            style={{
              backgroundColor: 'rgba(20, 184, 166, 0.1)',
              color: '#0D9488',
            }}
          >
            First 200 get FREE box
          </span>
        </motion.div>

        {/* Headline */}
        <h3 className="text-lg sm:text-xl font-bold text-center mb-1 sm:mb-2" style={{ color: '#1A1A1A' }}>
          Join the waitlist
        </h3>
        <p className="text-xs sm:text-sm text-center mb-4 sm:mb-5" style={{ color: '#6B7280' }}>
          Be first to know when we launch
        </p>

        {/* Method Toggle */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className="inline-flex rounded-xl p-1" style={{ backgroundColor: '#F3F4F6' }}>
            <button
              type="button"
              onClick={() => setMethod('phone')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-[44px] ${
                method === 'phone' ? 'bg-white shadow-md' : ''
              }`}
              style={{ color: method === 'phone' ? '#14B8A6' : '#6B7280' }}
            >
              Phone
            </button>
            <button
              type="button"
              onClick={() => setMethod('email')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-[44px] ${
                method === 'email' ? 'bg-white shadow-md' : ''
              }`}
              style={{ color: method === 'email' ? '#14B8A6' : '#6B7280' }}
            >
              Email
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {method === 'phone' ? (
            <div className="flex gap-2">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowCountryPicker(!showCountryPicker)}
                  className="h-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center gap-1 sm:gap-2 text-sm font-medium transition-all cursor-pointer min-h-[44px]"
                  style={{ backgroundColor: '#F8F9FA', border: '2px solid transparent' }}
                >
                  <span className="text-lg">{countryCode.flag}</span>
                  <span className="hidden sm:inline" style={{ color: '#1A1A1A' }}>{countryCode.code}</span>
                  <span className="text-xs" style={{ color: '#9CA3AF' }}>▼</span>
                </button>

                <AnimatePresence>
                  {showCountryPicker && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-48 sm:w-56 bg-white rounded-xl shadow-2xl border overflow-hidden z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{ borderColor: '#E5E7EB' }}
                    >
                      <div className="max-h-60 overflow-y-auto">
                        {COUNTRY_CODES.map((cc) => (
                          <button
                            key={cc.code}
                            type="button"
                            onClick={() => {
                              setCountryCode(cc)
                              setShowCountryPicker(false)
                            }}
                            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left cursor-pointer min-h-[44px]"
                          >
                            <span className="text-xl">{cc.flag}</span>
                            <span className="text-sm font-medium" style={{ color: '#1A1A1A' }}>{cc.name}</span>
                            <span className="text-sm ml-auto" style={{ color: '#6B7280' }}>{cc.code}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                name="phone"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/[^\d\s-]/g, ''))
                  if (status === 'error') setStatus('idle')
                }}
                className="flex-1 px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base font-medium outline-none transition-all min-h-[44px]"
                style={{
                  backgroundColor: '#F8F9FA',
                  border: status === 'error' ? '2px solid #FF6B6B' : '2px solid transparent',
                  color: '#1A1A1A',
                }}
                onFocus={(e) => { e.target.style.border = '2px solid #14B8A6' }}
                onBlur={(e) => { e.target.style.border = status === 'error' ? '2px solid #FF6B6B' : '2px solid transparent' }}
              />
            </div>
          ) : (
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              className="w-full px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base font-medium outline-none transition-all min-h-[44px]"
              style={{
                backgroundColor: '#F8F9FA',
                border: status === 'error' ? '2px solid #FF6B6B' : '2px solid transparent',
                color: '#1A1A1A',
              }}
              onFocus={(e) => { e.target.style.border = '2px solid #14B8A6' }}
              onBlur={(e) => { e.target.style.border = status === 'error' ? '2px solid #FF6B6B' : '2px solid transparent' }}
            />
          )}

          {/* Desktop: normal button */}
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            className="hidden sm:block w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold transition-all disabled:opacity-70 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(20, 184, 166, 0.4)',
            }}
            whileHover={{ scale: 1.02, boxShadow: '0 6px 30px rgba(20, 184, 166, 0.5)' }}
            whileTap={{ scale: 0.98 }}
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center gap-2">
                <motion.span
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                Joining...
              </span>
            ) : (
              'Get Early Access →'
            )}
          </motion.button>

          {/* Mobile: slide to submit */}
          <div className="sm:hidden relative">
            {status === 'loading' ? (
              <div
                className="w-full py-4 rounded-2xl text-base font-bold text-center"
                style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)', color: 'white' }}
              >
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                  Joining...
                </span>
              </div>
            ) : slid ? (
              <div
                className="w-full py-4 rounded-2xl text-base font-bold text-center"
                style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)', color: 'white' }}
              >
                Submitting...
              </div>
            ) : (
              <div
                className="relative h-14 rounded-2xl overflow-hidden"
                style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}
              >
                {/* Track label */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.span
                    className="text-sm font-medium"
                    style={{ color: '#0D9488' }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Slide to get early access →
                  </motion.span>
                </div>

                {/* Draggable thumb */}
                <motion.div
                  className="absolute top-1 left-1 w-12 h-12 rounded-xl flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
                  style={{
                    background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
                    x: sliderX,
                    boxShadow: '0 2px 10px rgba(20, 184, 166, 0.4)',
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 260 }}
                  dragElastic={0}
                  onDrag={(_, info) => setSliderX(info.offset.x)}
                  onDragEnd={handleSlideEnd}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 4l6 6-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </div>
            )}
          </div>
        </form>

        <AnimatePresence>
          {status === 'error' && errorMsg && (
            <motion.p
              className="text-center text-xs sm:text-sm mt-2 sm:mt-3 font-medium"
              style={{ color: '#FF6B6B' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {errorMsg}
            </motion.p>
          )}
        </AnimatePresence>

        <p className="text-center text-[10px] sm:text-xs mt-4 sm:mt-5" style={{ color: '#9CA3AF' }}>
          No spam. Just one message when we launch.
        </p>

        {/* Social proof — dynamic count */}
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 flex items-center justify-center gap-2 sm:gap-3" style={{ borderTop: '1px solid #E5E7EB' }}>
          <div className="flex -space-x-1.5 sm:-space-x-2">
            {['🏃', '🏃‍♀️', '🏃‍♂️', '💪'].map((emoji, i) => (
              <div
                key={i}
                className="w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm border-2 border-white"
                style={{ backgroundColor: ['#FFE4B5', '#E8DFD5', '#87CEEB', '#FFB6C1'][i] }}
              >
                {emoji}
              </div>
            ))}
          </div>
          <p className="text-[10px] sm:text-xs" style={{ color: '#6B7280' }}>
            <span className="font-semibold" style={{ color: '#1A1A1A' }}>{waitlistCount > 0 ? `${waitlistCount}+` : '7+'}</span> already waiting
          </p>
        </div>
      </motion.div>
    </div>
  )
}
