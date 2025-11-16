import create from 'zustand'

const sample = [
  { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian pasta with eggs, cheese and pancetta.', ingredients: ['pasta','eggs','cheese'], time: 25 },
  { id: 2, title: 'Avocado Toast', description: 'Toasted bread topped with smashed avocado and seasoning.', ingredients: ['bread','avocado'], time: 10 }
];

export const useRecipeStore = create((set, get) => ({
  recipes: sample,
  favorites: [],
  searchTerm: '',

  // CRUD
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (updated) => set((state) => ({
    recipes: state.recipes.map(r => r.id === updated.id ? { ...r, ...updated } : r)
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(r => r.id !== id),
    favorites: state.favorites.filter(fid => fid !== id)
  })),

  // Search & filtering
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Favorites & recommendations
  toggleFavorite: (id) => set((state) => ({
    favorites: state.favorites.includes(id) ? state.favorites.filter(fid => fid !== id) : [...state.favorites, id]
  })),
  generateRecommendations: () => {
    const state = get();
    // simple: recommend recipes not favorited
    const recs = state.recipes.filter(r => !state.favorites.includes(r.id)).slice(0, 4);
    return recs;
  }
}));

export default useRecipeStore;
