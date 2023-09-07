/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "i.dummyjson.com", "flaticon.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};
module.exports = {
  output: "standalone",
};

module.exports = nextConfig;
