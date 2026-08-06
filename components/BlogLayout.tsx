import Link from 'next/link'
import { PHONE, PHONE_HREF, MAPS_HREF, ADDRESS } from '@/lib/constants'

interface RelatedPost {
  title: string
  href: string
}

interface BlogLayoutProps {
  title: string
  description: string
  category: string
  readTime: string
  children: React.ReactNode
  relatedPosts?: RelatedPost[]
}

export function BlogLayout({
  title,
  description,
  category,
  readTime,
  children,
  relatedPosts = [],
}: BlogLayoutProps) {
  return (
    <div className="bg-[#f8fafc]">
      {/* Hero */}
      <section className="bg-[#0f172a] text-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/blog"
              className="text-[#dc2626] hover:text-[#b91c1c] text-sm font-medium transition-colors"
            >
              Blog
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
            <span className="text-white/50 text-sm">{category}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-balance mb-4">
            {title}
          </h1>
          <p className="text-white/70 text-base leading-relaxed mb-5 max-w-2xl">{description}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
            <span className="bg-[#dc2626]/40 text-red-100 text-xs font-semibold px-2.5 py-1 rounded">
              {category}
            </span>
            <span>{readTime} read</span>
            <span>Action Propane, Inc. — Leander &amp; Austin TX</span>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">
        {/* Article body */}
        <article className="flex-1 min-w-0">
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 md:p-10 prose-custom">
            {children}
          </div>

          {/* CTA after article */}
          <div className="mt-8 bg-[#0f172a] rounded-xl p-6 md:p-8 text-white text-center">
            <h2 className="text-xl font-bold mb-2 text-balance">
              Ready for Propane Delivery in Central Texas?
            </h2>
            <p className="text-white/70 text-sm mb-5 max-w-md mx-auto">
              Contact Action Propane, Inc. — a trusted family-owned propane supplier serving Austin,
              Leander, and surrounding Texas communities for 30+ years.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-6 py-3 rounded transition-colors"
              aria-label={`Call Action Propane at ${PHONE}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call {PHONE}
            </a>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-72 shrink-0 space-y-6" aria-label="Sidebar">
          {/* Contact card */}
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
            <h2 className="font-bold text-[#1e293b] text-sm mb-3">Contact Action Propane</h2>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-4 py-3 rounded transition-colors mb-3 text-sm justify-center"
              aria-label={`Call ${PHONE}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              {PHONE}
            </a>
            <dl className="text-xs text-[#64748b] space-y-1.5">
              <div>
                <dt className="font-medium text-[#1e293b]">Address</dt>
                <dd>
                  <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2626] transition-colors">
                    {ADDRESS}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[#1e293b]">Mon – Fri</dt>
                <dd>8:00 a.m. – 6:00 p.m.</dd>
              </div>
              <div>
                <dt className="font-medium text-[#1e293b]">Saturday</dt>
                <dd>8:00 a.m. – 4:00 p.m.</dd>
              </div>
              <div>
                <dt className="font-medium text-[#1e293b]">Sunday</dt>
                <dd>Closed</dd>
              </div>
            </dl>
          </div>

          {/* Services links */}
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
            <h2 className="font-bold text-[#1e293b] text-sm mb-3">Our Services</h2>
            <ul className="space-y-2">
              {[
                { label: 'Residential Propane Delivery', href: '/services#residential' },
                { label: 'Commercial Propane Service', href: '/services#commercial' },
                { label: 'Propane Tank Installation', href: '/services#tanks' },
                { label: 'Propane Refill Station', href: '/services#refill' },
                { label: 'Grills & Accessories', href: '/services#products' },
              ].map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="flex items-center gap-1.5 text-sm text-[#1e293b] hover:text-[#dc2626] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="#dc2626" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                    </svg>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
              <h2 className="font-bold text-[#1e293b] text-sm mb-3">Related Articles</h2>
              <ul className="space-y-3">
                {relatedPosts.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-sm text-[#1e293b] hover:text-[#dc2626] transition-colors leading-snug block text-pretty">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}

/* Prose-style helpers used inside BlogLayout articles */
export function ArticleH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl font-bold text-[#1e293b] mt-8 mb-3 leading-tight text-balance">
      {children}
    </h2>
  )
}

export function ArticleH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-bold text-[#1e293b] mt-6 mb-2 leading-tight">{children}</h3>
  )
}

export function ArticleP({ children }: { children: React.ReactNode }) {
  return <p className="text-[#334155] leading-relaxed mb-4 text-base">{children}</p>
}

export function ArticleUL({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-5 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-[#334155]">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  )
}

export function ArticleCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#fef2f2] border-l-4 border-[#dc2626] rounded-r-lg p-4 my-5">
      <p className="text-[#b91c1c] text-sm leading-relaxed">{children}</p>
    </div>
  )
}
