# Alhocool

A modern React + TypeScript web app for exploring drink categories, styles, and flavor-driven non-alcoholic alternatives. The repo is split into a **frontend** (Vite + React) and a **backend** (Express API scaffold).

## Tech Stack

**Frontend**

- React 19 + TypeScript
- Vite
- React Router
- Firebase Authentication
- Bootstrap / React-Bootstrap

**Backend**

- Node.js + Express
- CORS enabled for local development

## Repository layout

```text
alhocool/
├── frontend/          # Vite React app (UI)
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── backend/           # Express API (extend as needed)
│   ├── src/
│   │   └── server.js
│   └── package.json
├── package.json       # npm workspaces (root)
├── .vscode/           # optional VS Code tasks & Chrome debug (safe to commit)
└── README.md
```

### What you should **not** commit

| Path | Reason |
|------|--------|
| `node_modules/` | Installed by `npm install`; large and machine-specific |
| `frontend/dist/` | Production build output from `npm run build`; regenerated |
| `frontend/.env` | Secrets; listed in `.gitignore` |

### VS Code

The repo includes **`.vscode/`** tasks for `npm run dev`, `dev:backend`, `build`, and `lint`, plus a **Chrome** launch config for the Vite app at `http://localhost:4000`. Start the dev server first (`npm run dev`), then use **Run → Start Debugging**. Personal editor settings stay ignored (only shared files are tracked).

### Frontend `src/` highlights

```text
frontend/src/
  components/
    global/        # header, footer
    main/          # home page sections
    search/        # search UI + catalog data
    login/         # auth form UI
    beer|wine|spirit|liqueur|rice-alcohol/
  pages/           # route pages
  context/         # theme context
  hooks/           # shared hooks (e.g. scroll reveal)
  firebase.ts      # Firebase app/auth setup
```

## Getting started

### 1) Install dependencies (from repo root)

This project uses **npm workspaces**. A single install at the root links `frontend` and `backend`:

```bash
npm install
```

### 2) Environment variables (frontend)

Create `frontend/.env` (not committed):

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
```

### 3) Run the apps

From the **repository root**:

```bash
# React app (default; Vite port 4000 per vite.config.ts)
npm run dev

# Or explicitly:
npm run dev:frontend

# API server (default port 5000)
npm run dev:backend
```

You can run frontend and backend in two terminals.

### Backend API

- `GET http://localhost:5000/api/health` — returns `{ ok: true, service: "alhocool-backend" }`

Set `PORT` in the environment to change the listen port.

## Scripts (root)

| Command | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server (`frontend`) |
| `npm run dev:frontend` | Same as `dev` |
| `npm run dev:backend` | Start Express with `--watch` |
| `npm run build` | Type-check and production build (`frontend`) |
| `npm run preview` | Preview production build (`frontend`) |
| `npm run lint` | ESLint (`frontend`) |

## App routes (frontend)

- `/main` — Main page
- `/about` — About page
- `/search` — Search and discovery page
- `/beer`, `/wine`, `/spirit`, `/liqueurs-cordial`, `/rice-based-alcohol` — Category pages
- `/login-signup` — Authentication page
- `/account` — User account page

## Notes

- Firebase Auth must be enabled in your Firebase project for login/signup to work.
- Some drink images are loaded from external CDNs (e.g. Unsplash/Pexels), so internet access is required for those assets.
- If you had an old `.env` at the repo root before this layout change, move it to **`frontend/.env`**.
