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
  title: 'Propane Services in Cedar Park, TX | Action Propane Inc',
  description:
    'Action Propane, Inc. provides propane delivery, tank installation, and system service to Cedar Park, TX. Call 512-259-1196 to set up residential or commercial service.',
  alternates: { canonical: '/delivery-areas/cedar-park' },
  robots: { index: false, follow: true },
  keywords: [
    'propane delivery Cedar Park TX',
    'propane tank installation Cedar Park',
    'commercial propane Cedar Park TX',
    'propane service Cedar Park',
  ],
  openGraph: {
    title: 'Propane Services in Cedar Park, TX | Action Propane Inc',
    description: 'Action Propane, Inc. delivers propane to Cedar Park, TX homes and businesses. Tank installation and system service also available. Call 512-259-1196.',
    url: '/delivery-areas/cedar-park',
    type: 'website',
  },
}

const CITY = 'Cedar Park'
const STATE = 'TX'
const CITY_STATE = `${CITY}, ${STATE}`

const services = [
  {
    id: 'residential-delivery',
    label: 'Residential Propane Delivery',
    href: '/services/residential-propane-delivery',
    description:
      'Cedar Park has grown quickly, and many homes — especially those on larger lots near the edges of the city — use propane where natural gas is not available. We deliver to Cedar Park residences on flexible schedules, including automatic fill options so you never run low unexpectedly.',
  },
  {
    id: 'commercial-delivery',
    label: 'Commercial Propane Delivery',
    href: '/services/commercial-propane-delivery',
    description:
      'Cedar Park businesses that rely on propane for cooking equipment, space heating, or process heat get consistent delivery from Action Propane. We set up commercial accounts with scheduled deliveries tailored to your business cycle and volume needs.',
  },
  {
    id: 'tank-installation',
    label: 'Propane Tank Installation',
    href: '/services/propane-tank-installation',
    description:
      'New construction is booming in Cedar Park, and many new homes are being built with propane systems. We install above-ground and underground tanks for new builds and existing properties, handling sizing, permitting, and connection from start to finish.',
  },
  {
    id: 'forklift-exchange',
    label: 'Forklift Cylinder Exchange',
    href: '/services/forklift-propane-cylinder-exchange',
    description:
      'Warehouses and light industrial businesses in the Cedar Park area can set up forklift cylinder exchange programs with Action Propane. We service standard forklift cylinder sizes and can schedule regular swaps so your equipment stays running.',
  },
  {
    id: 'system-service',
    label: 'System Service & Repair',
    href: '/services/propane-system-service-repair',
    description:
      'When something is not working right with a propane appliance, regulator, or line at your Cedar Park home or business, our technicians can diagnose and fix the issue. We also perform pressure tests and connect new appliances to existing systems.',
  },
]

const faqs = [
  {
    q: 'Does Action Propane deliver to Cedar Park, TX?',
    a: 'Yes. Cedar Park is within our regular delivery area. We serve both residential and commercial customers throughout the city. Call 512-259-1196 to set up service and confirm availability for your address.',
  },
  {
    q: 'How close is your store to Cedar Park?',
    a: 'Our store at 2601 S Hwy 183 in Leander is directly adjacent to Cedar Park. The drive is typically under 10 minutes, which means fast response times for deliveries and service calls.',
  },
  {
    q: 'Can you install a propane tank at a new home in Cedar Park?',
    a: 'Yes. We regularly install tanks for new construction in Cedar Park and surrounding areas. Call us early in the build process so we can coordinate tank sizing, placement, and scheduling with your contractor.',
  },
  {
    q: 'What is the difference between automatic delivery and will-call?',
    a: 'With automatic delivery, we monitor your usage and schedule deliveries before your tank runs low. With will-call, you monitor your gauge and contact us when you are ready. Both options are available to Cedar Park customers.',
  },
  {
    q: 'Do you service propane systems at Cedar Park homes?',
    a: 'Yes. Our technicians service regulators, gas lines, appliance connections, and other propane system components at Cedar Park properties. If you smell gas or suspect a leak, call us immediately.',
  },
  {
    q: 'How do I know what size propane tank I need?',
    a: 'Tank sizing depends on how many appliances you are running and how much of the year you rely on propane. We will assess your setup during the initial call or site visit and recommend the appropriate tank size.',
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

const CITY_MAP_EMBED = 'https://maps.google.com/maps?q=Cedar+Park,TX&output=embed&z=13'

export default function CedarParkAreasWeServePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero
        eyebrow="Areas We Serve"
        title={`Services in ${CITY_STATE}`}
        description={`Action Propane, Inc. is the local propane company for Cedar Park, TX. Our store on S Hwy 183 in Leander sits right on the Cedar Park border, making us the closest full-service propane provider in the area.`}
        ctaLabel="Request Service"
        ctaHref="/contact"
        breadcrumbs={[
          { label: 'Areas We Serve', href: '/areas-we-serve' },
          { label: CITY_STATE, href: '/areas-we-serve/cedar-park' },
        ]}
      />

      <section className="bg-white border-b border-[#e2e8f0]" aria-labelledby="cedar-park-intro">
        <div className="max-w-5xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 id="cedar-park-intro" className="text-2xl font-bold text-[#1e293b] mb-4">
              Your Neighbor for Propane Service in {CITY_STATE}
            </h2>
            <p className="text-[#334155] leading-relaxed mb-4">
              Cedar Park sits right next door to Leander, which means Action Propane is closer to
              Cedar Park customers than most other providers. Our store on S Hwy 183 is less than a
              mile from the Cedar Park city limits, and we make regular delivery runs throughout the
              city every week.
            </p>
            <p className="text-[#334155] leading-relaxed mb-4">
              Cedar Park has grown into one of the fastest-expanding communities in Williamson County.
              As development continues on the outskirts and along the corridor, more homes and
              businesses are choosing propane where natural gas infrastructure has not yet reached.
            </p>
            <p className="text-[#334155] leading-relaxed mb-6">
              We offer the complete range of propane services: fuel delivery, new tank installation,
              forklift cylinder exchange, and system maintenance. One call covers everything.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm" aria-label={`Call Action Propane at ${PHONE}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
                Call {PHONE}
              </a>
              <a href={EMAIL_HREF} className="inline-flex items-center gap-2 border border-[#e2e8f0] hover:border-[#dc2626] text-[#1e293b] hover:text-[#dc2626] font-semibold px-5 py-3 rounded transition-colors text-sm">
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl overflow-hidden border border-[#e2e8f0] shadow-sm">
              <iframe src={MAPS_EMBED_SRC} width="100%" height="280" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Action Propane, Inc. — Leander, TX on Google Maps" />
            </div>
            <div className="rounded-xl overflow-hidden border border-[#e2e8f0] shadow-sm">
              <iframe src={CITY_MAP_EMBED} width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Cedar Park, TX city map" />
            </div>
            <p className="text-xs text-[#64748b] text-center">
              <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2626] transition-colors">{ADDRESS}</a>
              {' '}&mdash;{' '}
              <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2626] transition-colors">Get Directions</a>
            </p>
          </div>
        </div>
      </section>

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
                    <h3 id={`svc-${svc.id}`} className="text-lg font-bold text-[#1e293b] mb-2">{svc.label} in {CITY_STATE}</h3>
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

      <section className="bg-[#0f172a] text-white py-10" aria-label="Contact prompt">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold mb-1">Ready to get started in {CITY_STATE}?</p>
            <p className="text-white/60 text-sm">Call or email us to set up delivery, installation, or service.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm whitespace-nowrap">Call {PHONE}</a>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-5 py-3 rounded transition-colors text-sm whitespace-nowrap">Request Service</Link>
          </div>
        </div>
      </section>

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
                <p className="text-[#64748b]"><a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2626] transition-colors">{ADDRESS}</a></p>
                <p><a href={PHONE_HREF} className="text-[#dc2626] font-medium">{PHONE}</a></p>
                <p><a href={EMAIL_HREF} className="text-[#dc2626] hover:underline text-xs break-all">{EMAIL}</a></p>
              </address>
            </div>
            <div className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#64748b] mb-4">Service Area</h3>
              <p className="text-sm text-[#334155] leading-relaxed mb-3">We serve Cedar Park and nearby communities including Leander, Austin, Round Rock, Georgetown, and Liberty Hill.</p>
              <Link href="/delivery-areas" className="text-sm text-[#dc2626] font-semibold hover:underline inline-flex items-center gap-1">
                View all delivery areas
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
            or <Link href="/contact" className="text-[#dc2626] font-semibold hover:underline">send us a message</Link>.
          </p>
        </div>
      </section>

      <section className="bg-white border-t border-[#e2e8f0] py-10" aria-labelledby="nearby-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="nearby-heading" className="text-sm font-semibold uppercase tracking-wide text-[#64748b] mb-4">We Also Serve Nearby Communities</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Leander, TX', href: '/areas-we-serve/leander' },
              { label: 'Austin, TX', href: '/areas-we-serve/austin' },
              { label: 'Round Rock, TX', href: '/areas-we-serve/round-rock' },
              { label: 'Georgetown, TX', href: '/areas-we-serve/georgetown' },
              { label: 'Liberty Hill, TX', href: '/areas-we-serve/liberty-hill' },
            ].map((city) => (
              <Link key={city.href} href={city.href} className="bg-[#f8fafc] border border-[#e2e8f0] text-[#334155] hover:border-[#dc2626] hover:text-[#dc2626] text-sm px-4 py-2 rounded-lg transition-colors">
                {city.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading={`Propane Delivery to ${CITY_STATE}`} subtext="Just next door to Leander, Action Propane is the fastest local option for Cedar Park propane delivery, installation, and service." />
    </>
  )
}
