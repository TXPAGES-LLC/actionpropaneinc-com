import { DELIVERY_CITIES } from '@/lib/constants'

export const dynamic = 'force-static'

export function GET() {
  const base = ''

  const cityLines = DELIVERY_CITIES.map(
    ({ name, slug }) => `- [Propane Service in ${name}, TX](${base}/delivery-areas/${slug})`
  ).join('\n')

  const body = `# Action Propane, Inc.

> Residential and commercial propane delivery, tank installation, cylinder refills, forklift cylinder exchange, and system service in Central Texas. Located in Leander, TX. Serving the greater Austin metro and Hill Country since the early 1990s.

## Key pages

- [Home](${base})
- [Services](${base}/services)
- [Residential Propane Delivery](${base}/services/residential-propane-delivery)
- [Commercial Propane Delivery](${base}/services/commercial-propane-delivery)
- [Propane Tank Installation](${base}/services/propane-tank-installation)
- [Cylinder & RV Refill Station](${base}/services/propane-cylinder-rv-refill-station)
- [Forklift Cylinder Exchange](${base}/services/forklift-propane-cylinder-exchange)
- [System Service & Repair](${base}/services/propane-system-service-repair)
- [Delivery Areas](${base}/delivery-areas)
- [Products](${base}/products/storefront)
- [About](${base}/about)
- [Contact](${base}/contact)
- [Blog](${base}/blog)

## Delivery areas

${cityLines}

## Contact

- Phone: 512-259-1196
- Email: actionpropane@sbcglobal.net
- Address: 2601 S Hwy 183, Leander, TX 78641
- Hours: Mon–Fri 8am–6pm, Sat 8am–4pm, Sun Closed
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  })
}
