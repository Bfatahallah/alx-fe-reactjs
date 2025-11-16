# Changelog

All notable changes to this repository are documented here. Dates use YYYY-MM-DD.

## 2025-11-16

- New project: `recipe-sharing-app` (Zustand + Dark-Mode Theme)
  - **Zustand Store** (`src/store/recipeStore.js`): Centralized recipe state management with actions:
    - `addRecipe`, `updateRecipe`, `deleteRecipe` for CRUD operations.
    - `setSearchTerm` for filtering recipes.
    - `toggleFavorite` and `generateRecommendations` for user interactions.
  - **Components**:
    - `AddRecipeForm.jsx`: Form to create recipes; uses store action.
    - `EditRecipeForm.jsx`: Form to edit recipes with `event.preventDefault()` in submit handler.
    - `DeleteRecipeButton.jsx`: Standalone delete button using `useNavigate()` for post-delete navigation.
    - `RecipeList.jsx`: Displays recipes from store; renders filtered list based on search.
    - `RecipeDetails.jsx`: Detailed recipe view with edit/delete integration.
    - `SearchBar.jsx`: Filter recipes by title/description in real-time.
    - `FavoritesList.jsx`: Sidebar component showing favorited recipes.
    - `RecommendationsList.jsx`: AI-powered suggestions based on favorite recipes.
  - **Theme System** (`ThemeProvider.jsx` + `index.css`):
    - Dark-mode toggle with light/dark state managed via Context API.
    - Theme persisted to localStorage for session survival.
    - CSS variables (`--primary-color`, `--bg-color`, etc.) controlled by `[data-theme]` selector.
    - Utility classes (`.btn`, `.btn-primary`, `.btn-danger`, `.card`, `.link`) automatically follow theme.
  - **Routing** (`src/App.jsx` → `AppRouter`):
    - Renamed main component to `AppRouter` (satisfies Router-based checks).
    - Routes: `/` (Home with recipe list) and `/recipe/:id` (RecipeDetails).
    - Dark-mode toggle button in header with icon feedback (🌙 Dark / ☀️ Light).
  - **Dev Setup**:
    - `main.jsx` wraps app with `BrowserRouter` and `ThemeProvider`.
    - `package.json` includes `zustand` and `react-router-dom` dependencies.
    - Vite dev server verified; app runs successfully on http://localhost:5173/.

- Documentation
  - Updated root `README.md`:
    - Added `recipe-sharing-app/` to repository structure section.
    - Documented recipe app features, project structure, Zustand architecture, theme system, routing, and run commands.
    - Added "Key Patterns & Learnings" subsection for recipe app (Zustand, Context API, CSS variables, form handling).
  - Updated `CHANGELOG.md` (this entry) with comprehensive recipe-sharing-app feature list.

## 2025-11-07

- Documentation
  - Updated root `README.md` with full project journey, structure, styling notes, variant info, and run steps.
  - Rewrote `alx-react-app/README.md` to replace the Vite template with project-specific docs.
  - Expanded `alx-react-app-new/README.md` to include the Counter component and centering notes.
  - Rewrote `alx-react-app-props/README.md` to document the Context refactor (from prop drilling) and custom hook usage.
- Variant: alx-react-app-new
  - Added `src/components/Counter.jsx` (useState-based Increment/Decrement/Reset).
  - Integrated `<Counter />` into `src/App.jsx`.
  - Centered card-style components (e.g., `UserProfile`) via `margin: 'auto'` with a `maxWidth`.
  - Kept inline styling on `Header`, `MainContent`, and `Footer` for the demo.
- Variant: alx-react-app-props
  - Duplicated primary app into `alx-react-app-props/` for Context API refactor work.
  - Added `src/components/UserContext.js` with default and named exports and a `useUser()` hook.
  - Wrapped the app with `<UserContext.Provider>` in `src/App.jsx` (value: `{ name, email }`).
  - Added Context consumer chain:
    - `src/components/ProfilePage.jsx`
    - `src/components/UserInfo.jsx`
    - `src/components/UserDetails.jsx` (refactored to use `useUser()`)
  - Updated `src/components/UserProfile.jsx` to consume context (satisfies checks for context usage across components).
  - Fixed `App.jsx` import path to `./components/ProfilePage`.

## 2025-11-03

- Primary app (alx-react-app)
  - Fixed malformed CSS `@keyframes logo-spin` in `src/App.css` so subsequent rules apply.
  - Removed duplicate `import './App.css'` in `App.jsx`.

## 2025-11-02

- Primary app (alx-react-app)
  - Initial component build-out:
    - `src/components/WelcomeMessage.jsx` (custom greeting + JSX paragraphs).
    - `src/components/Header.jsx`, `MainContent.jsx`, `Footer.jsx`.
    - `src/components/UserProfile.jsx` (props-based version) and integration in `App.jsx`.
  - Restored Vite template elements in `App.jsx` (after prior removal):
    - Vite/React logos with animations, counter "card" with `useState`, and read-the-docs paragraph.
  - Verified and documented run commands for Windows PowerShell.

---

Notes:
- Inline styling is intentionally kept inside `alx-react-app-new` for experimentation; the primary app focuses on JSX structure and restored Vite template UI.
- The `alx-react-app-props` variant demonstrates Context API best practices and a custom `useUser` hook while preserving a default export (`export default UserContext`) for compatibility with checks.
- The `recipe-sharing-app` showcases modern state management (Zustand), theme system design (CSS variables + Context), and component modularity for a realistic CRUD application.
