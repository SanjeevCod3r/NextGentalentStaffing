import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { submitToExcel } from '../utils/formSubmit';

const ContactForm = ({ dark = false, isModal = false, onCancel }) => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const success = await submitToExcel({
      ...formData,
      source: isModal ? 'Enquiry Popup' : 'Contact Page'
    });

    setLoading(false);
    if (success) {
      setSent(true);
      // Auto close/reset after 5 seconds
      setTimeout(() => {
        setSent(false);
        setFormData({ fullName: '', phone: '', email: '', interest: '', message: '' });
        if (onCancel && isModal) onCancel();
      }, 5000);
    }
  };

  if (sent) {
    return (
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', background: 'rgba(15, 98, 254, 0.05)', borderRadius: '24px', padding: isModal ? '2rem' : '4rem',
        animation: 'fadeInUp 0.5s ease-out'
      }}>
        <div style={{ 
          width: '70px', height: '70px', borderRadius: '50%', background: 'var(--primary)', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
          boxShadow: '0 12px 30px rgba(15, 98, 254, 0.4)'
        }}>
          <CheckCircle2 size={35} color="white" />
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', margin: '0 0 0.5rem', color: dark ? 'white' : 'var(--text-main)' }}>Message Received!</h3>
        <p style={{ color: dark ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)', fontSize: '1rem' }}>Thank you for reaching out. We'll be in touch very soon.</p>
        <button onClick={() => setSent(false)} className="btn btn-outline" style={{ marginTop: '2rem', borderRadius: '12px', color: dark ? 'white' : 'var(--primary)', borderColor: dark ? 'white' : 'var(--primary)' }}>Send Another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
        <div className="input-group" style={{ margin: 0 }}>
          <label style={{ fontWeight: '600', marginBottom: '0.4rem', display: 'block', fontSize: '0.85rem', color: dark ? 'white' : 'inherit' }}>Full Name *</label>
          <input 
            type="text" 
            name="fullName"
            className="input-control" 
            placeholder="John Doe" 
            required 
            value={formData.fullName}
            onChange={handleChange}
            style={{ padding: '0.75rem 1rem', borderRadius: '10px' }} 
          />
        </div>
        <div className="input-group" style={{ margin: 0 }}>
          <label style={{ fontWeight: '600', marginBottom: '0.4rem', display: 'block', fontSize: '0.85rem', color: dark ? 'white' : 'inherit' }}>Phone Number *</label>
          <input 
            type="tel" 
            name="phone"
            className="input-control" 
            placeholder="+91 XXXXX XXXXX" 
            required 
            value={formData.phone}
            onChange={handleChange}
            style={{ padding: '0.75rem 1rem', borderRadius: '10px' }} 
          />
        </div>
      </div>

      <div className="input-group" style={{ margin: 0 }}>
        <label style={{ fontWeight: '600', marginBottom: '0.4rem', display: 'block', fontSize: '0.85rem', color: dark ? 'white' : 'inherit' }}>Email Address</label>
        <input 
          type="email" 
          name="email"
          className="input-control" 
          placeholder="john@example.com" 
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '0.75rem 1rem', borderRadius: '10px' }} 
        />
      </div>

      <div className="input-group" style={{ margin: 0 }}>
        <label style={{ fontWeight: '600', marginBottom: '0.4rem', display: 'block', fontSize: '0.85rem', color: dark ? 'white' : 'inherit' }}>I am interested in...</label>
        <select 
          name="interest"
          className="input-control" 
          value={formData.interest}
          onChange={handleChange}
          style={{ padding: '0.75rem 1rem', borderRadius: '10px', cursor: 'pointer' }}
        >
          <option value="">Select an option</option>
          <option value="staffing">Staffing Solutions</option>
          <option value="payroll">Payroll Management</option>
          <option value="hrms">HRMS Software</option>
          <option value="job">Looking for a Job</option>
          <option value="other">General Inquiry</option>
        </select>
      </div>

      <div className="input-group" style={{ margin: 0 }}>
        <label style={{ fontWeight: '600', marginBottom: '0.4rem', display: 'block', fontSize: '0.85rem', color: dark ? 'white' : 'inherit' }}>Your Message *</label>
        <textarea 
          name="message"
          className="input-control" 
          rows={isModal ? "3" : "4"} 
          placeholder="How can we help you?" 
          required 
          value={formData.message}
          onChange={handleChange}
          style={{ padding: '0.75rem 1rem', borderRadius: '10px', resize: 'none' }} 
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="btn btn-primary" 
        style={{ padding: '0.9rem', fontSize: '1rem', borderRadius: '12px', marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}
      >
        {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
      </button>

      {isModal && (
        <button 
          type="button" 
          onClick={onCancel}
          style={{ 
            background: 'none', border: 'none', color: dark ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)', 
            fontSize: '0.85rem', cursor: 'pointer', marginTop: '0.5rem', textDecoration: 'underline' 
          }}
        >
          Not now, maybe later
        </button>
      )}
    </form>
  );
};

export default ContactForm;
