import Link from 'next/link'
import type { BlogPost } from '@/lib/blog/source'
import { formatDate } from '@/lib/blog/source'

interface BlogPostCardProps {
  post: BlogPost
  basePath?: string
}

export function BlogPostCard({ post, basePath = '/blog' }: BlogPostCardProps) {
  const href = `${basePath}/${post.slug}`
  const category = post.categories?.[0] ?? post.tags?.[0] ?? 'Article'
  const readTime = post.readingTimeMinutes ? `${post.readingTimeMinutes} min read` : null

  return (
    <Link
      href={href}
      className="group flex flex-col bg-white rounded-xl border border-[#e2e8f0] overflow-hidden hover:border-[#dc2626] hover:shadow-md transition-all cursor-pointer"
      aria-label={`Read: ${post.title}`}
    >
      {/* Hero image */}
      {post.heroImageUrl && (
          <div className="aspect-[16/9] overflow-hidden bg-[#fef2f2] shrink-0">
          <img
            src={post.heroImageUrl}
            alt={post.title}
            width={800}
            height={450}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
        {/* Meta chips */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-[#fef2f2] text-[#dc2626] text-xs font-semibold px-2.5 py-1 rounded">
            {category}
          </span>
          {readTime && (
            <span className="text-[#64748b] text-xs">{readTime}</span>
          )}
          <span className="text-[#64748b] text-xs ml-auto">{formatDate(post.publishAt)}</span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-[#1e293b] mb-2 leading-snug text-pretty group-hover:text-[#dc2626] transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-[#64748b] text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        {/* Footer row */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#f1f5f9]">
          {post.author && (
            <span className="text-xs text-[#64748b]">By {post.author}</span>
          )}
          <span className="inline-flex items-center gap-1 text-[#dc2626] font-medium text-sm ml-auto">
            Read article
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="group-hover:translate-x-0.5 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
