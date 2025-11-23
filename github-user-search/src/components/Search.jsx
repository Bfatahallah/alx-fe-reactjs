import { useState } from 'react'
import { fetchUserData, searchUsers, fetchUserRepos } from '../services/githubService'

export default function Search() {
  const [username, setUsername] = useState('')
  const [location, setLocation] = useState('')
  const [minRepos, setMinRepos] = useState('')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)
  const [nameSuggestions, setNameSuggestions] = useState([])
  const [searchSubmitted, setSearchSubmitted] = useState(false)
  const [visibleCount, setVisibleCount] = useState(9)
  // Popup related state not needed since we use separate window

  function generateNameSuggestions(name) {
    if (!name || name.length < 2) return []
    
    const cleanName = name.trim().toLowerCase()
    const suggestions = []
    
    // Split by spaces and try variations
    const parts = cleanName.split(/[\s._-]+/).filter(p => p.length > 0)
    
    if (parts.length > 1) {
      // Full name with space
      suggestions.push(parts.join(' '))
      // Without space
      suggestions.push(parts.join(''))
      // With dots
      suggestions.push(parts.join('.'))
      // With hyphens
      suggestions.push(parts.join('-'))
      // With underscore
      suggestions.push(parts.join('_'))
      // First initial + rest
      suggestions.push(parts[0][0] + '.' + parts.slice(1).join(''))
      // All initials
      suggestions.push(parts.map(p => p[0]).join('.'))
      // Reverse order
      suggestions.push(parts.reverse().join('.'))
    } else {
      // Single word variations
      suggestions.push(cleanName)
      if (cleanName.length > 3) {
        // Add numbers
        suggestions.push(cleanName + '123')
        suggestions.push(cleanName + '456')
      }
    }
    
    // Remove duplicates and the original search term
    return [...new Set(suggestions)]
      .filter(s => s !== cleanName)
      .slice(0, 5)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    
    if (!username.trim() && !location.trim()) {
      return
    }

    setLoading(true)
    setError(false)
    setUsers([])
    setPage(1)
    setShowAnimation(false)
    setNameSuggestions([])
    setSearchSubmitted(true)
    setVisibleCount(9)

    try {
      const results = await searchUsers({
        username: username.trim(),
        location: location.trim(),
        minRepos: minRepos ? parseInt(minRepos) : 0
      })
      
      if (results.length === 0) {
        // Trigger animation and generate suggestions
        console.log('No results found, triggering animation')
        setShowAnimation(true)
        const suggestions = generateNameSuggestions(username)
        console.log('Generated suggestions:', suggestions)
        setNameSuggestions(suggestions)
        
        // Remove animation after 0.5 seconds
        setTimeout(() => {
          console.log('Removing animation')
          setShowAnimation(false)
        }, 500)
      }
      
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

  async function handleViewProfile(user) {
    // Open popup immediately (synchronous) to avoid being blocked.
    const popup = window.open('', '_blank', 'width=900,height=700,noopener,noreferrer')
    if (!popup) {
      alert('Popup blocked. Please allow popups for this site.')
      return
    }
    // Basic loading shell
    popup.document.write(`<!DOCTYPE html><html><head><title>Loading ${user.login}...</title><style>
      body{font-family:Courier New,monospace;background:#0c0c0c;color:#ccc;margin:0;padding:20px;}
      .loading{color:#ffff00;animation:pulse 1s infinite alternate;font-weight:bold;}
      @keyframes pulse{from{opacity:.4}to{opacity:1}}
    </style></head><body><p class='loading'>Loading profile...</p></body></html>`)
    popup.document.close()

    // Fetch data asynchronously
    let detailed = user
    try { detailed = await fetchUserData(user.login) } catch(e) {}
    let repos = []
    try { repos = await fetchUserRepos(user.login) } catch(e) {}

    const style = `
      body { font-family: Courier New, monospace; background:#0c0c0c; color:#ccc; margin:0; padding:16px; }
      h1 { margin:0 0 16px; font-size:24px; color:#00d7ff; }
      h2 { margin:24px 0 8px; font-size:16px; color:#00ff87; text-transform:uppercase; letter-spacing:2px; }
      a { color:#00d7ff; text-decoration:none; }
      a:hover { text-decoration:underline; color:#8be9fd; }
      .badge { display:inline-block; background:rgba(0,215,255,0.1); border:1px solid #00d7ff; color:#00d7ff; padding:4px 8px; font-size:12px; margin:4px 4px 0 0; }
      .container { border:2px solid #44475a; border-left:4px solid #00d7ff; padding:16px; background:rgba(0,0,0,0.4); box-shadow:0 0 12px rgba(0,215,255,0.15); }
      .repos { list-style:none; margin:0; padding:0; }
      .repo { border:1px solid #44475a; padding:8px 12px; margin-bottom:6px; background:#111; }
      .repo:hover { border-color:#00d7ff; box-shadow:0 0 8px rgba(0,215,255,0.2); }
      .muted { color:#6272a4; font-size:12px; }
      button { background:transparent; border:2px solid #ff79c6; color:#ff79c6; padding:8px 16px; font-weight:bold; text-transform:uppercase; letter-spacing:1px; cursor:pointer; }
      button:hover { background:#ff79c6; color:#0c0c0c; box-shadow:0 0 8px rgba(255,121,198,0.4); }
      .closeBtn { position:fixed; top:8px; right:12px; background:transparent; border:2px solid #ff5555; color:#ff5555; }
      .closeBtn:hover { background:#ff5555; color:#0c0c0c; }
      .desc { color:#6272a4; font-size:12px; margin-top:4px; }
    `
    const esc = v => (v||'').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    const firstTen = repos.slice(0,10).map(r => (
      `<li class="repo"><div style="display:flex;justify-content:space-between;align-items:center;gap:12px;">
        <a href="${r.html_url}" target="_blank" rel="noopener noreferrer">${esc(r.name)}</a>
        <span class="muted">${new Date(r.updated_at).toLocaleDateString()}</span>
      </div>${r.description?`<div class="desc">${esc(r.description)}</div>`:''}</li>`
    )).join('') || '<p class="muted">No repositories found.</p>'

    popup.document.open()
    popup.document.write(`<!DOCTYPE html><html><head><title>${esc(detailed.login)} - Profile</title><style>${style}</style></head><body>
      <button class="closeBtn" onclick="window.close()">X</button>
      <div class="container">
        <h1>&gt; ${esc(detailed.login)}</h1>
        ${detailed.bio?`<p class="desc" style="margin-bottom:12px;">${esc(detailed.bio)}</p>`:''}
        <div style="margin-bottom:12px;">
          ${detailed.location?`<span class="badge">📍 ${esc(detailed.location)}</span>`:''}
          <span class="badge">Repos: ${detailed.public_repos}</span>
          <span class="badge">Followers: ${detailed.followers}</span>
          <span class="badge">Following: ${detailed.following}</span>
          <a class="badge" href="${detailed.html_url}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
        <h2>Latest Repositories</h2>
        <ul class="repos" id="repoList">${firstTen}</ul>
        ${repos.length>10?'<div style="text-align:center;margin-top:16px;"><button id="showMoreBtn">Show More (+10)</button></div>':''}
      </div>
      <script>(function(){
        const allRepos = ${JSON.stringify(repos.map(r=>({id:r.id,name:r.name,html_url:r.html_url,description:r.description,updated_at:r.updated_at})))};
        let visible = 10; const listEl = document.getElementById('repoList'); const btn = document.getElementById('showMoreBtn');
        function esc(v){return (v||'').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
        function render(){listEl.innerHTML = allRepos.slice(0,visible).map(function(r){return '<li class=\"repo\"><div style=\"display:flex;justify-content:space-between;align-items:center;gap:12px;\"><a href=\"'+r.html_url+'\" target=\"_blank\" rel=\"noopener noreferrer\">'+esc(r.name)+'</a><span class=\"muted\">'+new Date(r.updated_at).toLocaleDateString()+'</span></div>'+(r.description?'<div class=\"desc\">'+esc(r.description)+'</div>':'')+'</li>';}).join(''); if(visible>=allRepos.length && btn){btn.style.display='none';}}
        if(btn){btn.addEventListener('click',function(){visible+=10;render();});}
      })();</script>
    </body></html>`)
    popup.document.close()
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

        {!loading && !error && users.length === 0 && searchSubmitted && (
          <div className={`text-cli-gray text-center py-12 border-2 border-dashed border-cli-border bg-white/2 ${showAnimation ? 'vibrate-blink' : ''}`}>
            <p className="font-bold text-lg mb-3">No results yet. Try searching...</p>
            {nameSuggestions.length > 0 && username && (
              <div className="mt-4">
                <p className="text-cli-yellow mb-2 text-sm">
                  <span className="font-bold">"{username}"</span> not found. Try these variations:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {nameSuggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => setUsername(suggestion)}
                      className="bg-cli-cyan/10 border border-cli-cyan text-cli-cyan px-3 py-1 text-sm hover:bg-cli-cyan hover:text-cli-bg transition-all"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {users.length > 0 && (
          <>
            <h2 className="text-2xl font-bold uppercase tracking-wider text-cli-cyan mb-4 border-b-2 border-cli-cyan pb-2">
              &gt; Results [{users.length}]
            </h2>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              {users.slice(0, visibleCount).map(user => (
                <div
                  key={user.id}
                  className="bg-black/30 border-2 border-cli-border border-l-4 border-l-cli-cyan p-3 hover:border-l-cli-yellow hover:bg-black/50 hover:shadow-[0_0_12px_rgba(0,215,255,0.2)] transition-all flex flex-col items-center text-center max-w-xs"
                >
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="rounded-full border-2 border-cli-cyan shadow-[0_0_8px_rgba(0,215,255,0.3)] mb-2"
                    style={{ width: '200px', height: '200px' }}
                  />
                  <h3 className="text-cli-bright font-bold text-base truncate w-full">
                    {user.login}
                  </h3>
                  {user.location && (
                    <p className="text-cli-gray text-sm truncate w-full mb-3">
                      📍 {user.location}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-3 text-xs">
                    <span className="bg-cli-cyan/10 border border-cli-cyan text-cli-cyan px-2 py-1">
                      Repos: {user.public_repos ?? 'N/A'}
                    </span>
                    {user.followers !== undefined && (
                      <span className="bg-cli-cyan/10 border border-cli-cyan text-cli-cyan px-2 py-1">
                        Followers: {user.followers}
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => handleViewProfile(user)}
                    className="text-cli-cyan hover:text-cli-blue underline text-sm inline-flex items-center gap-1 mt-1"
                    type="button"
                  >View Profile ↗</button>
                </div>
              ))}
            </div>

            {users.length > visibleCount && (
              <div className="text-center">
                <button
                  onClick={() => setVisibleCount(prev => prev + 9)}
                  className="border-2 border-cli-magenta bg-transparent text-cli-magenta px-6 py-2 font-bold uppercase tracking-wider hover:bg-cli-magenta hover:text-cli-bg transition-all"
                >
                  View More Results ({users.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Popup content handled via window.open; no in-page modal */}
    </div>
  )
}
