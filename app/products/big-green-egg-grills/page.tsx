import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/PageHero'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF, MAPS_HREF, ADDRESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Big Green Egg Grills in Leander TX | Authorized Dealer | Action Propane Inc',
  description:
    'Authorized Big Green Egg dealer in Leander, TX. Buy the world\'s best kamado grill at Action Propane, 2601 S Hwy 183. Open Mon–Sat. Call 512-259-1196.',
  alternates: { canonical: '/products/big-green-egg-grills' },
  openGraph: {
    title: 'Big Green Egg Grills in Leander TX | Authorized Dealer | Action Propane Inc',
    description:
      'Authorized Big Green Egg dealer in Leander, TX. All sizes in stock at 2601 S Hwy 183. Grill, smoke, bake, and roast with the world\'s best kamado. Open Mon–Sat.',
    url: '/products/big-green-egg-grills',
    type: 'website',
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Big Green Egg Kamado Grills',
  description: 'Authorized Big Green Egg dealer in Leander, TX. All sizes available — Mini, Small, Medium, Large, XLarge, 2XLarge.',
  brand: { '@type': 'Brand', name: 'Big Green Egg' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    seller: { '@id': '/#business' },
  },
  url: '/products/big-green-egg-grills',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: '/products' },
    { '@type': 'ListItem', position: 3, name: 'Big Green Egg Grills', item: '/products/big-green-egg-grills' },
  ],
}

const eggSizes = [
  { name: 'Mini', desc: 'Compact and portable. Perfect for camping, tailgating, or a small balcony.' },
  { name: 'MiniMax', desc: 'Portable with a full cooking surface. The go-anywhere kamado.' },
  { name: 'Small', desc: 'Great for couples or small families. Low fuel consumption.' },
  { name: 'Medium', desc: 'The most popular size. Fits a full rack of ribs or a 12" pizza.' },
  { name: 'Large', desc: 'The original. The most versatile size for most backyard cooks.' },
  { name: 'XLarge', desc: 'For serious entertainers. Fits two full racks of ribs side by side.' },
  { name: '2XL', desc: 'The largest Egg. For commercial use or very large gatherings.' },
]

export default function BigGreenEggPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Authorized Dealer"
        title="Big Green Egg Grills — Authorized Dealer in Leander, TX"
        description="Action Propane is an authorized Big Green Egg dealer at our Leander storefront. Visit us at 2601 S Hwy 183 to see the full EGG lineup and get expert advice on choosing the right size."
        ctaLabel="Get Directions"
        ctaHref={MAPS_HREF}
        breadcrumbs={[
          { label: 'Products', href: '/products/storefront' },
          { label: 'Big Green Egg Grills', href: '/products/big-green-egg-grills' },
        ]}
      />

      <div className="bg-[#f8fafc] py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              {/* Showroom photo grid */}
              <div className="grid grid-cols-2 gap-3 mb-7">
                <div className="relative rounded-xl overflow-hidden h-52 col-span-2">
                  <Image
                    src="/img-1365.jpg"
                    alt="Big Green Egg showroom floor at Action Propane in Leander TX — multiple EGG sizes on display"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden h-40">
                  <Image
                    src="/img-1372.jpg"
                    alt="Big Green Egg grills open on stands in Action Propane showroom, Leander TX"
                    fill
                    className="object-cover object-center"
                    sizes="30vw"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden h-40">
                  <Image
                    src="/img-1366.jpg"
                    alt="Big Green Egg on display table with EGGniter accessories and charcoal at Action Propane"
                    fill
                    className="object-cover object-center"
                    sizes="30vw"
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold text-[#1e293b] mb-3">What Is a Big Green Egg?</h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                The Big Green Egg is a ceramic kamado-style cooker that functions as a grill, smoker, roaster, and brick oven in one unit. Its thick ceramic walls retain heat with remarkable efficiency, allowing it to reach and hold temperatures from 200&deg;F (for low-and-slow smoking) to 750&deg;F+ (for searing steaks or baking Neapolitan pizza).
              </p>
              <p className="text-[#334155] leading-relaxed mb-8">
                Action Propane carries the Big Green Egg line at our Leander storefront. Our staff can walk you through the size options, accessories, and charcoal types to help you find the right setup for your outdoor kitchen.
              </p>

              <h2 className="text-xl font-bold text-[#1e293b] mb-4">Big Green Egg Sizes</h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {eggSizes.map((egg) => (
                  <div key={egg.name} className="bg-white rounded-lg border border-[#e2e8f0] p-4">
                    <h3 className="font-bold text-[#1e293b] text-sm mb-1">{egg.name} EGG</h3>
                    <p className="text-[#64748b] text-xs leading-relaxed">{egg.desc}</p>
                  </div>
                ))}
              </div>

              {/* Accessories photos */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="relative rounded-xl overflow-hidden h-40">
                  <Image
                    src="/img-1374.jpg"
                    alt="Big Green Egg accessories wall — EGGmitts, plancha griddles, and tools at Action Propane"
                    fill
                    className="object-cover object-center"
                    sizes="30vw"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden h-40">
                  <Image
                    src="/img-1376.jpg"
                    alt="Big Green Egg smoking chunks, thermometers, and grill accessories at Action Propane Leander"
                    fill
                    className="object-cover object-center"
                    sizes="30vw"
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold text-[#1e293b] mb-4">Why the Big Green Egg?</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Grill, smoke, roast, and bake', desc: 'One cooker replaces four. Temperature range from 200°F to 750°F+.' },
                  { title: 'Ceramic heat retention', desc: 'Thick walls lock in heat and moisture — meats stay juicy and flavorful.' },
                  { title: 'Fuel efficient', desc: 'Uses significantly less charcoal than a standard kettle grill or offset smoker.' },
                  { title: 'Built to last', desc: 'The ceramic body is virtually indestructible and backed by a lifetime warranty.' },
                  { title: 'Huge accessory ecosystem', desc: 'EGGcessories for pizza, paella, stir-fry, rotisserie, and more.' },
                  { title: 'Made in the USA', desc: 'Big Green Egg is headquartered in Atlanta, Georgia, and has been for 50+ years.' },
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

              <div className="bg-[#0f172a] text-white rounded-xl p-6">
                <p className="font-bold text-lg mb-2">Come See the Big Green Egg In Person</p>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Visit Action Propane at {ADDRESS}. Our staff can answer sizing and accessory questions and help you get exactly what you need for your outdoor cooking setup.
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
                <Link href="/products/wilmington-grills" className="text-[#dc2626] hover:underline">Wilmington Grills</Link>
                {' '}·{' '}
                <Link href="/products/storefront" className="text-[#dc2626] hover:underline">All Storefront Products</Link>
              </p>
            </article>

            <aside className="space-y-5">
              <div className="bg-[#1a3a1a] rounded-xl overflow-hidden flex items-center justify-center p-5 h-28">
                <Image
                  src="/big-green-egg-web-logo-lg-351w.png"
                  alt="Big Green Egg — Authorized Dealer"
                  width={220}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="bg-[#fef2f2] rounded-xl border border-[#fecaca] p-5">
                <p className="text-sm font-semibold text-[#b91c1c] uppercase tracking-wide mb-2">Store Hours</p>
                <dl className="text-sm space-y-1.5 text-[#1e293b]">
                  <div className="flex justify-between"><dt className="text-[#64748b]">Mon – Fri</dt><dd className="font-medium">8am – 6pm</dd></div>
                  <div className="flex justify-between"><dt className="text-[#64748b]">Saturday</dt><dd className="font-medium">8am – 4pm</dd></div>
                  <div className="flex justify-between"><dt className="text-[#64748b]">Sunday</dt><dd className="text-[#94a3b8]">Closed</dd></div>
                </dl>
                <p className="text-xs text-[#64748b] mt-3">{ADDRESS}</p>
                <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#dc2626] hover:text-[#b91c1c] font-medium transition-colors">
                  Get Directions
                </a>
              </div>
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b] mb-3">Also In-Store</p>
                <ul className="space-y-1.5 text-sm">
                  {[
                    { label: 'Wilmington Grills', href: '/products/wilmington-grills' },
                    { label: 'DOT Propane Cylinders', href: '/products/dot-propane-cylinders' },
                    { label: 'Above-Ground Tanks', href: '/products/above-ground-propane-tanks' },
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

      <CTABanner heading="Big Green Egg Grills — Visit Our Leander, TX Store" subtext="Authorized dealer at 2601 S Hwy 183, Leander, TX. Open Monday–Friday 8am–6pm and Saturday 8am–4pm." showRequestService={false} />
    </>
  )
}
