/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If you use images from next/image, they will not be optimized 
  // without a server. Disable it for static export:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
