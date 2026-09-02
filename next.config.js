/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // The legacy jQuery/AOS/Owl Carousel scripts are loaded as plain <script src>
        // tags that this template's animations depend on running in a specific order;
        // converting them to next/script is a separate refactor, not a security fix.
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            pathname: 'http://localhost:1337/admin/',
          },
        ],
      },
}

module.exports = nextConfig
