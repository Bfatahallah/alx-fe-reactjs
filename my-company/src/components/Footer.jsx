import { palette, gradient } from '../theme.js';

const footerStyle = {
  marginTop: 'auto',
  background: gradient(palette.primaryStart, palette.primaryEnd),
  color: '#fff',
  textAlign: 'center',
  padding: '28px 12px 32px',
  fontSize: '0.85rem',
  letterSpacing: '0.5px',
  borderTop: '4px solid rgba(255,255,255,0.15)'
};

function Footer() {
  return (
    <footer style={footerStyle}>
      © {new Date().getFullYear()} MyCompany. All rights reserved.
    </footer>
  );
}

export default Footer;
