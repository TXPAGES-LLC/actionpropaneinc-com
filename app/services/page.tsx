import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { CTABanner } from '@/components/CTABanner'
import { SERVICES_NAV, PRODUCTS_NAV, PHONE, PHONE_HREF } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Propane Services in Leander & Austin TX | Action Propane Inc',
  description:
    'Residential and commercial propane delivery, cylinder refills, tank installation, forklift exchange, and system repair in Leander, Austin, and Central Texas. Call 512-259-1196.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Propane Services in Leander & Austin TX | Action Propane Inc',
    description:
      'Full-service propane company in Leander, TX: residential delivery, commercial delivery, cylinder & RV refills, tank installation, forklift exchange, and system repair.',
    url: '/services',
    type: 'website',
  },
}

const serviceCards = [
  {
    href: '/services/residential-propane-delivery',
    title: 'Residential Propane Delivery',
    description: 'Scheduled and on-demand propane delivery for homes in Leander, Austin, Cedar Park, Georgetown, and surrounding Central Texas communities.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  },
  {
    href: '/services/commercial-propane-delivery',
    title: 'Commercial Propane Delivery',
    description: 'High-volume propane for businesses, restaurants, farms, construction, and industrial operations. Flexible schedules and bulk pricing.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  },
  {
    href: '/services/propane-cylinder-rv-refill-station',
    title: 'Propane Cylinder & RV Refill Station',
    description: 'Walk-in refill for BBQ cylinders, RV tanks, camp stoves, heaters, and more. No appointment needed. Open Mon–Sat in Leander.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>,
  },
  {
    href: '/services/forklift-propane-cylinder-exchange',
    title: 'Forklift Propane Cylinder Exchange',
    description: 'Fast cylinder exchange service for forklifts and industrial equipment. Keep your fleet running with reliable propane from Action Propane.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v6H4zM4 14h10v6H4zM18 14h2v6h-2z" /></svg>,
  },
  {
    href: '/services/propane-tank-installation',
    title: 'Propane Tank Installation',
    description: 'New propane tank installation for homes and businesses. We help you choose the right tank size, handle permits, and ensure safe setup.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="8" width="20" height="8" rx="4" /><path strokeLinecap="round" d="M6 8V6M18 8V6M6 16v2M18 16v2" /></svg>,
  },
  {
    href: '/services/propane-system-service-repair',
    title: 'Propane System Service & Repair',
    description: 'Leak checks, regulator replacement, line inspection, and safety testing for residential and commercial propane systems across Central Texas.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" /></svg>,
  },
]

const productCards = [
  { href: '/products/above-ground-propane-tanks', title: 'Above-Ground Propane Tanks', desc: 'Standard residential and commercial tanks, visible and easily accessible for maintenance.' },
  { href: '/products/underground-propane-tanks', title: 'Underground Propane Tanks', desc: 'Buried tanks that preserve landscaping aesthetics while delivering the same reliable propane.' },
  { href: '/products/dot-propane-cylinders', title: 'DOT Propane Cylinders', desc: 'Portable DOT-certified cylinders for grills, heaters, generators, and construction tools.' },
  { href: '/products/storefront', title: 'Storefront Products', desc: 'Grills, accessories, regulators, hoses, and more available for purchase in-store in Leander.' },
  { href: '/products/big-green-egg-grills', title: 'Big Green Egg Grills', desc: "Authorized Big Green Egg dealer — the world's best kamado cooker, in our Leander store." },
  { href: '/products/wilmington-grills', title: 'Wilmington Grills', desc: 'Premium propane and charcoal grills from Wilmington Grills, available at Action Propane.' },
]

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Propane Services — Action Propane, Inc.',
  url: '/services',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: '/services' },
    ],
  },
  mainEntity: { '@id': '/#business' },
}

export default function ServicesHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <PageHero
        eyebrow="Services"
        title="Propane Services for Homes & Businesses in Leander & Austin TX"
        description="From residential propane delivery and tank installation to commercial service, forklift cylinder exchange, and walk-in refills — Action Propane covers every propane need across Central Texas."
        ctaLabel="Request Service"
        ctaHref="/contact"
        breadcrumbs={[{ label: 'Services', href: '/services' }]}
      />

      {/* Service cards */}
      <section className="py-14 bg-[#f8fafc]" aria-labelledby="services-grid-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">What We Do</p>
            <h2 id="services-grid-heading" className="text-2xl md:text-3xl font-bold text-[#1e293b] text-balance">
              Propane Delivery & Service in Central Texas
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((svc) => (
              <Link key={svc.href} href={svc.href} className="bg-white rounded-xl border border-[#e2e8f0] p-6 hover:border-[#dc2626] hover:shadow-md transition-all group">
                <div className="text-[#dc2626] mb-3">{svc.icon}</div>
                <h3 className="font-bold text-[#1e293b] mb-2 group-hover:text-[#dc2626] transition-colors">{svc.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-3">{svc.description}</p>
                <span className="inline-flex items-center gap-1 text-[#dc2626] text-sm font-medium">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className="py-14 bg-white" aria-labelledby="products-grid-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">In-Store Products</p>
            <h2 id="products-grid-heading" className="text-2xl md:text-3xl font-bold text-[#1e293b] text-balance">
              Propane Tanks, Cylinders & Grills at Our Leander Storefront
            </h2>
            <p className="text-[#64748b] mt-3 max-w-2xl mx-auto text-sm">
              Visit us at 2601 S Hwy 183 in Leander, TX to browse our full selection of propane tanks, DOT cylinders, grills, and accessories.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productCards.map((p) => (
              <Link key={p.href} href={p.href} className="flex items-start gap-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-5 hover:border-[#dc2626] hover:bg-[#fef2f2] transition-all group">
                <div className="w-9 h-9 rounded-lg bg-[#fef2f2] flex items-center justify-center shrink-0 group-hover:bg-[#fecaca]" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 6 6 9 6 12a6 6 0 0 0 12 0c0-3-2-6-6-10z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e293b] text-sm mb-1 group-hover:text-[#dc2626] transition-colors">{p.title}</h3>
                  <p className="text-[#64748b] text-xs leading-relaxed">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-14 bg-[#0f172a] text-white" aria-labelledby="why-services-heading">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">Why Choose Action Propane</p>
            <h2 id="why-services-heading" className="text-2xl md:text-3xl font-bold text-balance mb-5">
              Central Texas Propane Service You Can Count On
            </h2>
            <ul className="space-y-3">
              {[
                '30+ years of propane delivery experience in Central Texas',
                'Licensed, insured, and Texas Railroad Commission compliant',
                'Walk-in refill station open Monday–Saturday in Leander',
                'Residential, commercial, agricultural, and industrial service',
                'New tank installation with proper sizing consultation',
                'Fast response — no prolonged wait times or automated systems',
                'Family-owned business that treats customers like neighbors',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#1e293b] rounded-xl p-7 border border-white/10">
            <p className="font-bold text-white text-lg mb-2">Need Propane Service?</p>
            <p className="text-white/60 text-sm mb-5">
              Call us to schedule delivery, get a quote, or ask about our services. We answer the phone — no bots, no hold music.
            </p>
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-5 py-3.5 rounded transition-colors text-base w-full"
              aria-label={`Call Action Propane at ${PHONE}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
              Call {PHONE}
            </a>
            <Link href="/contact" className="mt-3 flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-5 py-3 rounded transition-colors text-sm w-full">
              Request Service Online
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
