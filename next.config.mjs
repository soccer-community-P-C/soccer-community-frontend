/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    // return {
    //   fallback: [
    //     {
    //       source: '/:path*',
    //       destination: `${process.env.API_URL}/:path*`,
    //     },
    //   ],
    // };

    return process.env.NODE_ENV === 'development'
      ? {
          fallback: [
            {
              source: '/:path*',
              destination: `${process.env.API_URL}/:path*`,
            },
          ],
        }
      : [];
  },
};

export default nextConfig;
