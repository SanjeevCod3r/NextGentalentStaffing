import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Users, Info, MessageSquare } from 'lucide-react';

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
              <li><Link to="/jobs" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">Jobs</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">Our Services</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Support & Legal */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '2rem', fontWeight: '700' }}>Support & Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">Contact Us</Link></li>
              <li><Link to="#" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">FAQs</Link></li>
              <li><Link to="#" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">Privacy Policy</Link></li>
              <li><Link to="#" style={{ color: 'rgba(255,255,255,0.7)', transition: 'var(--transition)' }} className="footer-link">Terms & Conditions</Link></li>
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
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>FB</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>LN</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>IG</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>YT</span>
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
