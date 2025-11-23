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
    <div style={{maxWidth:960,margin:'0 auto',padding:'32px 24px'}}>
      <h1 style={{marginTop:0}}>GitHub User Search</h1>
      <p style={{marginTop:4,color:'#555'}}>Enter a username to search GitHub profiles (public API).</p>
      <SearchBar onResults={setResults} />
      <div style={{display:'grid',gridTemplateColumns:'1fr 340px',gap:24,marginTop:32}}>
        <div>
          <h2 style={{margin:'0 0 12px'}}>Results ({results.length})</h2>
          {results.length === 0 && <div style={{color:'#777'}}>No results yet. Try searching e.g. <code>octocat</code>.</div>}
          <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gap:12}}>
            {results.map(user => (
              <li key={user.id} style={{display:'flex',alignItems:'center',gap:12,padding:12,border:'1px solid #e1e4e8',borderRadius:8}}>
                <img src={user.avatar_url} alt={user.login} width={48} height={48} style={{borderRadius:'50%'}} />
                <div style={{flex:1}}>
                  <strong style={{fontSize:16}}>{user.login}</strong><br />
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" style={{fontSize:12,color:'#0366d6'}}>View on GitHub</a>
                </div>
                <button onClick={()=>handleSelect(user.login)} style={{padding:'6px 12px',border:'1px solid #0366d6',background:'#0366d6',color:'#fff',borderRadius:6}}>Details</button>
              </li>
            ))}
          </ul>
        </div>
        <aside style={{border:'1px solid #e1e4e8',borderRadius:8,padding:16,minHeight:200}}>
          <h2 style={{marginTop:0}}>User Details</h2>
          {loadingDetail && <p>Loading…</p>}
          {detailError && <p style={{color:'red'}}>{detailError}</p>}
          {!selected && !loadingDetail && <p style={{color:'#777'}}>Select a user to view details.</p>}
          {selected && !loadingDetail && (
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <img src={selected.avatar_url} width={80} height={80} style={{borderRadius:'50%'}} alt={selected.login} />
              <h3 style={{margin:'8px 0 0'}}>{selected.name || selected.login}</h3>
              {selected.bio && <p style={{margin:0,fontSize:14}}>{selected.bio}</p>}
              <p style={{margin:0,fontSize:12,color:'#555'}}>@{selected.login}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:8,fontSize:12,marginTop:8}}>
                {selected.location && <span style={{background:'#f1f8ff',padding:'4px 8px',borderRadius:6}}>📍 {selected.location}</span>}
                <span style={{background:'#f1f8ff',padding:'4px 8px',borderRadius:6}}>Repos: {selected.public_repos}</span>
                <span style={{background:'#f1f8ff',padding:'4px 8px',borderRadius:6}}>Followers: {selected.followers}</span>
                <span style={{background:'#f1f8ff',padding:'4px 8px',borderRadius:6}}>Following: {selected.following}</span>
              </div>
              <a href={selected.html_url} target="_blank" rel="noopener noreferrer" style={{marginTop:8,color:'#0366d6',textDecoration:'none'}}>Open Profile →</a>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}

export default App
