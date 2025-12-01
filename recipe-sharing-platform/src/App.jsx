import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import ImageModal from './components/ImageModal.jsx'
import RecipeDetail from './pages/RecipeDetail.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      <ImageModal />
    </BrowserRouter>
  )
}
