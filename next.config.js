/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Origin',
    value: 'https://reelsmunkey.com'
  }
]
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    minimumCacheTTL: 86400,
  },
  async headers() {
    return [
      {  
        // This doesn't work for 'Cache-Control' key (works for others though):
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=60'
          },
          {
            key: 'Origin',
            value: 'https://reelsmunkey.com'
          }
        ],
      }
    ]
  }
}
