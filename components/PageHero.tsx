import Link from 'next/link'
import { PhoneIcon } from '@/components/ui/PhoneIcon'
import { PHONE, PHONE_HREF } from '@/lib/constants'

interface Crumb { label: string; href: string }

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  showCTA?: boolean
  ctaLabel?: string
  ctaHref?: string
  breadcrumbs?: Crumb[]
}

export function PageHero({
  eyebrow,
  title,
  description,
  showCTA = true,
  ctaLabel,
  ctaHref,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="bg-[#0f172a] text-white py-12 md:py-16" aria-label="Page header">
      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  <span aria-hidden="true">/</span>
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-white/80" aria-current="page">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-balance mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-6">{description}</p>
        )}
        {showCTA && (
          <div className="flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm"
              aria-label={`Call Action Propane at ${PHONE}`}
            >
              <PhoneIcon />
              Call {PHONE}
            </a>
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-5 py-3 rounded transition-colors text-sm"
              >
                {ctaLabel}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
