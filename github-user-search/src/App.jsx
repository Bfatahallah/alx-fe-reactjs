import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import { fetchUser } from './services/githubApi'

function App() {
  const [results, setResults] = useState([])
  const [selected, setSelected] = useState(null)
  const [loadingDetail, setLoadingDetail] = useState(false)
  const [detailError, setDetailError] = useState('')

  async function handleSelect(login){
    setLoadingDetail(true)
    setDetailError('')
    try {
      const data = await fetchUser(login)
      setSelected(data)
    } catch (e){
      setDetailError('Failed to load user details')
    } finally {
      setLoadingDetail(false)
    }
  }

  return (
    <div style={{padding:'32px 24px'}}>
      <h1 style={{marginTop:0}}><span style={{color:'var(--cli-green)'}}>$</span> GitHub User Search</h1>
      <p style={{marginTop:4,color:'var(--cli-gray)'}}>// Enter a username to search GitHub profiles</p>
      <SearchBar onResults={setResults} />
      <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:24,marginTop:32}}>
        <div>
          <h2 style={{margin:'0 0 12px'}}>&gt; Results [{results.length}]</h2>
          {results.length === 0 && <div style={{color:'var(--cli-gray)',padding:40,border:'2px dashed var(--cli-border)',background:'rgba(255,255,255,0.02)',textAlign:'center'}}>No results yet. Try searching e.g. <code>octocat</code></div>}
          <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gap:12}}>
            {results.map(user => (
              <li key={user.id} className="user-item">
                <img src={user.avatar_url} alt={user.login} width={48} height={48} style={{borderRadius:'50%'}} />
                <div style={{flex:1}}>
                  <strong style={{fontSize:16,color:'var(--cli-bright)'}}>{user.login}</strong><br />
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" style={{fontSize:12}}>View on GitHub →</a>
                </div>
                <button onClick={()=>handleSelect(user.login)}>Details</button>
              </li>
            ))}
          </ul>
        </div>
        <aside className="details-panel" style={{minHeight:200,position:'sticky',top:24,maxHeight:'calc(100vh - 48px)',overflowY:'auto'}}>
          <h2 style={{marginTop:0}}>&gt; User Details</h2>
          {loadingDetail && <p className="loading">Loading...</p>}
          {detailError && <p className="error-message">{detailError}</p>}
          {!selected && !loadingDetail && <p style={{color:'var(--cli-gray)'}}>Select a user to view details.</p>}
          {selected && !loadingDetail && (
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <img src={selected.avatar_url} width={80} height={80} style={{borderRadius:'50%'}} alt={selected.login} />
              <h3 style={{margin:'8px 0 0'}}>{selected.name || selected.login}</h3>
              {selected.bio && <p style={{margin:0,fontSize:14}}>{selected.bio}</p>}
              <p style={{margin:0,fontSize:12,color:'var(--cli-gray)'}}>@{selected.login}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:8,fontSize:12,marginTop:8}}>
                {selected.location && <span style={{background:'rgba(0,215,255,0.1)',border:'1px solid var(--cli-cyan)',padding:'4px 8px',color:'var(--cli-cyan)'}}>📍 {selected.location}</span>}
                <span style={{background:'rgba(0,215,255,0.1)',border:'1px solid var(--cli-cyan)',padding:'4px 8px',color:'var(--cli-cyan)'}}>Repos: {selected.public_repos}</span>
                <span style={{background:'rgba(0,215,255,0.1)',border:'1px solid var(--cli-cyan)',padding:'4px 8px',color:'var(--cli-cyan)'}}>Followers: {selected.followers}</span>
                <span style={{background:'rgba(0,215,255,0.1)',border:'1px solid var(--cli-cyan)',padding:'4px 8px',color:'var(--cli-cyan)'}}>Following: {selected.following}</span>
              </div>
              <a href={selected.html_url} target="_blank" rel="noopener noreferrer" style={{marginTop:8}}>Open Profile →</a>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}

export default App
