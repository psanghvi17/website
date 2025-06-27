# GitHub Pages Deployment Guide

This guide will help you deploy your Next.js website to GitHub Pages.

## 🚀 Quick Setup

### Option 1: Deploy to `username.github.io` (Recommended)

If you want your site to be available at `https://yourusername.github.io`:

1. **Create a repository named `yourusername.github.io`**
   - Replace `yourusername` with your actual GitHub username
   - This must be a public repository

2. **Push your code to the repository**
   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **The GitHub Actions workflow will automatically deploy your site**

### Option 2: Deploy to a custom repository

If you want to deploy from a repository with a different name (e.g., `my-website`):

1. **Update the GitHub Actions workflow**
   - Edit `.github/workflows/deploy.yml`
   - Change `BASE_PATH: ""` to `BASE_PATH: "/my-website"`

2. **Push your code and the site will be available at `https://yourusername.github.io/my-website`**

## ⚙️ Configuration

### Base Path Configuration

The `BASE_PATH` environment variable in the GitHub Actions workflow determines the URL path:

- **For `username.github.io` repositories**: `BASE_PATH: ""`
- **For custom repositories**: `BASE_PATH: "/repository-name"`

### Manual Deployment

If you want to test the build locally:

```bash
# For username.github.io
npm run build:gh-pages

# For custom repository (replace "my-website" with your repo name)
NODE_ENV=production BASE_PATH="/my-website" npm run build
```

## 🔧 GitHub Repository Settings

1. **Go to your repository on GitHub**
2. **Navigate to Settings → Pages**
3. **Under "Source", select "GitHub Actions"**
4. **The workflow will automatically handle deployments**

## 📁 Build Output

After a successful build, your static files will be in the `out/` directory:
- `out/index.html` - Your main page
- `out/_next/` - Static assets
- All other static files

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. **Add a `CNAME` file to the `public/` directory**
   ```
   yourdomain.com
   ```

2. **Configure your domain's DNS settings**
   - Add a CNAME record pointing to `yourusername.github.io`

3. **Enable custom domain in GitHub repository settings**

## 🔍 Troubleshooting

### CSS Not Loading (Plain Text Appearance)

If your site appears as plain text without styling:

1. **Check the repository name:**
   - For `username.github.io` repositories: Use `BASE_PATH=""`
   - For custom repositories: Use `BASE_PATH="/repository-name"`

2. **Test locally with correct BASE_PATH:**
   ```bash
   # For username.github.io repositories
   npm run build:gh-pages
   
   # For custom repositories (replace "website" with your repo name)
   npm run build:gh-pages-custom
   ```

3. **Check browser developer tools:**
   - Open browser dev tools (F12)
   - Go to Network tab
   - Reload the page
   - Look for failed CSS requests (404 errors)
   - Check the actual URLs being requested

4. **Verify GitHub Actions logs:**
   - Go to your repository → Actions
   - Check the latest deployment
   - Look for any build errors or warnings

### Common Issues

1. **404 Errors**: Check that `BASE_PATH` is set correctly
2. **Assets not loading**: Ensure `assetPrefix` is configured properly
3. **Build failures**: Check the GitHub Actions logs for errors

### Local Testing

To test your site locally after building:

```bash
# Install a simple HTTP server
npm install -g serve

# Serve the built files
serve out/
```

## 📝 Notes

- **Static Export Only**: This setup only works for static sites. Server-side features won't work.
- **No API Routes**: GitHub Pages doesn't support API routes or server-side rendering.
- **Image Optimization**: Images are set to `unoptimized: true` for static export compatibility.

## 🎉 Success!

Once deployed, your site will be available at:
- `https://yourusername.github.io` (for username.github.io repositories)
- `https://yourusername.github.io/repository-name` (for custom repositories)

The GitHub Actions workflow will automatically rebuild and deploy your site whenever you push changes to the main branch. 