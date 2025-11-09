import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import { layout, palette, radius, shadows } from './theme.js';

const layoutStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: `radial-gradient(circle at 20% 20%, #ffffff, ${palette.bg})`
};

const mainStyle = {
  flex: 1,
  width: '100%',
  ...layout.container,
  background: 'transparent',
  padding: '42px 0 64px'
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
