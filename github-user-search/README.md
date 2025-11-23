# GitHub User Search

A React + Vite application for searching GitHub users via the public GitHub REST API with advanced filtering capabilities and a retro CLI terminal theme. Built as part of the "Working with APIs" learning project.

## ✨ Features
- **Advanced Search**: Filter users by username, location, and minimum repository count
- **Smart Suggestions**: When no results found, get intelligent username variations to try
- **3x3 Grid Layout**: Clean, organized display of search results with pagination
- **CLI Terminal Theme**: Retro terminal aesthetic with vibrant colors and animations
- **Vibrate Animation**: Visual feedback with red blink animation for no results (0.5s)
- **Data Enrichment**: Fetches detailed user info including repos, followers, location, and bio
- **Responsive Design**: Tailwind CSS utility-first styling
- **Error Handling**: Graceful error states with user-friendly messages

## 🛠 Tech Stack
- **React 18** (Vite bundler)
- **Axios** for HTTP requests
- **Tailwind CSS v4** with @tailwindcss/postcss
- **GitHub REST API** (Search API + Users API)
- **CSS Animations** for interactive effects

## 🚀 Getting Started
```bash
cd github-user-search
npm install
npm run dev
```
Visit: http://localhost:5173/

## 🔐 Environment Variables
Copy `.env.example` to `.env` and optionally set a GitHub token:
```env
VITE_GITHUB_TOKEN=ghp_your_token_here
```
**Note**: Without a token, you're limited to 60 requests/hour. With authentication: 5,000 requests/hour.

## 📁 Project Structure
```
github-user-search/
├── src/
│   ├── components/
│   │   ├── Search.jsx             # Main advanced search component (3x3 grid)
│   │   └── SearchBar.jsx          # Alternative simple search component
│   ├── services/
│   │   ├── githubApi.js           # Axios instance + base API calls
│   │   └── githubService.js       # fetchUserData + searchUsers (enriched)
│   ├── App.jsx                    # Root component (renders Search)
│   ├── App.css                    # CLI-themed component styles
│   ├── index.css                  # Tailwind directives + CLI color palette + animations
│   ├── main.jsx                   # App bootstrap
│   └── assets/                    # Static assets
├── .env.example                   # Environment variable template
├── .gitignore                     # Includes .env
├── tailwind.config.js             # Custom CLI theme colors
├── postcss.config.js              # @tailwindcss/postcss + autoprefixer
├── package.json
└── vite.config.js
```

## 🎨 CLI Terminal Theme
Custom color palette inspired by classic terminal emulators:
- **Background**: `#0c0c0c` (near black)
- **Cyan**: `#00d7ff` (primary accent, borders, links)
- **Green**: `#00ff87` (success, headers)
- **Yellow**: `#ffff00` (warnings, suggestions)
- **Red**: `#ff5555` (errors, animation flash)
- **Magenta**: `#ff79c6` (buttons, accents)
- **Monospace Fonts**: Courier New, Consolas, Monaco

### Animation Features
- **Vibrate-Blink**: 0.5s animation when no results found
  - Vibrates with rotation and translation
  - Flashes red border and background at midpoint
  - Returns to normal state automatically

## 🔍 API Integration

### Search Users (services/githubService.js)
```javascript
export async function searchUsers(criteria) {
  const { username = '', location = '', minRepos = 0 } = criteria
  
  // Build GitHub Search API query
  let query = username || ''
  if (location) query += ` location:${location}`
  if (minRepos > 0) query += ` repos:>=${minRepos}`
  
  // Fetch search results
  const response = await githubClient.get('/search/users', {
    params: { q: query.trim(), per_page: 30 }
  })
  
  // Enrich with detailed user data
  const enrichedUsers = await Promise.all(
    users.map(async (user) => {
      const detailedData = await githubClient.get(`/users/${user.login}`)
      return {
        id: user.id,
        login: user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        location: detailedData.data.location,
        public_repos: detailedData.data.public_repos,
        followers: detailedData.data.followers,
        bio: detailedData.data.bio
      }
    })
  )
  
  return enrichedUsers
}
```

### Fetch Single User
```javascript
export async function fetchUserData(username) {
  const response = await githubClient.get(`/users/${username}`)
  return response.data
}
```

## 🎯 Key Features Detail

### Smart Name Suggestions
When search returns no results, the app generates intelligent username variations:
- **Space variations**: `pedroalonso` → `pedro alonso`, `pedro.alonso`, `pedro-alonso`
- **Initial patterns**: `p.alonso`, `a.pedro`
- **Number suffixes**: `pedroalonso123`, `pedroalonso456`
- One-click to populate search field

### 3x3 Grid with Pagination
- Fixed 3-column grid layout
- Shows 9 results initially
- "View More Results" button shows remaining count
- Loads 9 more results per click
- Centered cards with consistent sizing

### Loading States
- **Loading**: Yellow pulsing text
- **Error**: Red border alert box
- **No Results**: Animated box with suggestions
- **Success**: Grid display with user cards

## 📜 Scripts
```bash
npm run dev      # Start development server (Vite HMR)
npm run build    # Production build (dist/)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## 🚢 Deployment Guide

### Preparing for Deployment
1. Ensure `.env` is in `.gitignore` ✅
2. Test production build locally:
   ```bash
   npm run build
   npm run preview
   ```

### Deploy to Vercel
1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Configure build settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `github-user-search`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add environment variable in Vercel:
   - Key: `VITE_GITHUB_TOKEN`
   - Value: `ghp_your_token_here`
5. Deploy!

### Alternative Deployment (Netlify)
```bash
npm run build
# Upload dist/ folder or connect GitHub repo
```

## 🎓 Key Learnings
- GitHub REST API integration with rate limiting considerations
- Advanced search query construction for GitHub Search API
- Data enrichment patterns (combining multiple API calls)
- Tailwind CSS v4 with PostCSS configuration
- CSS keyframe animations for interactive feedback
- Controlled component patterns with multiple input fields
- Async/await with Promise.all for parallel requests
- Error handling and graceful degradation
- Smart suggestion generation algorithms
- Pagination and data slicing for large result sets

## 📝 License
Educational use. Part of ALX Frontend Engineering curriculum.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
