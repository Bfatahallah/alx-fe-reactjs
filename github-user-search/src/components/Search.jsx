import { useState } from 'react'
import { fetchUserData } from '../services/githubService'

export default function Search() {
  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    
    if (!username.trim()) {
      return
    }

    setLoading(true)
    setError(false)
    setUserData(null)

    try {
      const data = await fetchUserData(username.trim())
      setUserData(data)
    } catch (err) {
      setError(true)
      setUserData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '32px 24px' }}>
      <h1 style={{ marginTop: 0 }}>
        <span style={{ color: 'var(--cli-green)' }}>$</span> GitHub User Search
      </h1>
      <p style={{ marginTop: 4, color: 'var(--cli-gray)' }}>
        // Enter a GitHub username to find user information
      </p>

      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username..."
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      <div style={{ marginTop: 32 }}>
        {loading && (
          <p className="loading">Loading...</p>
        )}

        {error && (
          <p className="error-message">
            Looks like we cant find the user
          </p>
        )}

        {userData && !loading && (
          <div
            className="user-item"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
              padding: 24,
              maxWidth: 600,
              margin: '0 auto'
            }}
          >
            <img
              src={userData.avatar_url}
              alt={userData.login}
              width={120}
              height={120}
              style={{ borderRadius: '50%' }}
            />
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ margin: '8px 0', color: 'var(--cli-bright)' }}>
                {userData.name || userData.login}
              </h2>
              <p style={{ margin: '4px 0', color: 'var(--cli-gray)' }}>
                @{userData.login}
              </p>
              {userData.bio && (
                <p style={{ margin: '12px 0', fontSize: 14 }}>{userData.bio}</p>
              )}
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                justifyContent: 'center',
                fontSize: 12
              }}
            >
              {userData.location && (
                <span
                  style={{
                    background: 'rgba(0,215,255,0.1)',
                    border: '1px solid var(--cli-cyan)',
                    padding: '6px 12px',
                    color: 'var(--cli-cyan)'
                  }}
                >
                  📍 {userData.location}
                </span>
              )}
              <span
                style={{
                  background: 'rgba(0,215,255,0.1)',
                  border: '1px solid var(--cli-cyan)',
                  padding: '6px 12px',
                  color: 'var(--cli-cyan)'
                }}
              >
                Repos: {userData.public_repos}
              </span>
              <span
                style={{
                  background: 'rgba(0,215,255,0.1)',
                  border: '1px solid var(--cli-cyan)',
                  padding: '6px 12px',
                  color: 'var(--cli-cyan)'
                }}
              >
                Followers: {userData.followers}
              </span>
              <span
                style={{
                  background: 'rgba(0,215,255,0.1)',
                  border: '1px solid var(--cli-cyan)',
                  padding: '6px 12px',
                  color: 'var(--cli-cyan)'
                }}
              >
                Following: {userData.following}
              </span>
            </div>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 12 }}
            >
              View GitHub Profile →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
