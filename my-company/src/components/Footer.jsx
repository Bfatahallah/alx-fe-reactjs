const footerStyle = {
  marginTop: 'auto',
  background: '#0d47a1',
  color: '#fff',
  textAlign: 'center',
  padding: '22px 10px',
  fontSize: '0.9rem'
};

function Footer() {
  return (
    <footer style={footerStyle}>
      © {new Date().getFullYear()} MyCompany, ALX Fe. All rights reserved.
    </footer>
  );
}

export default Footer;
