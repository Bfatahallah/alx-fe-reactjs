import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name:'', email:'', message:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(()=> setSubmitted(false), 3000);
  };

  const fieldStyle = { display:'block', width:'100%', padding:'10px 12px', margin:'8px 0', borderRadius:'8px', border:'1px solid #ccc', fontSize:'0.95rem' };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{marginTop:0}}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{maxWidth:'480px'}}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={fieldStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={fieldStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          style={{...fieldStyle, resize:'vertical'}}
          required
        />
        <button type="submit" style={{background:'#1976d2', color:'#fff', border:'none', padding:'12px 20px', borderRadius:'8px', cursor:'pointer', fontSize:'0.95rem', fontWeight:600}}>Send Message</button>
        {submitted && <p style={{color:'green', marginTop:'12px'}}>Form submitted!</p>}
      </form>
    </div>
  );
}
export default Contact;
