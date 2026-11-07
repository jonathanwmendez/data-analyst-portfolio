# Jonathan Mendez · Data Analyst Portfolio

Live site: https://jonathanwmendez-portfolio.vercel.app

Next.js + Tailwind CSS + shadcn/ui. Static single page, ready for Vercel.

## Edit your content

Everything you'll want to change is in **`src/lib/content.ts`**: profile, about, skills, projects, experience, education.
Search that file for `TODO` to find placeholders.

- **Headshot:** put `headshot.jpg` in `/public`, then set `photo: "/headshot.jpg"`.
- **Resume:** put `resume.pdf` in `/public` (the nav button already points there).
- **Project screenshots:** put an image in `/public` and set `image: "/my-project.png"` on that project. Without one, a chart-style thumbnail is drawn. Wide images (about 2:1) fit best.
- **Brand color:** change `--primary` in `src/app/globals.css`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a new GitHub repo:
   ```bash
   git init && git add -A && git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to vercel.com/new, import the repo, and click **Deploy**. No settings needed; Vercel detects Next.js.
3. Every push to `main` redeploys automatically.

Or skip GitHub: `npm i -g vercel` then run `vercel` in this folder.

## Adding more shadcn components

`components.json` is configured, so this works on your machine:

```bash
npx shadcn@latest add dialog
```
