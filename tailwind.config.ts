import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.css",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        md: "1.5rem",
      },
    },
    extend: {
      colors: {
        primary:{
          DEFAULT: '#078dae',
          '50': '#ecfeff',
          '100': '#cffafe',
          '200': '#a5f3fc',
          '300': '#66e8fa',
          '400': '#21d3ef',
          '500': '#05b6d5',
          '600': '#078dae',
          '700': '#0d7491',
          '800': '#155e75',
          '900': '#164e63',
          '950': '#083344',
        },
        secondary: {
          DEFAULT: '#b5c55e',
          '50': '#f8f9ec',
          '100': '#eff2d5',
          '200': '#dfe7af',
          '300': '#c9d680',
          '400': '#b5c55e',
          '500': '#95a83a',
          '600': '#74852b',
          '700': '#596625',
          '800': '#485222',
          '900': '#3e4720',
          '950': '#20260d',
        },
        background: "#efefef",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      animation: {
        'ping-large': 'ping-large 1s ease-in-out infinite',
        'move-left': 'move-left 35s linear infinite',
        'move-right': 'move-right 35s linear infinite',
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
        'move-left': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)'
          },
        },
        'move-right': {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(0)'
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
