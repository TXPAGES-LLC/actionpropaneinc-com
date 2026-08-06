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
  DELIVERY_CITIES,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Propane Services in Leander, TX | Action Propane Inc',
  description:
    'Action Propane, Inc. offers residential delivery, commercial delivery, tank installation, cylinder refills, forklift exchange, and system service in Leander, TX. Call 512-259-1196.',
  alternates: {
    canonical: '/delivery-areas/leander',
  },
  robots: { index: false, follow: true },
  keywords: [
    'propane delivery Leander TX',
    'propane tank installation Leander',
    'cylinder refill Leander TX',
    'commercial propane Leander',
    'propane service Leander TX',
  ],
  openGraph: {
    title: 'Propane Services in Leander, TX | Action Propane Inc',
    description: 'Action Propane, Inc. — your Leander, TX home-base propane company. Residential delivery, commercial delivery, walk-in cylinder refills, tank installation, and more. Call 512-259-1196.',
    url: '/delivery-areas/leander',
    type: 'website',
  },
}

const CITY = 'Leander'
const STATE = 'TX'
const CITY_STATE = `${CITY}, ${STATE}`

const services = [
  {
    id: 'residential-delivery',
    label: 'Residential Propane Delivery',
    href: '/services/residential-propane-delivery',
    description:
      'We deliver propane directly to homes throughout Leander on a schedule that fits your household. Whether you heat with propane, cook with it, or use it for a whole-home generator, we keep your tank filled before you run low. Auto-fill and will-call schedules are both available.',
  },
  {
    id: 'commercial-delivery',
    label: 'Commercial Propane Delivery',
    href: '/services/commercial-propane-delivery',
    description:
      'Leander businesses — from restaurants and construction sites to warehouses and agricultural operations — rely on Action Propane for dependable commercial delivery. We work around your schedule to minimize downtime and keep your operation running.',
  },
  {
    id: 'cylinder-rv-refill',
    label: 'Cylinder & RV Refill Station',
    href: '/services/propane-cylinder-rv-refill-station',
    description:
      'Our walk-in refill station at 2601 S Hwy 183 serves Leander residents and travelers who need to fill DOT cylinders, BBQ tanks, or RV propane systems. No appointment needed — pull in during store hours and we will fill your container on the spot.',
  },
  {
    id: 'tank-installation',
    label: 'Propane Tank Installation',
    href: '/services/propane-tank-installation',
    description:
      'Converting a home or new-construction property in Leander to propane? We handle permitting, placement, and connection for both above-ground and underground propane tanks. Our team sizes the tank to your usage and ensures everything meets local code.',
  },
  {
    id: 'forklift-exchange',
    label: 'Forklift Cylinder Exchange',
    href: '/services/forklift-propane-cylinder-exchange',
    description:
      'Leander warehouses, distribution centers, and manufacturing facilities can exchange depleted forklift cylinders for full ones with minimal interruption. We service standard 33 lb and 43 lb forklift cylinders and can coordinate regular exchange schedules.',
  },
  {
    id: 'system-service',
    label: 'System Service & Repair',
    href: '/services/propane-system-service-repair',
    description:
      'From pressure regulators and gas lines to appliance hookups and leak checks, our technicians service propane systems at Leander homes and businesses. If something is not working right, call us before it becomes a bigger problem.',
  },
]

const faqs = [
  {
    q: 'Does Action Propane deliver to all parts of Leander, TX?',
    a: 'Yes. Leander is our home base — our storefront is located at 2601 S Hwy 183 in Leander, and we deliver throughout the entire city including newer subdivisions, rural acreage, and commercial properties. Call us to confirm your address and set up service.',
  },
  {
    q: 'How do I set up propane delivery in Leander for the first time?',
    a: 'Call us at 512-259-1196 or email actionpropane@sbcglobal.net. We will confirm your address, discuss whether you need a new tank installed or already have one, and schedule your first delivery. The process is straightforward and typically takes just one call.',
  },
  {
    q: 'Can I walk in to refill my propane cylinder without an appointment?',
    a: 'Yes. Our refill station at 2601 S Hwy 183 is open Monday through Friday 8am–6pm and Saturday 8am–4pm. Bring any standard DOT cylinder, BBQ tank, or RV fill and we will take care of it while you wait.',
  },
  {
    q: 'What size propane tank do I need for my Leander home?',
    a: 'It depends on what appliances you are running. A typical Central Texas home using propane for heating, water, and cooking usually needs a 250- to 500-gallon tank. We will assess your usage and recommend the right size — including whether above-ground or underground fits your property better.',
  },
  {
    q: 'Do you service propane systems as well as deliver fuel?',
    a: 'Yes. Action Propane handles both fuel delivery and system maintenance. If your regulator needs replacing, you have a suspected leak, or you want a new appliance connected to your existing system, give us a call.',
  },
  {
    q: 'How far in advance should I schedule a delivery?',
    a: 'We recommend calling when your tank reaches 20–25% capacity so you have a comfortable buffer. For new customers setting up service, call at least a few days ahead to allow time for account setup and scheduling.',
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
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Propane Services in ${CITY_STATE}`,
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.label },
        })),
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

// Leander city center coordinates for iframe
const LEANDER_MAP_EMBED =
  `https://maps.google.com/maps?q=Leander,TX&output=embed&z=13`

export default function LeanderAreasWeServePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow="Areas We Serve"
        title={`Services in ${CITY_STATE}`}
        description={`Action Propane, Inc. has served Leander and the surrounding Central Texas area for over 30 years. Our storefront is right here in Leander — making us the local choice for propane delivery, tank installation, cylinder refills, and system service.`}
        ctaLabel="Request Service"
        ctaHref="/contact"
        breadcrumbs={[
          { label: 'Areas We Serve', href: '/areas-we-serve' },
          { label: `${CITY_STATE}`, href: `/areas-we-serve/leander` },
        ]}
      />

      {/* Local intro */}
      <section className="bg-white border-b border-[#e2e8f0]" aria-labelledby="leander-intro">
        <div className="max-w-5xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 id="leander-intro" className="text-2xl font-bold text-[#1e293b] mb-4">
              Your Local Propane Company in {CITY_STATE}
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              Action Propane, Inc. is not just a company that delivers to Leander — we are based here.
              Our store at 2601 S Hwy 183 has been a fixture in the community for decades, serving
              homeowners, ranchers, contractors, and businesses across Williamson County.
            </p>
            <p className="text-[#334155] leading-relaxed mb-4">
              Leander&apos;s growth means more homes, more businesses, and more properties that depend on
              propane for heating, cooking, backup power, and commercial operations. We have grown
              alongside the community and understand the local needs — whether you are in an older rural
              property on acreage or a newer subdivision where propane is the only gas option.
            </p>
            <p className="text-[#334155] leading-relaxed mb-6">
              We offer the full range of propane services from one place: fuel delivery, tank sales and
              installation, walk-in cylinder refills, forklift cylinder exchange, and system service and
              repair. No need to call multiple companies.
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

          {/* GBP + city center iframe */}
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
                src={LEANDER_MAP_EMBED}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Leander, TX city center map"
              />
            </div>
            <p className="text-xs text-[#64748b] text-center">
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dc2626] transition-colors"
              >
                {ADDRESS}
              </a>
              {' '}&mdash;{' '}
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dc2626] transition-colors"
              >
                Get Directions
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="bg-[#f8fafc] py-14" aria-labelledby="services-heading">
        <div className="max-w-5xl mx-auto px-4">
          <header className="mb-10">
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[#1e293b] text-balance">
              Propane Services Available in {CITY_STATE}
            </h2>
          </header>

          <div className="space-y-8">
            {services.map((svc, i) => (
              <article
                key={svc.id}
                className="bg-white rounded-xl border border-[#e2e8f0] p-6 md:p-8"
                aria-labelledby={`svc-${svc.id}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fef2f2] flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                    <span className="text-[#dc2626] font-bold text-sm">{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 id={`svc-${svc.id}`} className="text-lg font-bold text-[#1e293b] mb-2">
                      {svc.label} in {CITY_STATE}
                    </h3>
                    <p className="text-[#334155] leading-relaxed text-sm mb-4">
                      {svc.description}
                    </p>
                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-1.5 text-sm text-[#dc2626] font-semibold hover:underline"
                    >
                      Learn more about {svc.label}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                      </svg>
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
            <p className="text-white/60 text-sm">
              Call us or stop by our store on S Hwy 183 — no appointment needed for walk-in refills.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm whitespace-nowrap"
            >
              Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-5 py-3 rounded transition-colors text-sm whitespace-nowrap"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>

      {/* Hours + quick facts */}
      <section className="bg-white border-b border-[#e2e8f0] py-12" aria-labelledby="info-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="info-heading" className="sr-only">Store information for Leander, TX</h2>
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
                  <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2626] transition-colors">
                    {ADDRESS}
                  </a>
                </p>
                <p>
                  <a href={PHONE_HREF} className="text-[#dc2626] font-medium">{PHONE}</a>
                </p>
                <p>
                  <a href={EMAIL_HREF} className="text-[#dc2626] hover:underline text-xs break-all">{EMAIL}</a>
                </p>
              </address>
            </div>
            <div className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#64748b] mb-4">Service Area</h3>
              <p className="text-sm text-[#334155] leading-relaxed mb-3">
                We serve Leander and surrounding Williamson County communities including Cedar Park, Liberty Hill, Georgetown, and beyond.
              </p>
              <Link
                href="/delivery-areas"
                className="text-sm text-[#dc2626] font-semibold hover:underline inline-flex items-center gap-1"
              >
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
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">
              Common Questions
            </p>
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
            <a href={PHONE_HREF} className="text-[#dc2626] font-semibold hover:underline">
              Call us at {PHONE}
            </a>{' '}
            or{' '}
            <Link href="/contact" className="text-[#dc2626] font-semibold hover:underline">
              send us a message
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Nearby cities */}
      <section className="bg-white border-t border-[#e2e8f0] py-10" aria-labelledby="nearby-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="nearby-heading" className="text-base font-semibold text-[#1e293b] mb-4">
            Other Communities We Serve
          </h2>
          <div className="flex flex-wrap gap-2">
            {DELIVERY_CITIES.filter((c) => c.slug !== 'leander').map((city) => (
              <Link
                key={city.slug}
                href={`/areas-we-serve/${city.slug}`}
                className="bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#dc2626] hover:text-[#dc2626] text-[#1e293b] text-sm font-medium px-3.5 py-2 rounded-lg transition-colors"
              >
                {city.name}, TX
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Propane Delivery & Service in ${CITY_STATE}`}
        subtext="Action Propane, Inc. has been the trusted local propane company in Leander for over 30 years. Call today to set up delivery, install a tank, or schedule service."
      />
    </>
  )
}
