// next.config.js

module.exports = {
  async redirects() {
    return [
      {
        source: '/download',
        destination: 'https://drive.usercontent.google.com/download?id=10NwFQ6_I-Vehvb_EsLpv9NYtvnWMgvF7&export=download&authuser=0',
        permanent: false,
        basePath: false
      },
    ]
  },
    images: {
      domains: ['images.unsplash.com','aceternity.com','assets.aceternity.com'],
    },
  }
  