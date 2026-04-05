'use client'

import { useState, useMemo } from 'react'
import { socialCalendar, CALENDAR_START } from '@/data/social-calendar'

function getToday() {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

function getDayOffset(dateStr: string) {
  const start = new Date(CALENDAR_START)
  const current = new Date(dateStr)
  return Math.floor((current.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
}

function getDateForDay(dayOffset: number) {
  const start = new Date(CALENDAR_START)
  start.setDate(start.getDate() + dayOffset)
  return start
}

function formatDate(date: Date) {
  return date.toLocaleDateString('en-IN', { weekday: 'long', month: 'short', day: 'numeric' })
}

function buildImageUrl(post: typeof socialCalendar[number]) {
  const params = new URLSearchParams()
  params.set('template', post.type)
  params.set('caption', post.caption)
  params.set('size', post.size)
  if (post.flavor) params.set('flavor', post.flavor)
  if (post.accentColor) params.set('accentColor', post.accentColor)
  if (post.subtitle) params.set('subtitle', post.subtitle)
  if (post.slideNumber) params.set('slideNumber', String(post.slideNumber))
  if (post.totalSlides) params.set('totalSlides', String(post.totalSlides))
  return `/api/instagram/generate?${params.toString()}`
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
      style={{
        backgroundColor: copied ? '#14B8A6' : 'rgba(20, 184, 166, 0.1)',
        color: copied ? '#FDF8F3' : '#14B8A6',
      }}
    >
      {copied ? 'Copied!' : label}
    </button>
  )
}

function PostCard({ post, date }: { post: typeof socialCalendar[number]; date: Date }) {
  const imageUrl = buildImageUrl(post)
  const fullCaption = `${post.igCaption}\n\n${post.hashtags.join(' ')}`

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-2">
        <div>
          <p className="text-sm font-bold" style={{ color: '#1A1A1A' }}>
            {formatDate(date)}
          </p>
          <div className="flex gap-2 mt-1">
            <span
              className="text-[10px] font-medium px-2 py-0.5 rounded-full"
              style={{ backgroundColor: '#14B8A620', color: '#14B8A6' }}
            >
              {post.platform}
            </span>
            <span
              className="text-[10px] font-medium px-2 py-0.5 rounded-full"
              style={{ backgroundColor: '#6B728020', color: '#6B7280' }}
            >
              {post.type}
            </span>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="px-4">
        <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: post.size === 'portrait' ? '4/5' : '1/1' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={post.caption}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Caption */}
      <div className="p-4">
        <p className="text-sm whitespace-pre-line mb-3" style={{ color: '#1A1A1A', lineHeight: 1.6 }}>
          {post.igCaption}
        </p>
        <p className="text-xs" style={{ color: '#14B8A6' }}>
          {post.hashtags.join(' ')}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 px-4 pb-4">
        <a
          href={imageUrl}
          download={`figuringout-${post.type}-day${post.day}.png`}
          className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          style={{ backgroundColor: '#1A1A1A', color: '#FDF8F3' }}
        >
          Download Image
        </a>
        <CopyButton text={fullCaption} label="Copy Caption" />
        <CopyButton text={post.hashtags.join(' ')} label="Copy Tags" />
      </div>
    </div>
  )
}

export default function SocialPage() {
  const todayStr = getToday()
  const todayOffset = getDayOffset(todayStr)

  const [view, setView] = useState<'today' | 'week' | 'all'>('today')

  const posts = useMemo(() => {
    if (view === 'today') {
      return socialCalendar.filter(p => p.day === todayOffset)
    }
    if (view === 'week') {
      const weekStart = todayOffset - (todayOffset % 7)
      return socialCalendar.filter(p => p.day >= weekStart && p.day < weekStart + 7)
    }
    return socialCalendar
  }, [view, todayOffset])

  // If no posts for today, show the next upcoming post
  const showPosts = posts.length > 0
    ? posts
    : view === 'today'
      ? socialCalendar.filter(p => p.day > todayOffset).slice(0, 1)
      : posts

  const noPostToday = view === 'today' && posts.length === 0

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDF8F3' }}>
      {/* Header */}
      <div className="max-w-lg mx-auto px-4 pt-8 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-2xl font-bold" style={{ color: '#1A1A1A' }}>
            Social Calendar
          </h1>
          <span
            className="text-lg font-bold"
            style={{ color: '#14B8A6' }}
          >
            .
          </span>
        </div>
        <p className="text-sm" style={{ color: '#6B7280' }}>
          Download, copy caption, post. That simple.
        </p>

        {/* View Tabs */}
        <div className="flex gap-2 mt-4">
          {(['today', 'week', 'all'] as const).map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              className="text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
              style={{
                backgroundColor: view === v ? '#1A1A1A' : 'transparent',
                color: view === v ? '#FDF8F3' : '#6B7280',
              }}
            >
              {v === 'today' ? 'Today' : v === 'week' ? 'This Week' : 'All Posts'}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-lg mx-auto px-4 pb-12 space-y-6">
        {noPostToday && (
          <div className="text-center py-8">
            <p className="text-sm" style={{ color: '#6B7280' }}>
              No post scheduled for today. {showPosts.length > 0 ? 'Here\'s what\'s next:' : 'Check "All Posts" for the full calendar.'}
            </p>
          </div>
        )}

        {showPosts.map((post, i) => (
          <PostCard key={`${post.day}-${i}`} post={post} date={getDateForDay(post.day)} />
        ))}

        {showPosts.length === 0 && !noPostToday && (
          <div className="text-center py-12">
            <p className="text-sm" style={{ color: '#6B7280' }}>
              No posts found for this view.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
