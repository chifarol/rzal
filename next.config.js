/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "https://mysites.org.ng"],
  },
};

module.exports = nextConfig;
