# React Portfolio Website

A responsive personal portfolio built with React, Vite, and plain CSS. Includes a hero section, project cards, about section, services, contact area, and mobile navigation.

## Requirements

- Node.js 18 or newer (Node.js 20 LTS is a good choice)
- npm (included with Node.js)
- VS Code or another code editor (optional)

## Run locally

1. Extract `react-portfolio.zip`.
2. Open the extracted `react-portfolio` folder in VS Code.
3. Open a terminal in that folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Create a production build

```bash
npm run build
```

Vite writes the production website to the `dist` folder. To preview the build locally:

```bash
npm run preview
```

## Personalize the portfolio

Edit `src/App.jsx`:
- Change `Arjun` and the browser title to your preferred name.
- Update the `projects` array with your real project names, descriptions, and technologies.
- Change `hello@example.com` to your email address.
- Update the GitHub and LinkedIn URLs to your profiles.
- Add your real project URLs where desired.

Edit `src/styles.css` to adjust colors, typography, spacing, and layout.

## Notes

- The Google Fonts import requires an internet connection; system fallback fonts will be used if unavailable.
- Project artwork is made from CSS shapes and text, so no image assets are required.
- This is a frontend-only portfolio template. The contact button opens the visitor's email app; it does not submit to a backend.
