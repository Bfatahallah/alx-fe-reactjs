import { useRecipeStore } from '../store/recipeStore'

export default function DeleteRecipeButton({ recipeId, onDone }){
  const deleteRecipe = useRecipeStore(state=>state.deleteRecipe)

  const handleDelete = ()=>{
    if (window.confirm('Are you sure you want to delete this recipe?')){
      deleteRecipe(recipeId)
      if (onDone) onDone()
    }
  }

  return (
    <button onClick={handleDelete} className="btn btn-danger">
      Delete Recipe
    </button>
  )
}
