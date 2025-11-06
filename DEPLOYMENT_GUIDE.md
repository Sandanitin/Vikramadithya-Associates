# Vercel Deployment Guide

## Prerequisites
1. Make sure all changes are committed to your Git repository
2. Ensure you have a Vercel account

## Deployment Steps

### 1. Using Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy your project
vercel

# For production deployment
vercel --prod
```

### 2. Using Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your Git repository
5. Configure the project:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### 3. Environment Variables
If you're using environment variables for EmailJS, add them in your Vercel project settings:
1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Environment Variables"
3. Add the following variables:
   - `VITE_EMAILJS_PUBLIC_KEY` = `hmOEMpk3EBcfiiXS-`
   - `VITE_EMAILJS_SERVICE_ID` = `service_3pivxzk`
   - `VITE_EMAILJS_TEMPLATE_ID` = `template_7xpv82j`

### 4. Troubleshooting Common Issues

#### Issue: Links not working after deployment
**Solution**: The current configuration should fix this issue:
- Updated `vite.config.js` to use `base: '/'` instead of `base: './'`
- Updated `vercel.json` to properly rewrite all routes to `index.html`

#### Issue: 404 errors on refresh
**Solution**: The updated `vercel.json` with rewrites should resolve this:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

#### Issue: EmailJS not working
**Solution**: 
1. Make sure you're using the correct service ID and template ID
2. Verify your EmailJS account and template settings
3. Consider using environment variables for sensitive data

### 5. Redeployment
After making changes:
```bash
# Redeploy to production
vercel --prod
```

## Important Notes
- The application uses client-side routing, so all routes must be rewritten to index.html
- Make sure your EmailJS configuration is correct
- Test all forms after deployment to ensure they're working properly