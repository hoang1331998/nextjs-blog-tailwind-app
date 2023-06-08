/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
  },
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/[locale]/cv': { page: '/[locale]/cv' }, // correct
    }
  },
};

module.exports = nextConfig;
