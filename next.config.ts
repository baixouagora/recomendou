import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "m.media-amazon.com", pathname: "/**" },
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com", pathname: "/**" },
    ],
  },
  async redirects() {
    return [
      // URLs antigas com mês/ano migram pras evergreen
      {
        source: "/10-melhores-drones-maio-2026",
        destination: "/10-melhores-drones",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
