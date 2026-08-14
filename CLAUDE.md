# Portfolio project

This is Zaynab Tariq's personal portfolio.

## Stack
- Vite 7 (not Next.js — there is no app/ or pages/ router, no server components)
- React 19 + TypeScript
- Tailwind CSS v4, configured via the `@tailwindcss/vite` plugin
- framer-motion v12 — import from `"framer-motion"`
- shadcn/ui primitives on Radix, plus magicui components (see Art direction below)

Path alias: `@/` resolves to `./src` (see `vite.config.ts`).

## Package manager
Use npm. The repo has `package-lock.json` and CI runs `npm ci`.

```bash
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build
npm run lint
npm run preview  # serve the production build locally
```

## Deployment
`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to
`main`. Production builds use `base: '/portfolio/'`, so asset paths differ between dev
and production — verify with `npm run build && npm run preview` before assuming a
path-sensitive change works.

## Art direction
Portfolio UI work is governed by the `portfolio-art-direction` skill
(`.claude/skills/portfolio-art-direction/`). Read it before designing or modifying UI,
and treat it as a fixed brief — do not edit it to match code that has already been
written.

Note that the current `src/` predates that brief: `components/magicui/`
(typing-animation, shimmer-button, particles, border-beam, sparkles, grid-pattern) and
the glass/shimmer tokens in `src/index.css` are on the brief's avoid list. Treat them as
the starting point being replaced, not as house style to extend.

## Quality rules
- Never finish frontend work without visually inspecting the running app.
- Use the portfolio-art-direction skill for portfolio UI work.
- Use frontend-design when creating or substantially modifying frontend UI.
- Prefer SVG/CSS/DOM over WebGL unless 3D materially improves the design.
- Respect prefers-reduced-motion.
- Mobile must be intentionally designed rather than merely responsive.

## Verification
After meaningful visual changes:
1. run the app (`npm run dev`)
2. inspect desktop
3. inspect mobile
4. fix obvious visual issues

`npm run build` type-checks via `tsc -b`; run it before calling a change done.
