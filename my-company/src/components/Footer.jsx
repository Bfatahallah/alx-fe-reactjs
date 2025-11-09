import { useTheme, gradient } from '../theme.js';

function Footer() {
  const { palette } = useTheme();
  const footerStyle = {
    marginTop: 'auto',
    background: gradient(palette.primaryStart, palette.primaryEnd),
    color: palette.textLight,
    textAlign: 'center',
    padding: '28px 12px 32px',
    fontSize: '0.85rem',
    letterSpacing: '0.5px',
    borderTop: '4px solid rgba(255,255,255,0.15)'
  };

  return (
    <footer style={footerStyle}>
      © {new Date().getFullYear()} MyCompany · ALX FE. All rights reserved.
    </footer>
  );
}

export default Footer;
