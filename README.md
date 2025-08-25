# Techinium Landing Page - Netlify Deployment

A modern, responsive React landing page built with Tailwind CSS and Framer Motion.

## 🚀 Quick Deployment Guide

### Prerequisites
- Node.js 18+ installed
- npm or yarn
- Git (for continuous deployment)

### Option 1: Manual Deployment (Drag & Drop)

1. **Clone/Setup Project:**
   ```bash
   # Create project directory
   mkdir techinium-landing
   cd techinium-landing
   
   # Copy all provided files to the directory
   # Organize files in this structure:
   # techinium-landing/
   # ├── package.json
   # ├── netlify.toml
   # ├── _redirects
   # ├── tailwind.config.js
   # ├── postcss.config.js
   # ├── public/
   # │   └── index.html
   # └── src/
   #     ├── index.css
   #     ├── index.js
   #     ├── TechiniumLanding.jsx
   #     ├── lib/
   #     │   └── utils.js
   #     └── components/ui/
   #         ├── button.jsx
   #         ├── card.jsx
   #         ├── badge.jsx
   #         ├── input.jsx
   #         └── textarea.jsx
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Build the Project:**
   ```bash
   npm run build
   ```

4. **Deploy to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `build` folder
   - Your site will be live instantly!

### Option 2: Git-based Continuous Deployment

1. **Initialize Git Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub/GitLab/Bitbucket:**
   ```bash
   # Create repo on GitHub and push
   git remote add origin https://github.com/yourusername/techinium-landing.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your repository
   - Build settings are auto-configured via `netlify.toml`
   - Deploy automatically!

### Option 3: Netlify CLI Deployment

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy:**
   ```bash
   # Initialize project
   netlify init
   
   # Deploy for preview
   npm run preview
   
   # Deploy to production
   npm run deploy
   ```

## 📁 Project Structure

```
techinium-landing/
├── package.json              # Node.js dependencies & scripts
├── netlify.toml              # Netlify build configuration
├── _redirects                # SPA routing rules
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── public/
│   └── index.html            # HTML template
└── src/
    ├── index.css             # Tailwind styles & CSS variables
    ├── index.js              # React app entry point
    ├── TechiniumLanding.jsx  # Main landing page component
    ├── lib/
    │   └── utils.js          # Utility functions
    └── components/ui/        # Reusable UI components
        ├── button.jsx
        ├── card.jsx
        ├── badge.jsx
        ├── input.jsx
        └── textarea.jsx
```

## 🛠 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Deploy preview to Netlify
- `npm run deploy` - Deploy to production on Netlify

## ✨ Features

- **Modern React 18** with hooks and functional components
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **shadcn/ui** component architecture
- **Responsive design** for all devices
- **SEO optimized** with meta tags
- **Production ready** with build optimizations

## 🔧 Configuration Files

### `netlify.toml`
- Sets Node.js 18 as build environment
- Configures build command and publish directory
- Sets up SPA routing redirects
- Adds security headers

### `_redirects`
- Handles client-side routing for React Router
- Redirects all routes to index.html

### `tailwind.config.js`
- Custom design system tokens
- Component-specific utilities
- Animation keyframes

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96%;
  /* ... more variables */
}
```

### Components
All UI components are in `src/components/ui/` and can be customized.

### Content
Edit the landing page content in `src/TechiniumLanding.jsx`:
- Hero section text
- Services and pricing
- Contact information
- Client testimonials

## 🚨 Troubleshooting

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Import Path Issues
Ensure all import paths use relative paths:
```jsx
import { Button } from "./components/ui/button";
import { cn } from "../lib/utils";
```

### CSS Not Loading
Check that Tailwind directives are in `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📈 Performance

The build is optimized for:
- **Fast loading** with code splitting
- **Small bundle size** with tree shaking
- **Caching** with proper headers
- **CDN delivery** via Netlify

## 🌐 Domain Setup

After deployment:
1. Go to Site settings in Netlify dashboard
2. Click "Domain management"
3. Add custom domain
4. Update DNS records as instructed

## 📧 Support

For deployment issues:
- Check Netlify build logs
- Verify all files are uploaded correctly
- Contact: hello@techinium.ai

---

**Quick Start Command:**
```bash
npm install && npm run build
```

Then drag the `build` folder to Netlify!# techn
