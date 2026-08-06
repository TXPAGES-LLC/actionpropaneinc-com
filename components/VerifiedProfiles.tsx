const profiles = [
  {
    label: 'Google Business',
    description: 'Reviews & directions',
    href: 'https://maps.google.com/?cid=11890918512830898251',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
  },
  {
    label: 'Yelp',
    description: 'Customer reviews',
    href: 'https://www.yelp.com/biz/action-propane-leander-3',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path fill="#D32323" d="M12.53 9.16l-3.3-.96c-.42-.12-.65.37-.38.68l2.12 2.5c.27.31.73.16.82-.23l.36-1.53c.09-.4-.22-.36-.22-.36l.6-.1zM8.5 11.5c.08-.41-.28-.65-.63-.47l-3.03 1.57c-.38.2-.3.75.12.82l3.18.54c.42.07.7-.32.58-.73l-.22-.73zM10.5 14.07l-1.9 2.66c-.24.34.02.8.43.75l3.2-.5c.41-.06.56-.55.27-.82l-1.3-2.16c-.28-.47-.7-.13-.7.07zM13.5 13.5c-.29.29-.12.76.27.82l3.2.5c.41.05.67-.41.43-.75l-1.9-2.66c-.28-.4-.7-.08-.7.07l-.3 2zM14.07 10.5l.36 1.53c.09.39.55.54.82.23l2.12-2.5c.27-.31.04-.8-.38-.68l-3.3.96s-.31-.04-.22.36l.6.1z"/>
        <path fill="#D32323" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path fill="#fff" d="M12.53 9.16l-.6.1s.31-.04.22.36l-.36 1.53c-.09.39-.55.54-.82.23l-2.12-2.5c-.27-.31-.04-.8.38-.68l3.3.96zM8.5 11.5l.22.73c.12.41-.16.8-.58.73l-3.18-.54c-.42-.07-.5-.62-.12-.82l3.03-1.57c.35-.18.71.06.63.47zM10.5 14.07c0-.2.42-.54.7-.07l1.3 2.16c.29.27.14.76-.27.82l-3.2.5c-.41.05-.67-.41-.43-.75l1.9-2.66zM13.5 13.5l.3-2c0-.15.42-.47.7-.07l1.9 2.66c.24.34-.02.8-.43.75l-3.2-.5c-.39-.06-.56-.53-.27-.82zM14.07 10.5l-.6-.1s.31.04.22-.36l-.36-1.53c-.09-.39.27-.65.63-.47l3.3-.96c.42.12.65.37.38.68l-2.12 2.5c-.27.31-.73.16-.82-.23l-.36-1.53c.09-.4-.22-.36-.22-.36l.6-.1z"/>
      </svg>
    ),
  },
  {
    label: 'Yellow Pages',
    description: 'Business listing',
    href: 'https://www.yellowpages.com/leander-tx/mip/action-propane-inc-496513124',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#FFD700"/>
        <text x="12" y="17" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a1a1a" fontFamily="serif">YP</text>
      </svg>
    ),
  },
  {
    label: 'Trusted Local Directory',
    description: 'Verified listing',
    href: 'https://trustedlocaldirectory.com/listing/action-propane-inc.html',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    description: 'Follow us',
    href: 'https://www.facebook.com/ActionPropane',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path fill="#1877F2" d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
]

interface VerifiedProfilesProps {
  compact?: boolean
}

export function VerifiedProfiles({ compact = false }: VerifiedProfilesProps) {
  if (compact) {
    return (
      <section aria-labelledby="profiles-compact-heading" className="bg-white rounded-xl border border-[#e2e8f0] p-6">
        <h2 id="profiles-compact-heading" className="text-base font-bold text-[#1e293b] mb-1">
          Find Us Online
        </h2>
        <p className="text-xs text-[#64748b] mb-4">Verified business profiles across trusted directories.</p>
        <ul className="space-y-2.5">
          {profiles.map((p) => (
            <li key={p.label}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#1e293b] hover:text-[#dc2626] transition-colors group"
                aria-label={`View Action Propane on ${p.label}`}
              >
                <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded bg-[#f8fafc] border border-[#e2e8f0] group-hover:border-[#fecaca] transition-colors">
                  {p.icon}
                </span>
                <span className="font-medium">{p.label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="ml-auto shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </section>
    )
  }

  return (
    <section className="py-14 bg-[#f8fafc]" aria-labelledby="profiles-heading">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-2">Transparency</p>
          <h2 id="profiles-heading" className="text-2xl md:text-3xl font-bold text-[#1e293b] text-balance">
            Find Us on Trusted Platforms
          </h2>
          <p className="text-[#64748b] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Action Propane, Inc. maintains verified profiles on the platforms below. These are the only
            official listings for our business — no third-party resellers or unaffiliated directories.
          </p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" role="list">
          {profiles.map((p) => (
            <li key={p.label}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-5 bg-white rounded-xl border border-[#e2e8f0] hover:border-[#fecaca] hover:shadow-sm transition-all text-center group"
                aria-label={`View Action Propane on ${p.label} — opens in a new tab`}
              >
                <span className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#f8fafc] border border-[#e2e8f0] group-hover:border-[#fecaca] transition-colors shrink-0">
                  {p.icon}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#1e293b] group-hover:text-[#dc2626] transition-colors leading-tight">
                    {p.label}
                  </span>
                  <span className="block text-xs text-[#94a3b8] mt-0.5">{p.description}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
