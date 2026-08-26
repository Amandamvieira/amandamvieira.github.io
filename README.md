# Portfolio Amanda - Code Export for Claude Code

This export contains everything needed to recreate Amanda's portfolio in your preferred framework (React, Next.js, Vue).

## What's Included

1. **IMPLEMENTATION_GUIDE.md** — Full technical specs, component breakdown, and build checklist
2. **translations.ts** — 100+ PT/EN translation key-value pairs
3. **tokens.ts** — Design tokens (colors, typography, spacing, shadows, motion)
4. **README.md** (this file)

## Reference Files (DC HTML)

- Portfolio Amanda.dc.html (home page)
- Case Naches.dc.html (case study 1)
- Case Noticiato.dc.html (case study 2)
- Identidade Visual.dc.html (brand system)

## Quick Start

1. Read **IMPLEMENTATION_GUIDE.md** for architecture overview
2. Import **tokens.ts** and **translations.ts** into your project
3. Build components in this order:
   - RocketScroll (hardest, most rewarding)
   - MacbookFrame + IPhoneFrame (device mockups)
   - LanguageToggle (localStorage state)
   - ProjectCard grid
   - Case study pages
4. Copy ./assets/ to your public folder
5. Link Google Fonts in <head> (see tokens.ts)

## Key Files to Reference

- **Portfolio Amanda.dc.html** — Landing page layout, rocket scroll stations, project grid
- **Case Naches.dc.html** — MacBook mockup with tab switching, device lineup, full-bleed closing
- **Case Noticiato.dc.html** — Carousel mechanics (planos), research stack, wireframe scroll
- **Identidade Visual.dc.html** — Brand identity reference (not a case study page, but inspiration for visual system)

## Critical Details

- **Colors**: Exact hex + rgba values in tokens.ts (no variations)
- **Typography**: Baloo 2 for display, DM Sans for body (load both weights)
- **Spacing**: Use clamp() for fluid responsive sizing
- **Motion**: Cubic-bezier(.22,1,.36,1) for easing, 0.6-0.7s duration
- **Rocket scroll**: RAF loop, docking detection, flame response to speed
- **Language toggle**: localStorage key 'feira-idioma', text-node walk (no innerHTML)

## Responsive Breakpoints

- Container max-width: 1080px
- Padding: clamp(20px, 5vw, 64px)
- Grid: repeat(auto-fit, minmax(300px, 1fr))
- Font scaling: clamp(min, preferred_vw, max)

## Assets to Copy

From project root ./assets/:
- naches-gestor.png
- naches-missoes.png
- naches-quizzes.png
- naches-login.png
- naches-app.mp4
- naches-appstore.png
- naches-logo-final.png
- (Noticiato images follow similar naming)

---

Made with Amanda's portfolio. Do not copy HTML directly — recreate in your framework.
