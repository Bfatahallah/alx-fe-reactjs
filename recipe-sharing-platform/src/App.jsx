import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import ImageModal from './components/ImageModal.jsx'
import RecipeDetail from './components/RecipeDetail.jsx'
import AddRecipeForm from './components/AddRecipeForm.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
      <ImageModal />
    </BrowserRouter>
  )
}
