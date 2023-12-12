/** @type {import('next').NextConfig} */

const { MOVIE_URL, SERIES_URL } = process.env
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
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: '/movie',
        destination: `${MOVIE_URL}/movie`,
      },
      {
        source: '/movie/:path*',
        destination: `${MOVIE_URL}/movie/:path*`,
      },
      {
        source: '/series',
        destination: `${SERIES_URL}/series`,
      },
      {
        source: '/series/:path*',
        destination: `${SERIES_URL}/series/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
