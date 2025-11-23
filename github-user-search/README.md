# GitHub User Search

A React + Vite application for searching GitHub users via the public GitHub REST API. Built as part of the "Working with APIs" learning project.

## Features (Initial Milestone)
- Search GitHub users by username
- View basic user list (avatar, username, profile link)
- Load full user details (bio, location, repositories, followers)
- Axios-based API layer with optional auth token

## Tech Stack
- React (Vite bundler)
- Axios for HTTP requests
- (Planned) Tailwind CSS for styling
- (Planned) Advanced filters: location, repo count

## Getting Started
```bash
cd github-user-search
npm install
npm run dev
```
Visit: http://localhost:5173/

## Environment Variables
Copy `.env.example` to `.env` (or `.env.local`) and optionally set a GitHub token:
```
VITE_GITHUB_TOKEN=ghp_your_token_here
```
If `VITE_GITHUB_TOKEN` is omitted, requests are unauthenticated (lower rate limit).

## Project Structure
```
github-user-search/
├── src/
│   ├── components/
│   │   └── SearchBar.jsx          # Handles query input and invokes searchUsers
│   ├── services/
│   │   └── githubApi.js           # Axios instance + searchUsers + fetchUser
│   ├── App.jsx                    # Layout: Search bar, results list, details sidebar
│   ├── main.jsx                   # App bootstrap
│   ├── assets/                    # Static assets (Vite defaults)
│   └── App.css                    # Starter styles (to be replaced by Tailwind)
├── .env.example                   # Environment variable template
├── package.json
└── vite.config.js
```

## API Layer (services/githubApi.js)
```js
export async function searchUsers(query) {
	const response = await githubClient.get('/search/users', { params: { q: query, per_page: 20 } })
	return response.data.items.map(u => ({ id: u.id, login: u.login, avatar_url: u.avatar_url, html_url: u.html_url }))
}
```

## Planned Enhancements
- Tailwind CSS for responsive styling
- Advanced filters (location, minimum repo count)
- Pagination or infinite scroll
- Error boundary and loading skeletons
- Deploy to Vercel (build + preview + production environment)

## Scripts
```bash
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build locally
```

## Deployment (Preview)
1. Create (or reuse) a GitHub repository; push code
2. Import project in Vercel dashboard and select `github-user-search` directory
3. Set environment variable `VITE_GITHUB_TOKEN` in Vercel (optional)
4. Deploy — Vercel runs `npm install` then `npm run build`

## License
Educational use. Replace or augment with your preferred license as needed.
