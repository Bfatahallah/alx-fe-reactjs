import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import ImageModal from './components/ImageModal.jsx'
import RecipeDetail from './components/RecipeDetail.jsx'
import AddRecipeForm from './components/AddRecipeForm.jsx'
import EditRecipeForm from './components/EditRecipeForm.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
      </Routes>
      <ImageModal />
    </BrowserRouter>
  )
}
