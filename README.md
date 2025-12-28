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

### Current Setup: GitHub Pages
- **Development**: `dev` branch → `https://javierorange.github.io/beenergy-dev/`
- **Production**: `main` branch → `https://javierorange.github.io/beenergy/`

### Planned Migration: Vercel
For independent dev/prod environments, see [VERCEL_MIGRATION.md](./VERCEL_MIGRATION.md).

### Vercel Benefits
- **True environment separation** with distinct URLs
- **Automatic preview deployments** for pull requests
- **Zero-config setup** for Vite projects
- **Built-in analytics** and performance monitoring
- **Instant rollbacks** and deployment history

### Migration Workflow
1. **Setup**: Create Vercel account and import project
2. **Configure**: Set branch-based deployment rules
3. **Deploy**: Push to trigger automatic deployments
4. **Decommission**: Remove GitHub Pages configuration

See [VERCEL_MIGRATION.md](./VERCEL_MIGRATION.md) for detailed migration instructions.

## Pages
- `/` - Homepage with Hero, Stats, and Intro
- `/services` - Detailed services list with features
- `/about` - Company mission and Contact Form

## QA Plan

For comprehensive Quality Assurance procedures, see [QA_PLAN.md](./QA_PLAN.md).

### Testing Strategy
- **Unit Testing**: Jest + React Testing Library (80% coverage target)
- **Integration Testing**: Component interaction flows
- **E2E Testing**: Playwright automation
- **Performance**: Lighthouse CI + WebPageTest
- **Accessibility**: WCAG 2.1 AA compliance
- **Security**: Dependency scanning + XSS prevention

### Key Metrics
- Performance: Lighthouse scores >90
- Coverage: Test coverage >80%
- Accessibility: 100% WCAG 2.1 AA
- Release Success: >98% success rate

## Theme
- Primary: `#FFEA00` (Yellow)
- Background: `#1c1f24` (Dark), `#f6f7f5` (Light)
- Font: Codec Pro (sans-serif)
