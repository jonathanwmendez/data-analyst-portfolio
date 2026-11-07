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

## Visual editing with Retune

[Retune](https://www.retune.dev) adds a visual editor on top of the site while it runs locally. It never loads on the live site.

1. Run `npm install`, then `npm run dev` and open http://localhost:3000
2. Press **Option+D** (Mac) or **Alt+D** (Windows) to toggle edit mode
3. Click any element and adjust spacing, colors, text, or layout. Changes preview instantly.
4. Send the changes to your AI agent to write them into the code:
   - **Claude Code or Cursor:** run `npx retune setup` once. It connects Retune so the agent can read your edits directly.
   - **Any other tool (including Claude chat):** use Retune's copy button and paste the diff into the chat.
5. Commit and push. Vercel redeploys automatically.

## Preview before going live

Pushing to `main` updates the live site. To preview a change first, push it to a different branch:

```bash
git checkout -b my-edit
git push -u origin my-edit
```

Vercel builds a private preview URL for that branch (shown in the Vercel dashboard and on GitHub). When it looks right, merge it into `main` to go live.
