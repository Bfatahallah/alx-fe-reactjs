import { useState } from 'react'
import { searchUsers } from '../services/githubApi'

export default function SearchBar({ onResults }) {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event){
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      const results = await searchUsers(query.trim())
      onResults?.(results)
    } catch (e){
      setError('Failed to fetch users')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar" style={{display:'flex',gap:8,flexWrap:'wrap'}}>
      <input
        type="text"
        value={query}
        onChange={e=>setQuery(e.target.value)}
        placeholder="Search GitHub users..."
        style={{flex:'1 1 260px',padding:'8px 12px',border:'1px solid #ccc',borderRadius:6}}
      />
      <button type="submit" disabled={loading} style={{padding:'8px 16px',borderRadius:6,border:'1px solid #333',background:'#111',color:'#fff'}}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <div style={{width:'100%',color:'red'}}>{error}</div>}
    </form>
  )
}
