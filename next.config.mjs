/** @type {import('next').NextConfig} */
import path from 'path'

const nextConfig = {
  output: 'standalone',
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(process.cwd()),
    };
    return config;
  },
};

export default nextConfig;
