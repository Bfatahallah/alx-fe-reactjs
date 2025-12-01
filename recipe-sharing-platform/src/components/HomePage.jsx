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
    <div>
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl py-16 sm:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Recipe Sharing Platform
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Discover, share, and save your favorite recipes, from weeknight
            quick wins to weekend showstoppers.
          </p>
          <Link
            to="#featured"
            className="mt-6 inline-block text-indigo-300 hover:text-indigo-200 transition-colors duration-200"
          >
            Browse Featured ↓
          </Link>
          <Link
            to="/add"
            className="ml-4 mt-6 inline-block text-sm font-medium px-4 py-2 rounded-lg bg-indigo-600/90 hover:bg-indigo-500 text-white shadow transition-colors duration-200"
          >
            + Add Recipe
          </Link>
        </div>
      </section>

      <main className="w-full px-4 sm:px-6 lg:px-8 pb-12">
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
                  <div className="h-px w-full bg-gradient-to-r from-indigo-500/40 via-white/10 to-transparent mt-10" />
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
