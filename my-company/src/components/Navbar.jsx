import { Link, useLocation } from 'react-router-dom';

const navStyle = {
  background: 'linear-gradient(90deg,#0d47a1,#1976d2)',
  padding: '12px 28px',
  display: 'flex',
  gap: '24px',
  alignItems: 'center',
  color: '#fff',
  boxShadow: '0 2px 6px rgba(0,0,0,0.25)'
};

const linkBase = {
  color: '#fff',
  fontWeight: 500,
  letterSpacing: '0.5px',
  padding: '6px 10px',
  borderRadius: '6px',
  transition: 'background .25s, transform .25s'
};

function Navbar() {
  const { pathname } = useLocation();
  const isActive = (path) => pathname === path;
  return (
    <nav style={navStyle}>
      <div style={{fontSize:'1.15rem', fontWeight:600}}>MyCompany</div>
      <div style={{display:'flex', gap:'8px'}}>
        <Link style={{...linkBase, background:isActive('/')?'rgba(255,255,255,0.18)':'transparent'}} to="/">Home</Link>
        <Link style={{...linkBase, background:isActive('/about')?'rgba(255,255,255,0.18)':'transparent'}} to="/about">About</Link>
        <Link style={{...linkBase, background:isActive('/services')?'rgba(255,255,255,0.18)':'transparent'}} to="/services">Services</Link>
        <Link style={{...linkBase, background:isActive('/contact')?'rgba(255,255,255,0.18)':'transparent'}} to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
