import Link from 'next/link'
import Image from 'next/image'
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, MAPS_HREF, SERVICES_NAV, PRODUCTS_NAV } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-[#f8fafc] border-t border-[#e2e8f0]" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand & NAP */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" aria-label="Action Propane Inc home" className="inline-block mb-4">
            <Image
              src="/action-propane-inc-logo-735w.png"
              alt="Action Propane Inc"
              width={200}
              height={40}
              className="h-9 w-auto"
            />
          </Link>
          <p className="text-[#64748b] text-sm leading-relaxed mb-5">
            Independent, family-owned propane provider serving Leander, Austin, and
            Central Texas since 1984.
          </p>
          <address className="not-italic text-sm text-[#64748b] space-y-2">
            <p>
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dc2626] transition-colors"
              >
                2601 S Hwy 183, Leander, TX 78641
              </a>
            </p>
            <p>
              <a href={PHONE_HREF} className="hover:text-[#dc2626] transition-colors font-medium text-[#1e293b]">
                {PHONE}
              </a>
            </p>
            <p>
              <a href={EMAIL_HREF} className="hover:text-[#dc2626] transition-colors break-all">
                {EMAIL}
              </a>
            </p>
          </address>

          <dl className="mt-5 text-sm text-[#64748b] space-y-1 border-t border-[#e2e8f0] pt-5">
            <div className="flex justify-between gap-3">
              <dt>Mon–Fri</dt>
              <dd className="text-[#1e293b] font-medium">8am – 6pm</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Saturday</dt>
              <dd className="text-[#1e293b] font-medium">8am – 4pm</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Sunday</dt>
              <dd className="text-[#94a3b8]">Closed</dd>
            </div>
          </dl>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-[#1e293b] mb-4 text-sm uppercase tracking-wide">Services</h3>
          <ul className="space-y-2.5 text-sm text-[#64748b]">
            {SERVICES_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-[#dc2626] transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-[#1e293b] mb-4 text-sm uppercase tracking-wide">Products</h3>
          <ul className="space-y-2.5 text-sm text-[#64748b]">
            {PRODUCTS_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-[#dc2626] transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-[#1e293b] mb-4 text-sm uppercase tracking-wide">Company</h3>
          <ul className="space-y-2.5 text-sm text-[#64748b]">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Delivery Areas', href: '/delivery-areas' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#dc2626] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-5 border-t border-[#e2e8f0]">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold text-sm px-4 py-2.5 rounded transition-colors w-full justify-center"
              aria-label={`Call Action Propane at ${PHONE}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              {PHONE}
            </a>
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center gap-1.5 text-sm text-[#64748b] hover:text-[#dc2626] transition-colors w-full justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-[#e2e8f0] py-4 px-4 text-center text-xs text-[#94a3b8]">
        &copy; {new Date().getFullYear()} Action Propane, Inc. All rights reserved. Leander, TX 78641.{' '}
        Powered by{' '}
        <a
          href="https://txpages.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#dc2626] transition-colors"
        >
          TXPAGES
        </a>.
      </div>
    </footer>
  )
}
