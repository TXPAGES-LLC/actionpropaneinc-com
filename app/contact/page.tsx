import type { Metadata } from 'next'
import Link from 'next/link'
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, MAPS_HREF, MAPS_EMBED_SRC } from '@/lib/constants'
import { VerifiedProfiles } from '@/components/VerifiedProfiles'
import { TrustBar } from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'Contact Action Propane Inc | Propane Delivery in Leander & Austin TX',
  description:
    'Contact Action Propane, Inc. in Leander TX for propane delivery, tank installation, refill, and service. Call 512-259-1196 or email actionpropane@sbcglobal.net.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Action Propane Inc | Leander, TX',
    description:
      'Call, email, or visit Action Propane, Inc. at 2601 S Hwy 183, Leander TX. Propane delivery, tank installation, walk-in refill. Open Mon–Sat.',
    url: '/contact',
    type: 'website',
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Contact Action Propane, Inc.',
  url: '/contact',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: '/contact' },
    ],
  },
  mainEntity: { '@id': '/#business' },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <div className="bg-[#f8fafc]">
        {/* Header */}
        <section className="bg-[#0f172a] text-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">
              Get in Touch
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Contact Action Propane, Inc.
            </h1>
            <p className="text-white/70 text-base max-w-xl mx-auto leading-relaxed">
              Call, email, or visit us at our Leander storefront. Our team is available Monday
              through Saturday to help with propane delivery, tank installation, refill, and
              any questions about our services.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-7 py-3.5 rounded transition-colors text-lg"
              aria-label={`Call Action Propane at ${PHONE}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call {PHONE}
            </a>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-14">
          <div className="grid md:grid-cols-2 gap-8 items-start">

            {/* Contact details card */}
            <div className="space-y-6">
              {/* NAP */}
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 md:p-8">
                <h2 className="text-lg font-bold text-[#1e293b] mb-5">
                  Action Propane, Inc.
                </h2>
                <address className="not-italic space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <p className="font-semibold text-[#1e293b] text-sm">Address</p>
                      <p className="text-[#64748b] text-sm">2601 S Hwy 183</p>
                      <p className="text-[#64748b] text-sm">Leander, TX 78641</p>
                      <a
                        href={MAPS_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#dc2626] text-sm font-medium mt-1 hover:text-[#b91c1c] transition-colors"
                      >
                        Get Directions
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#dc2626" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-[#1e293b] text-sm">Phone</p>
                      <a href={PHONE_HREF} className="text-[#dc2626] font-semibold hover:text-[#b91c1c] transition-colors">
                        {PHONE}
                      </a>
                      <p className="text-[#64748b] text-xs mt-0.5">Primary contact — call for fastest response</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>
                      <p className="font-semibold text-[#1e293b] text-sm">Email</p>
                      <a href={EMAIL_HREF} className="text-[#dc2626] hover:text-[#b91c1c] transition-colors text-sm break-all">
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                </address>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 md:p-8">
                <h2 className="text-lg font-bold text-[#1e293b] mb-4">Business Hours</h2>
                <dl className="space-y-2">
                  {[
                    { day: 'Monday', hours: '8:00 a.m. – 6:00 p.m.' },
                    { day: 'Tuesday', hours: '8:00 a.m. – 6:00 p.m.' },
                    { day: 'Wednesday', hours: '8:00 a.m. – 6:00 p.m.' },
                    { day: 'Thursday', hours: '8:00 a.m. – 6:00 p.m.' },
                    { day: 'Friday', hours: '8:00 a.m. – 6:00 p.m.' },
                    { day: 'Saturday', hours: '8:00 a.m. – 4:00 p.m.' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center border-b border-[#f1f5f9] pb-2 last:border-0">
                      <dt className="text-sm text-[#64748b]">{day}</dt>
                      <dd className={`text-sm font-medium ${hours === 'Closed' ? 'text-[#94a3b8]' : 'text-[#1e293b]'}`}>
                        {hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Service area */}
              <div className="bg-[#fef2f2] rounded-xl border border-[#fecaca] p-6">
                <h2 className="text-base font-bold text-[#1e293b] mb-3">Delivery Service Area</h2>
                <p className="text-sm text-[#334155] mb-3 leading-relaxed">
                  We deliver propane to homes and businesses throughout Central Texas, including:
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    'Leander', 'Austin', 'Cedar Park', 'Georgetown',
                    'Round Rock', 'Burnet', 'Liberty Hill', 'Marble Falls',
                  ].map((area) => (
                    <div key={area} className="flex items-center gap-1.5 text-sm text-[#1e293b]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#dc2626" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      </svg>
                      {area}, TX
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#64748b] mt-3">
                  Not sure if we serve your area?{' '}
                  <a href={PHONE_HREF} className="text-[#dc2626] font-medium hover:underline">Call us</a>{' '}
                  to confirm.
                </p>
              </div>
            </div>

            {/* Map + CTA panel */}
            <div className="space-y-6">
              {/* Embedded map */}
              <div className="rounded-xl overflow-hidden border border-[#e2e8f0] bg-white">
                <iframe
                  title="Action Propane Inc location map — 2601 S Hwy 183, Leander TX"
                  src={MAPS_EMBED_SRC}
                  width="100%"
                  height="320"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Map showing Action Propane Inc at 2601 S Hwy 183, Leander, TX"
                />
                <div className="p-4 border-t border-[#e2e8f0]">
                  <a
                    href={MAPS_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-[#dc2626] hover:text-[#b91c1c] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Open in Google Maps — 2601 S Hwy 183, Leander, TX 78641
                  </a>
                </div>
              </div>

              {/* Primary CTA card */}
              <div className="bg-[#0f172a] rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-xl font-bold mb-3 text-balance">
                  The fastest way to reach us is a phone call
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  For propane delivery, pricing, tank installation, or any questions about our
                  service in Central Texas — our team is ready to help during business hours.
                </p>
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-6 py-4 rounded transition-colors text-lg w-full"
                  aria-label={`Call Action Propane at ${PHONE}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  {PHONE}
                </a>
                <a
                  href={EMAIL_HREF}
                  className="mt-3 flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded transition-colors text-sm w-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email Action Propane
                </a>
              </div>

              {/* Verified profiles */}
              <VerifiedProfiles compact />

              {/* Services quick links */}
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-6">
                <h2 className="text-base font-bold text-[#1e293b] mb-4">What We Can Help With</h2>
                <ul className="space-y-2.5">
                  {[
  { label: 'Residential Propane Delivery', href: '/services/residential-propane-delivery' },
  { label: 'Commercial Propane Delivery', href: '/services/commercial-propane-delivery' },
  { label: 'Propane Tank Installation', href: '/services/propane-tank-installation' },
  { label: 'Propane Cylinder & RV Refill', href: '/services/propane-cylinder-rv-refill-station' },
  { label: 'Grills, Heaters & Accessories', href: '/products/storefront' },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 text-sm text-[#1e293b] hover:text-[#dc2626] transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="#dc2626" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                        </svg>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrustBar className="mt-0" />
    </>
  )
}
