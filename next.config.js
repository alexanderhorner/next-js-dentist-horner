/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'de',
    
    domains: [
      {
        domain: 'www.dentisthorner.com',
        defaultLocale: 'en',
      }
    ],
  },
}

module.exports = nextConfig
