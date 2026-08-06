import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { ServiceSidebar } from '@/components/ServiceSidebar'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Forklift Propane Cylinder Exchange in Leander & Austin TX | Action Propane Inc',
  description:
    'Fast forklift propane cylinder exchange for warehouses, distribution centers, and industrial facilities in Central Texas. Call Action Propane at 512-259-1196.',
  alternates: { canonical: '/services/forklift-propane-cylinder-exchange' },
  openGraph: {
    title: 'Forklift Propane Cylinder Exchange in Central Texas | Action Propane Inc',
    description:
      'Keep your forklift fleet running with fast propane cylinder exchange. Action Propane serves warehouses and industrial facilities across Central Texas.',
    url: '/services/forklift-propane-cylinder-exchange',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Forklift Propane Cylinder Exchange',
  description: 'Fast propane cylinder exchange for forklifts and industrial equipment in Central Texas.',
  provider: { '@id': '/#business' },
  areaServed: { '@type': 'State', name: 'Texas' },
  serviceType: 'Forklift Propane Cylinder Exchange',
  url: '/services/forklift-propane-cylinder-exchange',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
    { '@type': 'ListItem', position: 3, name: 'Forklift Propane Cylinder Exchange', item: '/services/forklift-propane-cylinder-exchange' },
  ],
}

export default function ForkliftExchangePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Industrial Service"
        title="Forklift Propane Cylinder Exchange in Central Texas"
        description="Keep your propane-powered forklift fleet running with fast cylinder exchanges and refills from Action Propane, Inc. We serve warehouses, distribution centers, and manufacturing facilities across Central Texas."
        ctaLabel="Request Service"
        ctaHref="/contact"
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Forklift Cylinder Exchange', href: '/services/forklift-propane-cylinder-exchange' },
        ]}
      />

      <div className="bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-[1fr_300px] gap-10 items-start">
          <div className="space-y-10">
            <section aria-labelledby="forklift-intro">
              <h2 id="forklift-intro" className="text-2xl font-bold text-[#1e293b] mb-4">
                Propane Cylinder Exchange for Forklifts & Industrial Equipment
              </h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                Propane-powered forklifts are a workhorse for warehouses, loading docks, and
                manufacturing floors. When cylinders run low, downtime is costly. Action Propane,
                Inc. provides reliable cylinder exchange and refill service designed around your
                operational schedule — not ours.
              </p>
              <p className="text-[#334155] leading-relaxed mb-4">
                Standard forklift propane cylinders are 33 lb (8 gal) or 43 lb (10 gal) DOT tanks.
                We stock both sizes and can accommodate larger custom tank programs for high-volume
                fleets. Call us to discuss a cylinder exchange program tailored to your facility.
              </p>
            </section>

            <section aria-labelledby="forklift-benefits">
              <h2 id="forklift-benefits" className="text-xl font-bold text-[#1e293b] mb-4">
                Why Propane Forklifts & Why Action Propane
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Full Power, Full Shift', body: 'Unlike electric forklifts, propane models deliver consistent power throughout the entire shift without voltage drop.' },
                  { title: 'Fast Cylinder Swap', body: 'A cylinder exchange takes under 2 minutes — far faster than recharging an electric forklift battery.' },
                  { title: 'Indoor & Outdoor Use', body: 'Propane forklifts are rated for both indoor and outdoor use, giving you flexibility across your operation.' },
                  { title: 'Lower Emissions Than Diesel', body: 'Propane produces significantly fewer emissions than diesel, keeping indoor air quality at safer levels.' },
                  { title: 'Consistent Local Supply', body: 'We supply propane cylinders from our Leander location — no distant distribution centers or unreliable national chains.' },
                  { title: '30+ Years of Experience', body: 'Action Propane has served Central Texas businesses for over three decades. We understand operational uptime.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-[#e2e8f0] p-5">
                    <h3 className="font-semibold text-[#1e293b] mb-1.5 text-sm">{item.title}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="forklift-cta" className="bg-[#0f172a] rounded-xl p-7 text-white">
              <h2 id="forklift-cta" className="text-xl font-bold mb-2">
                Set Up a Cylinder Exchange Program for Your Facility
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Call us to discuss volume pricing, exchange schedules, and cylinder inventory
                management for your forklift fleet. We serve businesses across Leander, Austin,
                Cedar Park, Georgetown, and the broader Central Texas area.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
                  Call {PHONE}
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-5 py-3 rounded transition-colors text-sm">
                  Request Service
                </Link>
              </div>
            </section>

            <section aria-labelledby="related-services">
              <h2 id="related-services" className="text-lg font-bold text-[#1e293b] mb-3">Related Services</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: 'Commercial Propane Delivery', href: '/services/commercial-propane-delivery' },
                  { label: 'Cylinder & RV Refill Station', href: '/services/propane-cylinder-rv-refill-station' },
                  { label: 'DOT Propane Cylinders', href: '/products/dot-propane-cylinders' },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="flex items-center gap-2 bg-white border border-[#e2e8f0] rounded-lg px-4 py-3 text-sm text-[#1e293b] hover:border-[#dc2626] hover:text-[#dc2626] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <ServiceSidebar currentHref="/services/forklift-propane-cylinder-exchange" />
        </div>
      </div>

      <CTABanner />
    </>
  )
}
