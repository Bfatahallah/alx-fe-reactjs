import { Link, useLocation } from 'react-router-dom';
import { useTheme, gradient, radius } from '../theme.js';

function Navbar() {
  const { palette, mode, toggleMode } = useTheme();
  const { pathname } = useLocation();
  const isActive = (path) => pathname === path;
  const navStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backgroundColor: palette.primaryStart,
    background: gradient(palette.primaryStart, palette.primaryEnd),
    padding: '14px 32px',
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: palette.textLight,
    boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
    backdropFilter: 'blur(4px)'
  };
  const linkBase = {
    color: palette.textLight,
    fontWeight: 500,
    letterSpacing: '0.6px',
    padding: '8px 14px',
    borderRadius: radius.sm,
    lineHeight: 1,
    display: 'inline-block',
    transition: 'background .25s, transform .25s'
  };
  const toggleBtnStyle = {
    ...linkBase,
    cursor: 'pointer',
    background: 'rgba(255,255,255,0.20)',
    border: 'none'
  };
  return (
    <nav style={navStyle}>
      <div style={{fontSize:'1.3rem', fontWeight:700, letterSpacing:'0.8px'}}>MyCompany</div>
      <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
        <Link className="nav-link" style={{...linkBase, background:isActive('/')?'rgba(255,255,255,0.20)':'transparent'}} to="/">Home</Link>
        <Link className="nav-link" style={{...linkBase, background:isActive('/about')?'rgba(255,255,255,0.20)':'transparent'}} to="/about">About</Link>
        <Link className="nav-link" style={{...linkBase, background:isActive('/services')?'rgba(255,255,255,0.20)':'transparent'}} to="/services">Services</Link>
        <Link className="nav-link" style={{...linkBase, background:isActive('/contact')?'rgba(255,255,255,0.20)':'transparent'}} to="/contact">Contact</Link>
        <button aria-label="Toggle dark mode" onClick={toggleMode} className="nav-link" style={toggleBtnStyle}>
          {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  );

}

export default Navbar;
