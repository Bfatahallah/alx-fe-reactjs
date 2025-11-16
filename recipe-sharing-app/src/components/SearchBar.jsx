import { useRecipeStore } from '../store/recipeStore'

export default function SearchBar(){
  const setSearchTerm = useRecipeStore(state=>state.setSearchTerm)

  return (
    <div style={{marginBottom:12}}>
      <input onChange={e=>setSearchTerm(e.target.value)} placeholder="Search recipes..." style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ccc'}} />
    </div>
  )
}
