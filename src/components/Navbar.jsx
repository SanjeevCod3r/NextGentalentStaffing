import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css'; // We'll add some specific scoping here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <>
      <nav className="navbar">
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu glass-card">
            <Link to="/" className={`mobile-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
            <Link to="/about" className={`mobile-link ${isActive('/about')}`} onClick={closeMenu}>About Us</Link>
            <Link to="/services" className={`mobile-link ${isActive('/services')}`} onClick={closeMenu}>Services</Link>
            <Link to="/employer" className={`mobile-link ${isActive('/employer')}`} onClick={closeMenu}>For Employers</Link>
            <Link to="/jobs" className={`mobile-link ${isActive('/jobs')}`} onClick={closeMenu}>Find Jobs</Link>
            <Link to="/contact" className={`mobile-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
