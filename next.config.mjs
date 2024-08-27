/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_DATA_API_KEY: process.env.NEXT_PUBLIC_DATA_API_KEY,
  },
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '',
    //   },
    // ],
  },
};

export default nextConfig;
