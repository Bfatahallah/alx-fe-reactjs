import { useState } from 'react';
import { useTheme, radius } from '../theme.js';

function Contact() {
  const [formData, setFormData] = useState({ name:'', email:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Valid email required';
    if (formData.message.trim().length < 10) errs.message = 'Message should be at least 10 characters';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
      setTimeout(()=> setSubmitted(false), 3000);
      setFormData({ name:'', email:'', message:'' });
    }
  };

  const { palette } = useTheme();
  const fieldStyle = {
    display:'block',
    width:'100%',
    padding:'12px 14px',
    margin:'8px 0',
    borderRadius: radius.sm,
    border:`1px solid ${palette.mode==='dark' ? '#2a3f50' : '#cbd5e1'}`,
    fontSize:'0.95rem',
    background: palette.surface,
    color: palette.text
  };
  const errorStyle = { color: palette.danger, fontSize:'0.75rem', margin:'-4px 0 8px' };

  return (
    <div style={{ padding: '36px 0', color: palette.text }}>
      <h1 style={{marginTop:0}}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{maxWidth:'520px'}} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={fieldStyle}
        />
        {errors.name && <div style={errorStyle}>{errors.name}</div>}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={fieldStyle}
        />
        {errors.email && <div style={errorStyle}>{errors.email}</div>}
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          style={{...fieldStyle, resize:'vertical'}}
        />
        {errors.message && <div style={errorStyle}>{errors.message}</div>}
        <button type="submit" className="btn-primary" style={{background:palette.primaryEnd, color:palette.textLight, border:'none', padding:'14px 24px', borderRadius:radius.md, cursor:'pointer', fontSize:'0.95rem', fontWeight:600, letterSpacing:'0.5px', boxShadow:'0 4px 10px rgba(0,0,0,0.15)'}}>
          Send Message
        </button>
        {submitted && <p style={{color:palette.success, marginTop:'14px'}}>Form submitted!</p>}
      </form>
    </div>
  );
}
export default Contact;
