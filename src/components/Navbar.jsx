import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css'; // We'll add some specific scoping here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.classList.add('drawer-open');
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.classList.remove('drawer-open');
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.classList.remove('drawer-open');
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`navbar ${isOpen ? 'drawer-open' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="logo-container" onClick={closeMenu}>
            <img src="/asset/nextgentalentstaffing logo.png" alt="NextGen Talent Staffing" className="nav-logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="nav-links desktop-only">
            <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link>
            <Link to="/services" className={`nav-link ${isActive('/services')}`}>Services</Link>
            <Link to="/employer" className={`nav-link ${isActive('/employer')}`}>For Employers</Link>
            <Link to="/jobs" className={`nav-link ${isActive('/jobs')}`}>Find Jobs</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
          </div>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div className="drawer-backdrop" onClick={closeMenu}></div>
            
            {/* Drawer */}
            <div className="mobile-drawer">
              <div className="drawer-header">
                <img src="/asset/nextgentalentstaffing logo.png" alt="NextGen Talent Staffing" className="drawer-logo" />
                <button className="drawer-close" onClick={closeMenu}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="drawer-content">
                <div className="drawer-nav">
                  <Link to="/" className={`drawer-link ${isActive('/')}`} onClick={closeMenu}>
                    <span className="drawer-icon">🏠</span>
                    <span>Home</span>
                  </Link>
                  <Link to="/about" className={`drawer-link ${isActive('/about')}`} onClick={closeMenu}>
                    <span className="drawer-icon">👥</span>
                    <span>About Us</span>
                  </Link>
                  <Link to="/services" className={`drawer-link ${isActive('/services')}`} onClick={closeMenu}>
                    <span className="drawer-icon">⚙️</span>
                    <span>Services</span>
                  </Link>
                  <Link to="/employer" className={`drawer-link ${isActive('/employer')}`} onClick={closeMenu}>
                    <span className="drawer-icon">🏢</span>
                    <span>For Employers</span>
                  </Link>
                  <Link to="/jobs" className={`drawer-link ${isActive('/jobs')}`} onClick={closeMenu}>
                    <span className="drawer-icon">💼</span>
                    <span>Find Jobs</span>
                  </Link>
                  <Link to="/contact" className={`drawer-link ${isActive('/contact')}`} onClick={closeMenu}>
                    <span className="drawer-icon">📞</span>
                    <span>Contact</span>
                  </Link>
                </div>
                
                <div className="drawer-footer">
                  <div className="drawer-contact">
                    <p>Need help? Call us</p>
                    <a href="tel:+918383061237" className="drawer-phone">+91 8383061237</a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
