# Portfolio — Your Name

Personal portfolio site built with **Astro**, **Tailwind CSS**, and **React**.

## Stack
- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- [React](https://react.dev) — interactive components (charts)
- [Recharts](https://recharts.org) — data visualization
- [Formspree](https://formspree.io) — contact form (free tier)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

## Project Structure

```
src/
├── pages/
│   ├── index.astro          # Homepage (all sections)
│   └── blog/
│       └── index.astro      # Blog listing page
├── layouts/
│   ├── Base.astro           # Nav + footer wrapper
│   └── BlogPost.astro       # Article page layout
├── components/
│   └── AirlineChart.tsx     # Interactive React chart
├── content/
│   └── blog/
│       └── *.mdx            # Your articles (add more here!)
└── styles/
    └── global.css           # Fonts, animations, prose styles
```

## How to Add a New Article

1. Create a new `.mdx` file in `src/content/blog/`
2. Add frontmatter at the top:

```mdx
---
layout: ../../layouts/BlogPost.astro
title: "Your Article Title"
description: "A one-sentence summary shown in previews."
pubDate: "2025-07-01"
tag: "Aviation"
readTime: "5 min read"
---

Your article content here in Markdown...
```

3. Save — it automatically appears on `/blog` and the homepage

## Customization Checklist

- [ ] Replace "Your Name" in `src/layouts/Base.astro` and `src/pages/index.astro`
- [ ] Update email, LinkedIn, X, SSRN links in `index.astro` (Contact section)
- [ ] Add your real CV PDF to `public/cv.pdf`
- [ ] Sign up at [Formspree](https://formspree.io), get your form ID, replace `YOUR_FORM_ID`
- [ ] Update skills in the About section
- [ ] Link your actual paper PDFs in the Research section
- [ ] Replace market share data in `AirlineChart.tsx` with your actual figures

## Deploying to Vercel (Free)

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Vercel auto-detects Astro — just click Deploy
4. Your site is live at `yourname.vercel.app`

You can also connect a custom domain (e.g. `yourname.com`) — Vercel supports this on the free plan.
