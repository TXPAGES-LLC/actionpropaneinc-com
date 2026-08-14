import React from 'react'
import Link from 'next/link'

type RelatedPost = { title: string; href: string }

interface BlogLayoutProps {
  title: string
  description?: string
  category?: string
  readTime?: string
  relatedPosts?: RelatedPost[]
  children: React.ReactNode
}

export function BlogLayout({ title, description, category, readTime, relatedPosts = [], children }: BlogLayoutProps) {
  return (
    <article className="max-w-5xl mx-auto px-4 py-10">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          {category && <span className="bg-[#fef2f2] text-[#dc2626] text-xs font-semibold px-2 py-1 rounded">{category}</span>}
          {readTime && <span className="text-sm text-[#64748b]">{readTime}</span>}
        </div>
        <h1 className="text-3xl font-bold text-[#1e293b] leading-tight">{title}</h1>
        {description && <p className="text-[#64748b] mt-3">{description}</p>}
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="prose-content">{children}</div>
        </div>

        <aside className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4">
            <h3 className="text-sm font-semibold text-[#64748b] uppercase tracking-wide mb-3">Related posts</h3>
            <ul className="space-y-2">
              {relatedPosts.length === 0 && <li className="text-sm text-[#64748b]">No related posts</li>}
              {relatedPosts.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-[#1e293b] hover:text-[#dc2626]">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  )
}

export function ArticleH2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold text-[#1e293b] mt-8 mb-4">{children}</h2>
}

export function ArticleH3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-[#1e293b] mt-6 mb-3">{children}</h3>
}

export function ArticleP({ children }: { children: React.ReactNode }) {
  return <p className="text-[#334155] mb-4">{children}</p>
}

export function ArticleUL({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 mb-4">
      {items.map((it, i) => (
        <li key={i} className="mb-1 text-[#334155]">{it}</li>
      ))}
    </ul>
  )
}

export function ArticleCallout({ children }: { children: React.ReactNode }) {
  return <div className="bg-[#fef2f2] border-l-4 border-[#dc2626] p-4 rounded my-4 text-[#475569]">{children}</div>
}