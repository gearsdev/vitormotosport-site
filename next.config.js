/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vitormotosport.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vitormotosport-dev.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

module.exports = nextConfig;
