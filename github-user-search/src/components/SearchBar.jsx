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
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={e=>setQuery(e.target.value)}
        placeholder="Search GitHub users..."
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <div className="error-message" style={{width:'100%'}}>{error}</div>}
    </form>
  )
}
