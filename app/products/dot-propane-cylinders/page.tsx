import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/PageHero'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF, MAPS_HREF } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'DOT Propane Cylinders in Leander TX | Action Propane Inc',
  description:
    'DOT-certified propane cylinders for grills, heaters, generators, RVs, and construction equipment. Available and refillable at Action Propane in Leander, TX. Call 512-259-1196.',
  alternates: { canonical: '/products/dot-propane-cylinders' },
  openGraph: {
    title: 'DOT Propane Cylinders in Leander TX | Action Propane Inc',
    description:
      'DOT-certified propane cylinders for grills, heaters, generators, RVs, and construction at Action Propane in Leander, TX. Available in-store and refillable on-site.',
    url: '/products/dot-propane-cylinders',
    type: 'website',
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'DOT Propane Cylinders',
  description: 'DOT-certified propane cylinders for grills, heaters, generators, RVs, and construction equipment. Available and refillable at Action Propane in Leander, TX.',
  brand: { '@type': 'Brand', name: 'Action Propane Inc' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    seller: { '@id': '/#business' },
  },
  url: '/products/dot-propane-cylinders',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: '/products' },
    { '@type': 'ListItem', position: 3, name: 'DOT Propane Cylinders', item: '/products/dot-propane-cylinders' },
  ],
}

const cylinderSizes = [
  { size: '1 lb', capacity: '0.24 gal', typical: 'Camp stoves, torches, lanterns, portable devices' },
  { size: '11 lb', capacity: '2.6 gal', typical: 'Tabletop grills, small portable heaters' },
  { size: '20 lb', capacity: '4.7 gal', typical: 'Standard BBQ grills, outdoor heaters, fire pits' },
  { size: '33 lb', capacity: '8 gal', typical: 'Forklifts, large grills, commercial equipment' },
  { size: '40 lb', capacity: '9.4 gal', typical: 'Construction heaters, larger appliances' },
  { size: '100 lb', capacity: '23.6 gal', typical: 'Large outdoor events, space heaters, generators' },
]

export default function DOTCylindersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Propane Cylinders"
        title="DOT Propane Cylinders in Leander, TX — Sales & Refill"
        description="DOT-certified portable propane cylinders for every application — from backyard BBQs to construction heaters to RV travel. Available for purchase and refill at our Leander storefront."
        ctaLabel="Get Directions to Our Store"
        ctaHref={MAPS_HREF}
        breadcrumbs={[
          { label: 'Products', href: '/products/storefront' },
          { label: 'DOT Propane Cylinders', href: '/products/dot-propane-cylinders' },
        ]}
      />

      <div className="bg-[#f8fafc] py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-3 mb-7">
                <div className="relative rounded-xl overflow-hidden h-52 col-span-2">
                  <Image
                    src="/tank-cylinders.jpg"
                    alt="DOT propane cylinders for sale at Action Propane in Leander TX — multiple sizes from 5 lb to 100 lb"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden h-40">
                  <Image
                    src="/img-1364.jpg"
                    alt="Propane cylinders and fittings available at Action Propane storefront, Leander TX"
                    fill
                    className="object-cover object-center"
                    sizes="30vw"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden h-40">
                  <Image
                    src="/propane-leander-tx.jpg"
                    alt="Action Propane walk-in propane refill station in Leander TX — fill your DOT cylinder by weight"
                    fill
                    className="object-cover object-center"
                    sizes="30vw"
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold text-[#1e293b] mb-3">DOT Propane Cylinders — Portable, Certified, Versatile</h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                DOT (Department of Transportation) propane cylinders are portable, pressure-tested containers certified for transportation and use across a wide range of residential, commercial, and industrial applications. They are the cylinders you use for your BBQ grill, patio heater, RV, camp stove, or portable generator.
              </p>
              <p className="text-[#334155] leading-relaxed mb-8">
                Action Propane stocks DOT cylinders in the most common sizes and refills them by weight at our Leander storefront. Walk in any time during business hours — no appointment needed for cylinder refill.
              </p>

              <h2 className="text-xl font-bold text-[#1e293b] mb-4">DOT Cylinder Sizes Available</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#0f172a] text-white">
                      <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Size</th>
                      <th className="text-left px-4 py-3 font-semibold">Capacity</th>
                      <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">Typical Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cylinderSizes.map((row, i) => (
                      <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}>
                        <td className="px-4 py-3 font-semibold text-[#1e293b] border-b border-[#e2e8f0]">{row.size}</td>
                        <td className="px-4 py-3 text-[#334155] border-b border-[#e2e8f0]">{row.capacity}</td>
                        <td className="px-4 py-3 text-[#334155] border-b border-[#e2e8f0]">{row.typical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-bold text-[#1e293b] mb-3">Refill vs. Exchange — What You Need to Know</h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                Exchange programs at grocery stores and home improvement retailers are convenient, but they frequently deliver cylinders that are only 75% full. Action Propane fills cylinders by weight, ensuring you receive the full capacity you are paying for.
              </p>
              <p className="text-[#334155] leading-relaxed mb-8">
                Refilling also lets you keep your own cylinder — which may be newer, better maintained, or a size not available in exchange programs.
              </p>

              <h2 className="text-xl font-bold text-[#1e293b] mb-3">Cylinder Safety & Requalification</h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                DOT cylinders must be requalified every 12 years (5 years for some sizes). A cylinder past its requalification date cannot legally be refilled. When you bring your cylinder in for refill, our staff checks the qualification date stamped on the collar. If your cylinder is due, we can advise on recertification or replacement.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-[#334155]">
                {[
                  'OPD (Overfilling Prevention Device) valve required on cylinders 4–40 lbs',
                  'Cylinders must not show signs of dents, cuts, bulges, or fire damage',
                  'Requalification date stamped on collar — format: MM-YY',
                  'Cylinders stored upright in ventilated areas only',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-[#0f172a] text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold mb-1">Visit Our Leander Propane Refill Station</p>
                  <p className="text-white/60 text-sm">Walk in Mon–Fri 8am–6pm or Sat 8am–4pm. No appointment needed.</p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm whitespace-nowrap">
                    Call {PHONE}
                  </a>
                  <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white px-5 py-2.5 rounded transition-colors text-sm whitespace-nowrap">
                    Get Directions
                  </a>
                </div>
              </div>

              <p className="text-[#64748b] text-xs mt-6">
                Also see:{' '}
                <Link href="/services/propane-cylinder-rv-refill-station" className="text-[#dc2626] hover:underline">Cylinder & RV Refill Station</Link>
                {' '}·{' '}
                <Link href="/services/forklift-propane-cylinder-exchange" className="text-[#dc2626] hover:underline">Forklift Cylinder Exchange</Link>
              </p>
            </article>

            <aside className="space-y-5">
              <div className="bg-[#fef2f2] rounded-xl border border-[#fecaca] p-5">
                <p className="text-sm font-semibold text-[#b91c1c] uppercase tracking-wide mb-2">Refill Station Hours</p>
                <dl className="text-sm space-y-1.5 text-[#1e293b]">
                  <div className="flex justify-between"><dt className="text-[#64748b]">Mon – Fri</dt><dd className="font-medium">8am – 6pm</dd></div>
                  <div className="flex justify-between"><dt className="text-[#64748b]">Saturday</dt><dd className="font-medium">8am – 4pm</dd></div>
                  <div className="flex justify-between"><dt className="text-[#64748b]">Sunday</dt><dd className="text-[#94a3b8]">Closed</dd></div>
                </dl>
                <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="block text-xs text-[#64748b] hover:text-[#dc2626] mt-3 transition-colors">
                  2601 S Hwy 183, Leander, TX 78641
                </a>
                <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#dc2626] hover:text-[#b91c1c] font-medium transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Get Directions
                </a>
              </div>
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b] mb-3">Related Pages</p>
                <ul className="space-y-1.5 text-sm">
                  {[
                    { label: 'Cylinder & RV Refill Station', href: '/services/propane-cylinder-rv-refill-station' },
                    { label: 'Above-Ground Tanks', href: '/products/above-ground-propane-tanks' },
                    { label: 'Forklift Cylinder Exchange', href: '/services/forklift-propane-cylinder-exchange' },
                    { label: 'Storefront Products', href: '/products/storefront' },
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

      <CTABanner heading="DOT Propane Cylinders — Purchase & Refill in Leander, TX" subtext="Walk in to our Leander storefront for cylinder refills and purchases. Open Monday–Friday 8am–6pm and Saturday 8am–4pm." />
    </>
  )
}
