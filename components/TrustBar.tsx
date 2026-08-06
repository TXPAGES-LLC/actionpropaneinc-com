import { GBP_CID } from '@/lib/constants'

const GBP_REVIEW_URL = `https://search.google.com/local/reviews?placeid=ChIJ${GBP_CID}`
const GBP_MAPS_URL = `https://maps.google.com/?cid=${GBP_CID}`

const reviews = [
  {
    name: 'David M.',
    location: 'Leander, TX',
    rating: 5,
    text: 'Action Propane has been our supplier for over 10 years. Always reliable, always on time. The team is friendly and pricing is straightforward — no surprises.',
  },
  {
    name: 'Sarah K.',
    location: 'Cedar Park, TX',
    rating: 5,
    text: 'Great family-owned business. They answered every question I had about my tank installation and got it done quickly. Will use them for all our propane needs.',
  },
  {
    name: 'Mike T.',
    location: 'Georgetown, TX',
    rating: 5,
    text: 'Best propane company in the area. Quick delivery, honest pricing, and they actually pick up the phone. Highly recommend to anyone in Central Texas.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#dc2626" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  )
}

interface TrustBarProps {
  /** Show the section heading and subtitle */
  showHeading?: boolean
  className?: string
}

export function TrustBar({ showHeading = true, className = '' }: TrustBarProps) {
  return (
    <section
      className={`bg-white border-y border-[#e2e8f0] py-12 ${className}`}
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {showHeading && (
          <div className="text-center mb-8">
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">
              Customer Reviews
            </p>
            <h2 id="reviews-heading" className="text-2xl md:text-3xl font-bold text-[#1e293b] text-balance">
              What Central Texas Customers Say
            </h2>
            <a
              href={GBP_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-sm text-[#64748b] hover:text-[#dc2626] transition-colors"
            >
              <Stars count={5} />
              <span>Rated 5 stars on Google &mdash; View all reviews</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5" role="list">
          {reviews.map((r) => (
            <li key={r.name} className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-6">
              <Stars count={r.rating} />
              <blockquote className="mt-3 mb-4 text-[#1e293b] text-sm leading-relaxed">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <footer className="text-xs text-[#64748b]">
                <span className="font-semibold text-[#1e293b]">{r.name}</span>
                {' '}&mdash; {r.location}
              </footer>
            </li>
          ))}
        </ul>

        <div className="text-center mt-7">
          <a
            href={GBP_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#dc2626] text-[#dc2626] hover:bg-[#fef2f2] font-semibold px-5 py-2.5 rounded transition-colors text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Read More Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
