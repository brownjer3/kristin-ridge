# Kristin Ridge - Portfolio Website

A modern, responsive portfolio website for an architect transitioning to tech roles. Built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Purpose

This portfolio showcases transferable skills from architecture to tech, highlighting:
- Documentation and technical writing expertise
- Project management capabilities
- Cross-functional collaboration experience
- Systems design thinking
- Visual communication skills

## 🚀 Target Roles

The portfolio is optimized for opportunities in:
- Technical Writer / Documentation Specialist
- Project Manager / Scrum Master
- UX Designer / UX Researcher
- Customer Success Manager
- Business Analyst
- Solutions Architect

## 💻 Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Theme:** Dark/Light mode support

## 🛠️ Local Development

1. Clone the repository:
```bash
git clone [repository-url]
cd kristin-ridge
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy with one click

### Manual Deployment

1. Build the production version:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📝 Customization

### Update Personal Information

Edit the following files to update personal details:
- `components/sections/hero.tsx` - Name and tagline
- `components/sections/contact.tsx` - Contact information
- `components/sections/experience.tsx` - Work experience
- `components/sections/projects.tsx` - Project details
- `app/layout.tsx` - Meta tags and SEO

### Add Resume

Place your PDF resume in the `public` folder and name it `resume.pdf`

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Color scheme: Update CSS variables in `globals.css`

## 🎨 Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/Light mode toggle
- ✅ Smooth animations
- ✅ SEO optimized
- ✅ Accessible navigation
- ✅ Fast performance
- ✅ Type-safe with TypeScript

## 📱 Sections

1. **Hero** - Introduction and status
2. **Skills** - Transferable skills categorized by relevance
3. **Experience** - Professional background
4. **Projects** - Portfolio of architectural work
5. **Contact** - Contact information and target roles

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

Private portfolio - All rights reserved

## 🤝 Support

For questions or issues, please contact the developer.