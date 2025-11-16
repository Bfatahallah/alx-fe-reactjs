import { Routes, Route, Link } from 'react-router-dom'
import { useTheme } from './ThemeProvider'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

function Home(){
  return (
    <div style={{padding:20}}>
      <h1 style={{marginTop:0}}>Recipes</h1>
      <AddRecipeForm />
      <SearchBar />
      <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:20}}>
        <div>
          <RecipeList />
        </div>
        <aside>
          <FavoritesList />
          <RecommendationsList />
        </aside>
      </div>
    </div>
  )
}

function App(){
  const { mode, toggle } = useTheme()

  return (
    <div>
      <header style={{padding:12,borderBottom:'1px solid #e6edf3'}}>
        <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
          <div><Link to="/" style={{fontWeight:700}}>RecipeShare</Link></div>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <Link to="/">Home</Link>
            <button onClick={toggle} className="btn" aria-label="Toggle theme">
              {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipe/:id" element={<RecipeDetails/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
