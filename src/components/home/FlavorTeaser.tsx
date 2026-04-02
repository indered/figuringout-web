'use client'

import { motion } from 'framer-motion'
import { coreFlavors } from '@/data/flavors'

export default function FlavorTeaser() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#FDF8F3' }}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <motion.p
          className="text-sm font-medium tracking-widest uppercase mb-4"
          style={{ color: '#14B8A6' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          🥤 Hydration Stations
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          style={{ color: '#1A1A1A' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          What are you figuring out today?
        </motion.h2>
        <motion.p
          className="text-base max-w-xl mx-auto mb-16"
          style={{ color: '#6B7280' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Four flavors. Each one named after something you're probably dealing with right now.
        </motion.p>

        {/* Flavor Cards - Teaser Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreFlavors.map((flavor, index) => (
            <motion.div
              key={flavor.slug}
              className="rounded-3xl p-6 text-left transition-all hover:scale-[1.02] shadow-lg"
              style={{ backgroundColor: 'white', border: '2px solid #E8DFD5' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              {/* Color dot */}
              <div
                className="w-12 h-12 rounded-full mb-4 shadow-md"
                style={{ backgroundColor: flavor.color }}
              />

              {/* Flavor name */}
              <h3 className="text-lg font-bold mb-1" style={{ color: '#1A1A1A' }}>
                {flavor.name}
              </h3>

              {/* Taste profile */}
              <p className="text-xs font-semibold mb-3 tracking-wide uppercase" style={{ color: '#14B8A6' }}>
                {flavor.taste}
              </p>

              {/* Tagline */}
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                {flavor.tagline}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Limited drops teaser */}
        <motion.div
          className="mt-8 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-center gap-4 shadow-md"
          style={{ backgroundColor: 'white', border: '2px solid #14B8A6' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium" style={{ color: '#1A1A1A' }}>
            Plus limited drops like
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {['Broke But Hydrated', 'Ghosted', 'Sunday Scaries', 'Chai Can Wait'].map((name) => (
              <span
                key={name}
                className="text-xs font-bold px-3 py-1.5 rounded-full"
                style={{ backgroundColor: '#14B8A6', color: 'white' }}
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
