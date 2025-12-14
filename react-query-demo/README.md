# React Query Demo

A React application demonstrating advanced data fetching and management using React Query (TanStack Query v3) with the JSONPlaceholder API.

## Project Overview

This project showcases how React Query optimizes data fetching, caching, and state management in React applications, providing a superior developer experience compared to traditional data fetching approaches.

## Features

- **Data Fetching**: Fetch posts from JSONPlaceholder API
- **Automatic Caching**: Data is cached and reused across component mounts
- **Loading States**: Visual feedback during data fetching
- **Error Handling**: Graceful error display
- **Manual Refetch**: Button to refresh data on demand
- **Cache Status Indicator**: Shows when data is fetched vs. loaded from cache
- **Stale Time Management**: Data stays fresh for 1 minute
- **Background Refetching**: Automatic refetch on window focus

## Tech Stack

- React 18
- Vite 5
- React Query 3.39
- JSONPlaceholder API

## Installation

```powershell
cd react-query-demo
npm install
```

## Running the Application

```powershell
npm run dev
```

The app will start on `http://localhost:5173`

## Project Structure

```
react-query-demo/
├── src/
│   ├── components/
│   │   └── PostsComponent.jsx       # Main component with useQuery
│   ├── App.jsx                       # QueryClientProvider setup
│   ├── main.jsx                      # Entry point
│   └── index.css                     # Styles
├── index.html
├── package.json
└── vite.config.js
```

## React Query Configuration

```javascript
{
  staleTime: 60000,      // Data fresh for 1 minute
  cacheTime: 300000,     // Cache persists for 5 minutes
  refetchOnWindowFocus: true
}
```

## API Details

**Endpoint**: `https://jsonplaceholder.typicode.com/posts`

The component fetches and displays the first 10 posts with title and body.

## Key Features Demonstrated

### 1. Data Caching
Navigate away and return to see data load instantly from cache without additional API calls.

### 2. Loading States
```javascript
const { data, isLoading, isFetching } = useQuery(...)
```

### 3. Error Handling
```javascript
const { error, isError } = useQuery(...)
```

### 4. Manual Refetch
Click the "Refetch Posts" button to force a fresh data fetch.

### 5. Cache Indicator
Visual feedback shows whether data is:
- 🔄 Being fetched from the API
- ✅ Loaded from cache

## Testing Caching Behavior

1. Open the app and observe the initial fetch
2. Navigate to another route (if routing is added)
3. Return to the posts page
4. Notice data loads instantly from cache
5. Click "Refetch Posts" to fetch fresh data
6. Check browser Network tab to see reduced API calls

## Benefits of React Query

- **Automatic Background Updates**: Keeps data fresh
- **Deduplication**: Prevents duplicate requests
- **Optimistic Updates**: UI updates before server confirms
- **Pagination & Infinite Scroll**: Built-in support
- **DevTools**: Debug cache and queries easily

## Building for Production

```powershell
npm run build
```

Built files will be in the `dist/` directory.

## Further Enhancements

- Add pagination for browsing all posts
- Implement infinite scroll
- Add mutations for creating/updating posts
- Install React Query DevTools for debugging
- Add search and filtering capabilities

## License

Part of the ALX Front-End React curriculum.
