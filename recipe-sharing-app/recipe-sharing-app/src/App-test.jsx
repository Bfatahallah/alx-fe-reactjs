import { Routes, Route, Link } from 'react-router-dom'
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
  return (
    <div>
      <header style={{padding:12,borderBottom:'1px solid #e6edf3'}}>
        <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
          <div><Link to="/" style={{fontWeight:700}}>RecipeShare</Link></div>
          <div><Link to="/">Home</Link></div>
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
import { Routes, Route, Link } from 'react-router-dom'
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
  return (
    <div>
      <header style={{padding:12,borderBottom:'1px solid #e6edf3'}}>
        <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
          <div><Link to="/" style={{fontWeight:700}}>RecipeShare</Link></div>
          <div><Link to="/">Home</Link></div>
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


import { Routes, Route, Link } from 'react-router-dom'
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
  return (
    <div>
      <header style={{padding:12,borderBottom:'1px solid #e6edf3'}}>
        <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
          <div><Link to="/" style={{fontWeight:700}}>RecipeShare</Link></div>
          <div><Link to="/">Home</Link></div>
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


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


