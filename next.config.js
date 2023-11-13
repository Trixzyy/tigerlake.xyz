/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/Trixzyy',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/TrixzyDev',
        permanent: true,
      }.
      {
        source: '/discord',
        destination: 'https://discord.com/users/992171799536218142',
        permanent: true,
      }.
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http.cat',
      },
    ],
  },
}
