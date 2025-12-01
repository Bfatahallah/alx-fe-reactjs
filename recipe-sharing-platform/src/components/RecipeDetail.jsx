import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import data from '../data.json'

export default function RecipeDetail() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    const recipeId = Number(id)
    const foundRecipe = data.find((r) => r.id === recipeId)
    setRecipe(foundRecipe)
  }, [id])

  if (!recipe) {
    return (
      <main className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-neutral-900/50 border border-white/10 rounded-xl p-8 shadow-lg">
          <p className="text-lg text-gray-200 mb-6">Recipe not found.</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </main>
    )
  }

  const ingredients = recipe.ingredients || [
    '1 tbsp olive oil',
    'Salt and pepper to taste',
    'Fresh herbs (optional)',
  ]
  const instructions = recipe.steps || [
    'Prepare all ingredients and preheat oven or pan as needed.',
    'Cook according to the recipe overview.',
    'Adjust seasoning and serve warm.',
  ]

  return (
    <main className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image with Blur and Radial Darkening */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${recipe.image})` }}
        />
        <div className="absolute inset-0 w-full h-full backdrop-blur-sm bg-black/60" />
        <div className="absolute inset-0 w-full h-full bg-gradient-radial from-transparent via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-indigo-300 hover:text-indigo-200 hover:bg-white/5 rounded-lg transition-all duration-200 font-medium group"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            <span>Back to Home</span>
          </Link>

          {/* Recipe Header - Centered */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
              {recipe.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              {recipe.summary}
            </p>
          </div>

          {/* Cards Section - Centered */}
          <div className="space-y-8 max-w-2xl mx-auto">
            {/* Ingredients Card */}
            <section className="bg-neutral-900/80 border border-white/10 rounded-xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
                <span className="text-indigo-400">📋</span>
                Ingredients
              </h2>
              <ul className="space-y-3">
                {ingredients.map((it, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start gap-3 text-gray-300 leading-relaxed"
                  >
                    <span className="text-indigo-400 mt-1 flex-shrink-0">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Steps Card */}
            <section className="bg-neutral-900/80 border border-white/10 rounded-xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
                <span className="text-indigo-400">👨‍🍳</span>
                Instructions
              </h2>
              <ol className="space-y-4">
                {instructions.map((s, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start gap-4 text-gray-300 leading-relaxed"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 bg-indigo-600/20 text-indigo-300 rounded-full text-sm font-semibold border border-indigo-500/30">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5">{s}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
