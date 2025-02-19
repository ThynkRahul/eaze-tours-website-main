/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
    async redirects() {
        return [
            
            {
                source: '/packages/wildlife-tours',
                destination: '/packages/wildlife-safari-tour-package-india',
                permanent: true,
            },
          
          {
                source: '/packages/wildlife-tours',
                destination: '/packages/wildlife-safari-tour-package-india',
                permanent: true,
            },
          {
                source: '/packages/tribals-tours',
                destination: '/packages/gujarat-tribal-tour-package-india',
                permanent: true,
            },
          {
                source: '/packages/luxury-trains',
                destination: '/packages',
                permanent: true,
            },
          {
                source: '/packages/luxury-trains',
                destination: '/packages',
                permanent: true,
            },
          {
                source: '/packages/[packageId]',
                destination: '/packages',
                permanent: true,
            },
            
        ]
    },
}
