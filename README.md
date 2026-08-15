# Senuri & Shehan — Wedding Invitation (React)

The wedding microsite rebuilt with **Vite + React + TypeScript + Tailwind CSS v4**,
using **shadcn-style** components for the RSVP form controls. Same nine-section
design and imagery as the original static build.

## Stack

- **Vite 6** + **React 18** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — design tokens defined with `@theme` in `src/index.css`
- **shadcn-style UI** — `Button` (cva variants: `cta`, `pill`) and `Input` in `src/components/ui/`, built on `clsx` + `tailwind-merge` (`cn` helper)

## Run locally

```bash
npm install
npm run dev      # http://localhost:4610
```

Build for production:

```bash
npm run build    # outputs to dist/
npm run preview
```

## Structure

```
src/
  main.tsx, App.tsx        # entry + section composition
  index.css                # Tailwind import, @theme tokens, ornate custom CSS
  lib/utils.ts             # cn() class merger
  data/images.ts           # single image map (swap any photo here)
  hooks/useCountdown.ts     # live countdown to 22 Oct 2026
  components/
    Reveal.tsx             # IntersectionObserver scroll-reveal wrapper
    typography.tsx         # Eyebrow + Script heading helpers
    ui/                    # shadcn-style Button, Input
    sections/              # Hero, Letter, Countdown, VenueChurch,
                           # VenueReception, Rsvp, Gifts, OrderOfEvents, Finale
    Footer.tsx
public/assets/             # imagery (photos, sketches, lace frames, icons)
```

## Notes

- Tailwind utilities handle layout/typography; a small set of custom CSS classes in
  `index.css` cover the intricate visuals (ornate frames, lace masks, the RSVP
  envelope, the mix-blend event icons) that don't map cleanly to utilities.
- Accessibility carried over: keyboard focus rings, `prefers-reduced-motion`,
  `aria-live` RSVP status, reserved image dimensions (no layout shift), 44px tap targets.
- Deploy on Vercel with **Framework preset: Vite** (build `npm run build`, output `dist`).
  This is a separate project from the deployed static site — deploy it on its own when ready.
