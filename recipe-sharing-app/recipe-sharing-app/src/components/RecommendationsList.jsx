import { useRecipeStore } from '../store/recipeStore'
import { Link } from 'react-router-dom'

export default function RecommendationsList(){
  const generate = useRecipeStore(state=>state.generateRecommendations)
  const recs = generate()
  if (!recs || recs.length === 0) return null
  return (
    <div style={{marginTop:16}}>
      <h3>Recommended</h3>
      <div style={{display:'grid',gap:8}}>
        {recs.map(r=> (
          <div key={r.id} style={{padding:8,border:'1px solid #e5e7eb',borderRadius:6}}>
            <Link to={`/recipe/${r.id}`} style={{color:'#0b5ed7'}}>{r.title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
