import { palette, gradient, radius, shadows } from '../theme.js';

function Home() {
  const heroStyle = {
    background: gradient(),
    padding: '64px 42px',
    borderRadius: radius.lg,
    color: '#fff',
    boxShadow: shadows.elevated,
    position: 'relative',
    overflow: 'hidden'
  };
  const overlay = {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 60%)'
  };
  const ctaBtn = {
    background: palette.accent,
    color: '#212121',
    border: 'none',
    padding: '14px 24px',
    fontWeight: 600,
    borderRadius: radius.md,
    cursor: 'pointer',
    marginTop: '28px',
    fontSize: '1rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    transition: 'transform .25s'
  };
  return (
    <div style={{ padding: '32px 0' }}>
      <section style={heroStyle}>
        <div style={overlay} />
        <h1 style={{marginTop:0, fontSize:'2.4rem', letterSpacing:'1px'}}>Welcome to Our Company</h1>
        <p style={{fontSize:'1.15rem', maxWidth:'640px', lineHeight:1.6}}>We are dedicated to delivering excellence in technology, strategy, and innovation. Explore our services and discover how we can accelerate your growth.</p>
        <a href="/services" style={ctaBtn}>Explore Services →</a>
      </section>
    </div>
  );
}
export default Home;
