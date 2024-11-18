import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        'heading': ['"League Spartan"', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
    },
    screens: {
      'mobile': '375px', 

      'sm': '640px',

      'tablet': '768px',

      'laptop': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
