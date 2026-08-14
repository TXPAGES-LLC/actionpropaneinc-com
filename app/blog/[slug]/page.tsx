import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BLOG_DATA_URL, getPublishedPosts, formatDate } from '@/lib/blog/source'
import { ProseContent } from '@/components/blog/ProseContent'
import { PHONE, PHONE_HREF, MAPS_HREF, ADDRESS } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const res = await fetch(`${BLOG_DATA_URL}?slug=${encodeURIComponent(slug)}`, { cache: 'no-store' })
  const data = res.ok ? await res.json() : { posts: [] }
  const published = getPublishedPosts(data.posts)
  const post = published.find((p) => p.slug === slug)

  if (!post) {
    return { title: 'Article Not Found' }
  }

  const title = post.seo?.metaTitle ?? post.title
  const description = post.seo?.metaDescription ?? post.excerpt
  const canonical = post.seo?.canonicalUrl ?? `/blog/${post.slug}`
  const ogImage = post.seo?.ogImageUrl ?? post.heroImageUrl

  return {
    title,
    description,
    keywords: post.seo?.keywords?.length ? post.seo.keywords : undefined,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      publishedTime: post.publishAt,
      modifiedTime: post.updatedAt,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const res = await fetch(`${BLOG_DATA_URL}?slug=${encodeURIComponent(slug)}`, { cache: 'no-store' })
  const data = res.ok ? await res.json() : { posts: [] }
  const { posts, collection } = data
  const published = getPublishedPosts(posts)
  const post = published.find((p) => p.slug === slug)

  if (!post) notFound()

  const basePath = collection?.basePath ?? '/blog'
  const category = post.categories?.[0] ?? post.tags?.[0]

  // JSON-LD Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishAt,
    dateModified: post.updatedAt ?? post.publishAt,
    author: {
      '@type': 'Person',
      name: post.author ?? 'Action Propane, Inc.',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Action Propane, Inc.',
      url: '',
    },
    ...(post.heroImageUrl ? { image: post.heroImageUrl } : {}),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `/blog/${post.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#0f172a] text-white py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span aria-hidden="true">/</span>
                <Link href={basePath} className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span aria-hidden="true">/</span>
                <span className="text-white/80 line-clamp-1" aria-current="page">
                  {post.title}
                </span>
              </li>
            </ol>
          </nav>

          {/* Meta chips */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {category && (
              <span className="bg-[#b91c1c] text-white text-xs font-semibold px-2.5 py-1 rounded">
                {category}
              </span>
            )}
            {post.readingTimeMinutes && (
              <span className="text-white/60 text-xs">{post.readingTimeMinutes} min read</span>
            )}
            <span className="text-white/50 text-xs">{formatDate(post.publishAt)}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-balance mb-4">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-white/70 text-base leading-relaxed max-w-2xl">{post.excerpt}</p>
          )}

          {post.author && (
            <p className="mt-4 text-sm text-white/50">
              By <span className="text-white/80 font-medium">{post.author}</span>
            </p>
          )}
        </div>
      </section>

      {/* Hero image */}
      {post.heroImageUrl && (
        <div className="bg-[#1e293b]">
          <div className="max-w-3xl mx-auto">
            <img
              src={post.heroImageUrl}
              alt={post.title}
              width={1200}
              height={630}
              loading="eager"
              decoding="async"
              className="w-full h-auto max-h-[420px] object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 py-12 grid lg:grid-cols-[1fr_280px] gap-10 items-start">
          {/* Article body */}
          <article>
            <ProseContent html={post.contentHtml} />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-[#e2e8f0] flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#f1f5f9] text-[#64748b] text-xs font-medium px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Back link */}
            <div className="mt-8">
              <Link
                href={basePath}
                className="inline-flex items-center gap-1.5 text-[#dc2626] font-medium text-sm hover:gap-0.5 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
                Back to all articles
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block space-y-6 sticky top-24">
            {/* CTA card */}
            <div className="bg-[#0f172a] rounded-xl p-6 text-white">
              <p className="font-bold text-white mb-1 text-base">Need Propane Delivery?</p>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                Call Action Propane, Inc. to schedule residential or commercial propane
                service in Central Texas.
              </p>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-4 py-3 rounded transition-colors text-sm w-full"
                aria-label={`Call Action Propane at ${PHONE}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Call {PHONE}
              </a>
              <Link
                href="/contact"
                className="mt-2 flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-4 py-2.5 rounded transition-colors text-sm w-full"
              >
                Request Service
              </Link>
            </div>

            {/* Hours card */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
              <p className="font-semibold text-[#1e293b] text-sm mb-3">Store Hours</p>
              <dl className="text-sm text-[#64748b] space-y-1.5">
                <div className="flex justify-between gap-3">
                  <dt>Mon–Fri</dt>
                  <dd className="text-[#1e293b] font-medium">8am – 6pm</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Saturday</dt>
                  <dd className="text-[#1e293b] font-medium">8am – 4pm</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Sunday</dt>
                  <dd className="text-[#94a3b8]">Closed</dd>
                </div>
              </dl>
              <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="block text-xs text-[#94a3b8] hover:text-[#dc2626] mt-3 transition-colors">
                {ADDRESS}
              </a>
            </div>

            {/* Related links */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
              <p className="font-semibold text-[#1e293b] text-sm mb-3">Our Services</p>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Residential Propane Delivery', href: '/services/residential-propane-delivery' },
                  { label: 'Commercial Propane Delivery', href: '/services/commercial-propane-delivery' },
                  { label: 'Tank Installation', href: '/services/propane-tank-installation' },
                  { label: 'Cylinder Refill Station', href: '/services/propane-cylinder-rv-refill-station' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#dc2626] hover:text-[#b91c1c] hover:underline transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
