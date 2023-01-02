
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
  images: {
    domains: [
      "cdn.discordapp.com",
      "us-east-1.tixte.net",
      "raw.githubusercontent.com",
        "lh3.googleusercontent.com",
    ],
  },
  dest: "public",
  register: true,
  skipWaiting: true,
})
