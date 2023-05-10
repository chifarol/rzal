/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "mysites.org.ng"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
};

module.exports = nextConfig;
