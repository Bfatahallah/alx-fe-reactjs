import { Link } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'

export default function RecipeList() {
  const recipes = useRecipeStore(state => state.recipes)
  const searchTerm = useRecipeStore(state => state.searchTerm)

  const filtered = recipes.filter(r => {
    if (!searchTerm) return true
    const q = searchTerm.toLowerCase()
    return r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)
  })

  if (filtered.length === 0) return <p>No recipes found.</p>

  return (
    <div style={{ display:'grid', gap:12 }}>
      {filtered.map(r => (
        <div key={r.id} className="card" style={{ padding:12 }}>
          <h3 style={{margin:'0 0 6px'}}><Link to={`/recipe/${r.id}`} className="link">{r.title}</Link></h3>
          <p style={{margin:0,color:'var(--muted)'}}>{r.description}</p>
        </div>
      ))}
    </div>
  )
}
