# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

This is a portfolio website for Kristin Ridge, an architect transitioning to tech roles. The site emphasizes transferable skills from architecture to technology positions including technical writing, project management, UX design, and solutions architecture.

## Development Commands

```bash
# Install dependencies (MUST use legacy-peer-deps due to dependency conflicts)
npm install --legacy-peer-deps

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture Overview

### Tech Stack
- **Next.js 15** with App Router (`/app` directory)
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom theme variables
- **Framer Motion** for animations (client-side components)
- **Radix UI** primitives for accessible components
- **next-themes** for dark/light mode support

### Component Structure

The application uses a modular component architecture:

1. **Page Layout** (`app/page.tsx`):
   - Single-page application with scrollable sections
   - Navigation component persists across scroll
   - All sections imported as separate components

2. **Section Components** (`components/sections/`):
   - Each section is a self-contained client component
   - Uses Framer Motion for scroll-triggered animations
   - Data is currently hardcoded within each component

3. **UI Components** (`components/ui/`):
   - Reusable primitives built on Radix UI
   - Uses CVA (class-variance-authority) for variant styling
   - Follow shadcn/ui patterns

4. **Theme System**:
   - CSS variables defined in `app/globals.css`
   - Theme provider wraps entire app in `app/layout.tsx`
   - Dark/light mode toggle in Navigation component

## Key Implementation Details

### Client Components
Most sections use `"use client"` directive for:
- Framer Motion animations
- Interactive elements (theme toggle, mobile menu)
- Browser-specific features

### Styling Approach
- Tailwind utilities as primary styling method
- CSS variables for theme colors (HSL format)
- Mobile-first responsive design
- Custom animations defined in `tailwind.config.ts`

### Path Aliasing
- `@/*` maps to root directory
- Used for clean imports: `@/components/sections/hero`

## Content Customization Points

To update portfolio content, modify these files:
- `components/sections/hero.tsx` - Name, tagline, statistics
- `components/sections/skills.tsx` - Skill categories and relevance
- `components/sections/experience.tsx` - Work history
- `components/sections/projects.tsx` - Project showcase
- `components/sections/contact.tsx` - Contact details and target roles
- `app/layout.tsx` - SEO metadata

## Deployment Configuration

### Vercel Deployment
- Configuration in `vercel.json` specifies build settings
- MUST use `npm install --legacy-peer-deps` for installation
- Framework auto-detected as Next.js

### Build Considerations
- Static site generation (SSG) for all pages
- No API routes or server-side data fetching
- Images should be placed in `/public` directory
- Resume PDF should be named `resume.pdf` in `/public`

## Known Issues & Workarounds

1. **Dependency Installation**: Always use `--legacy-peer-deps` flag due to peer dependency conflicts between React 19 and some Radix UI packages

2. **Build Warnings**: SWC binary warnings on M1/M2 Macs can be ignored - build still succeeds

3. **Framer Motion**: All components using animations must be client components

## Portfolio Focus Areas

The site is specifically designed to highlight:
- Documentation and technical writing capabilities
- Project management experience
- Visual/spatial thinking skills
- Cross-functional collaboration
- Systems design thinking

Target roles emphasized throughout:
- Technical Writer/Documentation Specialist
- Project Manager/Scrum Master
- UX Designer/Researcher
- Customer Success Manager
- Business Analyst
- Solutions Architect