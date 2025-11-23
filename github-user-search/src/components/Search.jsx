import { useState } from 'react'
import { fetchUserData, searchUsers } from '../services/githubService'

export default function Search() {
  const [username, setUsername] = useState('')
  const [location, setLocation] = useState('')
  const [minRepos, setMinRepos] = useState('')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    
    if (!username.trim() && !location.trim()) {
      return
    }

    setLoading(true)
    setError(false)
    setUsers([])
    setPage(1)

    try {
      const results = await searchUsers({
        username: username.trim(),
        location: location.trim(),
        minRepos: minRepos ? parseInt(minRepos) : 0
      })
      setUsers(results)
      setHasMore(results.length >= 30)
    } catch (err) {
      setError(true)
      setUsers([])
    } finally {
      setLoading(false)
    }
  }

  async function handleLoadMore() {
    // Simplified load more - in production you'd handle pagination properly
    setPage(prev => prev + 1)
  }

  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-bold uppercase tracking-wider text-cli-green mb-2">
        <span className="text-cli-green">$</span> GitHub User Search
      </h1>
      <p className="text-cli-gray mb-6">
        // Advanced search with location and repository filters
      </p>

      <form onSubmit={handleSubmit} className="bg-black/30 border-2 border-cli-border border-l-4 border-l-cli-green p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="username" className="block text-cli-cyan text-sm font-bold mb-2 uppercase tracking-wide">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. octocat"
              className="w-full bg-white/5 border-2 border-cli-border text-cli-bright p-3 focus:outline-none focus:border-cli-cyan focus:shadow-[0_0_8px_rgba(0,215,255,0.3)] transition-all"
            />
          </div>
          
          <div>
            <label htmlFor="location" className="block text-cli-cyan text-sm font-bold mb-2 uppercase tracking-wide">
              Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. San Francisco"
              className="w-full bg-white/5 border-2 border-cli-border text-cli-bright p-3 focus:outline-none focus:border-cli-cyan focus:shadow-[0_0_8px_rgba(0,215,255,0.3)] transition-all"
            />
          </div>
          
          <div>
            <label htmlFor="minRepos" className="block text-cli-cyan text-sm font-bold mb-2 uppercase tracking-wide">
              Min Repositories
            </label>
            <input
              id="minRepos"
              type="number"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              placeholder="e.g. 10"
              min="0"
              className="w-full bg-white/5 border-2 border-cli-border text-cli-bright p-3 focus:outline-none focus:border-cli-cyan focus:shadow-[0_0_8px_rgba(0,215,255,0.3)] transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto border-2 border-cli-cyan bg-transparent text-cli-cyan px-8 py-3 font-bold uppercase tracking-wider hover:bg-cli-cyan hover:text-cli-bg hover:shadow-[0_0_10px_var(--cli-cyan)] transition-all disabled:border-cli-gray disabled:text-cli-gray disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Searching...' : 'Search Users'}
        </button>
      </form>

      <div>
        {loading && (
          <p className="text-cli-yellow font-bold animate-pulse text-center py-8">
            Loading...
          </p>
        )}

        {error && (
          <div className="bg-cli-red/10 border-2 border-cli-red p-4 mb-4 font-bold text-cli-red">
            <span className="font-black">[ERROR]</span> Looks like we cant find the user
          </div>
        )}

        {!loading && !error && users.length === 0 && (username || location) && (
          <div className="text-cli-gray text-center py-12 border-2 border-dashed border-cli-border bg-white/2">
            No users found matching your criteria. Try different search terms.
          </div>
        )}

        {users.length > 0 && (
          <>
            <h2 className="text-2xl font-bold uppercase tracking-wider text-cli-cyan mb-4 border-b-2 border-cli-cyan pb-2">
              &gt; Results [{users.length}]
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {users.map(user => (
                <div
                  key={user.id}
                  className="bg-black/30 border-2 border-cli-border border-l-4 border-l-cli-cyan p-4 hover:border-l-cli-yellow hover:bg-black/50 hover:shadow-[0_0_12px_rgba(0,215,255,0.2)] transition-all"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      className="w-16 h-16 rounded-full border-2 border-cli-cyan shadow-[0_0_8px_rgba(0,215,255,0.3)]"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-cli-bright font-bold text-lg truncate">
                        {user.login}
                      </h3>
                      {user.location && (
                        <p className="text-cli-gray text-sm truncate">
                          📍 {user.location}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3 text-xs">
                    <span className="bg-cli-cyan/10 border border-cli-cyan text-cli-cyan px-2 py-1">
                      Repos: {user.public_repos || 0}
                    </span>
                    {user.followers !== undefined && (
                      <span className="bg-cli-cyan/10 border border-cli-cyan text-cli-cyan px-2 py-1">
                        Followers: {user.followers}
                      </span>
                    )}
                  </div>
                  
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cli-cyan hover:text-cli-blue hover:underline text-sm inline-flex items-center gap-1"
                  >
                    View Profile →
                  </a>
                </div>
              ))}
            </div>

            {hasMore && (
              <div className="text-center">
                <button
                  onClick={handleLoadMore}
                  className="border-2 border-cli-magenta bg-transparent text-cli-magenta px-6 py-2 font-bold uppercase tracking-wider hover:bg-cli-magenta hover:text-cli-bg transition-all"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
