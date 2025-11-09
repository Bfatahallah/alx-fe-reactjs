import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';

const layoutStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
};

const mainStyle = {
  flex: 1,
  width: '100%',
  maxWidth: '960px',
  margin: '0 auto',
  background: '#fff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  borderRadius: '12px',
  padding: '10px 24px 40px 24px'
};

function App() {
  return (
    <div style={layoutStyle}>
      <Navbar />
      <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
