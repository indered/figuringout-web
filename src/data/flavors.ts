export type FlavorCategory = 'core' | 'limited' | 'moms' | 'middle-aged' | 'married'

export interface FlavorVariant {
  sku: string
  name: string
  priceInPaise: number
  stock: number
}

export interface Flavor {
  slug: string
  name: string
  tagline: string
  taste: string
  category: FlavorCategory
  color: string // accent color for this flavor card
  variants: FlavorVariant[]
  isNew?: boolean
  isLimited?: boolean
}

export const flavors: Flavor[] = [
  // Core 3
  {
    slug: 'broke-but-hydrated',
    name: 'Broke But Hydrated',
    tagline: "Can't afford much. Can afford this.",
    taste: 'Berry & Pomegranate',
    category: 'core',
    color: '#8B5CF6',
    variants: [
      { sku: 'BBH-10', name: 'Pack of 10', priceInPaise: 49900, stock: 100 },
      { sku: 'BBH-30', name: 'Pack of 30', priceInPaise: 129900, stock: 100 },
    ],
  },
  {
    slug: 'hot-ex',
    name: 'Hot Ex',
    tagline: 'The citrus energy you needed. Burns a little going down.',
    taste: 'Citrus Energy',
    category: 'core',
    color: '#FF4D00',
    variants: [
      { sku: 'HE-10', name: 'Pack of 10', priceInPaise: 49900, stock: 100 },
      { sku: 'HE-30', name: 'Pack of 30', priceInPaise: 129900, stock: 100 },
    ],
  },
  {
    slug: 'clarity',
    name: 'Clarity',
    tagline: "The one thing that's actually clear in your life.",
    taste: 'Himalayan Lime',
    category: 'core',
    color: '#14B8A6',
    variants: [
      { sku: 'CLR-10', name: 'Pack of 10', priceInPaise: 49900, stock: 100 },
      { sku: 'CLR-30', name: 'Pack of 30', priceInPaise: 129900, stock: 100 },
    ],
  },

  // Limited Drops
  {
    slug: 'broke-but-hydrated',
    name: 'Broke But Hydrated',
    tagline: "Can't afford therapy. Can afford this.",
    taste: 'Watermelon & Mint',
    category: 'limited',
    color: '#FF4D00',
    isLimited: true,
    variants: [
      { sku: 'BBH-10', name: 'Pack of 10', priceInPaise: 49900, stock: 50 },
    ],
  },
  {
    slug: 'ghosted',
    name: 'Ghosted',
    tagline: 'Bittersweet. Obviously.',
    taste: 'Black Currant & Lime',
    category: 'limited',
    color: '#7B2FBE',
    isLimited: true,
    variants: [
      { sku: 'GHO-10', name: 'Pack of 10', priceInPaise: 49900, stock: 50 },
    ],
  },
  {
    slug: 'sunday-scaries',
    name: 'Sunday Scaries',
    tagline: 'Every week without fail.',
    taste: 'Green Apple & Ginger',
    category: 'limited',
    color: '#2FBE6A',
    isLimited: true,
    variants: [
      { sku: 'SS-10', name: 'Pack of 10', priceInPaise: 49900, stock: 50 },
    ],
  },

  // Indian Moms
  {
    slug: 'chai-can-wait',
    name: 'Chai Can Wait',
    tagline: "She's always making it for everyone else. Today she runs first.",
    taste: 'Masala Chai & Honey',
    category: 'moms',
    color: '#D47C0F',
    isNew: true,
    variants: [
      { sku: 'CCW-10', name: 'Pack of 10', priceInPaise: 49900, stock: 100 },
    ],
  },

  // Middle Aged Men
  {
    slug: 'doctor-said-so',
    name: 'Doctor Said So',
    tagline: "Didn't want to. Here anyway.",
    taste: 'Lemon & Himalayan Salt',
    category: 'middle-aged',
    color: '#4A90D9',
    variants: [
      { sku: 'DSS-10', name: 'Pack of 10', priceInPaise: 49900, stock: 100 },
    ],
  },
  {
    slug: 'starting-monday',
    name: 'Starting Monday',
    tagline: "It's Wednesday. He's running. Progress.",
    taste: 'Orange & Ginger',
    category: 'middle-aged',
    color: '#FF8C00',
    variants: [
      { sku: 'SM-10', name: 'Pack of 10', priceInPaise: 49900, stock: 100 },
    ],
  },

  // Married
  {
    slug: 'her-idea',
    name: 'Her Idea',
    tagline: "He's here. Reluctantly. Secretly loving it.",
    taste: 'Coconut & Lime',
    category: 'married',
    color: '#E91E8C',
    variants: [
      { sku: 'HI-10', name: 'Pack of 10', priceInPaise: 49900, stock: 100 },
    ],
  },
  {
    slug: 'running-together-apart',
    name: 'Running Together, Apart',
    tagline: 'Earphones in. Parallel universes.',
    taste: 'Mixed Berry',
    category: 'married',
    color: '#9C27B0',
    variants: [
      { sku: 'RTA-10', name: 'Pack of 10', priceInPaise: 49900, stock: 100 },
    ],
  },
]

export const coreFlavors = flavors.filter(f => f.category === 'core')
export const limitedDrops = flavors.filter(f => f.category === 'limited')

export const tryAllPack = {
  slug: 'try-all-four',
  name: 'Try All Four',
  tagline: "Still figuring out your favourite. Fair.",
  description: 'One of each core flavor. 40 sachets total.',
  priceInPaise: 179900,
  compareAtPriceInPaise: 199600,
  sku: 'TAF-40',
  includes: coreFlavors.map(f => f.name),
}
