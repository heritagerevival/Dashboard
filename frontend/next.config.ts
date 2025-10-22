import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { 
    ignoreDuringBuilds: true 
  },
  typescript: { 
    ignoreBuildErrors: true 
  },
  experimental: {
    globalNotFound: true,
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
