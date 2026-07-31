# Adhin & Athira — Wedding Reception Invitation

A single-page, animated wedding reception invitation for Adhin & Athira's reception on 14th September 2026 at AGP Garden Heritage Hall, Calicut.

Built with Next.js (App Router, static export) and Tailwind CSS, with scroll-linked parallax and motion effects via [`motion`](https://motion.dev). The whole page — decorations, sparkles, countdown — is rendered from code, so no image assets are needed for the design itself. The favicon and social share image are generated the same way: from code, styled to match the page.

## Getting started

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Editing the invitation

- **Wedding details** (names, date, venue, calendar link): [`app/page.tsx`](app/page.tsx)
- **Site metadata** (page title, description): [`app/layout.tsx`](app/layout.tsx)
- **Favicon**: [`public/icon.svg`](public/icon.svg) is the source design; run `npm run build` to regenerate `app/icon.png` / `app/apple-icon.png` from it if you change the SVG (see below).
- **Social share image** (what shows up when the link is shared on WhatsApp, iMessage, etc.): [`lib/og-image.tsx`](lib/og-image.tsx), rendered via `app/opengraph-image.tsx` and `app/twitter-image.tsx`.

## Build

```bash
npm run build
```

Produces a fully static site in `out/` (`next.config.mjs` sets `output: 'export'`) — plain HTML/CSS/JS, no server runtime required.

## Deploying to Cloudflare Pages

Since this is a static export, Cloudflare Pages just needs:

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Framework preset:** Next.js (Static HTML Export)

## Tech stack

- [Next.js](https://nextjs.org) 15 (App Router, static export)
- [Tailwind CSS](https://tailwindcss.com) v4
- [`motion`](https://motion.dev) for animation
- [Radix UI](https://www.radix-ui.com) + [shadcn/ui](https://ui.shadcn.com) for the button primitive
- [`next/og`](https://nextjs.org/docs/app/api-reference/functions/image-response) for the generated social preview image
