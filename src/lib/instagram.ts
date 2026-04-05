import { connectToDatabase } from './mongodb'

const GRAPH_API_BASE = 'https://graph.instagram.com/v22.0'

export async function getAccessToken(): Promise<string> {
  // Check MongoDB for a refreshed token first
  try {
    const { db } = await connectToDatabase()
    const config = await db.collection('fig_out_ig_config').findOne({ key: 'access_token' })
    if (config?.value && config.expiresAt > new Date()) {
      return config.value
    }
  } catch {
    // Fall through to env var
  }

  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  if (!token) throw new Error('INSTAGRAM_ACCESS_TOKEN is not configured')
  return token
}

export async function createMediaContainer(
  imageUrl: string,
  caption: string,
): Promise<string> {
  const token = await getAccessToken()
  const userId = process.env.INSTAGRAM_USER_ID
  if (!userId) throw new Error('INSTAGRAM_USER_ID is not configured')

  const response = await fetch(`${GRAPH_API_BASE}/${userId}/media`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      image_url: imageUrl,
      caption,
      access_token: token,
    }),
  })

  const data = await response.json()
  if (data.error) {
    throw new Error(`IG API error: ${data.error.message} (code: ${data.error.code})`)
  }

  return data.id
}

export async function publishMedia(containerId: string): Promise<string> {
  const token = await getAccessToken()
  const userId = process.env.INSTAGRAM_USER_ID
  if (!userId) throw new Error('INSTAGRAM_USER_ID is not configured')

  const response = await fetch(`${GRAPH_API_BASE}/${userId}/media_publish`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      creation_id: containerId,
      access_token: token,
    }),
  })

  const data = await response.json()
  if (data.error) {
    throw new Error(`IG publish error: ${data.error.message} (code: ${data.error.code})`)
  }

  return data.id
}

export async function refreshAccessToken(): Promise<string> {
  const currentToken = await getAccessToken()
  const appId = process.env.FACEBOOK_APP_ID
  const appSecret = process.env.FACEBOOK_APP_SECRET

  if (!appId || !appSecret) throw new Error('Facebook app credentials not configured')

  const response = await fetch(
    `https://graph.facebook.com/v22.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${currentToken}`
  )

  const data = await response.json()
  if (data.error) {
    throw new Error(`Token refresh error: ${data.error.message}`)
  }

  // Store refreshed token in MongoDB
  const { db } = await connectToDatabase()
  const expiresAt = new Date(Date.now() + (data.expires_in || 5184000) * 1000) // default 60 days

  await db.collection('fig_out_ig_config').updateOne(
    { key: 'access_token' },
    {
      $set: {
        value: data.access_token,
        expiresAt,
        updatedAt: new Date(),
      },
    },
    { upsert: true }
  )

  return data.access_token
}
