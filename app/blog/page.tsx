import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BLOG_DATA_URL, getPublishedPosts } from '@/lib/blog/source'
import { BlogPostCard } from '@/components/blog/BlogPostCard'
import { PHONE, PHONE_HREF } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Propane Tips, Guides & Resources | Action Propane Inc',
  description:
    'Expert propane guides, delivery tips, installation advice, and safety information for Texas homeowners and businesses from Action Propane, Inc. in Leander TX.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Propane Tips, Guides & Resources | Action Propane Inc',
    description:
      'Expert propane guides, delivery tips, and safety information from Action Propane, Inc. — family-owned propane provider in Leander, TX since 1984.',
    url: '/blog',
    type: 'website',
  },
}

export default async function BlogPage() {
  const res = await fetch(BLOG_DATA_URL, { cache: 'no-store' })
  const data = res.ok ? await res.json() : { posts: [] }
  const { collection, posts: allPosts } = data
  const posts = getPublishedPosts(allPosts)
  const basePath = collection?.basePath ?? '/blog'

  return (
    <div className="bg-[#f8fafc]">
      {/* Hero */}
      <section className="bg-[#0f172a] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">
            Propane Knowledge Center
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            {collection?.title ?? 'Propane Tips, Guides & Resources'}
          </h1>
          <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed">
            Expert advice from Action Propane, Inc. — helping Texas homeowners and businesses make
            informed decisions about propane delivery, installation, safety, and efficiency.
          </p>
        </div>
      </section>

      {/* Featured hero image */}
      <div className="max-w-5xl mx-auto px-4 -mt-6 mb-2 relative z-10">
        <div className="relative rounded-xl overflow-hidden h-56 md:h-72 w-full shadow-lg">
          <Image
            src="/blog-photo-6-10-25.png"
            alt="Action Propane Inc — propane tips and guides for Texas homeowners and businesses"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 960px"
            priority
          />
        </div>
      </div>

      {/* Post grid */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#64748b] text-lg mb-2">No articles published yet.</p>
            <p className="text-[#94a3b8] text-sm">Check back soon — new content is on the way.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} basePath={basePath} />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 bg-[#0f172a] rounded-xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-2">
            Have Questions About Propane in Central Texas?
          </h2>
          <p className="text-white/70 text-sm mb-5 max-w-md mx-auto">
            The team at Action Propane, Inc. is happy to answer your questions about delivery,
            installation, pricing, or safety. Call during business hours — we answer the phone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-6 py-3 rounded transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
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
              className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white/60 font-semibold px-6 py-3 rounded transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
