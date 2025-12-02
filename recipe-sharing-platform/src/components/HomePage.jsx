import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import recipesData from '../data.json'
import RecipeCard from './RecipeCard'

export default function HomePage() {
  const [allRecipes, setAllRecipes] = useState([])

  const loadRecipes = () => {
    const userRecipes = (() => {
      try {
        return JSON.parse(localStorage.getItem('userRecipes') || '[]')
      } catch {
        return []
      }
    })()
    setAllRecipes([...userRecipes, ...recipesData])
  }

  useEffect(() => {
    loadRecipes()
  }, [])

  useEffect(() => {
    // Listen for storage changes (other tabs) and refresh list
    function handleStorage(e) {
      if (e.key === 'userRecipes') {
        loadRecipes()
      }
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const handleDelete = (id) => {
    if (!window.confirm('Delete this recipe?')) return
    try {
      const userRecipes = JSON.parse(localStorage.getItem('userRecipes') || '[]')
      const updated = userRecipes.filter(r => r.id !== id)
      localStorage.setItem('userRecipes', JSON.stringify(updated))
      loadRecipes()
    } catch (err) {
      console.error('Delete failed:', err)
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Premium mesh gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-purple-950/20 to-slate-900 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23fff" fill-opacity="0.03"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")'}} />
      
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl py-16 sm:py-24 text-center">
          {/* Glass effect backdrop for title */}
          <div className="inline-block px-8 py-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight bg-linear-to-br from-white via-indigo-100 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(129,140,248,0.5)] animate-[pulse_4s_ease-in-out_infinite]">
              Recipe Sharing Platform
            </h1>
          </div>
          <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Discover, share, and save your favorite recipes, from weeknight
            quick wins to weekend showstoppers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              to="#featured"
              className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200 transition-all duration-200 hover:scale-105 font-medium"
            >
              Browse Featured ↓
            </Link>
            <Link
              to="/add"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:scale-105 hover:shadow-indigo-500/50"
            >
              + Add Recipe
            </Link>
          </div>
        </div>
      </section>

      <main className="relative w-full px-4 sm:px-6 lg:px-8 pb-12">
        <header className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-200">
            Featured Recipes
          </h2>
          <p className="mt-2 text-gray-400">
            Explore quick ideas and classics you can cook today.
          </p>
        </header>

        {(() => {
          const userRecipes = allRecipes.filter(r => typeof r.id === 'number' && r.id > 100000000000)
          const coreRecipes = allRecipes.filter(r => !(typeof r.id === 'number' && r.id > 100000000000))
          return (
            <>
              {userRecipes.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-indigo-300">Your Recipes</h3>
                  <p className="text-sm text-gray-400 mt-1">Locally added recipes stored in your browser.</p>
                  <section className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userRecipes.map(r => <RecipeCard key={r.id} recipe={r} onDelete={handleDelete} />)}
                  </section>
                  <div className="h-px w-full bg-linear-to-r from-indigo-500/40 via-white/10 to-transparent mt-10" />
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-200">Featured Recipes</h3>
                <p className="text-sm text-gray-400 mt-1">Platform curated collection.</p>
              </div>
              <section id="featured" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {coreRecipes.map(r => <RecipeCard key={r.id} recipe={r} />)}
              </section>
            </>
          )
        })()}
      </main>
      {/* Global modal mount */}
      <div id="modal-root">
        {/* Modal uses global Zustand store */}
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      </div>
    </div>
  )
}
