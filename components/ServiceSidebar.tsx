import Link from 'next/link'
import { PhoneIcon } from '@/components/ui/PhoneIcon'
import { PHONE, PHONE_HREF, EMAIL_HREF, MAPS_HREF, SERVICES_NAV } from '@/lib/constants'

interface ServiceSidebarProps {
  currentHref?: string
}

export function ServiceSidebar({ currentHref }: ServiceSidebarProps) {
  return (
    <aside className="space-y-6 order-first lg:order-none" aria-label="Service navigation and contact">
      {/* Mobile-only inline CTA — appears above article on small screens */}
      <div className="lg:hidden flex gap-3 bg-[#0f172a] rounded-xl p-4">
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-4 py-3 rounded transition-colors text-sm"
          aria-label={`Call Action Propane at ${PHONE}`}
        >
          <PhoneIcon />
          Call {PHONE}
        </a>
        <a
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white font-semibold px-4 py-3 rounded transition-colors text-sm"
        >
          Request Service
        </a>
      </div>

      {/* Call CTA — desktop sidebar */}
      <div className="hidden lg:block bg-[#0f172a] text-white rounded-xl p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#dc2626] mb-2">
          Ready to Get Started?
        </p>
        <p className="text-white/70 text-sm leading-relaxed mb-4">
          Call us today for a free estimate or to schedule propane delivery in Central Texas.
        </p>
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-4 py-3 rounded transition-colors text-sm w-full"
          aria-label={`Call Action Propane at ${PHONE}`}
        >
          <PhoneIcon />
          Call {PHONE}
        </a>
        <a
          href="/contact"
          className="mt-2 flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-4 py-2.5 rounded transition-colors text-sm w-full"
        >
          Request Service
        </a>
        <a
          href={MAPS_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center justify-center gap-2 text-white/60 hover:text-white text-xs transition-colors"
          aria-label="Get directions to our Leander TX storefront"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          Get Directions to Our Store
        </a>
      </div>

      {/* Services list */}
      <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b] mb-3">
          Our Services
        </p>
        <ul className="space-y-1">
          {SERVICES_NAV.map((svc) => {
            const active = currentHref === svc.href
            return (
              <li key={svc.href}>
                <Link
                  href={svc.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${
                    active
                      ? 'bg-[#fef2f2] text-[#dc2626] font-semibold'
                      : 'text-[#1e293b] hover:bg-[#f8fafc] hover:text-[#dc2626]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  {svc.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Hours card */}
      <div className="bg-[#fef2f2] rounded-xl border border-[#fecaca] p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#dc2626] mb-3">
          Store Hours
        </p>
        <dl className="text-sm space-y-1.5 text-[#1e293b]">
          <div className="flex justify-between">
            <dt className="text-[#64748b]">Mon – Fri</dt>
            <dd className="font-medium">8am – 6pm</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[#64748b]">Saturday</dt>
            <dd className="font-medium">8am – 4pm</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[#64748b]">Sunday</dt>
            <dd className="text-[#94a3b8]">Closed</dd>
          </div>
        </dl>
        <a
          href={EMAIL_HREF}
          className="mt-4 block text-xs text-[#dc2626] hover:text-[#b91c1c] transition-colors break-all"
        >
          actionpropane@sbcglobal.net
        </a>
      </div>

      {/* Trust badge */}
      <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
        <ul className="space-y-2.5">
          {[
            'Family-owned since 1984',
            'Licensed & insured',
            'Texas Railroad Commission compliant',
            'Serving 25+ Central Texas cities',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-[#1e293b]">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
