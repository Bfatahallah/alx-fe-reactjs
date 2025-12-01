import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddRecipeForm() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const [imageChoice, setImageChoice] = useState('SpaghettiCarbonara.png')
  const [customImageUrl, setCustomImageUrl] = useState('')
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // Derived validation
  function validate(current = { title, ingredients, steps, imageChoice, customImageUrl }) {
    const nextErrors = {}
    if (!current.title.trim()) nextErrors.title = 'Title is required.'
    if (current.title.length > 80) nextErrors.title = 'Title must be 80 characters or fewer.'
    const ingLines = current.ingredients.split('\n').map(l => l.trim()).filter(Boolean)
    if (ingLines.length < 2) nextErrors.ingredients = 'Provide at least 2 ingredients (one per line).'
    if (ingLines.some(l => l.length > 120)) nextErrors.ingredients = 'Each ingredient must be <= 120 characters.'
    const stepLines = current.steps.split('\n').map(l => l.trim()).filter(Boolean)
    if (stepLines.length < 2) nextErrors.steps = 'Provide at least 2 preparation steps.'
    if (stepLines.some(l => l.length > 200)) nextErrors.steps = 'Each step must be <= 200 characters.'
    if (customImageUrl && !/^https?:\/\//i.test(customImageUrl)) {
      nextErrors.customImageUrl = 'Image URL must start with http or https.'
    }
    return nextErrors
  }

  useEffect(() => {
    setErrors(validate())
  }, [title, ingredients, steps, imageChoice, customImageUrl])

  const isValid = Object.keys(errors).length === 0

  function handleSubmit(e) {
    e.preventDefault()
    setTouched({ title: true, ingredients: true, steps: true })
    if (!isValid) return
    const ing = ingredients.split('\n').map(l => l.trim()).filter(Boolean)
    const stps = steps.split('\n').map(l => l.trim()).filter(Boolean)
    const img = customImageUrl.trim() || `/images/${imageChoice}`
    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      summary: stps[0] || 'New recipe',
      ingredients: ing,
      steps: stps,
      image: img
    }
    // Persist to localStorage list
    const existing = JSON.parse(localStorage.getItem('userRecipes') || '[]')
    localStorage.setItem('userRecipes', JSON.stringify([...existing, newRecipe]))
    setSubmitted(true)
    // Reset form
    setTitle('')
    setIngredients('')
    setSteps('')
    setImageChoice('SpaghettiCarbonara.png')
    setCustomImageUrl('')
    // Navigate back after short delay
    setTimeout(() => navigate('/'), 1200)
  }

  function renderError(name) {
    if (!touched[name] && !submitted) return null
    if (!errors[name]) return null
    return <p className="mt-1 text-xs text-red-400">{errors[name]}</p>
  }

  return (
    <main className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Add a New Recipe</h1>
          <Link to="/" className="text-indigo-300 hover:text-indigo-200 text-sm">← Back</Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 shadow-xl space-y-6"
        >
          {submitted && (
            <div role="status" aria-live="polite" className="rounded-lg bg-green-600/20 border border-green-500/30 p-3 text-green-300 text-sm">
              Recipe saved! Redirecting…
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onBlur={() => setTouched(t => ({ ...t, title: true }))}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg bg-neutral-800 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 text-white px-3 py-2 text-sm outline-none transition"
              placeholder="e.g. Creamy Tomato Pasta"
            />
            <div className="flex items-center justify-between mt-1">
              {renderError('title')}
              <p className="text-[10px] text-gray-500 ml-auto">{title.length}/80</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="ingredients">Ingredients (one per line)</label>
            <textarea
              id="ingredients"
              rows={6}
              value={ingredients}
              onBlur={() => setTouched(t => ({ ...t, ingredients: true }))}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full rounded-lg bg-neutral-800 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 text-white px-3 py-2 text-sm outline-none transition resize-y"
              placeholder={"2 cups flour\n1 tsp salt\n1 cup water"}
            />
            <div className="flex items-center justify-between mt-1">
              {renderError('ingredients')}
              <p className="text-[10px] text-gray-500 ml-auto">{ingredients.split('\n').filter(l=>l.trim()).length} lines</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="steps">Preparation Steps (one per line)</label>
            <textarea
              id="steps"
              rows={6}
              value={steps}
              onBlur={() => setTouched(t => ({ ...t, steps: true }))}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full rounded-lg bg-neutral-800 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 text-white px-3 py-2 text-sm outline-none transition resize-y"
              placeholder={"Preheat oven to 375F\nMix dry ingredients\nFold wet into dry"}
            />
            <div className="flex items-center justify-between mt-1">
              {renderError('steps')}
              <p className="text-[10px] text-gray-500 ml-auto">{steps.split('\n').filter(l=>l.trim()).length} steps</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="imageChoice">Image</label>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <select
                  id="imageChoice"
                  value={imageChoice}
                  onBlur={() => setTouched(t => ({ ...t, imageChoice: true }))}
                  onChange={(e) => setImageChoice(e.target.value)}
                  className="w-full rounded-lg bg-neutral-800 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 text-white px-3 py-2 text-sm outline-none transition"
                >
                  {["SpaghettiCarbonara.png","ChickenTikkaMasala.png","MargheritaPizza.png","BeefStirFry.png","GreekSalad.png","BlueberryMuffins.png"].map(opt => (
                    <option key={opt} value={opt}>{opt.replace('.png','')}</option>
                  ))}
                </select>
                <p className="mt-1 text-[11px] text-gray-500">Select from existing images.</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Or paste custom image URL"
                  value={customImageUrl}
                  onBlur={() => setTouched(t => ({ ...t, customImageUrl: true }))}
                  onChange={(e) => setCustomImageUrl(e.target.value)}
                  className="w-full rounded-lg bg-neutral-800 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 text-white px-3 py-2 text-sm outline-none transition"
                />
                {renderError('customImageUrl')}
                <p className="mt-1 text-[11px] text-gray-500">Custom URL overrides selection.</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="w-32 h-20 bg-neutral-800 border border-white/10 rounded flex items-center justify-center overflow-hidden">
                <img
                  src={customImageUrl.trim() || `/images/${imageChoice}`}
                  alt="Preview"
                  className="max-w-full max-h-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-400">Live preview</p>
            </div>
          </div>
          <div className="pt-2 flex items-center gap-4">
            <button
              type="submit"
              disabled={!isValid}
              className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200 shadow disabled:opacity-40 disabled:cursor-not-allowed ${isValid ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-neutral-700 text-gray-300'}`}
            >
              Save Recipe
            </button>
            <button
              type="button"
              onClick={() => { setTitle(''); setIngredients(''); setSteps(''); setErrors({}); setTouched({}); setSubmitted(false); setImageChoice('SpaghettiCarbonara.png'); setCustomImageUrl('') }}
              className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
            >
              Reset
            </button>
          </div>
          <p className="text-xs text-gray-500">Your recipe is stored locally and will be visible after redirect.</p>
        </form>
      </div>
    </main>
  )
}