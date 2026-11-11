# KrisOps Portfolio

A multi-page portfolio for bespoke software and workflow solutions. Portfolio content is stored in the frontend and does not require the Render API. The contact form uses Web3Forms.

## Pages

- `/` — positioning, approach, and impact highlights
- `/solutions` — services, delivery process, case studies, and selected projects
- `/about` — background, experience, education, and skills
- `/contact` — contact details and the Web3Forms contact form

## Run locally

```bash
npm install
npm run dev
```

Nuxt starts on `http://localhost:8080`.

For contact form submissions, add a Web3Forms access key to `.env`:

```bash
NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key
```

SEO metadata uses `NUXT_PUBLIC_SITE_URL` to build canonical and social-share URLs. It defaults to `https://krisops.netlify.app`. If the public domain changes, update this value and the host in `public/robots.txt` and `public/sitemap.xml` together.

## Update portfolio content

Edit `data/portfolio.js` to update education, skills, experience, and project cards. The impact case studies are in `components/partials/CaseStudies.vue`; the e-commerce client story is in `components/partials/ClientOutcome.vue`. Project preview images are in `public/images/portfolio/`.

The contact form sends messages through Web3Forms. Portfolio data remains local to the frontend.
