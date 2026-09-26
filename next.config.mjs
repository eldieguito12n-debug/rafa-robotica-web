/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect ALL vercel.app URLs to the real domain permanently (301)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'rafa-robotica.vercel.app' }],
        destination: 'https://www.rafarobotica.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'rafa-robotica-eldieguito12n-debugs-projects.vercel.app' }],
        destination: 'https://www.rafarobotica.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
