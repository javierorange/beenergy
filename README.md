# BeEnergy Website Component

A production-ready energy consulting website built with React and Tailwind CSS.

## Features
- **3-Page Layout**: Home, Services, About (with contact form)
- **Responsive Design**: Fully responsive header, footer, and content sections
- **Industrial Aesthetic**: Dark themes, electric yellow accents, and CSS patterns
- **Interactive**: Hover effects, smooth transitions, and mobile navigation

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

This project has two environments:

### Development Environment
- **Branch**: `dev`
- **URL**: `https://[username].github.io/beenergy-dev/`
- **Trigger**: Push to `dev` branch
- **Base Path**: `/beenergy-dev/`

### Production Environment
- **Branch**: `main`
- **URL**: `https://[username].github.io/beenergy/`
- **Trigger**: Push to `main` branch
- **Base Path**: `/beenergy/`

### Workflow
1. Develop on `dev` branch → deploys to dev environment
2. Test and verify changes in dev environment
3. Merge `dev` to `main` → deploys to production environment

### Manual Deployment
You can also trigger deployments manually using the "workflow_dispatch" option in GitHub Actions.

## Pages
- `/` - Homepage with Hero, Stats, and Intro
- `/services` - Detailed services list with features
- `/about` - Company mission and Contact Form

## Theme
- Primary: `#FFEA00` (Yellow)
- Background: `#1c1f24` (Dark), `#f6f7f5` (Light)
- Font: Codec Pro (sans-serif)
