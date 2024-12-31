/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...[
        "dims.apnews.com",
        "variety.com",
        "nbcsports.brightspotcdn.com",
        "ichef.bbci.co.uk",
        "www.washingtonpost.com",
        "images.axios.com",
        "media.cnn.com",
        "images2.minutemediacdn.com",
      ].map((hostname) => ({
        protocol: "https",
        hostname,
        port: "",
        pathname: "/**",
      })),
    ],
  },
};

export default nextConfig;
