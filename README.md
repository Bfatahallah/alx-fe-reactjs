# ALX Front-End React.js Project

This project was created as part of the ALX Front-End Development curriculum. It demonstrates fundamental React.js concepts including component creation, props handling, and component composition.

## Project Setup

### Initial Setup
```bash
# Create the project directory
mkdir alx-fe-reactjs
cd alx-fe-reactjs

# Initialize the React project using Vite
npm create vite@latest alx-react-app -- --template react
cd alx-react-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Repository Structure

This repository contains four related React apps used for learning and iteration:

```
alx-fe-reactjs/
├── alx-react-app/              # Primary app (basics + restored Vite starter UI)
├── alx-react-app-new/          # Rebuild + Counter component and styling experiments
├── alx-react-app-props/        # Prop drilling → Context API refactor (with custom hook)
├── my-company/                 # Four-page company site with React Router + inline styles
├── recipe-sharing-app/         # Recipe management app with Zustand + dark-mode theme
└── github-user-search/         # GitHub user search with advanced filters + Tailwind CSS
```

## Project Structure (Primary App)
```
alx-react-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MainContent.jsx
│   │   ├── Footer.jsx
│   │   ├── UserProfile.jsx
│   │   └── WelcomeMessage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
└── vite.config.js
```

## Component Development Journey (Primary `alx-react-app`)

### 1. Welcome Message Component
Created a simple welcome component to display a greeting message:
```jsx
// src/components/WelcomeMessage.jsx
function WelcomeMessage() {
    return (
        <div>
            <h1>Hello everyone, I am learning React at ALX!</h1>
            <p>This is a simple JSX component.</p>
            <p>I am learning about JSX!</p>
        </div>
    );
}
```

### 2. City-Related Components
Created three components to display information about favorite cities:

```jsx
// src/components/Header.jsx
function Header() {
    return (
        <header>
            <h1>My Favorite Cities</h1>
        </header>
    );
}

// src/components/MainContent.jsx
function MainContent() {
    return (
        <main>
            <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

// src/components/Footer.jsx
function Footer() {
    return (
        <footer>
            <p>© 2023 City Lovers</p>
        </footer>
    );
}
```

### 3. User Profile Component
Implemented a component that demonstrates props usage:

```jsx
// src/components/UserProfile.jsx
const UserProfile = (props) => {
    return (
        <div className="user-profile">
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};
```

### 4. App Component Integration
The main App component was updated to include all created components:

```jsx
// src/App.jsx
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <>
      <Header />
      <UserProfile 
        name="Alice Johnson"
        age="25"
        bio="Loves hiking, photography, and coding React applications!"
      />
      <MainContent />
      <Footer />
    </>
  )
}
```

## Styling Enhancements

Later in the iteration, inline styles were added to demonstrate quick component-level visual changes:

```jsx
// Example (Header.jsx)
<header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', padding: '1rem' }}>
    <h1>My Bucket list of Favorite Cities</h1>
</header>
```

```jsx
// Example (UserProfile.jsx)
<div style={{ border: '1px solid gray', padding: '12px', margin: '12px', borderRadius: '8px', maxWidth: '360px' }}>
    <h2 style={{ color: 'blue', fontSize: '1.5rem', margin: 0 }}>{props.name}</h2>
    <p style={{ margin: '8px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
    <p style={{ color: '#333', margin: 0 }}>Bio: {props.bio}</p>
</div>
```

These can later be refactored into CSS classes or CSS Modules for maintainability.

## Variant Project: `alx-react-app-new`

A secondary folder (`alx-react-app-new/`) was created to safely experiment with:

- Reapplying component construction from scratch
- Inline styling of all components (Header, MainContent, Footer, UserProfile)
- A separate README documenting its purpose

Run it independently:
```bash
cd alx-react-app-new
npm install
npm run dev
```

## Variant Project: `alx-react-app-props` (Context API)

This app demonstrates moving from prop drilling to the React Context API.

Highlights:
- `UserContext.js` initializes a context with a sensible default value.
- Exports both a named `UserContext` and a default export for flexibility.
- Provides a custom `useUser()` hook that wraps `useContext(UserContext)` safely.
- Components such as `UserDetails.jsx` and `UserProfile.jsx` consume the context directly (no prop drilling).

Run it independently:
```bash
cd alx-react-app-props
npm install
npm run dev
```

## Project: `my-company` (Company Website with Routing)

This app showcases a simple four-page company website using React Router and inline styling.

Pages and features:
- Home: Welcome message
- About: Company information
- Services: List of services
- Contact: Contact form with state (`useState`) and basic submit feedback
- Navbar: Global navigation using `Link` from `react-router-dom`
- Optional Footer: Renders on all pages

Routing setup:
- `BrowserRouter` is initialized in `src/main.jsx`
- `Routes` and `Route` are defined in `src/App.jsx` for each page

Run it independently:
```bash
cd my-company
npm install
npm run dev
```

## Project: `recipe-sharing-app` (Recipe Management with Zustand & Theme)

This app demonstrates state management using Zustand, React Router navigation, dark-mode theming, and a modular component architecture.

### Features
- **Recipe Management**: Add, edit, delete, and view recipes
- **Search & Filter**: Find recipes by title or description
- **Favorites**: Toggle recipes as favorites and view them in a dedicated sidebar
- **Recommendations**: AI-powered recipe suggestions based on favorites
- **Dark Mode Toggle**: Switch between light and dark themes with localStorage persistence
- **Responsive Layout**: Two-column grid with sidebar for favorites and recommendations

### Project Structure
```
recipe-sharing-app/
├── src/
│   ├── components/
│   │   ├── AddRecipeForm.jsx       # Form to add new recipes
│   │   ├── EditRecipeForm.jsx      # Form to edit existing recipes (with event.preventDefault)
│   │   ├── DeleteRecipeButton.jsx  # Standalone delete button with useNavigate
│   │   ├── RecipeList.jsx          # Display all recipes from store
│   │   ├── RecipeDetails.jsx       # View full recipe details with edit/delete
│   │   ├── SearchBar.jsx           # Search recipes by title/description
│   │   ├── FavoritesList.jsx       # Show favorite recipes in sidebar
│   │   └── RecommendationsList.jsx # AI-powered recipe recommendations
│   ├── store/
│   │   └── recipeStore.js          # Zustand store with recipe state & actions
│   ├── App.jsx                     # Main router component (AppRouter)
│   ├── ThemeProvider.jsx           # Dark-mode theme context + localStorage
│   ├── index.css                   # CSS variables & theme-aware utility classes
│   ├── main.jsx                    # Entry point (BrowserRouter + ThemeProvider)
│   └── ...
├── package.json
└── vite.config.js
```

### Zustand Store Architecture
```javascript
// src/store/recipeStore.js
const useRecipeStore = create(state => ({
  recipes: [/* initial recipes */],
  favorites: [],
  searchTerm: '',
  
  // Actions
  addRecipe: (recipe) => { /* ... */ },
  updateRecipe: (recipe) => { /* ... */ },
  deleteRecipe: (id) => { /* ... */ },
  setSearchTerm: (term) => { /* ... */ },
  toggleFavorite: (recipeId) => { /* ... */ },
  generateRecommendations: () => { /* ... */ },
}))
```

### Theme System
- **ThemeProvider**: Wraps the app in `main.jsx`, manages light/dark mode state
- **Dark-Mode Toggle**: Button in header (🌙 Dark / ☀️ Light)
- **CSS Variables**: Color palette controlled via `[data-theme]` selector in `index.css`
- **localStorage Persistence**: Theme preference survives page reloads
- **Shared Classes**: `.btn`, `.btn-primary`, `.btn-danger`, `.card`, `.link` use theme variables

### Routing
- `/` → Home (recipe list + sidebar)
- `/recipe/:id` → RecipeDetails (view, edit, delete)

### Running the App
```bash
cd recipe-sharing-app
npm install
npm run dev
```

Visit http://localhost:5173/ and:
1. Add a recipe using the "Add Recipe" form
2. Search recipes using the SearchBar
3. Click a recipe to view details and edit/delete it
4. Toggle favorites and view the sidebar
5. Click the dark-mode toggle in the top-right corner to switch themes

### Key Patterns & Learnings
- **State Management**: Zustand for simple, scalable recipe state without boilerplate
- **Form Handling**: `event.preventDefault()` in EditRecipeForm to prevent page reloads
- **Navigation**: `useNavigate()` for programmatic routing (e.g., after deletion)
- **Context API**: ThemeProvider for cross-app dark-mode support
- **Modular Components**: Reusable components consuming store and theme via hooks
- **CSS Variables**: Theme palette defined at the `:root` level, overridden in `[data-theme='dark']`

## Project: `github-user-search` (GitHub API Integration with Advanced Search)

A modern GitHub user search application featuring advanced filtering, Tailwind CSS styling, and a CLI-inspired terminal theme.

### Features
- **Basic User Search**: Search GitHub users by username using the GitHub REST API
- **Advanced Filters**: Filter by location and minimum repository count
- **Rich Results Display**: Grid layout showing avatars, usernames, locations, repo counts, and follower stats
- **Responsive Design**: Tailwind CSS with mobile-first approach (1/2/3 column grid)
- **CLI Terminal Theme**: Retro colored terminal aesthetic with monospace fonts and vibrant accents
- **Loading States**: Animated loading indicators and error messages
- **Load More**: Pagination support for browsing large result sets
- **API Service Layer**: Clean separation with `githubService.js` handling all API calls

### Project Structure
```
github-user-search/
├── src/
│   ├── components/
│   │   ├── Search.jsx              # Main search component with advanced filters
│   │   └── SearchBar.jsx           # Simple search bar (legacy/alternative)
│   ├── services/
│   │   ├── githubService.js        # API integration (fetchUserData, searchUsers)
│   │   └── githubApi.js            # Axios client setup
│   ├── App.jsx                     # App entry with routing layout
│   ├── index.css                   # Tailwind + CLI theme variables
│   ├── App.css                     # Component-specific CLI styles
│   └── main.jsx                    # React bootstrap
├── .env.example                    # Template for GitHub token (optional)
├── tailwind.config.js              # Tailwind with custom CLI color palette
├── postcss.config.js               # PostCSS with @tailwindcss/postcss
└── vite.config.js
```

### GitHub API Integration
```javascript
// src/services/githubService.js

// Fetch single user by username
export async function fetchUserData(username) {
  const response = await githubClient.get(`/users/${username}`)
  return response.data
}

// Advanced search with location and min repos
export async function searchUsers(criteria) {
  const { username, location, minRepos } = criteria
  let query = username || ''
  if (location) query += ` location:${location}`
  if (minRepos > 0) query += ` repos:>=${minRepos}`
  
  const response = await githubClient.get('/search/users', {
    params: { q: query.trim(), per_page: 30 }
  })
  // Returns enriched user data with location, repos, followers, bio
  return enrichedUsers
}
```

### CLI Terminal Theme
- **Color Palette**: Dark background (#0c0c0c) with vibrant accents (cyan, green, yellow, red, magenta)
- **Monospace Fonts**: Courier New, Consolas, Monaco for authentic terminal feel
- **Border Styles**: Colored left borders (green for search, cyan for users, magenta for details)
- **Glowing Effects**: Box-shadows on hover with neon-style highlights
- **Uppercase Headers**: Terminal-style prompts with `$` and `>` prefixes
- **Tailwind Integration**: Custom CLI colors in Tailwind config for utility classes

### Advanced Search Form
Three filter inputs with responsive grid layout:
1. **Username** (text) - e.g., "octocat"
2. **Location** (text) - e.g., "San Francisco"
3. **Min Repositories** (number) - e.g., "10"

### Results Display
- **Grid Layout**: Responsive 1/2/3 columns based on screen size
- **User Cards**: Avatar with glowing border, username, location badge, repo/follower counts
- **Profile Links**: Direct links to GitHub profiles
- **Load More Button**: Pagination for browsing additional results

### Running the App
```bash
cd github-user-search
npm install
npm run dev
```

Visit http://localhost:5173/ and:
1. Enter search criteria (username, location, min repos)
2. Click "Search Users" to fetch results
3. Browse the grid of matching users
4. Click "View Profile" to open GitHub profiles
5. Use "Load More" for pagination (if available)

### Environment Variables (Optional)
Copy `.env.example` to `.env` and add a GitHub token to increase rate limits:
```
VITE_GITHUB_TOKEN=ghp_your_personal_access_token
```

### Key Patterns & Learnings
- **GitHub API**: RESTful API integration with search endpoints and user detail fetching
- **Axios**: HTTP client with base URL and authorization header configuration
- **Tailwind CSS**: Utility-first CSS with custom theme extension
- **Advanced Queries**: Building GitHub search queries with location and repo filters
- **Data Enrichment**: Fetching detailed user data to supplement search results
- **Responsive Design**: Mobile-first grid layouts with Tailwind breakpoints
- **Loading States**: Conditional rendering for loading, error, and empty states
- **CLI Aesthetics**: Custom color palette and terminal-inspired UI design

## Key Concepts Learned

1. **React Component Creation**
   - Functional components
   - JSX syntax
   - Component exports and imports

2. **Props Management**
   - Passing props to components
   - Accessing props within components
   - Props types and usage

3. **Component Composition**
   - Organizing components
   - Component hierarchy
   - Component reusability

4. **Project Structure**
   - Proper file organization
   - Component separation
   - Clean code practices

5. **Context API (alx-react-app-props)**
    - `createContext` + `useContext` for global state
    - Custom hook (`useUser`) for ergonomic and safe access
    - Provider at the app root to distribute user data

6. **Vite Starter UI & State**
    - Restored Vite logos and counter in the primary app
    - Separate `Counter` component in the `alx-react-app-new` variant

7. **Routing with React Router (my-company)**
    - `react-router-dom` with `BrowserRouter`, `Routes`, `Route`, and `Link`
    - Shared layout components (Navbar, Footer) across pages

8. **Form State Basics (my-company)**
    - Managing controlled inputs via `useState`
    - Inline styling for form elements and basic feedback

## Running the Applications

Primary (`alx-react-app`):
```bash
cd alx-react-app
npm install
npm run dev
```

New variant (`alx-react-app-new`):
```bash
cd alx-react-app-new
npm install
npm run dev
```

Props → Context variant (`alx-react-app-props`):
```bash
cd alx-react-app-props
npm install
npm run dev
```

Company website (`my-company`):
```bash
cd my-company
npm install
npm run dev
```

Recipe sharing app (`recipe-sharing-app`):
```bash
cd recipe-sharing-app
npm install
npm run dev
```

GitHub user search (`github-user-search`):
```bash
cd github-user-search
npm install
npm run dev
```

Each app typically starts on `http://localhost:5173` unless that port is in use (Vite will auto-increment the port).

### Version Control Hygiene
- Build outputs (`dist/`) and dependencies (`node_modules/`) are ignored via the root `.gitignore`.
- If you need to reclaim disk space or reset dependencies, you can delete `node_modules/` and reinstall with `npm install` inside the target app folder.

## Development Tools Used

- **Vite**: Fast, modern build tool for React applications
- **Node.js**: JavaScript runtime environment
- **npm**: Package manager for Node.js
- **React**: JavaScript library for building user interfaces
- **VS Code**: Code editor with React development extensions

## Author
- Badr fatahallah

## Acknowledgments
- ALX Front-End Development Program
- React.js Documentation
- Vite Documentation