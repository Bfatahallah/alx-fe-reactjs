import { useTheme, radius, shadows } from '../theme.js';

function About() {
  const { palette } = useTheme();
  const wrapper = { padding: '36px 0', color: palette.text };
  const grid = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px'
  };
  const card = {
    flex: '1 1 300px',
    background: palette.surface,
    padding: '26px 28px',
    borderRadius: radius.md,
    boxShadow: shadows.card,
    minWidth: '280px',
    color: palette.text
  };
  const mission = {
    flex: '1 1 300px',
    background: palette.surfaceAlt,
    padding: '26px 28px',
    borderRadius: radius.md,
    boxShadow: 'inset 0 0 0 2px #2a3f50',
    minWidth: '280px',
    color: palette.text
  };
  return (
    <div style={wrapper}>
      <h1 style={{marginTop:0}}>About Us</h1>
      <div style={grid}>
        <div style={card} className="card-hover">
          <h2 style={{marginTop:0}}>Our Story</h2>
          <p>Since 1990, we have partnered with organizations to unlock new value through technology, marketing excellence, and product strategy.</p>
          <p>Our multidisciplinary team blends engineering rigor with creative problem solving.</p>
        </div>
        <div style={mission} className="card-hover">
          <h2 style={{marginTop:0}}>Mission & Vision</h2>
          <p><strong>Mission:</strong> Empower businesses via innovation, insight, and sustainable growth practices.</p>
          <p><strong>Vision:</strong> A world where every company leverages responsible technology to amplify human potential.</p>
        </div>
      </div>
    </div>
  );
}
export default About;
