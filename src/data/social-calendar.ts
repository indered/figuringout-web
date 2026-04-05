export interface SocialPost {
  day: number // day offset from start date
  platform: 'instagram' | 'linkedin' | 'both'
  type: 'quote' | 'flavor' | 'carousel'
  caption: string // text on image
  igCaption: string // instagram caption with hashtags
  subtitle?: string
  flavor?: string
  accentColor?: string
  size: 'square' | 'portrait'
  slideNumber?: number
  totalSlides?: number
  hashtags: string[]
}

// Start date: April 7, 2026 (Monday)
export const CALENDAR_START = '2026-04-07'

export const socialCalendar: SocialPost[] = [
  // === WEEK 1: Brand Introduction ===

  // Day 0 - Monday
  {
    day: 0,
    platform: 'instagram',
    type: 'quote',
    caption: 'hydrate while you figure it out.',
    igCaption: `hydrate while you figure it out.\n\npremium electrolytes for everyone running through life. coming soon.\n\nfiguringout.club`,
    size: 'square',
    hashtags: ['#FiguringItOut', '#StillFiguringItOut', '#Hydration', '#ComingSoon'],
  },

  // Day 1 - Tuesday
  {
    day: 1,
    platform: 'instagram',
    type: 'quote',
    caption: "no one has it together. some of us are just better hydrated.",
    igCaption: `no one has it together. some of us are just better hydrated.\n\n→ figuringout.club`,
    size: 'square',
    hashtags: ['#FiguringItOut', '#StillFiguringItOut', '#MorningRun', '#Adulting'],
  },

  // Day 2 - Wednesday
  {
    day: 2,
    platform: 'instagram',
    type: 'carousel',
    caption: 'each one named after something you\'re probably dealing with right now.',
    subtitle: 'the flavors.',
    size: 'square',
    igCaption: `each flavor is named after something you're probably dealing with right now.\n\n🟣 broke but hydrated — berry & pomegranate\n🔴 hot ex — citrus energy\n🟢 clarity — himalayan lime\n\nwhich one is your mood today?\n\nfiguringout.club`,
    slideNumber: 1,
    totalSlides: 4,
    hashtags: ['#FiguringItOut', '#Electrolytes', '#Hydration', '#RunningCommunity'],
  },

  // Day 3 - Thursday
  {
    day: 3,
    platform: 'instagram',
    type: 'flavor',
    caption: "can't afford much. can afford this.",
    flavor: 'broke-but-hydrated',
    igCaption: `broke but hydrated.\n\nberry & pomegranate. because you deserve nice things even when your bank account disagrees.\n\nfiguringout.club`,
    size: 'square',
    hashtags: ['#FiguringItOut', '#BrokeBut', '#Hydration', '#Millennials'],
  },

  // Day 4 - Friday
  {
    day: 4,
    platform: 'instagram',
    type: 'quote',
    caption: 'therapy is expensive. so you run instead.',
    igCaption: `therapy is expensive. so you run instead.\n\nhappy friday. hydrate before the weekend decisions.\n\nfiguringout.club`,
    size: 'square',
    hashtags: ['#FiguringItOut', '#FridayMood', '#RunningFromFeelings', '#TherapyIsExpensive'],
  },

  // === WEEK 2: Product & Ingredients ===

  // Day 7 - Monday
  {
    day: 7,
    platform: 'instagram',
    type: 'quote',
    caption: '0g sugar. 0 artificial sweeteners. 10 calories. 100% vegan.',
    subtitle: 'the numbers that matter.',
    igCaption: `the numbers that matter.\n\n0g sugar — not even the sneaky kind\n0 artificial sweeteners — we checked twice\n300mg sodium — the good kind of salty\n100% vegan — no animals were confused\n\nfiguringout.club`,
    size: 'square',
    hashtags: ['#FiguringItOut', '#CleanLabel', '#ZeroSugar', '#Electrolytes'],
  },

  // Day 8 - Tuesday
  {
    day: 8,
    platform: 'instagram',
    type: 'flavor',
    caption: 'the citrus energy you needed. burns a little going down.',
    flavor: 'hot-ex',
    igCaption: `hot ex.\n\ncitrus energy that hits different. like that text you shouldn't have sent.\n\nfiguringout.club`,
    size: 'square',
    hashtags: ['#FiguringItOut', '#HotEx', '#CitrusEnergy', '#Hydration'],
  },

  // Day 9 - Wednesday
  {
    day: 9,
    platform: 'instagram',
    type: 'carousel',
    caption: 'how we stack up.',
    subtitle: 'we think we win, but you do you.',
    size: 'square',
    igCaption: `how we stack up.\n\nus vs gatorade vs liquid iv.\n\nsugar: 0g vs 34g vs 11g\ncalories: 10 vs 140 vs 45\nartificial stuff: none vs yes vs yes\nvibe: existential hydration vs locker room vs wellness influencer\n\nyou do you. but we did the math.\n\nfiguringout.club`,
    slideNumber: 1,
    totalSlides: 3,
    hashtags: ['#FiguringItOut', '#Electrolytes', '#ZeroSugar', '#Hydration'],
  },

  // Day 10 - Thursday
  {
    day: 10,
    platform: 'instagram',
    type: 'quote',
    caption: "ran 5k. still don't know what i'm doing with my career.",
    igCaption: `ran 5k. still don't know what i'm doing with my career.\n\nbut at least i'm hydrated.\n\nfiguringout.club`,
    size: 'square',
    hashtags: ['#FiguringItOut', '#5amClub', '#MorningRun', '#QuarterLifeCrisis'],
  },

  // Day 11 - Friday
  {
    day: 11,
    platform: 'instagram',
    type: 'flavor',
    caption: "the one thing that's actually clear in your life.",
    flavor: 'clarity',
    igCaption: `clarity.\n\nhimalayan lime. because at least your hydration can be clear, even if nothing else is.\n\nfiguringout.club`,
    size: 'square',
    hashtags: ['#FiguringItOut', '#Clarity', '#HimalayanLime', '#FridayVibes'],
  },

  // === WEEK 3: Founder Story & Community ===

  // Day 14 - Monday
  {
    day: 14,
    platform: 'instagram',
    type: 'quote',
    caption: 'we started running because we had no answers.',
    igCaption: `we started running because we had no answers.\n\nnot sure about the job. not sure about the relationship. not sure about anything, really.\n\nso we ran. at 5am when the city was still asleep. at 10pm when the thoughts got too loud.\n\nrunning didn't give us answers. but it gave us clarity.\n\nfiguringout.club`,
    size: 'square',
    accentColor: '#14B8A6',
    hashtags: ['#FiguringItOut', '#FounderStory', '#BuildingInPublic', '#RunningCommunity'],
  },

  // Day 15 - Tuesday
  {
    day: 15,
    platform: 'instagram',
    type: 'quote',
    caption: 'for the quarter-life crisis crowd. the mid-life pivot people. the "i don\'t know what i\'m doing but i\'m doing it anyway" tribe.',
    igCaption: `this brand isn't for fitness bros.\n\nit's for the quarter-life crisis crowd.\nthe mid-life pivot people.\nthe "i don't know what i'm doing but i'm doing it anyway" tribe.\n\nwelcome to the club.\n\nfiguringout.club`,
    size: 'square',
    hashtags: ['#FiguringItOut', '#Millennials', '#Adulting', '#RunClub'],
  },

  // Day 16 - Wednesday
  {
    day: 16,
    platform: 'instagram',
    type: 'quote',
    caption: 'first 200 on the waitlist get a free box.',
    subtitle: 'figuringout.club',
    igCaption: `first 200 on the waitlist get a free box.\n\nno catch. just hydration.\n\nlink in bio → figuringout.club`,
    size: 'square',
    accentColor: '#FFD700',
    hashtags: ['#FiguringItOut', '#FreeStuff', '#Waitlist', '#ComingSoon'],
  },

  // Day 17 - Thursday
  {
    day: 17,
    platform: 'instagram',
    type: 'quote',
    caption: '"i signed up because the flavor name was left on read and honestly, same."',
    subtitle: '— priya, mumbai',
    igCaption: `"i signed up because the flavor name was 'left on read' and honestly, same."\n— priya, mumbai\n\nthe waitlist is filling up. are you in?\n\nfiguringout.club`,
    size: 'square',
    hashtags: ['#FiguringItOut', '#LeftOnRead', '#Mumbai', '#Relatable'],
  },

  // Day 18 - Friday
  {
    day: 18,
    platform: 'instagram',
    type: 'quote',
    caption: "you might not have life figured out. but at least you'll be hydrated.",
    igCaption: `you might not have life figured out. but at least you'll be hydrated while you're figuring it out.\n\nhappy weekend. stay hydrated. stay confused. it's fine.\n\nfiguringout.club`,
    size: 'square',
    hashtags: ['#FiguringItOut', '#WeekendVibes', '#Hydration', '#StillFiguringItOut'],
  },

  // === WEEK 4: Marquee Vibes & Engagement ===

  // Day 21 - Monday
  {
    day: 21,
    platform: 'instagram',
    type: 'quote',
    caption: 'still figuring it out. broke but hydrated. running anyway.',
    igCaption: `still figuring it out.\nbroke but hydrated.\nrunning anyway.\n\nmonday energy. ☀️\n\nfiguringout.club`,
    size: 'square',
    hashtags: ['#FiguringItOut', '#MondayMotivation', '#RunningAnyway', '#Hydration'],
  },

  // Day 22 - Tuesday
  {
    day: 22,
    platform: 'instagram',
    type: 'quote',
    caption: 'existential hydration.',
    igCaption: `existential hydration.\n\nbecause regular hydration wasn't complicated enough.\n\nfiguringout.club`,
    size: 'square',
    accentColor: '#FF6B9C',
    hashtags: ['#FiguringItOut', '#ExistentialHydration', '#Electrolytes'],
  },

  // Day 23 - Wednesday
  {
    day: 23,
    platform: 'instagram',
    type: 'quote',
    caption: 'the only thing i\'ve figured out today is hydration.',
    igCaption: `the only thing i've figured out today is hydration.\n\nand honestly? that's enough.\n\ntag someone who needs this reminder.\n\nfiguringout.club`,
    size: 'square',
    hashtags: ['#FiguringItOut', '#WednesdayWisdom', '#Hydration', '#TagSomeone'],
  },

  // Day 24 - Thursday
  {
    day: 24,
    platform: 'instagram',
    type: 'quote',
    caption: 'zero sugar. zero regrets.',
    igCaption: `zero sugar. zero regrets.\n\nunlike most of your decisions, this one's actually clean.\n\n0g sugar. 10 calories. no artificial anything.\n\nfiguringout.club`,
    size: 'square',
    accentColor: '#14B8A6',
    hashtags: ['#FiguringItOut', '#ZeroSugar', '#CleanLabel', '#Electrolytes'],
  },

  // Day 25 - Friday
  {
    day: 25,
    platform: 'instagram',
    type: 'quote',
    caption: 'left on read again. at least the electrolytes never ghost.',
    igCaption: `left on read again. at least the electrolytes never ghost.\n\nhave a weekend. hydrate through it.\n\nfiguringout.club`,
    size: 'square',
    accentColor: '#FFD93D',
    hashtags: ['#FiguringItOut', '#LeftOnRead', '#FridayMood', '#Ghosted'],
  },
]
