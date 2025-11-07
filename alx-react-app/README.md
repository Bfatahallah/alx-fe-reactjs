## ALX React Learning App (Primary: alx-react-app)

This project began as a vanilla Vite + React scaffold and evolved through a series of ALX Front-End curriculum tasks covering JSX, components, props, styling, state, and restoring template elements.

### Timeline of Tasks Completed
1. Project initialization with Vite (`npm create vite@latest alx-react-app -- --template react`).
2. Added `WelcomeMessage.jsx` with custom greeting and JSX paragraphs.
3. Built core layout components: `Header`, `MainContent`, `Footer`.
4. Added a `UserProfile` component (initially props-based) in the primary app.
5. Restored original Vite template UI (logos, spinning React logo, counter card, read-the-docs paragraph) after accidental removal.
6. Inline styling exercise: applied direct styles to Header, MainContent, Footer, UserProfile.
7. Created a variant folder (`alx-react-app-new`) to safely experiment with refactors and a `Counter` component using `useState`.
8. Implemented a separate props → context refactor in duplicated `alx-react-app-props` (detailed in its own README).
9. Enhanced context usage and introduced a custom hook `useUser` (in props variant).

### Project Structure (Key Files)
```
alx-react-app/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MainContent.jsx
│   │   ├── Footer.jsx
│   │   ├── UserProfile.jsx
│   │   ├── WelcomeMessage.jsx
│   └── main.jsx
└── package.json
```

### Core Components (Primary App)
| Component | Purpose | Notes |
|-----------|---------|-------|
| Header | Displays title/banner | Later styled inline |
| MainContent | Shows cities text | Light content block |
| Footer | Footer attribution | Styled and versioned year |
| WelcomeMessage | Greeting + JSX examples | Uses `.zbi` class for styling experiment |
| UserProfile | Demonstrates props (initially) | Later replaced by context version in props variant |

### Restored Vite Template Elements
```jsx
<div>
	<a href="https://vitejs.dev" target="_blank"><img src={viteLogo} className="logo" /></a>
	<a href="https://react.dev" target="_blank"><img src={reactLogo} className="logo react" /></a>
</div>
<div className="card">
	<button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
	<p>Edit <code>src/App.jsx</code> and save to test HMR</p>
</div>
```

### Inline Styling Example
```jsx
<header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', padding: '1rem' }}>
	<h1>My Bucket list of Favorite Cities</h1>
</header>
```

### How to Run
```bash
cd alx-react-app
npm install
npm run dev
```
App will be served at http://localhost:5173.

### Next Possible Enhancements
- Move inline styles into CSS Modules or styled-components.
- Add prop-types for validation or migrate to TypeScript.
- Extract reusable layout shell.
- Introduce context for theme toggling (light/dark).

### Credits
Developed by Badr Fatahallah as part of ALX Front-End curriculum.

