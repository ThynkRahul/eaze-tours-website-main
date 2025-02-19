/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
    async redirects() {
        return [
            // Basic permanent redirect
            {
                source: '/packages/wildlife-tours',
                destination: '/packages/wildlife-safari-tour-package-india',
                permanent: true,
            },
            
        ]
    },
}
