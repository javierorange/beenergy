# Rollback Procedures

## Overview

This document outlines rollback procedures for the BeEnergy website deployment, covering both emergency rollbacks and controlled reverts.

## Current Deployment: GitHub Pages

### Emergency Rollback Scenarios

#### Scenario 1: Broken Deployment
**Symptoms**: 404 errors, broken styling, missing assets

**Rollback Steps**:
1. Identify last working commit:
   ```bash
   git log --oneline --graph -10
   ```
2. Reset to working commit:
   ```bash
   git checkout main
   git reset --hard <working-commit-hash>
   git push --force-with-lease origin main
   ```
3. Verify deployment at GitHub Pages URL
4. Check all pages and functionality

#### Scenario 2: Configuration Issues
**Symptoms**: Incorrect base path, routing problems

**Rollback Steps**:
1. Check `vite.config.ts` base path configuration
2. Verify GitHub Pages settings in repository
3. Restore correct configuration:
   ```bash
   git checkout main -- vite.config.ts
   git add vite.config.ts
   git commit -m "fix: restore correct base path configuration"
   git push origin main
   ```

#### Scenario 3: Domain/SSL Issues
**Symptoms**: Domain not resolving, SSL certificate errors

**Rollback Steps**:
1. Check GitHub repository Settings → Pages
2. Verify custom domain configuration
3. Check DNS settings
4. Force redeploy:
   ```bash
   git commit --allow-empty -m "trigger: redeploy GitHub Pages"
   git push origin main
   ```

## Target Deployment: Vercel

### Rollback Types

#### Type 1: Instant Rollback (Recommended)
**Use Cases**: Quick fixes, temporary issues

**Steps**:
1. Go to Vercel Dashboard
2. Navigate to project
3. Click "Deployments" tab
4. Find previous working deployment
5. Click "..." menu → "Promote to Production"
6. Confirm rollback
7. Verify deployment at production URL

#### Type 2: Git-Based Rollback
**Use Cases**: Code issues, need to fix and redeploy

**Steps**:
1. Identify last working commit:
   ```bash
   git log --oneline --graph -10
   ```
2. Create rollback branch:
   ```bash
   git checkout -b rollback-fix main
   git reset --hard <working-commit-hash>
   ```
3. Push rollback:
   ```bash
   git push origin rollback-fix
   ```
4. Deploy rollback branch to production
5. Test and verify functionality

#### Type 3: Emergency Rollback to GitHub Pages
**Use Cases**: Vercel platform issues, complete migration failure

**Steps**:
1. Restore GitHub Pages workflow:
   ```bash
   git checkout main
   git checkout -b restore-github-pages
   ```
2. Restore configuration files:
   ```bash
   # Restore vite.config.ts with base path
   git checkout HEAD~1 -- vite.config.ts
   
   # Restore GitHub Actions workflow
   mkdir -p .github/workflows
   git checkout HEAD~1 -- .github/workflows/deploy.yml
   ```
3. Commit and push:
   ```bash
   git add .
   git commit -m "emergency: restore GitHub Pages deployment"
   git push origin restore-github-pages
   ```
4. Create pull request to main branch
5. Merge and trigger GitHub Pages deployment

## Platform-Specific Procedures

### GitHub Pages Rollback

#### Quick Rollback
```bash
# Reset to previous commit
git checkout main
git reset --hard HEAD~1
git push --force-with-lease origin main

# Wait for GitHub Actions to complete
# Verify deployment at GitHub Pages URL
```

#### Configuration Rollback
```bash
# Restore specific files
git checkout main -- vite.config.ts
git checkout main -- .github/workflows/deploy.yml

# Commit configuration fix
git add .
git commit -m "fix: restore GitHub Pages configuration"
git push origin main
```

### Vercel Rollback

#### Dashboard Rollback
1. Access Vercel Dashboard
2. Select project
3. Go to Deployments tab
4. Find working deployment
5. Click "Promote to Production"
6. Wait for deployment completion
7. Verify functionality

#### CLI Rollback
```bash
# List recent deployments
vercel list

# Redeploy previous working commit
git checkout <working-commit-hash>
vercel --prod

# Or promote specific deployment
vercel promote <deployment-url> --prod
```

## Testing and Verification

### Pre-Rollback Checklist
- [ ] Identify rollback target (commit/deployment)
- [ ] Communicate rollback to team
- [ ] Backup current state if needed
- [ ] Prepare rollback window

### Post-Rollback Verification
- [ ] Check homepage loads correctly
- [ ] Verify all navigation works
- [ ] Test contact forms and functionality
- [ ] Confirm assets load properly
- [ ] Validate mobile responsiveness
- [ ] Check analytics and tracking
- [ ] Test environment-specific features

### Rollback Validation Script
```bash
#!/bin/bash
# rollback-verification.sh

echo "Testing rollback deployment..."

# Test homepage
curl -f -s https://yourdomain.com > /dev/null
if [ $? -eq 0 ]; then
  echo "✓ Homepage accessible"
else
  echo "✗ Homepage failed"
  exit 1
fi

# Test key pages
pages=("/services" "/about")
for page in "${pages[@]}"; do
  curl -f -s "https://yourdomain.com$page" > /dev/null
  if [ $? -eq 0 ]; then
    echo "✓ $page accessible"
  else
    echo "✗ $page failed"
  fi
done

echo "Rollback verification complete"
```

## Communication Procedures

### Internal Team Communication
1. **Slack/Discord**: Announce rollback initiation
2. **Status Page**: Update deployment status
3. **Email**: Notify stakeholders of rollback
4. **Documentation**: Record rollback details

### External Communication (if needed)
1. **Twitter**: Update on service status
2. **Status Page**: Public-facing status update
3. **Support**: Prepare customer response templates

## Rollback Decision Tree

```
Is the issue critical?
├─ Yes → Emergency rollback procedures
│   ├─ Platform issue? → Switch to alternative platform
│   └─ Code issue? → Instant rollback to previous deployment
└─ No → Assess impact
    ├─ Minor issue? → Hotfix deployment
    └─ Major issue? → Scheduled rollback
```

## Prevention and Monitoring

### Pre-Deployment Checks
- [ ] Run local tests
- [ ] Check build process
- [ ] Verify environment variables
- [ ] Test deployment in preview environment

### Monitoring Setup
- **Uptime monitoring**: Track site availability
- **Performance monitoring**: Watch for regressions
- **Error tracking**: Monitor deployment errors
- **Automated alerts**: Notify on issues

### Deployment Best Practices
1. **Blue-green deployment**: Maintain two production environments
2. **Canary releases**: Gradual traffic shifting
3. **Feature flags**: Toggle problematic features
4. **Automated testing**: Catch issues before deployment

## Recovery Procedures

### Post-Rollback Recovery
1. **Root cause analysis**: Identify rollback trigger
2. **Fix development**: Address underlying issue
3. **Test thoroughly**: Verify fix in preview environment
4. **Document lessons**: Record for future prevention
5. **Redeploy**: Deploy fixed version to production

### Continuous Improvement
- **Review rollback frequency**: Identify patterns
- **Update procedures**: Refine based on experience
- **Team training**: Ensure rollback knowledge
- **Tool improvements**: Enhance monitoring and alerting

## Emergency Contacts

### Platform Support
- **Vercel Support**: support@vercel.com
- **GitHub Support**: support@github.com

### Internal Team
- **Lead Developer**: [contact information]
- **DevOps Engineer**: [contact information]
- **Product Manager**: [contact information]

## Tools and Resources

### Rollback Tools
- **Vercel Dashboard**: Deployment management
- **Vercel CLI**: Command-line rollback
- **Git**: Version control operations
- **GitHub Actions**: Workflow management

### Monitoring Tools
- **Vercel Analytics**: Performance monitoring
- **Uptime monitoring**: Site availability
- **Error tracking**: Issue identification
- **Log analysis**: Troubleshooting support

## Documentation Maintenance

### Update Triggers
- Platform changes
- Procedure modifications
- Team feedback
- Incident reviews

### Review Schedule
- **Monthly**: Procedure review
- **Quarterly**: Full documentation audit
- **Annually**: Major update and revision

## Conclusion

Rollback procedures are critical for maintaining site reliability and minimizing downtime. Key takeaways:

1. **Preparation is essential**: Have procedures documented and tested
2. **Communication is crucial**: Keep team and stakeholders informed
3. **Monitoring prevents issues**: Early detection reduces rollback needs
4. **Learning improves process**: Document lessons and refine procedures

Regular testing and refinement of rollback procedures ensures quick recovery from deployment issues and maintains high availability for the BeEnergy website.