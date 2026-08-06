import Link from 'next/link'
import { PHONE_HREF, MAPS_HREF } from '@/lib/constants'

export function MobileStickyBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex bg-[#0f172a] border-t border-white/10"
      aria-label="Quick contact actions"
    >
      {/* Call — primary, widest */}
      <a
        href={PHONE_HREF}
        className="flex-[2] flex flex-col items-center justify-center gap-0.5 py-3 bg-[#dc2626] active:bg-[#b91c1c] text-white font-bold text-xs transition-colors"
        aria-label="Call Action Propane at 512-259-1196"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
        </svg>
        <span>512-259-1196</span>
      </a>

      {/* Request Service */}
      <Link
        href="/contact"
        className="flex-[1.5] flex flex-col items-center justify-center gap-0.5 py-3 bg-[#b91c1c] active:bg-[#991b1b] text-white font-semibold text-xs transition-colors"
        aria-label="Request propane service"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 12h6M9 16h4" />
        </svg>
        <span>Request</span>
      </Link>

      {/* Directions */}
      <a
        href={MAPS_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3 bg-[#1e293b] active:bg-[#334155] text-white/80 font-semibold text-xs transition-colors"
        aria-label="Get directions to Action Propane"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
        <span>Directions</span>
      </a>
    </div>
  )
}
