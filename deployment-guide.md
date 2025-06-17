# Vercel Deployment Guide - Hope Foundation Website

This guide will walk you through deploying your nonprofit website to Vercel with preview URLs and environment variables.

## Prerequisites

✅ GitHub account  
✅ Vercel account (free tier is sufficient)  
✅ Stripe account with test/live API keys  
✅ Code pushed to GitHub repository  

## Step 1: Prepare Your Repository

### 1.1 Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Hope Foundation nonprofit website"
git branch -M main
git remote add origin https://github.com/yourusername/hope-foundation.git
git push -u origin main
```

### 1.2 Environment Variables Setup
Create these environment variables (you'll add them in Vercel later):

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

## Step 2: Deploy to Vercel

### 2.1 Connect Repository
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings

### 2.2 Configure Environment Variables
1. In the deployment setup, click "Environment Variables"
2. Add each variable:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
   - `STRIPE_SECRET_KEY`: Your Stripe secret key  
   - `NEXT_PUBLIC_APP_URL`: Your Vercel domain (e.g., `https://hope-foundation.vercel.app`)

### 2.3 Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for build completion
3. Your site will be live at `https://your-project-name.vercel.app`

## Step 3: Configure Custom Domain (Optional)

### 3.1 Add Domain
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `hopefoundation.org`)
3. Follow DNS configuration instructions
4. Update `NEXT_PUBLIC_APP_URL` environment variable

### 3.2 SSL Certificate
Vercel automatically provides SSL certificates for all domains.

## Step 4: Set Up Preview URLs

### 4.1 Automatic Preview Deployments
Vercel automatically creates preview URLs for:
- Every pull request
- Every branch push
- Development branches

### 4.2 Preview URL Format
- Production: `https://hope-foundation.vercel.app`
- Preview: `https://hope-foundation-git-feature-branch.vercel.app`
- Pull Request: `https://hope-foundation-pr-123.vercel.app`

## Step 5: Configure Stripe for Production

### 5.1 Test vs Live Keys
- **Development**: Use `pk_test_` and `sk_test_` keys
- **Production**: Replace with `pk_live_` and `sk_live_` keys

### 5.2 Webhook Configuration
1. In Stripe Dashboard → Webhooks
2. Add endpoint: `https://your-domain.vercel.app/api/webhooks/stripe`
3. Select events: `checkout.session.completed`

## Step 6: Monitoring & Analytics

### 6.1 Vercel Analytics
Enable Vercel Analytics in project settings for:
- Page views
- Performance metrics
- User engagement

### 6.2 Error Monitoring
Vercel automatically captures:
- Build errors
- Runtime errors
- Performance issues

## Step 7: Continuous Deployment

### 7.1 Branch Protection
Set up branch protection rules:
- Require pull request reviews
- Require status checks to pass
- Auto-deploy from main branch

### 7.2 Environment-Specific Deployments
- `main` branch → Production deployment
- `staging` branch → Staging deployment  
- Feature branches → Preview deployments

## Step 8: Performance Optimization

### 8.1 Vercel Optimizations (Automatic)
- Image optimization
- Static file caching
- Edge caching
- Compression

### 8.2 Custom Optimizations
- Enable Vercel Speed Insights
- Monitor Core Web Vitals
- Optimize images for web

## Step 9: SEO & Social Sharing

### 9.1 Open Graph Images
Vercel can generate dynamic OG images:
1. Add OG image API route
2. Configure social media previews
3. Test with social media debuggers

### 9.2 Sitemap Generation
Add sitemap generation for better SEO:
```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
    },
  ]
}
```

## Step 10: Security Best Practices

### 10.1 Environment Security
- Never commit `.env.local` to Git
- Use different Stripe keys for production
- Rotate API keys regularly

### 10.2 Headers Configuration
Add security headers in `next.config.js`:
```javascript
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]
```

## Troubleshooting

### Common Issues
1. **Build Failures**: Check TypeScript errors
2. **Environment Variables**: Ensure all required vars are set
3. **Stripe Errors**: Verify API keys are correct
4. **Domain Issues**: Check DNS configuration

### Support Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Stripe Integration Guide](https://stripe.com/docs/payments/checkout)

## Success Checklist

✅ Website deployed to Vercel  
✅ Custom domain configured (optional)  
✅ Environment variables set  
✅ Stripe integration working  
✅ Preview URLs generating  
✅ SSL certificate active  
✅ Performance optimized  
✅ SEO configured  

Your Hope Foundation website is now live and ready to accept donations while inspiring supporters with your story! 