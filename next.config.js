/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['eltonfilho.com'],
    //path: `/franquias/_next/image`,
  },
}

module.exports = nextConfig
