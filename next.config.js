/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_HOST: process.env.BACKEND_HOST
  },
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        // for webpack 5 use
        and: [/\.(js|ts)x?$/]
      },

      use: ['@svgr/webpack']
    });

    return config;
  }
};

module.exports = nextConfig;
