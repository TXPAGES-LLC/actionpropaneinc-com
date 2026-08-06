import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { CTABanner } from '@/components/CTABanner'
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  MAPS_HREF,
  MAPS_EMBED_SRC,
  ADDRESS,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Propane Services in Austin, TX | Action Propane Inc',
  description:
    'Action Propane, Inc. delivers residential and commercial propane to Austin, TX. Tank installation, system service, and cylinder refills available. Call 512-259-1196.',
  alternates: { canonical: '/delivery-areas/austin' },
  robots: { index: false, follow: true },
  keywords: [
    'propane delivery Austin TX',
    'commercial propane Austin',
    'propane tank installation Austin TX',
    'propane service Austin',
  ],
  openGraph: {
    title: 'Propane Services in Austin, TX | Action Propane Inc',
    description: 'Action Propane, Inc. delivers residential and commercial propane to Austin, TX. Tank installation and system service available. Call 512-259-1196.',
    url: '/delivery-areas/austin',
    type: 'website',
  },
}

const CITY = 'Austin'
const STATE = 'TX'
const CITY_STATE = `${CITY}, ${STATE}`

const services = [
  {
    id: 'residential-delivery',
    label: 'Residential Propane Delivery',
    href: '/services/residential-propane-delivery',
    description:
      'Austin homes outside the natural gas grid — especially properties on large lots, rural tracts, and acreage east or west of the city — rely on propane for heating, cooking, and water heating. We deliver on a schedule that keeps your tank full without you having to watch the gauge.',
  },
  {
    id: 'commercial-delivery',
    label: 'Commercial Propane Delivery',
    href: '/services/commercial-propane-delivery',
    description:
      'From food trucks and restaurants to construction sites and event venues, Austin businesses use propane in more ways than most. Action Propane works with commercial accounts of all sizes to set up reliable delivery schedules and bulk arrangements that minimize interruptions.',
  },
  {
    id: 'tank-installation',
    label: 'Propane Tank Installation',
    href: '/services/propane-tank-installation',
    description:
      'Switching a home or commercial property in Austin to propane — or adding propane service to a new build — starts with the right tank. We handle sizing, permitting, placement, and connection for both above-ground and underground installations.',
  },
  {
    id: 'forklift-exchange',
    label: 'Forklift Cylinder Exchange',
    href: '/services/forklift-propane-cylinder-exchange',
    description:
      'Austin warehouses and distribution facilities use propane-powered forklifts around the clock. We coordinate cylinder exchange programs that keep your equipment running without downtime, servicing standard 33 lb and 43 lb forklift cylinders.',
  },
  {
    id: 'system-service',
    label: 'System Service & Repair',
    href: '/services/propane-system-service-repair',
    description:
      'If a regulator is failing, a line is leaking, or an appliance is not lighting properly, our technicians can diagnose and repair propane systems at Austin properties. We also handle pressure tests and new appliance hookups.',
  },
]

const faqs = [
  {
    q: 'Does Action Propane deliver propane to Austin, TX?',
    a: 'Yes. We serve Austin and the surrounding metro area from our Leander location. Delivery is available to residential homes, commercial properties, and rural addresses. Call 512-259-1196 to confirm service availability for your specific address.',
  },
  {
    q: 'How do I start propane service in Austin?',
    a: 'Call us at 512-259-1196 and we will walk you through the process. If you do not have a tank, we can discuss installation options. If you already have a tank, we can set up a delivery schedule right away.',
  },
  {
    q: 'What types of businesses in Austin use commercial propane delivery?',
    a: 'We serve restaurants, caterers, food trucks, commercial laundries, auto dealerships, warehouses, construction crews, and agricultural operations. If your business uses propane in volume, we can set up a commercial account.',
  },
  {
    q: 'Is there a minimum order for propane delivery to Austin?',
    a: 'Minimums vary based on delivery location and account type. Call us to discuss your usage and we will find a delivery arrangement that makes sense for your household or business.',
  },
  {
    q: 'Do you install new propane tanks at Austin properties?',
    a: 'Yes. We handle the full installation process including tank sizing, site preparation guidance, permitting coordination, and final connection. We offer both above-ground and underground tank options.',
  },
  {
    q: 'How far is Austin from your store in Leander?',
    a: 'Our store at 2601 S Hwy 183 in Leander is approximately 20–30 minutes from central Austin, depending on traffic. We deliver throughout the greater Austin area regularly.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': '/#business',
      name: 'Action Propane, Inc.',
      telephone: '+15122591196',
      email: 'actionpropane@sbcglobal.net',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2601 S Hwy 183',
        addressLocality: 'Leander',
        addressRegion: 'TX',
        postalCode: '78641',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Service',
      name: `Propane Services in ${CITY_STATE}`,
      provider: { '@id': '/#business' },
      areaServed: {
        '@type': 'City',
        name: CITY,
        containedInPlace: { '@type': 'State', name: 'Texas' },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

const CITY_MAP_EMBED = 'https://maps.google.com/maps?q=Austin,TX&output=embed&z=11'

export default function AustinAreasWeServePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow="Areas We Serve"
        title={`Services in ${CITY_STATE}`}
        description={`Action Propane, Inc. delivers propane and provides full-service propane solutions to Austin, TX and the surrounding area. Based in nearby Leander, we serve Austin homes, businesses, and commercial accounts throughout the metro.`}
        ctaLabel="Request Service"
        ctaHref="/contact"
        breadcrumbs={[
          { label: 'Areas We Serve', href: '/areas-we-serve' },
          { label: CITY_STATE, href: '/areas-we-serve/austin' },
        ]}
      />

      {/* Local intro */}
      <section className="bg-white border-b border-[#e2e8f0]" aria-labelledby="austin-intro">
        <div className="max-w-5xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 id="austin-intro" className="text-2xl font-bold text-[#1e293b] mb-4">
              Propane Delivery and Service for {CITY_STATE}
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              Austin is a large, sprawling city — and not every property has access to natural gas.
              Rural and semi-rural addresses on the outskirts of the city, properties with older
              infrastructure, and homes on large lots often depend on propane for heating, cooking,
              water heating, and backup power.
            </p>
            <p className="text-[#334155] leading-relaxed mb-4">
              Action Propane, Inc. has been serving Central Texas for over 30 years. Our Leander
              location puts us close enough to Austin to offer reliable delivery times without the
              overhead of a large urban operation. You get the service of a local company that
              actually knows the area.
            </p>
            <p className="text-[#334155] leading-relaxed mb-6">
              Whether you need a single delivery, a new tank installed, or a commercial account
              set up for a business location, we handle it directly — no call centers, no runaround.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm"
                aria-label={`Call Action Propane at ${PHONE}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Call {PHONE}
              </a>
              <a
                href={EMAIL_HREF}
                className="inline-flex items-center gap-2 border border-[#e2e8f0] hover:border-[#dc2626] text-[#1e293b] hover:text-[#dc2626] font-semibold px-5 py-3 rounded transition-colors text-sm"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl overflow-hidden border border-[#e2e8f0] shadow-sm">
              <iframe
                src={MAPS_EMBED_SRC}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Action Propane, Inc. — Leander, TX on Google Maps"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[#e2e8f0] shadow-sm">
              <iframe
                src={CITY_MAP_EMBED}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Austin, TX city map"
              />
            </div>
            <p className="text-xs text-[#64748b] text-center">
              <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2626] transition-colors">
                {ADDRESS}
              </a>
              {' '}&mdash;{' '}
              <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2626] transition-colors">
                Get Directions
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f8fafc] py-14" aria-labelledby="services-heading">
        <div className="max-w-5xl mx-auto px-4">
          <header className="mb-10">
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
            <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[#1e293b] text-balance">
              Propane Services Available in {CITY_STATE}
            </h2>
          </header>
          <div className="space-y-8">
            {services.map((svc, i) => (
              <article key={svc.id} className="bg-white rounded-xl border border-[#e2e8f0] p-6 md:p-8" aria-labelledby={`svc-${svc.id}`}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fef2f2] flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                    <span className="text-[#dc2626] font-bold text-sm">{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 id={`svc-${svc.id}`} className="text-lg font-bold text-[#1e293b] mb-2">
                      {svc.label} in {CITY_STATE}
                    </h3>
                    <p className="text-[#334155] leading-relaxed text-sm mb-4">{svc.description}</p>
                    <Link href={svc.href} className="inline-flex items-center gap-1.5 text-sm text-[#dc2626] font-semibold hover:underline">
                      Learn more about {svc.label}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-[#0f172a] text-white py-10" aria-label="Contact prompt">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold mb-1">Ready to get started in {CITY_STATE}?</p>
            <p className="text-white/60 text-sm">Call us or send a message — we will confirm service availability and get you set up.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm whitespace-nowrap">
              Call {PHONE}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-5 py-3 rounded transition-colors text-sm whitespace-nowrap">
              Request Service
            </Link>
          </div>
        </div>
      </section>

      {/* Info grid */}
      <section className="bg-white border-b border-[#e2e8f0] py-12" aria-labelledby="info-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="info-heading" className="sr-only">Store information</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#64748b] mb-4">Store Hours</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-[#64748b]">Mon – Fri</dt><dd className="font-semibold text-[#1e293b]">8am – 6pm</dd></div>
                <div className="flex justify-between"><dt className="text-[#64748b]">Saturday</dt><dd className="font-semibold text-[#1e293b]">8am – 4pm</dd></div>
                <div className="flex justify-between"><dt className="text-[#64748b]">Sunday</dt><dd className="text-[#94a3b8]">Closed</dd></div>
              </dl>
            </div>
            <div className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#64748b] mb-4">Our Location</h3>
              <address className="not-italic text-sm text-[#1e293b] space-y-1.5">
                <p className="font-semibold">Action Propane, Inc.</p>
                <p className="text-[#64748b]">
                  <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2626] transition-colors">{ADDRESS}</a>
                </p>
                <p><a href={PHONE_HREF} className="text-[#dc2626] font-medium">{PHONE}</a></p>
                <p><a href={EMAIL_HREF} className="text-[#dc2626] hover:underline text-xs break-all">{EMAIL}</a></p>
              </address>
            </div>
            <div className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#64748b] mb-4">Service Area</h3>
              <p className="text-sm text-[#334155] leading-relaxed mb-3">
                We serve Austin and the surrounding metro including Cedar Park, Leander, Round Rock, Pflugerville, and beyond.
              </p>
              <Link href="/delivery-areas" className="text-sm text-[#dc2626] font-semibold hover:underline inline-flex items-center gap-1">
                View all delivery areas
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8fafc] py-14" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4">
          <header className="mb-8 text-center">
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">Common Questions</p>
            <h2 id="faq-heading" className="text-2xl font-bold text-[#1e293b] text-balance">
              Frequently Asked Questions — Propane Service in {CITY_STATE}
            </h2>
          </header>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#e2e8f0] p-6">
                <h3 className="font-semibold text-[#1e293b] mb-2 leading-snug">{faq.q}</h3>
                <p className="text-[#334155] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-[#64748b]">
            Have a question not listed here?{' '}
            <a href={PHONE_HREF} className="text-[#dc2626] font-semibold hover:underline">Call us at {PHONE}</a>{' '}
            or{' '}
            <Link href="/contact" className="text-[#dc2626] font-semibold hover:underline">send us a message</Link>.
          </p>
        </div>
      </section>

      {/* Nearby cities */}
      <section className="bg-white border-t border-[#e2e8f0] py-10" aria-labelledby="nearby-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="nearby-heading" className="text-sm font-semibold uppercase tracking-wide text-[#64748b] mb-4">
            We Also Serve Nearby Communities
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Leander, TX', href: '/areas-we-serve/leander' },
              { label: 'Cedar Park, TX', href: '/areas-we-serve/cedar-park' },
              { label: 'Round Rock, TX', href: '/areas-we-serve/round-rock' },
              { label: 'Georgetown, TX', href: '/areas-we-serve/georgetown' },
              { label: 'Pflugerville, TX', href: '/areas-we-serve/pflugerville' },
              { label: 'Hutto, TX', href: '/areas-we-serve/hutto' },
            ].map((city) => (
              <Link key={city.href} href={city.href} className="bg-[#f8fafc] border border-[#e2e8f0] text-[#334155] hover:border-[#dc2626] hover:text-[#dc2626] text-sm px-4 py-2 rounded-lg transition-colors">
                {city.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Propane Delivery to ${CITY_STATE}`}
        subtext="Action Propane, Inc. has served Central Texas for over 30 years. Call us to confirm service availability for your Austin address."
      />
    </>
  )
}
