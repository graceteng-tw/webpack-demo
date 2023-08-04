const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'demo-components',
        filename: 'static/chunks/hahaha.js',
        exposes: {
          './goose': './src/goose/goose.js',
          './card': './src/card/index.js',
        },
    }));

    // Important: return the modified config
    return config
  },
}

module.exports = nextConfig
