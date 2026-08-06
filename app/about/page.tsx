import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/PageHero'
import { CTABanner } from '@/components/CTABanner'
import { VerifiedProfiles } from '@/components/VerifiedProfiles'
import { PHONE, PHONE_HREF, MAPS_HREF } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Action Propane Inc | Family-Owned Propane Supplier in Leander TX Since 1984',
  description:
    'Learn about Action Propane, Inc. — an independent, family-owned propane provider serving Leander, Austin, and Central Texas since 1984. Walk-in refill station at 2601 S Hwy 183.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Action Propane Inc | Family-Owned Since 1984 | Leander, TX',
    description:
      'Action Propane, Inc. has been an independent, family-owned propane provider in Leander, TX since 1984. Serving Austin and Central Texas with delivery, tank installation, and a walk-in refill station.',
    url: '/about',
    type: 'website',
  },
}

const values = [
  {
    title: 'Reliable Delivery',
    body: 'We show up when we say we will. Our customers never run out of propane because we plan proactively and respond quickly.',
  },
  {
    title: 'Honest Pricing',
    body: 'No hidden fees or surprise charges. You get a straight answer on cost before we deliver — every time.',
  },
  {
    title: 'Safety First',
    body: 'All installations, exchanges, and deliveries follow Texas Railroad Commission regulations and industry best practices.',
  },
  {
    title: 'Local Knowledge',
    body: 'We know Central Texas geography, weather, and customer needs firsthand — because we live and work here too.',
  },
  {
    title: 'Family Values',
    body: 'Treating customers like neighbors is not a slogan for us. It is how we have built and maintained relationships for over 30 years.',
  },
  {
    title: 'Full-Service Capability',
    body: 'From new tank installation to emergency deliveries to in-store accessories, we handle every propane need under one roof.',
  },
]

const timeline = [
  { year: 'Est. 1984', event: 'Action Propane, Inc. founded in Leander, Texas as an independent, family-owned propane provider serving the Austin area.' },
  { year: '2000s', event: 'Expanded residential delivery territory to cover Cedar Park, Georgetown, and surrounding Williamson County communities.' },
  { year: '2010s', event: 'Added commercial propane service for construction, agriculture, and industrial customers across the region.' },
  { year: 'Today', event: 'Serving 12+ Central Texas cities with residential delivery, commercial service, walk-in refill, and a full product storefront.' },
]

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Action Propane, Inc.',
  url: '/about',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
      { '@type': 'ListItem', position: 2, name: 'About', item: '/about' },
    ],
  },
  mainEntity: { '@id': '/#business' },
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <PageHero
        eyebrow="About Us"
        title="Leander's Independent, Family-Owned Propane Provider Since 1984"
        description="At Action Propane, Inc., our passion for propane and commitment to quality service have been the foundation of the best customer experience in the Austin area and its surrounding regions for over 40 years."
        ctaLabel="Request Service"
        ctaHref="/contact"
        breadcrumbs={[{ label: 'About', href: '/about' }]}
      />

      {/* Story section */}
      <section className="py-14 bg-white" aria-labelledby="story-heading">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">Our Story</p>
            <h2 id="story-heading" className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-5 text-balance">
              Serving the Austin Area Since 1984
            </h2>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Welcome to Action Propane, Inc., where our passion for propane and commitment to quality service
              blend to create the best customer experience. Located in Leander, Texas, we have been the
              go-to independent, family-owned propane provider for the Austin area and its surrounding
              regions since 1984.
            </p>
            <p className="text-[#64748b] leading-relaxed mb-4">
              What started as a community-first alternative to large, impersonal propane chains has grown
              into a trusted name across Williamson County, Travis County, and Burnet County. Our delivery
              territory covers Leander, Austin, Cedar Park, Georgetown, Round Rock, Liberty Hill, Burnet,
              Marble Falls, and beyond.
            </p>
            <p className="text-[#64748b] leading-relaxed">
              Our storefront and refill station at{' '}
              <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="text-[#dc2626] hover:underline">
                2601 S Hwy 183, Leander, TX 78641
              </a>{' '}
              is open Monday through Saturday for walk-in cylinder refills and product purchases.
            </p>
          </div>

          {/* Photos */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-xl overflow-hidden h-56 w-full">
              <Image
                src="/front-of-building.jpg"
                alt="Action Propane Inc storefront at 2601 S Hwy 183, Leander TX"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-48 w-full">
              <Image
                src="/img-1368.jpg"
                alt="Inside the Action Propane store in Leander TX — showroom with grills and propane accessories"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="bg-[#fef2f2] rounded-xl border border-[#fecaca] p-5">
              <dl className="space-y-2.5 text-sm">
                <div className="flex gap-3 items-start">
                  <dt className="sr-only">Address</dt>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <dd className="text-[#1e293b]"><a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2626]">2601 S Hwy 183, Leander, TX 78641</a></dd>
                </div>
                <div className="flex gap-3 items-center">
                  <dt className="sr-only">Phone</dt>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#dc2626" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  <dd><a href={PHONE_HREF} className="font-semibold text-[#1e293b] hover:text-[#dc2626] transition-colors">{PHONE}</a></dd>
                </div>
                <div className="border-t border-[#fecaca] pt-2.5 mt-1 text-[#1e293b] space-y-0.5">
                  <p className="text-xs text-[#64748b] uppercase tracking-wide mb-1.5">Hours</p>
                  <p>Mon – Fri: <span className="font-medium">8:00 a.m. – 6:00 p.m.</span></p>
                  <p>Saturday: <span className="font-medium">8:00 a.m. – 4:00 p.m.</span></p>
                  <p className="text-[#94a3b8]">Sunday: Closed</p>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-[#f8fafc]" aria-labelledby="values-heading">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">What We Stand For</p>
            <h2 id="values-heading" className="text-2xl md:text-3xl font-bold text-[#1e293b] text-balance">
              The Values Behind Every Propane Delivery
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-[#e2e8f0] p-6">
                <div className="w-8 h-8 rounded-full bg-[#fef2f2] flex items-center justify-center mb-3" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1e293b] mb-2">{v.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 bg-white" aria-labelledby="history-heading">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">Our History</p>
            <h2 id="history-heading" className="text-2xl md:text-3xl font-bold text-[#1e293b] text-balance">
              40+ Years of Propane Service in Central Texas
            </h2>
          </div>
          <ol className="relative border-l-2 border-[#e2e8f0] pl-6 space-y-8">
            {timeline.map((item, i) => (
              <li key={i} className="relative">
                <div className="absolute -left-[1.4rem] top-0.5 w-4 h-4 rounded-full bg-[#dc2626] border-2 border-white" aria-hidden="true" />
                <p className="text-[#dc2626] font-bold text-sm mb-1">{item.year}</p>
                <p className="text-[#1e293b] leading-relaxed">{item.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services link-out */}
      <section className="py-14 bg-[#f8fafc]" aria-labelledby="services-link-heading">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 id="services-link-heading" className="text-2xl font-bold text-[#1e293b] mb-4 text-balance">
            Explore Our Propane Services
          </h2>
          <p className="text-[#64748b] mb-8 max-w-xl mx-auto">
            From residential delivery to commercial accounts and walk-in refills, Action Propane covers every propane need in Central Texas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
  <Link href="/services" className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold px-5 py-3 rounded transition-colors text-sm">
  View All Propane Services
  </Link>
  <Link href="/delivery-areas" className="inline-flex items-center gap-2 border border-[#dc2626] text-[#dc2626] hover:bg-[#fef2f2] font-semibold px-5 py-3 rounded transition-colors text-sm">
  View Delivery Areas
  </Link>
          </div>
        </div>
      </section>

      <VerifiedProfiles />
      <CTABanner />
    </>
  )
}
