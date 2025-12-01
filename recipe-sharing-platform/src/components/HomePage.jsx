import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import recipesData from '../data.json'
import RecipeCard from './RecipeCard'

export default function HomePage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    // Load data when the component mounts
    setRecipes(recipesData)
  }, [])

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

        <section id="featured" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </section>
      </main>
      {/* Global modal mount */}
      <div id="modal-root">
        {/* Modal uses global Zustand store */}
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      </div>
    </div>
  )
}
