/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
  },
  trailingSlash: true,
};

module.exports = nextConfig;
