/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/premier/schedule/match',
        destination: '/premier/schedule',
        permanent: true, // or false if it's a temporary redirect
      },
      {
        source: '/laliga/schedule/match',
        destination: '/laliga/schedule',
        permanent: true, // or false if it's a temporary redirect
      },
    ];
  },
  async rewrites() {
    // return process.env.NODE_ENV === 'development'
    //   ? {
    //       fallback: [
    //         {
    //           source: '/api/:path*',
    //           destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
    //         },
    //       ],
    //     }
    //   : [];

    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
        },
        {
          source: '/oauth2',
          destination: `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/google`,
        },
      ],
    };
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'crests.football-data.org',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'kickoff-pc-s3.s3.ap-northeast-2.amazonaws.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
