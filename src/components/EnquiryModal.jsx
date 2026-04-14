import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

const EnquiryModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the modal has already been shown in this session
    const hasShown = sessionStorage.getItem('enquiry_modal_shown');
    
    if (!hasShown) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('enquiry_modal_shown', 'true');
      }, 3000); // 3 seconds delay
      
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            style={{
              position: 'fixed',
              left: '50%',
              top: '50%',
              translateX: '-50%',
              translateY: '-50%',
              width: '100%',
              maxWidth: '500px',
              background: 'white',
              borderRadius: '24px',
              padding: '2rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              zIndex: 10000,
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(0,0,0,0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
            >
              <X size={18} />
            </button>

            <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
              <span style={{ 
                color: 'var(--secondary)', 
                fontWeight: '800', 
                fontSize: '0.75rem', 
                letterSpacing: '2px', 
                textTransform: 'uppercase' 
              }}>
                Enquiry Now
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0.3rem 0 0.5rem' }}>
                How Can We <span className="text-gradient">Help You?</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                Fill out this quick form and our experts will get back to you shortly.
              </p>
            </div>

            <ContactForm isModal onCancel={closeModal} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
