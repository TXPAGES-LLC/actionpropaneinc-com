import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { ServiceSidebar } from '@/components/ServiceSidebar'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF, MAPS_HREF, ADDRESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Propane Cylinder & RV Refill Station in Leander TX | Action Propane Inc',
  description:
    'Walk-in propane cylinder and RV tank refills in Leander, TX. No appointment needed. Open Mon–Fri 8am–6pm, Sat 8am–4pm at 2601 S Hwy 183. Call 512-259-1196.',
  alternates: { canonical: '/services/propane-cylinder-rv-refill-station' },
  openGraph: {
    title: 'Propane Cylinder & RV Refill Station in Leander TX | Action Propane Inc',
    description:
      'Walk-in propane cylinder refill at 2601 S Hwy 183, Leander TX. BBQ tanks, RV tanks, heaters, and more. No appointment needed. Open Mon–Sat.',
    url: '/services/propane-cylinder-rv-refill-station',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Propane Cylinder & RV Refill Station',
  description: 'Walk-in propane cylinder and RV tank refill service at 2601 S Hwy 183, Leander TX. No appointment needed.',
  provider: { '@id': '/#business' },
  areaServed: { '@type': 'City', name: 'Leander', containedInPlace: { '@type': 'State', name: 'Texas' } },
  serviceType: 'Propane Refill',
  url: '/services/propane-cylinder-rv-refill-station',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
    { '@type': 'ListItem', position: 3, name: 'Propane Cylinder & RV Refill Station', item: '/services/propane-cylinder-rv-refill-station' },
  ],
}

const cylinders = [
  { size: '1 lb', use: 'Camp stoves, lanterns, portable torches' },
  { size: '11 lb (2.6 gal)', use: 'Small grills, tabletop burners' },
  { size: '20 lb (5 gal)', use: 'Standard BBQ grill, patio heaters' },
  { size: '30 lb (7 gal)', use: 'Large grills, turkey fryers' },
  { size: '40 lb (10 gal)', use: 'RV appliances, commercial patio heaters' },
  { size: '100 lb (25 gal)', use: 'RV tanks, construction heaters, forklifts' },
]

export default function CylinderRefillPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Walk-In Refill Station"
        title="Propane Cylinder & RV Refill Station in Leander, TX"
        description="Bring any standard propane cylinder to our Leander storefront for a fast, accurate refill. No appointment needed — just stop by during business hours."
        ctaLabel="Request Service"
        ctaHref="/contact"
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Cylinder & RV Refill', href: '/services/propane-cylinder-rv-refill-station' },
        ]}
      />

      <div className="bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-[1fr_300px] gap-10 items-start">
          <div className="space-y-10">
            {/* Intro */}
            <section aria-labelledby="refill-intro">
              <h2 id="refill-intro" className="text-2xl font-bold text-[#1e293b] mb-4">
                Fast, Accurate Propane Refills — No Appointment Required
              </h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                Action Propane, Inc. operates a full-service propane cylinder refill station at our
                storefront at {ADDRESS}. We fill cylinders by weight — not by exchange — so you
                always get a full tank at a fair price.
              </p>
              <p className="text-[#334155] leading-relaxed mb-4">
                We service everything from small 1-pound camp canisters to 100-pound RV tanks and
                forklift cylinders. Our staff inspects each cylinder for damage and out-of-date
                certification before filling to keep you safe and in compliance.
              </p>
              <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-5 flex flex-col sm:flex-row gap-6">
                <div>
                  <p className="font-semibold text-[#1e293b] text-sm mb-2">Refill Station Hours</p>
                  <dl className="text-sm text-[#334155] space-y-1">
                    <div className="flex gap-8"><dt>Mon – Fri</dt><dd className="font-medium text-[#1e293b]">8:00 am – 6:00 pm</dd></div>
                    <div className="flex gap-8"><dt>Saturday</dt><dd className="font-medium text-[#1e293b]">8:00 am – 4:00 pm</dd></div>
                    <div className="flex gap-8"><dt>Sunday</dt><dd className="text-[#94a3b8]">Closed</dd></div>
                  </dl>
                </div>
                <div>
                  <p className="font-semibold text-[#1e293b] text-sm mb-2">Location</p>
                  <p className="text-sm text-[#334155]">{ADDRESS}</p>
                  <a
                    href={MAPS_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-sm text-[#dc2626] hover:underline font-medium"
                  >
                    Get Directions
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
                  </a>
                </div>
              </div>
            </section>

            {/* Cylinder sizes */}
            <section aria-labelledby="cylinder-sizes">
              <h2 id="cylinder-sizes" className="text-2xl font-bold text-[#1e293b] mb-4">
                Cylinder Sizes We Refill
              </h2>
              <p className="text-[#334155] leading-relaxed mb-5">
                We refill all common DOT propane cylinders and ASME tanks up to 100 lbs. Not sure
                what size you have? Just bring it in — our staff will identify it and give you a
                price before filling.
              </p>
              <div className="overflow-x-auto rounded-xl border border-[#e2e8f0]">
                <table className="w-full text-sm">
                  <thead className="bg-[#f8fafc]">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-[#1e293b] border-b border-[#e2e8f0]">Tank Size</th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1e293b] border-b border-[#e2e8f0]">Common Uses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f1f5f9] bg-white">
                    {cylinders.map((c) => (
                      <tr key={c.size} className="hover:bg-[#f8fafc]">
                        <td className="px-4 py-3 font-medium text-[#1e293b] whitespace-nowrap">{c.size}</td>
                        <td className="px-4 py-3 text-[#64748b]">{c.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* RV section */}
            <section aria-labelledby="rv-refill">
              <h2 id="rv-refill" className="text-xl font-bold text-[#1e293b] mb-3">
                RV Propane Tank Refills
              </h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                Heading out on a trip from Central Texas? Stop by our Leander station to top off
                your RV&apos;s propane tank before you hit the road. We fill ASME mounted RV tanks
                and portable DOT cylinders. Our location on S Hwy 183 makes it a convenient stop
                heading north toward Georgetown, Burnet, or Marble Falls.
              </p>
              <ul className="space-y-2">
                {[
                  'ASME mounted RV tanks refilled by weight',
                  'Portable 30 lb and 40 lb DOT cylinders',
                  '100 lb tanks for extended trips',
                  'Quick turnaround — usually under 10 minutes',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#334155]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="#dc2626" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Safety note */}
            <section className="bg-white rounded-xl border border-[#e2e8f0] p-6" aria-labelledby="safety-note">
              <h2 id="safety-note" className="text-lg font-bold text-[#1e293b] mb-3">
                Cylinder Safety Inspection
              </h2>
              <p className="text-[#334155] text-sm leading-relaxed">
                Before filling any cylinder, our staff checks for visible damage, corrosion, and
                expiration date. DOT cylinders must be re-certified every 12 years. We cannot fill
                expired or damaged cylinders for your safety. If your cylinder is out of date, we
                can help you purchase a replacement at our{' '}
                <Link href="/products/dot-propane-cylinders" className="text-[#dc2626] hover:underline">
                  DOT cylinder storefront
                </Link>
                .
              </p>
            </section>

            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
                Call {PHONE}
              </a>
              <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#dc2626] text-[#dc2626] hover:bg-[#fef2f2] font-semibold px-5 py-3 rounded transition-colors text-sm">
                Get Directions
              </a>
            </div>
          </div>

          <ServiceSidebar currentHref="/services/propane-cylinder-rv-refill-station" />
        </div>
      </div>

      <CTABanner />
    </>
  )
}
