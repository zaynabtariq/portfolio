# Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, shadcn/ui, and Magic UI.

## Features

- **Glass UI Design** - Beautiful glassmorphism effects throughout the site
- **Responsive** - Fully responsive design that works on all devices
- **Animations** - Smooth animations powered by Framer Motion
- **Magic UI Components** - Custom animated components including:
  - Particles effect
  - Blur fade animations
  - Typing animation
  - Sparkles effect
  - Shimmer buttons
  - Grid patterns
- **shadcn/ui Components** - Professional UI components with customized styling
- **Modern Stack** - Built with Vite, React 18, TypeScript, and Tailwind CSS 4

## Sections

1. **Hero/Bio** - Introduction with animated text, skills, and call-to-action buttons
2. **Projects** - Grid of project cards with hover effects and technology badges
3. **Contact** - Contact form with info cards and validation
4. **Footer** - Social links and navigation

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React Icons
- Radix UI Primitives

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customization

### Personal Information
Update your information in the following files:
- `src/components/sections/Hero.tsx` - Name, bio, and skills
- `src/components/sections/Projects.tsx` - Your projects
- `src/components/sections/Contact.tsx` - Contact information
- `src/components/sections/Navbar.tsx` - Social links
- `src/components/sections/Footer.tsx` - Social links

### Styling
The design uses a custom color palette defined in `src/index.css`:
- Primary: Blue/purple gradient
- Secondary: Cyan/teal
- Accent: Yellow/gold
- Accent Pink: Pink/magenta

### Adding Projects
Edit the `projects` array in `src/components/sections/Projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    image: "https://...",
    tags: ["React", "TypeScript"],
    liveUrl: "https://...",
    githubUrl: "https://...",
    featured: true, // Optional: highlights the project
  },
  // Add more projects...
];
```

## License

MIT
