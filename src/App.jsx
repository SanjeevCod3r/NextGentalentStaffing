import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import Loader from './components/Loader';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

import './index.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Loader />
        <Navbar />
        <EnquiryModal />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <a
          href="https://wa.me/918383061237"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-floating-btn"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
