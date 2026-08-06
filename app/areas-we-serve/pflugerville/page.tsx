import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { CTABanner } from '@/components/CTABanner'
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, MAPS_HREF, MAPS_EMBED_SRC, ADDRESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Propane Services in Pflugerville, TX | Action Propane Inc',
  description:
    'Action Propane, Inc. delivers residential and commercial propane to Pflugerville, TX. Tank installation and system service available. Call 512-259-1196.',
  alternates: { canonical: '/delivery-areas/pflugerville' },
  robots: { index: false, follow: true },
  keywords: ['propane delivery Pflugerville TX', 'commercial propane Pflugerville', 'propane service Pflugerville TX'],
  openGraph: {
    title: 'Propane Services in Pflugerville, TX | Action Propane Inc',
    description: 'Residential and commercial propane delivery to Pflugerville, TX by Action Propane. Auto-fill or will-call schedules available. Call 512-259-1196.',
    url: '/delivery-areas/pflugerville',
    type: 'website',
  },
}

const CITY = 'Pflugerville'
const STATE = 'TX'
const CITY_STATE = `${CITY}, ${STATE}`

const services = [
  {
    id: 'residential-delivery',
    label: 'Residential Propane Delivery',
    href: '/services/residential-propane-delivery',
    description:
      'Pflugerville homeowners who use propane for heating, water heating, cooking, or backup generators can count on consistent delivery from Action Propane. We serve residential addresses throughout the city and set up delivery schedules that keep your tank topped off.',
  },
  {
    id: 'commercial-delivery',
    label: 'Commercial Propane Delivery',
    href: '/services/commercial-propane-delivery',
    description:
      'Pflugerville has seen strong commercial and industrial growth, bringing restaurants, warehouses, and service businesses that use propane in their operations. We establish commercial delivery accounts tailored to your business type and usage volume.',
  },
  {
    id: 'tank-installation',
    label: 'Propane Tank Installation',
    href: '/services/propane-tank-installation',
    description:
      'Whether you are converting a Pflugerville home to propane or installing a tank for a new build, we handle the complete installation — tank sizing, placement, permitting, and connection. Above-ground and underground options are both available.',
  },
  {
    id: 'system-service',
    label: 'System Service & Repair',
    href: '/services/propane-system-service-repair',
    description:
      'Our technicians handle propane system service at Pflugerville homes and businesses, including regulator replacement, pressure checks, line inspection, and appliance hookups. Call us if you have any concerns about your propane system.',
  },
]

const faqs = [
  {
    q: 'Does Action Propane deliver to Pflugerville, TX?',
    a: 'Yes. Pflugerville is within our delivery area. We serve both residential and commercial customers. Call 512-259-1196 to confirm your address and set up service.',
  },
  {
    q: 'How do I set up propane delivery for my Pflugerville home?',
    a: 'Call us at 512-259-1196 or send an email. We will confirm your address, check your existing tank situation, and schedule your first delivery. If you need a tank installed, we will discuss the process and timeline.',
  },
  {
    q: 'Do you serve commercial businesses in Pflugerville?',
    a: 'Yes. We work with restaurants, light manufacturing, warehousing, and other commercial customers in Pflugerville. Call to discuss volume requirements and delivery frequency.',
  },
  {
    q: 'Can I get automatic propane delivery in Pflugerville?',
    a: 'Yes. Automatic delivery is available. We estimate your usage and schedule a fill before your tank drops to a critical level, typically around 20–25% remaining.',
  },
  {
    q: 'How far is your Leander store from Pflugerville?',
    a: 'Our store at 2601 S Hwy 183 in Leander is approximately 25–35 minutes from Pflugerville, depending on traffic via TX-130 or I-35. We run regular delivery routes through the area.',
  },
  {
    q: 'What if I need emergency propane delivery in Pflugerville?',
    a: 'Call us at 512-259-1196 and we will do our best to work you into the schedule as quickly as possible. To prevent running out unexpectedly, we recommend setting up automatic delivery or monitoring your gauge and calling at 25% capacity.',
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

const CITY_MAP_EMBED = 'https://maps.google.com/maps?q=Pflugerville,TX&output=embed&z=13'

export default function PflugervilleAreasWeServePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero eyebrow="Areas We Serve" title={`Services in ${CITY_STATE}`} description={`Action Propane, Inc. delivers propane and provides full propane services to Pflugerville, TX. We serve residential and commercial customers throughout Pflugerville and the greater Travis County area.`} ctaLabel="Request Service" ctaHref="/contact" breadcrumbs={[{ label: 'Areas We Serve', href: '/areas-we-serve' }, { label: CITY_STATE, href: '/areas-we-serve/pflugerville' }]} />

      <section className="bg-white border-b border-[#e2e8f0]" aria-labelledby="pflugerville-intro">
        <div className="max-w-5xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 id="pflugerville-intro" className="text-2xl font-bold text-[#1e293b] mb-4">Propane Delivery and Service for {CITY_STATE}</h2>
            <p className="text-[#334155] leading-relaxed mb-4">Pflugerville has grown from a small farming community into one of the most active suburban cities in the Austin metro. As development spreads, properties on the edges of the city and in older neighborhoods continue to rely on propane where natural gas is not available.</p>
            <p className="text-[#334155] leading-relaxed mb-4">Action Propane, Inc. delivers to Pflugerville from our Leander location, with service extending throughout the city and surrounding areas. We handle both residential and commercial accounts with the same straightforward approach: clear pricing, consistent delivery, and direct communication.</p>
            <p className="text-[#334155] leading-relaxed mb-6">Call us to confirm service availability for your address and get your account set up.</p>
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
            <div className="rounded-xl overflow-hidden border border-[#e2e8f0] shadow-sm"><iframe src={CITY_MAP_EMBED} width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Pflugerville, TX city map" /></div>
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
          <div><p className="text-lg font-bold mb-1">Ready to get started in {CITY_STATE}?</p><p className="text-white/60 text-sm">Call to confirm delivery availability and get your Pflugerville account set up.</p></div>
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
            <div className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-6"><h3 className="text-sm font-semibold uppercase tracking-wide text-[#64748b] mb-4">Service Area</h3><p className="text-sm text-[#334155] leading-relaxed mb-3">We serve Pflugerville and nearby communities including Round Rock, Hutto, Taylor, Austin, and Leander.</p><Link href="/delivery-areas" className="text-sm text-[#dc2626] font-semibold hover:underline inline-flex items-center gap-1">View all delivery areas<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg></Link></div>
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
            {[{ label: 'Austin, TX', href: '/areas-we-serve/austin' }, { label: 'Round Rock, TX', href: '/areas-we-serve/round-rock' }, { label: 'Hutto, TX', href: '/areas-we-serve/hutto' }, { label: 'Taylor, TX', href: '/areas-we-serve/taylor' }, { label: 'Leander, TX', href: '/areas-we-serve/leander' }].map((city) => (
              <Link key={city.href} href={city.href} className="bg-[#f8fafc] border border-[#e2e8f0] text-[#334155] hover:border-[#dc2626] hover:text-[#dc2626] text-sm px-4 py-2 rounded-lg transition-colors">{city.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading={`Propane Delivery to ${CITY_STATE}`} subtext="Action Propane, Inc. has served Central Texas for over 30 years. Call to confirm service availability and set up residential or commercial propane in Pflugerville." />
    </>
  )
}
