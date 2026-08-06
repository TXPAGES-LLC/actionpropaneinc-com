import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/PageHero'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF, MAPS_HREF, ADDRESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Propane Products & Storefront in Leander TX | Action Propane Inc',
  description:
    'Visit Action Propane\'s Leander storefront at 2601 S Hwy 183 for propane tanks, cylinders, Big Green Egg grills, Wilmington grills, heaters, and accessories. Open Mon–Sat.',
  alternates: { canonical: '/products/storefront' },
  openGraph: {
    title: 'Propane Products & Storefront in Leander TX | Action Propane Inc',
    description:
      'Visit Action Propane at 2601 S Hwy 183, Leander TX. Propane tanks, cylinders, Big Green Egg, Wilmington Grills, heaters, and accessories in stock. Open Mon–Sat.',
    url: '/products/storefront',
    type: 'website',
  },
}

const storefrontSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'Action Propane Inc – Storefront',
  description: 'Propane products storefront at 2601 S Hwy 183, Leander TX. Tanks, cylinders, grills, heaters, and accessories.',
  url: '/products/storefront',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2601 S Hwy 183',
    addressLocality: 'Leander',
    addressRegion: 'TX',
    postalCode: '78641',
    addressCountry: 'US',
  },
  telephone: '+15122591196',
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-16:00'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: '/products' },
    { '@type': 'ListItem', position: 3, name: 'Storefront', item: '/products/storefront' },
  ],
}

const productCategories = [
  {
    title: 'Propane Tanks & Cylinders',
    items: ['Above-ground storage tanks (120–1,000 gal)', 'DOT portable cylinders (1–100 lb)', 'Forklift cylinders (33 lb)', 'RV/ASME tanks'],
    href: '/products/dot-propane-cylinders',
  },
  {
    title: 'Grills & Cookers',
    items: ['Big Green Egg kamado grills', 'Wilmington propane & charcoal grills', 'Grill accessories and covers', 'Cast iron cookware and tools'],
    href: '/products/big-green-egg-grills',
  },
  {
    title: 'Outdoor Heaters',
    items: ['Patio and deck heaters', 'Construction and garage heaters', 'Torpedo heaters', 'Infrared radiant heaters'],
    href: '/services/residential-propane-delivery',
  },
  {
    title: 'Hoses, Regulators & Fittings',
    items: ['First and second stage regulators', 'LP gas hoses (various lengths)', 'Quick-connect fittings', 'Appliance connectors'],
    href: '/services/propane-system-service-repair',
  },
  {
    title: 'Fire Features',
    items: ['Fire pit burners and rings', 'Fire table inserts', 'Log sets for fireplaces', 'Outdoor fireplace accessories'],
    href: '/services/residential-propane-delivery',
  },
  {
    title: 'Camping & Portable Equipment',
    items: ['Camp stove adapters', 'Portable lantern fuel cylinders', 'Camping heater accessories', 'Torch kits and igniters'],
    href: '/products/dot-propane-cylinders',
  },
]

export default function StorefrontPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storefrontSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Leander Storefront"
        title="Propane Products at Our Leander, TX Storefront"
        description="Visit Action Propane at 2601 S Hwy 183, Leander, TX for propane tanks, cylinders, grills, heaters, and accessories. Open Monday–Friday 8am–6pm and Saturday 8am–4pm."
        ctaLabel="Get Directions"
        ctaHref={MAPS_HREF}
        breadcrumbs={[
          { label: 'Products', href: '/products/storefront' },
        ]}
      />

      {/* Location callout */}
      <section className="bg-[#0f172a] text-white py-8 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <p className="font-bold text-lg">{ADDRESS}</p>
            <p className="text-white/60 text-sm mt-0.5">Mon–Fri 8am–6pm &nbsp;|&nbsp; Sat 8am–4pm &nbsp;|&nbsp; Sun Closed</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-4 py-2.5 rounded transition-colors text-sm">
              Call {PHONE}
            </a>
            <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-4 py-2.5 rounded transition-colors text-sm">
              Directions
            </a>
          </div>
        </div>
      </section>

      <div className="bg-[#f8fafc] py-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Interior photo gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            <div className="relative rounded-xl overflow-hidden h-48 col-span-2">
              <Image
                src="/img-1368.jpg"
                alt="Action Propane storefront interior — main showroom floor with grills and counter"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image
                src="/img-1371.jpg"
                alt="BBQ rubs, sauces, and seasonings shelf inside Action Propane in Leander TX"
                fill
                className="object-cover object-center"
                sizes="25vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image
                src="/img-1367.jpg"
                alt="Propane heaters, fire rings, and charcoal display at Action Propane, Leander TX"
                fill
                className="object-cover object-center"
                sizes="25vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40">
              <Image
                src="/img-1362.jpg"
                alt="Propane hoses and fittings wall at Action Propane in Leander TX"
                fill
                className="object-cover object-center"
                sizes="25vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40">
              <Image
                src="/img-1363.jpg"
                alt="Propane valves, adapters, and fittings display at Action Propane storefront"
                fill
                className="object-cover object-center"
                sizes="25vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40">
              <Image
                src="/img-1373.jpg"
                alt="Big Green Egg accessories room with hoses, EGG tools, and cookware at Action Propane"
                fill
                className="object-cover object-center"
                sizes="25vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40">
              <Image
                src="/front-of-building.jpg"
                alt="Action Propane Inc exterior — 2601 S Hwy 183, Leander TX"
                fill
                className="object-cover object-center"
                sizes="25vw"
              />
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-3 text-balance">What We Carry In-Store</h2>
            <p className="text-[#64748b] max-w-2xl mx-auto text-sm leading-relaxed">
              Our Leander location stocks propane tanks and cylinders, top-brand grills, outdoor heating equipment, and all the accessories you need. Call ahead to confirm availability on specific items.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {productCategories.map((cat) => (
              <Link key={cat.title} href={cat.href} className="bg-white rounded-xl border border-[#e2e8f0] p-5 hover:border-[#dc2626] hover:shadow-md transition-all group">
                <h3 className="font-bold text-[#1e293b] mb-3 group-hover:text-[#dc2626] transition-colors">{cat.title}</h3>
                <ul className="space-y-1.5 mb-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#64748b]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="text-xs text-[#dc2626] font-medium">Learn more &rarr;</span>
              </Link>
            ))}
          </div>

          {/* Featured product lines */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#0f172a] text-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[#dc2626] text-xs font-semibold uppercase tracking-wide">Featured Grill Brand</p>
                <span className="inline-flex items-center gap-1 bg-white/10 border border-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                  Authorized Dealer
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">Big Green Egg Grills</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Action Propane is an authorized Big Green Egg dealer. The Big Green Egg is the world&apos;s best-selling kamado cooker — capable of grilling, smoking, roasting, and baking in one versatile ceramic cooker.
              </p>
              <Link href="/products/big-green-egg-grills" className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold px-4 py-2.5 rounded transition-colors text-sm">
                View Big Green Egg
              </Link>
            </div>
            <div className="bg-[#1e293b] text-white rounded-xl p-6">
              <p className="text-[#dc2626] text-xs font-semibold uppercase tracking-wide mb-2">Featured Grill Brand</p>
              <h3 className="text-lg font-bold mb-2">Wilmington Grills</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Premium propane and charcoal grills from Wilmington Grills — built for serious outdoor cooking. Available for purchase and propane refill at our Leander location.
              </p>
              <Link href="/products/wilmington-grills" className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold px-4 py-2.5 rounded transition-colors text-sm">
                View Wilmington Grills
              </Link>
            </div>
          </div>

          <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-6 text-center">
            <p className="font-bold text-[#1e293b] mb-2">Not sure what you need?</p>
            <p className="text-[#64748b] text-sm mb-5">Call us and our team will help you find the right tank, grill, or accessory for your setup.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm">
                Call {PHONE}
              </a>
              <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#fecaca] bg-white text-[#dc2626] hover:border-[#dc2626] font-semibold px-5 py-3 rounded transition-colors text-sm">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      <CTABanner heading="Visit Action Propane in Leander, TX" subtext="Stop by our storefront at 2601 S Hwy 183, Leander, TX. Open Monday–Friday 8am–6pm and Saturday 8am–4pm." />
    </>
  )
}
