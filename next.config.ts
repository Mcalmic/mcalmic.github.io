/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/mcalmic.github.io', 
  images: {
    unoptimized: true,
  },
};
module.exports = nextConfig;