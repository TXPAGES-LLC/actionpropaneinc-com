import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF, MAPS_HREF } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Above-Ground Propane Tanks in Leander & Austin TX | Action Propane Inc',
  description:
    'Above-ground propane tanks for residential and commercial use in Central Texas. Sizes from 120 to 1,000 gallons. Professional installation by Action Propane. Call 512-259-1196.',
  alternates: { canonical: '/products/above-ground-propane-tanks' },
  openGraph: {
    title: 'Above-Ground Propane Tanks in Leander & Austin TX | Action Propane Inc',
    description:
      'Above-ground propane tanks from 120 to 1,000 gallons for homes and businesses in Central Texas. Professionally installed by Action Propane Inc.',
    url: '/products/above-ground-propane-tanks',
    type: 'website',
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Above-Ground Propane Tanks',
  description: 'Above-ground propane tanks for residential and commercial use in Central Texas. Sizes from 120 to 1,000 gallons.',
  brand: { '@type': 'Brand', name: 'Action Propane Inc' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    seller: { '@id': '/#business' },
  },
  url: '/products/above-ground-propane-tanks',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: '/products' },
    { '@type': 'ListItem', position: 3, name: 'Above-Ground Propane Tanks', item: '/products/above-ground-propane-tanks' },
  ],
}

const sizes = [
  { size: '120 gal', height: '4\'', length: '4\'', uses: 'Fireplace, water heater, range, single appliance' },
  { size: '250 gal', height: '4\'', length: '7\'7"', uses: 'Small home, 2–3 appliances, backup heat' },
  { size: '500 gal', height: '4\'', length: '9\'11"', uses: 'Average home, whole-home heat, generator' },
  { size: '1,000 gal', height: '4\'1"', length: '16\'2"', uses: 'Large home, commercial, agricultural' },
]

export default function AboveGroundTanksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Propane Tanks"
        title="Above-Ground Propane Tanks for Homes & Businesses in Central Texas"
        description="The most common, cost-effective propane tank solution. Action Propane supplies and installs above-ground tanks for residential and commercial properties across Leander, Austin, and Central Texas."
        ctaLabel="Request Installation Quote"
        ctaHref="/contact"
        breadcrumbs={[
          { label: 'Products', href: '/products/storefront' },
          { label: 'Above-Ground Propane Tanks', href: '/products/above-ground-propane-tanks' },
        ]}
      />

      <div className="bg-[#f8fafc] py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <h2 className="text-xl font-bold text-[#1e293b] mb-3">What Is an Above-Ground Propane Tank?</h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                Above-ground propane tanks sit on a concrete pad on your property and connect to your home or business via underground or surface-run supply lines. They are the most widely used propane tank configuration in Central Texas because they are less expensive to install, easier to inspect, and simpler to service than underground tanks.
              </p>
              <p className="text-[#334155] leading-relaxed mb-8">
                Above-ground tanks come in a range of sizes to match your appliance load and annual propane consumption. Action Propane will help you determine the right tank size based on the number and type of appliances you plan to run, your home or building size, and your typical usage patterns.
              </p>

              <h2 className="text-xl font-bold text-[#1e293b] mb-4">Common Above-Ground Tank Sizes</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#0f172a] text-white">
                      <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Tank Size</th>
                      <th className="text-left px-4 py-3 font-semibold">Height</th>
                      <th className="text-left px-4 py-3 font-semibold">Length</th>
                      <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">Typical Uses</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((row, i) => (
                      <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}>
                        <td className="px-4 py-3 font-semibold text-[#1e293b] border-b border-[#e2e8f0]">{row.size}</td>
                        <td className="px-4 py-3 text-[#334155] border-b border-[#e2e8f0]">{row.height}</td>
                        <td className="px-4 py-3 text-[#334155] border-b border-[#e2e8f0]">{row.length}</td>
                        <td className="px-4 py-3 text-[#334155] border-b border-[#e2e8f0]">{row.uses}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-bold text-[#1e293b] mb-4">Advantages of Above-Ground Tanks</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Lower installation cost', desc: 'No excavation required — faster setup at a lower price than underground tanks.' },
                  { title: 'Easier maintenance', desc: 'Regulators, valves, and connections are fully accessible for inspection and repair.' },
                  { title: 'Clear delivery access', desc: 'Delivery drivers can quickly locate and fill the tank on each visit.' },
                  { title: 'Faster installation', desc: 'A typical above-ground installation can be completed in a single visit.' },
                  { title: 'Wider size range', desc: 'All standard sizes from 120 to 1,000+ gallons are available above-ground.' },
                  { title: 'Code-compliant setbacks', desc: 'We ensure proper NFPA 58 setback distances from structures, property lines, and ignition sources.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-white rounded-lg border border-[#e2e8f0] p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                    <div>
                      <p className="font-semibold text-[#1e293b] text-sm">{item.title}</p>
                      <p className="text-[#64748b] text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#0f172a] text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold mb-1">Need an Above-Ground Tank Installed?</p>
                  <p className="text-white/60 text-sm">Call Action Propane to schedule a site evaluation and get sizing recommendations for your property.</p>
                </div>
                <a href={PHONE_HREF} className="shrink-0 inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm whitespace-nowrap">
                  Call {PHONE}
                </a>
              </div>

              <p className="text-[#64748b] text-xs mt-6">
                Also see:{' '}
                <Link href="/products/underground-propane-tanks" className="text-[#dc2626] hover:underline">Underground Propane Tanks</Link>
                {' '}·{' '}
                <Link href="/services/propane-tank-installation" className="text-[#dc2626] hover:underline">Tank Installation Service</Link>
              </p>
            </article>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="bg-[#0f172a] text-white rounded-xl p-5">
                <p className="text-sm font-semibold text-[#dc2626] uppercase tracking-wide mb-2">Get a Quote</p>
                <p className="text-white/70 text-sm mb-4">Call or visit our Leander storefront to discuss tank sizing and installation for your property.</p>
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-4 py-3 rounded transition-colors text-sm w-full">
                  Call {PHONE}
                </a>
                <Link href="/contact" className="mt-2 flex items-center justify-center text-white/70 hover:text-white border border-white/20 hover:border-white/40 font-semibold px-4 py-2.5 rounded transition-colors text-sm w-full">
                  Request Installation Quote
                </Link>
                <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center justify-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Visit Our Leander Store
                </a>
              </div>

              <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b] mb-3">Related Products & Services</p>
                <ul className="space-y-1.5 text-sm">
                  {[
                    { label: 'Underground Propane Tanks', href: '/products/underground-propane-tanks' },
                    { label: 'DOT Propane Cylinders', href: '/products/dot-propane-cylinders' },
                    { label: 'Tank Installation Service', href: '/services/propane-tank-installation' },
                    { label: 'Residential Delivery', href: '/services/residential-propane-delivery' },
                    { label: 'System Service & Repair', href: '/services/propane-system-service-repair' },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="flex items-center gap-2 text-[#1e293b] hover:text-[#dc2626] transition-colors py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <CTABanner heading="Above-Ground Propane Tank Installation in Central Texas" subtext="Action Propane sizes and installs above-ground tanks for homes and businesses across Leander, Austin, Cedar Park, Georgetown, and surrounding areas." />
    </>
  )
}
