## ALX React App (Variant: alx-react-app-new)

This folder is a parallel variant of the main ALX React learning project. It mirrors the core exercises while allowing experimentation without disturbing the primary `alx-react-app` directory.

### What This Variant Contains
- Core components recreated: `Header`, `MainContent`, `Footer`, `UserProfile`, `WelcomeMessage`.
- Inline styling applied (as part of the styling exercise) directly on each React component instead of external CSS classes.
- A styled `UserProfile` card demonstrating props and inline visual design.

### Getting Started
```bash
cd alx-react-app-new
npm install   # if node_modules not present
npm run dev
```
Then open the URL (usually http://localhost:5173) shown in the terminal.

### Component Summary
| Component | Purpose | Notable Inline Styles |
|-----------|---------|------------------------|
| `Header` | Displays title banner | Navy background, centered white text |
| `MainContent` | Shows cities paragraph | Light gray background, rounded corners |
| `Footer` | Copyright line | Dark background, white text |
| `UserProfile` | Demonstrates props (name, age, bio) | Bordered card, blue heading, bold age |
| `WelcomeMessage` | Intro messaging | Basic static JSX |

### Example: Styled UserProfile
```jsx
<UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
```

### Why Keep This Folder
You can safely try refactors (e.g., converting inline styles to CSS Modules) here first. Once stable, port changes back to the main app.

### Next Ideas
- Extract repeated inline styles into utility CSS classes.
- Add prop type validation via `prop-types`.
- Introduce a theme (light/dark) using React context.

### Run Scripts
```bash
npm run dev     # Start Vite dev server
npm run build   # Production build
npm run preview # Preview production build
```

### Credits
Created as part of the ALX Front-End learning curriculum (variant workspace).

