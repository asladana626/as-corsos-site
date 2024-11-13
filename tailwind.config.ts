import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import { League_Spartan, Montserrat } from 'next/font/google';

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
      'laptop': '1024px',
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
