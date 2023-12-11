/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'image.tmdb.org',
        protocol: 'https',
      },
      {
        hostname: 'api.themoviedb.org',
        protocol: 'https',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  basePath: '/serie',
  assetPrefix: '/serie',
}

module.exports = nextConfig
