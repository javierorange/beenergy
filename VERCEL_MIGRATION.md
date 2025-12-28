# Vercel Migration Guide

## Overview

This document outlines the migration strategy from GitHub Pages to Vercel for independent development and production deployments.

## Current Limitations

- **GitHub Pages**: Only supports one deployment target per repository
- **Base path conflicts**: Dev and prod environments cannot coexist independently
- **Limited environments**: No built-in staging/preview functionality

## Migration Strategy

### Phase 1: Preparation

#### 1.1 Create Vercel Account
1. Sign up at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Authenticate:
   ```bash
   vercel login
   ```

#### 1.2 Remove GitHub Pages Configuration
- Delete `.github/workflows/deploy.yml`
- Remove base path from `vite.config.ts`

#### 1.3 Update Vite Configuration
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Remove base path - Vercel handles routing automatically
})
```

#### 1.4 Create Vercel Configuration
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/((?!api/).*)",
      "destination": "/index.html"
    }
  ]
}
```

### Phase 2: Vercel Setup

#### 2.1 Import Project
1. Go to Vercel Dashboard
2. Click "Add New" → "Project"
3. Import GitHub repository
4. Configure build settings (auto-detected for Vite)

#### 2.2 Configure Deployment Rules
- **Production**: `main` branch
- **Preview**: `dev` branch and all PRs
- **Custom environments** (Pro plan): Optional staging environment

#### 2.3 Environment Variables
Set up environment-specific variables in Vercel Dashboard:
- Production: API endpoints, secrets
- Preview: Development/staging configurations

#### 2.4 Custom Domains (Optional)
- Production: `yourdomain.com`
- Staging: `staging.yourdomain.com`

### Phase 3: Deployment Workflow

#### Development Workflow
```bash
# Work on dev branch
git checkout dev
git add .
git commit -m "Feature: new functionality"
git push origin dev
# → Auto-deploys to preview environment
```

#### Production Workflow
```bash
# Merge to main
git checkout main
git merge dev
git push origin main
# → Auto-deploys to production
```

#### Pull Request Workflow
- Each PR creates unique preview URL
- Automatic deployment for testing
- PR comments include deployment links

## Configuration Files

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/((?!api/).*)",
      "destination": "/index.html"
    }
  ],
  "functions": {
    "src/api/**/*.js": {
      "runtime": "nodejs18.x"
    }
  }
}
```

### Environment Variables Structure
```
Production (main branch):
- NODE_ENV=production
- API_URL=https://api.yourdomain.com
- DATABASE_URL=prod_db_url

Preview (dev branch):
- NODE_ENV=development
- API_URL=https://dev-api.yourdomain.com
- DATABASE_URL=dev_db_url
```

## Benefits

### 1. True Environment Separation
- **Dev**: `beenergy-dev.vercel.app`
- **Prod**: `beenergy.vercel.app`
- **PR Previews**: Unique URLs per PR

### 2. Automatic Deployments
- Push to branch → Auto-deploy
- PR creation → Preview deployment
- Merge to main → Production deployment

### 3. Enhanced Features
- **Instant Rollbacks**: One-click revert
- **Analytics**: Built-in performance monitoring
- **Split Testing**: A/B testing capabilities
- **Edge Functions**: Serverless API endpoints

### 4. Developer Experience
- **Zero-config**: Automatic framework detection
- **GitHub Integration**: Seamless PR workflow
- **Preview Comments**: Auto-posted deployment links
- **Collaboration**: Team member access controls

## Migration Checklist

### Pre-Migration
- [ ] Create Vercel account
- [ ] Install Vercel CLI
- [ ] Backup current GitHub Pages setup
- [ ] Document current environment variables

### Migration
- [ ] Remove GitHub Pages workflow
- [ ] Update Vite config (remove base path)
- [ ] Create vercel.json configuration
- [ ] Import project to Vercel
- [ ] Configure deployment rules
- [ ] Set up environment variables
- [ ] Test preview deployments
- [ ] Test production deployment

### Post-Migration
- [ ] Update team documentation
- [ ] Configure custom domains (if needed)
- [ ] Set up monitoring/alerts
- [ ] Archive GitHub Pages configuration
- [ ] Update DNS records (if using custom domains)

## Rollback Procedure

### Emergency Rollback to GitHub Pages
1. Restore `.github/workflows/deploy.yml`
2. Restore base path in `vite.config.ts`
3. Delete Vercel project
4. Push to trigger GitHub Pages deployment

### Temporary Rollback (Vercel)
1. Go to Vercel Dashboard
2. Select previous deployment
3. Click "Promote to Production"
4. Verify rollback success

## Troubleshooting

### Common Issues

#### Build Failures
- Check build logs in Vercel Dashboard
- Verify `package.json` scripts
- Ensure all dependencies are listed

#### Routing Issues
- Verify `vercel.json` rewrites configuration
- Check SPA routing setup
- Ensure 404 handling is configured

#### Environment Variables
- Verify variable names match code
- Check environment-specific scopes
- Redeploy after variable changes

### Support Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://community.vercel.com)
- [GitHub Issues](https://github.com/vercel/vercel/issues)

## Cost Analysis

### GitHub Pages
- **Cost**: Free
- **Limitations**: Single deployment target

### Vercel
- **Hobby**: Free (sufficient for most projects)
  - 100GB bandwidth/month
  - Unlimited static deployments
  - Community support
  
- **Pro**: $20/member/month
  - Custom environments
  - Advanced analytics
  - Priority support
  - Edge Functions

## Timeline

### Week 1: Preparation
- Account setup
- Configuration updates
- Local testing

### Week 2: Migration
- Project import
- Environment configuration
- Initial deployments

### Week 3: Validation
- Full workflow testing
- Team training
- Documentation updates

### Week 4: Go-Live
- DNS updates (if needed)
- GitHub Pages decommission
- Production monitoring

## Conclusion

Migrating to Vercel provides:
- Independent dev/prod environments
- Superior developer experience
- Enhanced deployment capabilities
- Built-in analytics and monitoring

The migration is straightforward with minimal code changes required, primarily configuration updates. Vercel's free tier is sufficient for most static site needs, with scalable options for growth.