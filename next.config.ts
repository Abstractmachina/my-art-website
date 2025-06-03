import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
                protocol: 'https',
                hostname: "taos-pullzone.b-cdn.net",
                port: '',
                pathname: '/media/**',
            },
    ]
  }
};

export default nextConfig;
