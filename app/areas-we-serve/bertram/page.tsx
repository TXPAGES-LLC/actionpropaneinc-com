import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, MAPS_HREF, MAPS_EMBED_SRC, ADDRESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Propane Delivery in Bertram, TX | Action Propane Inc',
  description:
    'Action Propane, Inc. delivers residential and agricultural propane to Bertram, TX. Tank installation available. Call 512-259-1196 to set up service.',
  alternates: { canonical: '/delivery-areas/bertram' },
  robots: { index: false, follow: true },
  keywords: ['propane delivery Bertram TX', 'agricultural propane Bertram Texas', 'propane service Bertram TX', 'rural propane Burnet County'],
  openGraph: {
    title: 'Propane Delivery in Bertram, TX | Action Propane Inc',
    description: 'Action Propane delivers residential and agricultural propane to Bertram, TX. Serving rural Burnet County customers who depend on propane year-round. Call 512-259-1196.',
    url: '/delivery-areas/bertram',
    type: 'website',
  },
}

const CITY = 'Bertram'
const STATE = 'TX'
const CITY_STATE = `${CITY}, ${STATE}`

const services = [
  {
    id: 'residential-delivery',
    label: 'Residential Propane Delivery',
    href: '/services/residential-propane-delivery',
    description:
      'Bertram is a small rural community in Burnet County where propane is the fuel of choice for most households. Action Propane delivers to Bertram homes and surrounding rural addresses, offering will-call delivery and scheduled refills to keep your tank at a safe level through all seasons.',
  },
  {
    id: 'commercial-delivery',
    label: 'Commercial Propane Delivery',
    href: '/services/commercial-propane-delivery',
    description:
      'Businesses and agricultural operations in the Bertram area that use propane in volume can set up commercial delivery accounts with Action Propane. We schedule deliveries around your usage and provide consistent supply for ranches, farms, and commercial operations.',
  },
  {
    id: 'tank-installation',
    label: 'Propane Tank Installation',
    href: '/services/propane-tank-installation',
    description:
      'Rural Bertram properties often benefit from larger tank installations — 500 to 1,000 gallons — to reduce delivery frequency and ensure supply through remote periods. We install above-ground and underground tanks and handle all necessary permitting.',
  },
  {
    id: 'system-service',
    label: 'System Service & Repair',
    href: '/services/propane-system-service-repair',
    description:
      'If your propane system needs attention at a Bertram property, our technicians can schedule a service visit to inspect regulators, check lines, and ensure your system is operating safely and efficiently.',
  },
]

const faqs = [
  {
    q: 'Does Action Propane deliver to Bertram, TX?',
    a: 'Yes. Bertram is within our delivery area. We serve residential customers, ranches, and agricultural operations in and around Bertram. Call 512-259-1196 to confirm your address and set up service.',
  },
  {
    q: 'Do you deliver to rural properties and farms near Bertram?',
    a: 'Yes. Many of our Bertram-area customers are on rural routes, including farms and ranches in northern Burnet County. We have experience navigating rural delivery routes throughout this region.',
  },
  {
    q: 'What is the best tank size for a rural Bertram home?',
    a: 'For rural properties on less frequent delivery routes, we typically recommend 500- to 1,000-gallon tanks. This reduces how often we need to make the run to your property and gives you a comfortable buffer during busy seasons.',
  },
  {
    q: 'Can I get agricultural propane delivery in the Bertram area?',
    a: 'Yes. We serve agricultural customers who use propane for grain drying, water heating, livestock applications, and other farm uses. Call us to discuss your needs and set up a delivery schedule.',
  },
  {
    q: 'How far is your Leander store from Bertram?',
    a: 'Our store at 2601 S Hwy 183 in Leander is approximately 30–40 minutes from Bertram via US-183 North. We run regular delivery routes through Burnet County.',
  },
  {
    q: 'How do I start propane service in Bertram?',
    a: 'Call us at 512-259-1196. We will confirm your address, assess your tank situation, and schedule a delivery or installation. For new customers on rural routes, getting in touch early helps us plan your route efficiently.',
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

const CITY_MAP_EMBED = 'https://maps.google.com/maps?q=Bertram,TX&output=embed&z=13'

export default function BertramAreasWeServePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero eyebrow="Areas We Serve" title={`Services in ${CITY_STATE}`} description={`Action Propane, Inc. delivers propane to Bertram, TX and rural Burnet County. We serve homes, ranches, farms, and commercial properties throughout the area on regular delivery routes.`} ctaLabel="Request Service" ctaHref="/contact" breadcrumbs={[{ label: 'Areas We Serve', href: '/areas-we-serve' }, { label: CITY_STATE, href: '/areas-we-serve/bertram' }]} />

      <section className="bg-white border-b border-[#e2e8f0]" aria-labelledby="bertram-intro">
        <div className="max-w-5xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 id="bertram-intro" className="text-2xl font-bold text-[#1e293b] mb-4">Rural Propane Delivery for {CITY_STATE}</h2>
            <p className="text-[#334155] leading-relaxed mb-4">Bertram is a small community in the Hill Country corridor between Leander and Burnet. Natural gas does not reach most of this area, and propane is the primary energy source for residential heating, cooking, and agricultural operations throughout northern Burnet County.</p>
            <p className="text-[#334155] leading-relaxed mb-4">Action Propane has been delivering to rural Central Texas for over 30 years. We run regular routes along US-183 through Bertram, and we have long-standing relationships with customers throughout the area — homeowners, ranchers, and seasonal property owners alike.</p>
            <p className="text-[#334155] leading-relaxed mb-6">Call to confirm delivery service for your Bertram address and get your account started.</p>
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
            <div className="rounded-xl overflow-hidden border border-[#e2e8f0] shadow-sm"><iframe src={CITY_MAP_EMBED} width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Bertram, TX city map" /></div>
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
          <div><p className="text-lg font-bold mb-1">Ready to get started in {CITY_STATE}?</p><p className="text-white/60 text-sm">Call to confirm delivery availability for your Bertram address or rural property.</p></div>
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
            <div className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-6"><h3 className="text-sm font-semibold uppercase tracking-wide text-[#64748b] mb-4">Service Area</h3><p className="text-sm text-[#334155] leading-relaxed mb-3">We serve Bertram and surrounding communities including Burnet, Liberty Hill, Marble Falls, and Leander.</p><Link href="/delivery-areas" className="text-sm text-[#dc2626] font-semibold hover:underline inline-flex items-center gap-1">View all delivery areas<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg></Link></div>
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
            {[{ label: 'Leander, TX', href: '/areas-we-serve/leander' }, { label: 'Burnet, TX', href: '/areas-we-serve/burnet' }, { label: 'Marble Falls, TX', href: '/areas-we-serve/marble-falls' }, { label: 'Liberty Hill, TX', href: '/areas-we-serve/liberty-hill' }, { label: 'Georgetown, TX', href: '/areas-we-serve/georgetown' }].map((city) => (
              <Link key={city.href} href={city.href} className="bg-[#f8fafc] border border-[#e2e8f0] text-[#334155] hover:border-[#dc2626] hover:text-[#dc2626] text-sm px-4 py-2 rounded-lg transition-colors">{city.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading={`Propane Delivery to ${CITY_STATE}`} subtext="Action Propane, Inc. has served rural Central Texas for over 30 years. Call to set up propane delivery or tank installation in Bertram today." />
    </>
  )
}
