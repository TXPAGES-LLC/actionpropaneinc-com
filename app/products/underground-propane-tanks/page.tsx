import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Underground Propane Tanks in Leander & Austin TX | Action Propane Inc',
  description:
    'Underground propane tank installation for homes and businesses in Central Texas. Preserve landscaping aesthetics while getting reliable propane. Call Action Propane at 512-259-1196.',
  alternates: { canonical: '/products/underground-propane-tanks' },
  openGraph: {
    title: 'Underground Propane Tanks in Leander & Austin TX | Action Propane Inc',
    description:
      'Underground propane tanks for homes and businesses in Central Texas. Preserve landscaping aesthetics while getting reliable fuel. Professionally installed.',
    url: '/products/underground-propane-tanks',
    type: 'website',
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Underground Propane Tanks',
  description: 'Underground propane tank installation for homes and businesses in Central Texas. Preserve landscaping aesthetics while getting reliable propane.',
  brand: { '@type': 'Brand', name: 'Action Propane Inc' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    seller: { '@id': '/#business' },
  },
  url: '/products/underground-propane-tanks',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: '/products' },
    { '@type': 'ListItem', position: 3, name: 'Underground Propane Tanks', item: '/products/underground-propane-tanks' },
  ],
}

export default function UndergroundTanksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Propane Tanks"
        title="Underground Propane Tanks in Central Texas"
        description="Buried propane tanks deliver the same reliable fuel without visible equipment on your property. Ideal for HOA neighborhoods and landscaped properties in Leander, Austin, and the surrounding area."
        ctaLabel="Request Installation Quote"
        ctaHref="/contact"
        breadcrumbs={[
          { label: 'Products', href: '/products/storefront' },
          { label: 'Underground Propane Tanks', href: '/products/underground-propane-tanks' },
        ]}
      />

      <div className="bg-[#f8fafc] py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <h2 className="text-xl font-bold text-[#1e293b] mb-3">Underground Propane Tanks — All the Benefits, Hidden from View</h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                An underground propane tank is buried below grade, with only a dome cover visible at the surface. This makes them the preferred choice for homeowners and businesses that want the full benefits of propane without a visible tank in their yard or near their building.
              </p>
              <p className="text-[#334155] leading-relaxed mb-8">
                Action Propane installs, delivers to, and maintains underground propane tanks for residential and commercial customers across Central Texas. Underground tanks receive special cathodic protection coatings during manufacturing to prevent corrosion from soil contact.
              </p>

              <h2 className="text-xl font-bold text-[#1e293b] mb-4">When to Choose Underground</h2>
              <ul className="space-y-2.5 mb-8">
                {[
                  'Your HOA prohibits or restricts visible propane tanks',
                  'You want to preserve the look of a landscaped front or backyard',
                  'Your property has limited above-grade space near the home',
                  'You prefer to minimize visible utility equipment around the building',
                  'You are building a new home and want tanks positioned before landscaping',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#334155]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold text-[#1e293b] mb-4">Above-Ground vs. Underground — Quick Comparison</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#0f172a] text-white">
                      <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Factor</th>
                      <th className="text-left px-4 py-3 font-semibold">Above-Ground</th>
                      <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">Underground</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Visibility', 'Visible on property', 'Hidden below grade'],
                      ['Installation cost', 'Lower', 'Higher (excavation required)'],
                      ['HOA compatibility', 'May be restricted', 'Typically allowed'],
                      ['Maintenance access', 'Fully accessible', 'Dome cover accessible; tank buried'],
                      ['Temperature effect', 'Exposed to temperature swings', 'Stable underground temperature'],
                      ['Delivery process', 'Standard', 'Requires locating fill port'],
                    ].map(([factor, above, under], i) => (
                      <tr key={factor} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}>
                        <td className="px-4 py-3 font-medium text-[#1e293b] border-b border-[#e2e8f0]">{factor}</td>
                        <td className="px-4 py-3 text-[#334155] border-b border-[#e2e8f0]">{above}</td>
                        <td className="px-4 py-3 text-[#334155] border-b border-[#e2e8f0]">{under}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-bold text-[#1e293b] mb-3">Underground Tank Installation Process</h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                Installing an underground tank requires excavation, proper bedding material, cathodic protection verification, supply line burial, and careful backfill to avoid tank damage. Action Propane&apos;s installation team handles the full process and ensures the installation meets NFPA 58 requirements and local code.
              </p>
              <p className="text-[#334155] leading-relaxed mb-8">
                The best time to install an underground tank is during new construction before final grading and landscaping. For existing properties, we evaluate access routes and minimize disruption to existing landscaping.
              </p>

              <div className="bg-[#0f172a] text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold mb-1">Interested in an Underground Propane Tank?</p>
                  <p className="text-white/60 text-sm">Call Action Propane to discuss site requirements, sizing, and installation scheduling.</p>
                </div>
                <a href={PHONE_HREF} className="shrink-0 inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm whitespace-nowrap">
                  Call {PHONE}
                </a>
              </div>

              <p className="text-[#64748b] text-xs mt-6">
                Also see:{' '}
                <Link href="/products/above-ground-propane-tanks" className="text-[#dc2626] hover:underline">Above-Ground Propane Tanks</Link>
                {' '}·{' '}
                <Link href="/services/propane-tank-installation" className="text-[#dc2626] hover:underline">Tank Installation Service</Link>
              </p>
            </article>

            <aside className="space-y-5">
              <div className="bg-[#0f172a] text-white rounded-xl p-5">
                <p className="text-sm font-semibold text-[#dc2626] uppercase tracking-wide mb-2">Get a Quote</p>
                <p className="text-white/70 text-sm mb-4">Call us to discuss underground tank installation for your Leander or Austin area property.</p>
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-4 py-3 rounded transition-colors text-sm w-full">
                  Call {PHONE}
                </a>
                <Link href="/contact" className="mt-2 flex items-center justify-center text-white/70 hover:text-white border border-white/20 hover:border-white/40 font-semibold px-4 py-2.5 rounded transition-colors text-sm w-full">
                  Request a Quote
                </Link>
              </div>
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b] mb-3">Related Pages</p>
                <ul className="space-y-1.5 text-sm">
                  {[
                    { label: 'Above-Ground Propane Tanks', href: '/products/above-ground-propane-tanks' },
                    { label: 'DOT Propane Cylinders', href: '/products/dot-propane-cylinders' },
                    { label: 'Tank Installation Service', href: '/services/propane-tank-installation' },
                    { label: 'Residential Delivery', href: '/services/residential-propane-delivery' },
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

      <CTABanner heading="Underground Propane Tank Installation in Central Texas" subtext="Preserve your landscaping and satisfy HOA requirements. Action Propane installs underground tanks for homes and businesses across Leander, Austin, and surrounding areas." />
    </>
  )
}
