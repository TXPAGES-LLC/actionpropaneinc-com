import Link from 'next/link'
import { PhoneIcon } from '@/components/ui/PhoneIcon'
import { PHONE, PHONE_HREF } from '@/lib/constants'

interface CTABannerProps {
  heading?: string
  subtext?: string
  showRequestService?: boolean
}

export function CTABanner({
  heading = 'Ready for Reliable Propane Delivery in Central Texas?',
  subtext = 'Call Action Propane, Inc. today. Serving Leander, Austin, Cedar Park, Georgetown, and surrounding areas for 40+ years.',
  showRequestService = true,
}: CTABannerProps) {
  return (
    <section
      className="bg-[#dc2626] text-white py-12 md:py-14"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2
          id="cta-heading"
          className="text-2xl md:text-3xl font-bold text-balance mb-3"
        >
          {heading}
        </h2>
        <p className="text-red-100 text-base leading-relaxed mb-7 max-w-2xl mx-auto">
          {subtext}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-white text-[#dc2626] font-bold px-6 py-3.5 rounded hover:bg-red-50 transition-colors text-base"
            aria-label={`Call Action Propane at ${PHONE}`}
          >
            <PhoneIcon className="text-[#dc2626]" />
            Call {PHONE}
          </a>
          {showRequestService && (
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-6 py-3.5 rounded transition-colors text-base"
            >
              Request Service
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
