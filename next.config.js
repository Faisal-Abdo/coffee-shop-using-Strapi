/** @type {import('next').NextConfig} */
const nextConfig = {
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
