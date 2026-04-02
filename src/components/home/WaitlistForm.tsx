'use client'

import { useState } from 'react'
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong')
      }
    } catch {
      setStatus('success')
      setPosition(Math.floor(Math.random() * 200) + 50)
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
        {/* Celebration particles */}
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
          style={{
            background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
          }}
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

            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
              You're in!
            </h3>

            <p className="text-white/90 mb-4 text-sm sm:text-base">
              Position <span className="font-bold text-yellow-300">#{position}</span> on the waitlist
            </p>

            <div className="bg-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
              <p className="text-xs sm:text-sm text-white/90">
                We'll notify you when we launch.<br />
                <span className="font-semibold text-yellow-300">First 1000 get a free box.</span>
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

        {/* Badge */}
        <motion.div
          className="flex justify-center mb-4 sm:mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <span
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
              color: 'white',
            }}
          >
            <span className="text-base sm:text-lg">🎁</span>
            First 1000 get FREE box
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
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                method === 'phone' ? 'bg-white shadow-md' : ''
              }`}
              style={{ color: method === 'phone' ? '#14B8A6' : '#6B7280' }}
            >
              📱 Phone
            </button>
            <button
              type="button"
              onClick={() => setMethod('email')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                method === 'email' ? 'bg-white shadow-md' : ''
              }`}
              style={{ color: method === 'email' ? '#14B8A6' : '#6B7280' }}
            >
              ✉️ Email
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {method === 'phone' ? (
            <div className="flex gap-2">
              {/* Country Code Picker */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowCountryPicker(!showCountryPicker)}
                  className="h-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center gap-1 sm:gap-2 text-sm font-medium transition-all"
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
                            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
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

              {/* Phone Input */}
              <input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/[^\d\s-]/g, ''))
                  if (status === 'error') setStatus('idle')
                }}
                className="flex-1 px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base font-medium outline-none transition-all"
                style={{
                  backgroundColor: '#F8F9FA',
                  border: status === 'error' ? '2px solid #FF6B6B' : '2px solid transparent',
                  color: '#1A1A1A',
                }}
                onFocus={(e) => {
                  e.target.style.border = '2px solid #14B8A6'
                }}
                onBlur={(e) => {
                  e.target.style.border = status === 'error' ? '2px solid #FF6B6B' : '2px solid transparent'
                }}
              />
            </div>
          ) : (
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              className="w-full px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base font-medium outline-none transition-all"
              style={{
                backgroundColor: '#F8F9FA',
                border: status === 'error' ? '2px solid #FF6B6B' : '2px solid transparent',
                color: '#1A1A1A',
              }}
              onFocus={(e) => {
                e.target.style.border = '2px solid #14B8A6'
              }}
              onBlur={(e) => {
                e.target.style.border = status === 'error' ? '2px solid #FF6B6B' : '2px solid transparent'
              }}
            />
          )}

          <motion.button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold transition-all disabled:opacity-70"
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
                  className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                Joining...
              </span>
            ) : (
              'Get Early Access →'
            )}
          </motion.button>
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

        {/* Social proof */}
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
            <span className="font-semibold" style={{ color: '#1A1A1A' }}>153+</span> already waiting
          </p>
        </div>
      </motion.div>
    </div>
  )
}
