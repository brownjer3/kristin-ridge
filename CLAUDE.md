# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

This is a portfolio website for Kristin Ridge, an architect with 7+ years of experience at prestigious firms (Studio Gang, COOKFOX Architects, DLR Group, BHA pllc, Valerie Dewalt Train) transitioning to tech roles. The site emphasizes her expertise in BIM/Revit documentation, project coordination, and sustainable design, positioning her for project management and technical documentation roles in tech.

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

## Current Content Implementation

The website has been fully customized with Kristin's actual information:

### Hero Section (`components/sections/hero.tsx`)
- Professional headshot displayed (`/public/Kristin Ridge LinkedIn.jpeg`)
- Tagline: "Architect → Project Manager | Documentation Specialist"
- Statistics: 7+ years, 6 prestigious firms, 20+ projects
- Resume download linked to `/public/Kristin-Ridge-Resume-2025.pdf`

### Skills Section (`components/sections/skills.tsx`)
- BIM & Technical Documentation (Revit/BIM expertise)
- Project Management & Coordination
- Design Software (Revit, AutoCAD, Rhino, 3DS Max, V-Ray)
- Stakeholder Collaboration
- Technical & Problem-Solving
- Specialized Experience (Educational, Mixed-Use, Historic Preservation)

### Experience Section (`components/sections/experience.tsx`)
- BHA pllc (Jan 2023 - Oct 2024)
- DLR Group (Mar 2019 - Aug 2022)
- Valerie Dewalt Train (Jul 2019 - Apr 2020)
- COOKFOX Architects (Apr 2016 - Oct 2017)

### Projects Section (`components/sections/projects.tsx`)
- Vista Tower (St. Regis Chicago) - $1B+ supertall skyscraper
- University of Michigan Campus Design
- Islamic Cultural Center (Thesis Project)
- Purdue University Housing
- Marymount School of New York
- The Laurel Residential Tower

### Contact Section (`components/sections/contact.tsx`)
- Email: kristinridgar@gmail.com
- Phone: (317) 317-7471
- LinkedIn: linkedin.com/in/kristin-ridge-54921268
- Location: Chicago, IL
- Target Roles: Project Manager, BIM/Technical Documentation Specialist, Product Manager, UX Researcher, Business Analyst

### SEO Metadata (`app/layout.tsx`)
- Title: "Kristin Ridge | Architect → Project Manager & Documentation Specialist"
- Keywords include firm names and specific expertise areas

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

## Documentation Section (/docs)

The site includes a comprehensive documentation section with career transition resources:

### Content Structure
- **Career Transition Guide**: Overview, mindset, and 30-60-90 day action plans
- **Skills & Roles Guide**: Skills translation matrix and detailed role exploration  
- **Practical Guides**: Interview preparation, learning resources, salary negotiation

### Implementation
- Interactive markdown viewer with sidebar navigation
- Responsive design with mobile-friendly drawer
- Auto-expands relevant folders on load
- Custom markdown renderer supporting code blocks, tables, and lists

### Updating Documentation
To update the career transition guides, modify the `mockDocs` array in `app/docs/page.tsx`. Each document uses markdown formatting and supports:
- Headers (# ## ###)
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Tables
- Inline code formatting

## Known Issues & Workarounds

1. **Dependency Installation**: Always use `--legacy-peer-deps` flag due to peer dependency conflicts between React 19 and some Radix UI packages

2. **Build Warnings**: SWC binary warnings on M1/M2 Macs can be ignored - build still succeeds

3. **Framer Motion**: All components using animations must be client components

## Portfolio Focus Areas

The site is specifically designed to highlight Kristin's:
- **BIM/Revit Expertise**: 7+ years of advanced documentation experience
- **Project Coordination**: Multi-disciplinary team management across prestigious firms
- **Sustainable Design**: LEED experience and environmental responsibility focus
- **Educational & Cultural Projects**: Campus planning and community-focused design
- **High-Rise Experience**: Vista Tower and luxury residential developments
- **Technical Documentation**: Construction documents, specifications, and as-builts

Target roles emphasized throughout:
- Project Manager (Construction to Tech transition)
- BIM/Technical Documentation Specialist
- Product Manager (Built Environment focus)
- UX Researcher (Spatial Design background)
- Business Analyst (Systems Thinking approach)

## Key Assets

- **Headshot**: `/public/Kristin Ridge LinkedIn.jpeg` - Professional photo displayed in hero section
- **Resume**: `/public/Kristin-Ridge-Resume-2025.pdf` - Downloadable PDF resume
- **Portfolio**: Referenced but hosted externally at issuu.com/kristinridge/docs/kristin_ridge_portfolio_2023