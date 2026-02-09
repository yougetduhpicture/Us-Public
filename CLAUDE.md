# CLAUDE.md

## Project Overview

This is the official website for the band **Us**. It is a full-stack web application with a React frontend and an Express backend, backed by MongoDB.

**Live site:** https://usbandofficial.com/

## Production Warning

This website is **in production** and publicly accessible. Everything must be fully functional before pushing to git. Broken pushes to `main` will immediately affect the live site.

## Tech Stack

- **Frontend:** React 18 + Vite 7, CSS — located in `us2.0/`
- **Backend:** Node.js + Express 4, Mongoose 8 — located in `usbackend/`
- **Database:** MongoDB Atlas
- **Hosting:** Render, serving the backend which includes the built frontend
- **External APIs:** Bandsintown (show data), Mailchimp (newsletter)

## Project Structure

- `us2.0/` — Frontend source (React SPA)
- `usbackend/` — Backend server + production build
- `usbackend/build/` — Minified frontend output served by Express in production

## Build & Deployment

The Express backend in `usbackend/` serves the minified frontend from its `build/` directory. This is what Render deploys.

**After making frontend changes, you must run `deploy:full` from `usbackend/` to update the build:**

```bash
cd usbackend
npm run deploy:full    # Builds UI, copies to usbackend/build/, commits, and pushes to main
```

This command:
1. Runs `build:ui` — deletes `usbackend/build/`, runs `vite build` in `us2.0/`, copies output to `usbackend/build/`
2. Stages and commits all changes
3. Pushes to `main`, which triggers an automatic redeploy on Render

For building without deploying:
```bash
npm run build:ui       # Only builds and copies, does not commit or push
```

## API Endpoints

| Method | Endpoint     | Description                              |
| ------ | ------------ | ---------------------------------------- |
| `GET`  | `/`          | Serves the frontend SPA                  |
| `GET`  | `/api/shows` | Returns all past shows from MongoDB      |

## Environment Variables

Backend (`usbackend/.env`):
- `PORT` — Server port
- `MONGODB_URI` — MongoDB Atlas connection string

## Key Conventions

- The band is always referred to as **Us** (capital U, lowercase s)
- Frontend dev server: `npm run dev` in `us2.0/`
- Backend dev server: `npm run dev` in `usbackend/`

## Repository

- **GitHub:** https://github.com/Yougetduhpicure/UsBandOfficial
- **Author:** Rasmus Ruonakoski
