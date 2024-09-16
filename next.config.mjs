/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve.alias.canvas = false;

    return config;
  },
  transpilePackages: ['next-mdx-remote'],
  basePath: '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
