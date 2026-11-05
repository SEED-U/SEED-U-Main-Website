# SEED U Website

The official website for **SEED U**, an early-stage initiative focused on useful AI for Indian languages and local contexts, starting with Marathi Agriculture AI in Maharashtra.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) with React 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4 for styling
- [GSAP](https://gsap.com) with ScrollTrigger for scroll animations
- [Nodemailer](https://nodemailer.com) for contact form emails over SMTP
- Hosted on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

| Command         | What it does                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the local dev server       |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

## Environment variables

The contact form needs SMTP credentials. For local development, create a `.env.local` file in the project root. It is gitignored, so never commit it.

```bash
SMTP_HOST=        # mail server, e.g. smtp.gmail.com or smtp.hostinger.com
SMTP_PORT=        # 587 (STARTTLS) or 465 (SSL)
SMTP_USER=        # address the site sends from
SMTP_PASS=        # password or app password for SMTP_USER
CONTACT_EMAIL=    # inbox that receives contact form messages
```

In production, these are set in the Vercel project under **Settings → Environment Variables**.

## Project structure

```
app/
├── api/contact/route.ts   # POST endpoint that emails contact form submissions
├── components/            # Page sections (Hero, About, Focus, Team, Contact, etc.)
├── globals.css            # Tailwind setup and theme tokens
├── layout.tsx             # Root layout, fonts and SEO metadata
└── page.tsx               # Home page
public/                    # Static assets
```

## Deployment

The repository is connected to Vercel. A push to `main` deploys to production, and a push to any other branch creates a preview deployment.
