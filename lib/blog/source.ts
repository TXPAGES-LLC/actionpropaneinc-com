export const BLOG_DATA_URL =
  'https://generator.dynapt.com/api/blog/data/a720697c-eb61-42d5-abd9-4d0b54dcce1c'

export type BlogSeo = {
  metaTitle?: string
  metaDescription?: string
  canonicalUrl?: string
  ogImageUrl?: string
  keywords?: string[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  contentHtml: string
  heroImageUrl?: string
  author?: string
  tags?: string[]
  categories?: string[]
  publishAt: string
  updatedAt?: string
  readingTimeMinutes?: number
  wordCount?: number
  seo?: BlogSeo
}

export type BlogCollection = {
  title?: string
  navLabel?: string
  basePath?: string
}

export type BlogData = {
  collection?: BlogCollection
  posts: BlogPost[]
}

/**
 * Fetch posts, returning an empty set on any network/parse error or non-OK response.
 * Pass `slug` on the post page only, so per-post traffic can be attributed —
 * the response shape is identical; the index page fetches the bare URL.
 */
export async function fetchBlogData(slug?: string) {
  const empty = { collection: undefined, posts: [] }
  const url = slug ? `${BLOG_DATA_URL}?slug=${encodeURIComponent(slug)}` : BLOG_DATA_URL
  try {
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) return empty
    const data = await res.json()
    return data
  } catch (_e) {
    return empty
  }
}

/** Filter to only published posts (publishAt <= now), sorted newest first. */
export function getPublishedPosts(posts) {
  const now = Date.now()
  return posts
    .filter((p) => new Date(p.publishAt).getTime() <= now)
    .sort((a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime())
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
