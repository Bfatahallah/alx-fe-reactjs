import { useParams, useNavigate } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'
import EditRecipeForm from './EditRecipeForm'

export default function RecipeDetails(){
  const { id } = useParams()
  const rid = Number(id)
  const recipe = useRecipeStore(state => state.recipes.find(r=>r.id===rid))
  const toggleFavorite = useRecipeStore(state => state.toggleFavorite)
  const navigate = useNavigate()

  if (!recipe) return <div style={{padding:20}}>Recipe not found.</div>

  return (
    <div style={{padding:20}}>
      <h1 style={{marginTop:0}}>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <div style={{display:'flex',gap:8,marginTop:12}}>
        <button onClick={()=>toggleFavorite(recipe.id)} className="btn">Toggle Favorite</button>
        <button onClick={()=>navigate(-1)} className="btn">Back</button>
      </div>

      <hr style={{margin:'18px 0'}} />
      <h3>Edit</h3>
      <EditRecipeForm recipe={recipe} onDone={()=>navigate(`/recipe/${recipe.id}`)} />
    </div>
  )
}
