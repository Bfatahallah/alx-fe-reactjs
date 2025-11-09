import { useTheme, radius, shadows } from '../theme.js';

function Services() {
  const { palette } = useTheme();
  const wrapper = { padding: '36px 0', color: palette.text };
  const grid = {
    display: 'grid',
    gap: '28px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'
  };
  const card = {
    background: palette.surface,
    padding: '20px 22px',
    borderRadius: radius.md,
    boxShadow: shadows.card,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    border: '1px solid #2a3f50',
    color: palette.text
  };
  const badge = {
    display: 'inline-block',
    background: palette.primaryEnd,
    color: palette.textLight,
    padding: '4px 10px',
    fontSize: '0.7rem',
    letterSpacing: '0.5px',
    borderRadius: radius.sm,
    fontWeight: 600
  };
  const services = [
    { title: 'Technology Consulting', desc: 'Strategic architecture, modernization & cloud guidance.' },
    { title: 'Market Analysis', desc: 'Data-driven insights to position your products effectively.' },
    { title: 'Product Development', desc: 'End-to-end delivery from ideation to launch.' },
    { title: 'Training & Workshops', desc: 'Upskill teams with focused technical and strategic sessions.' }
  ];
  return (
    <div style={wrapper}>
      <h1 style={{marginTop:0}}>Our Services</h1>
      <div style={grid}>
        {services.map(s => (
          <div key={s.title} style={card} className="card-hover">
            <span style={badge}>SERVICE</span>
            <h3 style={{margin:'8px 0 4px'}}>{s.title}</h3>
            <p style={{margin:0, fontSize:'0.9rem', lineHeight:1.5}}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Services;
