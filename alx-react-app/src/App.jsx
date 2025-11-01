import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <>
      <UserProfile 
        name="Badr Fatahallah"
        age="29"
        bio="Loves hiking, photography, and coding React applications!"
      />
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
