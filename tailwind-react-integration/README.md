# Tailwind React Integration

A minimal React + Vite app demonstrating Tailwind CSS (via the `@tailwindcss/vite` plugin) with a styled, responsive, and interactive `UserProfile` component.

## What Was Done
- Scaffolded a new Vite React app in `tailwind-react-integration`.
- Installed Tailwind CSS and the Vite plugin: `tailwindcss` and `@tailwindcss/vite`.
- Configured the plugin in `vite.config.js` and imported Tailwind in `src/index.css`.
- Implemented and styled `src/components/UserProfile.jsx` using Tailwind utility classes.
- Added responsive utilities (`sm`, `md`) for padding, max-width, image sizes, and typography.
- Added interactivity and transitions: image hover scale, heading hover color, and elevated shadow on hover.

## Project Structure
```
 tailwind-react-integration/
 ├─ index.html
 ├─ package.json
 ├─ vite.config.js
 └─ src/
    ├─ App.jsx
    ├─ main.jsx
    ├─ index.css
    └─ components/
       └─ UserProfile.jsx
```

## Tailwind Setup
- Vite plugin configuration (`vite.config.js`):
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```
- Import Tailwind in `src/index.css`:
```css
@import "tailwindcss";
```

## UserProfile Styling
- Container:
  - `bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out`
- Image:
  - `rounded-full mx-auto w-24 h-24 md:w-36 md:h-36 transform transition-transform duration-300 ease-in-out hover:scale-110`
- Heading:
  - `text-lg md:text-xl text-blue-800 hover:text-blue-500 my-4 transition-colors duration-300`
- Paragraph:
  - `text-sm md:text-base text-gray-600`

## Getting Started
Prerequisites: Node.js 18+

Install dependencies and run the dev server:
```powershell
Push-Location "c:\Users\bfata\Desktop\ALX\alx-fe-reactjs\tailwind-react-integration"
npm install
npm run dev
```
Open the URL shown in the terminal to view the app.

## Verification
You should see a centered profile card with:
- Cool gray background, rounded corners, and a shadow.
- A circular profile image that scales on hover.
- A blue heading that lightens on hover.
- Responsive spacing, typography, and image sizes on small vs. medium screens.

## Notes
- This project uses Tailwind v4 style import via `@tailwindcss/vite`; no separate PostCSS config is required.
- Customize themes and components by extending Tailwind classes in your JSX.

## Next Steps
- Add more components (cards, lists, forms) styled with Tailwind.
- Introduce dark mode and reusable layout primitives.
- Extract configuration or constants as needed for larger apps.
