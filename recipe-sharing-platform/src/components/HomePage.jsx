import { useEffect, useState } from 'react'
import recipesData from '../data.json'

export default function HomePage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    // Load data when the component mounts
    setRecipes(recipesData)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-neutral-900">
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl py-16 sm:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Recipe Sharing Platform
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Discover, share, and save your favorite recipes — from weeknight
            quick wins to weekend showstoppers.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <header className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-200">
            Featured Recipes
          </h2>
          <p className="mt-2 text-gray-400">
            Explore quick ideas and classics you can cook today.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r) => (
            <article
              key={r.id}
              className="bg-neutral-900 border border-white/10 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-neutral-800 overflow-hidden">
                <img
                  src={r.image}
                  alt={r.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  {r.summary}
                </p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
