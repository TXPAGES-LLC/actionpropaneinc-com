import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PHONE, PHONE_HREF, MAPS_HREF, GBP_CID } from '@/lib/constants'
import { TrustBar } from '@/components/TrustBar'
import { VerifiedProfiles } from '@/components/VerifiedProfiles'

const GBP_MAPS_URL = `https://maps.google.com/?cid=${GBP_CID}`

export const metadata: Metadata = {
  title: 'Propane Delivery & Refill in Leander & Austin TX | Action Propane Inc',
  description:
    'Action Propane Inc delivers reliable propane to homes and businesses in Leander, Austin, Cedar Park, Georgetown, and Central Texas. Call 512-259-1196 for fast service.',
  alternates: { canonical: '' },
  openGraph: {
    title: 'Action Propane Inc | Propane Delivery & Refill in Leander & Austin TX',
    description:
      'Family-owned propane delivery, tank installation, and refill services in Leander, Austin, and Central Texas since 1984. Call (512) 259-1196.',
    url: '',
    type: 'website',
  },
}

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Residential Propane Delivery',
    href: '/services/residential-propane-delivery',
    description:
      'Dependable home propane delivery in Leander, Austin, and Central Texas. We keep your family warm and your appliances running year-round.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Commercial Propane Delivery',
    href: '/services/commercial-propane-delivery',
    description:
      'High-volume propane delivery for businesses, farms, and construction sites across Central Texas. Flexible schedules, competitive rates.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Propane Cylinder & RV Refill',
    href: '/services/propane-cylinder-rv-refill-station',
    description:
      'Walk-in propane cylinder refill at our Leander location. Tanks for grills, heaters, RVs, and more. Open Mon–Sat.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'Propane Tank Installation',
    href: '/services/propane-tank-installation',
    description:
      'New propane tank installation, tank exchanges, and safety inspections for homes and businesses throughout the Austin area.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Storefront Products & Grills',
    href: '/products/storefront',
    description:
      'Browse our selection of propane grills, outdoor heaters, and propane accessories available at our Leander storefront.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'System Service & Repair',
    href: '/services/propane-system-service-repair',
    description:
      'Certified propane system inspections, leak checks, regulator replacement, and line repairs for homes and businesses in Central Texas.',
  },
]

const stats = [
  { value: '40+', label: 'Years Serving Texas' },
  { value: '5,000+', label: 'Customers Served' },
  { value: '6', label: 'Counties Covered' },
  { value: '5★', label: 'Customer Rating', href: GBP_MAPS_URL },
]

const deliveryAreas = [
  'Leander', 'Austin', 'Cedar Park', 'Georgetown',
  'Round Rock', 'Burnet', 'Liberty Hill', 'Marble Falls',
]

const blogPosts = [
  {
    title: '4 Important Questions To Ask Before Hiring Propane Suppliers In Austin TX',
    href: '/blog/4-important-questions-to-ask-before-hiring-propane-suppliers-in-austin-tx',
    excerpt: 'Not all propane suppliers are created equal. Here are the key questions to ask before signing up for service in Austin.',
    category: 'Buyer\'s Guide',
  },
  {
    title: 'Top 5 Reasons To Invest In Residential Propane Delivery Services',
    href: '/blog/top-5-reasons-to-invest-in-residential-propane-delivery-services',
    excerpt: 'Discover why more Texas homeowners are switching to residential propane delivery for efficiency, savings, and reliability.',
    category: 'Residential',
  },
  {
    title: 'Everything You Need To Know About Propane Services In Texas',
    href: '/blog/everything-you-need-to-know-about-propane-services-in-texas',
    excerpt: 'A complete guide to propane delivery, installation, safety, and maintenance for homeowners and businesses across Texas.',
    category: 'Complete Guide',
  },
  {
    title: '4 Key Factors To Consider Before Having A Residential Propane Tank Installation',
    href: '/blog/4-key-factors-to-consider-before-having-a-residential-propane-tank-installation',
    excerpt: 'Planning a propane tank installation? Here are four critical factors that determine the right tank size, placement, and setup.',
    category: 'Installation',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f172a] text-white py-16 md:py-24" aria-label="Hero">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-3">
              Leander &amp; Austin, Texas
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance mb-5">
              Reliable Propane Delivery &amp; Refill Services in Central Texas
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Action Propane, Inc. is a family-owned propane supplier serving residential and commercial
            customers throughout Austin, Leander, Cedar Park, and surrounding communities for over
            40 years. Fast delivery, expert installation, and a walk-in refill station.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-6 py-3.5 rounded transition-colors text-base"
                aria-label={`Call Action Propane at ${PHONE}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Call {PHONE}
              </a>
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white/60 font-semibold px-6 py-3.5 rounded transition-colors text-base"
                aria-label="Get directions to Action Propane"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          {/* Building photo + info card */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-xl overflow-hidden h-52 w-full">
              <Image
                src="/front-of-building.jpg"
                alt="Action Propane Inc storefront at 2601 S Hwy 183, Leander TX — authorized Big Green Egg dealer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="bg-[#1e293b] rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[#dc2626]">
                  Visit Us or Call Today
                </h2>
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                  Authorized BGE Dealer
                </span>
              </div>
              <dl className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="sr-only">Address</dt>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <dd>
                    <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#dc2626] transition-colors">
                      2601 S Hwy 183, Leander, TX 78641
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="sr-only">Phone</dt>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#dc2626" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  <dd><a href={PHONE_HREF} className="text-white font-semibold hover:text-[#dc2626] transition-colors">{PHONE}</a></dd>
                </div>
                <div className="flex gap-3">
                  <dt className="sr-only">Email</dt>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  <dd><a href="mailto:actionpropane@sbcglobal.net" className="text-white/80 hover:text-[#dc2626] transition-colors break-all">actionpropane@sbcglobal.net</a></dd>
                </div>
                <div className="border-t border-white/10 pt-3 mt-3">
                  <dt className="text-white/50 text-xs uppercase tracking-wide mb-2">Hours</dt>
                  <dd className="text-white/80 space-y-0.5">
                    <p>Mon – Fri: <span className="text-white font-medium">8:00 a.m. – 6:00 p.m.</span></p>
                    <p>Saturday: <span className="text-white font-medium">8:00 a.m. – 4:00 p.m.</span></p>
                    <p>Sunday: <span className="text-white/40">Closed</span></p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#dc2626] text-white py-8" aria-label="Company stats">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            s.href ? (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:opacity-90 transition-opacity"
                aria-label={`${s.value} ${s.label} — view on Google`}
              >
                <p className="text-3xl font-bold">{s.value}</p>
                <p className="text-red-100 text-sm mt-0.5 group-hover:underline">{s.label}</p>
              </a>
            ) : (
              <div key={s.label}>
                <p className="text-3xl font-bold">{s.value}</p>
                <p className="text-red-100 text-sm mt-0.5">{s.label}</p>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Customer reviews */}
      <TrustBar />

      {/* Services */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-[#1e293b] text-balance">
              Propane Services for Home &amp; Business in Austin &amp; Leander TX
            </h2>
            <p className="text-[#64748b] mt-3 max-w-2xl mx-auto">
              From residential propane delivery to commercial installations and walk-in cylinder refills,
              Action Propane covers all your propane needs across Central Texas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="bg-white rounded-xl border border-[#e2e8f0] p-6 hover:border-[#dc2626] hover:shadow-md transition-all group"
                aria-label={svc.title}
              >
                <div className="text-[#dc2626] mb-3 group-hover:scale-110 transition-transform inline-block">
                  {svc.icon}
                </div>
                <h3 className="font-semibold text-[#1e293b] mb-2 text-base">{svc.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{svc.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[#dc2626] text-sm font-medium">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-white" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">
              Why Action Propane
            </p>
            <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-5 text-balance">
              The Trusted Propane Supplier Austin &amp; Leander Families Rely On
            </h2>
            <p className="text-[#64748b] leading-relaxed mb-6">
              For more than 40 years, Action Propane, Inc. has delivered safe, reliable propane service
              to homes and businesses across Central Texas. As a family-owned company, we treat every
              customer the way we treat our neighbors — with honesty, speed, and care.
            </p>
            <ul className="space-y-3">
              {[
                'Over 40 years of experience in propane delivery and installation',
                'Walk-in refill station open Monday through Saturday',
                'Residential, commercial, and agricultural propane service',
                'Tanks, grills, heaters, and accessories sold in-store',
                'Serving Leander, Austin, Cedar Park, Georgetown, and more',
                'Licensed, insured, and fully compliant with Texas safety standards',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#1e293b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={PHONE_HREF}
              className="mt-8 inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-6 py-3 rounded transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call {PHONE} Today
            </a>
          </div>
          <div className="space-y-5">
            <div className="relative rounded-xl overflow-hidden h-56 w-full">
              <Image
                src="/propane-leander-tx.jpg"
                alt="Action Propane walk-in propane refill station in Leander, TX — 2601 S Hwy 183"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="bg-[#fef2f2] rounded-xl p-8 border border-[#fecaca]">
            <h3 className="font-bold text-[#1e293b] text-lg mb-5">Delivery Areas We Serve</h3>
            <div className="grid grid-cols-2 gap-2">
              {deliveryAreas.map((area) => (
                <Link
                  key={area}
                  href={`/delivery-areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-2 text-sm text-[#1e293b] hover:text-[#dc2626] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#dc2626" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  </svg>
                  {area}, TX
                </Link>
              ))}
            </div>
            <p className="text-[#64748b] text-xs mt-5 leading-relaxed">
              Not sure if we deliver to your area? Call us at{' '}
              <a href={PHONE_HREF} className="text-[#dc2626] font-medium">{PHONE}</a> or{' '}
              <Link href="/delivery-areas" className="text-[#dc2626] font-medium">view all service areas</Link>.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-16 bg-[#f8fafc]" aria-labelledby="blog-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">
              Propane Tips &amp; Guides
            </p>
            <h2 id="blog-heading" className="text-2xl md:text-3xl font-bold text-[#1e293b] text-balance">
              Helpful Propane Resources for Texas Homeowners &amp; Businesses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="bg-white rounded-xl border border-[#e2e8f0] p-6 hover:border-[#dc2626] hover:shadow-md transition-all group"
              >
                <span className="inline-block bg-[#fef2f2] text-[#dc2626] text-xs font-semibold px-2.5 py-1 rounded mb-3">
                  {post.category}
                </span>
                <h3 className="font-bold text-[#1e293b] text-base leading-snug mb-2 group-hover:text-[#dc2626] transition-colors text-pretty">
                  {post.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{post.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[#dc2626] text-sm font-medium">
                  Read article
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-[#dc2626] text-[#dc2626] hover:bg-[#dc2626] hover:text-white font-semibold px-6 py-3 rounded transition-colors text-sm"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Verified profiles */}
      <VerifiedProfiles />

      {/* Final CTA */}
      <section className="bg-[#b91c1c] text-white py-14" aria-labelledby="cta-heading">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold mb-4 text-balance">
            Need Propane Delivery in Austin or Leander TX?
          </h2>
          <p className="text-red-100 mb-8 leading-relaxed">
            Call Action Propane, Inc. today for fast, reliable propane delivery and refill service
            anywhere in Central Texas. Our team is ready Monday through Saturday.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white text-[#b91c1c] hover:bg-red-50 font-bold px-8 py-4 rounded transition-colors text-lg"
              aria-label={`Call Action Propane at ${PHONE}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded transition-colors"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
