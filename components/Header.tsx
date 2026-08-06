'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { PHONE, PHONE_HREF, SERVICES_NAV, PRODUCTS_NAV } from '@/lib/constants'

const topNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Delivery Areas', href: '/delivery-areas' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

function ChevronDown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  const closeAll = () => {
    setMenuOpen(false)
    setMobileServicesOpen(false)
    setMobileProductsOpen(false)
  }

  return (
    <header className="bg-white border-b border-[#e2e8f0] sticky top-0 z-40 shadow-sm">
      {/* Top utility bar */}
      <div className="bg-[#dc2626] text-white py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <span className="hidden sm:block text-white/90 text-xs">
            Mon–Fri 8am–6pm &nbsp;|&nbsp; Sat 8am–4pm &nbsp;|&nbsp; 2601 S Hwy 183, Leander, TX 78641
          </span>
          <a
            href={PHONE_HREF}
            className="ml-auto flex items-center gap-1.5 font-semibold text-white text-sm hover:text-white/80 transition-colors"
            aria-label={`Call Action Propane at ${PHONE}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            {PHONE}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" aria-label="Action Propane Inc — home" className="shrink-0">
          <Image
            src="/action-propane-inc-logo-735w.png"
            alt="Action Propane Inc"
            width={220}
            height={44}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {topNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-[#374151] hover:text-[#dc2626] rounded transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#374151] hover:text-[#dc2626] rounded transition-colors"
            >
              Services <ChevronDown />
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-[#e2e8f0] py-2 min-w-[260px] z-50">
                <Link
                  href="/services"
                  className="block px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#64748b] hover:bg-[#f8fafc]"
                >
                  All Services
                </Link>
                {SERVICES_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-[#1e293b] hover:bg-[#fef2f2] hover:text-[#dc2626] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products/storefront"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#374151] hover:text-[#dc2626] rounded transition-colors"
            >
              Products <ChevronDown />
            </Link>
            {productsOpen && (
              <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-[#e2e8f0] py-2 min-w-[260px] z-50">
                {PRODUCTS_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-[#1e293b] hover:bg-[#fef2f2] hover:text-[#dc2626] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href={PHONE_HREF}
            className="ml-2 inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold text-sm px-4 py-2 rounded transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Call {PHONE}
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold text-sm px-3 py-2 rounded transition-colors"
            aria-label={`Call ${PHONE}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Call Now
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="p-2 text-[#374151] hover:text-[#dc2626] transition-colors"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="lg:hidden bg-[#f8fafc] border-t border-[#e2e8f0] px-4 pb-4 max-h-[80vh] overflow-y-auto"
          aria-label="Mobile navigation"
        >
          {topNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeAll}
              className="block py-3 text-[#374151] hover:text-[#dc2626] font-medium border-b border-[#e2e8f0] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Services accordion */}
          <div className="border-b border-[#e2e8f0]">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-3 text-[#374151] hover:text-[#dc2626] font-medium transition-colors"
              aria-expanded={mobileServicesOpen}
            >
              Services
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pb-2 space-y-0.5 pl-3">
                <Link href="/services" onClick={closeAll} className="block py-2 text-sm text-[#dc2626] font-semibold">
                  All Services
                </Link>
                {SERVICES_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    className="block py-2 text-sm text-[#374151] hover:text-[#dc2626] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Products accordion */}
          <div className="border-b border-[#e2e8f0]">
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex items-center justify-between py-3 text-[#374151] hover:text-[#dc2626] font-medium transition-colors"
              aria-expanded={mobileProductsOpen}
            >
              Products
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className={`transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileProductsOpen && (
              <div className="pb-2 space-y-0.5 pl-3">
                {PRODUCTS_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    className="block py-2 text-sm text-[#374151] hover:text-[#dc2626] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  )
}
