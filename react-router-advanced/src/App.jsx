import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import BlogPost from './components/BlogPost'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog Post 1</Link>
        <Link to="/blog/2">Blog Post 2</Link>
      </nav>

      <div className="container">
        <div className="auth-controls">
          <span>Authentication Status: {isAuthenticated ? '✅ Logged In' : '❌ Logged Out'}</span>
          {!isAuthenticated ? (
            <button onClick={() => setIsAuthenticated(true)}>Login</button>
          ) : (
            <button className="logout" onClick={() => setIsAuthenticated(false)}>Logout</button>
          )}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Dynamic route with URL parameter */}
          <Route path="/blog/:id" element={<BlogPost />} />
          {/* Protected route with nested child routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* Nested routes for profile sections */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
