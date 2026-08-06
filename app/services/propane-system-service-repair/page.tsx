import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { ServiceSidebar } from '@/components/ServiceSidebar'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Propane System Service & Repair in Leander & Austin TX | Action Propane Inc',
  description:
    'Propane system inspections, leak checks, regulator replacement, and line repairs for homes and businesses in Central Texas. Call Action Propane at 512-259-1196.',
  alternates: { canonical: '/services/propane-system-service-repair' },
  openGraph: {
    title: 'Propane System Service & Repair in Central Texas | Action Propane Inc',
    description:
      'Leak checks, regulator replacement, line inspection, and safety testing for residential and commercial propane systems across Central Texas.',
    url: '/services/propane-system-service-repair',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Propane System Service & Repair',
  description: 'Propane system inspections, leak checks, regulator replacement, and line repairs for homes and businesses in Central Texas.',
  provider: { '@id': '/#business' },
  areaServed: { '@type': 'State', name: 'Texas' },
  serviceType: 'Propane System Repair',
  url: '/services/propane-system-service-repair',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
    { '@type': 'ListItem', position: 3, name: 'Propane System Service & Repair', item: '/services/propane-system-service-repair' },
  ],
}

export default function SystemServiceRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Service & Repair"
        title="Propane System Service & Repair in Central Texas"
        description="Keep your propane system running safely and efficiently. Action Propane, Inc. provides inspections, leak detection, regulator replacement, and system repairs for residential and commercial customers across Leander, Austin, and Central Texas."
        ctaLabel="Schedule Service"
        ctaHref="/contact"
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'System Service & Repair', href: '/services/propane-system-service-repair' },
        ]}
      />

      <div className="bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-[1fr_300px] gap-10 items-start">
          <div className="space-y-10">
            <section aria-labelledby="service-intro">
              <h2 id="service-intro" className="text-2xl font-bold text-[#1e293b] mb-4">
                Certified Propane System Inspections & Repairs
              </h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                A properly maintained propane system is a safe one. Whether you&apos;ve noticed a
                gas smell, have an appliance that isn&apos;t firing correctly, or simply want a
                routine inspection, Action Propane&apos;s technicians will diagnose and resolve the
                issue quickly and safely.
              </p>
              <p className="text-[#334155] leading-relaxed">
                We service all residential and commercial propane systems across Central Texas,
                including systems we installed and systems originally set up by other providers.
              </p>
            </section>

            {/* Services grid */}
            <section aria-labelledby="repair-services">
              <h2 id="repair-services" className="text-2xl font-bold text-[#1e293b] mb-5">
                Propane System Services We Offer
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Leak Detection & Testing', body: 'Pressure testing of supply lines to identify and locate any leaks before they become a hazard.' },
                  { title: 'Regulator Replacement', body: 'First-stage and second-stage regulators wear over time. We test, adjust, and replace regulators as needed.' },
                  { title: 'Line Inspection & Repair', body: 'Visual and pressure inspection of underground and above-ground supply lines, fittings, and flex connectors.' },
                  { title: 'Appliance Reconnection', body: 'Safe reconnection and testing when propane appliances are moved, replaced, or added to the system.' },
                  { title: 'System Re-light After Runout', body: 'If your tank runs empty, we perform a required leak check before relighting your appliances per NFPA 54.' },
                  { title: 'Annual Safety Inspections', body: 'Comprehensive annual inspection of tanks, valves, regulators, and supply lines for peace of mind.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-[#e2e8f0] p-5">
                    <h3 className="font-semibold text-[#1e293b] mb-1.5 text-sm">{item.title}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Safety callout */}
            <section className="bg-amber-50 border border-amber-200 rounded-xl p-6" aria-labelledby="safety-callout">
              <h2 id="safety-callout" className="text-base font-bold text-amber-900 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="text-amber-600"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                Smell Gas? Act Immediately.
              </h2>
              <p className="text-amber-800 text-sm leading-relaxed mb-3">
                If you smell propane inside or outside your home, leave immediately, avoid using
                any electrical switches, and call us from a safe distance. Do not re-enter until
                a technician has cleared the system.
              </p>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-4 py-2.5 rounded transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
                Call {PHONE} Now
              </a>
            </section>

            <section aria-labelledby="related-service-links">
              <h2 id="related-service-links" className="text-lg font-bold text-[#1e293b] mb-3">Related Services</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: 'Propane Tank Installation', href: '/services/propane-tank-installation' },
                  { label: 'Residential Propane Delivery', href: '/services/residential-propane-delivery' },
                  { label: 'Above-Ground Propane Tanks', href: '/products/above-ground-propane-tanks' },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-lg px-4 py-3 text-sm text-[#1e293b] hover:border-[#dc2626] hover:text-[#dc2626] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>

            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
                Call {PHONE}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#dc2626] text-[#dc2626] hover:bg-[#eff6ff] font-semibold px-5 py-3 rounded transition-colors text-sm">
                Schedule Service
              </Link>
            </div>
          </div>

          <ServiceSidebar currentHref="/services/propane-system-service-repair" />
        </div>
      </div>

      <CTABanner />
    </>
  )
}
