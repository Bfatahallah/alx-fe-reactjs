import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <UserProfile 
       name="Alice" 
       age="25" 
       bio="Loves hiking and photography" />
  
      <Header />
      <MainContent />
      <Counter />
      <Footer />
    </>
  )
}

export default App
