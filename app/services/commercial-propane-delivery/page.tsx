import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { ServiceSidebar } from '@/components/ServiceSidebar'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Commercial Propane Delivery in Austin & Central Texas | Action Propane Inc',
  description:
    'Bulk commercial propane delivery for businesses, farms, restaurants, and construction in Austin, Leander, and Central Texas. Flexible schedules. Call 512-259-1196.',
  alternates: { canonical: '/services/commercial-propane-delivery' },
  openGraph: {
    title: 'Commercial Propane Delivery in Austin & Central Texas | Action Propane Inc',
    description:
      'High-volume propane for businesses, farms, restaurants, and construction sites across Central Texas. Flexible delivery schedules and competitive bulk pricing.',
    url: '/services/commercial-propane-delivery',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Propane Delivery',
  description: 'Bulk commercial propane delivery for businesses, farms, restaurants, and construction sites in Austin and Central Texas.',
  provider: { '@id': '/#business' },
  areaServed: { '@type': 'State', name: 'Texas' },
  serviceType: 'Commercial Propane Delivery',
  url: '/services/commercial-propane-delivery',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
    { '@type': 'ListItem', position: 3, name: 'Commercial Propane Delivery', item: '/services/commercial-propane-delivery' },
  ],
}

const industries = [
  { label: 'Restaurants & Food Service', desc: 'Commercial ranges, fryers, steamers, and warming equipment need a consistent, high-volume propane supply.' },
  { label: 'Agricultural Operations', desc: 'Grain drying, irrigation pumps, poultry house heating, and farm buildings throughout Central Texas.' },
  { label: 'Construction Sites', desc: 'Temporary heat for concrete curing, worker comfort, and propane-powered tools and equipment.' },
  { label: 'Manufacturing & Industrial', desc: 'Process heating, annealing, forging, and industrial drying applications.' },
  { label: 'Forklifts & Fleet Vehicles', desc: 'Propane-powered forklifts produce fewer emissions than diesel and perform reliably indoors.' },
  { label: 'Commercial Laundries', desc: 'High-temperature dryers and pressing equipment that run more efficiently on propane.' },
  { label: 'Schools & Institutions', desc: 'Heating, cafeteria cooking, and backup power for campuses and facilities.' },
  { label: 'Nurseries & Greenhouses', desc: 'Consistent, controllable heat for growing operations across all seasons.' },
]

export default function CommercialDeliveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Commercial Service"
        title="Commercial Propane Delivery for Austin & Central Texas Businesses"
        description="Action Propane, Inc. provides reliable bulk propane delivery to businesses, farms, restaurants, and industrial operations across Central Texas. Flexible schedules built around your operation."
        ctaLabel="Request Service"
        ctaHref="/contact"
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Commercial Propane Delivery', href: '/services/commercial-propane-delivery' },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10">
          <article>
            <section aria-labelledby="comm-intro" className="mb-10">
              <h2 id="comm-intro" className="text-2xl font-bold text-[#1e293b] mb-4">
                Dependable Bulk Propane for Texas Businesses
              </h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                Business operations depend on a consistent, uninterrupted propane supply. A restaurant
                cannot serve customers without fuel, a farm cannot dry grain without heat, and a
                construction crew cannot work in unsafe conditions without warmth. Action Propane, Inc.
                understands that business continuity is the priority — and we build our commercial
                delivery schedules around your operational requirements.
              </p>
              <p className="text-[#334155] leading-relaxed mb-4">
                We serve commercial accounts across Leander, Austin, Cedar Park, Georgetown, Round Rock,
                Burnet, Marble Falls, and the surrounding region. Our team will work with you to establish
                the right delivery frequency, tank size, and emergency protocol for your operation.
              </p>
              <p className="text-[#334155] leading-relaxed">
                Have questions about switching your business to Action Propane? Call{' '}
                <a href={PHONE_HREF} className="text-[#dc2626] font-medium">{PHONE}</a>{' '}
                — we discuss your needs directly, no automated systems.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="comm-industries">
              <h2 id="comm-industries" className="text-xl font-bold text-[#1e293b] mb-5">
                Industries We Serve in Central Texas
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {industries.map((ind) => (
                  <div key={ind.label} className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-5">
                    <h3 className="font-semibold text-[#1e293b] text-sm mb-1">{ind.label}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10" aria-labelledby="comm-advantages">
              <h2 id="comm-advantages" className="text-xl font-bold text-[#1e293b] mb-4">
                Why Businesses Choose Action Propane
              </h2>
              <ul className="space-y-3">
                {[
                  'Locally owned — decisions are made here, not at a corporate office',
                  'Flexible delivery scheduling around your business hours and usage cycles',
                  'Proper tank sizing consultation to avoid costly over- or under-delivery',
                  'Emergency delivery capability when unexpected demand spikes',
                  'Texas Railroad Commission licensed and fully insured',
                  '30+ years serving the same geographic area — we know your territory',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#334155]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="comm-related">
              <h2 id="comm-related" className="text-xl font-bold text-[#1e293b] mb-4">Related Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { href: '/services/forklift-propane-cylinder-exchange', label: 'Forklift Cylinder Exchange' },
                  { href: '/services/propane-tank-installation', label: 'Commercial Tank Installation' },
                  { href: '/services/propane-system-service-repair', label: 'System Service & Repair' },
                  { href: '/blog/top-5-advantages-of-hiring-emergency-propane-delivery-for-businesses', label: 'Emergency Delivery for Businesses' },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="flex items-center gap-2 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] px-4 py-3 text-sm font-medium text-[#1e293b] hover:border-[#dc2626] hover:text-[#dc2626] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>
          </article>

          <ServiceSidebar currentHref="/services/commercial-propane-delivery" />
        </div>
      </div>

      <CTABanner heading="Ready to Set Up Commercial Propane Delivery?" subtext="Call Action Propane, Inc. to discuss bulk delivery, tank sizing, and scheduling for your Central Texas business." />
    </>
  )
}
