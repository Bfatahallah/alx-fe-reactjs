import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import { layout, getPalette, ThemeContext } from './theme.js';
import { useMemo, useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const palette = useMemo(() => getPalette(mode), [mode]);
  const toggleMode = () => setMode(m => (m === 'light' ? 'dark' : 'light'));

  const layoutStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: palette.mode === 'dark' ? '#0e141b' : `radial-gradient(circle at 20% 20%, #ffffff, ${palette.bg})`,
    color: palette.text
  };

  const mainStyle = {
    flex: 1,
    width: '100%',
    ...layout.container,
    background: 'transparent',
    padding: '42px 0 64px'
  };

  return (
    <ThemeContext.Provider value={{ mode, palette, toggleMode }}>
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
    </ThemeContext.Provider>
  );
}

export default App;
