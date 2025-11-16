import { useNavigate } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'

export default function DeleteRecipeButton({ recipeId, onDone }){
  const navigate = useNavigate()
  const deleteRecipe = useRecipeStore(state=>state.deleteRecipe)

  const handleDelete = ()=>{
    if (window.confirm('Are you sure you want to delete this recipe?')){
      deleteRecipe(recipeId)
      if (onDone) onDone()
      navigate('/')
    }
  }

  return (
    <button onClick={handleDelete} className="btn btn-danger">
      Delete Recipe
    </button>
  )
}
