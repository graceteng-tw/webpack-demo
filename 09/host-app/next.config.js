const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'demo-host',
        filename: 'static/chunks/notused.js',
        remotes: {
          components: `demo-components@http://localhost:4568/_next/static/chunks/hahaha.js`,
        },
    }))

    // Important: return the modified config
    return config
  },
}

module.exports = nextConfig
