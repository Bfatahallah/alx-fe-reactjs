import { useRecipeStore } from '../store/recipeStore'
import { Link } from 'react-router-dom'

export default function FavoritesList(){
  const favorites = useRecipeStore(state=>state.favorites)
  const recipes = useRecipeStore(state=>state.recipes)

  const favRecipes = favorites.map(id => recipes.find(r=>r.id===id)).filter(Boolean)

  if (favRecipes.length === 0) return null

  return (
    <div style={{marginTop:16}}>
      <h3>Favorites</h3>
      <div style={{display:'grid',gap:8}}>
        {favRecipes.map(r=> (
          <div key={r.id} className="card" style={{padding:8}}>
            <Link to={`/recipe/${r.id}`} className="link">{r.title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
