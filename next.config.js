/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'master.daplie.c66.me',
          },
        ],
        destination: 'https://daplie.com',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 