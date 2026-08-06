export const BLOG_DATA_URL =
  'https://raw.githubusercontent.com/TXPAGES-LLC/actionpropaneinc-com/main/lib/blog/posts.json'

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

/** Fetch posts, returning an empty set on any network/parse error or non-OK response. */
export async function fetchBlogData() {
  const empty = { collection: undefined, posts: [] }
  try {
    const res = await fetch(BLOG_DATA_URL, { cache: 'no-store' })
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
