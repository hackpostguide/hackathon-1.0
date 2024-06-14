/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/a/**',
          },
          {
            protocol: 'https',
            hostname: 'hackathon.hackpost.guide',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
