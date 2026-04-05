import { ImageResponse } from 'next/og'
import {
  getFonts,
  getFontConfig,
  QuoteTemplate,
  FlavorTemplate,
  CarouselTemplate,
  type TemplateParams,
} from '@/lib/templates'

export const runtime = 'edge'

function parseParams(searchParams: URLSearchParams): TemplateParams & { template: string; size: string } {
  return {
    template: searchParams.get('template') || 'quote',
    caption: searchParams.get('caption') || 'still figuring it out.',
    flavor: searchParams.get('flavor') || undefined,
    accentColor: searchParams.get('accentColor') || undefined,
    subtitle: searchParams.get('subtitle') || undefined,
    slideNumber: searchParams.get('slideNumber') ? Number(searchParams.get('slideNumber')) : undefined,
    totalSlides: searchParams.get('totalSlides') ? Number(searchParams.get('totalSlides')) : undefined,
    size: searchParams.get('size') || 'square',
  }
}

function renderTemplate(template: string, params: TemplateParams) {
  switch (template) {
    case 'flavor':
      return FlavorTemplate(params)
    case 'carousel':
      return CarouselTemplate(params)
    case 'quote':
    default:
      return QuoteTemplate(params)
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const { template, size, ...params } = parseParams(searchParams)

  const fonts = await getFonts()
  const width = 1080
  const height = size === 'portrait' ? 1350 : 1080

  return new ImageResponse(renderTemplate(template, params), {
    width,
    height,
    fonts: getFontConfig(fonts),
  })
}
