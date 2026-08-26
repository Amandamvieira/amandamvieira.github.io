export const designTokens = {
  colors: {
    cream: '#FBF3E0',
    darkText: '#2C2118',
    darkest: '#1B1512',
    lightBg: '#FFFBF0',
    veryLight: '#F4EBD9',
    coral: '#E04B33',
    purple: '#7A4A8C',
    green: '#4C8C3F',
    yellow: '#F2B32C',
    blue: '#027BE8',
    opacity: {
      50: 'rgba(44,33,24,.5)',
      55: 'rgba(44,33,24,.55)',
      62: 'rgba(44,33,24,.62)',
      66: 'rgba(44,33,24,.66)',
      70: 'rgba(44,33,24,.7)',
      78: 'rgba(44,33,24,.78)',
    },
  },
  typography: {
    display: { family: 'Baloo 2', weight: 800, lineHeight: 1.02, letterSpacing: '-0.03em' },
    heading: { family: 'Baloo 2', weight: 700, letterSpacing: '-0.01em' },
    body: { family: 'DM Sans', weight: 400, lineHeight: 1.55 },
    bodyBold: { family: 'DM Sans', weight: 500, lineHeight: 1.55 },
    label: { family: 'Baloo 2', weight: 700, fontSize: '14px', letterSpacing: '0.12em' },
    mono: { family: 'Space Mono', weight: 400, letterSpacing: '0.14em', fontSize: '11px' },
  },
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '28px',
    xxl: '40px',
    xxxl: '56px',
  },
  radius: {
    full: '999px',
    card: '26px',
    image: '22px',
    slight: '13px',
  },
  shadows: {
    card: '0 3px 0 rgba(44,33,24,.13)',
    emphasis: '0 5px 0 rgba(44,33,24,.2)',
    macbook: '0 22px 44px rgba(44,33,24,.28)',
    device: '0 16px 30px rgba(44,33,24,.28)',
  },
  motion: {
    duration: {
      fast: '0.25s',
      normal: '0.6s',
      slow: '0.7s',
    },
    easing: 'cubic-bezier(.22,1,.36,1)',
    easingEaseInOut: 'ease-in-out',
  },
};

export const fontImports = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">
`;
