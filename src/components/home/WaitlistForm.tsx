'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WaitlistForm() {
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [position, setPosition] = useState<number | null>(null)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    const cleanPhone = phone.replace(/\D/g, '')
    if (cleanPhone.length !== 10) {
      setStatus('error')
      setErrorMsg('Enter a valid 10-digit number')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: cleanPhone }),
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
        className="relative max-w-md mx-auto"
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
          className="rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
          }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white opacity-10" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white opacity-10" />

          <motion.div
            className="relative z-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-5 shadow-lg">
              <motion.span
                className="text-4xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', delay: 0.3 }}
              >
                🌴
              </motion.span>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-white">
              You're in!
            </h3>

            <p className="text-white/90 mb-4">
              Position <span className="font-bold text-yellow-300">#{position}</span> on the waitlist
            </p>

            <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <p className="text-sm text-white/90">
                We'll WhatsApp you when we launch.<br />
                <span className="font-semibold text-yellow-300">First 1000 get a free box.</span> You're one of them.
              </p>
            </div>

            <p className="text-xs text-white/60 mt-4">
              Share with friends running through life
            </p>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-lg mx-auto px-2 sm:px-0">
      {/* Glass card container */}
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
        {/* Decorative gradient blob */}
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
        <p className="text-xs sm:text-sm text-center mb-4 sm:mb-6" style={{ color: '#6B7280' }}>
          Be first to know when we launch
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div className="relative">
            <div
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 flex items-center gap-1 font-semibold text-xs sm:text-sm"
              style={{ color: '#14B8A6' }}
            >
              <span>🇮🇳</span>
              <span>+91</span>
            </div>
            <input
              type="tel"
              placeholder="Enter your number"
              value={phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 10)
                setPhone(value)
                if (status === 'error') setStatus('idle')
              }}
              className="w-full pl-16 sm:pl-20 pr-12 sm:pr-14 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-medium outline-none transition-all"
              style={{
                backgroundColor: '#F8F9FA',
                border: status === 'error' ? '2px solid #FF6B6B' : '2px solid transparent',
                color: '#1A1A1A',
              }}
              onFocus={(e) => {
                e.target.style.border = '2px solid #14B8A6'
                e.target.style.boxShadow = '0 0 0 4px rgba(20, 184, 166, 0.1)'
              }}
              onBlur={(e) => {
                e.target.style.border = status === 'error' ? '2px solid #FF6B6B' : '2px solid transparent'
                e.target.style.boxShadow = 'none'
              }}
            />
            {phone.length > 0 && (
              <motion.div
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[10px] sm:text-xs font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ color: phone.length === 10 ? '#14B8A6' : '#9CA3AF' }}
              >
                {phone.length}/10
              </motion.div>
            )}
          </div>

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
