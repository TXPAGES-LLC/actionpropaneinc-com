import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { ServiceSidebar } from '@/components/ServiceSidebar'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF, DELIVERY_CITIES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Residential Propane Delivery in Leander & Austin TX | Action Propane Inc',
  description:
    'Reliable residential propane delivery to homes in Leander, Austin, Cedar Park, Georgetown, and Central Texas. Scheduled and on-demand service. Call 512-259-1196.',
  alternates: { canonical: '/services/residential-propane-delivery' },
  openGraph: {
    title: 'Residential Propane Delivery in Leander & Austin TX | Action Propane Inc',
    description:
      'Scheduled and on-demand propane delivery to homes across Central Texas. Action Propane has served Leander and Austin homeowners since 1984. Call 512-259-1196.',
    url: '/services/residential-propane-delivery',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Residential Propane Delivery',
  description: 'Scheduled and on-demand residential propane delivery to homes in Leander, Austin, Cedar Park, Georgetown, and Central Texas.',
  provider: { '@id': '/#business' },
  areaServed: { '@type': 'State', name: 'Texas' },
  serviceType: 'Residential Propane Delivery',
  url: '/services/residential-propane-delivery',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
    { '@type': 'ListItem', position: 3, name: 'Residential Propane Delivery', item: '/services/residential-propane-delivery' },
  ],
}

const uses = [
  { label: 'Home Heating & HVAC', desc: 'Propane furnaces and heat pumps deliver consistent, efficient warmth even in extreme cold.' },
  { label: 'Water Heaters', desc: 'Tank and tankless propane water heaters heat water faster and cost less to operate than electric.' },
  { label: 'Cooking Ranges & Cooktops', desc: 'Precise flame control for chefs and home cooks — preferred over electric by 96% of chefs.' },
  { label: 'Standby Generators', desc: 'Whole-home propane generators keep the lights on during Texas power outages.' },
  { label: 'Pool & Spa Heaters', desc: 'Heat your pool faster and more affordably with a propane heater versus electric resistance.' },
  { label: 'Outdoor Fire Features', desc: 'Propane fire pits, fireplaces, and lanterns for year-round outdoor living in Central Texas.' },
]

export default function ResidentialDeliveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Residential Service"
        title="Residential Propane Delivery in Leander, Austin & Central Texas"
        description="Action Propane, Inc. delivers propane directly to your home on a schedule that works for you. Serving families across Central Texas for over 30 years."
        ctaLabel="Request Service"
        ctaHref="/contact"
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Residential Propane Delivery', href: '/services/residential-propane-delivery' },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10">
          <article>
            <section aria-labelledby="res-intro">
              <h2 id="res-intro" className="text-2xl font-bold text-[#1e293b] mb-4">
                Home Propane Delivery You Can Count On
              </h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                Action Propane, Inc. has delivered propane to homes across Leander, Austin, Cedar Park,
                Georgetown, and surrounding Central Texas communities for more than 30 years. Whether your
                home relies on propane for heating, cooking, water heating, or backup power, we ensure your
                tank stays full and your household stays running.
              </p>
              <p className="text-[#334155] leading-relaxed mb-6">
                We offer flexible delivery scheduling to fit your usage patterns and household size. Call us
                to set up a recurring delivery schedule or request a one-time fill. Our team will confirm
                your address is within our{' '}
                <Link href="/delivery-areas" className="text-[#dc2626] hover:underline">service territory</Link>{' '}
                and walk you through your options.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="res-uses">
              <h2 id="res-uses" className="text-xl font-bold text-[#1e293b] mb-5">
                Common Residential Propane Uses in Texas
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {uses.map((u) => (
                  <div key={u.label} className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-5">
                    <h3 className="font-semibold text-[#1e293b] mb-1 text-sm">{u.label}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{u.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10" aria-labelledby="res-why">
              <h2 id="res-why" className="text-xl font-bold text-[#1e293b] mb-4">
                Why Choose Propane for Your Home?
              </h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                Many Central Texas homes are located in areas without natural gas infrastructure.
                Propane fills that gap — it can be stored in an on-site tank and used for virtually
                every energy need in a modern home. Compared to electricity, propane appliances are
                generally more efficient, faster, and less expensive to operate.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Works anywhere in Central Texas — no gas line required',
                  'Stored on your property, not dependent on the utility grid',
                  'Burns hotter and cleaner than electricity for cooking and heating',
                  'Lower operating costs for water heating, space heating, and cooking',
                  'Single supplier for fuel, tanks, and related maintenance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#334155]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#64748b]">
                Read more:{' '}
                <Link href="/blog/top-5-reasons-to-invest-in-residential-propane-delivery-services" className="text-[#dc2626] hover:underline">
                  Top 5 Reasons to Invest in Residential Propane Delivery Services
                </Link>
              </p>
            </section>

            <section className="mb-10" aria-labelledby="res-areas">
              <h2 id="res-areas" className="text-xl font-bold text-[#1e293b] mb-4">
                Residential Delivery Areas
              </h2>
              <p className="text-[#334155] text-sm leading-relaxed mb-4">
                We deliver to homes across the following Central Texas communities. Not sure if we cover your address?
                Call us at <a href={PHONE_HREF} className="text-[#dc2626] font-medium">{PHONE}</a> to confirm.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {DELIVERY_CITIES.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/delivery-areas/${city.slug}`}
                    className="flex items-center gap-2 text-sm text-[#1e293b] hover:text-[#dc2626] transition-colors py-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#dc2626" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /></svg>
                    {city.name}, TX
                  </Link>
                ))}
              </div>
            </section>

            <section aria-labelledby="res-related">
              <h2 id="res-related" className="text-xl font-bold text-[#1e293b] mb-4">Related Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { href: '/services/propane-tank-installation', label: 'Propane Tank Installation' },
                  { href: '/services/propane-system-service-repair', label: 'System Service & Repair' },
                  { href: '/services/propane-cylinder-rv-refill-station', label: 'Walk-In Cylinder Refill' },
                  { href: '/products/above-ground-propane-tanks', label: 'Above-Ground Tanks' },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="flex items-center gap-2 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] px-4 py-3 text-sm font-medium text-[#1e293b] hover:border-[#dc2626] hover:text-[#dc2626] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>
          </article>

          <ServiceSidebar currentHref="/services/residential-propane-delivery" />
        </div>
      </div>

      <CTABanner heading="Ready to Set Up Residential Propane Delivery?" subtext="Call Action Propane, Inc. today to schedule home delivery in Leander, Austin, Cedar Park, Georgetown, or anywhere in our Central Texas service area." />
    </>
  )
}
