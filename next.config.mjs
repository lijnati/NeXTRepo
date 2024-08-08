/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'websidia.tech',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
