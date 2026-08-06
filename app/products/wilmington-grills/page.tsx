import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/PageHero'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF, MAPS_HREF, ADDRESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Wilmington Grills in Leander TX | Action Propane Inc',
  description:
    'Premium Wilmington Grills available at Action Propane\'s Leander TX storefront. Propane and charcoal grill models for serious outdoor cooks. Call 512-259-1196.',
  alternates: { canonical: '/products/wilmington-grills' },
  openGraph: {
    title: 'Wilmington Grills in Leander TX | Action Propane Inc',
    description:
      'Premium Wilmington propane and charcoal grills in stock at Action Propane, 2601 S Hwy 183, Leander TX. Perfect for serious outdoor cooks. Open Mon–Sat.',
    url: '/products/wilmington-grills',
    type: 'website',
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Wilmington Grills',
  description: 'Premium Wilmington propane and charcoal grills available at Action Propane in Leander, TX.',
  brand: { '@type': 'Brand', name: 'Wilmington Grills' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    seller: { '@id': '/#business' },
  },
  url: '/products/wilmington-grills',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: '/products' },
    { '@type': 'ListItem', position: 3, name: 'Wilmington Grills', item: '/products/wilmington-grills' },
  ],
}

export default function WilmingtonGrillsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Premium Grills"
        title="Wilmington Grills Available at Action Propane in Leander, TX"
        description="Action Propane carries Wilmington Grills at our Leander storefront. Built for serious outdoor cooks, Wilmington offers premium propane and charcoal grill options at a range of price points."
        ctaLabel="Get Directions"
        ctaHref={MAPS_HREF}
        breadcrumbs={[
          { label: 'Products', href: '/products/storefront' },
          { label: 'Wilmington Grills', href: '/products/wilmington-grills' },
        ]}
      />

      <div className="bg-[#f8fafc] py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-3 mb-7">
                <div className="relative rounded-xl overflow-hidden h-52 col-span-2">
                  <Image
                    src="/img-1377.jpg"
                    alt="Two Wilmington Grills side by side in Action Propane showroom, Leander TX"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden h-40">
                  <Image
                    src="/wilmington-grill.jpg"
                    alt="Wilmington Grill stainless steel body — available at Action Propane in Leander TX"
                    fill
                    className="object-cover object-center"
                    sizes="30vw"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden h-40">
                  <Image
                    src="/img-1368.jpg"
                    alt="Action Propane storefront interior showing Wilmington Grill on display floor"
                    fill
                    className="object-cover object-top"
                    sizes="30vw"
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold text-[#1e293b] mb-3">About Wilmington Grills</h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                Wilmington Grills are designed and built for outdoor cooking enthusiasts who expect performance, durability, and a polished aesthetic. The Wilmington lineup includes both propane and charcoal grill configurations with heavy-gauge stainless steel construction, large cooking surfaces, and thoughtful design details that make cooking and cleanup easier.
              </p>
              <p className="text-[#334155] leading-relaxed mb-8">
                Action Propane carries Wilmington Grills at our Leander storefront. Visit us during business hours to see current models and talk with our staff about which configuration fits your outdoor kitchen setup.
              </p>

              <h2 className="text-xl font-bold text-[#1e293b] mb-4">What Sets Wilmington Grills Apart</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Heavy-gauge construction', desc: 'Built with commercial-grade materials for long-term outdoor durability in Texas weather.' },
                  { title: 'Large cooking surface', desc: 'Generous primary and secondary cooking areas for grilling, smoking, and warming.' },
                  { title: 'Precise heat control', desc: 'Wide temperature range with even heat distribution across the cooking surface.' },
                  { title: 'Clean aesthetic', desc: 'Polished stainless finish looks great on any patio, deck, or outdoor kitchen island.' },
                  { title: 'Propane & charcoal options', desc: 'Choose the fuel type that fits your cooking style. Both available in-store.' },
                  { title: 'Easy to maintain', desc: 'Grease management systems and accessible burner components simplify cleanup.' },
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

              <h2 className="text-xl font-bold text-[#1e293b] mb-3">Propane Refill for Your Wilmington Grill</h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                Already own a Wilmington Grill? Keep it running with accurate, full-fill propane cylinder refills at our walk-in refill station. No appointment needed — just bring your cylinder in during business hours.
              </p>
              <p className="text-[#334155] leading-relaxed mb-8">
                We fill 20 lb and larger cylinders by weight, so you get every ounce you pay for. Propane customers who pick up a Wilmington Grill in-store can get their first cylinder filled while they&apos;re here.
              </p>

              <div className="bg-[#0f172a] text-white rounded-xl p-6">
                <p className="font-bold text-lg mb-2">See Wilmington Grills In-Store</p>
                <p className="text-white/70 text-sm mb-4">
                  Visit Action Propane at {ADDRESS}. Our staff can help you compare models and get your propane cylinder filled on the same visit.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm">
                    Get Directions
                  </a>
                  <a href={PHONE_HREF} className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-5 py-3 rounded transition-colors text-sm">
                    Call {PHONE}
                  </a>
                </div>
              </div>

              <p className="text-[#64748b] text-xs mt-6">
                Also see:{' '}
                <Link href="/products/big-green-egg-grills" className="text-[#dc2626] hover:underline">Big Green Egg Grills</Link>
                {' '}·{' '}
                <Link href="/services/propane-cylinder-rv-refill-station" className="text-[#dc2626] hover:underline">Propane Cylinder Refill</Link>
              </p>
            </article>

            <aside className="space-y-5">
              <div className="bg-[#fef2f2] rounded-xl border border-[#fecaca] p-5">
                <p className="text-sm font-semibold text-[#b91c1c] uppercase tracking-wide mb-2">Store Hours</p>
                <dl className="text-sm space-y-1.5 text-[#1e293b]">
                  <div className="flex justify-between"><dt className="text-[#64748b]">Mon – Fri</dt><dd className="font-medium">8am – 6pm</dd></div>
                  <div className="flex justify-between"><dt className="text-[#64748b]">Saturday</dt><dd className="font-medium">8am – 4pm</dd></div>
                  <div className="flex justify-between"><dt className="text-[#64748b]">Sunday</dt><dd className="text-[#94a3b8]">Closed</dd></div>
                </dl>
                <p className="text-xs text-[#64748b] mt-3">{ADDRESS}</p>
                <a href={PHONE_HREF} className="mt-3 flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-4 py-2.5 rounded transition-colors text-sm w-full">
                  Call {PHONE}
                </a>
              </div>
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b] mb-3">Also In-Store</p>
                <ul className="space-y-1.5 text-sm">
                  {[
                    { label: 'Big Green Egg Grills', href: '/products/big-green-egg-grills' },
                    { label: 'DOT Propane Cylinders', href: '/products/dot-propane-cylinders' },
                    { label: 'Cylinder Refill Station', href: '/services/propane-cylinder-rv-refill-station' },
                    { label: 'All Products', href: '/products/storefront' },
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

      <CTABanner heading="Wilmington Grills — In Stock at Our Leander Storefront" subtext="Visit Action Propane at 2601 S Hwy 183, Leander, TX. Open Monday–Friday 8am–6pm and Saturday 8am–4pm." showRequestService={false} />
    </>
  )
}
