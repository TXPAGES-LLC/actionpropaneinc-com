import type { Metadata } from 'next'
import Link from 'next/link'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF, DELIVERY_CITIES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Propane Delivery Service Area in Central Texas | Action Propane Inc',
  description:
    'Action Propane delivers propane to Leander, Austin, Cedar Park, Georgetown, Lakeway, Dripping Springs, Marble Falls, Horseshoe Bay, and communities across Central Texas. Call 512-259-1196.',
  alternates: { canonical: '/delivery-areas' },
  openGraph: {
    title: 'Propane Delivery Service Area — Central Texas | Action Propane Inc',
    description:
      'Action Propane, Inc. delivers propane across 25+ Central Texas communities including Leander, Austin, Lakeway, Dripping Springs, Marble Falls, and Horseshoe Bay.',
    url: '/delivery-areas',
    type: 'website',
  },
}

const areaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Propane Delivery — Central Texas Service Area',
  provider: { '@id': '/#business' },
  areaServed: DELIVERY_CITIES.map((c) => ({
    '@type': 'City',
    name: c.name,
    containedInPlace: { '@type': 'State', name: 'Texas' },
  })),
}

// Grouped by region for the listing
const REGIONS = [
  {
    label: 'Home Base',
    cities: ['leander'],
  },
  {
    label: 'Austin Metro',
    cities: ['austin', 'cedar-park', 'georgetown', 'round-rock', 'pflugerville', 'hutto', 'taylor'],
  },
  {
    label: 'West Austin & Hill Country',
    cities: ['lakeway', 'westlake', 'barton-creek', 'bee-cave', 'dripping-springs', 'driftwood', 'hamilton-pool'],
  },
  {
    label: 'Lake Travis & North Hill Country',
    cities: ['liberty-hill', 'jonestown', 'lago-vista', 'briarcliff', 'sun-city'],
  },
  {
    label: 'Burnet County & Lake LBJ',
    cities: ['marble-falls', 'horseshoe-bay', 'spicewood', 'burnet', 'bertram'],
  },
]

export default function DeliveryAreasPage() {
  const cityMap = Object.fromEntries(DELIVERY_CITIES.map((c) => [c.slug, c.name]))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />

      {/* Header */}
      <section className="bg-[#0f172a] text-white py-14 md:py-20" aria-labelledby="delivery-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-3">
            Service Territory
          </p>
          <h1 id="delivery-heading" className="text-3xl md:text-5xl font-bold mb-5 text-balance">
            Propane Delivery Across Central Texas
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Based in Leander since 1984, Action Propane, Inc. serves residential and commercial
            customers from the Austin metro out through the Hill Country — including lakefront
            communities, rural acreage, and everything in between.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-6 py-3.5 rounded transition-colors text-sm"
              aria-label={`Call Action Propane at ${PHONE}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded transition-colors text-sm"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-[#dc2626]">
        <div className="max-w-5xl mx-auto px-4 py-5 grid grid-cols-3 divide-x divide-red-500/40 text-center">
          {[
            { value: '40+', label: 'Years Serving Texas' },
            { value: `${DELIVERY_CITIES.length}+`, label: 'Communities Served' },
            { value: '~50mi', label: 'Delivery Radius from Leander' },
          ].map((stat) => (
            <div key={stat.label} className="px-4">
              <p className="text-white font-bold text-xl md:text-2xl">{stat.value}</p>
              <p className="text-red-100 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f8fafc] py-14">
        <div className="max-w-5xl mx-auto px-4">

          {/* Not listed note */}
          <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 mb-12 flex items-start gap-3 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <p className="text-sm text-[#334155]">
              <span className="font-semibold text-[#1e293b]">Don&apos;t see your city?</span>{' '}
              We may still deliver to your address — most locations within 50 miles of Leander are in our service zone.
              Call us at{' '}
              <a href={PHONE_HREF} className="text-[#dc2626] font-semibold hover:underline">{PHONE}</a>{' '}
              to confirm.
            </p>
          </div>

          {/* Cities grouped by region */}
          <div className="space-y-12">
            {REGIONS.map((region) => (
              <section key={region.label} aria-labelledby={`region-${region.label.replace(/\s+/g, '-').toLowerCase()}`}>
                <h2
                  id={`region-${region.label.replace(/\s+/g, '-').toLowerCase()}`}
                  className="text-xs font-bold uppercase tracking-widest text-[#dc2626] mb-4"
                >
                  {region.label}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {region.cities.map((slug) => {
                    const name = cityMap[slug]
                    if (!name) return null
                    return (
                      <Link
                        key={slug}
                        href={`/delivery-areas/${slug}`}
                        className="group bg-white rounded-xl border border-[#e2e8f0] px-5 py-4 hover:border-[#dc2626] hover:shadow-sm transition-all flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#dc2626" aria-hidden="true" className="shrink-0">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" fill="white" />
                          </svg>
                          <span className="font-semibold text-[#1e293b] group-hover:text-[#dc2626] transition-colors text-sm">
                            {name}, TX
                          </span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="#94a3b8" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 group-hover:stroke-[#dc2626] transition-colors">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                        </svg>
                      </Link>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Service type cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-14 mb-12">
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-7">
              <div className="w-10 h-10 rounded-lg bg-[#fef2f2] flex items-center justify-center mb-4" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#dc2626" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="font-bold text-[#1e293b] mb-2">Residential Delivery</h2>
              <p className="text-[#64748b] text-sm leading-relaxed mb-4">
                We deliver to single-family homes, lakefront properties, acreage tracts, and rural
                addresses throughout Central Texas. Automatic delivery and will-call options available.
              </p>
              <Link href="/services/residential-propane-delivery" className="text-sm text-[#dc2626] font-semibold hover:underline inline-flex items-center gap-1">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-7">
              <div className="w-10 h-10 rounded-lg bg-[#fef2f2] flex items-center justify-center mb-4" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#dc2626" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="font-bold text-[#1e293b] mb-2">Commercial Delivery</h2>
              <p className="text-[#64748b] text-sm leading-relaxed mb-4">
                We serve restaurants, auto dealerships, commercial buildings, construction sites, and
                agricultural operations across our Central Texas service territory.
              </p>
              <Link href="/services/commercial-propane-delivery" className="text-sm text-[#dc2626] font-semibold hover:underline inline-flex items-center gap-1">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
              </Link>
            </div>
          </div>

          {/* Bottom CTA block */}
          <div className="bg-[#0f172a] text-white rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold mb-2">Not sure if we deliver to your address?</h2>
            <p className="text-white/60 text-sm mb-6 max-w-xl mx-auto leading-relaxed">
              Our service territory covers a large portion of Central Texas. Most addresses within
              50 miles of Leander are in our zone. Call us to confirm — it only takes a minute.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-6 py-3 rounded transition-colors text-sm"
              >
                Call {PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3 rounded transition-colors text-sm"
              >
                Send a Message
              </Link>
            </div>
          </div>

        </div>
      </div>

      <CTABanner
        heading="Propane Delivery Across Central Texas"
        subtext="Serving Leander, Austin, Cedar Park, Georgetown, Lakeway, Dripping Springs, Marble Falls, Horseshoe Bay, and the surrounding region since 1984."
      />
    </>
  )
}
