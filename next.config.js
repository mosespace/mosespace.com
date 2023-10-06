const nextConfig = {};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/free-photo/**", // Update this to match your image URLs
      },
    ],
  },
};
module.exports = nextConfig;
