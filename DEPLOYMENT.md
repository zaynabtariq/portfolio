# GitHub Pages Deployment Guide

This portfolio is configured to deploy automatically to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Update Base Path

Before deploying, update the `base` path in `vite.config.ts` to match your repository name:

- **If your repo is named `portfolio`**: Keep `/portfolio/`
- **If your repo is `username.github.io`**: Change to `/`
- **If your repo has a different name**: Change to `/[your-repo-name]/`

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 3. Push to GitHub

1. Make sure your code is committed:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   ```

2. Push to the `main` branch:
   ```bash
   git push origin main
   ```

3. The GitHub Action will automatically:
   - Build your React app
   - Deploy it to GitHub Pages
   - Make it available at `https://[username].github.io/[repo-name]/`

### 4. Monitor Deployment

- Go to the **Actions** tab in your GitHub repository
- You'll see the deployment workflow running
- Once complete, your site will be live (may take a few minutes)

## Manual Deployment (Alternative)

If you prefer to deploy manually, you can use:

```bash
npm run build
# Then manually upload the dist folder to GitHub Pages
```

## Troubleshooting

- **404 errors**: Make sure the base path in `vite.config.ts` matches your repo name
- **Build fails**: Check the Actions tab for error details
- **Assets not loading**: Verify the base path is correct and includes trailing slash

