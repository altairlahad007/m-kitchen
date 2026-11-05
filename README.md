This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

```
app/                  # Next.js App Router — route files only
  layout.tsx          # Root layout (renders Header/Footer from common/core)
  page.tsx            # "/" route — renders common/core/pages/HomePage
common/
  core/
    pages/            # Page-level components (one per route)
    components/       # Shared core components + providers
                      # (Header, Footer, ThemeProvider, LenisProvider, ...)
  ui/                 # Styled UI primitives
                      # (Button, Input, Card, ThemeToggle, FadeIn, ...)
assets/
  styles/
    globals.css       # Tailwind entry — imported by app/layout.tsx
    typography/       # Typography scale (.heading-1, .body-text, .caption, ...)
  images/
  videos/
```

Path aliases (see `tsconfig.json`):

- `@ui` / `@ui/*` → `common/ui`
- `@core/*` → `common/core/*`
- `@common/*` → `common/*`
- `@assets/*` → `assets/*`

## Theming & Animation

- **Theme** — duotone light/dark via `next-themes` (class strategy on `<html>`).
  Color tokens live in `assets/styles/globals.css` (`--background`,
  `--foreground`, `--card`, `--muted`, `--border`, `--primary`, `--secondary`)
  and are exposed as Tailwind utilities (`bg-primary`, `bg-card`,
  `text-muted-foreground`, ...). Toggle with `<ThemeToggle />` from `@ui`.
- **Smooth scroll** — `lenis` wraps the app via `LenisProvider` in the root
  layout (`ReactLenis root`). Use `useLenis` from `lenis/react` inside client
  components.
- **GSAP** — `gsap` + `@gsap/react` (`useGSAP` hook). `<FadeIn />` from `@ui`
  is a working example; register plugins with `gsap.registerPlugin(...)`.
- **Fonts** — loaded via `next/font/google` in `app/layout.tsx`:
  **Chewy** (`--font-chewy` → `font-heading` utility + `.heading-*` classes)
  for headings, **Atma** 300–700 (`--font-atma` → `font-sans`, body default)
  for everything else.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
