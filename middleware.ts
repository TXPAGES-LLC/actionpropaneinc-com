import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'actionpropaneinc.com'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const host = request.headers.get('host') ?? ''
  const proto = request.headers.get('x-forwarded-proto') ?? url.protocol.replace(':', '')

  const isWww = host.startsWith('www.')
  const isHttp = proto === 'http'

  // Redirect www → non-www or http → https (or both at once)
  if (isWww || isHttp) {
    url.protocol = 'https:'
    url.host = CANONICAL_HOST
    return NextResponse.redirect(url, { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  // Run on all routes except Next.js internals and static assets
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|eot)$).*)',
  ],
}
