/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFF8EE',
        'bg-secondary': '#FCEFD9',
        fg: '#3A2A1A',
        muted: '#7C6A55',
        accent: '#D97A2C',
        accent2: '#A65A1F',
        border: '#E8D7BC',
        hover: '#F5E6CC',
      },
      fontFamily: {
        heading: ["'Nanum Myeongjo', serif", 'system-ui', 'sans-serif'],
        body: ["'Nanum Gothic', sans-serif", 'system-ui', 'sans-serif'],
        mono: ['ui-monospace, monospace', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
        wide: '1100px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#3A2A1A',
            '--tw-prose-headings': '#3A2A1A',
            '--tw-prose-links': '#D97A2C',
            '--tw-prose-bold': '#D97A2C',
            '--tw-prose-quotes': '#7C6A55',
            '--tw-prose-quote-borders': '#D97A2C',
            '--tw-prose-code': '#D97A2C',
            '--tw-prose-borders': '#E8D7BC',
            maxWidth: '720px',
            fontSize: '1.05rem',
            lineHeight: '1.85',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
            h2: {
              borderBottom: '1px solid #E8D7BC',
              paddingBottom: '0.5rem',
              marginTop: '3rem',
            },
            blockquote: {
              background: '#F5E6CC',
              borderRadius: '0 8px 8px 0',
              padding: '0.8rem 1.2rem',
              fontStyle: 'italic',
            },
            img: {
              borderRadius: '12px',
              boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
              margin: '2rem auto',
            },
            code: {
              background: '#F5E6CC',
              padding: '0.15rem 0.45rem',
              borderRadius: '4px',
              border: '1px solid #E8D7BC',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
