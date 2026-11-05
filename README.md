# M Kitchen

A single-page Next.js site for **M Kitchen** — a healthy meal-prep delivery
service. Scroll-driven storytelling built with GSAP + Lenis: a video hero,
burger-assembly transitions, a canvas image sequence, and an interactive
package builder with WhatsApp ordering.

**Live preview:** https://altairlahad007.github.io/m-kitchen/

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

```bash
npm run lint   # ESLint
npm run build  # production build
npm start      # serve the production build
```

## Page Sections

| Section | Highlights |
| --- | --- |
| Hero | Fullscreen looping video, animated SVG logo stroke, scroll cue |
| HomeInfo | Typewriter heading, feature list, GSAP coverflow card slider, WhatsApp CTAs |
| About Us | Bun-cover scrub transition — dome shrinks, sesame seeds appear, ingredient SVGs fly in and stack |
| Nutrition Facts | Scroll-scrubbed canvas image sequence (chicken pattie frames) → patty/sauce/bottom-bun merge to complete the burger |
| Packages | 3-step plan builder (weekly/monthly, meals/day, days/week), full OMR price tables, live receipt + WhatsApp enquiry |
| Delivery & Storage | Delivery times cards, storage/heating tips |
| Reach Us | WhatsApp + Instagram links |
| Footer | Logo, copyright, FRESH.CLEAN.DELICIOUS |

## Project Structure

```
app/                  # Next.js App Router — route files only
  layout.tsx          # Root layout (Header, Footer, providers)
  page.tsx            # "/" route — renders common/core/pages/HomePage
common/
  core/
    pages/            # Page-level components (one per route)
    components/       # Section components + providers
                      # (Hero, HomeInfo, AboutUs, NutritionFacts, Packages,
                      #  DeliveryInfo, ReachUs, Burger, Header, Footer, ...)
  ui/                 # Styled UI primitives
                      # (Button, Input, Card, ThemeToggle, FadeIn, ...)
assets/
  styles/
    globals.css       # Tailwind entry + theme tokens
    typography/       # Typography scale (.heading-1, .body-text, .caption, ...)
  images/             # Logo, burger layer SVGs, section imagery
  videos/             # Hero + source footage
public/
  videos/frames/      # Extracted jpg frames for the canvas sequence
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
- **Smooth scroll** — `lenis` wraps the app via `LenisProvider`
  (`ReactLenis root`, `anchors: true` for smooth anchor links). Use
  `useLenis` from `lenis/react` inside client components.
- **GSAP** — `gsap` + `ScrollTrigger` + `@gsap/react` (`useGSAP` hook).
  Pinned scrub timelines drive the hero reveal, burger assembly, and the
  canvas frame sequence. Nav scrolls target pin endpoints via
  `ScrollTrigger.getById`.
- **Fonts** — loaded via `next/font/google` in `app/layout.tsx`:
  **Chewy** (`--font-chewy` → `font-heading` + `.heading-*` classes) for
  headings, **Atma** 300–700 (`--font-atma` → `font-sans`, body default).
- **Video frames** — regenerate with ffmpeg:
  `ffmpeg -i assets/videos/chicken_patties.mp4 -qscale:v 2 public/videos/frames/frame_%04d.jpg`
  (update `FRAME_COUNT` in `NutritionFacts.tsx`).

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys on every push to `main`:

- `npm ci` → `npm run lint` → `npm run build` with `GITHUB_PAGES=true`
- Produces a static export in `out/` (basePath `/m-kitchen`, unoptimized
  images) and publishes via `actions/deploy-pages`
- Requires **Settings → Pages → Source: "GitHub Actions"** in the repo

Local `npm run build` / `npm start` are unaffected — export only activates
when the `GITHUB_PAGES` env var is set.
