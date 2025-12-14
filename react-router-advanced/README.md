# React Router Advanced

A React application demonstrating advanced routing techniques using React Router v6, including nested routes, dynamic routing, and protected routes with authentication.

## Project Overview

This project showcases sophisticated routing patterns essential for building scalable, secure React applications with complex navigation requirements.

## Features

### 1. Nested Routes
- **Profile Page** with sub-routes:
  - `/profile/details` - User profile information
  - `/profile/settings` - User preferences and settings
- Demonstrates parent-child route relationships
- Uses `<Outlet />` for nested content rendering

### 2. Dynamic Routing
- **Blog Posts** with variable URLs:
  - `/blog/1` - First blog post
  - `/blog/2` - Second blog post
  - `/blog/:id` - Dynamic parameter handling
- Uses `useParams()` hook to access URL parameters

### 3. Protected Routes
- **Authentication-based access control**
- Redirects unauthenticated users to home page
- Custom `ProtectedRoute` component
- Login/Logout functionality
- Visual authentication status indicator

### 4. Navigation
- Responsive navigation bar
- Active link styling
- Seamless route transitions

## Tech Stack

- React 18
- Vite 5
- React Router DOM 6.20

## Installation

```powershell
cd react-router-advanced
npm install
```

## Running the Application

```powershell
npm run dev
```

The app will start on `http://localhost:5173`

## Project Structure

```
react-router-advanced/
├── src/
│   ├── components/
│   │   ├── Home.jsx                 # Home page
│   │   ├── Profile.jsx              # Parent route with nested routes
│   │   ├── ProfileDetails.jsx       # Nested route - user details
│   │   ├── ProfileSettings.jsx      # Nested route - user settings
│   │   ├── BlogPost.jsx             # Dynamic route - blog posts
│   │   └── ProtectedRoute.jsx       # Auth wrapper component
│   ├── App.jsx                       # Router configuration
│   ├── main.jsx                      # Entry point
│   └── index.css                     # Styles
├── index.html
├── package.json
└── vite.config.js
```

## Routes Configuration

```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/blog/:id" element={<BlogPost />} />
  <Route
    path="/profile/*"
    element={
      <ProtectedRoute isAuthenticated={isAuthenticated}>
        <Profile />
      </ProtectedRoute>
    }
  >
    <Route path="details" element={<ProfileDetails />} />
    <Route path="settings" element={<ProfileSettings />} />
  </Route>
</Routes>
```

## Key Concepts Demonstrated

### Nested Routes
```javascript
// Profile.jsx
<Outlet /> // Renders nested route content
```

### Dynamic Routes
```javascript
// BlogPost.jsx
const { id } = useParams() // Access URL parameter
```

### Protected Routes
```javascript
// ProtectedRoute.jsx
if (!isAuthenticated) {
  return <Navigate to="/" replace />
}
```

## Usage Guide

### Testing Protected Routes
1. Click on "Profile" link while logged out
2. Observe automatic redirect to home page
3. Click "Login" button
4. Now access Profile page successfully
5. Navigate between Profile Details and Settings

### Testing Dynamic Routes
1. Click "Blog Post 1" or "Blog Post 2"
2. Notice URL changes with different IDs
3. Content updates based on the ID parameter

### Testing Nested Routes
1. Login and go to Profile
2. Click "Profile Details" to see nested content
3. Click "Profile Settings" to switch nested view
4. Notice URL updates but parent layout persists

## Authentication Flow

This is a **demonstration** with simulated authentication:
- State managed with `useState`
- Real apps would use:
  - JWT tokens
  - Session storage
  - Backend authentication API
  - Context API or state management

## Styling Features

- Responsive navigation bar
- Active route highlighting
- Hover effects on links and buttons
- Clean, modern UI with shadows and rounded corners

## Building for Production

```powershell
npm run build
```

Built files will be in the `dist/` directory.

## Further Enhancements

- Add user context for global auth state
- Implement persistent authentication (localStorage)
- Add route guards for role-based access
- Implement lazy loading for code splitting
- Add route transitions and animations
- Create error boundary for 404 pages
- Add breadcrumb navigation

## Best Practices Demonstrated

✅ Separation of concerns with component-based routes  
✅ Reusable protected route wrapper  
✅ Clear route hierarchy  
✅ Proper use of React Router hooks  
✅ Semantic HTML and accessibility considerations  

## License

Part of the ALX Front-End React curriculum.
