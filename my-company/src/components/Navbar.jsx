import { Link, useLocation } from 'react-router-dom';
import { palette, gradient, radius } from '../theme.js';

const navStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 50,
  background: gradient(),
  padding: '14px 32px',
  display: 'flex',
  gap: '32px',
  alignItems: 'center',
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

function Navbar() {
  const { pathname } = useLocation();
  const isActive = (path) => pathname === path;
  return (
    <nav style={navStyle}>
      <div style={{fontSize:'1.3rem', fontWeight:700, letterSpacing:'0.8px'}}>MyCompany</div>
      <div style={{display:'flex', gap:'10px'}}>
        <Link style={{...linkBase, background:isActive('/')?'rgba(255,255,255,0.20)':'transparent'}} to="/">Home</Link>
        <Link style={{...linkBase, background:isActive('/about')?'rgba(255,255,255,0.20)':'transparent'}} to="/about">About</Link>
        <Link style={{...linkBase, background:isActive('/services')?'rgba(255,255,255,0.20)':'transparent'}} to="/services">Services</Link>
        <Link style={{...linkBase, background:isActive('/contact')?'rgba(255,255,255,0.20)':'transparent'}} to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
