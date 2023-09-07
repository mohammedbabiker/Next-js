/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    domains: ["images.pexels.com", "i.dummyjson.com", "flaticon.com"],
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  output: "export",
};

module.exports = nextConfig;
