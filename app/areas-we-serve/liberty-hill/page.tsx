import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, MAPS_HREF, MAPS_EMBED_SRC, ADDRESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Propane Services in Liberty Hill, TX | Action Propane Inc',
  description:
    'Action Propane, Inc. delivers propane and installs propane tanks for homes and properties in Liberty Hill, TX. Call 512-259-1196 to set up service.',
  alternates: { canonical: '/delivery-areas/liberty-hill' },
  robots: { index: false, follow: true },
  keywords: ['propane delivery Liberty Hill TX', 'propane tank installation Liberty Hill', 'propane service Liberty Hill TX'],
  openGraph: {
    title: 'Propane Services in Liberty Hill, TX | Action Propane Inc',
    description: 'Action Propane, Inc. delivers propane and installs tanks for homes in Liberty Hill, TX. Serving rural properties and new construction. Call 512-259-1196.',
    url: '/delivery-areas/liberty-hill',
    type: 'website',
  },
}

const CITY = 'Liberty Hill'
const STATE = 'TX'
const CITY_STATE = `${CITY}, ${STATE}`

const services = [
  {
    id: 'residential-delivery',
    label: 'Residential Propane Delivery',
    href: '/services/residential-propane-delivery',
    description:
      'Liberty Hill is growing rapidly, but natural gas service has not kept pace with the expansion. Most homes in the area depend on propane for heat, hot water, cooking, and generators. Action Propane delivers reliably to Liberty Hill residences on schedules that match your usage.',
  },
  {
    id: 'tank-installation',
    label: 'Propane Tank Installation',
    href: '/services/propane-tank-installation',
    description:
      'Many new homes in Liberty Hill are built on larger lots where underground tanks are preferred for aesthetics and safety. We install both above-ground and underground tanks, handling all sizing, permitting, and connection work for new builds and conversions.',
  },
  {
    id: 'commercial-delivery',
    label: 'Commercial Propane Delivery',
    href: '/services/commercial-propane-delivery',
    description:
      'Liberty Hill businesses — including construction companies active in the area, agricultural operations, and commercial properties — can set up delivery accounts with Action Propane. We schedule deliveries around your operations to keep your fuel supply consistent.',
  },
  {
    id: 'system-service',
    label: 'System Service & Repair',
    href: '/services/propane-system-service-repair',
    description:
      'If your propane system needs attention — a pressure regulator replacement, a line inspection, or a new appliance connected — our technicians service propane systems at Liberty Hill properties. Call us to schedule a visit.',
  },
]

const faqs = [
  {
    q: 'Does Action Propane deliver to Liberty Hill, TX?',
    a: 'Yes. Liberty Hill is within our regular delivery area. We serve homes, ranches, and businesses throughout the city and surrounding areas. Call 512-259-1196 to confirm your address and set up service.',
  },
  {
    q: 'Do you install propane tanks for new homes in Liberty Hill?',
    a: 'Yes. We regularly install tanks for new construction in Liberty Hill and Williamson County. Contact us early in your build process so we can coordinate with your contractor on sizing, placement, and connection timing.',
  },
  {
    q: 'What propane tank size is right for a Liberty Hill home?',
    a: 'For a typical Central Texas home using propane for heating, water, and cooking, a 250- to 500-gallon tank is usually sufficient. We size based on your actual appliance load and usage patterns.',
  },
  {
    q: 'Is automatic delivery available in Liberty Hill?',
    a: 'Yes. Automatic delivery is available to Liberty Hill customers. We estimate your usage based on historical data and seasonal patterns, then schedule a delivery before your tank drops below 20%.',
  },
  {
    q: 'How long does it take to get first delivery after setting up an account?',
    a: 'For existing tanks, we can usually schedule your first delivery within a few business days. For new tank installations, timing depends on permitting and site readiness. Call us early to avoid delays.',
  },
  {
    q: 'Do you service propane systems in Liberty Hill, not just deliver fuel?',
    a: 'Yes. Our technicians handle system service and repair for Liberty Hill customers, including regulator replacement, line inspection, and appliance hookups. Call if you have any system concerns.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'LocalBusiness', '@id': '/#business', name: 'Action Propane, Inc.', telephone: '+15122591196', email: 'actionpropane@sbcglobal.net', address: { '@type': 'PostalAddress', streetAddress: '2601 S Hwy 183', addressLocality: 'Leander', addressRegion: 'TX', postalCode: '78641', addressCountry: 'US' } },
    { '@type': 'Service', name: `Propane Services in ${CITY_STATE}`, provider: { '@id': '/#business' }, areaServed: { '@type': 'City', name: CITY, containedInPlace: { '@type': 'State', name: 'Texas' } } },
    { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ],
}

const CITY_MAP_EMBED = 'https://maps.google.com/maps?q=Liberty+Hill,TX&output=embed&z=13'

export default function LibertyHillAreasWeServePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero eyebrow="Areas We Serve" title={`Services in ${CITY_STATE}`} description={`Action Propane, Inc. delivers propane and installs tanks for homes and properties throughout Liberty Hill, TX. As the area continues to grow, we provide the local propane service that new and existing residents depend on.`} ctaLabel="Request Service" ctaHref="/contact" breadcrumbs={[{ label: 'Areas We Serve', href: '/areas-we-serve' }, { label: CITY_STATE, href: '/areas-we-serve/liberty-hill' }]} />

      <section className="bg-white border-b border-[#e2e8f0]" aria-labelledby="liberty-hill-intro">
        <div className="max-w-5xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 id="liberty-hill-intro" className="text-2xl font-bold text-[#1e293b] mb-4">Propane Delivery and Tank Installation in {CITY_STATE}</h2>
            <p className="text-[#334155] leading-relaxed mb-4">Liberty Hill has seen some of the fastest residential growth in Williamson County. As new neighborhoods expand west of US-183, propane is often the only fuel option available — natural gas infrastructure lags behind the pace of development.</p>
            <p className="text-[#334155] leading-relaxed mb-4">Action Propane, Inc. is based in Leander, just a few miles east of Liberty Hill. That proximity means shorter lead times for deliveries, faster response to service calls, and a team that understands the area well.</p>
            <p className="text-[#334155] leading-relaxed mb-6">Whether you are moving into a new home that needs a tank installed or you are an existing customer looking for a more reliable propane partner, we are ready to help.</p>
            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3 rounded transition-colors text-sm" aria-label={`Call Action Propane at ${PHONE}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
                Call {PHONE}
              </a>
              <a href={EMAIL_HREF} className="inline-flex items-center gap-2 border border-[#e2e8f0] hover:border-[#dc2626] text-[#1e293b] hover:text-[#dc2626] font-semibold px-5 py-3 rounded transition-colors text-sm">{EMAIL}</a>
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl overflow-hidden border border-[#e2e8f0] shadow-sm"><iframe src={MAPS_EMBED_SRC} width="100%" height="280" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Action Propane, Inc. on Google Maps" /></div>
            <div className="rounded-xl overflow-hidden border border-[#e2e8f0] shadow-sm"><iframe src={CITY_MAP_EMBED} width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Liberty Hill, TX city map" /></div>
            <p className="text-xs text-[#64748b] text-center"><a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2626] transition-colors">{ADDRESS}</a>{' '}&mdash;{' '}<a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2626] transition-colors">Get Directions</a></p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-14" aria-labelledby="services-heading">
        <div className="max-w-5xl mx-auto px-4">
          <header className="mb-10"><p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p><h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[#1e293b] text-balance">Propane Services Available in {CITY_STATE}</h2></header>
          <div className="space-y-8">
            {services.map((svc, i) => (
              <article key={svc.id} className="bg-white rounded-xl border border-[#e2e8f0] p-6 md:p-8" aria-labelledby={`svc-${svc.id}`}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fef2f2] flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true"><span className="text-[#dc2626] font-bold text-sm">{i + 1}</span></div>
                  <div className="flex-1 min-w-0">
                    <h3 id={`svc-${svc.id}`} className="text-lg font-bold text-[#1e293b] mb-2">{svc.label} in {CITY_STATE}</h3>
                    <p className="text-[#334155] leading-relaxed text-sm mb-4">{svc.description}</p>
                    <Link href={svc.href} className="inline-flex items-center gap-1.5 text-sm text-[#dc2626] font-semibold hover:underline">Learn more about {svc.label}<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] text-white py-10" aria-label="Contact prompt">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div><p className="text-lg font-bold mb-1">Ready to get started in {CITY_STATE}?</p><p className="text-white/60 text-sm">Call to confirm availability and get your Liberty Hill propane service set up.</p></div>
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
            <div className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-6"><h3 className="text-sm font-semibold uppercase tracking-wide text-[#64748b] mb-4">Store Hours</h3><dl className="space-y-2 text-sm"><div className="flex justify-between"><dt className="text-[#64748b]">Mon – Fri</dt><dd className="font-semibold text-[#1e293b]">8am – 6pm</dd></div><div className="flex justify-between"><dt className="text-[#64748b]">Saturday</dt><dd className="font-semibold text-[#1e293b]">8am – 4pm</dd></div><div className="flex justify-between"><dt className="text-[#64748b]">Sunday</dt><dd className="text-[#94a3b8]">Closed</dd></div></dl></div>
            <div className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-6"><h3 className="text-sm font-semibold uppercase tracking-wide text-[#64748b] mb-4">Our Location</h3><address className="not-italic text-sm text-[#1e293b] space-y-1.5"><p className="font-semibold">Action Propane, Inc.</p><p className="text-[#64748b]"><a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2626] transition-colors">{ADDRESS}</a></p><p><a href={PHONE_HREF} className="text-[#dc2626] font-medium">{PHONE}</a></p><p><a href={EMAIL_HREF} className="text-[#dc2626] hover:underline text-xs break-all">{EMAIL}</a></p></address></div>
            <div className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-6"><h3 className="text-sm font-semibold uppercase tracking-wide text-[#64748b] mb-4">Service Area</h3><p className="text-sm text-[#334155] leading-relaxed mb-3">We serve Liberty Hill and nearby communities including Leander, Cedar Park, Georgetown, and Bertram.</p><Link href="/delivery-areas" className="text-sm text-[#dc2626] font-semibold hover:underline inline-flex items-center gap-1">View all delivery areas<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg></Link></div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-14" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4">
          <header className="mb-8 text-center"><p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">Common Questions</p><h2 id="faq-heading" className="text-2xl font-bold text-[#1e293b] text-balance">Frequently Asked Questions — Propane Service in {CITY_STATE}</h2></header>
          <div className="space-y-4">{faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl border border-[#e2e8f0] p-6"><h3 className="font-semibold text-[#1e293b] mb-2 leading-snug">{faq.q}</h3><p className="text-[#334155] text-sm leading-relaxed">{faq.a}</p></div>))}</div>
          <p className="text-center mt-8 text-sm text-[#64748b]">Have a question not listed here?{' '}<a href={PHONE_HREF} className="text-[#dc2626] font-semibold hover:underline">Call us at {PHONE}</a>{' '}or <Link href="/contact" className="text-[#dc2626] font-semibold hover:underline">send us a message</Link>.</p>
        </div>
      </section>

      <section className="bg-white border-t border-[#e2e8f0] py-10" aria-labelledby="nearby-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="nearby-heading" className="text-sm font-semibold uppercase tracking-wide text-[#64748b] mb-4">We Also Serve Nearby Communities</h2>
          <div className="flex flex-wrap gap-2">
            {[{ label: 'Leander, TX', href: '/areas-we-serve/leander' }, { label: 'Cedar Park, TX', href: '/areas-we-serve/cedar-park' }, { label: 'Georgetown, TX', href: '/areas-we-serve/georgetown' }, { label: 'Burnet, TX', href: '/areas-we-serve/burnet' }, { label: 'Bertram, TX', href: '/areas-we-serve/bertram' }].map((city) => (
              <Link key={city.href} href={city.href} className="bg-[#f8fafc] border border-[#e2e8f0] text-[#334155] hover:border-[#dc2626] hover:text-[#dc2626] text-sm px-4 py-2 rounded-lg transition-colors">{city.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading={`Propane Delivery to ${CITY_STATE}`} subtext="Just minutes from Liberty Hill, Action Propane is your local choice for propane delivery, tank installation, and system service." />
    </>
  )
}
