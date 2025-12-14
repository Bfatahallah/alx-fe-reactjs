import { Link, Outlet } from 'react-router-dom'

function Profile() {
  return (
    <div>
      {/* Navigation for nested routes */}
      <div className="profile-nav">
        <Link to="/profile/details">Profile Details</Link>
        <Link to="/profile/settings">Profile Settings</Link>
      </div>
      <div className="content">
        <h1>Profile Page</h1>
        <p>This is a protected route with nested routes.</p>
        {/* Outlet renders the nested route content */}
        <Outlet />
      </div>
    </div>
  )
}

export default Profile
