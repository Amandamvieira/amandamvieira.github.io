# Portfolio Amanda - Claude Code Export

## Project Overview
Complete interactive portfolio design system for Amanda (product designer) with bilingual case studies, animated scroll mechanics, and thematic "feira" aesthetic.

## Stack Instructions
- Framework: React / Next.js / Vue (your choice)
- Styling: Inline styles or CSS-in-JS (maintain exact color/spacing from hifi)
- Assets: Copy from ./assets/ folder
- Fonts: Google Fonts (Baloo 2, DM Sans loaded in <head>)
- State: Client-side localStorage for language preference + screen state

## Files Structure
```
src/
├── pages/
│   ├── index.tsx (Portfolio home)
│   ├── cases/
│   │   ├── naches.tsx
│   │   └── noticiato.tsx
├── components/
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── MacbookFrame.tsx
│   ├── IPhoneFrame.tsx
│   ├── RocketScroll.tsx (animated foguete)
│   └── LanguageToggle.tsx
├── hooks/
│   └── useLanguage.ts
├── styles/
│   └── tokens.ts (design tokens)
├── assets/
│   ├── naches-*.png
│   ├── noticiato-*.png
│   └── naches-app.mp4
└── lib/
    └── translations.ts
```

## Key Components to Build

### 1. RocketScroll (Animated scroll mechanic)
- Follows scroll position between "stations" (data-station elements)
- SVG rocket with flame animation
- Smooth easing: cubic-bezier(.22,1,.36,1)
- Label follows rocket: "início" → "projetos" → "serviços" etc.
- Scales up when docked at station, scales down in transit
- Flame response to speed

### 2. MacbookFrame (Device mockup)
- Desktop-size mockup with dark bezels
- Two image slots with fade/scale transition (0.55s opacity, 0.7s transform)
- Tab control (missões/quizzes) with button state
- Auto-cycle every 4.6s (pause on click/hover)
- Legend updates on tab change with fade transition

### 3. IPhoneFrame (Device mockup)
- Phone-size mockup with status bar
- Video player with play/pause toggle
- Alt image for App Store view
- Floating animation: rotate -3.5deg / 3.5deg, translateY ±11px, 7s cycle

### 4. ProjectCard
- 5 projects total: Naches (live), Noticiato (live), Órbita (placeholder), Cometa (placeholder), Nuvem (placeholder), Estação (placeholder)
- Border-radius 26px, shadow 0 3px 0 rgba(44,33,24,.13)
- Hover: scale down 2px/3px, shadow increases
- Tags: display flex gap 8px
- CTA button: coral background, 3px black border, shadow 0 5px 0

### 5. LanguageToggle
- PT/EN buttons, persistent in localStorage as 'feira-idioma'
- Active state: #FFFBF0 background, shadow
- Inactive: transparent, 55% opacity
- All text nodes walked and swapped via translation map

### 6. CaseStudy Layout
- Hero with badge, title, subtitle
- 2-column grid for sections (challenge / approach)
- Approach: 4 numbered cards in grid
- Full-bleed closing section (dark background, logo centered, breathing animation)

## Design Tokens (Exact)

```ts
export const tokens = {
  colors: {
    cream: '#FBF3E0',
    dark: '#2C2118',
    darkest: '#1B1512',
    light: '#FFFBF0',
    lightBg: '#F4EBD9',
    coral: '#E04B33',
    purple: '#7A4A8C',
    green: '#4C8C3F',
    yellow: '#F2B32C',
    blue: '#027BE8',
    naches: '#027BE8',
    noticiato: '#F2B32C',
    gray50: 'rgba(44,33,24,.5)',
    gray55: 'rgba(44,33,24,.55)',
    gray62: 'rgba(44,33,24,.62)',
    gray66: 'rgba(44,33,24,.66)',
    gray70: 'rgba(44,33,24,.7)',
    gray78: 'rgba(44,33,24,.78)',
  },
  fonts: {
    display: 'Baloo 2',
    body: 'DM Sans',
    mono: 'Space Mono',
  },
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '28px',
    xxl: '40px',
  },
  radius: {
    pill: '999px',
    card: '26px',
    image: '22px',
  },
  shadow: {
    card: '0 3px 0 rgba(44,33,24,.13)',
    emphasis: '0 5px 0 rgba(44,33,24,.2)',
    macbook: '0 22px 44px rgba(44,33,24,.28)',
  },
  motion: {
    duration: '0.6s',
    easing: 'cubic-bezier(.22,1,.36,1)',
    ease: 'ease-in-out',
  },
};
```

## Translation Keys (PT → EN)

All text is mapped in translations.ts. Example structure:
```ts
export const translations = {
  'voltar pra feira': 'back to the market',
  'case · edtech': 'case · edtech',
  'Naches: a escola inteira jogando o mesmo jogo': 'Naches: the whole school playing the same game',
  // ... 100+ keys
};
```

## Critical Implementation Notes

1. **Rocket scroll**: Use RAF for smooth 60fps tracking. Calc docked state (e < 0.08 or e > 0.92).
2. **Device frames**: SVG bezels, images inside <img> or <video>, NOT background-image.
3. **Animations**: Prefer CSS @keyframes + animation shorthand over transitions where possible.
4. **Language**: Walk text nodes only (NodeFilter.SHOW_TEXT). Never use innerHTML for swaps.
5. **Overflow**: Container overflow-x: clip to hide horizontal scroll on MacBooks.
6. **localStorage**: Persist language choice, not state between sessions (cases are client nav).
7. **Responsive**: clamp(min, preferred, max) for fluid scaling. Max-width 1080px.
8. **Accessibility**: Semantic HTML5, aria-pressed on toggle buttons, alt text on images.

## Color Assignments by Section

- **Portfolio Feira**: #FBF3E0 bg, cream text
- **Case Naches**: #FBF3E0 bg, coral accents, blue highlights
- **Case Noticiato**: #FBF3E0 bg, yellow accents
- **Identidade Visual**: #100E2E bg (dark mode), creme/yellow/pink accents

## Motion Timings

- MacBook auto-cycle: 4.6s
- Noticiato planos carousel: 38s
- Wireframe scroll: 30s up/down
- Rocket idle bob: 0.62s
- Rocket flame flick: 0.42s
- Tab fade: 0.25s
- Screen transitions: 0.3s opacity

## Handoff checklist
- [ ] Clone structure from HTML files
- [ ] Set up fonts (Google Fonts link in <head>)
- [ ] Copy assets to public/assets/
- [ ] Implement RocketScroll with RAF + easing
- [ ] Build device frames (MacBook, iPhone SVG bezels)
- [ ] Set up language toggle + translation walk
- [ ] Test responsive breakpoints
- [ ] Deploy and verify scroll performance

---

**Next step**: Start with Portfolio landing page. Once home scrolls & rocket moves, move to individual case pages.
