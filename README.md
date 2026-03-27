# Alhocool

A modern React + TypeScript web app for exploring drink categories, styles, and flavor-driven non-alcoholic alternatives.

## Tech Stack

- React 19 + TypeScript
- Vite
- React Router
- Firebase Authentication
- Bootstrap / React-Bootstrap

## Features

- Curated sections for beer, wine, spirits, liqueurs, and rice-based alcohol.
- Dynamic homepage with randomized featured drinks.
- Modern search experience with:
  - category filters
  - rich drink cards
  - descriptive imagery
  - non-alcoholic flavor recipes
- Login / signup flow with Firebase Auth.
- Theme toggle and polished global UI.

## Project Structure

```text
src/
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

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env` file in the project root:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
```

### 3) Run development server

```bash
npm run dev
```

Open the local URL printed in the terminal.

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Type-check and build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Routes

- `/main` - Main page
- `/about` - About page
- `/search` - Search and discovery page
- `/beer`, `/wine`, `/spirit`, `/liqueurs-cordial`, `/rice-based-alcohol` - Category pages
- `/login-signup` - Authentication page
- `/account` - User account page

## Notes

- Firebase Auth must be enabled in your Firebase project for login/signup to work.
- Some drink images are loaded from external CDNs (e.g. Unsplash/Pexels), so internet access is required for those assets.
