/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return process.env.NODE_ENV === 'develop'
      ? {
          fallback: [
            {
              source: '/:path*',
              destination: `${process.env.API_URL}/api/:path*`,
            },
          ],
        }
      : [];
  },
};

export default nextConfig;
