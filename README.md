# Srimuthuvel S — Portfolio

A personal developer portfolio built with React + Vite. Dark, glassmorphism-inspired
theme with an animated terminal hero, interactive project cards, a live GitHub feed,
and a fully responsive layout.

## Tech stack

- React 19 + Vite
- framer-motion (hero + modal animations)
- lucide-react (icons)
- Plain CSS (no framework) with design tokens in `src/index.css`

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, SocialLinks, ProjectCard, ProjectModal, Terminal, icons
  sections/     Page sections: Hero, About, Skills, Projects, Journey, Education, Achievements, GithubSection, Contact
  hooks/        useReveal — scroll-reveal IntersectionObserver hook
  data/         profile.js — ALL editable content (bio, skills, projects, education, etc.)
  assets/       profile photo
public/
  resume.pdf    Downloadable resume (served by the "Download Resume" button)
```

To update your info later, you only need to edit **`src/data/profile.js`** — no
component code changes required for text content.

## Run locally in VS Code

1. Open this folder in VS Code.
2. Open a terminal (``Ctrl+` ``) and install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the printed URL (usually `http://localhost:5173`) in your browser.

## Production build

```bash
npm run build      # outputs static files to dist/
npm run preview    # serve the production build locally to sanity-check it
```

## Notes

- The GitHub section fetches your repositories live from the public GitHub API
  (`https://api.github.com/users/24104038-code/repos`) — no token or backend needed.
- The contact form is frontend-only for now (see `src/sections/Contact.jsx`); wire
  it up to a service like Formspree, EmailJS, or your own API route when ready.
- Replace `public/resume.pdf` any time you update your resume — the filename must
  stay the same, or update `resumeFile` in `src/data/profile.js`.
