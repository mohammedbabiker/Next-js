/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    domains: ["images.pexels.com", "i.dummyjson.com", "flaticon.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: ["images.pexels.com", "i.dummyjson.com", "flaticon.com"],
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  output: "export",
};

module.exports = nextConfig;
