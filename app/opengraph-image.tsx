import { ImageResponse } from 'next/og'

export const alt = 'Action Propane Inc — Propane Delivery & Refill in Leander & Austin TX'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          fontFamily: 'sans-serif',
          backgroundColor: '#0f172a',
          overflow: 'hidden',
        }}
      >
        {/* Background: storefront photo fills the right ~60% */}
        <img
          src="https://actionpropaneinc.com/front-of-building.jpg"
          alt=""
          width={780}
          height={630}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '65%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Dark gradient overlay left-to-right */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, #0f172a 38%, rgba(15,23,42,0.80) 58%, rgba(15,23,42,0.15) 100%)',
          }}
        />

        {/* Red left accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 8,
            height: '100%',
            backgroundColor: '#dc2626',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 64px',
            height: '100%',
            maxWidth: 640,
          }}
        >
          {/* "A" lettermark badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: 14,
              backgroundColor: '#dc2626',
              marginBottom: 28,
            }}
          >
            <span style={{ color: 'white', fontSize: 36, fontWeight: 900, lineHeight: 1 }}>
              A
            </span>
          </div>

          {/* Business name */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              marginBottom: 20,
            }}
          >
            <span style={{ color: '#dc2626', fontSize: 22, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' }}>
              Action Propane Inc
            </span>
            <span style={{ color: 'white', fontSize: 42, fontWeight: 800, lineHeight: 1.15 }}>
              Propane Delivery &amp; Refill
            </span>
            <span style={{ color: 'white', fontSize: 42, fontWeight: 800, lineHeight: 1.15 }}>
              in Leander &amp; Austin TX
            </span>
          </div>

          {/* Tagline */}
          <span style={{ color: '#94a3b8', fontSize: 20, lineHeight: 1.5, maxWidth: 480 }}>
            Family-owned since 1984. Residential &amp; commercial propane delivery, tank installation, and on-site refill.
          </span>

          {/* Phone pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginTop: 32,
              backgroundColor: '#dc2626',
              borderRadius: 8,
              padding: '12px 24px',
              width: 'fit-content',
            }}
          >
            <span style={{ color: 'white', fontSize: 22, fontWeight: 700 }}>
              (512) 259-1196
            </span>
          </div>

          {/* URL */}
          <span style={{ color: '#475569', fontSize: 15, marginTop: 20 }}>
            actionpropaneinc.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
