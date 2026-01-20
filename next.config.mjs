import fs from 'fs';
import path from 'path';

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
let useCustomDomain = false;

if (isProd) {
  // Check for CNAME file in public directory to auto-detect custom domain
  try {
    useCustomDomain = fs.existsSync(path.join(process.cwd(), 'public', 'CNAME'));
  } catch (e) {
    useCustomDomain = false;
  }
}

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
  basePath: isProd ? (useCustomDomain ? '' : `/${repoName}`) : '',
  assetPrefix: isProd ? (useCustomDomain ? '' : `/${repoName}/`) : '',
}

export default nextConfig
