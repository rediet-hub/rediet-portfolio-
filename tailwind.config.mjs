/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink:        '#1a1410',
        earth:      '#8B4513',
        gold:       '#C8941A',
        'gold-light': '#E8B84B',
        cream:      '#F5EFE6',
        'warm-white': '#FBF8F3',
        stone:      '#9E9189',
        rust:       '#C0522A',
        forest:     '#2D4A3E',
        mist:       '#E8E0D5',
      },
      fontFamily: {
        serif:  ['Playfair Display', 'Georgia', 'serif'],
        sans:   ['DM Sans', 'sans-serif'],
        mono:   ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
