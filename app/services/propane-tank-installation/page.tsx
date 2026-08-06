import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { ServiceSidebar } from '@/components/ServiceSidebar'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Propane Tank Installation in Leander & Austin TX | Action Propane Inc',
  description:
    'Licensed propane tank installation for homes and businesses in Central Texas. Above-ground and underground tanks sized for your needs. Call Action Propane at 512-259-1196.',
  alternates: { canonical: '/services/propane-tank-installation' },
  openGraph: {
    title: 'Propane Tank Installation in Leander & Austin TX | Action Propane Inc',
    description:
      'Licensed above-ground and underground propane tank installation for homes and businesses in Central Texas. Sized for your needs, professionally installed.',
    url: '/services/propane-tank-installation',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Propane Tank Installation',
  description: 'Licensed above-ground and underground propane tank installation for homes and businesses in Central Texas.',
  provider: { '@id': '/#business' },
  areaServed: { '@type': 'State', name: 'Texas' },
  serviceType: 'Propane Tank Installation',
  url: '/services/propane-tank-installation',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
    { '@type': 'ListItem', position: 3, name: 'Propane Tank Installation', item: '/services/propane-tank-installation' },
  ],
}

const tankSizes = [
  { size: '120 Gallon', use: 'Supplemental heating, whole-home cooking, water heaters for smaller homes.' },
  { size: '250 Gallon', use: 'Primary heating for smaller homes, water heaters, range, and fireplace.' },
  { size: '500 Gallon', use: 'Most popular residential size — whole-home heating, multiple appliances.' },
  { size: '1,000 Gallon', use: 'Large homes, whole-home standby generators, pool heaters, high usage.' },
  { size: 'Commercial', use: 'Custom sizing for restaurants, farms, manufacturing, and bulk storage.' },
]

export default function TankInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Tank Installation"
        title="Propane Tank Installation for Homes & Businesses in Central Texas"
        description="Action Propane, Inc. installs above-ground and underground propane tanks for residential and commercial customers across Leander, Austin, and Central Texas. Licensed, insured, and Texas Railroad Commission compliant."
        ctaLabel="Request Installation Quote"
        ctaHref="/contact"
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: 'Tank Installation', href: '/services/propane-tank-installation' },
        ]}
      />

      <div className="bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-[1fr_300px] gap-10 items-start">
          <div className="space-y-10">
            <section aria-labelledby="install-intro">
              <h2 id="install-intro" className="text-2xl font-bold text-[#1e293b] mb-4">
                Professional Propane Tank Installation in Central Texas
              </h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                Whether you&apos;re building a new home, switching from electricity, or adding
                propane to an existing property, Action Propane, Inc. handles every step of the
                tank installation process. Our licensed technicians assess your energy needs,
                recommend the right tank size, and install it safely according to NFPA 58 and
                Texas Railroad Commission standards.
              </p>
              <p className="text-[#334155] leading-relaxed mb-4">
                We install both above-ground and underground tanks for homes, ranches, farms,
                and commercial properties. After installation, we test all lines, valves, and
                regulators before lighting any appliances.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/products/above-ground-propane-tanks" className="inline-flex items-center gap-2 bg-white border border-[#e2e8f0] hover:border-[#dc2626] text-[#1e293b] hover:text-[#dc2626] font-medium px-4 py-2.5 rounded text-sm transition-colors">
                  Above-Ground Tanks
                </Link>
                <Link href="/products/underground-propane-tanks" className="inline-flex items-center gap-2 bg-white border border-[#e2e8f0] hover:border-[#dc2626] text-[#1e293b] hover:text-[#dc2626] font-medium px-4 py-2.5 rounded text-sm transition-colors">
                  Underground Tanks
                </Link>
              </div>
            </section>

            {/* Tank sizes */}
            <section aria-labelledby="tank-sizes">
              <h2 id="tank-sizes" className="text-2xl font-bold text-[#1e293b] mb-4">
                What Tank Size Do You Need?
              </h2>
              <p className="text-[#334155] leading-relaxed mb-5">
                Tank sizing depends on the number and type of propane appliances, your home&apos;s
                square footage, your local climate, and how often you want to schedule deliveries.
                Larger tanks mean fewer fill-ups; smaller tanks cost less upfront. Our team will
                walk you through the tradeoffs at no charge.
              </p>
              <div className="space-y-3">
                {tankSizes.map((t) => (
                  <div key={t.size} className="bg-white rounded-xl border border-[#e2e8f0] p-5 flex gap-4 items-start">
                    <div className="w-28 shrink-0">
                      <span className="text-[#b91c1c] font-bold text-sm">{t.size}</span>
                    </div>
                    <p className="text-[#334155] text-sm leading-relaxed">{t.use}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-[#64748b]">
                Learn more about the{' '}
                <Link href="/blog/4-key-factors-to-consider-before-having-a-residential-propane-tank-installation" className="text-[#dc2626] hover:underline">
                  4 key factors to consider before a residential propane tank installation
                </Link>.
              </p>
            </section>

            {/* Process */}
            <section aria-labelledby="install-process">
              <h2 id="install-process" className="text-2xl font-bold text-[#1e293b] mb-5">
                The Installation Process
              </h2>
              <ol className="space-y-4">
                {[
                  { step: '1', title: 'Site Consultation', body: 'We visit your property, assess appliance load, review setback requirements, and recommend tank size and placement.' },
                  { step: '2', title: 'Permitting Guidance', body: 'We advise on local permit requirements. Some installations in Texas require a Texas Railroad Commission permit for bulk tanks.' },
                  { step: '3', title: 'Tank Delivery & Placement', body: 'We deliver and set the tank at the approved location — above ground on a gravel pad, or buried for underground installations.' },
                  { step: '4', title: 'Line & Regulator Installation', body: 'Our technicians run supply lines to all appliances, install the regulator, and ensure all connections are leak-free.' },
                  { step: '5', title: 'System Test & First Fill', body: 'We pressure-test the entire system, light all appliances, and fill the tank so you are ready to go from day one.' },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#dc2626] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e293b] mb-1">{item.title}</h3>
                      <p className="text-[#64748b] text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
                Call {PHONE}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#dc2626] text-[#dc2626] hover:bg-[#eff6ff] font-semibold px-5 py-3 rounded transition-colors text-sm">
                Request an Installation Quote
              </Link>
            </div>
          </div>

          <ServiceSidebar currentHref="/services/propane-tank-installation" />
        </div>
      </div>

      <CTABanner />
    </>
  )
}
