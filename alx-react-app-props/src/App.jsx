import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import { UserContext } from './components/UserContext'
import ProfilePage from './components/ProfilePage'

function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' }
  return (
    <UserContext.Provider value={userData}>
      <Header />
      <ProfilePage />
      <MainContent />
      <Footer />
    </UserContext.Provider>
  )
}

export default App
