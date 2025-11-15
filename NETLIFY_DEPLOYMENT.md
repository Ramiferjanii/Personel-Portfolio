# Netlify Deployment Guide

## Quick Deploy Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Go to [Netlify](https://www.netlify.com/)**
   - Sign up or log in

2. **Connect Your Repository**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub/GitLab/Bitbucket
   - Select your repository

3. **Configure Build Settings**
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next` (or leave empty for auto-detection)

4. **Add Environment Variables**
   - Go to Site settings → Environment variables
   - Add the following:
     ```
     RESEND_API_KEY=re_your_api_key_here
     CONTACT_EMAIL=ramiferjani80@gmail.com
     ```
   - Optional (if domain is verified):
     ```
     EMAIL_DOMAIN=rami.portfolio.com
     USE_VERIFIED_DOMAIN=true
     ```

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

4. **Initialize Netlify**
   ```bash
   netlify init
   ```
   - Follow the prompts
   - Select "Create & configure a new site"

5. **Set Environment Variables**
   ```bash
   netlify env:set RESEND_API_KEY "re_your_api_key_here"
   netlify env:set CONTACT_EMAIL "ramiferjani80@gmail.com"
   ```

6. **Deploy**
   ```bash
   netlify deploy --prod
   ```

## Important Notes

### Environment Variables
Make sure to add these in Netlify Dashboard → Site settings → Environment variables:
- `RESEND_API_KEY` - Your Resend API key
- `CONTACT_EMAIL` - Your email address (default: ramiferjani80@gmail.com)
- `EMAIL_DOMAIN` - (Optional) Your verified domain
- `USE_VERIFIED_DOMAIN` - (Optional) Set to "true" if domain is verified

### Build Settings
- **Node Version**: 20 (configured in netlify.toml)
- **Build Command**: `npm run build`
- **Publish Directory**: `.next` (auto-detected by Next.js plugin)

### Custom Domain
1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

### Troubleshooting

**Build Fails:**
- Check Node version (should be 20)
- Verify all dependencies are in package.json
- Check build logs in Netlify dashboard

**Environment Variables Not Working:**
- Make sure variables are set in Netlify dashboard
- Redeploy after adding variables
- Check variable names match exactly (case-sensitive)

**Contact Form Not Working:**
- Verify RESEND_API_KEY is set correctly
- Check Resend dashboard for API key status
- Verify email is being sent in Resend logs

## Post-Deployment

After deployment:
1. Test the contact form
2. Check email delivery in Resend dashboard
3. Verify all pages load correctly
4. Test on mobile devices

