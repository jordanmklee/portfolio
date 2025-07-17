/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

images: {
  unoptimized: true
}

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
