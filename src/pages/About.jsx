import React from 'react';
import { Target, Compass, Briefcase, Users, PhoneCall, Play } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const About = () => {
  return (
    <div className="about-page">
      <PageBanner 
        title="About us" 
        subtitle="Empowering businesses with verified manpower and smart payroll solutions."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <div className="container section-padding">
        {/* Intro Section */}
        <div className="grid grid-2 intro-grid" style={{ gap: '4rem', marginBottom: '4rem', alignItems: 'flex-start' }}>
          {/* Left Column */}
          <div>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              background: 'rgba(255, 131, 43, 0.1)', 
              color: 'var(--secondary)', 
              padding: '0.35rem 1.2rem', 
              borderRadius: '50px', 
              marginBottom: '1.5rem', 
              fontWeight: '700', 
              fontSize: '0.8rem', 
              letterSpacing: '1.5px', 
              textTransform: 'uppercase' 
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--secondary)' }} />
              ABOUT US
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--secondary)' }} />
            </div>
            <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2', color: 'var(--text-main)', margin: 0 }}>
              Introduction To Best <br/><span className="text-gradient">Staffing Agency!</span>
            </h2>
          </div>

          {/* Right Column */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem', 
            alignItems: 'center', 
            height: '100%' 
          }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', margin: 0 }}>
              NextGen Talent Staffing And Payroll Management Pvt Ltd is a trusted manpower and HR solutions company based in New Delhi.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', margin: 0 }}>
              Our goal is to simplify hiring and payroll for businesses while creating genuine job opportunities across multiple sectors.
            </p>
          </div>
        </div>

        {/* Three Cards Row */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem', 
          marginBottom: '6rem' 
        }}>
          {/* Card 1 */}
          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'white' }}>
            <div style={{ background: 'var(--primary)', color: 'white', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(15, 98, 254, 0.3)' }}>
              <Briefcase size={24} />
            </div>
            <div>
              <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.1rem' }}>ITI & Diploma</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Qualified candidates ready for technical roles.</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'white' }}>
            <div style={{ background: '#1a1a1a', color: 'white', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(0,0,0,0.3)' }}>
              <Users size={24} />
            </div>
            <div>
              <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.1rem' }}>Skilled & Non-Skilled</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Reliable workforce for various industry needs.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'white' }}>
            <div style={{ background: 'var(--secondary)', color: 'white', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(255, 131, 43, 0.3)' }}>
              <PhoneCall size={24} />
            </div>
            <div>
              <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.1rem' }}>Telecallers & Sales</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Driven executives to boost your business growth.</p>
            </div>
          </div>
        </div>

        {/* Bottom Content Area */}
        <div className="bottom-content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Visual Collage representing the lower half of the image */}
          <div className="about-collage" style={{ position: 'relative', height: '400px', width: '100%' }}>
            <img 
              src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?auto=format&fit=crop&w=800&q=80" 
              alt="Team Work" 
              style={{ width: '85%', height: '85%', objectFit: 'cover', borderRadius: '24px', position: 'absolute', top: 0, left: 0, boxShadow: 'var(--shadow-md)' }} 
            />
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              right: 0, 
              width: '65%', 
              height: '60%', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-hover)', 
              border: '10px solid var(--bg-color)', 
              zIndex: 2 
            }}>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" 
                alt="Office Discussion" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button 
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    background: 'var(--secondary)', 
                    border: 'none', 
                    borderRadius: '50%', 
                    color: 'white', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    cursor: 'pointer', 
                    boxShadow: '0 8px 20px rgba(255,131,43,0.5)', 
                    transition: 'transform 0.3s' 
                  }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} 
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Play size={28} fill="currentColor" style={{ marginLeft: '4px' }} />
                </button>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(15, 98, 254, 0.1)', padding: '1rem', borderRadius: '16px', color: 'var(--primary)' }}>
                <Target size={32} />
              </div>
              <div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>Our Mission</h3>
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6', fontSize: '0.9rem' }}>
                  To provide fast, reliable, and cost-effective staffing and payroll solutions tailored to your business needs.
                </p>
              </div>
            </div>
            
            <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(255, 131, 43, 0.1)', padding: '1rem', borderRadius: '16px', color: 'var(--secondary)' }}>
                <Compass size={32} />
              </div>
              <div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>Our Vision</h3>
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6', fontSize: '0.9rem' }}>
                  To become India’s most trusted staffing partner and comprehensive HRMS platform for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .intro-grid { gap: 2rem !important; margin-bottom: 3rem !important; }
          .bottom-content-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-collage { height: 350px !important; }
        }
        @media (max-width: 768px) {
          .intro-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; margin-bottom: 2rem !important; }
          .about-collage { height: 280px !important; }
          .glass-card { padding: 1.2rem !important; }
          h2 { font-size: 1.8rem !important; }
          
          .about-page .container > div[style*="gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'"] {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            margin-bottom: 3rem !important;
          }
          
          .about-page .glass-card[style*="display: flex"] {
            padding: 1rem !important;
            gap: 1rem !important;
          }
          
          .about-page .glass-card[style*="display: flex"] > div:first-child {
            width: 45px !important;
            height: 45px !important;
          }
          
          .about-page .glass-card[style*="display: flex"] h4 {
            font-size: 1rem !important;
          }
          
          .about-page .glass-card[style*="display: flex"] p {
            font-size: 0.8rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .intro-grid { gap: 1rem !important; margin-bottom: 1.5rem !important; }
          .about-collage { height: 240px !important; }
          .glass-card { padding: 1rem !important; }
          h2 { font-size: 1.6rem !important; }
          
          .about-page div[style*="display: inline-flex"] {
            padding: 0.25rem 1rem !important;
            font-size: 0.7rem !important;
            margin-bottom: 1rem !important;
          }
          
          .about-page .glass-card[style*="display: flex"] {
            padding: 0.8rem !important;
            gap: 0.8rem !important;
          }
          
          .about-page .glass-card[style*="display: flex"] > div:first-child {
            width: 40px !important;
            height: 40px !important;
          }
          
          .about-page .glass-card[style*="display: flex"] h4 {
            font-size: 0.95rem !important;
            margin-bottom: 0.25rem !important;
          }
          
          .about-page .glass-card[style*="display: flex"] p {
            font-size: 0.75rem !important;
          }
          
          .about-page .bottom-content-grid .glass-card {
            padding: 1rem !important;
            gap: 1rem !important;
          }
          
          .about-page .bottom-content-grid .glass-card h3 {
            font-size: 1.1rem !important;
            margin-bottom: 0.4rem !important;
          }
          
          .about-page .bottom-content-grid .glass-card p {
            font-size: 0.85rem !important;
          }
        }
      `}} />
    </div>
  );
};

export default About;
