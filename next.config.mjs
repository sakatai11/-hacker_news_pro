/** @type {import('next').NextConfig} */
const nextConfig = {
  runtime: 'edge',
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
