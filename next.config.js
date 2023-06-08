/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "vi"],
    domain: 'hvxun.info',
    defaultLocale: "en",
  },
  trailingSlash: true,
};

module.exports = nextConfig;
