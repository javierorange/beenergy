# Environment Configuration

## Overview

This document outlines the environment-specific configurations for the BeEnergy website across different deployment platforms.

## Current Environment: GitHub Pages

### Base Paths
- **Development**: `/beenergy-dev/`
- **Production**: `/beenergy/`

### Configuration Files
```typescript
// vite.config.ts
export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? '/beenergy/' : '/beenergy-dev/'
  return {
    plugins: [react()],
    base,
  }
})
```

## Target Environment: Vercel

### Environment Variables

#### Production Environment (main branch)
```bash
NODE_ENV=production
VERCEL_ENV=production
VERCEL_URL=beenergy.vercel.app
```

#### Development Environment (dev branch)
```bash
NODE_ENV=development
VERCEL_ENV=preview
VERCEL_URL=beenergy-dev.vercel.app
```

#### Pull Request Environment
```bash
NODE_ENV=development
VERCEL_ENV=preview
VERCEL_URL=beenergy-{git-hash}.vercel.app
```

### Vercel Configuration
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

## Environment-Specific Features

### Development Environment
- **Hot reload**: Enabled
- **Source maps**: Full
- **API endpoints**: Development/staging URLs
- **Analytics**: Disabled or test mode
- **Error reporting**: Development mode
- **Performance monitoring**: Disabled

### Production Environment
- **Hot reload**: Disabled
- **Source maps**: Production (if needed)
- **API endpoints**: Production URLs
- **Analytics**: Full tracking enabled
- **Error reporting**: Production mode
- **Performance monitoring**: Enabled

## Configuration Management

### Runtime Configuration
```typescript
// src/config/env.ts
export const config = {
  isProduction: import.meta.env.MODE === 'production',
  isDevelopment: import.meta.env.MODE === 'development',
  apiBaseUrl: import.meta.env.VITE_API_URL || '/api',
  analyticsId: import.meta.env.VITE_ANALYTICS_ID,
  environment: import.meta.env.VERCEL_ENV || import.meta.env.MODE,
}
```

### Environment Detection
```typescript
// src/utils/environment.ts
export const getEnvironment = () => {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    
    if (hostname.includes('vercel.app')) {
      return hostname.includes('dev') ? 'development' : 'production'
    }
    
    if (hostname.includes('github.io')) {
      return hostname.includes('dev') ? 'development' : 'production'
    }
  }
  
  return import.meta.env.MODE || 'development'
}
```

## API Configuration

### Development APIs
```typescript
// src/config/api.ts
const developmentApis = {
  contact: 'https://dev-api.beenergy.com/contact',
  newsletter: 'https://dev-api.beenergy.com/newsletter',
  analytics: 'https://dev-analytics.beenergy.com/events',
}
```

### Production APIs
```typescript
// src/config/api.ts
const productionApis = {
  contact: 'https://api.beenergy.com/contact',
  newsletter: 'https://api.beenergy.com/newsletter',
  analytics: 'https://analytics.beenergy.com/events',
}
```

## Feature Flags

### Development Features
```typescript
// src/config/features.ts
export const features = {
  debugMode: import.meta.env.DEV,
  verboseLogging: import.meta.env.DEV,
  mockData: import.meta.env.VITE_MOCK_DATA === 'true',
  experimentalFeatures: import.meta.env.VITE_EXPERIMENTAL === 'true',
}
```

### Production Features
```typescript
// src/config/features.ts
export const features = {
  debugMode: false,
  verboseLogging: false,
  mockData: false,
  experimentalFeatures: import.meta.env.VITE_EXPERIMENTAL === 'true',
}
```

## Security Configuration

### Environment Variables Security
- **Never commit**: API keys, secrets, passwords
- **Use Vercel**: Environment variables management
- **Scope appropriately**: Production vs Preview environments

### CORS Configuration
```typescript
// Development
const corsConfig = {
  origin: ['http://localhost:3000', 'https://beenergy-dev.vercel.app'],
  credentials: true,
}

// Production
const corsConfig = {
  origin: ['https://beenergy.vercel.app', 'https://www.beenergy.com'],
  credentials: true,
}
```

## Performance Configuration

### Build Optimization
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    minify: 'terser',
    sourcemap: import.meta.env.DEV,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
})
```

### Asset Optimization
```typescript
// Development
const assetConfig = {
  imageOptimization: false,
  compression: false,
  caching: 'no-cache',
}

// Production
const assetConfig = {
  imageOptimization: true,
  compression: true,
  caching: 'max-age=31536000',
}
```

## Migration Checklist

### Pre-Migration
- [ ] Document current environment variables
- [ ] Identify API endpoints and configurations
- [ ] List feature flags and toggles
- [ ] Backup current configuration files

### Migration Steps
- [ ] Create Vercel environment variables
- [ ] Update configuration files for Vercel
- [ ] Test environment detection logic
- [ ] Verify API endpoint configurations
- [ ] Validate feature flag behavior

### Post-Migration
- [ ] Remove GitHub Pages specific configurations
- [ ] Update documentation
- [ ] Test all environment-specific features
- [ ] Monitor for configuration issues

## Troubleshooting

### Common Issues

#### Environment Variables Not Loading
1. Check Vercel Dashboard environment variable settings
2. Verify variable names match code references
3. Redeploy after adding new variables

#### Base Path Issues
1. Remove base path from Vite config for Vercel
2. Use Vercel's automatic routing
3. Test SPA navigation

#### API Endpoint Mismatches
1. Verify environment-specific API URLs
2. Check CORS configurations
3. Test API calls in each environment

#### Feature Flags Not Working
1. Check environment detection logic
2. Verify flag values in each environment
3. Test flag behavior across environments

## Best Practices

### Configuration Management
1. **Centralize configuration**: Use dedicated config files
2. **Type safety**: Define interfaces for all configurations
3. **Validation**: Verify required environment variables
4. **Defaults**: Provide sensible fallback values

### Security
1. **Principle of least privilege**: Minimal required permissions
2. **Environment isolation**: Separate dev/prod credentials
3. **Regular rotation**: Update API keys and secrets
4. **Audit logging**: Track configuration changes

### Performance
1. **Environment-specific builds**: Optimize for each environment
2. **Lazy loading**: Load configurations as needed
3. **Caching**: Cache appropriate configurations
4. **Monitoring**: Track configuration performance impact

## Tools and Resources

### Configuration Management
- **Vercel CLI**: `vercel env pull`
- **dotenv**: Local environment variable management
- **config**: Node.js configuration management

### Environment Detection
- **Vercel environment variables**: Built-in environment info
- **Custom detection logic**: Environment-specific behaviors
- **Runtime configuration**: Dynamic configuration loading

### Monitoring and Debugging
- **Vercel Logs**: Build and runtime logs
- **Environment variable debugging**: Verify loaded variables
- **Performance monitoring**: Track configuration impact