/** @type {import('next').NextConfig} */

const { MOVIE_URL, SERIE_URL } = process.env
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
        source: '/serie',
        destination: `${SERIE_URL}/serie`,
      },
      {
        source: '/serie/:path*',
        destination: `${SERIE_URL}/serie/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
