/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        })
    
        return config
      },
      transpilePackages: ['next-mdx-remote'],
      basePath: "/tall_guy",
      output: "export",
};

export default nextConfig;
