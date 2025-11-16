import { useState } from 'react'
import { useRecipeStore } from '../store/recipeStore'

export default function EditRecipeForm({ recipe, onDone }){
  const updateRecipe = useRecipeStore(state=>state.updateRecipe)
  const deleteRecipe = useRecipeStore(state=>state.deleteRecipe)
  const [title, setTitle] = useState(recipe.title)
  const [description, setDescription] = useState(recipe.description)

  const handleSave = (e)=>{
    e.preventDefault()
    updateRecipe({ ...recipe, title, description })
    if (onDone) onDone()
  }

  const handleDelete = ()=>{
    deleteRecipe(recipe.id)
    if (onDone) onDone()
  }

  return (
    <form onSubmit={handleSave} style={{display:'flex',flexDirection:'column',gap:8,maxWidth:600}}>
      <input value={title} onChange={e=>setTitle(e.target.value)} style={{padding:8,borderRadius:6,border:'1px solid #ccc'}} />
      <textarea value={description} onChange={e=>setDescription(e.target.value)} rows={4} style={{padding:8,borderRadius:6,border:'1px solid #ccc'}} />
      <div style={{display:'flex',gap:8}}>
        <button type="submit" className="btn btn-primary">Save</button>
        <button type="button" onClick={handleDelete} className="btn btn-danger">Delete</button>
      </div>
    </form>
  )
}
