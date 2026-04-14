import React from 'react';

const Clients = () => {
  const logos = [
    { name: 'Logistics', icon: '🚚', delay: 0 },
    { name: 'Manufacturing', icon: '🏭', delay: 0.1 },
    { name: 'Retail', icon: '🛍️', delay: 0.2 },
    { name: 'Technology', icon: '💻', delay: 0.3 },
    { name: 'Healthcare', icon: '🏥', delay: 0.4 },
    { name: 'Automobile', icon: '🚗', delay: 0.5 },
    { name: 'Hospitality', icon: '🏨', delay: 0.6 },
    { name: 'Education', icon: '🎓', delay: 0.7 },
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', background: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
      {/* Decorative Background Elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(15, 98, 254, 0.03)', zIndex: 0 }}></div>

      <div className="container clients-container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 2fr)', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Content Area */}
        <div>
          <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            TRUSTED BY INDUSTRIES
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 1.5rem', lineHeight: 1.1 }}>
            Powering<br />
            <span style={{ color: 'var(--primary)' }}>India's</span> <span style={{ color: 'var(--secondary)' }}>Progress</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            From global logistics giants to local manufacturing units, we provide the verified manpower and smart payroll solutions that keep businesses moving forward.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
              ))}
            </div>
            <span style={{ color: 'var(--text-main)', fontWeight: '700', fontSize: '0.95rem' }}>500+ Businesses Served</span>
          </div>
        </div>

        {/* Right: Floating Grid Area */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
          gap: '1.5rem',
          position: 'relative'
        }}>
          {logos.map((logo, index) => (
            <div 
              key={index} 
              style={{ 
                background: 'white', 
                borderRadius: '20px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '2rem 1rem',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                border: '1px solid rgba(0,0,0,0.03)',
                cursor: 'default'
              }}
              className="industry-card-new"
            >
              <span style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{logo.icon}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .industry-card-new:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(15, 98, 254, 0.12);
          border-color: rgba(15, 98, 254, 0.2);
        }

        @media (max-width: 1024px) {
          .clients-container {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }

        @media (max-width: 768px) {
          .clients-container {
            gap: 2rem !important;
          }

          .clients-container > div:first-child {
            text-align: center;
          }

          .clients-container > div:first-child h2 {
            font-size: 2rem !important;
          }

          .clients-container > div:first-child p {
            font-size: 0.95rem !important;
            margin-bottom: 2rem !important;
          }

          .clients-container > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }

          .industry-card-new {
            padding: 1.5rem 0.8rem !important;
          }

          .industry-card-new span:first-child {
            font-size: 2rem !important;
            margin-bottom: 8px !important;
          }

          .industry-card-new span:last-child {
            font-size: 0.7rem !important;
          }
        }

        @media (max-width: 480px) {
          .clients-container > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.8rem !important;
          }

          .industry-card-new {
            padding: 1rem 0.4rem !important;
          }

          .industry-card-new span:first-child {
            font-size: 1.6rem !important;
          }

          .industry-card-new span:last-child {
            font-size: 0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;
