import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MobileStickyBar } from '@/components/MobileStickyBar'
import { ScrollToTop } from '@/components/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(''),
  title: {
    default: 'Action Propane Inc | Propane Delivery & Refill in Leander & Austin TX',
    template: '%s | Action Propane Inc',
  },
  description:
    'Reliable propane delivery, tank installation, and refill services in Leander, Austin, and Central Texas. Family-owned since 1984. Call (512) 259-1196 today.',
  keywords: [
    'propane delivery Austin TX',
    'propane refill Leander TX',
    'residential propane delivery Texas',
    'commercial propane service Austin',
    'propane tank installation Leander',
    'propane supplier Central Texas',
    'emergency propane delivery Austin',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Action Propane Inc',
    title: 'Action Propane Inc | Propane Delivery & Refill in Leander & Austin TX',
    description:
      'Family-owned propane delivery, tank installation, and refill services in Leander, Austin, and Central Texas since 1984. Call (512) 259-1196.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Action Propane Inc — Propane Delivery & Refill in Leander & Austin TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Action Propane Inc | Propane Delivery & Refill in Leander & Austin TX',
    description:
      'Family-owned propane delivery, tank installation, and refill services in Leander, Austin, and Central Texas since 1984. Call (512) 259-1196.',
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '' },
}

export const viewport: Viewport = {
  themeColor: '#dc2626',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': '/#business',
  name: 'Action Propane, Inc.',
  description:
    'Reliable propane delivery and products with expert service in Leander and Austin TX. Family-owned business serving Central Texas propane needs since 1984.',
  url: '',
  telephone: '+15122591196',
  email: 'actionpropane@sbcglobal.net',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2601 S Hwy 183',
    addressLocality: 'Leander',
    addressRegion: 'TX',
    postalCode: '78641',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 30.5651, longitude: -97.8531 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '16:00',
    },
  ],
  priceRange: '$$',
  areaServed: [
    'Leander, TX', 'Austin, TX', 'Cedar Park, TX', 'Georgetown, TX',
    'Round Rock, TX', 'Liberty Hill, TX', 'Burnet, TX', 'Marble Falls, TX',
    'Pflugerville, TX', 'Hutto, TX', 'Taylor, TX', 'Bertram, TX',
    'Lakeway, TX', 'Bee Cave, TX', 'Dripping Springs, TX', 'Horseshoe Bay, TX',
    'Spicewood, TX', 'Lago Vista, TX', 'Jonestown, TX', 'Volente, TX',
    'Kingsland, TX', 'Llano, TX', 'Lampasas, TX', 'Burnet County, TX',
    'Williamson County, TX',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': '/#website',
  url: '',
  name: 'Action Propane Inc',
  publisher: { '@id': '/#business' },
}

/** Google Analytics 4 Measurement ID — set once here, used in both Script tags below */
const GA_ID: string = 'G-7Y6CJX2SDX'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#f8fafc]">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <ScrollToTop />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileStickyBar />
        {/* Google Analytics 4 — loaded once in root layout, fires on every page */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              send_page_view: true
            });
          `}
        </Script>
      </body>
    </html>
  )
}
