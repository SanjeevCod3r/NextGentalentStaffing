import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* CTA Banner Section */}
      <section style={{ background: '#fff0e5', padding: '4rem 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ maxWidth: '600px' }}>
              <p style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                Hassle-free hiring and job search
              </p>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.2' }}>
                Your Career Growth is Just a Click Away
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                Connect with top industries or find the perfect talent for your business. We simplify the recruitment lifecycle from start to finish.
              </p>
            </div>
            <div>
              <Link to="/jobs" className="btn btn-secondary" style={{ padding: '1.2rem 2.5rem', borderRadius: '50px', fontSize: '1.1rem', boxShadow: '0 10px 25px rgba(255, 131, 43, 0.3)' }}>
                Explore Opportunities <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Section */}
      <footer style={{ background: '#0a1d37', color: 'white', padding: '5rem 0 0 0' }}>
        <div className="container footer-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Column 1: Company Info */}
          <div>
            <img src="/asset/nextgentalentstaffing logo.png" alt="NextGen Logo" className="footer-logo" />
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.8', margin: 0 }}>
              To become India's most trusted staffing partner. We simplify hiring and payroll for businesses while creating genuine job opportunities for candidates.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '2rem', fontWeight: '700' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link to="/" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">Home</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">Contact</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">Our Services</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Support & Legal */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '2rem', fontWeight: '700' }}>Support & Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">Contact Us</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">FAQs</Link></li>
              <li><Link to="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '2rem', fontWeight: '700' }}>Contact</h4>
            <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={20} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>+91 8383061237</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Mail size={20} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>recruitment@nextgentalentstaffing.com</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={22} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.5' }}>Plot No. J-57, First Floor Ramesh Nagar, New Delhi – 110015</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '2rem 0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', margin: 0 }}>
              © {new Date().getFullYear()} NextGen Talent Staffing. All Rights Reserved.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" aria-label="Facebook" className="social-icon" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5H16V5c-.2 0-1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8v3h2.6v7h2.9z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44zM5.5 9.9h2.9V19H5.5V9.9zm4.7 0h2.8v1.3h.04c.39-.74 1.34-1.52 2.77-1.52 2.97 0 3.52 1.96 3.52 4.5V19h-2.9v-4.25c0-1.02-.02-2.33-1.42-2.33-1.42 0-1.64 1.11-1.64 2.25V19h-2.9V9.9z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3zm0 1.8A2.95 2.95 0 0 0 4.8 7.75v8.5a2.95 2.95 0 0 0 2.95 2.95h8.5a2.95 2.95 0 0 0 2.95-2.95v-8.5a2.95 2.95 0 0 0-2.95-2.95h-8.5zm8.9 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 1.8A2.2 2.2 0 1 0 12 14.2 2.2 2.2 0 0 0 12 9.8z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="social-icon" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21.2 8.2a2.7 2.7 0 0 0-1.9-1.9C17.6 5.8 12 5.8 12 5.8s-5.6 0-7.3.5a2.7 2.7 0 0 0-1.9 1.9c-.5 1.7-.5 3.8-.5 3.8s0 2.1.5 3.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.3.5 7.3.5s5.6 0 7.3-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-3.8.5-3.8s0-2.1-.5-3.8zM10.2 15.2V8.8l5.4 3.2-5.4 3.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .footer-wrapper section:first-child {
            padding: 3rem 0 !important;
          }

          .footer-wrapper section:first-child .container > div {
            text-align: center !important;
            justify-content: center !important;
          }

          .footer-wrapper section:first-child h2 {
            font-size: 1.8rem !important;
            margin-bottom: 1.5rem !important;
          }

          .footer-wrapper section:first-child p {
            font-size: 0.95rem !important;
          }

          .footer-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
            margin-bottom: 3rem !important;
          }

          .footer-container > div {
            text-align: center !important;
          }

          .footer-container h4 {
            font-size: 1.1rem !important;
            margin-bottom: 1.5rem !important;
          }

          .footer-container p {
            font-size: 0.9rem !important;
          }

          .footer-container ul {
            align-items: center !important;
          }

          .footer-container .contact-info {
            align-items: center !important;
            justify-content: center !important;
          }

          footer {
            padding: 3rem 0 0 0 !important;
          }

          .footer-wrapper > footer > div:last-child {
            padding: 1.5rem 0 !important;
          }

          .footer-wrapper > footer > div:last-child .container {
            flex-direction: column !important;
            text-align: center !important;
            gap: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .footer-wrapper section:first-child {
            padding: 2rem 0 !important;
          }

          .footer-wrapper section:first-child h2 {
            font-size: 1.5rem !important;
          }

          footer {
            padding: 2rem 0 0 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
