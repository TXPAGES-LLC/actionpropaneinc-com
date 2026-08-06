import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CTABanner } from '@/components/CTABanner'
import {
  PHONE,
  PHONE_HREF,
  DELIVERY_CITIES,
  SERVICES_NAV,
  MAPS_HREF,
  ADDRESS,
} from '@/lib/constants'

interface Props {
  params: Promise<{ city: string }>
}

const cityDetails: Record<
  string,
  { region: string; description: string; services: string[] }
> = {
  leander: {
    region: 'Williamson County',
    description:
      'Leander is our home base. Our storefront at 2601 S Hwy 183 serves the entire Leander community with walk-in cylinder refills, tank sales, grills, and both scheduled and on-demand propane delivery.',
    services: [
      'Residential propane delivery',
      'Commercial propane delivery',
      'Walk-in cylinder & RV refill station',
      'Propane tank installation',
      'Forklift cylinder exchange',
      'System service & repair',
    ],
  },
  austin: {
    region: 'Travis County',
    description:
      'Action Propane delivers residential and commercial propane throughout the Austin metro area. Whether you live in North Austin, Northwest Austin, or outlying communities, call us to confirm your address is in our delivery zone.',
    services: [
      'Residential propane delivery',
      'Commercial propane delivery',
      'Propane tank installation',
      'System service & repair',
    ],
  },
  'cedar-park': {
    region: 'Williamson County',
    description:
      'Cedar Park is a core part of our Central Texas service area. We deliver to homes and businesses throughout Cedar Park and can install new propane tanks for customers converting to propane.',
    services: [
      'Residential propane delivery',
      'Commercial propane delivery',
      'Propane tank installation',
    ],
  },
  georgetown: {
    region: 'Williamson County',
    description:
      'Georgetown's fast-growing residential base means more Central Texas homeowners are choosing propane for heating, cooking, and standby power. Action Propane serves Georgetown with reliable scheduled delivery.',
    services: ['Residential propane delivery', 'Commercial propane delivery'],
  },
  'round-rock': {
    region: 'Williamson County',
    description:
      'Round Rock customers rely on Action Propane for residential and commercial propane service. Call to confirm your address and schedule your first delivery or request a quote.',
    services: ['Residential propane delivery', 'Commercial propane delivery'],
  },
  'liberty-hill': {
    region: 'Williamson County',
    description:
      'Liberty Hill's rural and suburban mix is a natural fit for propane. Action Propane delivers to homes on acreage and in subdivisions throughout the Liberty Hill area and can install new tanks for new construction.',
    services: ['Residential propane delivery', 'Propane tank installation'],
  },
  burnet: {
    region: 'Burnet County',
    description:
      'Action Propane serves Burnet and the surrounding Hill Country with residential delivery and agricultural propane service. We understand the needs of rural customers who rely on propane as their primary energy source.',
    services: ['Residential propane delivery', 'Agricultural propane service'],
  },
  'marble-falls': {
    region: 'Burnet County',
    description:
      'Marble Falls lakefront properties, ranch homes, and vacation cabins all benefit from reliable propane delivery. Action Propane serves the Marble Falls area with both scheduled delivery and new tank installation.',
    services: ['Residential propane delivery', 'Propane tank installation'],
  },
  pflugerville: {
    region: 'Travis County',
    description:
      'Pflugerville residential and commercial customers can schedule propane delivery with Action Propane. We serve this growing community and can accommodate regular auto-fill or will-call schedules.',
    services: ['Residential propane delivery', 'Commercial propane delivery'],
  },
  hutto: {
    region: 'Williamson County',
    description:
      'Hutto is within our Central Texas delivery zone. Residential customers can schedule propane delivery for home heating, cooking, water heating, and more. Call to confirm your address.',
    services: ['Residential propane delivery'],
  },
  taylor: {
    region: 'Williamson County',
    description:
      'Action Propane delivers propane to Taylor area residential customers. Taylor's rural and semi-rural properties are well-suited to propane as a primary or supplemental energy source.',
    services: ['Residential propane delivery'],
  },
  bertram: {
    region: 'Burnet County',
    description:
      'Bertram and the surrounding rural Burnet County area are served by Action Propane for residential and agricultural propane delivery. We understand the unique demands of rural customers who depend on propane year-round.',
    services: ['Residential propane delivery', 'Agricultural propane service'],
  },
  lakeway: {
    region: 'Travis County',
    description:
      'Lakeway's lakefront homes, gated communities, and resort properties rely on propane for heating, outdoor kitchens, pool heaters, and whole-home backup generators. Action Propane delivers to Lakeway and can install new tanks for homes switching to propane.',
    services: ['Residential propane delivery', 'Propane tank installation', 'System service & repair'],
  },
  westlake: {
    region: 'Travis County',
    description:
      'Westlake Hills and the surrounding area feature large custom homes that benefit from on-site propane storage. Action Propane serves West Austin residential customers with scheduled delivery and new tank installation.',
    services: ['Residential propane delivery', 'Propane tank installation', 'System service & repair'],
  },
  'barton-creek': {
    region: 'Travis County',
    description:
      'Barton Creek's hillside estates and resort communities often sit off the natural gas grid, making propane the go-to energy source. Action Propane delivers to Barton Creek area homes and can size and install tanks for new construction or conversions.',
    services: ['Residential propane delivery', 'Propane tank installation'],
  },
  'bee-cave': {
    region: 'Travis County',
    description:
      'Bee Cave is a rapidly growing western Austin suburb where many homes and businesses rely on propane for cooking, heating, and outdoor living. Action Propane provides scheduled residential and commercial delivery to the Bee Cave area.',
    services: ['Residential propane delivery', 'Commercial propane delivery', 'Propane tank installation'],
  },
  'dripping-springs': {
    region: 'Hays County',
    description:
      'Dripping Springs sits at the gateway to the Hill Country, with large rural lots and acreage properties that depend on propane as a primary fuel. Action Propane delivers to Dripping Springs and serves both established homesteads and new-construction builds.',
    services: ['Residential propane delivery', 'Propane tank installation', 'Agricultural propane service'],
  },
  driftwood: {
    region: 'Hays County',
    description:
      'Driftwood's scenic ranch properties and rural homesteads are a natural fit for propane. Action Propane delivers to the Driftwood area and can supply propane for home heating, cooking, pool heaters, and agricultural use.',
    services: ['Residential propane delivery', 'Propane tank installation', 'Agricultural propane service'],
  },
  'hamilton-pool': {
    region: 'Travis County',
    description:
      'The Hamilton Pool area — including rural properties along Hamilton Pool Road — relies heavily on propane as the primary energy source. Action Propane serves these off-grid and semi-rural customers with reliable scheduled delivery.',
    services: ['Residential propane delivery', 'Propane tank installation'],
  },
  jonestown: {
    region: 'Travis County',
    description:
      'Jonestown sits on the north shore of Lake Travis and is home to lakefront properties, rural homes, and vacation residences that use propane for heating, cooking, water heating, and outdoor entertaining. Action Propane delivers to the Jonestown area.',
    services: ['Residential propane delivery', 'Propane tank installation'],
  },
  'lago-vista': {
    region: 'Travis County',
    description:
      'Lago Vista stretches along Lake Travis's north shore and features many homes that are off the natural gas grid. Propane is the preferred fuel for heating, cooking, and water heating in this lakeside community. Action Propane serves Lago Vista with dependable scheduled delivery.',
    services: ['Residential propane delivery', 'Propane tank installation'],
  },
  briarcliff: {
    region: 'Travis County',
    description:
      'Briarcliff is a small community on the north shore of Lake Travis where many properties rely on propane as their primary energy source. Action Propane delivers to Briarcliff and surrounding Lake Travis communities year-round.',
    services: ['Residential propane delivery', 'Propane tank installation'],
  },
  'sun-city': {
    region: 'Williamson County',
    description:
      'Sun City Georgetown is an active-adult community with a large number of homes that use propane for cooking, heating, and whole-home backup systems. Action Propane serves Sun City residents and can coordinate with community HOA guidelines for tank placement.',
    services: ['Residential propane delivery', 'Propane tank installation', 'System service & repair'],
  },
  'horseshoe-bay': {
    region: 'Llano / Burnet County',
    description:
      'Horseshoe Bay is a resort and retirement community on Lake LBJ with high-end lakefront homes that depend on propane for whole-home heating, outdoor kitchens, and pool/spa systems. Action Propane delivers to Horseshoe Bay and the surrounding Lake LBJ area.',
    services: ['Residential propane delivery', 'Propane tank installation', 'System service & repair'],
  },
  spicewood: {
    region: 'Burnet County',
    description:
      'Spicewood's rural properties, wineries, and lakefront homes along Lake Travis and the Colorado River benefit from reliable propane service. Action Propane delivers to Spicewood and can install tanks for new construction and property conversions.',
    services: ['Residential propane delivery', 'Propane tank installation', 'Agricultural propane service'],
  },
}

export async function generateStaticParams() {
  return DELIVERY_CITIES.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const match = DELIVERY_CITIES.find((c) => c.slug === city)
  if (!match) return { title: 'Area Not Found' }

  const detail = cityDetails[city]
  return {
    title: `Propane Delivery in ${match.name}, TX | Action Propane Inc`,
    description: `Reliable propane delivery and service in ${match.name}, TX by Action Propane, Inc. — Central Texas' trusted family-owned propane company. Call 512-259-1196.`,
    alternates: {
      canonical: `/delivery-areas/${city}`,
    },
    openGraph: {
      title: `Propane Delivery in ${match.name}, TX | Action Propane Inc`,
      description: `Action Propane, Inc. delivers propane to homes and businesses in ${match.name}, TX. Family-owned since 1984. Call 512-259-1196 to schedule.`,
      url: `/delivery-areas/${city}`,
      type: 'website',
    },
  }
}

export default async function CityDeliveryPage({ params }: Props) {
  const { city } = await params
  const match = DELIVERY_CITIES.find((c) => c.slug === city)
  if (!match) notFound()

  const detail = cityDetails[city] ?? {
    region: 'Central Texas',
    description: `Action Propane, Inc. delivers propane to residential and commercial customers in ${match.name}, TX. Call us to confirm your address and schedule delivery.`,
    services: ['Residential propane delivery'],
  }

  // Schema.org ServiceArea
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Propane Delivery in ${match.name}, TX`,
    provider: { '@id': '/#business' },
    areaServed: {
      '@type': 'City',
      name: match.name,
      containedInPlace: { '@type': 'State', name: 'Texas' },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-[#0f172a] text-white py-12 md:py-16" aria-labelledby="city-heading">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span aria-hidden="true">/</span>
                <Link href="/delivery-areas" className="hover:text-white transition-colors">Delivery Areas</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span aria-hidden="true">/</span>
                <span className="text-white/80" aria-current="page">{match.name}, TX</span>
              </li>
            </ol>
          </nav>

          <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">
            {detail.region}
          </p>
          <h1 id="city-heading" className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Propane Delivery in {match.name}, TX
          </h1>
          <p className="text-white/70 text-base max-w-2xl leading-relaxed mb-6">
            {detail.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm"
              aria-label={`Call Action Propane at ${PHONE}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-5 py-3 rounded transition-colors text-sm"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-[#f8fafc] py-12">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-[1fr_300px] gap-10 items-start">

          {/* Main content */}
          <div className="space-y-10">
            {/* Services in this city */}
            <section aria-labelledby="city-services">
              <h2 id="city-services" className="text-2xl font-bold text-[#1e293b] mb-4">
                Propane Services Available in {match.name}, TX
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {detail.services.map((svc) => {
                  const navItem = SERVICES_NAV.find((s) =>
                    s.label.toLowerCase().includes(svc.toLowerCase().split(' ').slice(-1)[0])
                  )
                  const content = (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="#dc2626" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm font-medium text-[#1e293b]">{svc}</span>
                    </>
                  )
                  return navItem ? (
                    <Link
                      key={svc}
                      href={navItem.href}
                      className="flex items-center gap-3 bg-white rounded-lg border border-[#e2e8f0] px-4 py-3.5 hover:border-[#dc2626] transition-colors"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div
                      key={svc}
                      className="flex items-center gap-3 bg-white rounded-lg border border-[#e2e8f0] px-4 py-3.5"
                    >
                      {content}
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Why propane */}
            <section aria-labelledby="why-propane-city">
              <h2 id="why-propane-city" className="text-xl font-bold text-[#1e293b] mb-4">
                Why {match.name} Residents & Businesses Choose Propane
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Reliable Energy Source', body: 'Propane is stored on-site in your tank, so you have fuel even when the grid goes down or delivery windows are long.' },
                  { title: 'Versatile Applications', body: 'One fuel for home heating, water heating, cooking, clothes drying, pool heaters, fireplaces, and standby generators.' },
                  { title: 'Clean-Burning Fuel', body: 'Propane burns cleanly and produces far fewer emissions than diesel, oil, or other fossil fuels.' },
                  { title: 'Cost-Competitive', body: 'Propane often provides a lower cost per BTU than electricity, especially for high-demand heating applications.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-[#e2e8f0] p-5">
                    <h3 className="font-semibold text-[#1e293b] mb-1.5 text-sm">{item.title}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Nearby cities */}
            <section aria-labelledby="nearby-cities">
              <h2 id="nearby-cities" className="text-lg font-bold text-[#1e293b] mb-3">
                Other Delivery Areas Near {match.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {DELIVERY_CITIES.filter((c) => c.slug !== city)
                  .slice(0, 8)
                  .map((c) => (
                    <Link
                      key={c.slug}
              href={`/delivery-areas/${c.slug}`}
                    className="bg-white border border-[#e2e8f0] hover:border-[#dc2626] hover:text-[#dc2626] text-[#1e293b] text-sm font-medium px-3.5 py-2 rounded-lg transition-colors"
                    >
                      {c.name}, TX
                    </Link>
                  ))}
                <Link
                  href="/delivery-areas"
                      className="bg-[#fef2f2] border border-[#fecaca] text-[#dc2626] text-sm font-medium px-3.5 py-2 rounded-lg hover:bg-[#fecaca] transition-colors"
                >
                  View all areas
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 sticky top-24">
            <div className="bg-[#0f172a] text-white rounded-xl p-5">
              <p className="text-sm font-semibold text-[#dc2626] uppercase tracking-wide mb-2">
                Schedule Delivery in {match.name}
              </p>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                Call Action Propane, Inc. to set up your first delivery, discuss tank options, or confirm service availability at your address.
              </p>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-4 py-3 rounded transition-colors text-sm w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Call {PHONE}
              </a>
              <Link
                href="/contact"
                className="mt-2 flex items-center justify-center border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-4 py-2.5 rounded transition-colors text-sm w-full"
              >
                Request Service
              </Link>
            </div>

            <div className="bg-[#fef2f2] rounded-xl border border-[#fecaca] p-5">
              <p className="text-sm font-semibold text-[#b91c1c] uppercase tracking-wide mb-3">
                Store Hours
              </p>
              <dl className="text-sm space-y-1.5 text-[#1e293b]">
                <div className="flex justify-between"><dt className="text-[#64748b]">Mon – Fri</dt><dd className="font-medium">8am – 6pm</dd></div>
                <div className="flex justify-between"><dt className="text-[#64748b]">Saturday</dt><dd className="font-medium">8am – 4pm</dd></div>
                <div className="flex justify-between"><dt className="text-[#64748b]">Sunday</dt><dd className="text-[#94a3b8]">Closed</dd></div>
              </dl>
              <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="block text-xs text-[#64748b] hover:text-[#dc2626] mt-3 transition-colors">
                {ADDRESS}
              </a>
            </div>

            <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b] mb-3">Our Services</p>
              <ul className="space-y-1.5 text-sm">
                {SERVICES_NAV.map((svc) => (
                  <li key={svc.href}>
                    <Link
                      href={svc.href}
                      className="flex items-center gap-2 text-[#1e293b] hover:text-[#dc2626] transition-colors py-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                      </svg>
                      {svc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <CTABanner
        heading={`Propane Delivery in ${match.name}, TX`}
        subtext={`Action Propane, Inc. has been serving Central Texas since 1984. Call to schedule delivery or confirm service availability in ${match.name}.`}
      />
    </>
  )
}
