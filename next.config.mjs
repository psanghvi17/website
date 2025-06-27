/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'website';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // For GitHub Pages, the basePath should match your repository name
  // If your repo is named "my-website", set basePath to "/my-website"
  // If you want to deploy to username.github.io, set basePath to ""
  // For custom domains, set basePath to ""
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
}

export default nextConfig
