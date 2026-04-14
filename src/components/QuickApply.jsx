import React from 'react';
import { PhoneCall } from 'lucide-react';

const QuickApply = () => {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--bg-color) 0%, rgba(15, 98, 254, 0.05) 100%)' }}>
      <div className="container">
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', background: 'white', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Apna <span style={{ color: 'var(--primary)' }}>Resume</span> bheje aur job paaye</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>Jaldi placement ke liye directly humse contact karein.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1.3rem', fontWeight: '600' }}>
              <div style={{ background: 'rgba(15, 98, 254, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
                <MailIcon />
              </div>
              <a href="mailto:recruitment@nextgentalentstaffing.com" style={{ color: 'inherit' }}>
                recruitment@nextgentalentstaffing.com
              </a>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1.3rem', fontWeight: '600' }}>
              <div style={{ background: 'rgba(255, 131, 43, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--secondary)' }}>
                <PhoneCall size={28} />
              </div>
              <a href="tel:+918383061237" style={{ color: 'inherit' }}>+91 8383061237</a>
            </div>
          </div>
          
          <div className="mt-4">
            <a href="https://wa.me/918383061237" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              WhatsApp Par Contact Karein
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

export default QuickApply;
