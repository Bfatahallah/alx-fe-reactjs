import { useState } from 'react'
import { useRecipeStore } from '../store/recipeStore'

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore(state => state.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return
    addRecipe({ id: Date.now(), title: title.trim(), description: description.trim(), ingredients: [], time: 0 })
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Recipe title" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ccc'}} />
        <button type="submit" className="btn btn-primary">Add</button>
      </div>
      <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Short description" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ccc'}} rows={3} />
    </form>
  )
}
