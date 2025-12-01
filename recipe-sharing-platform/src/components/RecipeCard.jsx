import { useNavigate } from 'react-router-dom'
import { useImageModalStore } from '../store/imageModalStore'

export default function RecipeCard({ recipe, onDelete }) {
  const navigate = useNavigate()
  const { openModal } = useImageModalStore()
  const isUserRecipe = typeof recipe.id === 'number' && recipe.id > 100000000000 // timestamp id heuristic

  return (
    <article
      className="group bg-neutral-900 border border-white/10 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onClick={() => navigate(`/recipe/${recipe.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') navigate(`/recipe/${recipe.id}`)
      }}
    >
      <div className="relative aspect-video bg-neutral-800 overflow-hidden cursor-zoom-in">
        {isUserRecipe && (
          <span className="absolute top-2 left-2 z-10 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-indigo-600/80 backdrop-blur text-[10px] font-semibold text-white tracking-wide shadow">
            NEW
          </span>
        )}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110 group-hover:brightness-75"
          loading="lazy"
        />
        {/* Preview overlay */}
        <button
          type="button"
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-zoom-in"
          onClick={(e) => {
            e.stopPropagation()
            openModal(recipe.image)
          }}
          aria-label={`Preview image for ${recipe.title}`}
        >
          <span className="rounded-full bg-black/60 text-white text-xs font-medium px-3 py-1">
            Preview
          </span>
        </button>
      </div>
      <div className="p-4 bg-neutral-900 transition-colors duration-300 group-hover:bg-white cursor-pointer">
        <h3 className="text-lg font-semibold text-white transition-colors duration-300 transform-gpu ease-out group-hover:text-black group-hover:scale-[1.02]">
          {recipe.title}
        </h3>
        <p className="mt-2 text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-800">
          {recipe.summary}
        </p>
        {isUserRecipe && onDelete && (
          <div className="flex gap-2 mt-3">
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigate(`/edit/${recipe.id}`)
              }}
              className="text-xs font-medium px-3 py-1.5 rounded bg-indigo-600/90 hover:bg-indigo-500 text-white transition-colors"
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onDelete(recipe.id)
              }}
              className="text-xs font-medium px-3 py-1.5 rounded bg-red-600/90 hover:bg-red-500 text-white transition-colors"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </article>
  )
}
